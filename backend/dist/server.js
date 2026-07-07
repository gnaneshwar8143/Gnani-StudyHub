"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
// @ts-ignore
const db_1 = __importDefault(require("./config/db"));
const habitRoutes_1 = __importDefault(require("./routes/habitRoutes"));
const objectiveRoutes_1 = __importDefault(require("./routes/objectiveRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const profileRoutes_1 = __importDefault(require("./routes/profileRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
// Configure and mount runtime environment maps
dotenv_1.default.config();
const requiredEnvVars = [
    'SMTP_HOST',
    'SMTP_PORT',
    'SMTP_USER',
    'SMTP_PASS',
    'SMTP_FROM',
    'JWT_SECRET',
    'CLIENT_URL'
];
requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
        console.error(`[CRITICAL STARTUP ERROR] Missing required environment variable: ${envVar}`);
        process.exit(1);
    }
});
const app = (0, express_1.default)();
const allowedOrigins = ['http://localhost:5173'];
if (process.env.CLIENT_URL) {
    allowedOrigins.push(process.env.CLIENT_URL);
    allowedOrigins.push(process.env.CLIENT_URL.replace(/\/$/, ''));
}
app.use((0, cors_1.default)({
    origin: allowedOrigins,
    credentials: true
}));
// Request body payload parsing middleware
app.use(express_1.default.json());
// Establish connection matrix to MongoDB database instance
(0, db_1.default)();
// Core Route Middleware Mount Arrays
app.use('/api/auth', authRoutes_1.default);
app.use('/api/habits', habitRoutes_1.default);
app.use('/api/objectives', objectiveRoutes_1.default);
app.use('/api/profile', profileRoutes_1.default);
app.use('/api/user', userRoutes_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`NANI Engine running securely on port ${PORT}`);
});
//# sourceMappingURL=server.js.map