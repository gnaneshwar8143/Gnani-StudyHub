import mongoose, { Schema, Document } from 'mongoose';

export interface IHabit extends Document {
  user: mongoose.Types.ObjectId;
  name: string;
  category: string;
  goal: string;
  targetStreak: number;
  streak: number;
  completed: boolean;
  lastCompleted?: Date;
  lastUpdated?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const habitSchema: Schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      default: 'General'
    },
    goal: {
      type: String,
      default: 'Daily'
    },
    targetStreak: {
      type: Number,
      default: 30
    },
    streak: {
      type: Number,
      default: 0
    },
    completed: {
      type: Boolean,
      default: false
    },
    lastCompleted: {
      type: Date
    },
    lastUpdated: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);

const Habit = mongoose.model<IHabit>('Habit', habitSchema);
export default Habit;