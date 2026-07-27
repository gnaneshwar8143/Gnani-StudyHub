import dns from 'dns';
import nodemailer from 'nodemailer';

// Force DNS resolution to prefer IPv4 first globally
try {
  dns.setDefaultResultOrder('ipv4first');
} catch (e) {
  // Ignored if unsupported in legacy Node environments
}

const host = process.env.SMTP_HOST || 'smtp.gmail.com';
const port = Number(process.env.SMTP_PORT) || 465;
const secure = process.env.SMTP_SECURE === 'true' || port === 465;
const user = process.env.SMTP_USER || '';
const pass = process.env.SMTP_PASS || '';

const fromAddress = process.env.FROM_EMAIL || user || 'Gnani Support <noreply@gnani.app>';

/**
 * Configure Nodemailer Transporter
 * - family: 4 forces IPv4 socket connection to prevent Render ETIMEDOUT on IPv6 addresses (2607:f8b0:4004:c21::6d:587)
 */
export const transporter = nodemailer.createTransport({
  host,
  port,
  secure, // true for 465 (SSL), false for 587 (STARTTLS)
  requireTLS: !secure,
  family: 4, // Force IPv4 networking socket
  auth: {
    user,
    pass,
  },
  connectionTimeout: 15000,
  greetingTimeout: 15000,
  socketTimeout: 20000,
  tls: {
    rejectUnauthorized: false,
  },
} as nodemailer.TransportOptions);

/**
 * Verify Transporter connection during server startup
 */
export const verifyTransporterOnStartup = async (): Promise<boolean> => {
  console.log(`📡 [SMTP Startup Verification] Connecting to ${host}:${port} (IPv4 mode, secure=${secure}) as User: ${user || 'UNCONFIGURED'}...`);
  
  if (!user || !pass) {
    console.error('❌ [SMTP Startup Error] SMTP_USER or SMTP_PASS is missing in environment variables!');
    return false;
  }

  try {
    await transporter.verify();
    console.log(`✅ [SMTP Startup Success] Successfully authenticated and verified connection to ${host}:${port}`);
    return true;
  } catch (error: any) {
    console.error(`❌ [SMTP Startup Connection Error] Failed to verify connection to ${host}:${port}:`);
    console.error(error.stack || error.message || error);
    return false;
  }
};

/**
 * Send a verification email using Nodemailer Gmail SMTP
 */
