import React, { useState, useEffect } from 'react';
import api from '../lib/api'; // Adjust this relative path if your api instance sits elsewhere
import { Plus, Check, Trash2, ShieldAlert, Loader2, Award } from 'lucide-react';

interface Habit {
  _id: string;
  name: string;
  completed: boolean;
  streak: number;
}

export function HabitTracker() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [newHabitName, setNewHabitName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // 1. Fetch habits from the database upon component synchronization load
  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await api.get('/habits');
        setHabits(response.data);
      } catch (err: any) {
        setError('Failed to fetch habit matrix records.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchHabits();
  }, []);

  // 2. Commit a new habit to the database cluster pipeline
  const handleAddHabit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHabitName.trim()) return;

    try {
      const response = await api.post('/habits', { name: newHabitName.trim() });
      setHabits([...habits, response.data]);
      setNewHabitName('');
    } catch (err: any) {
      setError('Failed to initialize new habit database entry.');
    }
  };

  // 3. Toggle completion matrix state and update database streaks
  const handleToggleHabit = async (id: string) => {
    try {
      const response = await api.put(`/habits/${id}/toggle`);
      setHabits(habits.map(habit => habit._id === id ? response.data : habit));
    } catch (err: any) {
      setError('Failed to rewrite execution state.');
    }
  };

  // 4. Purge a habit record out of the database collection entirely
  const handleDeleteHabit = async (id: string) => {
    try {
      await api.delete(`/habits/${id}`);
      setHabits(habits.filter(habit => habit._id !== id));
    } catch (err: any) {
      setError('Failed to terminate target database entry.');
    }
  };

  return (
    <div className="bg-zinc-900/50 backdrop-blur-md border border-white/[0.04] p-6 rounded-2xl flex flex-col h-[400px]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-white tracking-tight">Neuro-Habit Matrix</h3>
          <p className="text-xs text-zinc-500">Persistent neuro-plasticity logging.</p>
        </div>
        <Award className="h-5 w-5 text-indigo-400" />
      </div>

      {error && (
        <div className="mb-3 p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center gap-2 text-xs text-rose-400">
          <ShieldAlert className="h-3.5 w-3.5" />
          <span>{error}</span>
        </div>
      )}

      {/* Input Entry Form Box */}
      <form onSubmit={handleAddHabit} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Deploy new daily vector..."
          value={newHabitName}
          onChange={(e) => setNewHabitName(e.target.value)}
          className="flex-1 bg-zinc-950 border border-white/[0.06] rounded-xl px-3 py-2 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
        />
        <button
          type="submit"
          className="p-2 bg-white hover:bg-zinc-200 text-zinc-950 rounded-xl transition-colors cursor-pointer"
        >
          <Plus className="h-4 w-4" />
        </button>
      </form>

      {/* Dynamic List Data Render */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
        {isLoading ? (
          <div className="h-full w-full flex items-center justify-center">
            <Loader2 className="h-5 w-5 text-zinc-600 animate-spin" />
          </div>
        ) : habits.length === 0 ? (
          <div className="h-full w-full flex items-center justify-center text-xs text-zinc-600 italic">
            No active vector tracking arrays established.
          </div>
        ) : (
          habits.map((habit) => (
            <div
              key={habit._id}
              className="flex items-center justify-between p-3 bg-zinc-950/40 border border-white/[0.02] rounded-xl hover:border-white/[0.06] transition-all group"
            >
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleToggleHabit(habit._id)}
                  className={`h-5 w-5 rounded-md border flex items-center justify-center transition-all cursor-pointer ${
                    habit.completed
                      ? 'bg-indigo-500 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                      : 'border-zinc-700 hover:border-zinc-500 bg-transparent'
                  }`}
                >
                  {habit.completed && <Check className="h-3 w-3 stroke-[3]" />}
                </button>
                <span className={`text-xs font-medium transition-all ${habit.completed ? 'text-zinc-500 line-through' : 'text-zinc-200'}`}>
                  {habit.name}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold bg-zinc-800 border border-white/[0.04] text-zinc-400 px-1.5 py-0.5 rounded-md">
                  🔥 {habit.streak}D
                </span>
                <button
                  onClick={() => handleDeleteHabit(habit._id)}
                  className="text-zinc-600 hover:text-rose-400 transition-colors cursor-pointer opacity-0 group-hover:opacity-100"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}