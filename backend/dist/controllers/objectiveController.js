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
            console.warn('⚠️ [Audit Warning] reminderDateTime was NOT assigned! Reason:', !taskDateStr ? 'Neither scheduledDate nor dueDate was provided in request body.' : 'Task date string parsing failed.');
        }
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
        // Immediately reload from MongoDB to audit exact persisted values
        const reloadedDoc = await Objective_1.default.findById(savedObjective._id);
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
            }
            else {
                console.log('✅ [Audit Success] Persisted reminderDateTime matches calculated UTC exactly.');
            }
        }
        // Immediately trigger background check for due reminders
        (0, reminderScheduler_1.processPendingReminders)();
        res.status(201).json(savedObjective);
    }
    catch (error) {
        console.error('❌ [Create Objective Audit Error]:', error.stack || error.message || error);
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
        console.log('\n==================================================');
        console.log(`📝 [Task Update Audit] Updating Task ID: ${id}`);
        console.log(`- Resolved taskDateStr: ${taskDateStr || 'undefined'}`);
        console.log(`- timeStr: ${timeStr || 'undefined'}`);
        console.log(`- remType: ${remType || 'At Task Time'}`);
        console.log(`- offset: ${offset !== undefined ? offset : 'undefined'}`);
        console.log(`- Updated reminderDateTime (UTC): ${updates.reminderDateTime ? updates.reminderDateTime.toISOString() : 'UNCHANGED'}`);
        const updatedObjective = await Objective_1.default.findOneAndUpdate({ _id: id, user: req.user?.id }, { $set: updates }, { new: true, runValidators: true });
        console.log('💾 [MongoDB Update Audit] Persisted document after update:');
        console.log(`- ID: ${updatedObjective?._id}`);
        console.log(`- reminderType: ${updatedObjective?.reminderType}`);
        console.log(`- reminderDateTime (UTC): ${updatedObjective?.reminderDateTime ? new Date(updatedObjective.reminderDateTime).toISOString() : 'UNDEFINED / NULL'}`);
        console.log(`- reminderSent: ${updatedObjective?.reminderSent}`);
        console.log('==================================================\n');
        // Immediately trigger background check for due reminders
        (0, reminderScheduler_1.processPendingReminders)();
        res.json(updatedObjective);
    }
    catch (error) {
        console.error('❌ [Update Objective Audit Error]:', error.stack || error.message || error);
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