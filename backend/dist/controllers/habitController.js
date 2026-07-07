"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHabit = exports.toggleHabit = exports.updateHabit = exports.createHabit = exports.getHabits = void 0;
const Habit_1 = __importDefault(require("../models/Habit"));
const getHabits = async (req, res) => {
    try {
        const habits = await Habit_1.default.find({ user: req.user?.id }).sort({ createdAt: -1 });
        res.json(habits);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to retrieve habits', error: error.message });
    }
};
exports.getHabits = getHabits;
const createHabit = async (req, res) => {
    try {
        const { name, category, goal, targetStreak } = req.body;
        const newHabit = new Habit_1.default({
            user: req.user?.id,
            name,
            category: category || 'General',
            goal: goal || 'Daily',
            targetStreak: targetStreak || 30
        });
        const savedHabit = await newHabit.save();
        res.status(201).json(savedHabit);
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to create habit', error: error.message });
    }
};
exports.createHabit = createHabit;
const updateHabit = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        delete updates.user;
        const habit = await Habit_1.default.findOneAndUpdate({ _id: id, user: req.user?.id }, { $set: updates }, { new: true, runValidators: true });
        if (!habit) {
            return res.status(404).json({ message: 'Habit not found or unauthorized' });
        }
        res.json(habit);
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to update habit', error: error.message });
    }
};
exports.updateHabit = updateHabit;
const toggleHabit = async (req, res) => {
    try {
        const { id } = req.params;
        const habit = await Habit_1.default.findOne({ _id: id, user: req.user?.id });
        if (!habit) {
            return res.status(404).json({ message: 'Habit not found or unauthorized' });
        }
        habit.completed = !habit.completed;
        if (habit.completed) {
            habit.streak += 1;
            habit.lastCompleted = new Date();
        }
        else {
            habit.streak = Math.max(0, habit.streak - 1);
        }
        habit.lastUpdated = new Date();
        await habit.save();
        res.json(habit);
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to toggle habit state', error: error.message });
    }
};
exports.toggleHabit = toggleHabit;
const deleteHabit = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedHabit = await Habit_1.default.findOneAndDelete({ _id: id, user: req.user?.id });
        if (!deletedHabit) {
            return res.status(404).json({ message: 'Habit not found or unauthorized' });
        }
        res.json({ message: 'Habit deleted successfully', id });
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to delete habit', error: error.message });
    }
};
exports.deleteHabit = deleteHabit;
//# sourceMappingURL=habitController.js.map