import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const fromEmail = process.env.RESEND_FROM_EMAIL || 'Gnani Support <onboarding@resend.dev>';

/**
 * Helper to translate Resend API errors into user-friendly strings
 */
const mapResendError = (error: any): string => {
  if (error.message && error.message.includes('API key')) {
    return 'Email service authentication key is invalid or not configured.';
  }
  return 'Failed to dispatch verification email. Please verify your address and try again.';
};

/**
 * Send a verification email using Resend HTTP API
 */
export const sendVerificationEmail = async (to: string, name: string, verifyUrl: string): Promise<any> => {
  if (!resend) {
    console.error('❌ [Email Service] Resend client not initialized due to missing RESEND_API_KEY.');
    throw new Error('SMTP_CONFIG_MISSING');
  }

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

  try {
    const response = await resend.emails.send({
      from: fromEmail,
      to,
      subject: 'Gnani Email Verification',
      html
    });

    if (response.error) {
      throw new Error(response.error.message || 'Resend API Dispatch Failed');
    }

    console.log(`✉️ [Email Service Sent] Verification email successfully sent. ID: ${response.data?.id}`);
    return response;
  } catch (error: any) {
    console.error(`❌ [Email Service Dispatch Error] Failed to send email to ${to}:`, error.stack || error.message || error);
    throw error;
  }
};

/**
 * Send a password reset email using Resend HTTP API
 */
export const sendPasswordResetEmail = async (to: string, name: string, resetUrl: string): Promise<any> => {
  if (!resend) {
    console.error('❌ [Email Service] Resend client not initialized due to missing RESEND_API_KEY.');
    throw new Error('SMTP_CONFIG_MISSING');
  }

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

  try {
    const response = await resend.emails.send({
      from: fromEmail,
      to,
      subject: 'Gnani Password Reset Request',
      html
    });

    if (response.error) {
      throw new Error(response.error.message || 'Resend API Dispatch Failed');
    }

    console.log(`✉️ [Email Service Sent] Password reset email successfully sent. ID: ${response.data?.id}`);
    return response;
  } catch (error: any) {
    console.error(`❌ [Email Service Dispatch Error] Failed to send email to ${to}:`, error.stack || error.message || error);
    throw error;
  }
};
