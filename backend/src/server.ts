import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ override: true });
import cors from 'cors';
// @ts-ignore
import connectDB from './config/db';
import habitRoutes from './routes/habitRoutes';
import objectiveRoutes from './routes/objectiveRoutes';
import authRoutes from './routes/authRoutes';
import profileRoutes from './routes/profileRoutes';
import userRoutes from './routes/userRoutes';

// Captured System Logs for Production Diagnostics
export const systemLogs: string[] = [];
const originalLog = console.log;
const originalError = console.error;

console.log = (...args: any[]) => {
  const msg = args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(' ');
  systemLogs.push(`[LOG] ${new Date().toISOString()}: ${msg}`);
  if (systemLogs.length > 200) systemLogs.shift();
  originalLog.apply(console, args);
};

console.error = (...args: any[]) => {
  const msg = args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(' ');
  systemLogs.push(`[ERROR] ${new Date().toISOString()}: ${msg}`);
  if (systemLogs.length > 200) systemLogs.shift();
  originalError.apply(console, args);
};

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

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'https://gnani-study-hub.vercel.app'
];
if (process.env.CLIENT_URL) {
  allowedOrigins.push(process.env.CLIENT_URL);
  allowedOrigins.push(process.env.CLIENT_URL.replace(/\/$/, ''));
}

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

// Request body payload parsing middleware
app.use(express.json());

// Request Logging Middleware
app.use((req: any, res: any, next: any) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[REQUEST] ${req.method} ${req.originalUrl} - Status: ${res.statusCode} - User ID: ${req.user?.id || 'Unauthenticated'} - Duration: ${duration}ms`);
  });
  next();
});

// Establish connection matrix to MongoDB database instance
connectDB();

// Core Route Middleware Mount Arrays
app.use('/api/auth', authRoutes);
app.use('/api/habits', habitRoutes);
app.use('/api/objectives', objectiveRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/user', userRoutes);

app.get('/api/system-logs', (req: any, res: any) => {
  if (req.query.secret !== 'gnani-debug-123') {
    return res.status(403).json({ message: 'Forbidden' });
  }
  res.json({ logs: systemLogs });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`NANI Engine running securely on port ${PORT}`);
});