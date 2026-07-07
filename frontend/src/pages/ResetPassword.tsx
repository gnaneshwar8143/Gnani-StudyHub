import React, { useState, useRef } from 'react';
import { 
  Lock, 
  Eye, 
  EyeOff, 
  Loader2, 
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import api from '../lib/api';

interface ResetPasswordProps {
  token: string;
  onBack: () => void;
}

export const ResetPassword: React.FC<ResetPasswordProps> = ({ token, onBack }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [capsLockActive, setCapsLockActive] = useState(false);

  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handlePasswordKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const isCaps = e.getModifierState && e.getModifierState('CapsLock');
    setCapsLockActive(isCaps);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password || !confirmPassword) return;

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await api.post('/auth/reset-password', {
        token,
        password
      });
      setSuccess(true);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to reset password. The link may have expired.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-brand-bg text-brand-text-primary font-sans relative overflow-hidden p-4 antialiased">
      {/* Background soft meshes */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[130px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-brand-surface-secondary border border-brand-border rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-3xl relative z-10 space-y-8"
      >
        <div className="flex flex-col items-center text-center space-y-5 px-1">
          <div className="flex justify-center select-none">
            <img src="/gnani-logo.png" alt="Gnani Logo" className="h-[52px] w-[52px] object-contain" />
          </div>

          <h1 className="text-3xl font-black tracking-tight text-brand-text-primary select-none">
            Reset Password
          </h1>

          <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed max-w-xs select-none">
            Enter your new secure password credentials below.
          </p>
        </div>

        {success ? (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-brand-success/10 border border-brand-success/30 flex items-start gap-3 text-left">
              <CheckCircle className="h-5 w-5 text-brand-success flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-brand-text-primary">Password Updated</h4>
                <p className="text-xs text-brand-text-secondary mt-1 leading-relaxed">
                  Your password has been successfully reset. You can now log in with your new credentials.
                </p>
              </div>
            </div>

            <button
              onClick={onBack}
              className="w-full py-2.5 bg-brand-primary hover:bg-brand-primary-hover text-white border-brand-primary text-xs font-bold rounded-xl transition-all cursor-pointer select-none"
            >
              Return to Login
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 rounded-xl bg-brand-danger/10 border border-brand-danger/30 flex items-start gap-2.5 text-left text-xs text-brand-danger font-semibold">
                <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-1.5 text-left">
              <label className="text-xs font-medium text-brand-text-secondary select-none">New Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3 h-4 w-4 text-brand-text-secondary" />
                <input
                  ref={passwordInputRef}
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handlePasswordKeyDown}
                  className="w-full bg-brand-bg border border-brand-border rounded-xl pl-10 pr-10 py-2.5 text-xs text-brand-text-primary focus:outline-none focus:border-brand-primary transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-brand-text-secondary hover:text-brand-text-primary transition-colors cursor-pointer"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                </button>
              </div>
            </div>

            <div className="space-y-1.5 text-left">
              <label className="text-xs font-medium text-brand-text-secondary select-none">Confirm New Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3 h-4 w-4 text-brand-text-secondary" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Repeat your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-brand-bg border border-brand-border rounded-xl pl-10 pr-10 py-2.5 text-xs text-brand-text-primary focus:outline-none focus:border-brand-primary transition-colors"
                />
              </div>
            </div>

            {capsLockActive && (
              <div className="text-[10px] text-amber-500 font-semibold text-left pl-1 select-none flex items-center gap-1">
                ⚠️ Caps Lock is active
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 bg-brand-card hover:bg-brand-surface-secondary disabled:bg-brand-surface disabled:text-brand-text-secondary text-brand-text-primary text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md select-none mt-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  <span>Saving...</span>
                </>
              ) : (
                'Update Password'
              )}
            </button>

            <button
              type="button"
              onClick={onBack}
              className="w-full py-2 text-xs text-brand-text-secondary hover:text-brand-text-primary transition-colors cursor-pointer select-none"
            >
              Go Back
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};
