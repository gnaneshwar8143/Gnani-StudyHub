import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from '../context/I18nContext';
import { QUOTES_DATA } from '../data/quotes';
import type { Quote as QuoteType } from '../data/quotes';
import {
  Play,
  Pause,
  RotateCcw,
  Plus,
  Check,
  Trash2,
  Zap,
  Flame,
  Target,
  TrendingUp,
  Clock,
  Quote,
  Star,
  Sparkles,
  Globe,
  Heart,
  Share2,
  RefreshCw,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts';

interface Habit {
  _id: string;
  name: string;
  completed: boolean;
  streak: number;
}

export interface Objective {
  id: string;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'To Do' | 'In Progress' | 'In Review' | 'Completed';
  dueDate: string;
  progress?: number;
}

interface DashboardProps {
  objectives: Objective[];
  onAddObjective: (title: string, priority: 'High' | 'Medium' | 'Low', status?: Objective['status'], dueDate?: string) => void;
  onToggleObjective: (id: string) => void;
  onDeleteObjective: (id: string) => void;
  onCompleteAllObjectives: () => void;
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
  onUpdateStats: (updates: Partial<DashboardProps['stats']>) => Promise<void>;
  onRetryHabits?: () => void;
}


const DAILY_TIPS = [
  'Discipline is choosing between what you want now and what you want most.',
  'Small daily improvements lead to stunning long-term results.',
  'Done is better than perfect when momentum matters.',
];

const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const cardClass = 'glass-card p-6';

export const Dashboard: React.FC<DashboardProps> = ({
  objectives,
  onAddObjective,
  onToggleObjective,
  onDeleteObjective,
  onCompleteAllObjectives,
  habits,
  habitsLoading,
  habitsError,
  onAddHabit,
  onToggleHabit,
  onDeleteHabit,
  stats,
  onUpdateStats,
  onRetryHabits,
}) => {
  const { user } = useAuth();
  const { t, language, formatDate } = useTranslation();
  const objectivesInputRef = useRef<HTMLInputElement>(null);
  const [time, setTime] = useState(new Date());
  const [focusSeconds, setFocusSeconds] = useState<number>(stats.studyTime);

  useEffect(() => {
    setFocusSeconds(stats.studyTime);
  }, [stats.studyTime]);

  // Quote of the day state machine
  const getDailyQuote = (): QuoteType => {
    const today = new Date().getDate();
    const index = today % QUOTES_DATA.length;
    return QUOTES_DATA[index];
  };

  const [activeQuote, setActiveQuote] = useState<QuoteType>(getDailyQuote);
  const [isQuoteFading, setIsQuoteFading] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const getTranslatedQuote = (q: QuoteType) => {
    return q.translations[language]?.quote || q.translations['en']?.quote || q.quote;
  };

  const getTranslatedAuthor = (q: QuoteType) => {
    return q.translations[language]?.author || q.translations['en']?.author || q.author;
  };

  const getTranslatedCategory = (q: QuoteType) => {
    return q.translations[language]?.category || q.translations['en']?.category || q.category;
  };

  const handleNextQuote = () => {
    setIsQuoteFading(true);
    setTimeout(() => {
      let nextQuote = activeQuote;
      while (nextQuote.id === activeQuote.id) {
        const randomIndex = Math.floor(Math.random() * QUOTES_DATA.length);
        nextQuote = QUOTES_DATA[randomIndex];
      }
      setActiveQuote(nextQuote);
      setIsFavorited(false);
      setIsQuoteFading(false);
    }, 200);
  };

  const handleShareQuote = () => {
    const quoteText = `"${getTranslatedQuote(activeQuote)}" — ${getTranslatedAuthor(activeQuote)}`;
    navigator.clipboard.writeText(quoteText);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2000);
  };

  const [dailyTip] = useState(
    () => DAILY_TIPS[Math.floor(Math.random() * DAILY_TIPS.length)]
  );

  const displayName = user?.name?.split(' ')[0]?.toLowerCase() || 'nani';

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = formatDate(time, { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' });

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const [newHabitName, setNewHabitName] = useState('');
  const handleHabitFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHabitName.trim()) return;
    try {
      await onAddHabit(newHabitName.trim());
      setNewHabitName('');
    } catch {
      // Handled in parent
    }
  };

  const [newObjectiveTitle, setNewObjectiveTitle] = useState('');
  const [objectivePriority, setObjectivePriority] = useState<'High' | 'Medium' | 'Low'>('Medium');
  const [showTaskForm, setShowTaskForm] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newObjectiveTitle.trim()) return;
    onAddObjective(newObjectiveTitle.trim(), objectivePriority);
    setNewObjectiveTitle('');
    setObjectivePriority('Medium');
  };

  const [pomoMinutes, setPomoMinutes] = useState<number>(25);
  const [pomoSeconds, setPomoSeconds] = useState<number>(0);
  const [pomoActive, setPomoActive] = useState<boolean>(false);
  const [pomoMode, setPomoMode] = useState<'work' | 'break'>('work');
  const pomoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [pomoDuration, setPomoDuration] = useState<number>(25 * 60);

  const [editingDuration, setEditingDuration] = useState(false);
  const [customDurationInput, setCustomDurationInput] = useState('25');

  const handleCustomDurationSubmit = () => {
    const val = parseInt(customDurationInput);
    if (!isNaN(val) && val >= 1 && val <= 180) {
      setPomoMinutes(val);
      setPomoSeconds(0);
      setPomoDuration(val * 60);
    }
    setEditingDuration(false);
  };

  useEffect(() => {
    if (pomoActive) {
      pomoTimerRef.current = setInterval(() => {
        if (pomoSeconds > 0) {
          setPomoSeconds(pomoSeconds - 1);
        } else if (pomoSeconds === 0) {
          if (pomoMinutes === 0) {
            setPomoActive(false);
            if (pomoTimerRef.current) clearInterval(pomoTimerRef.current);
            if (pomoMode === 'work') {
              setPomoMode('break');
              setPomoMinutes(5);
              setPomoDuration(5 * 60);
              const elapsedWork = pomoDuration; // standard 25 mins or custom duration
              const nextSec = focusSeconds + elapsedWork;
              setFocusSeconds(nextSec);
              onUpdateStats({
                studyTime: nextSec,
                xp: stats.xp + 150,
                totalSessions: stats.totalSessions + 1
              });
            } else {
              setPomoMode('work');
              setPomoMinutes(25);
              setPomoDuration(25 * 60);
            }
          } else {
            setPomoMinutes(pomoMinutes - 1);
            setPomoSeconds(59);
          }
        }
      }, 1000);
    } else if (pomoTimerRef.current) {
      clearInterval(pomoTimerRef.current);
    }
    return () => {
      if (pomoTimerRef.current) clearInterval(pomoTimerRef.current);
    };
  }, [pomoActive, pomoMinutes, pomoSeconds, pomoMode]);

  const togglePomo = () => {
    if (!pomoActive) setPomoDuration(pomoMinutes * 60 + pomoSeconds);
    setPomoActive(!pomoActive);
  };

  const resetPomo = () => {
    setPomoActive(false);
    setPomoMode('work');
    setPomoMinutes(25);
    setPomoSeconds(0);
    setPomoDuration(25 * 60);
  };

  const startStudy = () => {
    setPomoMinutes(25);
    setPomoSeconds(0);
    setPomoDuration(25 * 60);
    setPomoActive(true);
  };

  const totalItems = habits.length + objectives.length;
  const completedItems =
    habits.filter((h) => h.completed).length +
    objectives.filter((o) => o.status === 'Completed').length;
  const dailyProgress = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  const focusScore = Math.min(
    100,
    Math.round(completedItems * 15 + habits.filter((h) => h.completed).length * 10 + 40)
  );

  const maxStreak = habits.length > 0 ? Math.max(...habits.map((h) => h.streak)) : 0;

  const getWeeklyData = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const today = new Date();
    const currentDay = today.getDay();
    const distanceToMon = currentDay === 0 ? 6 : currentDay - 1;
    const monday = new Date(today);
    monday.setDate(today.getDate() - distanceToMon);
    monday.setHours(0, 0, 0, 0);

    return days.map((day, idx) => {
      const targetDate = new Date(monday);
      targetDate.setDate(monday.getDate() + idx);
      const dateStr = targetDate.toISOString().split('T')[0];

      const objsForDay = objectives.filter(o => o.dueDate === dateStr);
      const completedObjs = objsForDay.filter(o => o.status === 'Completed').length;
      
      let score = 0;
      if (objsForDay.length > 0) {
        score = Math.round((completedObjs / objsForDay.length) * 100);
      } else {
        const isToday = dateStr === today.toISOString().split('T')[0];
        if (isToday) {
          score = dailyProgress;
        } else {
          score = 0;
        }
      }
      return { name: day, focus: score };
    });
  };

  const weeklyData = getWeeklyData();

  const completedObjectives = objectives.filter((o) => o.status === 'Completed').length;

  const priorityStyle = (priority: string) => {
    if (priority === 'High') return 'text-red-400 bg-red-500/10 border-red-500/20';
    if (priority === 'Medium') return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
    return 'text-violet-400 bg-violet-500/10 border-violet-500/20';
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 select-none">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-border text-brand-text-secondary flex items-center gap-1.5">
              🌤️ 72°F, Sunny
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-success/10 text-brand-success flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-success animate-pulse" /> {t('dash.active.workspace')}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 text-brand-text-primary capitalize leading-tight">
            {getGreeting() === 'Good Morning' ? t('dash.greeting.morning') : (getGreeting() === 'Good Afternoon' ? t('dash.greeting.afternoon') : t('dash.greeting.evening'))}<br />{displayName}
          </h1>
          <p className="text-sm text-brand-text-secondary mt-2 font-medium">
            {t('dash.subtitle')}
          </p>
          <p className="text-xs text-brand-text-secondary mt-1">
            {formattedDate}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className={`${cardClass} flex flex-col justify-between max-w-sm bg-gradient-to-br from-brand-primary/5 to-transparent border-brand-primary/20 shadow-lg shadow-brand-primary/5 rounded-[28px] space-y-4`}
        >
          <div className="flex items-center justify-between border-b border-brand-border pb-2">
            <span className="text-xs font-bold text-brand-text-secondary uppercase tracking-wider flex items-center gap-1.5">
              <Quote className="h-4 w-4 text-brand-primary animate-pulse" /> {t('dash.quote.title')}
            </span>
            <span className="text-[9px] bg-brand-primary/10 text-brand-primary px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
              {activeQuote.isVerified ? 'Verified' : 'General'}
            </span>
          </div>

          <div className={`text-center space-y-2 py-1 transition-all duration-200 ${isQuoteFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <p className="text-sm text-brand-text-primary leading-relaxed italic font-medium">
              &ldquo;{getTranslatedQuote(activeQuote)}&rdquo;
            </p>
            <p className="text-xs font-semibold text-brand-text-secondary">
              — {getTranslatedAuthor(activeQuote)}
            </p>
          </div>

          <div className="flex justify-between items-center text-[10px] text-brand-text-secondary pt-2 border-t border-brand-border/60">
            <div>
              <span className="font-bold block text-[8px] uppercase tracking-wider">{t('dash.quote.category')}</span>
              <span className="text-brand-text-primary font-medium">{getTranslatedCategory(activeQuote)}</span>
            </div>
            <div className="text-right">
              <span className="font-bold block text-[8px] uppercase tracking-wider">{t('dash.quote.lang')}</span>
              <span className="text-brand-text-primary font-medium flex items-center gap-1">
                <Globe className="h-3 w-3" />
                {activeQuote.translations[language] ? (language === 'te' ? 'తెలుగు' : language === 'hi' ? 'हिन्दी' : language === 'fr' ? 'Français' : 'English') : 'English (Fallback)'}
              </span>
            </div>
          </div>

          <div className="flex gap-2 pt-1">
            <button
              onClick={handleNextQuote}
              className="flex-1 flex items-center justify-center gap-1 py-1.5 bg-brand-surface-secondary border border-brand-border text-brand-text-primary rounded-xl text-[11px] font-bold hover:bg-brand-sidebar-hover transition-colors cursor-pointer"
            >
              <RefreshCw className="h-3 w-3" />
              <span>{t('dash.quote.next')}</span>
            </button>
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className={`p-1.5 border rounded-xl transition-all cursor-pointer ${isFavorited ? 'bg-red-500/10 border-red-500/30 text-red-500 border-red-500/40' : 'bg-brand-surface-secondary border-brand-border text-brand-text-secondary hover:text-brand-text-primary'}`}
            >
              <Heart className={`h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={handleShareQuote}
              className={`p-1.5 border rounded-xl transition-all cursor-pointer ${copiedSuccess ? 'bg-brand-success/10 border-brand-success/30 text-brand-success border-brand-success/40' : 'bg-brand-surface-secondary border-brand-border text-brand-text-secondary hover:text-brand-text-primary'}`}
            >
              {copiedSuccess ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Top stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Focus Score */}
        <motion.div
          whileHover={{ y: -2 }}
          className={`${cardClass} flex flex-col items-center justify-center relative`}
        >
          <div className="absolute top-4 left-4 flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-brand-primary" />
            <span className="text-xs font-bold text-brand-text-secondary uppercase tracking-wider">Focus</span>
          </div>
          
          <div className="relative flex items-center justify-center mt-6">
            <svg className="w-[120px] h-[120px] -rotate-90">
              <circle cx="60" cy="60" r="50" className="stroke-brand-border" strokeWidth="8" fill="transparent" />
              <motion.circle
                cx="60"
                cy="60"
                r="50"
                className="stroke-brand-primary"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={314.159}
                initial={{ strokeDashoffset: 314.159 }}
                animate={{ strokeDashoffset: 314.159 - (314.159 * focusScore) / 100 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-3xl font-black text-brand-text-primary">{focusScore}</span>
              <span className="text-[10px] font-bold text-brand-text-secondary uppercase tracking-widest mt-0.5">Score</span>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-2 mt-6 pt-4 border-t border-brand-border">
            <div className="text-center">
              <p className="text-[10px] text-brand-text-secondary font-bold uppercase tracking-wider mb-0.5">Tasks Done</p>
              <p className="text-sm font-black text-brand-text-primary">{completedObjectives}/{objectives.length}</p>
            </div>
            <div className="text-center border-l border-brand-border">
              <p className="text-[10px] text-brand-text-secondary font-bold uppercase tracking-wider mb-0.5">Total XP</p>
              <p className="text-sm font-black text-brand-success">{stats.xp} XP</p>
            </div>
          </div>
        </motion.div>

        {/* Study Timer Hero Card */}
        <motion.div
          whileHover={{ y: -2 }}
          className={`${cardClass} xl:col-span-2 border-brand-primary/20 bg-gradient-to-br from-white to-brand-primary/5 dark:from-brand-surface dark:to-brand-primary/5 flex flex-col justify-between`}
        >
          <div className="flex justify-between items-center text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> Study Session
            </span>
            <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary tracking-wider">
              {pomoMode === 'work' ? 'FOCUSING' : 'ON BREAK'}
            </span>
          </div>
          
          <div className="mt-4 flex flex-col items-center justify-center">
            {editingDuration ? (
              <input
                type="number"
                min="1"
                max="180"
                value={customDurationInput}
                onChange={(e) => setCustomDurationInput(e.target.value)}
                onBlur={handleCustomDurationSubmit}
                onKeyDown={(e) => e.key === 'Enter' && handleCustomDurationSubmit()}
                className="w-32 bg-transparent border-b-2 border-brand-primary/50 text-6xl sm:text-7xl font-black font-mono focus:outline-none text-brand-text-primary text-center mb-4"
                autoFocus
              />
            ) : (
              <span 
                onClick={() => !pomoActive && setEditingDuration(true)}
                className={`text-6xl sm:text-7xl font-black font-mono text-brand-text-primary tracking-tighter cursor-pointer hover:text-brand-primary transition-colors ${!pomoActive ? 'border-b-2 border-dashed border-brand-border pb-1' : 'pb-1'} mb-4`}
                title={!pomoActive ? "Click to set duration" : undefined}
              >
                {String(pomoMinutes).padStart(2, '0')}:{String(pomoSeconds).padStart(2, '0')}
              </span>
            )}

            <div className="h-2 w-full max-w-sm bg-brand-border rounded-full overflow-hidden mt-2">
              <motion.div
                animate={{
                  width: `${pomoActive ? ((pomoDuration - (pomoMinutes * 60 + pomoSeconds)) / pomoDuration) * 100 : 0}%`,
                }}
                className="h-full bg-gradient-to-r from-brand-primary to-brand-accent rounded-full"
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={togglePomo}
              className={`flex-1 max-w-[200px] flex items-center justify-center gap-2 py-3 px-6 rounded-2xl text-sm font-bold transition-all cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5 ${
                pomoActive
                  ? 'bg-brand-bg text-brand-text-primary border border-brand-border'
                  : 'bg-gradient-to-r from-brand-primary to-brand-accent text-brand-text-primary border border-transparent'
              }`}
            >
              {pomoActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current" />}
              {pomoActive ? 'Pause Session' : 'Start Focus'}
            </button>
            <button
              onClick={resetPomo}
              className="p-3 rounded-2xl bg-brand-bg border border-brand-border hover:bg-brand-border text-brand-text-secondary hover:text-brand-text-primary transition-all cursor-pointer shadow-sm hover:shadow-md"
              title="Reset Timer"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        {/* ⚡ Quick Actions */}
        <motion.div
          whileHover={{ y: -2 }}
          className={`${cardClass} flex flex-col`}
        >
          <div className="text-left select-none mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-warning flex items-center gap-1.5">
              <Sparkles className="h-4 w-4" /> Quick Actions
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-left flex-1">
            <button
              onClick={startStudy}
              className="p-3 rounded-2xl bg-brand-bg border border-brand-border hover:border-brand-primary/30 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group flex flex-col items-center justify-center gap-2"
            >
              <div className="h-10 w-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Target className="h-5 w-5" />
              </div>
              <span className="text-[11px] font-bold text-brand-text-primary group-hover:text-brand-primary">Study</span>
            </button>
            <button
              onClick={() => objectivesInputRef.current?.focus()}
              className="p-3 rounded-2xl bg-brand-bg border border-brand-border hover:border-brand-primary/30 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group flex flex-col items-center justify-center gap-2"
            >
              <div className="h-10 w-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Plus className="h-5 w-5" />
              </div>
              <span className="text-[11px] font-bold text-brand-text-primary group-hover:text-brand-primary">Add Task</span>
            </button>
            <button
              onClick={onCompleteAllObjectives}
              className="p-3 rounded-2xl bg-brand-bg border border-brand-border hover:border-brand-success/30 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group flex flex-col items-center justify-center gap-2"
            >
              <div className="h-10 w-10 rounded-full bg-brand-success/10 text-brand-success flex items-center justify-center group-hover:scale-110 transition-transform">
                <Check className="h-5 w-5" />
              </div>
              <span className="text-[11px] font-bold text-brand-text-primary group-hover:text-brand-success">Complete All</span>
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('tasks-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="p-3 rounded-2xl bg-brand-bg border border-brand-border hover:border-brand-primary/30 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group flex flex-col items-center justify-center gap-2"
            >
              <div className="h-10 w-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Target className="h-5 w-5" />
              </div>
              <span className="text-[11px] font-bold text-brand-text-primary group-hover:text-brand-primary">View List</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Chart + Today's Plan */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className={`${cardClass} lg:col-span-2 flex flex-col h-[400px]`}>
          <div className="flex items-center justify-between mb-4 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary flex items-center gap-1.5 select-none">
                <TrendingUp className="h-4 w-4" /> Weekly Progress
              </span>
            </div>
            <span className="text-[10px] font-bold text-brand-success bg-brand-success/10 px-2.5 py-1 rounded-full select-none">
              {weeklyData.length > 0 ? Math.round(weeklyData.reduce((acc, curr) => acc + curr.focus, 0) / weeklyData.length) : 0}% Avg Focus
            </span>
          </div>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="focusGradPremium" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-brand-border)" opacity={0.6} />
                <XAxis dataKey="name" stroke="var(--color-brand-text-secondary)" fontSize={11} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="var(--color-brand-text-secondary)" fontSize={11} tickLine={false} axisLine={false} domain={[0, 100]} dx={-10} />
                <Tooltip
                  contentStyle={{
                    background: 'var(--color-brand-card)',
                    border: '1px solid var(--color-brand-border)',
                    borderRadius: '16px',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'var(--color-brand-text-primary)',
                    boxShadow: '0 10px 40px rgba(15,23,42,0.1)',
                  }}
                  itemStyle={{ color: '#6366f1' }}
                  formatter={(value) => [`${value}%`, 'Focus']}
                />
                <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--color-brand-text-secondary)' }} />
                <Area
                  name="Focus Score"
                  type="monotone"
                  dataKey="focus"
                  stroke="#6366f1"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#focusGradPremium)"
                  activeDot={{ r: 6, strokeWidth: 0, fill: '#6366f1' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Today's Goals */}
        <div id="tasks-section" className={`${cardClass} flex flex-col h-[400px] relative`}>
          <div className="flex items-center justify-between mb-4 text-left select-none">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary flex items-center gap-1.5">
              <Target className="h-4 w-4" /> Today's Goals
            </span>
            <span className="text-[10px] font-bold text-brand-text-secondary bg-brand-border px-2.5 py-1 rounded-full">
              {completedObjectives} / {objectives.length} Done
            </span>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar text-left pb-16">
            <AnimatePresence initial={false}>
              {objectives.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-xs text-brand-text-secondary font-medium">
                  <div className="h-12 w-12 rounded-full bg-brand-border flex items-center justify-center mb-3">
                    <Target className="h-5 w-5 text-brand-text-secondary" />
                  </div>
                  <p>No tasks yet. Create one!</p>
                </div>
              ) : (
                objectives.map((obj) => (
                  <motion.div
                    key={obj.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className={`flex items-start justify-between p-3 rounded-2xl border transition-all group ${
                      obj.status === 'Completed' 
                        ? 'bg-brand-success/5 border-brand-success/20 shadow-sm' 
                        : 'bg-brand-bg border-brand-border hover:border-brand-primary/30 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <button
                        onClick={() => onToggleObjective(obj.id)}
                        className={`mt-0.5 h-5 w-5 rounded-lg border-2 flex items-center justify-center transition-all cursor-pointer flex-shrink-0 ${
                          obj.status === 'Completed'
                            ? 'bg-brand-success border-brand-success text-brand-text-primary shadow-sm'
                            : 'border-brand-text-secondary/30 hover:border-brand-primary bg-transparent text-transparent'
                        }`}
                      >
                        {obj.status === 'Completed' && <Check className="h-3 w-3 stroke-[3]" />}
                      </button>
                      <div className="flex flex-col gap-1">
                        <span
                          className={`text-sm truncate font-bold leading-tight ${
                            obj.status === 'Completed' ? 'text-brand-text-secondary line-through' : 'text-brand-text-primary'
                          }`}
                        >
                          {obj.title}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className={`text-[9px] px-2 py-0.5 rounded-md font-extrabold uppercase tracking-wider border ${priorityStyle(obj.priority)}`}>
                            {obj.priority}
                          </span>
                          <span className="text-[10px] font-semibold text-brand-text-secondary flex items-center gap-0.5">
                            <Clock className="h-3 w-3" /> 10:00 AM
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center flex-shrink-0 pt-1">
                      <button
                        onClick={() => onDeleteObjective(obj.id)}
                        className="p-1.5 rounded-lg text-brand-text-secondary hover:text-brand-danger hover:bg-brand-danger/10 opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {showTaskForm && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-4 left-4 right-4 bg-brand-card p-3 rounded-2xl shadow-[0_10px_30px_rgba(15,23,42,0.15)] border border-brand-border z-20"
              >
                <form onSubmit={(e) => { handleFormSubmit(e); setShowTaskForm(false); }} className="flex flex-col gap-2">
                  <input
                    ref={objectivesInputRef}
                    type="text"
                    required
                    placeholder="What needs to be done?"
                    value={newObjectiveTitle}
                    onChange={(e) => setNewObjectiveTitle(e.target.value)}
                    className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 text-xs text-brand-text-primary placeholder-brand-text-secondary focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all font-semibold"
                    autoFocus
                  />
                  <div className="flex justify-between items-center">
                    <select
                      value={objectivePriority}
                      onChange={(e: any) => setObjectivePriority(e.target.value)}
                      className="text-xs bg-brand-bg border border-brand-border rounded-lg px-2 py-1 text-brand-text-primary font-bold outline-none cursor-pointer"
                    >
                      <option value="High">High Priority</option>
                      <option value="Medium">Medium Priority</option>
                      <option value="Low">Low Priority</option>
                    </select>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setShowTaskForm(false)}
                        className="px-3 py-1.5 rounded-xl text-brand-text-secondary text-xs font-bold hover:bg-brand-bg cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-3 py-1.5 rounded-xl bg-brand-primary hover:bg-brand-accent text-brand-text-primary text-xs font-bold transition-colors cursor-pointer shadow-sm"
                      >
                        Add Task
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {!showTaskForm && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowTaskForm(true)}
              className="absolute bottom-5 right-5 h-12 w-12 bg-brand-primary text-brand-text-primary rounded-2xl shadow-lg shadow-brand-primary/30 flex items-center justify-center cursor-pointer hover:bg-brand-accent transition-colors z-10"
            >
              <Plus className="h-6 w-6" />
            </motion.button>
          )}
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Habits */}
        <div className={`${cardClass} p-5 lg:col-span-4 flex flex-col`}>
          <div className="flex items-center justify-between mb-4 text-left select-none">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 flex items-center gap-1.5">
              <Flame className="h-3.5 w-3.5" /> Habits
            </span>
          </div>

          {habitsError && (
            <div className="mb-2 p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-[10px] text-red-400 text-left flex items-center justify-between">
              <span>{habitsError}</span>
              {onRetryHabits && (
                <button
                  type="button"
                  onClick={onRetryHabits}
                  className="px-2 py-0.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded cursor-pointer transition-colors border-none text-[9px] font-bold"
                >
                  Retry
                </button>
              )}
            </div>
          )}

          <div className="flex-1 space-y-3 text-left">
            {habitsLoading ? (
              <div className="text-xs text-brand-text-secondary text-center py-6">Loading habits...</div>
            ) : habits.length === 0 ? (
              <div className="text-center py-4 select-none">
                <p className="text-[11px] text-brand-text-secondary mb-3">No habits added</p>
                <div className="space-y-3">
                  <button
                    onClick={async () => {
                      try {
                        await onAddHabit("2 Hours Deep Work");
                        await onAddHabit("Hydrate & Meditate");
                        await onAddHabit("Core Movement Vector");
                      } catch {}
                    }}
                    className="w-full py-2 px-3 bg-brand-primary/10 hover:bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-[10px] font-bold rounded-xl transition-all cursor-pointer"
                  >
                    ⚡ Seed Starter Rituals
                  </button>
                  
                  <form
                    onSubmit={handleHabitFormSubmit}
                    className="flex gap-2"
                  >
                    <input
                      type="text"
                      placeholder="Add a habit..."
                      value={newHabitName}
                      onChange={(e) => setNewHabitName(e.target.value)}
                      className="flex-1 bg-brand-bg border border-brand-border rounded-xl px-2.5 py-1.5 text-xs text-brand-text-primary placeholder-brand-text-muted focus:outline-none focus:border-emerald-500/50"
                    />
                    <button type="submit" className="p-2 bg-emerald-500 hover:bg-emerald-600 text-brand-text-primary rounded-xl cursor-pointer transition-colors">
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {habits.slice(0, 4).map((habit) => (
                  <div key={habit._id} className="space-y-1.5 text-left">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => onToggleHabit(habit._id)}
                        className={`text-xs font-semibold transition-all cursor-pointer text-left ${
                          habit.completed ? 'text-brand-text-secondary line-through' : 'text-brand-text-primary hover:text-brand-text-primary'
                        }`}
                      >
                        {habit.name}
                      </button>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-bold text-emerald-400">
                          {habit.streak || 4} day streak
                        </span>
                        <button
                          onClick={() => onDeleteHabit(habit._id)}
                          className="text-brand-text-secondary hover:text-red-400 transition-colors cursor-pointer"
                          title="Remove habit"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-1 select-none">
                      {WEEK_DAYS.map((day, i) => {
                        const filled = habit.completed ? i <= 4 : i < (habit.streak % 7);
                        return (
                          <div key={day} className="flex flex-col items-center gap-0.5">
                            <div
                              className={`w-3 h-3 rounded-full ${
                                filled ? 'bg-emerald-400 shadow-sm shadow-emerald-400/20' : 'bg-brand-surface-secondary border border-brand-border'
                              }`}
                            />
                            <span className="text-[8px] text-brand-text-secondary font-bold">{day.charAt(0)}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}

                <form
                  onSubmit={handleHabitFormSubmit}
                  className="flex gap-2 pt-2 border-t border-brand-border"
                >
                  <input
                    type="text"
                    placeholder="Add a habit..."
                    value={newHabitName}
                    onChange={(e) => setNewHabitName(e.target.value)}
                    className="flex-1 bg-brand-bg border border-brand-border rounded-xl px-2.5 py-1.5 text-xs text-brand-text-primary placeholder-brand-text-muted focus:outline-none focus:border-emerald-500/50"
                  />
                  <button type="submit" className="p-2 bg-emerald-500 hover:bg-emerald-600 text-brand-text-primary rounded-xl cursor-pointer transition-colors">
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Study Consistency Section */}
        <div className={`${cardClass} p-6 lg:col-span-8 flex flex-col justify-between`}>
          <div>
            {/* Header info */}
            <div className="text-left select-none mb-5">
              <h3 className="text-lg font-bold text-brand-text-primary flex items-center gap-2">
                🔥 Study Consistency
              </h3>
              <p className="text-xs text-brand-text-secondary mt-1 font-medium">
                Track your daily progress and maintain your learning streak.
              </p>
            </div>

            {/* Inner responsive grid containing 4 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {/* Card 1 - Current Streak */}
              <div className="bg-brand-surface-secondary border border-brand-border p-4.5 rounded-[18px] flex items-center gap-4 transition-all hover:bg-brand-surface-secondary">
                <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-xl shadow-inner select-none">
                  🔥
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-extrabold uppercase text-brand-text-secondary tracking-wider select-none">Current Streak</span>
                  <div className="text-lg font-black text-brand-text-primary mt-0.5">
                    {maxStreak} Days
                  </div>
                  <div className="text-[9px] font-bold text-orange-400 mt-0.5 select-none">Keep the streak alive!</div>
                </div>
              </div>

              {/* Card 2 - Today's Progress */}
              <div className="bg-brand-surface-secondary border border-brand-border p-4.5 rounded-[18px] flex items-center justify-between gap-3 transition-all hover:bg-brand-surface-secondary">
                <div className="text-left">
                  <span className="text-[10px] font-extrabold uppercase text-brand-text-secondary tracking-wider select-none">Today's Progress</span>
                  <div className="text-[9px] font-bold text-brand-text-secondary mt-1 select-none">
                    {habits.filter(h => h.completed).length} / {habits.length} Habits Completed
                  </div>
                </div>
                <div className="relative flex items-center justify-center h-14 w-14 flex-shrink-0">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="28" cy="28" r="22" className="stroke-white/[0.04]" strokeWidth="4.5" fill="transparent" />
                    <motion.circle
                      cx="28"
                      cy="28"
                      r="22"
                      className="stroke-[#7c5cff]"
                      strokeWidth="4.5"
                      fill="transparent"
                      strokeDasharray={138.2}
                      initial={{ strokeDashoffset: 138.2 }}
                      animate={{
                        strokeDashoffset: 138.2 - (138.2 * (habits.length ? Math.round((habits.filter(h => h.completed).length / habits.length) * 100) : 0)) / 100
                      }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute text-[10px] font-black text-brand-text-primary select-none">
                    {habits.length ? Math.round((habits.filter(h => h.completed).length / habits.length) * 100) : 0}%
                  </span>
                </div>
              </div>

              {/* Card 3 - This Week */}
              <div className="bg-brand-surface-secondary border border-brand-border p-4.5 rounded-[18px] flex flex-col justify-center transition-all hover:bg-brand-surface-secondary">
                <span className="text-[10px] font-extrabold uppercase text-brand-text-secondary tracking-wider text-left select-none mb-1.5">This Week</span>
                <div className="flex justify-between items-center gap-1 w-full">
                  {(() => {
                    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                    const todayIdx = (time.getDay() + 6) % 7; // Monday is 0, Sunday is 6
                    
                    return days.map((dayName, idx) => {
                      let status: 'completed' | 'missed' | 'upcoming' = 'upcoming';
                      if (idx < todayIdx) {
                        status = maxStreak > 0 ? 'completed' : 'missed';
                      } else if (idx === todayIdx) {
                        status = dailyProgress >= 80 ? 'completed' : 'upcoming';
                      }
                      
                      const isToday = dayName === ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][time.getDay()];
                      return (
                        <div 
                          key={dayName} 
                          className={`flex-1 flex flex-col items-center py-1 px-0.5 rounded-lg border transition-all ${
                            isToday 
                              ? 'bg-brand-primary/10 border-brand-primary shadow-sm shadow-[#7c5cff]/20 scale-105' 
                              : 'bg-brand-surface-secondary border-brand-border'
                          }`}
                        >
                          <span className="text-[8px] font-extrabold text-brand-text-secondary select-none">{dayName.charAt(0)}</span>
                          {status === 'completed' && <span className="text-[10px] mt-0.5 select-none" title="Completed">✅</span>}
                          {status === 'missed' && <span className="text-[10px] mt-0.5 select-none" title="Missed">❌</span>}
                          {status === 'upcoming' && <span className="text-[10px] mt-0.5 select-none" title="Upcoming">⏳</span>}
                        </div>
                      );
                    });
                  })()}
                </div>
              </div>

              {/* Card 4 - Statistics */}
              <div className="bg-brand-surface-secondary border border-brand-border p-4.5 rounded-[18px] flex flex-col justify-center transition-all hover:bg-brand-surface-secondary">
                <div className="grid grid-cols-2 gap-2 text-left">
                  <div className="bg-brand-surface-secondary border border-brand-border p-1.5 rounded-lg">
                    <span className="text-[8px] font-extrabold text-brand-text-secondary uppercase tracking-wide select-none">📚 Hours</span>
                    <div className="text-[11px] font-extrabold text-brand-text-primary mt-0.5">{(focusSeconds / 3600).toFixed(1)} hrs</div>
                  </div>
                  <div className="bg-brand-surface-secondary border border-brand-border p-1.5 rounded-lg">
                    <span className="text-[8px] font-extrabold text-brand-text-secondary uppercase tracking-wide select-none">🎯 Goals</span>
                    <div className="text-[11px] font-extrabold text-brand-text-primary mt-0.5">{completedObjectives}</div>
                  </div>
                  <div className="bg-brand-surface-secondary border border-brand-border p-1.5 rounded-lg">
                    <span className="text-[8px] font-extrabold text-brand-text-secondary uppercase tracking-wide select-none">⭐ Best</span>
                    <div className="text-[11px] font-extrabold text-brand-text-primary mt-0.5">{maxStreak} Days</div>
                  </div>
                  <div className="bg-brand-surface-secondary border border-brand-border p-1.5 rounded-lg">
                    <span className="text-[8px] font-extrabold text-brand-text-secondary uppercase tracking-wide select-none">🏆 Score</span>
                    <div className="text-[11px] font-extrabold text-brand-primary mt-0.5">{focusScore}%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Achievements */}
          <div className="mt-6 pt-4.5 border-t border-brand-border flex flex-wrap gap-4 items-center justify-between select-none">
            <div className="text-[9px] font-extrabold text-brand-text-secondary uppercase tracking-wider text-left">Achievements</div>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-brand-primary/10 border border-brand-primary/30 text-[10px] font-bold text-brand-text-primary transition-all hover:bg-brand-primary/10">
                <span className="text-xs">🏅</span> Weekly Badge
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[10px] font-bold text-brand-text-primary transition-all hover:bg-orange-500/15">
                <span className="text-xs">🔥</span> Longest Streak
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-brand-text-primary transition-all hover:bg-emerald-500/15">
                <span className="text-xs">📈</span> Improvement
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-brand-text-primary transition-all hover:bg-amber-500/15">
                <span className="text-xs">⭐</span> XP Earned
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tip + Streak row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Daily Tip */}
        <div className={`${cardClass} p-5 border-amber-500/10 flex flex-col justify-between h-36`}>
          <div className="flex items-center gap-2 mb-3 text-left select-none">
            <div className="h-7 w-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Daily Tip</span>
          </div>
          <p className="text-xs text-brand-text-secondary leading-relaxed font-semibold italic text-left">
            &ldquo;{dailyTip}&rdquo;
          </p>
        </div>

        {/* Streak */}
        <div className={`${cardClass} p-5 border-orange-500/10 flex items-center justify-between text-left h-36 relative overflow-hidden select-none`}>
          <div>
            <p className="text-xs font-bold text-orange-400 uppercase tracking-wider">You&apos;re on fire! 🔥</p>
            <p className="text-3xl font-extrabold text-brand-text-primary mt-1.5">{maxStreak} Days</p>
            <p className="text-xs text-brand-text-secondary font-semibold mt-0.5">Streak</p>
          </div>
          <div className="w-16 h-16 rounded-full border-4 border-orange-500/20 bg-orange-500/5 flex items-center justify-center">
            <Flame className="h-6 w-6 text-orange-400" />
          </div>
        </div>
      </div>
    </div>
  );
};
