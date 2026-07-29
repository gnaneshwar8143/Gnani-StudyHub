import cron from 'node-cron';
import Objective, { IObjective } from '../models/Objective';
import { User } from '../models/User';
import { sendTaskReminderEmail } from './emailService';

/**
 * Calculate the exact reminder Date object in UTC based on task schedule, reminder type, and user timezone offset.
 * @param scheduledDate Date string in format YYYY-MM-DD
 * @param scheduledTime Time string in format HH:mm
 * @param reminderType Option string (e.g. 'At Task Time', '10 Minutes Before')
 * @param timezoneOffset Minutes offset from JS Date.prototype.getTimezoneOffset() (e.g., -330 for UTC+5:30)
 */
export const calculateReminderDateTime = (
  scheduledDate?: string,
  scheduledTime?: string,
  reminderType?: string,
  timezoneOffset?: number
): Date | undefined => {
  if (!scheduledDate) return undefined;

  const dateParts = scheduledDate.split('-');
  if (dateParts.length < 3) return undefined;

  const year = Number(dateParts[0]);
  const month = Number(dateParts[1]);
  const day = Number(dateParts[2]);

  if (isNaN(year) || isNaN(month) || isNaN(day) || !year || !month || !day) return undefined;

  const timeStr = scheduledTime || '09:00';
  const timeParts = timeStr.split(':');
  const hours = Number(timeParts[0]) || 0;
  const minutes = Number(timeParts[1]) || 0;

  // Use provided timezoneOffset (e.g. -330 for IST) or 0 if not provided
  const offsetInMinutes = typeof timezoneOffset === 'number' ? timezoneOffset : 0;

  // Convert local date/time + timezoneOffset to exact UTC Date
  const localMinutes = hours * 60 + minutes;
  const utcMinutes = localMinutes + offsetInMinutes;

  const targetUtcDate = new Date(Date.UTC(year, month - 1, day, 0, utcMinutes, 0));

  const type = reminderType || 'At Task Time';
  let reminderUtcTime = targetUtcDate.getTime();

  switch (type) {
    case '10 Minutes Before':
      reminderUtcTime -= 10 * 60 * 1000;
      break;
    case '30 Minutes Before':
      reminderUtcTime -= 30 * 60 * 1000;
      break;
    case '1 Hour Before':
      reminderUtcTime -= 60 * 60 * 1000;
      break;
    case '2 Hours Before':
      reminderUtcTime -= 2 * 60 * 60 * 1000;
      break;
    case 'Morning (8:00 AM)': {
      const morningUtcMinutes = 8 * 60 + offsetInMinutes;
      reminderUtcTime = new Date(Date.UTC(year, month - 1, day, 0, morningUtcMinutes, 0)).getTime();
      break;
    }
    case '1 Day Before':
      reminderUtcTime -= 24 * 60 * 60 * 1000;
      break;
    case 'At Task Time':
    default:
      break;
  }

  const finalReminderDate = new Date(reminderUtcTime);

  // If the calculated reminder time in UTC has ALREADY passed, return current UTC time so overdue tasks trigger immediately
  if (finalReminderDate.getTime() <= Date.now()) {
    return new Date();
  }

  return finalReminderDate;
};

/**
 * Process pending reminders from MongoDB database by comparing UTC times
 */
