import React, { useState, useEffect } from 'react';
import { 
  User, 
  Mail, 
  Palette, 
  Award, 
  CheckCircle2, 
  Lock, 
  ShieldCheck, 
  Activity, 
  Zap, 
  Clock,
  Sparkles
} from 'lucide-react';

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
}

interface ThemeOption {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  shadowColor: string;
}

const THEME_OPTIONS: ThemeOption[] = [
  { id: 'violet', name: 'Aetheric Violet', primary: '#7c5cff', secondary: '#a78bfa', accent: '#4f46e5', shadowColor: 'rgba(124,92,255,0.2)' },
  { id: 'emerald', name: 'Synaptic Emerald', primary: '#22c55e', secondary: '#86efac', accent: '#15803d', shadowColor: 'rgba(34,197,94,0.2)' },
  { id: 'amber', name: 'Chrono Amber', primary: '#f59e0b', secondary: '#fde047', accent: '#b45309', shadowColor: 'rgba(245,158,11,0.2)' },
  { id: 'crimson', name: 'Cognitive Crimson', primary: '#ef4444', secondary: '#fca5a5', accent: '#b91c1c', shadowColor: 'rgba(239,68,68,0.2)' },
];

export const ProfileHub: React.FC<ProfileHubProps> = ({
  objectives,
  habits,
  currentUser,
  onUpdateProfile,
}) => {
  const [profileName, setProfileName] = useState(currentUser.name);
  const [profileEmail, setProfileEmail] = useState(currentUser.email);
  const [activeTheme, setActiveTheme] = useState('violet');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Load active theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('lifeos_theme_accent') || 'violet';
    setActiveTheme(saved);
  }, []);

  const handleApplyTheme = (themeId: string) => {
    const theme = THEME_OPTIONS.find(t => t.id === themeId);
    if (!theme) return;

    setActiveTheme(themeId);
    localStorage.setItem('lifeos_theme_accent', themeId);

    // Apply color values to root element
    document.documentElement.style.setProperty('--color-brand-primary', theme.primary);
    document.documentElement.style.setProperty('--color-brand-secondary', theme.secondary);
    document.documentElement.style.setProperty('--color-brand-accent', theme.accent);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!profileName.trim() || !profileEmail.trim()) return;

    onUpdateProfile(profileName.trim(), profileEmail.trim());
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  // Dynamic calculations for dynamic achievements unlocks
  const completedObjectivesCount = objectives.filter(o => o.status === 'Completed').length;
  const completedHabitsCount = habits.filter(h => h.completed).length;
  const maxStreak = habits.length > 0 ? Math.max(...habits.map(h => h.streak)) : 0;

  const achievementsList = [
    {
      id: 'aura_initiate',
      title: 'Aura Initiate',
      desc: 'Initialize at least 3 active targets in your task vector.',
      icon: Zap,
      unlocked: objectives.length >= 3,
      criteria: `Current: ${objectives.length} / 3 objectives`
    },
    {
      id: 'neuro_link',
      title: 'Neuro-Link Sync',
      desc: 'Complete at least 1 checklist task objective.',
      icon: CheckCircle2,
      unlocked: completedObjectivesCount > 0,
      criteria: `Current: ${completedObjectivesCount} / 1 completed`
    },
    {
      id: 'plasticity_pioneer',
      title: 'Plasticity Pioneer',
      desc: 'Establish a habit discipline streak of 5+ days.',
      icon: Activity,
      unlocked: maxStreak >= 5,
      criteria: `Max streak: ${maxStreak} / 5 days`
    },
    {
      id: 'ultimate_synthesizer',
      title: 'Ultimate Synthesizer',
      desc: 'Achieve 100% daily lock-in completion on all habit vectors.',
      icon: Sparkles,
      unlocked: completedHabitsCount === habits.length && habits.length > 0,
      criteria: `Habits checked: ${completedHabitsCount} / ${habits.length}`
    },
    {
      id: 'time_alchemist',
      title: 'Time Alchemist',
      desc: 'Schedule and allocate at least 5 objectives in your calendar.',
      icon: Clock,
      unlocked: objectives.filter(o => o.scheduledDate && o.scheduledTime).length >= 5,
      criteria: `Scheduled: ${objectives.filter(o => o.scheduledDate && o.scheduledTime).length} / 5 tasks`
    }
  ];

  const unlockedCount = achievementsList.filter(a => a.unlocked).length;

  return (
    <div className="space-y-8 pb-12">
      {/* Header Info */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#7c5cff] uppercase">
          <User className="h-3.5 w-3.5" /> User Session Core
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight mt-1 bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
          Profile Hub
        </h1>
        <p className="text-sm text-[#a1a1aa] mt-2 font-medium">
          Manage administrative identity keys, visual themes, and productivity accolades.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Profile Settings & Theme customizer */}
        <div className="lg:col-span-1 space-y-6">
          {/* Settings Box */}
          <div className="glass-card p-6 bg-[#111113]/80 border-white/[0.04]">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#a1a1aa] mb-4 text-left flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#7c5cff]" /> Identity Keys
            </h3>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              {saveSuccess && (
                <div className="p-3 rounded-xl bg-[#22c55e]/15 border border-[#22c55e]/30 text-xs text-[#22c55e] font-semibold text-left">
                  Profile synchronization complete. Identity record updated.
                </div>
              )}

              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Identifier Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-3.5 w-3.5 text-zinc-600" />
                  <input
                    type="text"
                    required
                    value={profileName}
                    onChange={(e) => setProfileName(e.target.value)}
                    className="w-full bg-[#09090b]/80 border border-white/[0.06] rounded-xl pl-9 pr-4 py-2 text-xs text-white focus:outline-none focus:border-[#7c5cff]/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Secure Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-3.5 w-3.5 text-zinc-600" />
                  <input
                    type="email"
                    required
                    value={profileEmail}
                    onChange={(e) => setProfileEmail(e.target.value)}
                    className="w-full bg-[#09090b]/80 border border-white/[0.06] rounded-xl pl-9 pr-4 py-2 text-xs text-white focus:outline-none focus:border-[#7c5cff]/50 transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-bold rounded-xl transition-all cursor-pointer glow-btn"
              >
                Synchronize Profile
              </button>
            </form>
          </div>

          {/* Aesthetic Color Customizer */}
          <div className="glass-card p-6 bg-[#111113]/80 border-white/[0.04]">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#a1a1aa] mb-4 text-left flex items-center gap-2">
              <Palette className="h-4 w-4 text-[#7c5cff]" /> Visual Core Accents
            </h3>
            
            <div className="space-y-3">
              {THEME_OPTIONS.map((theme) => {
                const isActive = activeTheme === theme.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => handleApplyTheme(theme.id)}
                    className={`w-full p-3 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-white/[0.02] border-white/[0.12] shadow-md' 
                        : 'bg-transparent border-white/[0.04] hover:border-white/[0.08]'
                    }`}
                    style={{
                      boxShadow: isActive ? `0 0 16px ${theme.shadowColor}` : 'none'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="h-3.5 w-3.5 rounded-full border border-white/[0.08]" 
                        style={{ backgroundColor: theme.primary }}
                      />
                      <span className={`text-xs font-bold ${isActive ? 'text-white' : 'text-zinc-500'}`}>{theme.name}</span>
                    </div>
                    {isActive && (
                      <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: theme.primary }} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Achievements checklist deck */}
        <div className="lg:col-span-2 space-y-6">
          {/* Achievements Summary Box */}
          <div className="glass-card p-6 bg-gradient-to-br from-[#111113]/80 to-[#7c5cff]/5 border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#7c5cff] flex items-center gap-1.5">
                <Award className="h-3.5 w-3.5" /> Cognitive Achievements
              </span>
              <h2 className="text-2xl font-black text-white leading-none">Accolades Sync Board</h2>
              <p className="text-xs text-[#a1a1aa]">Unlock awards by locking in consistency metrics and goals.</p>
            </div>
            
            <div className="relative h-20 w-20 flex items-center justify-center flex-shrink-0">
              <svg className="w-20 h-20 transform -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  className="stroke-white/[0.04]"
                  strokeWidth="5"
                  fill="transparent"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  className="stroke-[#7c5cff]"
                  strokeWidth="5"
                  fill="transparent"
                  strokeDasharray={213.6}
                  strokeDashoffset={213.6 - (213.6 * unlockedCount) / achievementsList.length}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-base font-black font-mono leading-none">{unlockedCount} / {achievementsList.length}</span>
                <span className="text-[8px] font-bold text-[#a1a1aa] uppercase tracking-wider mt-1">Unlocked</span>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="space-y-4">
            {achievementsList.map((ach) => {
              const Icon = ach.icon;
              return (
                <div
                  key={ach.id}
                  className={`glass-card p-5 border flex items-center gap-5 transition-all duration-300 ${
                    ach.unlocked 
                      ? 'bg-[#111113]/80 border-[#7c5cff]/20 shadow-md shadow-[#7c5cff]/2' 
                      : 'bg-[#111113]/40 border-white/[0.04] opacity-50'
                  }`}
                >
                  <div className={`h-11 w-11 rounded-2xl flex items-center justify-center border flex-shrink-0 ${
                    ach.unlocked
                      ? 'bg-[#7c5cff]/10 border-[#7c5cff]/20 text-[#7c5cff]'
                      : 'bg-white/[0.02] border-white/[0.06] text-zinc-600'
                  }`}>
                    {ach.unlocked ? <Icon className="h-5 w-5" /> : <Lock className="h-4 w-4" />}
                  </div>

                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="text-sm font-bold text-white truncate">{ach.title}</h4>
                      <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${
                        ach.unlocked
                          ? 'bg-[#22c55e]/10 border-[#22c55e]/25 text-[#22c55e]'
                          : 'bg-white/[0.02] border-white/[0.04] text-zinc-500'
                      }`}>
                        {ach.unlocked ? 'Unlocked' : 'Locked'}
                      </span>
                    </div>
                    <p className="text-xs text-[#a1a1aa] mt-1 font-medium leading-relaxed">{ach.desc}</p>
                    <div className="flex items-center gap-1.5 mt-3 text-[10px] text-zinc-500 font-semibold font-mono">
                      <span>METRIC:</span>
                      <span className={ach.unlocked ? 'text-[#7c5cff]' : 'text-zinc-500'}>{ach.criteria}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
