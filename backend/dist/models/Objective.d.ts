import mongoose, { Document } from 'mongoose';
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
declare const Objective: mongoose.Model<IObjective, {}, {}, {}, mongoose.Document<unknown, {}, IObjective, {}, mongoose.DefaultSchemaOptions> & IObjective & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IObjective>;
export default Objective;
//# sourceMappingURL=Objective.d.ts.map