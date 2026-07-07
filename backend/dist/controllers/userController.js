"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStats = exports.getStats = exports.updateProfile = exports.getProfile = void 0;
const User_1 = require("../models/User");
const getProfile = async (req, res) => {
    try {
        const user = await User_1.User.findById(req.user?.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch profile', error: error.message });
    }
};
exports.getProfile = getProfile;
const updateProfile = async (req, res) => {
    try {
        const { name, email, preferences } = req.body;
        const user = await User_1.User.findById(req.user?.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (name)
            user.name = name;
        if (email)
            user.email = email;
        if (preferences) {
            user.preferences = {
                ...user.preferences,
                ...preferences
            };
        }
        await user.save();
        // Return updated user without password
        const updatedUser = await User_1.User.findById(user._id).select('-password');
        res.json(updatedUser);
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to update profile', error: error.message });
    }
};
exports.updateProfile = updateProfile;
const getStats = async (req, res) => {
    try {
        const user = await User_1.User.findById(req.user?.id);
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
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch stats', error: error.message });
    }
};
exports.getStats = getStats;
const updateStats = async (req, res) => {
    try {
        const { xp, studyTime, focusScore, totalSessions, totalCompletedTasks, achievements } = req.body;
        const user = await User_1.User.findById(req.user?.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (!user.stats) {
            user.stats = { xp: 0, studyTime: 0, focusScore: 0, totalSessions: 0, totalCompletedTasks: 0 };
        }
        if (xp !== undefined)
            user.stats.xp = xp;
        if (studyTime !== undefined)
            user.stats.studyTime = studyTime;
        if (focusScore !== undefined)
            user.stats.focusScore = focusScore;
        if (totalSessions !== undefined)
            user.stats.totalSessions = totalSessions;
        if (totalCompletedTasks !== undefined)
            user.stats.totalCompletedTasks = totalCompletedTasks;
        if (achievements !== undefined) {
            user.achievements = achievements;
        }
        await user.save();
        res.json(user.stats);
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to update stats', error: error.message });
    }
};
exports.updateStats = updateStats;
//# sourceMappingURL=userController.js.map