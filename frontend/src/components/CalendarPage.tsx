import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Calendar, 
  Clock, 
  Check, 
  Trash2, 
  HelpCircle,
  Inbox
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Objective {
  id: string;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'To Do' | 'In Progress' | 'In Review' | 'Completed';
  dueDate: string;
  progress?: number;
  scheduledDate?: string; // YYYY-MM-DD
  scheduledTime?: string; // HH:00
}

interface CalendarPageProps {
  objectives: Objective[];
  onScheduleObjective: (id: string, date: string | undefined, time: string | undefined) => void;
  onAddObjective: (title: string, priority: 'High' | 'Medium' | 'Low', status?: Objective['status'], dueDate?: string) => void;
  onToggleObjective: (id: string) => void;
  onDeleteObjective: (id: string) => void;
}

const HOURS = Array.from({ length: 14 }).map((_, i) => {
  const hour = i + 8; // 08:00 to 21:00
  return `${hour.toString().padStart(2, '0')}:00`;
});

export const CalendarPage: React.FC<CalendarPageProps> = ({
  objectives,
  onScheduleObjective,
  onAddObjective,
  onToggleObjective,
  onDeleteObjective,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weekDays, setWeekDays] = useState<Date[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<{ dateStr: string; timeStr: string } | null>(null);
  const [newTitle, setNewTitle] = useState('');
  const [newPriority, setNewPriority] = useState<'High' | 'Medium' | 'Low'>('Medium');
  
  // Track current hour for live timeline marker
  const [currentHourMinute, setCurrentHourMinute] = useState({ hour: 0, minute: 0 });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentHourMinute({ hour: now.getHours(), minute: now.getMinutes() });
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Compute days of the current week (Mon - Sun)
  useEffect(() => {
    const startOfWeek = new Date(currentDate);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1); // Adjust to Monday
    startOfWeek.setDate(diff);

    const days = [];
    for (let i = 0; i < 7; i++) {
      const nextDay = new Date(startOfWeek);
      nextDay.setDate(startOfWeek.getDate() + i);
      days.push(nextDay);
    }
    setWeekDays(days);
  }, [currentDate]);

  const formatDateKey = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const handlePrevWeek = () => {
    const prev = new Date(currentDate);
    prev.setDate(currentDate.getDate() - 7);
    setCurrentDate(prev);
  };

  const handleNextWeek = () => {
    const next = new Date(currentDate);
    next.setDate(currentDate.getDate() + 7);
    setCurrentDate(next);
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  // Drag & Drop Handlers
  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData('text/plain', id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDropOnSlot = (e: React.DragEvent, dateStr: string, timeStr: string) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    if (id) {
      onScheduleObjective(id, dateStr, timeStr);
    }
  };

  const handleDropOnBacklog = (e: React.DragEvent) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    if (id) {
      onScheduleObjective(id, undefined, undefined);
    }
  };

  const handleCreateOnSlot = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !selectedSlot) return;

    // Create the objective
    const newId = Date.now().toString();
    onAddObjective(newTitle.trim(), newPriority, 'To Do', selectedSlot.dateStr);
    
    // We scheduled it, so we call the scheduler helper right after creating it to assign date & time
    // But since onAddObjective is async or local, let's wait a tiny bit or just schedule it by matching the ID
    // Actually, to make it seamless, let's adjust App.tsx to accept scheduled values or trigger scheduling
    onScheduleObjective(newId, selectedSlot.dateStr, selectedSlot.timeStr);
    
    // Fallback: we schedule it by passing the values. We will update onAddObjective inside App.tsx to support passing scheduled properties!
    // For now, let's close slot
    setNewTitle('');
    setSelectedSlot(null);
  };

  // Filter lists
  const scheduledObjectives = objectives.filter(o => o.scheduledDate && o.scheduledTime);
  const unscheduledObjectives = objectives.filter(o => !o.scheduledDate || !o.scheduledTime);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-[#ef4444]/10 border-[#ef4444]/30 text-[#ef4444] shadow-[#ef4444]/10';
      case 'Medium': return 'bg-[#f59e0b]/10 border-[#f59e0b]/30 text-[#f59e0b] shadow-[#f59e0b]/10';
      default: return 'bg-[#7c5cff]/10 border-[#7c5cff]/30 text-[#7c5cff] shadow-[#7c5cff]/10';
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#a78bfa] uppercase">
            <Clock className="h-3.5 w-3.5" /> Temporal Timeline
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mt-1 bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Calendar Feed
          </h1>
          <p className="text-sm text-[#a1a1aa] mt-2 font-medium">
            Drag objectives onto time slots to coordinate daily cognitive blocks.
          </p>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleToday}
            className="px-4 py-2 bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.04] text-xs font-bold text-white rounded-xl transition-all cursor-pointer"
          >
            Today
          </button>
          <div className="flex items-center bg-[#111113]/60 border border-white/[0.06] rounded-xl p-0.5">
            <button
              onClick={handlePrevWeek}
              className="p-1.5 hover:bg-white/[0.04] rounded-lg text-[#a1a1aa] hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-[11px] font-bold font-mono px-3 text-[#a1a1aa] min-w-[160px] text-center select-none">
              {weekDays[0] && weekDays[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              {' — '}
              {weekDays[6] && weekDays[6].toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
            <button
              onClick={handleNextWeek}
              className="p-1.5 hover:bg-white/[0.04] rounded-lg text-[#a1a1aa] hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Backlog / Unscheduled Panel */}
        <div 
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDropOnBacklog}
          className="glass-card p-5 bg-[#111113]/80 border-white/[0.04] space-y-4 flex flex-col min-h-[500px]"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#a1a1aa] flex items-center gap-1.5">
              <Inbox className="h-3.5 w-3.5" /> Task Backlog
            </span>
            <p className="text-[10px] text-zinc-500 mt-0.5">Drag scheduled cards back here to unschedule them.</p>
          </div>

          <div className="flex-1 overflow-y-auto space-y-2 pr-1 max-h-[480px] custom-scrollbar">
            {unscheduledObjectives.length === 0 ? (
              <div className="h-48 border border-dashed border-white/[0.04] rounded-xl flex flex-col items-center justify-center text-center p-4">
                <HelpCircle className="h-7 w-7 text-zinc-700 mb-2" />
                <span className="text-[10px] text-zinc-600 font-medium">All objectives scheduled.</span>
              </div>
            ) : (
              unscheduledObjectives.map((obj) => (
                <div
                  key={obj.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, obj.id)}
                  className={`p-3 rounded-xl border flex flex-col justify-between hover:scale-[1.02] cursor-grab active:cursor-grabbing transition-all ${getPriorityColor(obj.priority)}`}
                >
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xs font-bold leading-snug text-white truncate max-w-[160px] text-left">{obj.title}</span>
                    <button
                      onClick={() => onToggleObjective(obj.id)}
                      className={`h-4.5 w-4.5 rounded border flex items-center justify-center flex-shrink-0 cursor-pointer ${
                        obj.status === 'Completed'
                          ? 'bg-[#7c5cff] border-[#7c5cff] text-white'
                          : 'border-zinc-700 hover:border-zinc-500 bg-transparent'
                      }`}
                    >
                      {obj.status === 'Completed' && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                    </button>
                  </div>
                  <div className="flex justify-between items-center mt-3 text-[9px] font-mono font-bold text-zinc-500">
                    <span>{obj.priority.toUpperCase()}</span>
                    <button
                      onClick={() => onDeleteObjective(obj.id)}
                      className="hover:text-[#ef4444] transition-colors cursor-pointer"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Weekly Timeline Grid */}
        <div className="lg:col-span-3 glass-card bg-[#111113]/40 border-white/[0.04] p-6 overflow-x-auto custom-scrollbar">
          <div className="min-w-[700px] select-none relative">
            
            {/* Header Columns */}
            <div className="grid grid-cols-8 border-b border-white/[0.04] pb-3 text-center">
              <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest flex items-center justify-center font-mono">Time</div>
              {weekDays.map((day, idx) => {
                const isToday = day.toDateString() === new Date().toDateString();
                return (
                  <div key={idx} className="space-y-1">
                    <div className={`text-[10px] font-bold uppercase tracking-wider ${isToday ? 'text-[#7c5cff]' : 'text-[#a1a1aa]'}`}>
                      {day.toLocaleDateString('en-US', { weekday: 'short' })}
                    </div>
                    <div className={`text-xs font-black font-mono h-6 w-6 mx-auto rounded-full flex items-center justify-center ${isToday ? 'bg-[#7c5cff] text-white shadow-lg shadow-[#7c5cff]/30' : 'text-zinc-500'}`}>
                      {day.getDate()}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Grid Slots */}
            <div className="relative mt-2">
              {HOURS.map((hourStr, hourIdx) => {
                const hourValue = parseInt(hourStr.split(':')[0]);
                
                return (
                  <div key={hourIdx} className="grid grid-cols-8 items-stretch border-b border-white/[0.02] min-h-[48px] relative group/row">
                    
                    {/* Hour label */}
                    <div className="text-[10px] font-bold text-zinc-600 font-mono flex items-center justify-center border-r border-white/[0.02]">
                      {hourStr}
                    </div>

                    {/* Week day cells */}
                    {weekDays.map((day, dayIdx) => {
                      const dateStr = formatDateKey(day);
                      
                      // Find items scheduled in this slot
                      const slotObjectives = scheduledObjectives.filter(
                        o => o.scheduledDate === dateStr && o.scheduledTime === hourStr
                      );

                      return (
                        <div
                          key={dayIdx}
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={(e) => handleDropOnSlot(e, dateStr, hourStr)}
                          onClick={() => setSelectedSlot({ dateStr, timeStr: hourStr })}
                          className={`relative border-r border-white/[0.02] last:border-r-0 p-1 flex flex-col gap-1 transition-colors cursor-crosshair group hover:bg-white/[0.01]`}
                        >
                          {/* Plus sign overlay on hover */}
                          <div className="absolute right-1 top-1 opacity-0 group-hover:opacity-100 transition-opacity p-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                            <Plus className="h-2.5 w-2.5 text-zinc-400" />
                          </div>

                          {/* Event Cards inside cell */}
                          {slotObjectives.map((obj) => (
                            <div
                              key={obj.id}
                              draggable
                              onClick={(e) => e.stopPropagation()} // Prevent opening dialog
                              onDragStart={(e) => handleDragStart(e, obj.id)}
                              className={`p-1.5 rounded-lg border flex flex-col justify-between text-left cursor-grab active:cursor-grabbing transition-all select-none hover:scale-[1.03] ${getPriorityColor(obj.priority)}`}
                              title={obj.title}
                            >
                              <div className="flex justify-between items-start gap-1">
                                <span className="text-[9px] font-bold leading-tight text-white line-clamp-2">{obj.title}</span>
                                <button
                                  onClick={() => onToggleObjective(obj.id)}
                                  className={`h-3 w-3 rounded border flex items-center justify-center flex-shrink-0 cursor-pointer ${
                                    obj.status === 'Completed'
                                      ? 'bg-[#7c5cff] border-[#7c5cff] text-white'
                                      : 'border-zinc-700 hover:border-zinc-500 bg-transparent'
                                  }`}
                                >
                                  {obj.status === 'Completed' && <Check className="h-2 w-2 stroke-[3]" />}
                                </button>
                              </div>
                              <div className="flex justify-between items-center mt-1.5 text-[7px] font-mono font-bold text-zinc-500">
                                <span>{obj.priority.substring(0, 1)}</span>
                                <button
                                  onClick={() => onDeleteObjective(obj.id)}
                                  className="hover:text-[#ef4444] transition-colors cursor-pointer"
                                >
                                  <Trash2 className="h-2.5 w-2.5" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    })}

                    {/* Live Time Tracker Line (rendered if current hour matches) */}
                    {currentHourMinute.hour === hourValue && (
                      <div 
                        className="absolute left-[12.5%] right-0 h-0.5 bg-[#ef4444]/60 z-30 pointer-events-none shadow-md shadow-[#ef4444]/30"
                        style={{ top: `${(currentHourMinute.minute / 60) * 100}%` }}
                      >
                        <div className="absolute left-[-4px] top-[-3px] w-2.5 h-2.5 rounded-full bg-[#ef4444] border border-[#09090b] shadow shadow-[#ef4444]/50" />
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      {/* Inline Slot Creator Modal Dialog */}
      <AnimatePresence>
        {selectedSlot && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-sm glass-card p-6 bg-[#111113] border-white/[0.08] space-y-4"
            >
              <div className="flex justify-between items-center pb-2 border-b border-white/[0.04]">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#a78bfa] flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" /> Block Time Coordinate
                </h3>
                <button 
                  onClick={() => setSelectedSlot(null)}
                  className="text-xs font-bold text-zinc-500 hover:text-white uppercase tracking-wider cursor-pointer"
                >
                  Cancel
                </button>
              </div>

              <div className="space-y-1 text-left">
                <span className="text-[10px] font-mono text-[#a1a1aa] font-bold">COORDINATE</span>
                <p className="text-xs font-bold text-white font-mono">
                  {new Date(selectedSlot.dateStr).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })} @ {selectedSlot.timeStr}
                </p>
              </div>

              <form onSubmit={handleCreateOnSlot} className="space-y-4">
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Block Title</label>
                  <input
                    type="text"
                    required
                    placeholder="Focus target name..."
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full bg-[#09090b]/80 border border-white/[0.06] rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#7c5cff]/50 transition-colors"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Priority Vector</label>
                  <select
                    value={newPriority}
                    onChange={(e) => setNewPriority(e.target.value as any)}
                    className="w-full bg-[#09090b]/80 border border-white/[0.06] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#7c5cff]/50 transition-colors"
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Schedule Block
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
