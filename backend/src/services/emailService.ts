import nodemailer from 'nodemailer';
import { Resend } from 'resend';

const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
const smtpPort = Number(process.env.SMTP_PORT) || 465;

const resendApiKey = process.env.RESEND_API_KEY;
const resendClient = resendApiKey ? new Resend(resendApiKey) : null;

const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER || process.env.RESEND_FROM_EMAIL || 'Gnani Support <noreply@gnani.app>';

// Initialize Nodemailer transporter if SMTP credentials are specified
const transporter = (smtpUser && smtpPass)
  ? nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    })
  : null;

/**
 * Send a verification email using Nodemailer (Gmail SMTP) or Resend API fallback
 */
export const sendVerificationEmail = async (to: string, name: string, verifyUrl: string): Promise<any> => {
  console.log(`📨 [Email Service Queue] Dispatching verification email to: ${to}...`);

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e4e4e7; border-radius: 12px;">
      <h2 style="color: #7c5cff;">Gnani Email Verification</h2>
      <p>Hello ${name},</p>
      <p>Thank you for registering at Gnani! Click the button below to verify your email address:</p>
      <div style="margin: 25px 0;">
        <a href="${verifyUrl}" style="background-color: #7c5cff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Verify Email</a>
      </div>
      <p>Or copy and paste this link into your browser:</p>
      <p><a href="${verifyUrl}">${verifyUrl}</a></p>
      <hr style="border: 0; border-top: 1px solid #e4e4e7; margin: 20px 0;">
      <p style="font-size: 11px; color: #a1a1aa;">If you did not create this account, you can safely ignore this email.</p>
    </div>
  `;

  // 1. Try Nodemailer Gmail SMTP if configured
  if (transporter) {
    try {
      const info = await transporter.sendMail({
        from: fromEmail,
        to,
        subject: 'Gnani Email Verification',
        html,
      });
      console.log(`✉️ [Nodemailer SMTP Sent] Verification email successfully sent. Message ID: ${info.messageId}`);
      return info;
    } catch (error: any) {
      console.error(`❌ [Nodemailer SMTP Error] Failed to send email via SMTP to ${to}:`, error.message);
      if (!resendClient) throw error;
      console.log('🔄 Falling back to Resend API...');
    }
  }

  // 2. Try Resend API if configured
  if (resendClient) {
    try {
      const response = await resendClient.emails.send({
        from: fromEmail,
        to,
        subject: 'Gnani Email Verification',
        html,
      });
      if (response.error) throw new Error(response.error.message);
      console.log(`✉️ [Resend API Sent] Verification email sent. ID: ${response.data?.id}`);
      return response;
    } catch (error: any) {
      console.error(`❌ [Resend API Error] Failed to send email to ${to}:`, error.message);
      throw error;
    }
  }

  console.error('❌ [Email Service Error] No active email provider configured (SMTP_USER/SMTP_PASS or RESEND_API_KEY missing).');
  throw new Error('SMTP_CONFIG_MISSING');
};

/**
 * Send a password reset email using Nodemailer (Gmail SMTP) or Resend API fallback
 */
export const sendPasswordResetEmail = async (to: string, name: string, resetUrl: string): Promise<any> => {
  console.log(`📨 [Email Service Queue] Dispatching password reset email to: ${to}...`);

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e4e4e7; border-radius: 12px;">
      <h2 style="color: #7c5cff;">Gnani Password Reset</h2>
      <p>Hello ${name},</p>
      <p>We received a request to reset your password. Click the button below to set a new password:</p>
      <div style="margin: 25px 0;">
        <a href="${resetUrl}" style="background-color: #7c5cff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Reset Password</a>
      </div>
      <p>Or copy and paste this link into your browser:</p>
      <p><a href="${resetUrl}">${resetUrl}</a></p>
      <hr style="border: 0; border-top: 1px solid #e4e4e7; margin: 20px 0;">
      <p style="font-size: 11px; color: #a1a1aa;">This link will expire in 1 hour. If you did not request this reset, you can safely ignore this email.</p>
    </div>
  `;

  // 1. Try Nodemailer Gmail SMTP if configured
  if (transporter) {
    try {
      const info = await transporter.sendMail({
        from: fromEmail,
        to,
        subject: 'Gnani Password Reset Request',
        html,
      });
      console.log(`✉️ [Nodemailer SMTP Sent] Password reset email successfully sent. Message ID: ${info.messageId}`);
      return info;
    } catch (error: any) {
      console.error(`❌ [Nodemailer SMTP Error] Failed to send email via SMTP to ${to}:`, error.message);
      if (!resendClient) throw error;
      console.log('🔄 Falling back to Resend API...');
    }
  }

  // 2. Try Resend API if configured
  if (resendClient) {
    try {
      const response = await resendClient.emails.send({
        from: fromEmail,
        to,
        subject: 'Gnani Password Reset Request',
        html,
      });
      if (response.error) throw new Error(response.error.message);
      console.log(`✉️ [Resend API Sent] Password reset email sent. ID: ${response.data?.id}`);
      return response;
    } catch (error: any) {
      console.error(`❌ [Resend API Error] Failed to send email to ${to}:`, error.message);
      throw error;
    }
  }

  console.error('❌ [Email Service Error] No active email provider configured (SMTP_USER/SMTP_PASS or RESEND_API_KEY missing).');
  throw new Error('SMTP_CONFIG_MISSING');
};
