import { Request, Response } from 'express';
import Habit from '../models/Habit';

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    [key: string]: any;
  };
}

export const getHabits = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const habits = await Habit.find({ user: req.user?.id }).sort({ createdAt: -1 });
    res.json(habits);
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to retrieve habits', error: error.message });
  }
};

export const createHabit = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { name, category, goal, targetStreak } = req.body;
    
    const newHabit = new Habit({
      user: req.user?.id,
      name,
      category: category || 'General',
      goal: goal || 'Daily',
      targetStreak: targetStreak || 30
    });
    
    const savedHabit = await newHabit.save();
    res.status(201).json(savedHabit);
  } catch (error: any) {
    res.status(400).json({ message: 'Failed to create habit', error: error.message });
  }
};

export const updateHabit = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    delete updates.user;

    const habit = await Habit.findOneAndUpdate(
      { _id: id, user: req.user?.id },
      { $set: updates },
      { new: true, runValidators: true }
    );
    
    if (!habit) {
      return res.status(404).json({ message: 'Habit not found or unauthorized' });
    }

    res.json(habit);
  } catch (error: any) {
    res.status(400).json({ message: 'Failed to update habit', error: error.message });
  }
};

export const toggleHabit = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    
    const habit = await Habit.findOne({ _id: id, user: req.user?.id });
    if (!habit) {
      return res.status(404).json({ message: 'Habit not found or unauthorized' });
    }

    habit.completed = !habit.completed;
    
    if (habit.completed) {
      habit.streak += 1;
      habit.lastCompleted = new Date();
    } else {
      habit.streak = Math.max(0, habit.streak - 1);
    }
    
    habit.lastUpdated = new Date();
    await habit.save();
    
    res.json(habit);
  } catch (error: any) {
    res.status(400).json({ message: 'Failed to toggle habit state', error: error.message });
  }
};

export const deleteHabit = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    
    const deletedHabit = await Habit.findOneAndDelete({ _id: id, user: req.user?.id });
    if (!deletedHabit) {
      return res.status(404).json({ message: 'Habit not found or unauthorized' });
    }
    
    res.json({ message: 'Habit deleted successfully', id });
  } catch (error: any) {
    res.status(400).json({ message: 'Failed to delete habit', error: error.message });
  }
};