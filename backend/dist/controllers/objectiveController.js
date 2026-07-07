"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteObjective = exports.updateObjective = exports.createObjective = exports.getObjectives = void 0;
const Objective_1 = __importDefault(require("../models/Objective"));
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
        const { title, description, taskType, calendarType, priority, status, dueDate, scheduledDate, scheduledTime } = req.body;
        const objective = new Objective_1.default({
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
        // Do not allow updating the user field
        delete updates.user;
        const updatedObjective = await Objective_1.default.findOneAndUpdate({ _id: id, user: req.user?.id }, { $set: updates }, { new: true, runValidators: true });
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