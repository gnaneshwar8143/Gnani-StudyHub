import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from './context/AuthContext';
import api from './lib/api';
import { Zap, ArrowRight, Loader2, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Core layout & tracking imports
import { DashboardLayout } from './components/DashBoardLayout';
import { Dashboard } from './components/Dashboard';
import { GoalsBoard } from './components/GoalsBoard';
import { HabitsPage } from './components/HabitsPage';
import { CalendarPage } from './components/CalendarPage';
import { ProfileHub } from './components/ProfileHub';

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
  const [isLogin, setIsLogin] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Form input fields tracking states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Status reporting states
  const [error, setError] = useState('');
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
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockTimer, setLockTimer] = useState(0);
  const [shakeKey, setShakeKey] = useState(0);
  const [socialLoading, setSocialLoading] = useState<'Google' | 'GitHub' | null>(null);

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

  // Lifted Objectives State
  const [objectives, setObjectives] = useState<Objective[]>(() => {
    const local = localStorage.getItem('lifeos_objectives');
    if (local) {
      try {
        return JSON.parse(local);
      } catch (e) {
        // Fallback
      }
    }
    return [
      { id: '1', title: 'Complete daily code integration review', priority: 'High', status: 'In Progress', dueDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0], progress: 40 },
      { id: '2', title: 'Plan high-fidelity frontend redesign structures', priority: 'Medium', status: 'To Do', dueDate: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0], progress: 0 },
      { id: '3', title: 'Read 5 pages of system docs', priority: 'Low', status: 'Completed', dueDate: new Date().toISOString().split('T')[0], progress: 100 }
    ];
  });

  useEffect(() => {
    localStorage.setItem('lifeos_objectives', JSON.stringify(objectives));
  }, [objectives]);

  const handleAddObjective = (
    title: string, 
    priority: 'High' | 'Medium' | 'Low', 
    status: Objective['status'] = 'To Do', 
    dueDate?: string
  ) => {
    const newObj: Objective = {
      id: Date.now().toString(),
      title,
      priority,
      status,
      dueDate: dueDate || new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      progress: status === 'Completed' ? 100 : status === 'In Review' ? 80 : status === 'In Progress' ? 40 : 0
    };
    setObjectives(prev => [...prev, newObj]);
  };

  const handleToggleObjective = (id: string) => {
    setObjectives(prev => prev.map(o => {
      if (o.id === id) {
        const nextStatus = o.status === 'Completed' ? 'In Progress' : 'Completed';
        return { 
          ...o, 
          status: nextStatus,
          progress: nextStatus === 'Completed' ? 100 : 40
        };
      }
      return o;
    }));
  };

  const handleUpdateObjectiveStatus = (id: string, status: Objective['status']) => {
    setObjectives(prev => prev.map(o => {
      if (o.id === id) {
        return { 
          ...o, 
          status,
          progress: status === 'Completed' ? 100 : status === 'In Review' ? 80 : status === 'In Progress' ? 40 : 0
        };
      }
      return o;
    }));
  };

  const handleScheduleObjective = (id: string, date: string | undefined, time: string | undefined) => {
    setObjectives(prev => prev.map(o => {
      if (o.id === id) {
        return {
          ...o,
          scheduledDate: date,
          scheduledTime: time
        };
      }
      return o;
    }));
  };

  const handleDeleteObjective = (id: string) => {
    setObjectives(prev => prev.filter(o => o.id !== id));
  };

  const handleCompleteAllObjectives = () => {
    setObjectives(prev => prev.map(o => ({ ...o, status: 'Completed', progress: 100 })));
  };

  // Lifted Habits State
  const [habits, setHabits] = useState<Habit[]>([]);
  const [habitsLoading, setHabitsLoading] = useState(true);
  const [habitsError, setHabitsError] = useState('');

  const fetchHabits = async () => {
    try {
      setHabitsError('');
      const response = await api.get('/habits');
      setHabits(response.data);
    } catch (err: any) {
      setHabitsError('Failed to fetch neuro-habit records.');
    } finally {
      setHabitsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchHabits();
    }
  }, [user]);

  const handleAddHabit = async (name: string) => {
    try {
      setHabitsError('');
      const response = await api.post('/habits', { name });
      setHabits(prev => [...prev, response.data]);
    } catch (err: any) {
      setHabitsError('Failed to record habit vector.');
      throw err;
    }
  };

  const handleToggleHabit = async (id: string) => {
    try {
      setHabitsError('');
      const response = await api.put(`/habits/${id}/toggle`);
      setHabits(prev => prev.map(h => h._id === id ? response.data : h));
    } catch (err: any) {
      setHabitsError('Failed to toggle completion state.');
      throw err;
    }
  };

  const handleDeleteHabit = async (id: string) => {
    try {
      setHabitsError('');
      await api.delete(`/habits/${id}`);
      setHabits(prev => prev.filter(h => h._id !== id));
    } catch (err: any) {
      setHabitsError('Failed to delete habit vector.');
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
    if (isLocked || failedAttempts >= 5) return;
    setError('');

    // Minimum password length check
    if (password.length < 6) {
      setError('❌ Password must be at least 6 characters.');
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
        login(response.data.accessToken, response.data.user);
      }
    } catch (err: any) {
      const msg = err.response?.data?.message || 'Unable to sign in. Please check your email and password.';
      setError(`❌ ${msg}`);
      setShakeKey(prev => prev + 1);
      
      // Auto focus password input on error
      setTimeout(() => passwordInputRef.current?.focus(), 50);

      // Increment failed attempts
      setFailedAttempts((prev) => {
        const next = prev + 1;
        if (next >= 5) {
          setIsLocked(true);
          setLockTimer(30);
        }
        return next;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: 'Google' | 'GitHub') => {
    setSocialLoading(provider);
    setError('');
    const email = `student@${provider.toLowerCase()}.com`;
    const password = `oauth-${provider.toLowerCase()}-pwd-12345`;
    const name = `${provider} Student`;

    try {
      // Simulate OAuth network latency
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      try {
        const response = await api.post('/auth/login', { email, password });
        login(response.data.accessToken, response.data.user);
      } catch (loginErr) {
        // If login failed, user doesn't exist, sign them up
        const response = await api.post('/auth/signup', { name, email, password });
        login(response.data.accessToken, response.data.user);
      }
    } catch (err: any) {
      setError(`❌ Unable to sign in with ${provider}. Please try again.`);
    } finally {
      setSocialLoading(null);
    }
  };

  // Authenticated State View Control
  if (user) {
    return (
      <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab}>
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
              />
            )}
            {activeTab === 'calendar' && (
              <CalendarPage
                objectives={objectives}
                onScheduleObjective={handleScheduleObjective}
                onAddObjective={handleAddObjective}
                onToggleObjective={handleToggleObjective}
                onDeleteObjective={handleDeleteObjective}
              />
            )}
            {activeTab === 'profile' && (
              <ProfileHub
                objectives={objectives}
                habits={habits}
                currentUser={{ id: user.id || '', name: user.name || '', email: user.email || '' }}
                onUpdateProfile={handleUpdateProfile}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </DashboardLayout>
    );
  }

  // Guest State Form View Control (Login / Signup)
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[#09090b] text-[#ffffff] font-sans relative overflow-hidden p-4 antialiased">
      {/* Background soft meshes */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#7c5cff]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#4f46e5]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Back to Home link */}
      <button 
        onClick={() => alert("Redirecting to home page...")}
        className="absolute top-6 left-6 text-zinc-500 hover:text-white flex items-center gap-1.5 text-xs font-semibold transition-colors cursor-pointer bg-transparent border-none outline-none select-none"
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
        className="w-full max-w-md bg-[#111113]/85 border border-white/[0.06] rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-3xl relative z-10 space-y-8"
      >
        <motion.div
          animate={shakeKey > 0 ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="space-y-6 relative"
        >
          {/* Social Loading Overlay */}
          {socialLoading && (
            <div className="absolute -inset-4 bg-[#111113]/95 backdrop-blur-sm z-30 rounded-[18px] flex flex-col items-center justify-center space-y-3 select-none">
              <Loader2 className="h-8 w-8 animate-spin text-[#7c5cff]" />
              <span className="text-xs text-zinc-300 font-bold">Signing in with {socialLoading}...</span>
            </div>
          )}
          {/* Hero */}
          <div className="flex flex-col items-center text-center space-y-5 px-1">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={heroTransition(0)}
              className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-[#7c5cff] to-[#4f46e5] flex items-center justify-center shadow-lg shadow-[#7c5cff]/25 border border-[#a78bfa]/20 select-none"
            >
              <Zap className="h-4 w-4 text-white fill-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={heroTransition(0.08)}
              className="text-5xl sm:text-6xl font-black tracking-tighter select-none bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent"
            >
              NANI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={heroTransition(0.16)}
              className="text-lg sm:text-xl font-semibold text-zinc-200 select-none"
            >
              {isLogin ? 'Welcome Back 👋' : 'Get Started 👋'}
            </motion.p>

            {isLogin ? (
              <motion.blockquote
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={heroTransition(0.24)}
                className="text-sm sm:text-[15px] text-[#a78bfa]/90 italic leading-relaxed max-w-[280px] select-none"
              >
                &ldquo;{motivationalQuote}&rdquo;
              </motion.blockquote>
            ) : (
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={heroTransition(0.24)}
                className="text-sm sm:text-[15px] text-[#a78bfa]/90 leading-relaxed max-w-[280px] select-none"
              >
                Your personal space for goals, habits, and focused progress.
              </motion.p>
            )}

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={heroTransition(0.32)}
              className="text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-xs select-none"
            >
              {isLogin
                ? 'Sign in to continue your productivity journey.'
                : 'Create your account to begin your productivity journey.'}
            </motion.p>
          </div>

          {/* Rate Limiting Lockout Alert */}
          {isLocked && (
            <div className="p-3 rounded-xl bg-[#ef4444]/10 border border-[#ef4444]/20 text-xs text-[#ef4444] font-semibold text-center select-none">
              ❌ Too many attempts. Login locked for {lockTimer}s.
            </div>
          )}

          {/* Form fields */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-medium text-zinc-400 select-none">Your Name</label>
                <input
                  type="text"
                  required
                  disabled={isLoading || isLocked}
                  placeholder="e.g. John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#09090b]/80 border border-white/[0.06] rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#7c5cff]/40 focus:border-[#7c5cff]/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  aria-label="Your Name"
                />
              </div>
            )}

            <div className="space-y-1.5 text-left">
              <label className="text-xs font-medium text-zinc-400 select-none">Email Address</label>
              <input
                type="email"
                required
                disabled={isLoading || isLocked}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full bg-[#09090b]/80 border rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#7c5cff]/40 disabled:opacity-40 disabled:cursor-not-allowed transition-all ${
                  error && !isLogin ? 'border-red-500/50 focus:border-red-500' : 'border-white/[0.06] focus:border-[#7c5cff]/50'
                }`}
                aria-label="Email Address"
              />
            </div>

            <div className="space-y-1.5 text-left">
              <div className="flex justify-between items-center select-none">
                <label className="text-xs font-medium text-zinc-400">Password</label>
                {isLogin && (
                  <button
                    type="button"
                    onClick={() => {
                      setShowResetModal(true);
                      setResetSuccess(false);
                      setResetEmail('');
                    }}
                    className="text-xs text-zinc-500 hover:text-[#7c5cff] font-medium transition-colors cursor-pointer bg-transparent border-none outline-none"
                    aria-label="Forgot Password"
                  >
                    Forgot Password?
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
                  className={`w-full bg-[#09090b]/80 border rounded-xl pl-4 pr-10 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#7c5cff]/40 disabled:opacity-40 disabled:cursor-not-allowed transition-all ${
                    error ? 'border-[#ef4444]/60 focus:border-[#ef4444]' : 'border-white/[0.06] focus:border-[#7c5cff]/50'
                  }`}
                  aria-label="Password"
                />
                
                {/* Visibility Toggle Button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-zinc-600 hover:text-white transition-colors cursor-pointer"
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
                  className="h-3.5 w-3.5 rounded bg-[#09090b] border-white/[0.06] text-[#7c5cff] focus:ring-[#7c5cff]/30 focus:ring-opacity-25 transition-all cursor-pointer"
                />
                <label htmlFor="remember_me" className="text-[11px] text-zinc-400 font-semibold cursor-pointer">
                  Remember Me
                </label>
              </div>
            )}

            {/* Sign in core button */}
            <button
              type="submit"
              disabled={isLoading || isLocked}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white hover:bg-zinc-200 disabled:bg-zinc-900 disabled:text-zinc-600 text-zinc-950 text-xs font-bold rounded-xl transition-all shadow-lg shadow-white/5 hover:shadow-white/10 disabled:shadow-none mt-6 cursor-pointer glow-btn"
              aria-label={isLogin ? "Sign in" : "Sign up"}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </form>

          {/* Social Sign-in option dividers */}
          {isLogin && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 select-none">
                <div className="h-px bg-white/[0.04] flex-1" />
                <span className="text-[9px] text-zinc-600 font-black tracking-[0.2em] uppercase">OR</span>
                <div className="h-px bg-white/[0.04] flex-1" />
              </div>

              <div className="grid grid-cols-1 gap-3">
                <button
                  type="button"
                  disabled={isLoading || isLocked}
                  onClick={() => handleSocialLogin('Google')}
                  className="flex items-center justify-center gap-2.5 py-2.5 px-4 bg-[#09090b]/80 hover:bg-[#09090b] border border-white/[0.06] hover:border-[#7c5cff]/30 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed select-none"
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

                <button
                  type="button"
                  disabled={isLoading || isLocked}
                  onClick={() => handleSocialLogin('GitHub')}
                  className="flex items-center justify-center gap-2.5 py-2.5 px-4 bg-[#09090b]/80 hover:bg-[#09090b] border border-white/[0.06] hover:border-[#7c5cff]/30 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed select-none"
                  aria-label="Continue with GitHub"
                >
                  <svg className="h-4 w-4 shrink-0 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  <span>Continue with GitHub</span>
                </button>
              </div>
            </div>
          )}

          {/* Alternate flow toggle button links */}
          <div className="text-center pt-2 border-t border-white/[0.04] text-[11px] text-[#a1a1aa] font-medium select-none">
            {isLogin ? (
              <span>
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(false);
                    setError('');
                  }}
                  className="text-[#7c5cff] hover:text-[#a78bfa] font-bold cursor-pointer transition-colors bg-transparent border-none outline-none"
                  aria-label="Create account"
                >
                  Create Account
                </button>
              </span>
            ) : (
              <span>
                Already registered?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(true);
                    setError('');
                  }}
                  className="text-[#7c5cff] hover:text-[#a78bfa] font-bold cursor-pointer transition-colors bg-transparent border-none outline-none"
                  aria-label="Sign in"
                >
                  Sign in
                </button>
              </span>
            )}
          </div>

          {/* Footer terms policies */}
          <div className="text-[9px] text-zinc-600 font-bold uppercase tracking-[0.1em] flex items-center justify-center gap-3 select-none">
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">Terms of Service</span>
            <span className="h-1 w-1 rounded-full bg-zinc-800" />
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">Privacy Policy</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Forgot Password Reset Modal Overlay */}
      {showResetModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-sm bg-[#111113] border border-white/[0.08] rounded-[18px] p-6 shadow-2xl space-y-4 text-left"
          >
            <h3 className="text-base font-bold text-white">Reset Password</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Enter your email address and we&apos;ll send you a link to reset your password.
            </p>
            
            {resetSuccess ? (
              <div className="p-3.5 rounded-xl bg-[#22c55e]/15 border border-[#22c55e]/30 text-xs text-[#22c55e] font-semibold leading-relaxed">
                We've sent a password reset link to your email.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!resetEmail.trim()) return;
                  setResetSuccess(true);
                }}
                className="space-y-3"
              >
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="w-full bg-[#09090b] border border-white/[0.06] rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#7c5cff]/40 focus:border-[#7c5cff]/50"
                  aria-label="Reset Email"
                />
                <button
                  type="submit"
                  className="w-full py-2 px-3 bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-bold rounded-xl transition-all cursor-pointer"
                >
                  Send Reset Link
                </button>
              </form>
            )}
            
            <button
              onClick={() => setShowResetModal(false)}
              className="w-full py-2 text-xs text-zinc-500 hover:text-white transition-colors cursor-pointer text-center font-semibold bg-transparent border-none outline-none"
            >
              Cancel
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}