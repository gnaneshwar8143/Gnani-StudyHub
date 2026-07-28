"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteObjective = exports.updateObjective = exports.createObjective = exports.getObjectives = void 0;
const Objective_1 = __importDefault(require("../models/Objective"));
const reminderScheduler_1 = require("../services/reminderScheduler");
const getObjectives = async (req, res) => {
    try {
        const objectives = await Objective_1.default.find({ user: req.user?.id }).sort({ createdAt: -1 });
        res.json(objectives);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch objectives', error: error.message });
    }
};
exports.getObjectives = getObjectives;
const createObjective = async (req, res) => {
    try {
        const { title, description, taskType, calendarType, priority, status, dueDate, scheduledDate, scheduledTime, reminderType, timezoneOffset } = req.body;
        const taskDateStr = scheduledDate || (dueDate ? new Date(dueDate).toISOString().split('T')[0] : undefined);
        const offset = typeof timezoneOffset === 'number' ? timezoneOffset : undefined;
        const calculatedReminderDateTime = (0, reminderScheduler_1.calculateReminderDateTime)(taskDateStr, scheduledTime, reminderType, offset);
        const objective = new Objective_1.default({
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
        (0, reminderScheduler_1.processPendingReminders)();
        res.status(201).json(savedObjective);
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to create objective', error: error.message });
    }
};
exports.createObjective = createObjective;
const updateObjective = async (req, res) => {
    try {
        const { id } = req.params;
        // Find objective that belongs to this user
        const objective = await Objective_1.default.findOne({ _id: id, user: req.user?.id });
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
            updates.reminderDateTime = (0, reminderScheduler_1.calculateReminderDateTime)(taskDateStr, timeStr, remType, offset);
            if (updates.reminderDateTime && updates.reminderDateTime > new Date()) {
                updates.reminderSent = false;
            }
        }
        const updatedObjective = await Objective_1.default.findOneAndUpdate({ _id: id, user: req.user?.id }, { $set: updates }, { new: true, runValidators: true });
        // Immediately trigger background check for due reminders
        (0, reminderScheduler_1.processPendingReminders)();
        res.json(updatedObjective);
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to update objective', error: error.message });
    }
};
exports.updateObjective = updateObjective;
const deleteObjective = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedObjective = await Objective_1.default.findOneAndDelete({ _id: id, user: req.user?.id });
        if (!deletedObjective) {
            return res.status(404).json({ message: 'Objective not found or unauthorized' });
        }
        res.json({ message: 'Objective deleted successfully', id });
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to delete objective', error: error.message });
    }
};
exports.deleteObjective = deleteObjective;
//# sourceMappingURL=objectiveController.js.map