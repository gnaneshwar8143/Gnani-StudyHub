import { Request, Response } from 'express';
import Objective from '../models/Objective';
import { calculateReminderDateTime, processPendingReminders } from '../services/reminderScheduler';

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    [key: string]: any;
  };
}

export const getObjectives = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const objectives = await Objective.find({ user: req.user?.id }).sort({ createdAt: -1 });
    res.json(objectives);
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to fetch objectives', error: error.message });
  }
};

export const createObjective = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { 
      title, 
      description, 
      taskType, 
      calendarType, 
      priority, 
      status, 
      dueDate, 
      scheduledDate, 
      scheduledTime,
      reminderType,
      timezoneOffset
    } = req.body;

    const taskDateStr = scheduledDate || (dueDate ? new Date(dueDate).toISOString().split('T')[0] : undefined);
    const offset = typeof timezoneOffset === 'number' ? timezoneOffset : undefined;

    const calculatedReminderDateTime = calculateReminderDateTime(
      taskDateStr,
      scheduledTime,
      reminderType,
      offset
    );

    console.log('\n==================================================');
    console.log('📝 [Task Creation Audit] Inputs before saving:');
    console.log(`- Title: "${title}"`);
    console.log(`- scheduledDate: ${scheduledDate || 'undefined'}`);
    console.log(`- dueDate: ${dueDate || 'undefined'}`);
    console.log(`- Resolved taskDateStr: ${taskDateStr || 'undefined'}`);
    console.log(`- scheduledTime: ${scheduledTime || 'undefined'}`);
    console.log(`- reminderType: ${reminderType || 'At Task Time'}`);
    console.log(`- timezoneOffset: ${offset !== undefined ? offset : 'undefined (default 0)'}`);
    console.log(`- Calculated reminderDateTime (UTC): ${calculatedReminderDateTime ? calculatedReminderDateTime.toISOString() : 'UNDEFINED / NULL'}`);

    if (!calculatedReminderDateTime) {
      console.warn('⚠️ [Audit Warning] reminderDateTime was NOT assigned! Reason:', 
        !taskDateStr ? 'Neither scheduledDate nor dueDate was provided in request body.' : 'Task date string parsing failed.'
      );
    }

    const objective = new Objective({
      user: req.user?.id,
      title,
      description,
      taskType: taskType || 'goal',
      calendarType: calendarType || 'Due Date',
      priority: priority || 'Medium',
      status: status || 'To Do',
      dueDate,
      scheduledDate: taskDateStr,
      scheduledTime,
      timezoneOffset: offset,
      reminderType: reminderType || 'At Task Time',
      reminderDateTime: calculatedReminderDateTime,
      reminderSent: false
    });

    const savedObjective = await objective.save();

    // Immediately reload from MongoDB to audit exact persisted values
    const reloadedDoc = await Objective.findById(savedObjective._id);

    console.log('💾 [MongoDB Save Audit] Persisted document in MongoDB:');
    console.log(`- ID: ${reloadedDoc?._id}`);
    console.log(`- reminderType: ${reloadedDoc?.reminderType}`);
    console.log(`- reminderDateTime (UTC): ${reloadedDoc?.reminderDateTime ? new Date(reloadedDoc.reminderDateTime).toISOString() : 'UNDEFINED / NULL'}`);
    console.log(`- reminderSent: ${reloadedDoc?.reminderSent}`);
    console.log('==================================================\n');

    if (calculatedReminderDateTime && reloadedDoc?.reminderDateTime) {
      const calcMs = calculatedReminderDateTime.getTime();
      const savedMs = new Date(reloadedDoc.reminderDateTime).getTime();
      if (calcMs !== savedMs) {
        console.error(`❌ [Audit Mismatch] Calculated UTC (${calculatedReminderDateTime.toISOString()}) differs from Saved UTC (${new Date(reloadedDoc.reminderDateTime).toISOString()})`);
      } else {
        console.log('✅ [Audit Success] Persisted reminderDateTime matches calculated UTC exactly.');
      }
    }

    // Immediately trigger background check for due reminders
    processPendingReminders();

    res.status(201).json(savedObjective);
  } catch (error: any) {
    console.error('❌ [Create Objective Audit Error]:', error.stack || error.message || error);
    res.status(400).json({ message: 'Failed to create objective', error: error.message });
  }
};

