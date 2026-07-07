import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Play,
  Pause,
  RotateCcw,
  Plus,
  Check,
  Trash2,
  Zap,
  Flame,
  Award,
  Target,
  TrendingUp,
  Clock,
  Quote,
  Star,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
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
}

const MOTIVATIONAL_QUOTES = [
  'Your energy is your currency. Invest it wisely today.',
  'Focus is the ultimate leverage in an age of distraction.',
  'Great things are built in quiet, uninterrupted increments.',
  'The secret of your future is hidden in your daily routine.',
  'Consistency beats motivation.',
];

const DAILY_TIPS = [
  'Discipline is choosing between what you want now and what you want most.',
  'Small daily improvements lead to stunning long-term results.',
  'Done is better than perfect when momentum matters.',
];

const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const cardClass = 'bg-white rounded-2xl border border-zinc-100 shadow-sm shadow-zinc-200/50';

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
}) => {
  const { user } = useAuth();
  const objectivesInputRef = useRef<HTMLInputElement>(null);
  const [time, setTime] = useState(new Date());

  const [quote] = useState(
    () => MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)]
  );
  const [dailyTip] = useState(
    () => DAILY_TIPS[Math.floor(Math.random() * DAILY_TIPS.length)]
  );

  const displayName = user?.name?.split(' ')[0]?.toLowerCase() || 'nani';

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = time.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

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

  const maxStreak = habits.length > 0 ? Math.max(...habits.map((h) => h.streak), 7) : 7;

  const weeklyData = [
    { name: 'Mon', focus: 65 },
    { name: 'Tue', focus: 72 },
    { name: 'Wed', focus: 85 },
    { name: 'Thu', focus: 78 },
    { name: 'Fri', focus: 92 },
    { name: 'Sat', focus: 80 },
    { name: 'Sun', focus: focusScore },
  ];

  const completedObjectives = objectives.filter((o) => o.status === 'Completed').length;

  const priorityStyle = (priority: string) => {
    if (priority === 'High') return 'text-red-500 bg-red-50 border-red-100';
    if (priority === 'Medium') return 'text-amber-600 bg-amber-50 border-amber-100';
    return 'text-violet-600 bg-violet-50 border-violet-100';
  };

  return (
    <div className="space-y-6 pb-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 capitalize">
            {getGreeting()}, {displayName}! 👋
          </h1>
          <p className="text-sm text-zinc-500 mt-1.5 font-medium">
            {formattedDate} · {formattedTime}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className={`${cardClass} p-4 flex items-start gap-3 max-w-sm`}
        >
          <div className="h-8 w-8 rounded-lg bg-[#7c5cff]/10 flex items-center justify-center flex-shrink-0">
            <Quote className="h-4 w-4 text-[#7c5cff]" />
          </div>
          <p className="text-xs text-zinc-500 leading-relaxed italic font-medium">
            &ldquo;{quote}&rdquo;
          </p>
        </motion.div>
      </div>

      {/* Top stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Focus Score */}
        <motion.div
          whileHover={{ y: -2 }}
          className={`${cardClass} p-5 relative overflow-hidden`}
        >
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold text-[#7c5cff] flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5" /> Focus Score
            </span>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#7c5cff]/10 text-[#7c5cff]">
              Optimal
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="text-4xl font-black text-zinc-900">{focusScore}</span>
            <span className="text-sm text-zinc-400 font-medium">/ 100</span>
          </div>
          <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">
            Great job! You&apos;re building amazing consistency.
          </p>
          <div className="absolute right-3 bottom-3 text-3xl opacity-80">🏆</div>
        </motion.div>

        {/* Daily Yield */}
        <motion.div
          whileHover={{ y: -2 }}
          className={`${cardClass} p-5 flex items-center justify-between`}
        >
          <div>
            <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5" /> Daily Yield
            </span>
            <div className="mt-3">
              <span className="text-3xl font-black text-zinc-900">
                {completedItems}/{totalItems || 3}
              </span>
              <p className="text-[11px] text-zinc-400 mt-1 font-medium">Completed Matrix</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <svg className="w-[72px] h-[72px] -rotate-90">
              <circle cx="36" cy="36" r="30" className="stroke-zinc-100" strokeWidth="6" fill="transparent" />
              <motion.circle
                cx="36"
                cy="36"
                r="30"
                className="stroke-emerald-500"
                strokeWidth="6"
                fill="transparent"
                strokeDasharray={188.5}
                initial={{ strokeDashoffset: 188.5 }}
                animate={{ strokeDashoffset: 188.5 - (188.5 * dailyProgress) / 100 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-xs font-bold text-zinc-700">{dailyProgress}%</span>
          </div>
        </motion.div>

        {/* Focus Engine */}
        <motion.div
          whileHover={{ y: -2 }}
          className={`${cardClass} p-5 border-blue-100 bg-gradient-to-br from-white to-blue-50/30`}
        >
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-blue-600 flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> Focus Engine
            </span>
            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-600 tracking-wider">
              LOCK IN
            </span>
          </div>
          <div className="mt-2 text-3xl font-black font-mono text-zinc-900 tracking-tight">
            {String(pomoMinutes).padStart(2, '0')}:{String(pomoSeconds).padStart(2, '0')}
          </div>
          <div className="h-1 w-full bg-zinc-100 rounded-full overflow-hidden mt-2">
            <motion.div
              animate={{
                width: `${pomoActive ? ((pomoDuration - (pomoMinutes * 60 + pomoSeconds)) / pomoDuration) * 100 : 0}%`,
              }}
              className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
              transition={{ ease: 'linear' }}
            />
          </div>
          <div className="flex gap-2 mt-3">
            <button
              onClick={togglePomo}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                pomoActive
                  ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {pomoActive ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3 fill-current" />}
              {pomoActive ? 'Pause' : 'Start Focus'}
            </button>
            <button
              onClick={resetPomo}
              className="p-1.5 rounded-lg bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 text-zinc-500 transition-all cursor-pointer"
              title="Reset Timer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          whileHover={{ y: -2 }}
          className={`${cardClass} p-5 border-orange-100 bg-gradient-to-br from-white to-orange-50/40`}
        >
          <span className="text-xs font-semibold text-orange-500 flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Quick Actions
          </span>
          <div className="mt-3 space-y-2">
            <button
              onClick={startStudy}
              className="w-full text-left px-3 py-2.5 rounded-xl bg-white border border-orange-100 hover:border-orange-200 hover:shadow-sm text-xs font-semibold text-zinc-700 transition-all cursor-pointer"
            >
              Trigger Focus Interval
            </button>
            <button
              onClick={onCompleteAllObjectives}
              className="w-full text-left px-3 py-2.5 rounded-xl bg-white border border-orange-100 hover:border-orange-200 hover:shadow-sm text-xs font-semibold text-zinc-700 transition-all cursor-pointer"
            >
              Clear Daily Objectives
            </button>
          </div>
        </motion.div>
      </div>

      {/* Chart + Today's Plan */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Weekly Performance */}
        <div className={`${cardClass} p-5 lg:col-span-2 flex flex-col h-[340px]`}>
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-xs font-semibold text-[#7c5cff] flex items-center gap-1.5">
                <TrendingUp className="h-3.5 w-3.5" /> Weekly Performance
              </span>
            </div>
            <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100">
              +12% Growth
            </span>
          </div>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="focusGradLight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7c5cff" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#7c5cff" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#a1a1aa" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#a1a1aa" fontSize={11} tickLine={false} axisLine={false} domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    background: '#ffffff',
                    border: '1px solid #e4e4e7',
                    borderRadius: '12px',
                    fontSize: '11px',
                    color: '#18181b',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  }}
                  formatter={(value) => [`Focus: ${value}`, '']}
                />
                <Area
                  type="monotone"
                  dataKey="focus"
                  stroke="#7c5cff"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#focusGradLight)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Today's Plan */}
        <div id="tasks-section" className={`${cardClass} p-5 flex flex-col h-[340px]`}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-[#7c5cff] flex items-center gap-1.5">
              <Target className="h-3.5 w-3.5" /> Today&apos;s Plan
            </span>
            <span className="text-[10px] font-semibold text-zinc-400 bg-zinc-50 px-2 py-1 rounded-lg border border-zinc-100">
              {completedObjectives} / {objectives.length} completed
            </span>
          </div>

          <div className="flex-1 overflow-y-auto pr-1 space-y-2 custom-scrollbar">
            <AnimatePresence initial={false}>
              {objectives.length === 0 ? (
                <div className="h-full flex items-center justify-center text-xs text-zinc-400 italic">
                  No tasks yet. Add one below!
                </div>
              ) : (
                objectives.map((obj) => (
                  <motion.div
                    key={obj.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-50/80 border border-zinc-100 hover:border-zinc-200 transition-all group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <button
                        onClick={() => onToggleObjective(obj.id)}
                        className={`h-4 w-4 rounded-md border flex items-center justify-center transition-all cursor-pointer flex-shrink-0 ${
                          obj.status === 'Completed'
                            ? 'bg-emerald-500 border-emerald-500 text-white'
                            : 'border-zinc-300 hover:border-[#7c5cff] bg-white'
                        }`}
                      >
                        {obj.status === 'Completed' && <Check className="h-2.5 w-2.5 stroke-[3]" />}
                      </button>
                      <span
                        className={`text-xs truncate font-medium ${
                          obj.status === 'Completed' ? 'text-zinc-400 line-through' : 'text-zinc-700'
                        }`}
                      >
                        {obj.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className={`text-[9px] px-1.5 py-0.5 rounded-md font-semibold border ${priorityStyle(obj.priority)}`}>
                        {obj.priority}
                      </span>
                      <button
                        onClick={() => onDeleteObjective(obj.id)}
                        className="text-zinc-300 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>

          <form onSubmit={handleFormSubmit} className="mt-3 flex gap-2 pt-3 border-t border-zinc-100">
            <input
              ref={objectivesInputRef}
              type="text"
              required
              placeholder="Add New Task"
              value={newObjectiveTitle}
              onChange={(e) => setNewObjectiveTitle(e.target.value)}
              className="flex-1 bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#7c5cff]/50 focus:ring-1 focus:ring-[#7c5cff]/20 transition-all"
            />
            <button
              type="submit"
              className="px-3 py-2 rounded-xl bg-[#7c5cff] hover:bg-[#6d4df5] text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Add
            </button>
          </form>
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-4">
        {/* Habit Matrix */}
        <div className={`${cardClass} p-5 xl:col-span-3 flex flex-col`}>
          <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5 mb-4">
            <Flame className="h-3.5 w-3.5" /> Habit Matrix
          </span>

          {habitsError && (
            <div className="mb-2 p-2 rounded-lg bg-red-50 border border-red-100 text-[10px] text-red-500">
              {habitsError}
            </div>
          )}

          <div className="flex-1 space-y-3">
            {habitsLoading ? (
              <div className="text-xs text-zinc-400 text-center py-6">Loading habits...</div>
            ) : habits.length === 0 ? (
              <div className="text-center py-4">
                <p className="text-[11px] text-zinc-400 mb-3">No habits tracked yet.</p>
                <form onSubmit={handleHabitFormSubmit} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add a habit..."
                    value={newHabitName}
                    onChange={(e) => setNewHabitName(e.target.value)}
                    className="flex-1 bg-zinc-50 border border-zinc-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:border-emerald-400"
                  />
                  <button type="submit" className="p-1.5 bg-emerald-500 text-white rounded-lg cursor-pointer">
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </form>
              </div>
            ) : (
              habits.slice(0, 4).map((habit) => (
                <div key={habit._id} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => onToggleHabit(habit._id)}
                      className={`text-xs font-medium transition-all cursor-pointer text-left ${
                        habit.completed ? 'text-zinc-400 line-through' : 'text-zinc-700'
                      }`}
                    >
                      {habit.name}
                    </button>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-semibold text-emerald-600">
                        {habit.streak || 4} day streak
                      </span>
                      <button
                        onClick={() => onDeleteHabit(habit._id)}
                        className="text-zinc-300 hover:text-red-400 transition-colors cursor-pointer"
                        title="Remove habit"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {WEEK_DAYS.map((day, i) => {
                      const filled = habit.completed ? i <= 4 : i < (habit.streak % 7);
                      return (
                        <div key={day} className="flex flex-col items-center gap-0.5">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              filled ? 'bg-emerald-400' : 'bg-zinc-100 border border-zinc-200'
                            }`}
                          />
                          <span className="text-[8px] text-zinc-400">{day.charAt(0)}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Consistency Grid */}
        <div className={`${cardClass} p-5 xl:col-span-5 flex flex-col`}>
          <span className="text-xs font-semibold text-[#7c5cff] flex items-center gap-1.5 mb-3">
            Consistency Grid
          </span>
          <div className="flex-1 overflow-x-auto custom-scrollbar">
            <div className="grid grid-flow-col gap-1 auto-cols-max">
              {Array.from({ length: 20 }).map((_, colIndex) => (
                <div key={colIndex} className="grid grid-rows-7 gap-1">
                  {Array.from({ length: 7 }).map((_, rowIndex) => {
                    const density = (colIndex * 3 + rowIndex * 2) % 5;
                    const bgColors = [
                      'bg-zinc-100',
                      'bg-[#7c5cff]/15',
                      'bg-[#7c5cff]/30',
                      'bg-[#7c5cff]/55',
                      'bg-[#7c5cff]',
                    ];
                    return (
                      <div
                        key={rowIndex}
                        className={`w-3 h-3 rounded-sm ${bgColors[density]} transition-transform hover:scale-125`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end items-center gap-1 mt-3 text-[9px] text-zinc-400">
            <span>Less</span>
            {['bg-zinc-100', 'bg-[#7c5cff]/15', 'bg-[#7c5cff]/30', 'bg-[#7c5cff]/55', 'bg-[#7c5cff]'].map((c) => (
              <div key={c} className={`w-2.5 h-2.5 rounded-sm ${c}`} />
            ))}
            <span>More</span>
          </div>
        </div>

        {/* Daily Tip */}
        <div className={`${cardClass} p-5 xl:col-span-2 border-amber-100 bg-gradient-to-br from-amber-50/60 to-white flex flex-col justify-between`}>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-7 w-7 rounded-lg bg-amber-100 flex items-center justify-center">
              <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-400" />
            </div>
            <span className="text-xs font-semibold text-amber-600">Daily Tip</span>
          </div>
          <p className="text-xs text-zinc-600 leading-relaxed font-medium italic">
            &ldquo;{dailyTip}&rdquo;
          </p>
        </div>

        {/* Streak */}
        <div className={`${cardClass} p-5 xl:col-span-2 border-orange-100 bg-gradient-to-br from-orange-50/50 to-white flex flex-col items-center justify-center text-center relative overflow-hidden`}>
          <div className="absolute -right-2 -bottom-2 text-5xl opacity-20">🏆</div>
          <p className="text-xs font-semibold text-orange-500 mb-1">You&apos;re on fire! 🔥</p>
          <p className="text-2xl font-black text-zinc-900">{maxStreak} Days</p>
          <p className="text-xs text-zinc-400 font-medium mt-0.5">Streak</p>
          <div className="mt-3 w-16 h-16 rounded-full border-4 border-orange-200 flex items-center justify-center">
            <Flame className="h-6 w-6 text-orange-400" />
          </div>
        </div>
      </div>
    </div>
  );
};
