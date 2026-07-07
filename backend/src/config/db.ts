import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lifeos');
    console.log(`📡 MongoDB Connected Globally: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Database Connection Error: ${error}`);
    process.exit(1); // Kill process if DB fails
  }
};

export default connectDB;