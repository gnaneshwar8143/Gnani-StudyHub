"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const objectiveSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    taskType: {
        type: String,
        enum: ['goal', 'task'],
        default: 'goal'
    },
    calendarType: {
        type: String,
        enum: ['Due Date', 'Reminder', 'Repeat Schedule'],
        default: 'Due Date'
    },
    priority: {
        type: String,
        enum: ['High', 'Medium', 'Low'],
        default: 'Medium'
    },
    status: {
        type: String,
        enum: ['To Do', 'In Progress', 'In Review', 'Completed'],
        default: 'To Do'
    },
    dueDate: {
        type: Date
    },
    scheduledDate: {
        type: String
    },
    scheduledTime: {
        type: String
    },
    timezoneOffset: {
        type: Number
    },
    progress: {
        type: Number,
        default: 0
    },
    completed: {
        type: Boolean,
        default: false
    },
    reminderType: {
        type: String,
        enum: ['At Task Time', '10 Minutes Before', '30 Minutes Before', '1 Hour Before', '2 Hours Before', 'Morning (8:00 AM)', '1 Day Before'],
        default: 'At Task Time'
    },
    reminderDateTime: {
        type: Date
    },
    reminderSent: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
const Objective = mongoose_1.default.model('Objective', objectiveSchema);
exports.default = Objective;
//# sourceMappingURL=Objective.js.map