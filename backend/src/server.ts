import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
// @ts-ignore
import connectDB from './config/db';
import habitRoutes from './routes/habitRoutes';
import objectiveRoutes from './routes/objectiveRoutes';
import authRoutes from './routes/authRoutes';
import profileRoutes from './routes/profileRoutes';
import userRoutes from './routes/userRoutes';
import nodemailer from 'nodemailer';

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
  'MONGODB_URI',
  'JWT_SECRET',
  'JWT_REFRESH_SECRET',
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'SMTP_FROM',
  'CLIENT_URL',
  'GOOGLE_CLIENT_ID',
  'GOOGLE_CLIENT_SECRET',
  'GITHUB_CLIENT_ID',
  'GITHUB_CLIENT_SECRET'
];

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.error(`[CRITICAL STARTUP ERROR] Missing required environment variable: ${envVar}`);
    process.exit(1);
  }
});

const app = express();

const allowedOrigins = Array.from(new Set([
  'http://localhost:5173',
  'https://gnani-study-hub.vercel.app',
  ...(process.env.CLIENT_URL ? [process.env.CLIENT_URL, process.env.CLIENT_URL.replace(/\/$/, '')] : [])
]));

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

// Verify SMTP Mail Server Connection on Startup
const verifySMTP = async () => {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.error('⚠️ [SMTP CONFIG WARNING] Required SMTP parameters are missing from environment!');
    return;
  }

  console.log(`📡 [SMTP DIAGNOSTIC] Verifying connection to mail server: ${smtpHost}:${smtpPort} (User: ${smtpUser})...`);

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    requireTLS: smtpPort === 587,
    connectionTimeout: 10000, // 10s connection timeout
    greetingTimeout: 10000,   // 10s greeting timeout
    socketTimeout: 10000,     // 10s socket idle timeout
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });

  try {
    await transporter.verify();
    console.log('✅ [SMTP DIAGNOSTIC] SMTP Handshake Successful! Mail server is ready to dispatch emails.');
  } catch (error: any) {
    console.error('❌ [SMTP DIAGNOSTIC ERROR] Mail Server Connection Failed!', error.stack || error.message || error);
  }
};
verifySMTP();

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