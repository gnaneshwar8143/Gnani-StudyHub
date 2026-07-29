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
    console.log(`\n🔍 [Reminder Check] Running tick at ${now.toISOString()}`);
    console.log(`📡 [MongoDB Query] Objective.find({ reminderSent: { $ne: true }, reminderDateTime: { $lte: new Date("${now.toISOString()}") } })`);

    // Query pending reminders where reminderDateTime in UTC is due and reminderSent is not true
    const pendingTasks = await Objective.find({
      reminderSent: { $ne: true },
      reminderDateTime: { $lte: now }
    }).populate('user');

    console.log(`📋 [Reminder Check] Pending reminders found: ${pendingTasks.length}`);

    if (pendingTasks.length === 0) {
      // Diagnostic logging for why no reminders matched
      try {
        const total = await Objective.countDocuments();
        const sent = await Objective.countDocuments({ reminderSent: true });
        const future = await Objective.countDocuments({ reminderSent: { $ne: true }, reminderDateTime: { $gt: now } });
        const noDate = await Objective.countDocuments({ reminderDateTime: { $exists: false } });
        console.log(`📊 [Diagnostic] DB Totals -> Total: ${total} | Sent: ${sent} | Future Due: ${future} | No Reminder Date: ${noDate}`);
      } catch (diagErr: any) {
        console.warn('⚠️ [Diagnostic Warning] Could not fetch DB diagnostics:', diagErr.message);
      }
      return;
    }

    for (const task of pendingTasks) {
      try {
        const userObj = task.user as any;
        const recipientEmail = userObj?.email;

        console.log(`--------------------------------------------------`);
        console.log(`📌 Objective ID: ${task._id}`);
        console.log(`📝 Title: "${task.title}"`);
        console.log(`⚙️ reminderType: ${task.reminderType || 'At Task Time'}`);
        console.log(`⏰ reminderDateTime (UTC): ${task.reminderDateTime ? new Date(task.reminderDateTime).toISOString() : 'N/A'}`);
        console.log(`🕒 Current UTC Time: ${now.toISOString()}`);
        console.log(`👤 Recipient Email: ${recipientEmail || 'MISSING'}`);

        if (recipientEmail) {
          console.log(`📧 [Sending Email] Dispatching reminder email to ${recipientEmail}...`);
          
          await sendTaskReminderEmail(
            recipientEmail,
            userObj.name || 'User',
            task.title,
            task.scheduledDate,
            task.scheduledTime,
            task.priority
          );
          
          console.log(`✅ [Email Success] Email sent successfully to ${recipientEmail}`);
        } else {
          console.warn(`⚠️ [Email Warning] Task ID ${task._id} has no associated user email. Skipping email dispatch.`);
        }

        // Mark as sent to prevent duplicate reminders
        task.reminderSent = true;
        await task.save();
        console.log(`💾 [Update Success] Set reminderSent=true for Task ID: ${task._id}`);
      } catch (err: any) {
        console.error(`❌ [Reminder Email Failed] Error processing Task ID ${task._id}:`, err.stack || err.message || err);
        // Mark as sent so single failing task doesn't block the loop forever
        task.reminderSent = true;
        await task.save();
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
