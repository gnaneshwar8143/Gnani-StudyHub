import mongoose, { Schema, Document } from 'mongoose';

export interface IHabit extends Document {
  user: mongoose.Types.ObjectId;
  name: string;
  completed: boolean;
  streak: number;
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
    completed: {
      type: Boolean,
      default: false
    },
    streak: {
      type: Number,
      default: 0
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