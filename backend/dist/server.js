"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemLogs = void 0;
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
// Captured System Logs for Production Diagnostics
exports.systemLogs = [];
const originalLog = console.log;
const originalError = console.error;
console.log = (...args) => {
    const msg = args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(' ');
    exports.systemLogs.push(`[LOG] ${new Date().toISOString()}: ${msg}`);
    if (exports.systemLogs.length > 200)
        exports.systemLogs.shift();
    originalLog.apply(console, args);
};
console.error = (...args) => {
    const msg = args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(' ');
    exports.systemLogs.push(`[ERROR] ${new Date().toISOString()}: ${msg}`);
    if (exports.systemLogs.length > 200)
        exports.systemLogs.shift();
    originalError.apply(console, args);
};
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
const allowedOrigins = [
    'http://localhost:5173',
    'https://gnani-study-hub.vercel.app'
];
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
// Request Logging Middleware
app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`[REQUEST] ${req.method} ${req.originalUrl} - Status: ${res.statusCode} - User ID: ${req.user?.id || 'Unauthenticated'} - Duration: ${duration}ms`);
    });
    next();
});
// Establish connection matrix to MongoDB database instance
(0, db_1.default)();
// Core Route Middleware Mount Arrays
app.use('/api/auth', authRoutes_1.default);
app.use('/api/habits', habitRoutes_1.default);
app.use('/api/objectives', objectiveRoutes_1.default);
app.use('/api/profile', profileRoutes_1.default);
app.use('/api/user', userRoutes_1.default);
app.get('/api/system-logs', (req, res) => {
    if (req.query.secret !== 'gnani-debug-123') {
        return res.status(403).json({ message: 'Forbidden' });
    }
    res.json({ logs: exports.systemLogs });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`NANI Engine running securely on port ${PORT}`);
});
//# sourceMappingURL=server.js.map