export const sendVerificationEmail = async (to: string, name: string, verifyUrl: string): Promise<nodemailer.SentMessageInfo> => {
  console.log(`📨 [Email Service Queue] Queuing verification email to: ${to}`);

  if (!user || !pass) {
    console.error('❌ [Email Service Error] SMTP_USER or SMTP_PASS is missing.');
    throw new Error('SMTP_CONFIG_MISSING');
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e4e4e7; border-radius: 12px; background-color: #ffffff;">
      <div style="text-align: center; padding-bottom: 20px;">
        <h2 style="color: #7c5cff; margin: 0;">Gnani StudyHub</h2>
        <p style="color: #71717a; font-size: 14px;">Verify your account email address</p>
      </div>
      <div style="padding: 20px; background-color: #f4f4f5; border-radius: 8px;">
        <p style="color: #18181b; font-size: 15px;">Hello <strong>${name}</strong>,</p>
        <p style="color: #3f3f46; font-size: 14px; line-height: 1.6;">
          Thank you for joining Gnani StudyHub! Please click the button below to verify your email address and activate your account:
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${verifyUrl}" style="background-color: #7c5cff; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
            Verify Email Address
          </a>
        </div>
        <p style="color: #71717a; font-size: 12px;">Or copy and paste this link into your browser:</p>
        <p style="word-break: break-all; font-size: 12px;"><a href="${verifyUrl}" style="color: #7c5cff;">${verifyUrl}</a></p>
      </div>
      <div style="text-align: center; margin-top: 20px; color: #a1a1aa; font-size: 11px;">
        <p>If you did not request this email, please ignore it.</p>
      </div>
    </div>
  `;

  try {
    const info = await transporter.sendMail({
      from: fromAddress,
      to,
      subject: 'Verify your Gnani StudyHub Account',
      html,
    });
    console.log(`✉️ [Email Service Sent] Verification email delivered to ${to}. Message ID: ${info.messageId}`);
    return info;
  } catch (error: any) {
    console.error(`❌ [Email Service Error] Failed to send verification email to ${to}:`);
    console.error(error.stack || error.message || error);
    throw error;
  }
};

/**
 * Send a password reset email using Nodemailer Gmail SMTP
 */
export const sendPasswordResetEmail = async (to: string, name: string, resetUrl: string): Promise<nodemailer.SentMessageInfo> => {
  console.log(`📨 [Email Service Queue] Queuing password reset email to: ${to}`);

  if (!user || !pass) {
    console.error('❌ [Email Service Error] SMTP_USER or SMTP_PASS is missing.');
    throw new Error('SMTP_CONFIG_MISSING');
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e4e4e7; border-radius: 12px; background-color: #ffffff;">
      <div style="text-align: center; padding-bottom: 20px;">
        <h2 style="color: #7c5cff; margin: 0;">Gnani StudyHub</h2>
        <p style="color: #71717a; font-size: 14px;">Password Reset Request</p>
      </div>
      <div style="padding: 20px; background-color: #f4f4f5; border-radius: 8px;">
        <p style="color: #18181b; font-size: 15px;">Hello <strong>${name}</strong>,</p>
        <p style="color: #3f3f46; font-size: 14px; line-height: 1.6;">
          We received a request to reset the password for your account. Click the button below to set a new password:
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetUrl}" style="background-color: #7c5cff; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
            Reset Password
          </a>
        </div>
        <p style="color: #71717a; font-size: 12px;">Or copy and paste this link into your browser:</p>
        <p style="word-break: break-all; font-size: 12px;"><a href="${resetUrl}" style="color: #7c5cff;">${resetUrl}</a></p>
      </div>
      <div style="text-align: center; margin-top: 20px; color: #a1a1aa; font-size: 11px;">
        <p>This link is valid for 1 hour. If you did not request a password reset, you can safely ignore this email.</p>
      </div>
    </div>
  `;

  try {
    const info = await transporter.sendMail({
      from: fromAddress,
      to,
      subject: 'Reset your Gnani StudyHub Password',
      html,
    });
    console.log(`✉️ [Email Service Sent] Password reset email delivered to ${to}. Message ID: ${info.messageId}`);
    return info;
  } catch (error: any) {
    console.error(`❌ [Email Service Error] Failed to send password reset email to ${to}:`);
    console.error(error.stack || error.message || error);
    throw error;
  }
};

/**
 * Send a contact form email using Nodemailer Gmail SMTP
 */
export const sendContactEmail = async (fromEmail: string, name: string, message: string): Promise<nodemailer.SentMessageInfo> => {
  console.log(`📨 [Email Service Queue] Queuing contact form message from: ${fromEmail}`);

  if (!user || !pass) {
    console.error('❌ [Email Service Error] SMTP_USER or SMTP_PASS is missing.');
    throw new Error('SMTP_CONFIG_MISSING');
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e4e4e7; border-radius: 12px; background-color: #ffffff;">
      <div style="text-align: center; padding-bottom: 20px;">
        <h2 style="color: #7c5cff; margin: 0;">Gnani Support Contact Form</h2>
      </div>
      <div style="padding: 20px; background-color: #f4f4f5; border-radius: 8px;">
        <p><strong>From:</strong> ${name} (&lt;${fromEmail}&gt;)</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background: #ffffff; padding: 15px; border-radius: 6px; border: 1px solid #e4e4e7;">${message}</p>
      </div>
    </div>
  `;

  try {
    const info = await transporter.sendMail({
      from: fromAddress,
      to: user,
      replyTo: fromEmail,
      subject: `[Gnani Support] Message from ${name}`,
      html,
    });
    console.log(`✉️ [Email Service Sent] Contact form email delivered. Message ID: ${info.messageId}`);
    return info;
  } catch (error: any) {
    console.error(`❌ [Email Service Error] Failed to send contact email:`, error.stack || error.message || error);
    throw error;
  }
};
