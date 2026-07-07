import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Flame } from 'lucide-react';

export const PomodoroTimer: React.FC = () => {
  const [minutes, setMinutes] = useState<number>(25);
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (seconds === 0) {
          if (minutes === 0) {
            // Timer finished
            setIsActive(false);
            if (interval) clearInterval(interval);
            alert("Focus session complete! Take a short break.");
            setMinutes(25);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else if (!isActive && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => setIsActive(!isActive);
  
  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <div className="glass-panel p-6 rounded-2xl border border-white/[0.06] min-h-[160px] flex flex-col justify-between transition-all duration-300 hover:border-white/[0.12]">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 flex items-center gap-1.5">
          <Flame className="h-3.5 w-3.5" /> Focus Engine
        </span>
        <span className={`h-2 w-2 rounded-full ${isActive ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-600'}`} />
      </div>
      
      <h3 className="text-4xl font-black font-mono mt-2 tracking-tight text-white">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </h3>

      <div className="flex items-center gap-2 mt-4">
        <button
          onClick={toggleTimer}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            isActive 
              ? 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700' 
              : 'bg-white text-zinc-950 hover:bg-zinc-200 shadow-md shadow-white/5'
          }`}
        >
          {isActive ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 fill-current" />}
          {isActive ? 'Pause' : 'Start'}
        </button>
        
        <button
          onClick={resetTimer}
          className="p-2 rounded-xl bg-zinc-900/60 border border-white/[0.06] text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
          title="Reset Timer"
        >
          <RotateCcw className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};