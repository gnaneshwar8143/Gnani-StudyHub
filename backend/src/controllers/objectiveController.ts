import { Request, Response } from 'express';
import Objective from '../models/Objective';

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
    const { title, description, taskType, calendarType, priority, status, dueDate, scheduledDate, scheduledTime } = req.body;

    const objective = new Objective({
      user: req.user?.id,
      title,
      description,
      taskType: taskType || 'goal',
      calendarType: calendarType || 'Due Date',
      priority: priority || 'Medium',
      status: status || 'To Do',
      dueDate,
      scheduledDate,
      scheduledTime
    });

    const savedObjective = await objective.save();
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
    
    // Do not allow updating the user field
    delete updates.user;

    const updatedObjective = await Objective.findOneAndUpdate(
      { _id: id, user: req.user?.id },
      { $set: updates },
      { new: true, runValidators: true }
    );

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
