import mongoose, { Document } from 'mongoose';
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
declare const Habit: mongoose.Model<IHabit, {}, {}, {}, mongoose.Document<unknown, {}, IHabit, {}, mongoose.DefaultSchemaOptions> & IHabit & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IHabit>;
export default Habit;
//# sourceMappingURL=Habit.d.ts.map