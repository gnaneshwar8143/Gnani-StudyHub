"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        mongoose_1.default.set('debug', true);
        const conn = await mongoose_1.default.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lifeos');
        console.log(`📡 MongoDB Connected Globally: ${conn.connection.host}`);
    }
    catch (error) {
        console.error(`❌ Database Connection Error: ${error}`);
        process.exit(1); // Kill process if DB fails
    }
};
exports.connectDB = connectDB;
exports.default = exports.connectDB;
//# sourceMappingURL=db.js.map