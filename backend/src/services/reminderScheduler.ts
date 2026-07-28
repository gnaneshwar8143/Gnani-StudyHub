import cron from 'node-cron';
import Objective, { IObjective } from '../models/Objective';
import { User } from '../models/User';
import { sendTaskReminderEmail } from './emailService';

/**
 * Calculate the exact reminder Date object based on task schedule and reminder type
 */
export const calculateReminderDateTime = (
  scheduledDate?: string,
  scheduledTime?: string,
  reminderType?: string
): Date | undefined => {
  if (!scheduledDate) return undefined;

  const timeStr = scheduledTime || '09:00';
  const baseDate = new Date(`${scheduledDate}T${timeStr}:00`);
  if (isNaN(baseDate.getTime())) return undefined;

  const type = reminderType || 'At Task Time';

  switch (type) {
    case '10 Minutes Before':
      return new Date(baseDate.getTime() - 10 * 60 * 1000);
    case '30 Minutes Before':
      return new Date(baseDate.getTime() - 30 * 60 * 1000);
    case '1 Hour Before':
      return new Date(baseDate.getTime() - 60 * 60 * 1000);
    case '2 Hours Before':
      return new Date(baseDate.getTime() - 2 * 60 * 60 * 1000);
    case 'Morning (8:00 AM)':
      return new Date(`${scheduledDate}T08:00:00`);
    case '1 Day Before':
      return new Date(baseDate.getTime() - 24 * 60 * 60 * 1000);
    case 'At Task Time':
    default:
      return baseDate;
  }
};

/**
 * Process pending reminders from MongoDB database
 */
export const processPendingReminders = async () => {
  try {
    const now = new Date();
    // Query pending reminders where reminderDateTime is due and reminderSent is not true
    const pendingTasks = await Objective.find({
      reminderSent: { $ne: true },
      reminderDateTime: { $lte: now }
    }).populate('user');

    if (pendingTasks.length === 0) return;

    console.log(`⏰ [Reminder Scheduler] Found ${pendingTasks.length} pending reminder(s) to process.`);

    for (const task of pendingTasks) {
      try {
        const userObj = task.user as any;
        
        // Send email reminder if user has an email
        if (userObj && userObj.email) {
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
