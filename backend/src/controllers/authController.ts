import { Request, Response } from 'express';
import { User } from '../models/User';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

const generateTokens = (userId: string) => {
  const secret = process.env.JWT_SECRET || process.env.JWT_ACCESS_SECRET || 'fallback_secret_123';
  const refreshSecret = process.env.JWT_REFRESH_SECRET || 'fallback_refresh_123';
  const accessToken = jwt.sign({ userId }, secret, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ userId }, refreshSecret, { expiresIn: '7d' });
  return { accessToken, refreshToken };
};

const sendEmail = async (to: string, subject: string, html: string): Promise<void> => {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM || smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass) {
    throw new Error('SMTP_CONFIG_MISSING');
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });

  const mailOptions = {
    from: `"Gnani Support" <${smtpFrom}>`,
    to,
    subject,
    html
  };

  await transporter.sendMail(mailOptions);
};

const mapMailError = (error: any): string => {
  if (error.message === 'SMTP_CONFIG_MISSING') {
    return 'Server email configuration is missing or incomplete.';
  }
  if (error.code === 'EAUTH') {
    return 'Email service authentication failed. Please verify the SMTP settings or App Password.';
  }
  if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
    return 'Could not connect to the email server. Please check your network connection.';
  }
  return 'Failed to send verification email. Please check your email address and try again.';
};

export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: 'Email already registered' });
      return;
    }

    const verificationToken = crypto.randomBytes(16).toString('hex');

    const user = new User({ 
      name, 
      email, 
      password,
      isVerified: false,
      verificationToken
    });

    // Save user first so we have the record
    await user.save();

    const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';
    const verifyUrl = `${clientUrl}/verify-email?token=${verificationToken}`;
    
    try {
      await sendEmail(
        email,
        'Gnani Email Verification',
        `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e4e4e7; border-radius: 12px;">
            <h2 style="color: #7c5cff;">Gnani Email Verification</h2>
            <p>Hello ${user.name},</p>
            <p>Thank you for registering at Gnani! Click the button below to verify your email address:</p>
            <div style="margin: 25px 0;">
              <a href="${verifyUrl}" style="background-color: #7c5cff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Verify Email</a>
            </div>
            <p>Or copy and paste this link into your browser:</p>
            <p><a href="${verifyUrl}">${verifyUrl}</a></p>
            <hr style="border: 0; border-top: 1px solid #e4e4e7; margin: 20px 0;">
            <p style="font-size: 11px; color: #a1a1aa;">If you did not create this account, you can safely ignore this email.</p>
          </div>
        `
      );
    } catch (mailErr) {
      // Revert/delete the user if mail dispatch fails
      await User.deleteOne({ _id: user._id });
      console.error("Signup Email Dispatch Failed:", mailErr);
      res.status(500).json({ message: mapMailError(mailErr) });
      return;
    }
    
    const { accessToken, refreshToken } = generateTokens(user._id.toString());
    user.refreshToken = refreshToken;
    await user.save();

    res.status(201).json({ 
      message: 'Registration successful! Verification email sent.',
      accessToken, 
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        preferences: user.preferences,
        stats: user.stats || { xp: 0, studyTime: 0, focusScore: 0, totalSessions: 0, totalCompletedTasks: 0 },
        achievements: user.achievements || []
      }
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
        message: error.message || 'Internal server error during registration.',
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

    if (user.isVerified === false) {
      res.status(403).json({ 
        message: 'Please verify your email address to log in. Check your inbox.',
        unverified: true 
      });
      return;
    }

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
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        preferences: user.preferences,
        stats: user.stats || { xp: 0, studyTime: 0, focusScore: 0, totalSessions: 0, totalCompletedTasks: 0 },
        achievements: user.achievements || []
      }
    });
  } catch (error: unknown) {
    console.error("Login Error:", error);
    res.status(500).json({ message: 'Internal server error during login' });
  }
};

