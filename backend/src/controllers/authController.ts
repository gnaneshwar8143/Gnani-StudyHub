import { Request, Response } from 'express';
import { User } from '../models/User';
import jwt from 'jsonwebtoken';

const generateTokens = (userId: string) => {
  const accessToken = jwt.sign({ userId }, process.env.JWT_ACCESS_SECRET!, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET!, { expiresIn: '7d' });
  return { accessToken, refreshToken };
};

export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: 'Email already registered' });
      return;
    }

    const user = await User.create({ name, email, password });
    const { accessToken, refreshToken } = generateTokens(user._id.toString());
    
    user.refreshToken = refreshToken;
    await user.save();

    res.status(201).json({ 
      accessToken, 
      user: { id: user._id, name: user.name, email: user.email, preferences: user.preferences } 
    });
} catch (error: any) {
    console.error("Signup Error:", error);

    if (error.name === "ValidationError") {
        res.status(400).json({
            message: Object.values(error.errors).map((val: any) => val.message)[0],
        });
        return;
    }

    res.status(500).json({
        message: error.message,
    });
}
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    // Explicitly casting to any to call the schema method cleanly under strict options
    const isMatch = await (user as any).comparePassword(password);
    if (!isMatch) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    const { accessToken, refreshToken } = generateTokens(user._id.toString());
    user.refreshToken = refreshToken;
    await user.save();

    res.status(200).json({ 
      accessToken, 
      user: { id: user._id, name: user.name, email: user.email, preferences: user.preferences } 
    });
  } catch (error: unknown) {
    res.status(500).json({ message: 'Internal server error during login' });
  }
};