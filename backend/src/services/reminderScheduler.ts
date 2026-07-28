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
    // Query pending reminders where reminderDateTime in UTC is due and reminderSent is not true
    const pendingTasks = await Objective.find({
      reminderSent: { $ne: true },
      reminderDateTime: { $lte: now }
    }).populate('user');

    if (pendingTasks.length === 0) return;

    console.log(`⏰ [Reminder Scheduler] Found ${pendingTasks.length} pending reminder(s) to process at ${now.toISOString()}.`);

    for (const task of pendingTasks) {
      try {
        const userObj = task.user as any;
        
        // Send email reminder if user has an email
        if (userObj && userObj.email) {
          console.log(`📧 [Reminder Scheduler] Dispatching reminder email to ${userObj.email} for task: "${task.title}"`);
          await sendTaskReminderEmail(
            userObj.email,
            userObj.name || 'User',
            task.title,
            task.scheduledDate,
            task.scheduledTime,
            task.priority
          );
        }

        // Mark as sent to prevent duplicate reminders
        task.reminderSent = true;
        await task.save();
        console.log(`✅ [Reminder Scheduler] Successfully sent reminder email for task ID: ${task._id}`);
      } catch (err: any) {
        console.error(`❌ [Reminder Scheduler Error] Failed processing task ID ${task._id}:`, err.message || err);
        task.reminderSent = true;
        await task.save();
      }
    }
  } catch (error: any) {
    console.error('❌ [Reminder Scheduler Loop Error]:', error.message || error);
  }
};

/**
 * Initialize Node-Cron Scheduler running every 1 minute
 */
export const initReminderScheduler = () => {
  console.log('⏰ [Reminder Scheduler] Initializing background cron job (runs every 1 minute)...');
  
  // Run initial recovery check on server startup
  processPendingReminders();

  // Run cron task every 1 minute
  cron.schedule('* * * * *', () => {
    processPendingReminders();
  });
};
