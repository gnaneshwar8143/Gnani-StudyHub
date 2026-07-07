import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: 8 },
  preferences: {
    theme: { type: String, enum: ['light', 'dark'], default: 'dark' },
    timezone: { type: String, default: 'UTC' }
  },
  refreshToken: { type: String }
}, { timestamps: true });

// Explicitly typing 'next' to satisfy strict compiler configurations
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 12);
});

// Fixed line 23 syntax: Standard function syntax instead of mixed arrow syntax
userSchema.methods.comparePassword = async function (this: any, candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export const User = model('User', userSchema);