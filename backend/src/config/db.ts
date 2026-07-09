import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  try {
    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true);
    }
    
    const dbUri = process.env.MONGODB_URI;
    if (!dbUri) {
      if (process.env.NODE_ENV === 'production') {
        console.error('❌ CRITICAL: MONGODB_URI is missing in production environment. Terminating process.');
        process.exit(1);
      }
    }

    const conn = await mongoose.connect(dbUri || 'mongodb://localhost:27017/lifeos');
    console.log(`📡 MongoDB Connected Globally: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Database Connection Error: ${error}`);
    process.exit(1); // Kill process if DB fails
  }
};

export default connectDB;