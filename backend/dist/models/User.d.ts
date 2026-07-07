import { Schema } from 'mongoose';
export declare const User: import("mongoose").Model<{
    name: string;
    email: string;
    password: string;
    achievements: string[];
    isVerified: boolean;
    preferences?: {
        theme: "light" | "dark";
        timezone: string;
        language: "en" | "te" | "hi" | "fr";
    } | null | undefined;
    stats?: {
        xp: number;
        studyTime: number;
        focusScore: number;
        totalSessions: number;
        totalCompletedTasks: number;
    } | null | undefined;
    verificationToken?: string | null | undefined;
    resetPasswordToken?: string | null | undefined;
    resetPasswordExpires?: NativeDate | null | undefined;
    refreshToken?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    name: string;
    email: string;
    password: string;
    achievements: string[];
    isVerified: boolean;
    preferences?: {
        theme: "light" | "dark";
        timezone: string;
        language: "en" | "te" | "hi" | "fr";
    } | null | undefined;
    stats?: {
        xp: number;
        studyTime: number;
        focusScore: number;
        totalSessions: number;
        totalCompletedTasks: number;
    } | null | undefined;
    verificationToken?: string | null | undefined;
    resetPasswordToken?: string | null | undefined;
    resetPasswordExpires?: NativeDate | null | undefined;
    refreshToken?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    name: string;
    email: string;
    password: string;
    achievements: string[];
    isVerified: boolean;
    preferences?: {
        theme: "light" | "dark";
        timezone: string;
        language: "en" | "te" | "hi" | "fr";
    } | null | undefined;
    stats?: {
        xp: number;
        studyTime: number;
        focusScore: number;
        totalSessions: number;
        totalCompletedTasks: number;
    } | null | undefined;
    verificationToken?: string | null | undefined;
    resetPasswordToken?: string | null | undefined;
    resetPasswordExpires?: NativeDate | null | undefined;
    refreshToken?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    name: string;
    email: string;
    password: string;
    achievements: string[];
    isVerified: boolean;
    preferences?: {
        theme: "light" | "dark";
        timezone: string;
        language: "en" | "te" | "hi" | "fr";
    } | null | undefined;
    stats?: {
        xp: number;
        studyTime: number;
        focusScore: number;
        totalSessions: number;
        totalCompletedTasks: number;
    } | null | undefined;
    verificationToken?: string | null | undefined;
    resetPasswordToken?: string | null | undefined;
    resetPasswordExpires?: NativeDate | null | undefined;
    refreshToken?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    name: string;
    email: string;
    password: string;
    achievements: string[];
    isVerified: boolean;
    preferences?: {
        theme: "light" | "dark";
        timezone: string;
        language: "en" | "te" | "hi" | "fr";
    } | null | undefined;
    stats?: {
        xp: number;
        studyTime: number;
        focusScore: number;
        totalSessions: number;
        totalCompletedTasks: number;
    } | null | undefined;
    verificationToken?: string | null | undefined;
    resetPasswordToken?: string | null | undefined;
    resetPasswordExpires?: NativeDate | null | undefined;
    refreshToken?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, Omit<import("mongoose").DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    name: string;
    email: string;
    password: string;
    achievements: string[];
    isVerified: boolean;
    preferences?: {
        theme: "light" | "dark";
        timezone: string;
        language: "en" | "te" | "hi" | "fr";
    } | null | undefined;
    stats?: {
        xp: number;
        studyTime: number;
        focusScore: number;
        totalSessions: number;
        totalCompletedTasks: number;
    } | null | undefined;
    verificationToken?: string | null | undefined;
    resetPasswordToken?: string | null | undefined;
    resetPasswordExpires?: NativeDate | null | undefined;
    refreshToken?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    name: string;
    email: string;
    password: string;
    achievements: string[];
    isVerified: boolean;
    preferences?: {
        theme: "light" | "dark";
        timezone: string;
        language: "en" | "te" | "hi" | "fr";
    } | null | undefined;
    stats?: {
        xp: number;
        studyTime: number;
        focusScore: number;
        totalSessions: number;
        totalCompletedTasks: number;
    } | null | undefined;
    verificationToken?: string | null | undefined;
    resetPasswordToken?: string | null | undefined;
    resetPasswordExpires?: NativeDate | null | undefined;
    refreshToken?: string | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    email: string;
    password: string;
    achievements: string[];
    isVerified: boolean;
    preferences?: {
        theme: "light" | "dark";
        timezone: string;
        language: "en" | "te" | "hi" | "fr";
    } | null | undefined;
    stats?: {
        xp: number;
        studyTime: number;
        focusScore: number;
        totalSessions: number;
        totalCompletedTasks: number;
    } | null | undefined;
    verificationToken?: string | null | undefined;
    resetPasswordToken?: string | null | undefined;
    resetPasswordExpires?: NativeDate | null | undefined;
    refreshToken?: string | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=User.d.ts.map