export const processPendingReminders = async () => {
  try {
    const now = new Date();
    console.log(`\n🔍 [Reminder Check Tick] Current Server Environment:`);
    console.log(`- Current server timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.TZ || 'UTC'}`);
    console.log(`- Current server UTC time: ${now.toISOString()}`);
    console.log(`- Current server local time: ${now.toString()}`);

    // Audit all un-sent tasks in MongoDB
    const unSentTasks = await Objective.find({ reminderSent: { $ne: true } }).populate('user');
    console.log(`📋 [DB Audit] Total un-sent tasks in database (reminderSent != true): ${unSentTasks.length}`);

    for (const task of unSentTasks) {
      const remDate = task.reminderDateTime ? new Date(task.reminderDateTime) : undefined;
      const remMs = remDate ? remDate.getTime() : undefined;
      const nowMs = now.getTime();
      const diffMs = remMs !== undefined ? remMs - nowMs : undefined;
      const diffSec = diffMs !== undefined ? diffMs / 1000 : undefined;
      const isDue = remMs !== undefined && remMs <= nowMs;
      
      const offsetMin = typeof task.timezoneOffset === 'number' ? task.timezoneOffset : 0;
      // Convert stored UTC to User Local Time string for audit logging
      const userLocalTime = remDate ? new Date(remDate.getTime() - offsetMin * 60 * 1000).toISOString().replace('Z', ` (Offset ${offsetMin}m)`) : 'N/A';

      let decision = 'SKIP';
      let reason = 'Future reminder';

      if (!task.reminderDateTime) {
        reason = 'Missing reminderDateTime';
      } else if (remMs === undefined || isNaN(remMs)) {
        reason = 'Invalid reminderDateTime';
      } else if (task.reminderSent) {
        reason = 'reminderSent already true';
      } else if (isDue) {
        decision = 'SEND';
        reason = 'Reminder due now or overdue';
      }

      console.log('==============================');
      console.log(`Task ID: ${task._id}`);
      console.log(`Title: "${task.title}"`);
      console.log(`dueDate: ${task.dueDate ? new Date(task.dueDate).toISOString() : 'N/A'}`);
      console.log(`scheduledDate: ${task.scheduledDate || 'N/A'}`);
      console.log(`scheduledTime: ${task.scheduledTime || 'N/A'}`);
      console.log(`reminderType: ${task.reminderType || 'N/A'}`);
      console.log(`timezoneOffset: ${task.timezoneOffset !== undefined ? task.timezoneOffset : 'N/A'}`);
      console.log(`Stored reminderDateTime (UTC): ${remDate ? remDate.toISOString() : 'MISSING / UNDEFINED'}`);
      console.log(`Current UTC Time: ${now.toISOString()}`);
      console.log(`Milliseconds Difference: ${diffMs !== undefined ? diffMs : 'N/A'}`);
      console.log(`Seconds Difference: ${diffSec !== undefined ? diffSec : 'N/A'}`);
      console.log(`Is reminderDateTime <= Date.now() ?: ${isDue ? 'YES (TRUE)' : 'NO (FALSE)'}`);
      console.log(`Decision: ${decision}`);
      console.log(`Reason: ${reason}`);

      if (decision === 'SKIP' && remDate) {
        console.log(`Expected send time (UTC): ${remDate.toISOString()}`);
        console.log(`Expected send time (User Local Time): ${userLocalTime}`);
      }
      console.log('==============================\n');

      // Dispatch email ONLY if decision is SEND
      if (decision === 'SEND') {
        const userObj = task.user as any;
        const recipientEmail = userObj?.email;

        if (recipientEmail) {
          try {
            console.log(`📧 [Sending Email] Dispatching reminder email to ${recipientEmail} for Task ID: ${task._id}`);
          
            const result = await sendTaskReminderEmail(
              recipientEmail,
              userObj.name || 'User',
              task.title,
              task.scheduledDate,
              task.scheduledTime,
              task.priority
            );
            
            console.log(`✅ [Email Success] Email sent successfully to ${recipientEmail}. Response:`, JSON.stringify(result || {}));
          } catch (err: any) {
            console.error('==================================================');
            console.error(`❌ [Email Delivery Failure Audit] Task ID: ${task._id}`);
            console.error(`- Recipient Email: ${(task.user as any)?.email || 'N/A'}`);
            console.error(`- Email Subject: Reminder: Complete Your Task`);
            console.error(`- Brevo API Response Data:`, err.response?.data ? JSON.stringify(err.response.data) : 'N/A');
            console.error(`- SMTP Transporter Response:`, err.response || 'N/A');
            console.error(`- Nodemailer Error Stack:`, err.stack || err.message || err);
            console.error('==================================================\n');
          }
        } else {
          console.warn(`⚠️ [Email Warning] Task ID ${task._id} has no associated user email. Skipping email dispatch.`);
        }

        // Mark as sent to prevent duplicate reminders
        task.reminderSent = true;
        await task.save();
        console.log(`💾 [Update Success] Set reminderSent=true for Task ID: ${task._id}`);
      }
    }
  } catch (error: any) {
    console.error('❌ [Reminder Scheduler Loop Error]:', error.stack || error.message || error);
  }
};

/**
 * Initialize Node-Cron Scheduler running every 1 minute
 */
export const initReminderScheduler = () => {
  console.log('🚀 [Reminder Scheduler] Service started successfully. Cron job running every 1 minute.');
  
  // Run initial recovery check on server startup
  processPendingReminders();

  // Run cron task every 1 minute
  cron.schedule('* * * * *', () => {
    processPendingReminders();
  });
};