export const forgotPassword = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: 'User with this email does not exist.' });
      return;
    }

    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = new Date(Date.now() + 3600000); // 1 hour expiry
    await user.save();

    const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';
    const resetUrl = `${clientUrl}/reset-password/${resetToken}`;

    try {
      await sendEmail(
        email,
        'Gnani Password Reset Request',
        `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e4e4e7; border-radius: 12px;">
            <h2 style="color: #7c5cff;">Gnani Password Reset</h2>
            <p>Hello ${user.name},</p>
            <p>We received a request to reset your password. Click the button below to set a new password:</p>
            <div style="margin: 25px 0;">
              <a href="${resetUrl}" style="background-color: #7c5cff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Reset Password</a>
            </div>
            <p>Or copy and paste this link into your browser:</p>
            <p><a href="${resetUrl}">${resetUrl}</a></p>
            <hr style="border: 0; border-top: 1px solid #e4e4e7; margin: 20px 0;">
            <p style="font-size: 11px; color: #a1a1aa;">This link will expire in 1 hour. If you did not request this reset, you can safely ignore this email.</p>
          </div>
        `
      );
    } catch (mailErr) {
      // Revert token changes on mail fail
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;
      await user.save();

      console.error("Forgot Password Email Dispatch Failed:", mailErr);
      res.status(500).json({ message: mapMailError(mailErr) });
      return;
    }

    res.status(200).json({ message: 'Password reset link has been sent to your email.' });
  } catch (error: any) {
    console.error("Forgot Password Error:", error);
    res.status(500).json({ message: error.message || 'Internal server error during password reset request' });
  }
};

export const verifyEmail = async (req: Request, res: Response): Promise<void> => {
  try {
    const { token } = req.body;
    if (!token) {
      res.status(400).json({ message: 'Verification token is required.' });
      return;
    }

    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      res.status(400).json({ message: 'Invalid or expired verification token.' });
      return;
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    res.status(200).json({ message: 'Email address verified successfully!' });
  } catch (error: any) {
    console.error("Verification Error:", error);
    res.status(500).json({ message: error.message || 'Internal server error during email verification' });
  }
};

export const resetPassword = async (req: Request, res: Response): Promise<void> => {
  try {
    const { token, password } = req.body;
    if (!token || !password) {
      res.status(400).json({ message: 'Token and new password are required.' });
      return;
    }

    if (password.length < 8) {
      res.status(400).json({ message: 'Password must be at least 8 characters long.' });
      return;
    }

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: new Date() }
    });

    if (!user) {
      res.status(400).json({ message: 'Password reset token is invalid or has expired.' });
      return;
    }

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    res.status(200).json({ message: 'Password has been reset successfully!' });
  } catch (error: any) {
    console.error("Reset Password Error:", error);
    res.status(500).json({ message: error.message || 'Internal server error during password reset.' });
  }
};

export const oauthLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, provider } = req.body;

    if (!email) {
      res.status(400).json({ message: 'Email is required for social login' });
      return;
    }

    // Try to find user by email
    let user = await User.findOne({ email });

    if (!user) {
      // Create user if they don't exist
      const randomPassword = crypto.randomBytes(32).toString('hex');
      user = new User({
        name: name || email.split('@')[0],
        email,
        password: randomPassword,
        isVerified: true, // Social login verifies email automatically
        preferences: { theme: 'dark', timezone: 'UTC' }
      });
      await user.save();
    }

    // Generate valid JWT tokens for this user
    const { accessToken, refreshToken } = generateTokens(user._id.toString());
    user.refreshToken = refreshToken;
    await user.save();

    res.status(200).json({
      accessToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        preferences: user.preferences,
        stats: user.stats || { xp: 0, studyTime: 0, focusScore: 0, totalSessions: 0, totalCompletedTasks: 0 },
        achievements: user.achievements || []
      }
    });
  } catch (error: any) {
    console.error("OAuth Login Error:", error);
    res.status(500).json({
      message: error.message || 'Internal server error during social login.'
    });
  }
};