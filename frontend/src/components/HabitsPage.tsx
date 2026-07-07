import React, { useState } from 'react';
import { 
  Plus, 
  Trash2, 
  Check, 
  Flame, 
  Activity, 
  Sparkles,
  TrendingUp,
  Calendar,
  Zap,
  BarChart3,
  CalendarDays
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area
} from 'recharts';

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
}

export const HabitsPage: React.FC<HabitsPageProps> = ({
  habits,
  habitsLoading,
  habitsError,
  onAddHabit,
  onToggleHabit,
  onDeleteHabit,
}) => {
  const [newHabitName, setNewHabitName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHabitName.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await onAddHabit(newHabitName.trim());
      setNewHabitName('');
    } catch (err) {
      // Handled by parent error boundary/prop
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate Streaks
  const activeHabitsCount = habits.length;
  const completedToday = habits.filter(h => h.completed).length;
  
  const maxStreak = activeHabitsCount > 0 
    ? Math.max(...habits.map(h => h.streak)) 
    : 0;
  
  const avgStreak = activeHabitsCount > 0 
    ? Math.round(habits.reduce((acc, h) => acc + h.streak, 0) / activeHabitsCount) 
    : 0;

  // Mock analytics based on streaks and current completes
  const weeklyData = [
    { name: 'Mon', count: Math.max(1, completedToday + 1) },
    { name: 'Tue', count: Math.max(0, completedToday - 1) },
    { name: 'Wed', count: Math.max(1, completedToday) },
    { name: 'Thu', count: Math.max(2, completedToday + 2) },
    { name: 'Fri', count: Math.max(1, completedToday) },
    { name: 'Sat', count: Math.max(0, completedToday - 1) },
    { name: 'Sun', count: completedToday },
  ];

  const monthlyData = Array.from({ length: 30 }).map((_, i) => {
    const day = i + 1;
    // Generate simulated yield peaks
    const baseValue = Math.min(activeHabitsCount, 3);
    const wave = Math.sin(day / 2) * 1.5;
    const count = Math.max(0, Math.min(activeHabitsCount, Math.round(baseValue + wave)));
    
    return {
      day: `D${day}`,
      completions: count
    };
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#22c55e] uppercase">
            <Activity className="h-3.5 w-3.5" /> Habit Tracker
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mt-1 bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Your Habits
          </h1>
          <p className="text-sm text-[#a1a1aa] mt-2 font-medium">
            Track your daily habits, build streaks, and stay consistent.
          </p>
        </div>

        {/* Dynamic overall progress */}
        <div className="glass-card p-4 bg-[#111113]/40 border-white/[0.04] flex items-center gap-4 min-w-[240px]">
          <div className="flex-1 space-y-1.5 text-left">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-[#a1a1aa]">Habits Completed</span>
              <span className="text-white font-bold">
                {activeHabitsCount > 0 ? Math.round((completedToday / activeHabitsCount) * 100) : 0}%
              </span>
            </div>
            <div className="h-1.5 w-full bg-white/[0.04] rounded-full overflow-hidden border border-white/[0.02]">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${activeHabitsCount > 0 ? (completedToday / activeHabitsCount) * 100 : 0}%` }}
                transition={{ duration: 0.8 }}
                className="h-full bg-gradient-to-r from-[#22c55e] to-[#7c5cff]"
              />
            </div>
          </div>
          <div className="h-9 w-9 rounded-xl bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center font-bold text-xs text-[#22c55e]">
            {completedToday}/{activeHabitsCount}
          </div>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div whileHover={{ y: -3 }} className="glass-card p-6 flex flex-col justify-between h-[140px] relative overflow-hidden group">
          <div className="flex justify-between items-start z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#22c55e] flex items-center gap-1.5">
              <Flame className="h-3.5 w-3.5 fill-[#22c55e]/20" /> Longest Streak
            </span>
          </div>
          <div className="mt-4 z-10 flex items-baseline gap-2">
            <span className="text-4xl font-black tracking-tight font-mono">{maxStreak}</span>
            <span className="text-xs text-[#a1a1aa] font-semibold">DAYS ACTIVE</span>
          </div>
          <div className="absolute right-[-20px] bottom-[-20px] w-24 h-24 bg-[#22c55e]/5 rounded-full blur-2xl group-hover:bg-[#22c55e]/10 transition-colors" />
        </motion.div>

        <motion.div whileHover={{ y: -3 }} className="glass-card p-6 flex flex-col justify-between h-[140px] relative overflow-hidden group">
          <div className="flex justify-between items-start z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7c5cff] flex items-center gap-1.5">
              <TrendingUp className="h-3.5 w-3.5" /> Average Streak
            </span>
          </div>
          <div className="mt-4 z-10 flex items-baseline gap-2">
            <span className="text-4xl font-black tracking-tight font-mono">{avgStreak}</span>
            <span className="text-xs text-[#a1a1aa] font-semibold">DAYS ACTIVE</span>
          </div>
          <div className="absolute right-[-20px] bottom-[-20px] w-24 h-24 bg-[#7c5cff]/5 rounded-full blur-2xl group-hover:bg-[#7c5cff]/10 transition-colors" />
        </motion.div>

        <motion.div whileHover={{ y: -3 }} className="glass-card p-6 flex flex-col justify-between h-[140px] relative overflow-hidden group">
          <div className="flex justify-between items-start z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f59e0b] flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5" /> Active Habits
            </span>
          </div>
          <div className="mt-4 z-10 flex items-baseline gap-2">
            <span className="text-4xl font-black tracking-tight font-mono">{activeHabitsCount}</span>
            <span className="text-xs text-[#a1a1aa] font-semibold">TRACKING</span>
          </div>
          <div className="absolute right-[-20px] bottom-[-20px] w-24 h-24 bg-[#f59e0b]/5 rounded-full blur-2xl group-hover:bg-[#f59e0b]/10 transition-colors" />
        </motion.div>

        {/* Deploy Form in Quick Box */}
        <div className="glass-card p-6 flex flex-col justify-between h-[140px] border-[#22c55e]/20 bg-gradient-to-br from-[#111113]/80 to-[#22c55e]/5">
          <span className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#22c55e]" /> Add Habit
          </span>
          <form onSubmit={handleSubmit} className="flex gap-2 z-10 mt-2">
            <input
              type="text"
              required
              placeholder="Habit name..."
              value={newHabitName}
              onChange={(e) => setNewHabitName(e.target.value)}
              className="flex-1 bg-[#09090b]/80 border border-white/[0.06] rounded-xl px-3 py-1.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#22c55e]/50 transition-colors"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="p-2 bg-white hover:bg-zinc-200 text-zinc-950 rounded-xl transition-colors cursor-pointer"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      </div>

      {/* Habits List Grid */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-widest text-[#a1a1aa] text-left">Your Habits</h3>
        
        {habitsLoading ? (
          <div className="py-12 text-center text-xs text-zinc-500">Retrieving habits...</div>
        ) : habitsError ? (
          <div className="p-4 rounded-xl bg-[#ef4444]/10 border border-[#ef4444]/20 text-xs text-[#ef4444]">{habitsError}</div>
        ) : habits.length === 0 ? (
          <div className="py-12 text-center text-xs text-zinc-500 italic glass-card border-dashed">
            No active habits initialized. Add one above to start tracking.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence initial={false}>
              {habits.map((habit) => {
                // Calculate streak target ring parameters
                const targetStreak = 30;
                const ringProgress = Math.min(100, Math.round((habit.streak / targetStreak) * 100));
                
                return (
                  <motion.div
                    key={habit._id}
                    layoutId={`habit-card-${habit._id}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="glass-card p-5 bg-[#111113]/80 border-white/[0.04] hover:border-white/[0.08] flex items-center justify-between group relative overflow-hidden transition-all duration-300"
                  >
                    <div className="space-y-3 min-w-0 text-left">
                      <div>
                        <h4 className={`text-sm font-bold truncate ${habit.completed ? 'text-[#a1a1aa] line-through opacity-70' : 'text-white'}`}>
                          {habit.name}
                        </h4>
                        <p className="text-[10px] text-[#a1a1aa] font-medium mt-0.5">
                          Streak target: <span className="font-bold text-[#a78bfa]">{habit.streak} / {targetStreak}D</span>
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => onToggleHabit(habit._id)}
                          className={`flex items-center gap-1.5 py-1 px-3 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                            habit.completed
                              ? 'bg-[#22c55e]/15 border border-[#22c55e]/30 text-[#22c55e]'
                              : 'bg-white text-zinc-950 hover:bg-zinc-200'
                          }`}
                        >
                          <Check className="h-3 w-3 stroke-[3]" />
                          {habit.completed ? 'Done' : 'Check'}
                        </button>
                        
                        <button
                          onClick={() => onDeleteHabit(habit._id)}
                          className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:bg-[#ef4444]/10 hover:border-[#ef4444]/20 text-[#a1a1aa] hover:text-[#ef4444] transition-all cursor-pointer"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Completion Ring */}
                    <div className="relative flex items-center justify-center flex-shrink-0">
                      <svg className="w-16 h-16 transform -rotate-90">
                        <circle
                          cx="32"
                          cy="32"
                          r="26"
                          className="stroke-white/[0.04]"
                          strokeWidth="4"
                          fill="transparent"
                        />
                        <motion.circle
                          cx="32"
                          cy="32"
                          r="26"
                          className="stroke-[#7c5cff]"
                          strokeWidth="4"
                          fill="transparent"
                          strokeDasharray={163.3}
                          initial={{ strokeDashoffset: 163.3 }}
                          animate={{ strokeDashoffset: 163.3 - (163.3 * ringProgress) / 100 }}
                          transition={{ duration: 1 }}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute flex flex-col items-center">
                        <span className="text-[10px] font-black font-mono leading-none">{habit.streak}D</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Analytics Charts & Heatmap */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Full Consistency Heatmap */}
        <div className="glass-card p-6 lg:col-span-2 flex flex-col justify-between h-[340px]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#22c55e] flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5 text-[#22c55e]" /> Consistency Grid
            </span>
            <p className="text-[11px] text-[#a1a1aa] mt-0.5 font-medium">Check your consistency across past weeks.</p>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-4 my-2">
            <div className="flex flex-col gap-1.5 overflow-x-auto py-2 custom-scrollbar">
              <div className="grid grid-flow-col gap-1 auto-cols-max">
                {Array.from({ length: 28 }).map((_, colIndex) => (
                  <div key={colIndex} className="grid grid-rows-7 gap-1">
                    {Array.from({ length: 7 }).map((_, rowIndex) => {
                      const density = (colIndex * 3 + rowIndex * 2) % 6;
                      const bgColors = [
                        'bg-white/[0.02] border border-white/[0.01]',
                        'bg-[#22c55e]/10 border border-[#22c55e]/15',
                        'bg-[#22c55e]/25 border border-[#22c55e]/20',
                        'bg-[#22c55e]/45 border border-[#22c55e]/30',
                        'bg-[#22c55e]/70 border border-[#22c55e]/40',
                        'bg-[#22c55e] border border-[#a78bfa]/40 shadow-sm shadow-[#22c55e]/20'
                      ];
                      
                      return (
                        <div
                          key={rowIndex}
                          className={`w-3.5 h-3.5 rounded-sm transition-all duration-300 hover:scale-125 ${bgColors[density]}`}
                          title={`Completed: ${density} habits`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] text-[#a1a1aa] font-mono px-1">
              <div className="flex gap-2">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>
              <div className="flex items-center gap-1">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded-sm bg-white/[0.02]" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#22c55e]/10" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#22c55e]/25" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#22c55e]/45" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#22c55e]/70" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#22c55e]" />
                <span>More</span>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Completion Analytics */}
        <div className="glass-card p-6 flex flex-col justify-between h-[340px]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7c5cff] flex items-center gap-1.5">
              <BarChart3 className="h-3.5 w-3.5" /> Weekly Yield
            </span>
            <p className="text-[11px] text-[#a1a1aa] mt-0.5 font-medium">Daily completion density this week.</p>
          </div>

          <div className="flex-1 min-h-0 w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
                <XAxis dataKey="name" stroke="#52525b" fontSize={9} tickLine={false} axisLine={false} />
                <YAxis stroke="#52525b" fontSize={9} tickLine={false} axisLine={false} allowDecimals={false} />
                <Tooltip
                  contentStyle={{
                    background: '#111113',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    fontSize: '11px',
                    color: '#ffffff'
                  }}
                />
                <Bar dataKey="count" fill="#22c55e" radius={[4, 4, 0, 0]} maxBarSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Monthly Area Chart */}
      <div className="glass-card p-6 h-[260px] flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa] flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" /> Monthly Curve
          </span>
          <p className="text-[11px] text-[#a1a1aa] mt-0.5 font-medium">Completion yield wave over 30 intervals.</p>
        </div>

        <div className="flex-1 min-h-0 w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyData} margin={{ top: 10, right: 5, left: -25, bottom: 0 }}>
              <defs>
                <linearGradient id="habitGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.25}/>
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="day" stroke="#52525b" fontSize={9} tickLine={false} axisLine={false} />
              <YAxis stroke="#52525b" fontSize={9} tickLine={false} axisLine={false} allowDecimals={false} />
              <Tooltip
                contentStyle={{
                  background: '#111113',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  fontSize: '11px',
                  color: '#ffffff'
                }}
              />
              <Area type="monotone" dataKey="completions" stroke="#22c55e" strokeWidth={2} fillOpacity={1} fill="url(#habitGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
