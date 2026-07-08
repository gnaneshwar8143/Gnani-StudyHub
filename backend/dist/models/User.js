"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: 'Please enter a valid email address'
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long']
    },
    preferences: {
        theme: { type: String, enum: ['light', 'dark'], default: 'dark' },
        timezone: { type: String, default: 'UTC' },
        language: { type: String, enum: ['en', 'te', 'hi', 'fr'], default: 'en' }
    },
    stats: {
        xp: { type: Number, default: 0 },
        studyTime: { type: Number, default: 0 },
        focusScore: { type: Number, default: 0 },
        totalSessions: { type: Number, default: 0 },
        totalCompletedTasks: { type: Number, default: 0 }
    },
    achievements: [{ type: String }],
    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
    refreshToken: { type: String },
    avatar: { type: String },
    provider: { type: String, default: 'local' }
}, { timestamps: true });
// Explicitly typing 'next' to satisfy strict compiler configurations
userSchema.pre("save", async function () {
    if (!this.isModified("password"))
        return;
    this.password = await bcryptjs_1.default.hash(this.password, 12);
});
// Fixed line 23 syntax: Standard function syntax instead of mixed arrow syntax
userSchema.methods.comparePassword = async function (candidatePassword) {
    return bcryptjs_1.default.compare(candidatePassword, this.password);
};
exports.User = (0, mongoose_1.model)('User', userSchema);
//# sourceMappingURL=User.js.map