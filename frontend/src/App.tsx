import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from './context/AuthContext';
import { useTranslation } from './context/I18nContext';
import api from './lib/api';
import { ArrowRight, Loader2, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Core layout & tracking imports
import { DashboardLayout } from './components/DashBoardLayout';
import { Dashboard } from './components/Dashboard';
import { GoalsBoard } from './components/GoalsBoard';
import { HabitsPage } from './components/HabitsPage';
import { CalendarPage } from './components/CalendarPage';
import { ProfileHub } from './components/ProfileHub';
import { ResetPassword } from './pages/ResetPassword';
import { AnimatedLogo } from './components/common/AnimatedLogo';

import type { Objective } from './components/GoalsBoard';
import type { Habit } from './components/HabitsPage';

const MOTIVATIONAL_QUOTES = [
  "Turn today's effort into tomorrow's success.",
  'Success starts with showing up.',
  'Every focused hour brings you closer to your goals.',
  'Stay disciplined. Stay unstoppable.',
  'One task today is better than ten planned for tomorrow.',
  'Consistency beats motivation.',
];

const heroTransition = (delay: number) => ({
  duration: 0.5,
  ease: 'easeOut' as const,
  delay,
});

export default function App() {
  const { login, user, accessToken } = useAuth();
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Form input fields tracking states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Status reporting states
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Authentication & Security states
  const [showPassword, setShowPassword] = useState(false);
  const [capsLockActive, setCapsLockActive] = useState(false);
  const [rememberMe, setRememberMe] = useState(() => {
    return localStorage.getItem('lifeos_remember_me') === 'true';
  });
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [resetMessage, setResetMessage] = useState('');
  const [resetError, setResetError] = useState('');
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockTimer, setLockTimer] = useState(0);
  const [shakeKey, setShakeKey] = useState(0);
  const [socialLoading, setSocialLoading] = useState<'Google' | 'GitHub' | null>(null);
  const [verifyToken, setVerifyToken] = useState<string | null>(null);
  const [verificationState, setVerificationState] = useState<'verifying' | 'success' | 'error' | null>(null);
  const [verificationMessage, setVerificationMessage] = useState('');
  const [resetPasswordToken, setResetPasswordToken] = useState<string | null>(null);
  
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [motivationalQuote] = useState(
    () => MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)]
  );

  const handlePasswordKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const isCaps = e.getModifierState && e.getModifierState('CapsLock');
    setCapsLockActive(isCaps);
  };

  // Lock ticker countdown timer
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isLocked && lockTimer > 0) {
      interval = setInterval(() => {
        setLockTimer((prev) => {
          if (prev <= 1) {
            setIsLocked(false);
            setFailedAttempts(0);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isLocked, lockTimer]);

  // Retrieve saved email if Remember Me was active
  useEffect(() => {
    if (rememberMe) {
      const savedEmail = localStorage.getItem('lifeos_saved_email');
      if (savedEmail) setEmail(savedEmail);
    }
  }, [rememberMe]);

  // Load custom visual core accent on boot
  useEffect(() => {
    const savedTheme = localStorage.getItem('lifeos_theme_accent') || 'violet';
    const themeMaps: Record<string, { primary: string; secondary: string; accent: string }> = {
      violet: { primary: '#7c5cff', secondary: '#a78bfa', accent: '#4f46e5' },
      emerald: { primary: '#22c55e', secondary: '#86efac', accent: '#15803d' },
      amber: { primary: '#f59e0b', secondary: '#fde047', accent: '#b45309' },
      crimson: { primary: '#ef4444', secondary: '#fca5a5', accent: '#b91c1c' },
    };
    const activeColors = themeMaps[savedTheme];
    if (activeColors) {
      document.documentElement.style.setProperty('--color-brand-primary', activeColors.primary);
      document.documentElement.style.setProperty('--color-brand-secondary', activeColors.secondary);
      document.documentElement.style.setProperty('--color-brand-accent', activeColors.accent);
    }
  }, []);

  // Handle verify-email, reset-password, and OAuth success/error callbacks
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pathname = window.location.pathname;

    // Check OAuth redirect success parameters
    const oauthToken = params.get('token');
    const oauthUserStr = params.get('user');
    const isOAuthSuccess = pathname.includes('/oauth-success') || (oauthToken && oauthUserStr);

    if (isOAuthSuccess && oauthToken && oauthUserStr) {
      try {
        const decodedUser = JSON.parse(decodeURIComponent(oauthUserStr));
        login(oauthToken, decodedUser);
        window.history.replaceState({}, document.title, '/');
      } catch (err) {
        console.error('Failed to parse OAuth user payload:', err);
        setError('❌ Social login session creation failed.');
      }
    }

    // Check OAuth error query param
    const oauthError = params.get('error');
    if (oauthError) {
      let errorMsg = 'Social authentication failed.';
      if (oauthError === 'google_auth_cancelled') errorMsg = 'Google login was cancelled.';
      if (oauthError === 'github_auth_cancelled') errorMsg = 'GitHub login was cancelled.';
      if (oauthError === 'email_not_provided') errorMsg = 'OAuth provider did not return a valid email address.';
      if (oauthError === 'google_oauth_failed') errorMsg = 'Google OAuth verification failed.';
      if (oauthError === 'github_oauth_failed') errorMsg = 'GitHub OAuth verification failed.';
      setError(`❌ ${errorMsg}`);
      window.history.replaceState({}, document.title, '/');
    }

    // Check Verification token
    const verifyTokenVal = params.get('token') || params.get('verifyToken');
    const isVerify = pathname.includes('/verify-email') || params.has('verifyToken');

    if (isVerify && verifyTokenVal && !isOAuthSuccess) {
      setVerifyToken(verifyTokenVal);
      setVerificationState('verifying');
      
      api.post('/auth/verify-email', { token: verifyTokenVal })
        .then((res) => {
          setVerificationState('success');
          setVerificationMessage(res.data.message);
        })
        .catch((err) => {
          setVerificationState('error');
          setVerificationMessage(err.response?.data?.message || 'Verification link invalid or expired.');
        });
    }

    // Check Reset Password token
    let resetTokenVal = params.get('resetToken');
    const isReset = pathname.includes('/reset-password');
    
    if (!resetTokenVal && pathname.includes('/reset-password/')) {
      const parts = pathname.split('/reset-password/');
      if (parts.length > 1 && parts[1]) {
        resetTokenVal = parts[1];
      }
    } else if (!resetTokenVal && isReset) {
      resetTokenVal = params.get('token');
    }

    if (resetTokenVal) {
      setResetPasswordToken(resetTokenVal);
    }
  }, []);

  // Lifted Objectives State
  const [objectives, setObjectives] = useState<Objective[]>([]);

  // Stats State
  const [stats, setStats] = useState({
    xp: 0,
    studyTime: 0,
    focusScore: 0,
    totalSessions: 0,
    totalCompletedTasks: 0
  });

  const fetchObjectives = async () => {
    try {
      const response = await api.get('/objectives');
      const mapped = response.data.map((o: any) => ({ ...o, id: o._id }));
      setObjectives(mapped);
    } catch (err: any) {
      console.error('Failed to fetch objectives:', err);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await api.get('/user/stats');
      setStats(response.data);
    } catch (err) {
      console.error('Failed to fetch stats:', err);
    }
  };

  const handleUpdateStats = async (updatedFields: Partial<typeof stats>) => {
    try {
      const response = await api.put('/user/stats', updatedFields);
      setStats(response.data);
    } catch (err) {
      console.error('Failed to update stats:', err);
    }
  };

  const handleAddObjective = async (
    title: string, 
    priority: 'High' | 'Medium' | 'Low', 
    status: Objective['status'] = 'To Do', 
    dueDate?: string
  ) => {
    try {
      const response = await api.post('/objectives', {
        title,
        priority,
        status,
        dueDate: dueDate || new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
        taskType: activeTab === 'calendar' ? 'task' : 'goal',
        progress: status === 'Completed' ? 100 : status === 'In Review' ? 80 : status === 'In Progress' ? 40 : 0
      });
      const newObj = { ...response.data, id: response.data._id };
      setObjectives(prev => [...prev, newObj]);
    } catch (err) {
      console.error('Failed to add objective:', err);
    }
  };

  const handleToggleObjective = async (id: string) => {
    const objective = objectives.find(o => o.id === id);
    if (!objective) return;
    const nextStatus = objective.status === 'Completed' ? 'In Progress' : 'Completed';
    const nextProgress = nextStatus === 'Completed' ? 100 : 40;
    try {
      const response = await api.put(`/objectives/${id}`, {
        status: nextStatus,
        progress: nextProgress,
        completed: nextStatus === 'Completed'
      });
      const updated = { ...response.data, id: response.data._id };
      setObjectives(prev => prev.map(o => o.id === id ? updated : o));
      
      if (nextStatus === 'Completed') {
        await handleUpdateStats({ 
          xp: stats.xp + 100, 
          totalCompletedTasks: stats.totalCompletedTasks + 1 
        });
      } else {
        await handleUpdateStats({
          xp: Math.max(0, stats.xp - 100),
          totalCompletedTasks: Math.max(0, stats.totalCompletedTasks - 1)
        });
      }
    } catch (err) {
      console.error('Failed to toggle objective:', err);
    }
  };

  const handleUpdateObjectiveStatus = async (id: string, status: Objective['status']) => {
    const objective = objectives.find(o => o.id === id);
    if (!objective) return;
    const progress = status === 'Completed' ? 100 : status === 'In Review' ? 80 : status === 'In Progress' ? 40 : 0;
    try {
      const response = await api.put(`/objectives/${id}`, {
        status,
        progress,
        completed: status === 'Completed'
      });
      const updated = { ...response.data, id: response.data._id };
      setObjectives(prev => prev.map(o => o.id === id ? updated : o));
      
      if (status === 'Completed' && objective.status !== 'Completed') {
        await handleUpdateStats({ 
          xp: stats.xp + 100, 
          totalCompletedTasks: stats.totalCompletedTasks + 1 
        });
      } else if (status !== 'Completed' && objective.status === 'Completed') {
        await handleUpdateStats({
          xp: Math.max(0, stats.xp - 100),
          totalCompletedTasks: Math.max(0, stats.totalCompletedTasks - 1)
        });
      }
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const handleScheduleObjective = async (id: string, date: string | undefined, time: string | undefined) => {
    try {
      const response = await api.put(`/objectives/${id}`, {
        scheduledDate: date,
        scheduledTime: time
      });
      const updated = { ...response.data, id: response.data._id };
      setObjectives(prev => prev.map(o => o.id === id ? updated : o));
    } catch (err) {
      console.error('Failed to schedule objective:', err);
    }
  };

  const handleUpdateObjective = async (id: string, updates: Partial<Objective>) => {
    try {
      const response = await api.put(`/objectives/${id}`, updates);
      const updated = { ...response.data, id: response.data._id };
      setObjectives(prev => prev.map(o => o.id === id ? updated : o));
    } catch (err) {
      console.error('Failed to update objective:', err);
    }
  };

  const handleDeleteObjective = async (id: string) => {
    try {
      await api.delete(`/objectives/${id}`);
      setObjectives(prev => prev.filter(o => o.id !== id));
    } catch (err) {
      console.error('Failed to delete objective:', err);
    }
  };

  const handleCompleteAllObjectives = async () => {
    try {
      const incomplete = objectives.filter(o => o.status !== 'Completed');
      const promises = incomplete.map(o => 
        api.put(`/objectives/${o.id}`, { status: 'Completed', progress: 100, completed: true })
      );
      await Promise.all(promises);
      
      setObjectives(prev => prev.map(o => ({ ...o, status: 'Completed', progress: 100 })));
      
      await handleUpdateStats({
        xp: stats.xp + (incomplete.length * 100),
        totalCompletedTasks: stats.totalCompletedTasks + incomplete.length
      });
    } catch (err) {
      console.error('Failed to complete all objectives:', err);
    }
  };

  // Lifted Habits State
  const [habits, setHabits] = useState<Habit[]>([]);
  const [habitsLoading, setHabitsLoading] = useState(true);
  const [habitsError, setHabitsError] = useState('');

  const fetchHabits = async () => {
    try {
      setHabitsError('');
      const response = await api.get('/habits');
      const mapped = response.data.map((h: any) => ({ ...h, id: h._id }));
      setHabits(mapped);
    } catch (err: any) {
      const errMsg = err.response?.data?.message || err.message || 'Failed to fetch neuro-habit records.';
      setHabitsError(errMsg);
    } finally {
      setHabitsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchHabits();
      fetchObjectives();
      fetchStats();
    } else {
      setObjectives([]);
      setHabits([]);
      setStats({
        xp: 0,
        studyTime: 0,
        focusScore: 0,
        totalSessions: 0,
        totalCompletedTasks: 0
      });
    }
  }, [user]);

  const handleAddHabit = async (name: string) => {
    try {
      setHabitsError('');
      const response = await api.post('/habits', { name });
      const newHabit = { ...response.data, id: response.data._id };
      setHabits(prev => [...prev, newHabit]);
      
      // Update XP for creating habit
      await handleUpdateStats({ xp: stats.xp + 50 });
    } catch (err: any) {
      const errMsg = err.response?.data?.message || err.message || 'Failed to record habit vector.';
      setHabitsError(errMsg);
      throw err;
    }
  };

  const handleToggleHabit = async (id: string) => {
    try {
      setHabitsError('');
      const response = await api.put(`/habits/${id}/toggle`);
      const updated = response.data;
      setHabits(prev => prev.map(h => h._id === id ? updated : h));
      
      // Update XP for completing habit
      if (updated.completed) {
        await handleUpdateStats({ xp: stats.xp + 50 });
      }
    } catch (err: any) {
      const errMsg = err.response?.data?.message || err.message || 'Failed to toggle completion state.';
      setHabitsError(errMsg);
      throw err;
    }
  };

  const handleDeleteHabit = async (id: string) => {
    try {
      setHabitsError('');
      await api.delete(`/habits/${id}`);
      setHabits(prev => prev.filter(h => h._id !== id));
    } catch (err: any) {
      const errMsg = err.response?.data?.message || err.message || 'Failed to delete habit vector.';
      setHabitsError(errMsg);
      throw err;
    }
  };

  const handleUpdateProfile = (profileName: string, profileEmail: string) => {
    if (user) {
      const updatedUser = { ...user, name: profileName, email: profileEmail };
      login(accessToken || '', updatedUser);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin && (isLocked || failedAttempts >= 5)) return;
    setError('');

    // Minimum password length check - aligned with backend User schema (minlength: 8)
    if (password.length < 8) {
      setError('❌ Password must be at least 8 characters.');
      setShakeKey(prev => prev + 1);
      setTimeout(() => passwordInputRef.current?.focus(), 50);
      return;
    }

    setIsLoading(true);

    try {
      if (isLogin) {
        const response = await api.post('/auth/login', { email, password });
        if (rememberMe) {
          localStorage.setItem('lifeos_remember_me', 'true');
          localStorage.setItem('lifeos_saved_email', email);
        } else {
          localStorage.removeItem('lifeos_remember_me');
          localStorage.removeItem('lifeos_saved_email');
        }
        login(response.data.accessToken, response.data.user);
      } else {
        const response = await api.post('/auth/signup', { name, email, password });
        setIsLogin(true);
        setPassword('');
        setError('');
        setSuccessMessage(response.data.message || 'Registration successful! Verification email sent.');
      }
    } catch (err: any) {
      const fallbackMsg = isLogin 
        ? 'Unable to sign in. Please check your email and password.' 
        : 'Registration failed. Please check your details and try again.';
      const msg = err.response?.data?.message || fallbackMsg;
      setError(`❌ ${msg}`);
      setShakeKey(prev => prev + 1);
      
      // Auto focus password input on error
      setTimeout(() => passwordInputRef.current?.focus(), 50);

      // Increment failed attempts only on login failure
      if (isLogin) {
        setFailedAttempts((prev) => {
          const next = prev + 1;
          if (next >= 5) {
            setIsLocked(true);
            setLockTimer(30);
          }
          return next;
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: 'Google' | 'GitHub') => {
    setSocialLoading(provider);
    const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
    window.location.href = `${apiBaseUrl}/auth/${provider.toLowerCase()}`;
  };

  // Password Reset View Control
  if (resetPasswordToken) {
    return (
      <ResetPassword 
        token={resetPasswordToken} 
        onBack={() => {
          setResetPasswordToken(null);
          window.history.replaceState({}, document.title, '/');
        }}
      />
    );
  }

  // Email Verification View Control
  if (verifyToken) {
    return (
      <div className="min-h-screen w-screen flex items-center justify-center bg-brand-bg text-brand-text-primary font-sans relative overflow-hidden p-4 antialiased">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[130px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-brand-surface-secondary border border-brand-border rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-3xl relative z-10 text-center space-y-6"
        >
          <div className="flex justify-center select-none">
            <AnimatedLogo type="login" size={52} />
          </div>

          <h2 className="text-2xl font-black text-brand-text-primary">Gnani Verification</h2>

          {verificationState === 'verifying' && (
            <div className="space-y-4">
              <div className="flex justify-center py-2">
                <Loader2 className="h-7 w-7 animate-spin text-brand-primary" />
              </div>
              <p className="text-xs text-brand-text-secondary font-medium">Verifying your Gnani registration token...</p>
            </div>
          )}

          {verificationState === 'success' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-brand-success/10 border border-brand-success/30 text-xs text-brand-success font-semibold leading-relaxed">
                {verificationMessage || 'Email address verified successfully!'}
              </div>
              <p className="text-xs text-brand-text-secondary leading-relaxed font-medium">
                Your Gnani account is now active and ready.
              </p>
              <button
                onClick={() => {
                  setVerifyToken(null);
                  window.history.replaceState({}, document.title, window.location.pathname);
                }}
                className="w-full py-2.5 bg-brand-primary hover:bg-brand-primary-hover text-white border-brand-primary text-xs font-bold rounded-xl transition-all cursor-pointer select-none"
              >
                Go to Login
              </button>
            </div>
          )}

          {verificationState === 'error' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-brand-danger/10 border border-brand-danger/30 text-xs text-brand-danger font-semibold leading-relaxed">
                {verificationMessage || 'Failed to verify email address.'}
              </div>
              <p className="text-xs text-brand-text-secondary leading-relaxed font-medium">
                The verification link is invalid, has expired, or was already used.
              </p>
              <button
                onClick={() => {
                  setVerifyToken(null);
                  window.history.replaceState({}, document.title, window.location.pathname);
                }}
                className="w-full py-2.5 bg-brand-surface-secondary hover:bg-brand-surface-secondary text-brand-text-primary text-xs font-bold rounded-xl transition-all border border-brand-border cursor-pointer select-none"
              >
                Go to Login
              </button>
            </div>
          )}
        </motion.div>
      </div>
    );
  }

  // Authenticated State View Control
  if (user) {
    const maxStreak = habits.length > 0 ? Math.max(...habits.map((h) => h.streak)) : 0;

    return (
      <DashboardLayout 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        stats={stats}
        maxStreak={maxStreak}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {activeTab === 'dashboard' && (
              <Dashboard 
                objectives={objectives}
                onAddObjective={handleAddObjective}
                onToggleObjective={handleToggleObjective}
                onDeleteObjective={handleDeleteObjective}
                onCompleteAllObjectives={handleCompleteAllObjectives}
                habits={habits}
                habitsLoading={habitsLoading}
                habitsError={habitsError}
                onAddHabit={handleAddHabit}
                onToggleHabit={handleToggleHabit}
                onDeleteHabit={handleDeleteHabit}
                stats={stats}
                onUpdateStats={handleUpdateStats}
                onRetryHabits={fetchHabits}
              />
            )}
            {activeTab === 'goals' && (
              <GoalsBoard
                objectives={objectives}
                onAddObjective={handleAddObjective}
                onToggleObjective={handleToggleObjective}
                onUpdateObjectiveStatus={handleUpdateObjectiveStatus}
                onDeleteObjective={handleDeleteObjective}
              />
            )}
            {activeTab === 'habits' && (
              <HabitsPage
                habits={habits}
                habitsLoading={habitsLoading}
                habitsError={habitsError}
                onAddHabit={handleAddHabit}
                onToggleHabit={handleToggleHabit}
                onDeleteHabit={handleDeleteHabit}
                stats={stats}
                onRetryHabits={fetchHabits}
              />
            )}
            {activeTab === 'calendar' && (
              <CalendarPage
                objectives={objectives}
                onScheduleObjective={handleScheduleObjective}
                onAddObjective={handleAddObjective}
                onToggleObjective={handleToggleObjective}
                onDeleteObjective={handleDeleteObjective}
                onUpdateObjective={handleUpdateObjective}
              />
            )}
            {activeTab === 'profile' && (
              <ProfileHub
                objectives={objectives}
                habits={habits}
                currentUser={{ id: user.id || '', name: user.name || '', email: user.email || '' }}
                onUpdateProfile={handleUpdateProfile}
                stats={stats}
                onUpdateStats={handleUpdateStats}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </DashboardLayout>
    );
  }

  // Guest State Form View Control (Login / Signup)
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-brand-bg text-brand-text-primary font-sans relative overflow-hidden p-4 antialiased">
      {/* Background soft meshes */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Back to Home link */}
      <button 
        onClick={() => alert("Redirecting to home page...")}
        className="absolute top-6 left-6 text-brand-text-secondary hover:text-brand-text-primary flex items-center gap-1.5 text-xs font-semibold transition-colors cursor-pointer bg-transparent border-none outline-none select-none"
        aria-label="Back to Home"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
      </button>

      <motion.div 
        key={isLogin ? 'login' : 'signup'}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md bg-brand-surface-secondary border border-brand-border rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-3xl relative z-10 space-y-8"
      >
        <motion.div
          animate={shakeKey > 0 ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="space-y-6 relative"
        >
          {/* Social Loading Overlay */}
          {socialLoading && (
            <div className="absolute -inset-4 bg-brand-surface-secondary backdrop-blur-sm z-30 rounded-[18px] flex flex-col items-center justify-center space-y-3 select-none">
              <Loader2 className="h-8 w-8 animate-spin text-brand-primary" />
              <span className="text-xs text-brand-text-secondary font-bold">Signing in with {socialLoading}...</span>
            </div>
          )}
          {/* Hero */}
          <div className="flex flex-col items-center text-center space-y-5 px-1">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={heroTransition(0)}
              className="select-none flex justify-center mb-2"
            >
              <img src="/gnani-logo.png" alt="Gnani Logo" className="h-[52px] w-[52px] object-contain" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={heroTransition(0.16)}
              className="text-lg sm:text-xl font-semibold text-brand-text-primary select-none"
            >
              {isLogin ? t('auth.welcome') : t('auth.create')}
            </motion.p>

            {isLogin ? (
              <motion.blockquote
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={heroTransition(0.24)}
                className="text-sm sm:text-[15px] text-brand-primary/90 italic leading-relaxed max-w-[280px] select-none"
              >
                &ldquo;{motivationalQuote}&rdquo;
              </motion.blockquote>
            ) : (
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={heroTransition(0.24)}
                className="text-sm sm:text-[15px] text-brand-primary/90 leading-relaxed max-w-[280px] select-none"
              >
                {t('auth.create.sub')}
              </motion.p>
            )}

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={heroTransition(0.32)}
              className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed max-w-xs select-none"
            >
              {isLogin
                ? t('auth.welcome.sub')
                : t('auth.create.sub')}
            </motion.p>
          </div>

          {/* Rate Limiting Lockout Alert */}
          {isLocked && (
            <div className="p-3 rounded-xl bg-brand-danger/10 border border-brand-danger/30 text-xs text-brand-danger font-semibold text-center select-none">
              ❌ Too many attempts. Login locked for {lockTimer}s.
            </div>
          )}

          {/* Form fields */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-medium text-brand-text-secondary select-none">{t('auth.name')}</label>
                <input
                  type="text"
                  required
                  disabled={isLoading || isLocked}
                  placeholder="e.g. John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-2.5 text-xs text-brand-text-primary placeholder-brand-text-muted focus:outline-none focus:ring-1 focus:ring-brand-primary/40 focus:border-brand-primary/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  aria-label="Your Name"
                />
              </div>
            )}

            <div className="space-y-1.5 text-left">
              <label className="text-xs font-medium text-brand-text-secondary select-none">{t('auth.email')}</label>
              <input
                type="email"
                required
                disabled={isLoading || isLocked}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full bg-brand-bg border rounded-xl px-4 py-2.5 text-xs text-brand-text-primary placeholder-brand-text-muted focus:outline-none focus:ring-1 focus:ring-brand-primary/40 disabled:opacity-40 disabled:cursor-not-allowed transition-all ${
                  error && !isLogin ? 'border-red-500/50 focus:border-red-500' : 'border-brand-border focus:border-brand-primary/30'
                }`}
                aria-label="Email Address"
              />
            </div>

            <div className="space-y-1.5 text-left">
              <div className="flex justify-between items-center select-none">
                <label className="text-xs font-medium text-brand-text-secondary">{t('auth.password')}</label>
                {isLogin && (
                  <button
                    type="button"
                    onClick={() => {
                      setShowResetModal(true);
                      setResetSuccess(false);
                      setResetEmail('');
                      setResetMessage('');
                      setResetError('');
                    }}
                    className="text-xs text-brand-text-secondary hover:text-brand-primary font-medium transition-colors cursor-pointer bg-transparent border-none outline-none"
                    aria-label="Forgot Password"
                  >
                    {t('auth.forgot')}
                  </button>
                )}
              </div>
              
              <div className="relative">
                <input
                  ref={passwordInputRef}
                  type={showPassword ? 'text' : 'password'}
                  required
                  disabled={isLoading || isLocked}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handlePasswordKeyDown}
                  onKeyUp={handlePasswordKeyDown}
                  className={`w-full bg-brand-bg border rounded-xl pl-4 pr-10 py-2.5 text-xs text-brand-text-primary placeholder-brand-text-muted focus:outline-none focus:ring-1 focus:ring-brand-primary/40 disabled:opacity-40 disabled:cursor-not-allowed transition-all ${
                    error ? 'border-brand-danger/30 focus:border-brand-danger' : 'border-brand-border focus:border-brand-primary/30'
                  }`}
                  aria-label="Password"
                />
                
                {/* Visibility Toggle Button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-brand-text-secondary hover:text-brand-text-primary transition-colors cursor-pointer"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              {/* Caps Lock indicator alert */}
              {capsLockActive && (
                <div className="text-[10px] text-amber-500 font-bold mt-1 flex items-center gap-1 select-none">
                  ⚠️ Caps Lock is active
                </div>
              )}

              {/* Inline Error Message */}
              {error && (
                <div className="text-[11px] text-red-500 font-bold mt-2 text-left flex items-start gap-1 select-none leading-relaxed">
                  {error}
                </div>
              )}
              
              {/* Inline Success Message */}
              {successMessage && (
                <div className="text-[11px] text-brand-success font-bold mt-2 text-left flex items-start gap-1 select-none leading-relaxed bg-brand-success/10 border border-brand-success/30 p-2 rounded-xl">
                  {successMessage}
                </div>
              )}
            </div>

            {/* Remember me select checkbox */}
            {isLogin && (
              <div className="flex items-center gap-2 pt-1 text-left select-none">
                <input
                  type="checkbox"
                  id="remember_me"
                  disabled={isLoading || isLocked}
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-3.5 w-3.5 rounded bg-brand-bg border-brand-border text-brand-primary focus:ring-brand-primary/40 focus:ring-opacity-25 transition-all cursor-pointer"
                />
                <label htmlFor="remember_me" className="text-[11px] text-brand-text-secondary font-semibold cursor-pointer">
                  {t('auth.remember')}
                </label>
              </div>
            )}

            {/* Sign in core button */}
            <button
              type="submit"
              disabled={isLoading || isLocked}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-brand-card hover:bg-brand-surface-secondary disabled:bg-brand-bg disabled:text-brand-text-secondary text-brand-text-primary text-xs font-bold rounded-xl transition-all shadow-lg shadow-white/5 hover:shadow-white/10 disabled:shadow-none mt-6 cursor-pointer glow-btn"
              aria-label={isLogin ? "Sign in" : "Sign up"}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  <span>{t('msg.verifying')}</span>
                </>
              ) : (
                <>
                  <span>{isLogin ? t('auth.signin') : t('auth.signup')}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </form>

          {/* Social Sign-in option dividers */}
          {isLogin && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 select-none">
                <div className="h-px bg-brand-surface-secondary flex-1" />
                <span className="text-[9px] text-brand-text-secondary font-black tracking-[0.2em] uppercase">OR</span>
                <div className="h-px bg-brand-surface-secondary flex-1" />
              </div>

              <div className="grid grid-cols-1 gap-3.5">
                <div className="flex flex-col items-center w-full">
                  <button
                    type="button"
                    disabled={isLoading || isLocked}
                    onClick={() => handleSocialLogin('Google')}
                    className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 bg-brand-bg hover:bg-brand-bg border border-brand-border hover:border-brand-primary/30 rounded-xl text-xs font-semibold text-brand-text-secondary hover:text-brand-text-primary transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed select-none"
                    aria-label="Continue with Google"
                  >
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                    </svg>
                    <span>Continue with Google</span>
                  </button>
                </div>

                <div className="flex flex-col items-center w-full">
                  <button
                    type="button"
                    disabled={isLoading || isLocked}
                    onClick={() => handleSocialLogin('GitHub')}
                    className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 bg-brand-bg hover:bg-brand-bg border border-brand-border hover:border-brand-primary/30 rounded-xl text-xs font-semibold text-brand-text-secondary hover:text-brand-text-primary transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed select-none"
                    aria-label="Continue with GitHub"
                  >
                    <svg className="h-4 w-4 shrink-0 fill-current text-brand-text-primary" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                    <span>Continue with GitHub</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Alternate flow toggle button links */}
          <div className="text-center pt-2 border-t border-brand-border text-[11px] text-brand-text-secondary font-medium select-none">
            {isLogin ? (
              <span>
                {t('auth.noaccount')}{' '}
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(false);
                    setError('');
                    setSuccessMessage('');
                  }}
                  className="text-brand-primary hover:text-brand-primary font-bold cursor-pointer transition-colors bg-transparent border-none outline-none"
                  aria-label="Create account"
                >
                  {t('auth.signup')}
                </button>
              </span>
            ) : (
              <span>
                {t('auth.hasaccount')}{' '}
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(true);
                    setError('');
                    setSuccessMessage('');
                  }}
                  className="text-brand-primary hover:text-brand-primary font-bold cursor-pointer transition-colors bg-transparent border-none outline-none"
                  aria-label="Sign in"
                >
                  {t('auth.signin')}
                </button>
              </span>
            )}
          </div>

          {/* Footer terms policies */}
          <div className="text-[9px] text-brand-text-secondary font-bold uppercase tracking-[0.1em] flex items-center justify-center gap-3 select-none">
            <span className="hover:text-brand-text-secondary transition-colors cursor-pointer">Terms of Service</span>
            <span className="h-1 w-1 rounded-full bg-brand-surface" />
            <span className="hover:text-brand-text-secondary transition-colors cursor-pointer">Privacy Policy</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Forgot Password Reset Modal Overlay */}
      {showResetModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-sm bg-brand-surface border border-brand-border rounded-[18px] p-6 shadow-2xl space-y-4 text-left"
          >
            <h3 className="text-base font-bold text-brand-text-primary">Reset Password</h3>
            <p className="text-xs text-brand-text-secondary leading-relaxed">
              Enter your email address and we&apos;ll send you a link to reset your password.
            </p>
            
            {resetSuccess ? (
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-brand-success/10 border border-brand-success/30 text-xs text-brand-success font-semibold leading-relaxed">
                  {resetMessage || "We've sent a password reset link to your email."}
                </div>
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!resetEmail.trim()) return;
                  setIsLoading(true);
                  setResetError('');
                  try {
                    const response = await api.post('/auth/forgot-password', { email: resetEmail });
                    setResetSuccess(true);
                    setResetMessage(response.data.message);
                  } catch (err: any) {
                    setResetError(err.response?.data?.message || 'Failed to send reset link. Please check your network.');
                  } finally {
                    setIsLoading(false);
                  }
                }}
                className="space-y-3"
              >
                {resetError && (
                  <div className="p-3.5 rounded-xl bg-brand-danger/10 border border-brand-danger/30 text-xs text-brand-danger font-semibold leading-relaxed">
                    {resetError}
                  </div>
                )}
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 text-xs text-brand-text-primary placeholder-brand-text-muted focus:outline-none focus:ring-1 focus:ring-brand-primary/40 focus:border-brand-primary/30"
                  aria-label="Reset Email"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2 px-3 bg-brand-primary hover:bg-brand-primary-hover text-white border-brand-primary text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  {isLoading && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
                  {isLoading ? 'Sending...' : 'Send Reset Link'}
                </button>
              </form>
            )}
            
            <button
              onClick={() => setShowResetModal(false)}
              className="w-full py-2 text-xs text-brand-text-secondary hover:text-brand-text-primary transition-colors cursor-pointer text-center font-semibold bg-transparent border-none outline-none"
            >
              Cancel
            </button>
          </motion.div>
        </div>
      )}


    </div>
  );
}