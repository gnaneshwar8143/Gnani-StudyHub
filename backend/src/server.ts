import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
// @ts-ignore
import connectDB from './config/db';
import habitRoutes from './routes/habitRoutes';
import objectiveRoutes from './routes/objectiveRoutes';
import authRoutes from './routes/authRoutes';

// Configure and mount runtime environment maps
dotenv.config();

const app = express();

// Enable Cross-Origin Resource Sharing for your Vite development server port
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// Request body payload parsing middleware
app.use(express.json());

// Establish connection matrix to MongoDB database instance
connectDB();

// Core Route Middleware Mount Arrays
app.use('/api/auth', authRoutes);
app.use('/api/habits', habitRoutes);
app.use('/api/objectives', objectiveRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`LifeOS Engine running securely on port ${PORT}`);
});