export const updateObjective = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    
    // Find objective that belongs to this user
    const objective = await Objective.findOne({ _id: id, user: req.user?.id });
    
    if (!objective) {
      return res.status(404).json({ message: 'Objective not found or unauthorized' });
    }

    const updates = req.body;
    delete updates.user;

    const taskDateStr = updates.scheduledDate || objective.scheduledDate || (updates.dueDate ? new Date(updates.dueDate).toISOString().split('T')[0] : undefined);
    const timeStr = updates.scheduledTime || objective.scheduledTime;
    const remType = updates.reminderType || objective.reminderType;
    const offset = typeof updates.timezoneOffset === 'number' ? updates.timezoneOffset : objective.timezoneOffset;

    if (updates.scheduledDate || updates.scheduledTime || updates.reminderType || updates.timezoneOffset) {
      updates.reminderDateTime = calculateReminderDateTime(
        taskDateStr,
        timeStr,
        remType,
        offset
      );
      if (updates.reminderDateTime && updates.reminderDateTime > new Date()) {
        updates.reminderSent = false;
      }
    }

    console.log('\n==================================================');
    console.log(`📝 [Task Update Audit] Updating Task ID: ${id}`);
    console.log(`- Resolved taskDateStr: ${taskDateStr || 'undefined'}`);
    console.log(`- timeStr: ${timeStr || 'undefined'}`);
    console.log(`- remType: ${remType || 'At Task Time'}`);
    console.log(`- offset: ${offset !== undefined ? offset : 'undefined'}`);
    console.log(`- Updated reminderDateTime (UTC): ${updates.reminderDateTime ? updates.reminderDateTime.toISOString() : 'UNCHANGED'}`);

    const updatedObjective = await Objective.findOneAndUpdate(
      { _id: id, user: req.user?.id },
      { $set: updates },
      { new: true, runValidators: true }
    );

    console.log('💾 [MongoDB Update Audit] Persisted document after update:');
    console.log(`- ID: ${updatedObjective?._id}`);
    console.log(`- reminderType: ${updatedObjective?.reminderType}`);
    console.log(`- reminderDateTime (UTC): ${updatedObjective?.reminderDateTime ? new Date(updatedObjective.reminderDateTime).toISOString() : 'UNDEFINED / NULL'}`);
    console.log(`- reminderSent: ${updatedObjective?.reminderSent}`);
    console.log('==================================================\n');

    // Immediately trigger background check for due reminders
    processPendingReminders();

    res.json(updatedObjective);
  } catch (error: any) {
    console.error('❌ [Update Objective Audit Error]:', error.stack || error.message || error);
    res.status(400).json({ message: 'Failed to update objective', error: error.message });
  }
};

export const deleteObjective = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    
    const deletedObjective = await Objective.findOneAndDelete({ _id: id, user: req.user?.id });
    
    if (!deletedObjective) {
      return res.status(404).json({ message: 'Objective not found or unauthorized' });
    }

    res.json({ message: 'Objective deleted successfully', id });
  } catch (error: any) {
    res.status(400).json({ message: 'Failed to delete objective', error: error.message });
  }
};

export const create2MinTestReminder = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const timezoneOffset = typeof req.body?.timezoneOffset === 'number' 
      ? req.body.timezoneOffset 
      : (typeof req.query?.timezoneOffset === 'string' ? Number(req.query.timezoneOffset) : -330);

    // Calculate 2 minutes in the future local time
    const localNowMs = Date.now() - (timezoneOffset * 60 * 1000);
    const localFutureDateObj = new Date(localNowMs + 2 * 60 * 1000);

    const year = localFutureDateObj.getUTCFullYear();
    const month = String(localFutureDateObj.getUTCMonth() + 1).padStart(2, '0');
    const day = String(localFutureDateObj.getUTCDate()).padStart(2, '0');
    const hours = String(localFutureDateObj.getUTCHours()).padStart(2, '0');
    const minutes = String(localFutureDateObj.getUTCMinutes()).padStart(2, '0');

    const scheduledDate = `${year}-${month}-${day}`;
    const scheduledTime = `${hours}:${minutes}`;

    const calculatedReminderDateTime = calculateReminderDateTime(
      scheduledDate,
      scheduledTime,
      'At Task Time',
      timezoneOffset
    );

    const objective = new Objective({
      user: req.user?.id,
      title: `Test 2-Min Reminder (${scheduledTime})`,
      priority: 'High',
      status: 'To Do',
      taskType: 'task',
      calendarType: 'Reminder',
      scheduledDate,
      scheduledTime,
      timezoneOffset,
      reminderType: 'At Task Time',
      reminderDateTime: calculatedReminderDateTime,
      reminderSent: false
    });

    const saved = await objective.save();

    const nowUtc = new Date();
    const remUtc = saved.reminderDateTime ? new Date(saved.reminderDateTime) : undefined;
    const diffSec = remUtc ? (remUtc.getTime() - nowUtc.getTime()) / 1000 : 0;

    console.log('\n==================================================');
    console.log('🧪 [2-Min Reminder Diagnostic Task Created]');
    console.log(`- Task ID: ${saved._id}`);
    console.log(`- Scheduled Date (Local): ${scheduledDate}`);
    console.log(`- Scheduled Time (Local): ${scheduledTime}`);
    console.log(`- Current UTC: ${nowUtc.toISOString()}`);
    console.log(`- Stored reminderDateTime (UTC): ${remUtc ? remUtc.toISOString() : 'N/A'}`);
    console.log(`- Difference in seconds until reminder: ${diffSec.toFixed(1)}s`);
    console.log('==================================================\n');

    res.status(201).json({
      message: '2-Minute Test Reminder created successfully!',
      task: saved,
      diagnostics: {
        currentUTC: nowUtc.toISOString(),
        storedReminderDateTimeUTC: remUtc ? remUtc.toISOString() : null,
        differenceInSeconds: Number(diffSec.toFixed(1))
      }
    });
  } catch (error: any) {
    console.error('❌ [2-Min Test Creation Error]:', error.stack || error.message);
    res.status(400).json({ message: 'Failed to create test reminder', error: error.message });
  }
};
