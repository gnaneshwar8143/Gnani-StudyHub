import { Request } from 'express';
import Habit from '../models/Habit';

// Define a custom interface to handle the authenticated user attached by middleware
interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    [key: string]: any;
  };
}

export const getHabits = async (req: AuthenticatedRequest) => {
  try {
    if (!req.user?.id) throw new Error('Unauthorized telemetry request.');
    const habits = await Habit.find({ user: req.user.id });
    return habits;
  } catch (error: any) {
    throw new Error(error.message || 'Failed to retrieve neuro-habits telemetry.');
  }
};

export const createHabit = async (req: AuthenticatedRequest, name: string) => {
  try {
    if (!req.user?.id) throw new Error('Unauthorized telemetry request.');
    const newHabit = new Habit({
      user: req.user.id,
      name: name
    });
    const savedHabit = await newHabit.save();
    return savedHabit;
  } catch (error: any) {
    throw new Error(error.message || 'Habit initialization pipeline failed.');
  }
};

export const toggleHabit = async (req: AuthenticatedRequest, id: string) => {
  try {
    if (!req.user?.id) throw new Error('Unauthorized telemetry request.');
    const habit = await Habit.findOne({ _id: id, user: req.user.id });
    if (!habit) return null;

    habit.completed = !habit.completed;
    if (habit.completed) {
      habit.streak += 1;
      habit.lastUpdated = new Date();
    } else {
      habit.streak = Math.max(0, habit.streak - 1);
    }

    await habit.save();
    return habit;
  } catch (error: any) {
    throw new Error(error.message || 'Failed to update habit state matrix.');
  }
};

export const deleteHabit = async (req: AuthenticatedRequest, id: string) => {
  try {
    if (!req.user?.id) throw new Error('Unauthorized telemetry request.');
    const deletedHabit = await Habit.findOneAndDelete({ _id: id, user: req.user.id });
    return deletedHabit;
  } catch (error: any) {
    throw new Error(error.message || 'Habit termination execution failed.');
  }
};

// Fixed the syntax order right here:
export default {
  getHabits,
  createHabit,
  toggleHabit,
  deleteHabit
};