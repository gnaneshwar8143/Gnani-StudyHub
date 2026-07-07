import React, { useState, useEffect, useRef } from 'react';
import { 
  User, 
  Mail, 
  Award, 
  Lock, 
  Clock,
  Globe,
  Bell,
  Trash2,
  Key,
  Laptop,
  Check,
  Upload,
  UserX
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from '../context/I18nContext';

export interface Objective {
  id: string;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'To Do' | 'In Progress' | 'In Review' | 'Completed';
  dueDate: string;
  progress?: number;
  scheduledDate?: string;
  scheduledTime?: string;
}

export interface Habit {
  _id: string;
  name: string;
  completed: boolean;
  streak: number;
}

interface ProfileHubProps {
  objectives: Objective[];
  habits: Habit[];
  currentUser: { id: string; name: string; email: string };
  onUpdateProfile: (name: string, email: string) => void;
  stats: {
    xp: number;
    studyTime: number;
    focusScore: number;
    totalSessions: number;
    totalCompletedTasks: number;
  };
  onUpdateStats: (updates: Partial<ProfileHubProps['stats']>) => Promise<void>;
}

const ACCENT_COLORS = [
  { id: 'violet', name: 'Purple', primary: '#7c5cff', secondary: '#a78bfa', accent: '#4f46e5', shadowColor: 'rgba(124,92,255,0.2)' },
  { id: 'blue', name: 'Blue', primary: '#3b82f6', secondary: '#93c5fd', accent: '#1d4ed8', shadowColor: 'rgba(59,130,246,0.2)' },
  { id: 'green', name: 'Green', primary: '#10b981', secondary: '#6ee7b7', accent: '#047857', shadowColor: 'rgba(16,185,129,0.2)' },
  { id: 'orange', name: 'Orange', primary: '#f97316', secondary: '#fdba74', accent: '#c2410c', shadowColor: 'rgba(249,115,22,0.2)' },
  { id: 'pink', name: 'Pink', primary: '#ec4899', secondary: '#fbcfe8', accent: '#be185d', shadowColor: 'rgba(236,72,153,0.2)' },
  { id: 'red', name: 'Red', primary: '#ef4444', secondary: '#fca5a5', accent: '#b91c1c', shadowColor: 'rgba(239,68,68,0.2)' }
];

export const ProfileHub: React.FC<ProfileHubProps> = ({
  objectives,
  habits,
  currentUser,
  onUpdateProfile,
  stats
}) => {
  const { theme } = useTheme();
  const { t, language, changeLanguage } = useTranslation();
  const [activeTab, setActiveTab] = useState<'profile' | 'appearance' | 'achievements' | 'preferences' | 'security'>('profile');
  
  // Profile settings states
  const [profileName, setProfileName] = useState(currentUser.name);
  const [profileEmail, setProfileEmail] = useState(currentUser.email);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [profilePic, setProfilePic] = useState<string | null>(() => {
    return localStorage.getItem('nani_profile_pic') || null;
  });

  // Password fields
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securityFeedback, setSecurityFeedback] = useState({ success: '', error: '' });

  // Accent theme state
  const [activeAccent, setActiveAccent] = useState('violet');

  // Preferences states
  const [timezone, setTimezone] = useState('UTC (GMT +0:00)');
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    weeklyReport: true,
    monthlyReport: false
  });
  const [prefSaved, setPrefSaved] = useState(false);

  // Security Toggles
  const [tfaEnabled, setTfaEnabled] = useState(false);
  const [sessions, setSessions] = useState([
    { id: '1', device: 'Chrome on Windows 11', location: 'New Delhi, India', status: 'Current Session' },
    { id: '2', device: 'Safari on iPhone 15', location: 'New Delhi, India', status: 'Active 2h ago' }
  ]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load active accent theme from localStorage
  useEffect(() => {
    const savedAccent = localStorage.getItem('lifeos_theme_accent') || 'violet';
    // Fallback/compatibility mapping
    const matched = ACCENT_COLORS.find(c => c.id === savedAccent);
    if (matched) {
      setActiveAccent(savedAccent);
    }
  }, []);

  const handleApplyThemeColor = (colorId: string) => {
    const col = ACCENT_COLORS.find(c => c.id === colorId);
    if (!col) return;

    setActiveAccent(colorId);
    localStorage.setItem('lifeos_theme_accent', colorId);

    // Apply color values to root element stylesheet variables
    document.documentElement.style.setProperty('--color-brand-primary', col.primary);
    document.documentElement.style.setProperty('--color-brand-secondary', col.secondary);
    document.documentElement.style.setProperty('--color-brand-accent', col.accent);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!profileName.trim() || !profileEmail.trim()) return;

    onUpdateProfile(profileName.trim(), profileEmail.trim());
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  // Profile picture upload base64 handlers
  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfilePic(base64String);
        localStorage.setItem('nani_profile_pic', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveProfilePic = () => {
    setProfilePic(null);
    localStorage.removeItem('nani_profile_pic');
  };

  const handlePreferencesSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPrefSaved(true);
    setTimeout(() => setPrefSaved(false), 2500);
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPassword || !newPassword || !confirmPassword) return;

    if (newPassword.length < 8) {
      setSecurityFeedback({ success: '', error: 'New password must be at least 8 characters long.' });
      return;
    }

    if (newPassword !== confirmPassword) {
      setSecurityFeedback({ success: '', error: 'New passwords do not match.' });
      return;
    }

    // Success response simulator
    setSecurityFeedback({ success: 'Your password has been changed successfully.', error: '' });
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => setSecurityFeedback({ success: '', error: '' }), 4000);
  };

  const handleForgotPassword = () => {
    // Dispatch forgot request with email
    setSecurityFeedback({ success: `A password reset link has been dispatched to ${profileEmail}.`, error: '' });
    setTimeout(() => setSecurityFeedback({ success: '', error: '' }), 4000);
  };

  const handleDeleteAccount = () => {
    const confirm = window.confirm('WARNING: Are you absolutely sure you want to delete your Gnani account? This action is permanent and cannot be undone.');
    if (confirm) {
      alert('Account deletion request registered.');
    }
  };

  const handleRevokeSession = (sessionId: string) => {
    setSessions(prev => prev.filter(s => s.id !== sessionId));
  };

  // Calculations for stats card values
  const completedObjectivesCount = objectives.filter(o => o.status === 'Completed').length;
  const maxStreak = habits.length > 0 ? Math.max(...habits.map(h => h.streak)) : 0;
  const focusSeconds = stats.studyTime;
  const studyHours = (focusSeconds / 3600).toFixed(1);
  const xpVal = stats.xp;

  // Modern Unlocked achievements list
  const achievementsList = [
    {
      id: 'first_login',
      title: '🥇 First Login',
      desc: 'Successfully logged into your Gnani account for the first time.',
      progress: 100,
      unlocked: true
    },
    {
      id: 'first_goal',
      title: '🎯 First Goal Completed',
      desc: 'Complete your first task objective in Gnani.',
      progress: completedObjectivesCount > 0 ? 100 : 0,
      unlocked: completedObjectivesCount > 0
    },
    {
      id: 'seven_day_streak',
      title: '🔥 7 Day Streak',
      desc: 'Maintain a study habit streak of 7+ consecutive days.',
      progress: Math.min(100, Math.round((maxStreak / 7) * 100)),
      unlocked: maxStreak >= 7
    },
    {
      id: 'study_master',
      title: '📚 Study Master',
      desc: 'Log at least 10 focus hours in the study timer.',
      progress: Math.min(100, Math.round((Number(studyHours) / 10) * 100)),
      unlocked: Number(studyHours) >= 10
    },
    {
      id: 'focus_champion',
      title: '⚡ Focus Champion',
      desc: 'Complete 3 daily objectives in a single day.',
      progress: completedObjectivesCount >= 3 ? 100 : Math.round((completedObjectivesCount / 3) * 100),
      unlocked: completedObjectivesCount >= 3
    },
    {
      id: 'productivity_expert',
      title: '🏆 Productivity Expert',
      desc: 'Unlock all achievements inside Gnani settings.',
      progress: 0, // mapped dynamically below
      unlocked: false
    }
  ];

  const unlockedCount = achievementsList.filter(a => a.id !== 'productivity_expert' && a.unlocked).length;
  achievementsList[5].progress = Math.round((unlockedCount / 5) * 100);
  achievementsList[5].unlocked = unlockedCount === 5;

  const totalUnlocked = achievementsList.filter(a => a.unlocked).length;

  return (
    <div className="space-y-6 pb-12">
      {/* Header section with plain language */}
      <div className="text-left border-brand-border border-brand-borderrand-border pb-4 select-none">
        <h1 className="text-4xl font-extrabold tracking-tight mt-1 text-brand-text-primary">
          {t('profile.title')}
        </h1>
        <p className="text-sm text-brand-text-secondary mt-2 font-medium">
          {t('profile.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Settings Navigation Tabs Sidebar */}
        <div className="lg:col-span-3 space-y-2">
          {[
            { id: 'profile', name: '👤 ' + t('profile.tab.settings'), desc: t('profile.pic.title') },
            { id: 'appearance', name: '🎨 ' + t('profile.tab.appearance'), desc: t('profile.appearance.theme') },
            { id: 'achievements', name: '🥇 ' + t('profile.tab.achievements'), desc: t('profile.tab.achievements') },
            { id: 'preferences', name: '⚙️ ' + t('profile.tab.preferences'), desc: t('profile.pref.timezone') },
            { id: 'security', name: '🔒 ' + t('profile.tab.security'), desc: t('profile.security.title') }
          ].map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer relative ${
                  isActive 
                    ? 'bg-brand-surface-secondary border-brand-primary/30 text-brand-text-primary shadow-md' 
                    : 'bg-transparent border-brand-borderrand-border text-brand-text-secondary hover:border-brand-border hover:text-brand-text-primary'
                }`}
              >
                {isActive && (
                  <div className="absolute left-0 top-3 bottom-3 w-1 bg-brand-primary rounded-r" />
                )}
                <div className="font-extrabold text-sm">{tab.name}</div>
                <div className="text-[10px] text-brand-text-secondary mt-0.5 font-medium">{tab.desc}</div>
              </button>
            );
          })}
        </div>

        {/* Settings Detail Panels Content Area */}
        <div className="lg:col-span-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* TAB 1: PROFILE SETTINGS */}
              {activeTab === 'profile' && (
                <div className="glass-card p-6 bg-brand-surface border-brand-borderrand-border space-y-6">
                  <h3 className="text-lg font-black text-brand-text-primary text-left">{t('profile.tab.settings')}</h3>
                  
                  {/* Profile Picture Box */}
                  <div className="flex flex-col sm:flex-row items-center gap-5 pb-5 border-brand-border border-brand-borderrand-border">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-brand-primary to-brand-primary flex items-center justify-center font-bold text-2xl text-brand-text-primary border border-brand-borderrand-border shadow-lg flex-shrink-0 overflow-hidden relative group">
                      {profilePic ? (
                        <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                      ) : (
                        currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase()
                      )}
                    </div>
                    <div className="text-left space-y-2">
                      <h4 className="text-sm font-bold text-brand-text-primary">{t('profile.pic.title')}</h4>
                      <p className="text-[11px] text-brand-text-secondary font-medium leading-relaxed max-w-xs">
                        Upload a custom square image avatar. Standard PNG or JPG formats.
                      </p>
                      <div className="flex gap-2">
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleProfilePicChange}
                          className="hidden"
                        />
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="px-3.5 py-1.5 bg-brand-primary/10 hover:bg-brand-primary/20 text-brand-primary border border-brand-primary/20 text-[10px] font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                        >
                          <Upload className="h-3 w-3" /> {t('profile.pic.upload')}
                        </button>
                        {profilePic && (
                          <button
                            onClick={handleRemoveProfilePic}
                            className="px-3.5 py-1.5 bg-brand-danger/10 hover:bg-brand-danger/20 text-brand-danger border border-brand-danger/20 text-[10px] font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                          >
                            <UserX className="h-3 w-3" /> {t('profile.security.delete')}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Personal Information Form */}
                  <form onSubmit={handleSaveProfile} className="space-y-5 text-left">
                    {saveSuccess && (
                      <div className="p-3.5 rounded-xl bg-brand-success/15 border border-brand-success/30 text-xs text-brand-success font-semibold flex items-center gap-2">
                        <Check className="h-4 w-4" /> {t('msg.profile.success')}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">{t('profile.full.name')}</label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-3 h-4 w-4 text-brand-text-muted" />
                          <input
                            type="text"
                            required
                            value={profileName}
                            onChange={(e) => setProfileName(e.target.value)}
                            className="w-full bg-brand-bg border border-brand-borderrand-border rounded-xl pl-10 pr-4 py-2.5 text-xs text-brand-text-primary focus:outline-none focus:border-brand-primary/50"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">{t('profile.email')}</label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-3 h-4 w-4 text-brand-text-muted" />
                          <input
                            type="email"
                            required
                            value={profileEmail}
                            onChange={(e) => setProfileEmail(e.target.value)}
                            className="w-full bg-brand-bg border border-brand-borderrand-border rounded-xl pl-10 pr-4 py-2.5 text-xs text-brand-text-primary focus:outline-none focus:border-brand-primary/50"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="submit"
                        className="px-5 py-2.5 bg-brand-card hover:bg-brand-surface-secondary text-brand-text-primary text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow"
                      >
                        {t('profile.save')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('security')}
                        className="px-4 py-2.5 bg-brand-surface-secondary border border-brand-borderrand-border hover:bg-brand-card/[0.05] text-brand-text-secondary hover:text-brand-text-primary text-xs font-bold rounded-xl transition-all cursor-pointer"
                      >
                        {t('profile.change.password')}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* TAB 2: APPEARANCE */}
              {activeTab === 'appearance' && (
                <div className="glass-card p-6 bg-brand-surface border-brand-borderrand-border space-y-6 text-left">
                  <h3 className="text-lg font-black text-brand-text-primary">{t('profile.tab.appearance')}</h3>
                  
                  {/* Theme Mode selector */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">{t('profile.appearance.theme')}</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'dark', label: '🌙 Dark Mode', action: () => ('dark') },
                        { id: 'light', label: '☀️ Light Mode', action: () => ('light') },
                        { id: 'system', label: '💻 System Default', action: () => {
                          const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                          (darkQuery.matches ? 'dark' : 'light');
                        }}
                      ].map(mode => {
                        const isSelected = theme === mode.id || (mode.id === 'system' && !localStorage.getItem('nani_theme_mode'));
                        return (
                          <button
                            key={mode.id}
                            onClick={mode.action}
                            className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center ${
                              isSelected 
                                ? 'bg-brand-primary/10 border-brand-primary text-brand-primary shadow shadow-[#7c5cff]/15' 
                                : 'bg-transparent border-brand-borderrand-border text-brand-text-secondary hover:text-brand-text-primary'
                            }`}
                          >
                            {mode.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Accent Color Circle Selectors */}
                  <div className="space-y-3 pt-3 border-t border-brand-borderrand-border">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">Accent Color</label>
                      <p className="text-[10px] text-brand-text-secondary mt-0.5">Select a custom color theme to colorize menus and indicators.</p>
                    </div>

                    <div className="flex gap-4 items-center">
                      {ACCENT_COLORS.map((col) => {
                        const isSelected = activeAccent === col.id;
                        return (
                          <button
                            key={col.id}
                            onClick={() => handleApplyThemeColor(col.id)}
                            className={`h-8 w-8 rounded-full border transition-all flex items-center justify-center cursor-pointer ${
                              isSelected 
                                ? 'scale-110 shadow-lg' 
                                : 'opacity-60 hover:opacity-100 hover:scale-105'
                            }`}
                            style={{ 
                              backgroundColor: col.primary,
                              borderColor: isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.08)',
                              boxShadow: isSelected ? `0 0 14px ${col.shadowColor}` : 'none'
                            }}
                            title={col.name}
                          >
                            {isSelected && (
                              <Check className="h-4 w-4 text-brand-text-primary stroke-[3.5]" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: ACHIEVEMENTS & STATS */}
              {activeTab === 'achievements' && (
                <div className="space-y-6">
                  {/* Statistics Widgets Row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 select-none">
                    {[
                      { title: '🔥 Current Streak', value: `${maxStreak} Days`, desc: 'Habit streak milestone', color: 'text-brand-warning bg-brand-warning/10 border-brand-warning/20' },
                      { title: '⭐ XP Points', value: `${xpVal} XP`, desc: 'Productivity experience', color: 'text-brand-primary bg-brand-primary/10 border-brand-primary/20' },
                      { title: '🎯 Goals Completed', value: completedObjectivesCount, desc: 'Tasks marked finished', color: 'text-brand-success bg-brand-success/10 border-brand-bordermerald-500/20' },
                      { title: '📚 Study Hours', value: `${studyHours} hrs`, desc: 'Study timer allocation', color: 'text-brand-info bg-brand-info/10 border-brand-borderlue-500/20' }
                    ].map((stat, idx) => (
                      <div key={idx} className="glass-card p-4.5 bg-brand-surface border-brand-borderrand-border text-left space-y-1">
                        <span className="text-[9px] font-extrabold uppercase text-brand-text-secondary tracking-wider block">{stat.title}</span>
                        <div className="text-xl font-black text-brand-text-primary">{stat.value}</div>
                        <span className="text-[9px] font-bold text-brand-text-muted block">{stat.desc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Achievements Summary Heading */}
                  <div className="glass-card p-5 bg-gradient-to-br from-brand-surface/80 to-brand-primary/5 border-brand-borderrand-border flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="text-left space-y-1 select-none">
                      <span className="text-[10px] font-extrabold uppercase text-brand-primary tracking-wider flex items-center gap-1">
                        <Award className="h-3.5 w-3.5" /> Accomplishments Tracker
                      </span>
                      <h2 className="text-xl font-black text-brand-text-primary">Achievements</h2>
                      <p className="text-xs text-brand-text-secondary font-medium">Log focus hours, complete habits, and clear tasks to unlock achievements.</p>
                    </div>
                    
                    <div className="relative h-16 w-16 flex items-center justify-center flex-shrink-0 select-none">
                      <svg className="w-16 h-16 transform -rotate-90">
                        <circle cx="32" cy="32" r="28" className="stroke-brand-border" strokeWidth="4.5" fill="transparent" />
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          className="stroke-brand-primary"
                          strokeWidth="4.5"
                          fill="transparent"
                          strokeDasharray={175.8}
                          strokeDashoffset={175.8 - (175.8 * totalUnlocked) / achievementsList.length}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute flex flex-col items-center">
                        <span className="text-xs font-black leading-none">{totalUnlocked} / {achievementsList.length}</span>
                        <span className="text-[7px] font-bold text-brand-text-secondary uppercase tracking-wider mt-0.5">Unlocked</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievementsList.map((ach) => (
                      <div
                        key={ach.id}
                        className={`glass-card p-5 border flex flex-col justify-between text-left transition-all duration-300 ${
                          ach.unlocked 
                            ? 'bg-brand-surface border-brand-primary/10 shadow-sm' 
                            : 'bg-brand-surface-secondary border-brand-borderrand-border opacity-50'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`h-11 w-11 rounded-2xl flex items-center justify-center border border-brand-borderrand-border text-xl flex-shrink-0 bg-brand-surface-secondary`}>
                            {ach.unlocked ? ach.title.split(' ')[0] : '🔒'}
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-xs font-black text-brand-text-primary">{ach.title.split(' ').slice(1).join(' ') || ach.title}</h4>
                            <p className="text-[11px] text-brand-text-secondary leading-relaxed font-medium">{ach.desc}</p>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-4 pt-3 border-t border-brand-borderrand-border space-y-1.5">
                          <div className="flex justify-between items-center text-[8px] font-bold text-brand-text-secondary font-mono">
                            <span>PROGRESS</span>
                            <span>{ach.progress}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-brand-card/[0.03] rounded-full overflow-hidden border border-brand-borderrand-divider">
                            <div 
                              className="h-full bg-gradient-to-r from-brand-primary to-brand-primary rounded-full"
                              style={{ width: `${ach.progress}%` }}
                            />
                          </div>
                          <div className="flex justify-end pt-1">
                            <span className={`text-[8px] font-bold font-mono px-2 py-0.5 rounded border uppercase tracking-wider ${
                              ach.unlocked 
                                ? 'bg-brand-success/10 border-brand-bordermerald-500/20 text-brand-success' 
                                : 'bg-brand-card/[0.01] border-brand-borderrand-border text-brand-text-secondary'
                            }`}>
                              {ach.unlocked ? 'Unlocked' : 'Locked'}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: PREFERENCES */}
              {activeTab === 'preferences' && (
                <div className="glass-card p-6 bg-brand-surface border-brand-borderrand-border space-y-6 text-left">
                  <h3 className="text-lg font-black text-brand-text-primary">{t('profile.tab.preferences')}</h3>
                  
                  <form onSubmit={handlePreferencesSubmit} className="space-y-5">
                    {prefSaved && (
                      <div className="p-3.5 rounded-xl bg-brand-success/15 border border-brand-success/30 text-xs text-brand-success font-semibold flex items-center gap-2">
                        <Check className="h-4 w-4" /> {t('msg.profile.success')}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Language Select */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary flex items-center gap-1 select-none">
                          <Globe className="h-3.5 w-3.5 text-brand-text-secondary" /> {t('profile.appearance.lang')}
                        </label>
                        <select
                          value={language}
                          onChange={(e) => changeLanguage(e.target.value as any)}
                          className="w-full bg-brand-bg border border-brand-borderrand-border rounded-xl px-3 py-2.5 text-xs text-brand-text-primary focus:outline-none focus:border-brand-primary/50 cursor-pointer"
                        >
                          <option value="en">English</option>
                          <option value="te">తెలుగు</option>
                          <option value="hi">हिन्दी</option>
                          <option value="fr">Français</option>
                        </select>
                      </div>

                      {/* Timezone Select */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary flex items-center gap-1 select-none">
                          <Clock className="h-3.5 w-3.5 text-brand-text-secondary" /> {t('profile.pref.timezone')}
                        </label>
                        <select
                          value={timezone}
                          onChange={(e) => setTimezone(e.target.value)}
                          className="w-full bg-brand-bg border border-brand-borderrand-border rounded-xl px-3 py-2.5 text-xs text-brand-text-primary focus:outline-none focus:border-brand-primary/50 cursor-pointer"
                        >
                          <option value="UTC (GMT +0:00)">UTC (GMT +0:00)</option>
                          <option value="EST (GMT -5:00)">EST (GMT -5:00)</option>
                          <option value="PST (GMT -8:00)">PST (GMT -8:00)</option>
                          <option value="IST (GMT +5:30)">IST (GMT +5:30)</option>
                        </select>
                      </div>
                    </div>

                    {/* Notification Settings */}
                    <div className="space-y-3.5 pt-4 border-t border-brand-borderrand-border">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary flex items-center gap-1 select-none">
                        <Bell className="h-3.5 w-3.5 text-brand-text-secondary" /> {t('profile.tab.preferences')}
                      </label>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          { id: 'emailNotifications', label: 'Email Notifications', desc: 'Receive password resets and updates via email' },
                          { id: 'pushNotifications', label: 'Push Notifications', desc: 'Receive in-app alerts on updates' },
                          { id: 'weeklyReport', label: 'Weekly Report', desc: 'Summary of your tasks and habit streaks weekly' },
                          { id: 'monthlyReport', label: 'Monthly Report', desc: 'Deep dive statistics of your productivity monthly' }
                        ].map((noti) => (
                          <label
                            key={noti.id}
                            className="flex items-start gap-3 p-3.5 rounded-xl border border-brand-borderrand-border bg-brand-surface-secondary hover:border-brand-border cursor-pointer select-none"
                          >
                            <input
                              type="checkbox"
                              checked={(notifications as any)[noti.id]}
                              onChange={(e) => setNotifications(prev => ({ ...prev, [noti.id]: e.target.checked }))}
                              className="mt-0.5 rounded border-brand-borderrand-border text-brand-primary focus:ring-0 cursor-pointer"
                            />
                            <div>
                              <div className="text-xs font-bold text-brand-text-primary">{noti.label}</div>
                              <p className="text-[10px] text-brand-text-secondary mt-0.5 font-medium leading-relaxed">{noti.desc}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-brand-card hover:bg-brand-surface-secondary text-brand-text-primary text-xs font-bold rounded-xl transition-all cursor-pointer shadow mt-2"
                    >
                      Save Preferences
                    </button>
                  </form>
                </div>
              )}

              {/* TAB 5: SECURITY */}
              {activeTab === 'security' && (
                <div className="space-y-6 text-left">
                  {/* Change Password Panel */}
                  <div className="glass-card p-6 bg-brand-surface border-brand-borderrand-border space-y-5">
                    <h3 className="text-lg font-black text-brand-text-primary">Change Password</h3>
                    
                    <form onSubmit={handleChangePassword} className="space-y-4">
                      {securityFeedback.success && (
                        <div className="p-3.5 rounded-xl bg-brand-success/15 border border-brand-success/30 text-xs text-brand-success font-semibold leading-relaxed">
                          {securityFeedback.success}
                        </div>
                      )}
                      
                      {securityFeedback.error && (
                        <div className="p-3.5 rounded-xl bg-brand-danger/15 border border-brand-danger/25 text-xs text-brand-danger font-semibold leading-relaxed">
                          {securityFeedback.error}
                        </div>
                      )}

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">Current Password</label>
                        <div className="relative">
                          <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-brand-text-muted" />
                          <input
                            type="password"
                            required
                            placeholder="••••••••"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            className="w-full bg-brand-bg border border-brand-borderrand-border rounded-xl pl-10 pr-4 py-2.5 text-xs text-brand-text-primary focus:outline-none focus:border-brand-primary"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">New Password</label>
                          <div className="relative">
                            <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-brand-text-muted" />
                            <input
                              type="password"
                              required
                              placeholder="Min 8 characters"
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                              className="w-full bg-brand-bg border border-brand-borderrand-border rounded-xl pl-10 pr-4 py-2.5 text-xs text-brand-text-primary focus:outline-none focus:border-brand-primary"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">Confirm New Password</label>
                          <div className="relative">
                            <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-brand-text-muted" />
                            <input
                              type="password"
                              required
                              placeholder="Repeat new password"
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                              className="w-full bg-brand-bg border border-brand-borderrand-border rounded-xl pl-10 pr-4 py-2.5 text-xs text-brand-text-primary focus:outline-none focus:border-brand-primary"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button
                          type="submit"
                          className="px-5 py-2.5 bg-brand-card hover:bg-brand-surface-secondary text-brand-text-primary text-xs font-bold rounded-xl transition-all cursor-pointer shadow"
                        >
                          Update Password
                        </button>
                        <button
                          type="button"
                          onClick={handleForgotPassword}
                          className="px-4 py-2.5 bg-brand-surface-secondary border border-brand-borderrand-border hover:bg-brand-card/[0.05] text-brand-text-secondary hover:text-brand-text-primary text-xs font-bold rounded-xl transition-all cursor-pointer"
                        >
                          Forgot Password?
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Two Factor Authentication (2FA) Box */}
                  <div className="glass-card p-6 bg-brand-surface border-brand-borderrand-border space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-brand-text-secondary flex items-center gap-1.5 select-none">
                      <Key className="h-4 w-4 text-brand-primary" /> Two-Factor Authentication
                    </h3>
                    <p className="text-xs text-brand-text-secondary leading-relaxed font-medium">
                      Secure your Gnani profile by requiring an additional authenticator code upon signing in.
                    </p>
                    
                    <div className="flex items-center justify-between p-3 rounded-xl border border-brand-borderrand-border bg-brand-surface-secondary">
                      <div className="text-xs font-bold text-brand-text-primary">
                        {tfaEnabled ? 'Two-Factor Authentication is ENABLED' : 'Two-Factor Authentication is DISABLED'}
                      </div>
                      <button
                        onClick={() => {
                          setTfaEnabled(!tfaEnabled);
                          alert(tfaEnabled ? '2FA disabled.' : '2FA activated successfully!');
                        }}
                        className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
                          tfaEnabled 
                            ? 'bg-brand-danger/10 hover:bg-brand-danger/20 text-brand-danger border border-brand-danger/20' 
                            : 'bg-brand-primary/10 hover:bg-brand-primary/20 text-brand-primary border border-brand-primary/20'
                        }`}
                      >
                        {tfaEnabled ? 'Disable 2FA' : 'Enable 2FA'}
                      </button>
                    </div>
                  </div>

                  {/* Active Sessions Panel */}
                  <div className="glass-card p-6 bg-brand-surface border-brand-borderrand-border space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-brand-text-secondary flex items-center gap-1.5 select-none">
                      <Laptop className="h-4 w-4 text-brand-primary" /> Active Sessions
                    </h3>
                    <p className="text-xs text-brand-text-secondary leading-relaxed font-medium">
                      Devices currently logged in to your account. Revoke access to log out of any device.
                    </p>

                    <div className="space-y-3.5">
                      {sessions.map((sess) => (
                        <div key={sess.id} className="flex justify-between items-center p-3.5 border border-brand-borderrand-border rounded-xl bg-brand-surface-secondary">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-extrabold text-brand-text-primary">{sess.device}</span>
                              <span className={`text-[8px] font-extrabold font-mono px-2 py-0.5 rounded border uppercase tracking-wider ${
                                sess.status === 'Current Session' 
                                  ? 'bg-brand-success/10 border-brand-success/25 text-brand-success' 
                                  : 'bg-brand-card/[0.01] border-brand-borderrand-border text-brand-text-secondary'
                              }`}>
                                {sess.status}
                              </span>
                            </div>
                            <span className="text-[10px] font-bold text-brand-text-muted block">{sess.location}</span>
                          </div>
                          
                          {sess.status !== 'Current Session' && (
                            <button
                              onClick={() => handleRevokeSession(sess.id)}
                              className="text-xs font-bold text-brand-text-secondary hover:text-brand-danger transition-colors cursor-pointer"
                            >
                              Log Out Device
                            </button>
                          )}
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        setSessions([sessions[0]]);
                        alert('Logged out from all other devices successfully.');
                      }}
                      className="w-full py-2.5 bg-brand-surface-secondary hover:bg-brand-card/[0.05] border border-brand-borderrand-border text-brand-text-primary text-xs font-bold rounded-xl transition-all cursor-pointer select-none"
                    >
                      Logout From All Other Devices
                    </button>
                  </div>

                  {/* Danger Zone: Delete Account */}
                  <div className="glass-card p-6 bg-brand-danger/5 border-red-500/10 space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-brand-danger flex items-center gap-1.5 select-none">
                      <Trash2 className="h-4 w-4 text-brand-danger" /> Danger Zone
                    </h3>
                    <p className="text-xs text-brand-text-secondary leading-relaxed font-medium">
                      Deleting your Gnani account will erase all of your statistics, tasks, and streaks. This is permanent.
                    </p>
                    <button
                      onClick={handleDeleteAccount}
                      className="px-4 py-2 bg-brand-danger/15 hover:bg-brand-danger/25 text-brand-danger border border-red-500/25 text-xs font-extrabold rounded-xl transition-all cursor-pointer"
                    >
                      Delete My Account
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
