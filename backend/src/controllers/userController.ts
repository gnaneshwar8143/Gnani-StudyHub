import { Request, Response } from 'express';
import { User } from '../models/User';

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    [key: string]: any;
  };
}

export const getProfile = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = await User.findById(req.user?.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to fetch profile', error: error.message });
  }
};

export const updateProfile = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { name, email, preferences } = req.body;
    
    const user = await User.findById(req.user?.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (name) user.name = name;
    if (email) user.email = email;
    if (preferences) {
      user.preferences = {
        ...user.preferences,
        ...preferences
      };
    }

    await user.save();
    
    // Return updated user without password
    const updatedUser = await User.findById(user._id).select('-password');
    res.json(updatedUser);
  } catch (error: any) {
    res.status(400).json({ message: 'Failed to update profile', error: error.message });
  }
};

export const getStats = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = await User.findById(req.user?.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user.stats || {
      xp: 0,
      studyTime: 0,
      focusScore: 0,
      totalSessions: 0,
      totalCompletedTasks: 0
    });
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to fetch stats', error: error.message });
  }
};

export const updateStats = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { xp, studyTime, focusScore, totalSessions, totalCompletedTasks, achievements } = req.body;
    
    const user = await User.findById(req.user?.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!user.stats) {
      user.stats = { xp: 0, studyTime: 0, focusScore: 0, totalSessions: 0, totalCompletedTasks: 0 };
    }

    if (xp !== undefined) user.stats.xp = xp;
    if (studyTime !== undefined) user.stats.studyTime = studyTime;
    if (focusScore !== undefined) user.stats.focusScore = focusScore;
    if (totalSessions !== undefined) user.stats.totalSessions = totalSessions;
    if (totalCompletedTasks !== undefined) user.stats.totalCompletedTasks = totalCompletedTasks;
    
    if (achievements !== undefined) {
      user.achievements = achievements;
    }

    await user.save();
    res.json(user.stats);
  } catch (error: any) {
    res.status(400).json({ message: 'Failed to update stats', error: error.message });
  }
};
