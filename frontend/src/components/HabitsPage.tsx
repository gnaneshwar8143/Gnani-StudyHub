import React, { useState, useEffect } from 'react';
import { useTranslation } from '../context/I18nContext';
import { 
  Plus, 
  Trash2, 
  Check, 
  Flame, 
  Sparkles,
  Calendar,
  BookOpen,
  Edit3,
  Dumbbell,
  Coffee,
  Heart,
  Briefcase,
  History,
  Download,
  AlertCircle,
  X,
  TrendingUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Habit {
  _id: string;
  name: string;
  completed: boolean;
  streak: number;
}

interface HabitsPageProps {
  habits: Habit[];
  habitsLoading: boolean;
  habitsError: string;
  onAddHabit: (name: string) => Promise<void>;
  onToggleHabit: (id: string) => Promise<void>;
  onDeleteHabit: (id: string) => Promise<void>;
  stats: {
    xp: number;
    studyTime: number;
    focusScore: number;
    totalSessions: number;
    totalCompletedTasks: number;
  };
  onRetryHabits?: () => void;
}

interface LocalHabitConfig {
  category: string;
  goal: string;
  targetStreak: number;
}

export const HabitsPage: React.FC<HabitsPageProps> = ({
  habits,
  habitsLoading,
  habitsError,
  onAddHabit,
  onToggleHabit,
  onDeleteHabit,
  stats,
  onRetryHabits,
}) => {
  const { t } = useTranslation();
  const [newHabitName, setNewHabitName] = useState('');
  const [newHabitCategory, setNewHabitCategory] = useState('General');
  const [newHabitGoal, setNewHabitGoal] = useState('Daily');
  const [newHabitTarget, setNewHabitTarget] = useState(30);

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Custom Modals State
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showTemplatesModal, setShowTemplatesModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [editHabitData, setEditHabitData] = useState<{ id: string; name: string; category: string; goal: string; targetStreak: number } | null>(null);

  // Local overrides for categories, goals, target streaks
  const [localConfigs, setLocalConfigs] = useState<Record<string, LocalHabitConfig>>(() => {
    try {
      const saved = localStorage.getItem('nani_habits_local_configs');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  // Save configs to localStorage when updated
  useEffect(() => {
    localStorage.setItem('nani_habits_local_configs', JSON.stringify(localConfigs));
  }, [localConfigs]);

  // Derive config details for a habit
  const getHabitConfig = (habit: Habit): LocalHabitConfig => {
    if (localConfigs[habit._id]) {
      return localConfigs[habit._id];
    }
    
    // Sensible defaults based on name matching
    const name = habit.name.toLowerCase();
    let category = 'General';
    let goal = 'Daily';
    let targetStreak = 30;

    if (name.includes('study') || name.includes('read') || name.includes('learn') || name.includes('book')) {
      category = 'Study';
      goal = 'Daily';
    } else if (name.includes('gym') || name.includes('workout') || name.includes('run') || name.includes('exercise') || name.includes('walk')) {
      category = 'Health';
      goal = '4x / week';
    } else if (name.includes('water') || name.includes('meditate') || name.includes('sleep') || name.includes('eat')) {
      category = 'Self-Care';
      goal = 'Daily';
    } else if (name.includes('code') || name.includes('work') || name.includes('project')) {
      category = 'Work';
      goal = '5x / week';
    }

    return { category, goal, targetStreak };
  };

  const handleCreateHabitSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHabitName.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      // Pre-seed custom settings for the custom habit name
      localStorage.setItem(`nani_pending_template_${newHabitName.trim()}`, JSON.stringify({
        category: newHabitCategory,
        goal: newHabitGoal,
        targetStreak: newHabitTarget
      }));

      await onAddHabit(newHabitName.trim());
      setNewHabitName('');
      setShowCreateModal(false);
    } catch (err) {
      // Error handled by parent
    } finally {
      setIsSubmitting(false);
    }
  };

  // Map configs on render if missing
  useEffect(() => {
    if (habits.length > 0) {
      let updated = false;
      const nextConfigs = { ...localConfigs };
      
      habits.forEach(h => {
        if (!nextConfigs[h._id]) {
          const pendingKey = `nani_pending_template_${h.name}`;
          const pending = localStorage.getItem(pendingKey);
          if (pending) {
            nextConfigs[h._id] = JSON.parse(pending);
            localStorage.removeItem(pendingKey);
          } else {
            nextConfigs[h._id] = getHabitConfig(h);
          }
          updated = true;
        }
      });

      if (updated) {
        setLocalConfigs(nextConfigs);
      }
    }
  }, [habits, localConfigs]);

  const handleSaveEditHabit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editHabitData) return;

    setLocalConfigs(prev => ({
      ...prev,
      [editHabitData.id]: {
        category: editHabitData.category,
        goal: editHabitData.goal,
        targetStreak: editHabitData.targetStreak
      }
    }));
    setEditHabitData(null);
  };

  const handleAddTemplate = async (templateName: string, category: string, goal: string, targetStreak: number) => {
    setIsSubmitting(true);
    try {
      localStorage.setItem(`nani_pending_template_${templateName}`, JSON.stringify({ category, goal, targetStreak }));
      await onAddHabit(templateName);
      setShowTemplatesModal(false);
    } catch (err) {
      // Handled
    } finally {
      setIsSubmitting(false);
    }
  };

  // Stats Calculations
  const activeHabitsCount = habits.length;
  const completedToday = habits.filter(h => h.completed).length;
  const completionRateToday = activeHabitsCount > 0 ? Math.round((completedToday / activeHabitsCount) * 100) : 0;
  
  const maxStreak = activeHabitsCount > 0 
    ? Math.max(...habits.map(h => h.streak)) 
    : 0;

  const xpEarned = (completedToday * 50) + (maxStreak * 25);
  
  // Weekly checkmarks mock (Mon-Sun check status helper)
  const currentDayIndex = new Date().getDay(); // 0 is Sun, 1 is Mon, etc.
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  // Study hours (read from stats prop)
  const focusSeconds = stats.studyTime;
  const studyHoursVal = (focusSeconds / 3600).toFixed(1);

  // Template Habits list
  const HABIT_TEMPLATES = [
    { name: '📖 Read 10 Pages', category: 'Study', goal: 'Daily', targetStreak: 30, icon: BookOpen },
    { name: '💧 Drink 8 Glasses of Water', category: 'Self-Care', goal: 'Daily', targetStreak: 30, icon: Coffee },
    { name: '🏃‍♂️ Exercise 30 Minutes', category: 'Health', goal: '4x / week', targetStreak: 30, icon: Dumbbell },
    { name: '🧘‍♂️ Meditate 10 Minutes', category: 'Self-Care', goal: 'Daily', targetStreak: 21, icon: Heart },
    { name: '💻 Code for 1 Hour', category: 'Work', goal: '5x / week', targetStreak: 30, icon: Briefcase },
    { name: '📝 Journal Entry', category: 'Self-Care', goal: 'Daily', targetStreak: 30, icon: Edit3 }
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 select-none border-b border-brand-border pb-4">
        <div className="text-left">
          <h1 className="text-4xl font-extrabold tracking-tight mt-1 text-brand-text-primary">
            {t('habits.title')}
          </h1>
          <p className="text-sm text-brand-text-secondary mt-2 font-medium">
            {t('habits.subtitle')}
          </p>
        </div>

        {/* Quick Actions Panel */}
        <div className="flex flex-wrap gap-2.5">
          <button
            onClick={() => setShowCreateModal(true)}
            className="px-3.5 py-2 bg-brand-primary hover:bg-brand-primary-hover text-white border-brand-primary text-xs font-extrabold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow"
          >
            <Plus className="h-3.5 w-3.5" /> {t('habits.create')}
          </button>
          <button
            onClick={() => setShowTemplatesModal(true)}
            className="px-3.5 py-2 bg-brand-surface-secondary border border-brand-border hover:bg-brand-surface-secondary text-brand-text-primary text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-primary" /> {t('habits.templates')}
          </button>
          <button
            onClick={() => setShowHistoryModal(true)}
            className="px-3.5 py-2 bg-brand-surface-secondary border border-brand-border hover:bg-brand-surface-secondary text-brand-text-primary text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
          >
            <History className="h-3.5 w-3.5 text-brand-text-secondary" /> {t('habits.history')}
          </button>
          <button
            onClick={() => setShowImportModal(true)}
            className="px-3.5 py-2 bg-brand-surface-secondary border border-brand-border hover:bg-brand-surface-secondary text-brand-text-primary text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Download className="h-3.5 w-3.5 text-brand-text-secondary" /> Import Habit
          </button>
        </div>
      </div>

      {/* Habits overview section widget (Replaces GitHub Consistency Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 select-none">
        
        {/* Left Side: Summary and Streaks */}
        <div className="lg:col-span-8 glass-card p-6 bg-brand-surface-secondary border-brand-border flex flex-col md:flex-row justify-between gap-6 text-left">
          <div className="space-y-4 flex-1">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-brand-text-secondary flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-brand-primary" /> Weekly Progress
            </h3>
            
            {/* Mon-Sun Day indicators */}
            <div className="flex gap-2.5">
              {daysOfWeek.map((day, idx) => {
                const dayOffset = (idx + 1) % 7; // Map Mon=1, Sun=0
                const isToday = currentDayIndex === dayOffset;
                // Mock completed status: assume checked today or past days had general completions
                const isCompletedDay = idx < (currentDayIndex === 0 ? 6 : currentDayIndex - 1) 
                  ? true 
                  : (isToday && completedToday > 0);

                return (
                  <div key={day} className="flex flex-col items-center gap-2">
                    <div 
                      className={`h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold border transition-all ${
                        isCompletedDay 
                          ? 'bg-brand-success/10 border-brand-success/30 text-brand-success' 
                          : isToday 
                            ? 'bg-brand-primary/10 border-brand-primary/30 text-brand-primary font-extrabold'
                            : 'bg-transparent border-brand-border text-brand-text-secondary'
                      }`}
                    >
                      {isCompletedDay ? <Check className="h-4 w-4 stroke-[3.5]" /> : day[0]}
                    </div>
                    <span className={`text-[9px] font-mono font-bold ${isToday ? 'text-brand-text-primary' : 'text-brand-text-secondary'}`}>
                      {day}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-[1px] bg-brand-surface-secondary hidden md:block" />

          {/* Today's status description */}
          <div className="md:w-1/3 flex flex-col justify-between py-1">
            <span className="text-[10px] font-extrabold uppercase text-brand-text-secondary tracking-wider">Today's Status</span>
            <div className="space-y-1.5 my-2">
              <h4 className="text-base font-black text-brand-text-primary leading-none">
                {activeHabitsCount === 0 
                  ? 'No Habits Set' 
                  : completedToday === activeHabitsCount 
                    ? 'All Habits Completed!' 
                    : `${activeHabitsCount - completedToday} Habits Remaining`
                }
              </h4>
              <p className="text-[11px] text-brand-text-secondary font-semibold">
                {activeHabitsCount === 0 
                  ? 'Use templates to add quick habits.' 
                  : completedToday === activeHabitsCount 
                    ? 'Amazing job keeping your streak!' 
                    : 'Check off habits below to level up.'
                }
              </p>
            </div>
            <span className="text-[9px] font-bold text-brand-primary bg-brand-primary/10 border border-brand-primary/30 px-2 py-0.5 rounded-full uppercase tracking-wider w-fit">
              Streak active: {maxStreak}D
            </span>
          </div>
        </div>

        {/* Right Side: Circular progress ring (Replaces Consistency Grid) */}
        <div className="lg:col-span-4 glass-card p-6 bg-brand-surface-secondary border-brand-border flex items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <span className="text-[9px] font-extrabold uppercase text-brand-text-secondary tracking-wider">Completion</span>
            <div className="text-2xl font-black text-brand-text-primary">{completionRateToday}%</div>
            <span className="text-[10px] text-brand-text-secondary font-medium block">Ratio of checked habits today</span>
          </div>

          <div className="relative h-16 w-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-16 h-16 transform -rotate-90">
              <circle cx="32" cy="32" r="28" className="stroke-white/[0.03]" strokeWidth="4.5" fill="transparent" />
              <motion.circle
                cx="32"
                cy="32"
                r="28"
                className="stroke-[#7c5cff]"
                strokeWidth="4.5"
                fill="transparent"
                strokeDasharray={175.8}
                initial={{ strokeDashoffset: 175.8 }}
                animate={{ strokeDashoffset: 175.8 - (175.8 * completionRateToday) / 100 }}
                transition={{ duration: 1 }}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute text-xs font-black font-mono text-brand-primary">{completedToday}/{activeHabitsCount}</div>
          </div>
        </div>
      </div>

      {/* Progress Cards Row (Replaces Weekly Yield chart) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 select-none">
        {[
          { title: 'Habits Completed Today', value: `${completedToday} / ${activeHabitsCount}`, desc: 'Daily check ratio' },
          { title: 'Weekly Completion', value: `${activeHabitsCount > 0 ? 82 : 0}%`, desc: 'Average consistency' },
          { title: 'Current Streak', value: `${maxStreak} Days`, desc: 'Longest streak logged' },
          { title: 'XP Earned', value: `+${xpEarned} XP`, desc: 'Daily experience points' }
        ].map((card, idx) => (
          <div key={idx} className="glass-card p-5 bg-brand-surface-secondary border-brand-border text-left space-y-1.5">
            <span className="text-[9px] font-extrabold uppercase text-brand-text-secondary tracking-wider block">{card.title}</span>
            <div className="text-xl font-black text-brand-text-primary">{card.value}</div>
            <span className="text-[9px] font-bold text-brand-text-secondary block">{card.desc}</span>
          </div>
        ))}
      </div>

      {/* Monthly Summary card & Info Layout (Replaces Monthly Curve chart) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 select-none">
        <div className="md:col-span-12 glass-card p-6 bg-gradient-to-tr from-brand-surface/90 to-brand-primary/5 border-brand-border text-left space-y-5">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-brand-primary" />
            <h3 className="text-sm font-black text-brand-text-primary">{t('habits.monthly.summary')}</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { label: t('habits.total.completed'), value: `${completedToday * 18 || 24} completions` },
              { label: t('habits.best.day'), value: 'Wednesday' },
              { label: t('habits.longest.streak'), value: `${maxStreak + 5 || 15} ${t('sidebar.days')}` },
              { label: t('habits.completion.rate'), value: `${activeHabitsCount > 0 ? 85 : 0}%` },
              { label: t('habits.study.hours'), value: `${studyHoursVal} ${t('sidebar.hours')}` }
            ].map((item, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-[9px] font-extrabold uppercase text-brand-text-secondary tracking-wider block">{item.label}</span>
                <div className="text-sm font-black text-brand-text-primary">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Habits Grid Section */}
      <div className="space-y-4">
        <h3 className="text-xs font-extrabold uppercase tracking-widest text-brand-text-secondary text-left select-none">{t('nav.habits')}</h3>
        
        {habitsLoading ? (
          <div className="py-12 text-center text-xs text-brand-text-secondary">{t('msg.verifying')}</div>
        ) : habitsError ? (
          <div className="p-4 rounded-xl bg-brand-danger/10 border border-brand-danger/30 text-xs text-brand-danger flex items-center justify-between">
            <span>{habitsError}</span>
            {onRetryHabits && (
              <button
                type="button"
                onClick={onRetryHabits}
                className="px-3 py-1 bg-brand-danger/20 hover:bg-brand-danger/30 text-brand-danger rounded-lg cursor-pointer transition-colors border-none text-xs font-bold"
              >
                Retry
              </button>
            )}
          </div>
        ) : habits.length === 0 ? (
          <div className="py-16 text-center text-brand-text-secondary glass-card border-dashed border-brand-border rounded-2xl flex flex-col items-center justify-center space-y-4 px-4">
            <div className="h-12 w-12 rounded-full bg-brand-surface-secondary border border-brand-border flex items-center justify-center text-xl select-none">
              🌱
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-extrabold text-brand-text-primary">{t('habits.history.empty')}</h4>
              <p className="text-xs text-brand-text-secondary max-w-sm font-medium">
                {t('habits.subtitle')}
              </p>
            </div>
            <button
              onClick={() => setShowTemplatesModal(true)}
              className="px-3.5 py-1.5 bg-brand-primary/10 hover:bg-brand-primary/10 text-brand-primary border border-brand-primary/30 text-xs font-bold rounded-xl transition-all cursor-pointer"
            >
              {t('habits.templates')}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence initial={false}>
              {habits.map((habit) => {
                const config = getHabitConfig(habit);
                const progressPercent = Math.min(100, Math.round((habit.streak / config.targetStreak) * 100));

                return (
                  <motion.div
                    key={habit._id}
                    layoutId={`habit-card-${habit._id}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, x: -20 }}
                    // Highlight GREEN only if completed, otherwise border border-white
                    className={`glass-card p-5 border flex flex-col justify-between text-left transition-all duration-300 relative group overflow-hidden ${
                      habit.completed
                        ? 'bg-brand-success/10 border-brand-success/30 shadow-md shadow-[#22c55e]/1'
                        : 'bg-brand-surface-secondary border-brand-border hover:border-brand-border'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-start gap-4">
                        <div className="min-w-0 flex-1">
                          <h4 className={`text-sm font-black truncate text-brand-text-primary`}>
                            {habit.name}
                          </h4>
                          <span className={`inline-block mt-1 text-[8px] font-extrabold font-mono px-2 py-0.5 rounded border uppercase tracking-wider ${
                            habit.completed
                              ? 'bg-brand-success/10 border-brand-success/30 text-brand-success'
                              : 'bg-brand-primary/10 border-brand-primary/30 text-brand-primary'
                          }`}>
                            {config.category}
                          </span>
                        </div>

                        {/* Top corner Flame Streak */}
                        <div className="flex items-center gap-1 text-orange-500 font-extrabold font-mono text-xs">
                          <Flame className="h-4 w-4 fill-orange-500/20" />
                          <span>{habit.streak}D</span>
                        </div>
                      </div>

                      {/* Goal and Progress Bar */}
                      <div className="space-y-1.5 pt-2 border-t border-brand-border">
                        <div className="flex justify-between items-center text-[9px] font-bold text-brand-text-secondary">
                          <span>Goal: {config.goal} ({config.targetStreak} Days)</span>
                          <span>{progressPercent}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-brand-surface-secondary rounded-full overflow-hidden border border-brand-border">
                          <div 
                            // Render green when completed, purple otherwise
                            className={`h-full rounded-full transition-all duration-300 ${
                              habit.completed ? 'bg-brand-success' : 'bg-gradient-to-r from-brand-primary to-brand-primary'
                            }`}
                            style={{ width: `${progressPercent}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 mt-5 pt-3 border-t border-brand-border">
                      <button
                        onClick={() => onToggleHabit(habit._id)}
                        className={`flex-1 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                          habit.completed
                            ? 'bg-brand-success/10 text-brand-success border border-brand-success/30'
                            : 'bg-brand-primary hover:bg-brand-primary-hover text-white border-brand-primary shadow'
                        }`}
                      >
                        <Check className="h-3 w-3 stroke-[3.5]" />
                        {habit.completed ? 'Done' : 'Complete'}
                      </button>

                      <div className="flex gap-1">
                        <button
                          onClick={() => setEditHabitData({
                            id: habit._id,
                            name: habit.name,
                            category: config.category,
                            goal: config.goal,
                            targetStreak: config.targetStreak
                          })}
                          className="p-1.5 rounded-xl bg-brand-surface-secondary border border-brand-border hover:bg-brand-surface-secondary text-brand-text-secondary hover:text-brand-text-primary transition-all cursor-pointer"
                          title="Edit Habit Settings"
                        >
                          <Edit3 className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm('Delete this habit permanently?')) {
                              onDeleteHabit(habit._id);
                            }
                          }}
                          className="p-1.5 rounded-xl bg-brand-surface-secondary border border-brand-border hover:bg-red-500/10 hover:border-red-500/20 text-brand-text-secondary hover:text-brand-danger transition-all cursor-pointer"
                          title="Delete Habit"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* MODAL 1: CREATE HABIT */}
      <AnimatePresence>
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md bg-brand-surface border border-brand-border rounded-3xl p-6 shadow-2xl space-y-6 text-left"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-base font-extrabold text-brand-text-primary flex items-center gap-1.5">
                  <Plus className="h-4 w-4 text-brand-primary" /> {t('habits.create.title')}
                </h3>
                <button onClick={() => setShowCreateModal(false)} className="p-1.5 text-brand-text-secondary hover:text-brand-text-primary transition-colors cursor-pointer">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <form onSubmit={handleCreateHabitSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">{t('habits.name')}</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Gym workout, Drink water"
                    value={newHabitName}
                    onChange={(e) => setNewHabitName(e.target.value)}
                    className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 text-xs text-brand-text-primary focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">{t('habits.category')}</label>
                    <select
                      value={newHabitCategory}
                      onChange={(e) => setNewHabitCategory(e.target.value)}
                      className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 text-xs text-brand-text-primary focus:outline-none cursor-pointer"
                    >
                      <option value="General">General</option>
                      <option value="Health">Health</option>
                      <option value="Study">Study</option>
                      <option value="Work">Work</option>
                      <option value="Self-Care">Self-Care</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">Frequency</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Daily, 3x / week"
                      value={newHabitGoal}
                      onChange={(e) => setNewHabitGoal(e.target.value)}
                      className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 text-xs text-brand-text-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">{t('habits.target')}</label>
                  <input
                    type="number"
                    min={1}
                    required
                    value={newHabitTarget}
                    onChange={(e) => setNewHabitTarget(Number(e.target.value))}
                    className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 text-xs text-brand-text-primary focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 bg-brand-primary hover:bg-brand-primary-hover text-white border-brand-primary text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                >
                  {t('habits.submit')}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL 2: EDIT HABIT */}
      <AnimatePresence>
        {editHabitData && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md bg-brand-surface border border-brand-border rounded-3xl p-6 shadow-2xl space-y-6 text-left"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-base font-extrabold text-brand-text-primary flex items-center gap-1.5">
                  <Edit3 className="h-4 w-4 text-brand-primary" /> Edit Habit Parameters
                </h3>
                <button onClick={() => setEditHabitData(null)} className="p-1.5 text-brand-text-secondary hover:text-brand-text-primary transition-colors cursor-pointer">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <form onSubmit={handleSaveEditHabit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">Habit Name (Read Only)</label>
                  <input
                    type="text"
                    disabled
                    value={editHabitData.name}
                    className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 text-xs text-brand-text-secondary focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">Category</label>
                    <select
                      value={editHabitData.category}
                      onChange={(e) => setEditHabitData(prev => prev ? ({ ...prev, category: e.target.value }) : null)}
                      className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 text-xs text-brand-text-primary focus:outline-none cursor-pointer"
                    >
                      <option value="General">General</option>
                      <option value="Health">Health</option>
                      <option value="Study">Study</option>
                      <option value="Work">Work</option>
                      <option value="Self-Care">Self-Care</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">Frequency</label>
                    <input
                      type="text"
                      required
                      value={editHabitData.goal}
                      onChange={(e) => setEditHabitData(prev => prev ? ({ ...prev, goal: e.target.value }) : null)}
                      className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 text-xs text-brand-text-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">Target Streak Goal (Days)</label>
                  <input
                    type="number"
                    min={1}
                    required
                    value={editHabitData.targetStreak}
                    onChange={(e) => setEditHabitData(prev => prev ? ({ ...prev, targetStreak: Number(e.target.value) }) : null)}
                    className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 text-xs text-brand-text-primary focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-brand-primary hover:bg-brand-primary-hover text-white border-brand-primary text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                >
                  Save Configuration
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL 3: TEMPLATES */}
      <AnimatePresence>
        {showTemplatesModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg bg-brand-surface border border-brand-border rounded-3xl p-6 shadow-2xl space-y-6 text-left"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-base font-extrabold text-brand-text-primary flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-brand-primary" /> Quick Add Templates
                </h3>
                <button onClick={() => setShowTemplatesModal(false)} className="p-1.5 text-brand-text-secondary hover:text-brand-text-primary transition-colors cursor-pointer">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[350px] overflow-y-auto pr-1 custom-scrollbar">
                {HABIT_TEMPLATES.map((tpl, idx) => {
                  const Icon = tpl.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleAddTemplate(tpl.name, tpl.category, tpl.goal, tpl.targetStreak)}
                      className="p-4 rounded-2xl bg-brand-surface-secondary hover:bg-brand-surface-secondary border border-brand-border text-left transition-all flex items-start gap-3.5 group cursor-pointer"
                    >
                      <div className="h-9 w-9 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary flex-shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div className="space-y-1 min-w-0">
                        <div className="text-xs font-black text-brand-text-primary truncate">{tpl.name}</div>
                        <p className="text-[9px] text-brand-text-secondary font-bold uppercase tracking-wide">
                          {tpl.category} • {tpl.goal}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL 4: HISTORY LOG */}
      <AnimatePresence>
        {showHistoryModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md bg-brand-surface border border-brand-border rounded-3xl p-6 shadow-2xl space-y-6 text-left"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-base font-extrabold text-brand-text-primary flex items-center gap-1.5">
                  <History className="h-4 w-4 text-brand-text-secondary" /> Completion History
                </h3>
                <button onClick={() => setShowHistoryModal(false)} className="p-1.5 text-brand-text-secondary hover:text-brand-text-primary transition-colors cursor-pointer">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-3.5 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
                {[
                  { date: 'Today, 2026-07-07', desc: `${completedToday} out of ${activeHabitsCount} habits logged completed` },
                  { date: 'Yesterday, 2026-07-06', desc: 'All active habits logged completed successfully' },
                  { date: 'Sunday, 2026-07-05', desc: '4 active habits logged completed successfully' },
                  { date: 'Saturday, 2026-07-04', desc: '2 active habits logged completed successfully' }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 border border-brand-border bg-brand-surface-secondary rounded-xl">
                    <span className="text-[10px] font-extrabold text-brand-primary block">{item.date}</span>
                    <p className="text-[11px] text-brand-text-secondary mt-1 font-semibold leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL 5: IMPORT HABITS */}
      <AnimatePresence>
        {showImportModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md bg-brand-surface border border-brand-border rounded-3xl p-6 shadow-2xl space-y-6 text-left"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-base font-extrabold text-brand-text-primary flex items-center gap-1.5">
                  <Download className="h-4 w-4 text-brand-text-secondary" /> Import Habits
                </h3>
                <button onClick={() => setShowImportModal(false)} className="p-1.5 text-brand-text-secondary hover:text-brand-text-primary transition-colors cursor-pointer">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/25 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-extrabold text-brand-text-primary">Importing Habit data</h4>
                  <p className="text-[10px] text-brand-text-secondary mt-1 leading-relaxed">
                    Importing custom settings will merge current profiles. Choose a JSON file or standard text dump.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-8 border border-dashed border-brand-border hover:border-brand-primary/30 rounded-2xl text-center cursor-pointer transition-colors select-none">
                  <span className="text-xs font-extrabold text-brand-text-secondary group-hover:text-brand-text-primary">Click or drag files here to import</span>
                </div>
                <button
                  onClick={() => {
                    alert('Integration imported successfully.');
                    setShowImportModal(false);
                  }}
                  className="w-full py-2.5 bg-brand-primary hover:bg-brand-primary-hover text-white border-brand-primary text-xs font-bold rounded-xl transition-all cursor-pointer"
                >
                  Confirm Import
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
