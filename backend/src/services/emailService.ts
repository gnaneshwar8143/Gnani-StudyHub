import dns from 'dns';
import nodemailer from 'nodemailer';
import axios from 'axios';

// Force DNS resolution to prefer IPv4 first globally
try {
  dns.setDefaultResultOrder('ipv4first');
} catch (e) {
  // Ignored if unsupported in legacy Node environments
}

const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
const smtpPort = Number(process.env.SMTP_PORT) || 587;
const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
const smtpUser = process.env.SMTP_USER || '';
const smtpPass = process.env.SMTP_PASS || '';

const fromAddress = process.env.FROM_EMAIL || smtpUser || 'Gnani Support <pochammalagnaneshwar912@gmail.com>';

const extractCleanEmail = (addr: string): string => {
  if (addr.includes('<') && addr.includes('>')) {
    const parts = addr.split('<');
    if (parts.length > 1 && parts[1]) {
      return parts[1].replace('>', '').trim();
    }
  }
  return addr.trim();
};

/**
 * Configure Nodemailer Transporter as SMTP fallback
 */
export const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure,
  requireTLS: !smtpSecure,
  family: 4,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
  connectionTimeout: 15000,
  greetingTimeout: 15000,
  socketTimeout: 20000,
  tls: {
    rejectUnauthorized: false,
  },
} as nodemailer.TransportOptions);

/**
 * Verify Transporter connection / Brevo API during server startup
 */
export const verifyTransporterOnStartup = async (): Promise<boolean> => {
  if (process.env.BREVO_API_KEY) {
    console.log('📡 [Brevo API Service] Brevo API Key detected. Engine ready for HTTPS email delivery on Port 443.');
    return true;
  }

  console.log(`📡 [SMTP Startup Verification] Connecting to ${smtpHost}:${smtpPort} (IPv4 mode, secure=${smtpSecure})...`);
  if (!smtpUser || !smtpPass) {
    console.warn('⚠️ [Email Service Warning] Neither BREVO_API_KEY nor SMTP credentials (SMTP_USER/SMTP_PASS) configured.');
    return false;
  }

  try {
    await transporter.verify();
    console.log(`✅ [SMTP Startup Success] Authenticated and verified connection to ${smtpHost}:${smtpPort}`);
    return true;
  } catch (error: any) {
    console.error(`❌ [SMTP Startup Connection Error] Failed to verify connection to ${smtpHost}:${smtpPort}:`, error.message);
    return false;
  }
};

/**
 * Send transactional email via Brevo HTTP API (Port 443 HTTPS) or Nodemailer SMTP fallback
 */
const sendEmail = async (toEmail: string, recipientName: string, subject: string, htmlContent: string): Promise<any> => {
  const currentBrevoKey = process.env.BREVO_API_KEY;

  // 1. Try Brevo HTTP REST API (Bypasses all firewall port blocks)
  if (currentBrevoKey) {
    try {
      console.log(`📨 [Brevo API Queue] Sending email to ${toEmail} via Brevo HTTPS API...`);
      const response = await axios.post(
        'https://api.brevo.com/v3/smtp/email',
        {
          sender: { name: 'Gnani Support', email: extractCleanEmail(fromAddress) },
          to: [{ email: toEmail, name: recipientName }],
          subject,
          htmlContent,
        },
        {
          headers: {
            'accept': 'application/json',
            'api-key': currentBrevoKey,
            'content-type': 'application/json',
          },
          timeout: 15000,
        }
      );

      console.log(`✉️ [Brevo API Sent] Email delivered to ${toEmail}. Message ID: ${response.data?.messageId}`);
      return response.data;
    } catch (error: any) {
      console.error(`❌ [Brevo API Error] Failed to send email via Brevo API:`, error.response?.data || error.message);
      if (!smtpUser || !smtpPass) throw error;
      console.log('🔄 Falling back to Nodemailer SMTP...');
    }
  }

  // 2. Fallback to Nodemailer SMTP if configured
  if (smtpUser && smtpPass) {
    try {
      console.log(`📨 [Nodemailer SMTP Queue] Sending email to ${toEmail} via SMTP...`);
      const info = await transporter.sendMail({
        from: fromAddress,
        to: toEmail,
        subject,
        html: htmlContent,
      });
      console.log(`✉️ [Nodemailer SMTP Sent] Email delivered to ${toEmail}. Message ID: ${info.messageId}`);
      return info;
    } catch (error: any) {
      console.error(`❌ [Nodemailer SMTP Error] Failed to send email via SMTP to ${toEmail}:`, error.message);
      throw error;
    }
  }

  console.error('❌ [Email Service Error] No active email provider configured (BREVO_API_KEY or SMTP_USER/SMTP_PASS missing).');
  throw new Error('SMTP_CONFIG_MISSING');
};

/**
 * Send a verification email
 */
export const sendVerificationEmail = async (to: string, name: string, verifyUrl: string): Promise<any> => {
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
  return sendEmail(to, name, 'Verify your Gnani StudyHub Account', html);
};

/**
 * Send a password reset email
 */
export const sendPasswordResetEmail = async (to: string, name: string, resetUrl: string): Promise<any> => {
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
  return sendEmail(to, name, 'Reset your Gnani StudyHub Password', html);
};

/**
 * Send a contact form email
 */
export const sendContactEmail = async (fromEmail: string, name: string, message: string): Promise<any> => {
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
  return sendEmail(smtpUser || fromEmail, name, `[Gnani Support] Message from ${name}`, html);
};
