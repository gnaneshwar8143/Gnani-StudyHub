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

    // Immediately trigger background check for due reminders
    processPendingReminders();

    res.status(201).json(savedObjective);
  } catch (error: any) {
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

    const updatedObjective = await Objective.findOneAndUpdate(
      { _id: id, user: req.user?.id },
      { $set: updates },
      { new: true, runValidators: true }
    );

    // Immediately trigger background check for due reminders
    processPendingReminders();

    res.json(updatedObjective);
  } catch (error: any) {
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
