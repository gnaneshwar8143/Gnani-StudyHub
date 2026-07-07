import mongoose, { Schema, Document } from 'mongoose';

export interface IObjective extends Document {
  user: mongoose.Types.ObjectId;
  title: string;
  description?: string;
  taskType: 'goal' | 'task';
  calendarType?: 'Due Date' | 'Reminder' | 'Repeat Schedule';
  priority: 'High' | 'Medium' | 'Low';
  status: 'To Do' | 'In Progress' | 'In Review' | 'Completed';
  dueDate?: Date;
  scheduledDate?: string;
  scheduledTime?: string;
  progress: number;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const objectiveSchema: Schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    taskType: {
      type: String,
      enum: ['goal', 'task'],
      default: 'goal'
    },
    calendarType: {
      type: String,
      enum: ['Due Date', 'Reminder', 'Repeat Schedule'],
      default: 'Due Date'
    },
    priority: {
      type: String,
      enum: ['High', 'Medium', 'Low'],
      default: 'Medium'
    },
    status: {
      type: String,
      enum: ['To Do', 'In Progress', 'In Review', 'Completed'],
      default: 'To Do'
    },
    dueDate: {
      type: Date
    },
    scheduledDate: {
      type: String
    },
    scheduledTime: {
      type: String
    },
    progress: {
      type: Number,
      default: 0
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Objective = mongoose.model<IObjective>('Objective', objectiveSchema);
export default Objective;
