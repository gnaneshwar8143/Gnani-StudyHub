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
  const type = reminderType || 'At Task Time';

  // If date is omitted or set to At Task Time without specific future date, default to now
  if (!scheduledDate) {
    return new Date();
  }

  const todayStr = new Date().toISOString().split('T')[0] || '';

  // If task is scheduled for today or earlier and reminder is "At Task Time", trigger immediately
  if (type === 'At Task Time' && scheduledDate <= todayStr) {
    return new Date();
  }

  const timeStr = scheduledTime || '09:00';
  const baseDate = new Date(`${scheduledDate}T${timeStr}:00`);
  if (isNaN(baseDate.getTime())) {
    return new Date();
  }

  let targetDate: Date;
  switch (type) {
    case '10 Minutes Before':
      targetDate = new Date(baseDate.getTime() - 10 * 60 * 1000);
      break;
    case '30 Minutes Before':
      targetDate = new Date(baseDate.getTime() - 30 * 60 * 1000);
      break;
    case '1 Hour Before':
      targetDate = new Date(baseDate.getTime() - 60 * 60 * 1000);
      break;
    case '2 Hours Before':
      targetDate = new Date(baseDate.getTime() - 2 * 60 * 60 * 1000);
      break;
    case 'Morning (8:00 AM)':
      targetDate = new Date(`${scheduledDate}T08:00:00`);
      break;
    case '1 Day Before':
      targetDate = new Date(baseDate.getTime() - 24 * 60 * 60 * 1000);
      break;
    case 'At Task Time':
    default:
      targetDate = baseDate;
      break;
  }

  // If calculated reminder date is in the past or now, return now so it triggers immediately
  if (targetDate.getTime() <= Date.now()) {
    return new Date();
  }

  return targetDate;
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
          console.log(`📧 [Reminder Scheduler] Sending reminder email to ${userObj.email} for task: "${task.title}"`);
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
