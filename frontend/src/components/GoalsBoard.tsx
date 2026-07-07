import React, { useState } from 'react';
import { 
  Plus, 
  Trash2, 
  Check, 
  Calendar as CalendarIcon, 
  FolderKanban
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Objective {
  id: string;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'To Do' | 'In Progress' | 'In Review' | 'Completed';
  dueDate: string;
  progress?: number; // 0 to 100
  scheduledDate?: string;
  scheduledTime?: string;
}

interface GoalsBoardProps {
  objectives: Objective[];
  onAddObjective: (title: string, priority: 'High' | 'Medium' | 'Low', status: Objective['status'], dueDate: string) => void;
  onToggleObjective: (id: string) => void;
  onUpdateObjectiveStatus: (id: string, status: Objective['status']) => void;
  onDeleteObjective: (id: string) => void;
}

const COLUMNS: { id: Objective['status']; name: string; color: string; borderGlow: string }[] = [
  { id: 'To Do', name: 'To Do', color: 'text-zinc-400', borderGlow: 'hover:border-zinc-800' },
  { id: 'In Progress', name: 'In Progress', color: 'text-[#7c5cff]', borderGlow: 'hover:border-[#7c5cff]/30' },
  { id: 'In Review', name: 'In Review', color: 'text-[#f59e0b]', borderGlow: 'hover:border-[#f59e0b]/30' },
  { id: 'Completed', name: 'Completed', color: 'text-[#22c55e]', borderGlow: 'hover:border-[#22c55e]/30' },
];

export const GoalsBoard: React.FC<GoalsBoardProps> = ({
  objectives,
  onAddObjective,
  onToggleObjective,
  onUpdateObjectiveStatus,
  onDeleteObjective,
}) => {
  // Column-specific inline creator states
  const [activeCreatorCol, setActiveCreatorCol] = useState<Objective['status'] | null>(null);
  const [newTitle, setNewTitle] = useState('');
  const [priority, setPriority] = useState<'High' | 'Medium' | 'Low'>('Medium');
  const [dueDate, setDueDate] = useState('');

  // Drag states for column highlighting
  const [draggingCardId, setDraggingCardId] = useState<string | null>(null);
  const [dragOverCol, setDragOverCol] = useState<Objective['status'] | null>(null);

  const handleSubmit = (e: React.FormEvent, colId: Objective['status']) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    
    const finalDate = dueDate || new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0]; // Default: 3 days out
    onAddObjective(newTitle.trim(), priority, colId, finalDate);
    
    // Reset form
    setNewTitle('');
    setPriority('Medium');
    setDueDate('');
    setActiveCreatorCol(null);
  };

  // HTML5 Drag Handlers
  const handleDragStart = (e: React.DragEvent, id: string) => {
    setDraggingCardId(id);
    e.dataTransfer.setData('text/plain', id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnd = () => {
    setDraggingCardId(null);
    setDragOverCol(null);
  };

  const handleDragOver = (e: React.DragEvent, colId: Objective['status']) => {
    e.preventDefault();
    if (dragOverCol !== colId) {
      setDragOverCol(colId);
    }
  };

  const handleDrop = (e: React.DragEvent, colId: Objective['status']) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('text/plain') || draggingCardId;
    if (cardId) {
      onUpdateObjectiveStatus(cardId, colId);
    }
    setDragOverCol(null);
    setDraggingCardId(null);
  };

  // Completion statistics
  const total = objectives.length;
  const completed = objectives.filter(o => o.status === 'Completed').length;
  const progressPercent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="space-y-8 pb-12">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#7c5cff] uppercase">
            <FolderKanban className="h-3.5 w-3.5" /> Goals Tracker
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mt-1 bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Your Goals
          </h1>
          <p className="text-sm text-[#a1a1aa] mt-2 font-medium">
            Drag cards between columns to update your progress.
          </p>
        </div>

        {/* Global Board Progress Indicator */}
        <div className="glass-card p-4 bg-[#111113]/40 border-white/[0.04] flex items-center gap-4 min-w-[240px]">
          <div className="flex-1 space-y-1.5 text-left">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-[#a1a1aa]">Goals Completed</span>
              <span className="text-white font-bold">{progressPercent}%</span>
            </div>
            <div className="h-1.5 w-full bg-white/[0.04] rounded-full overflow-hidden border border-white/[0.02]">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.8 }}
                className="h-full bg-gradient-to-r from-[#7c5cff] to-[#22c55e]"
              />
            </div>
          </div>
          <div className="h-9 w-9 rounded-xl bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center font-bold text-xs text-[#22c55e]">
            {completed}/{total}
          </div>
        </div>
      </div>

      {/* Kanban Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
        {COLUMNS.map((col) => {
          const colCards = objectives.filter(o => o.status === col.id);
          const isOver = dragOverCol === col.id;

          return (
            <div
              key={col.id}
              onDragOver={(e) => handleDragOver(e, col.id)}
              onDrop={(e) => handleDrop(e, col.id)}
              onDragLeave={() => setDragOverCol(null)}
              className={`glass-card p-4 bg-[#111113]/40 border-white/[0.03] flex flex-col min-h-[500px] transition-all duration-300 ${
                isOver ? 'border-[#7c5cff]/30 bg-[#7c5cff]/3' : ''
              }`}
            >
              {/* Column Header */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/[0.03]">
                <div className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${
                    col.id === 'Completed' ? 'bg-[#22c55e]' : col.id === 'In Review' ? 'bg-[#f59e0b]' : col.id === 'In Progress' ? 'bg-[#7c5cff]' : 'bg-zinc-500'
                  }`} />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                    {col.name}
                  </h3>
                  <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-white/[0.03] text-[#a1a1aa]">
                    {colCards.length}
                  </span>
                </div>
                
                {/* Column Actions */}
                <button
                  onClick={() => setActiveCreatorCol(activeCreatorCol === col.id ? null : col.id)}
                  className="p-1 rounded hover:bg-white/[0.04] text-[#a1a1aa] hover:text-white transition-colors cursor-pointer"
                  title="Create Goal In Column"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              {/* Inline Card Creator Form */}
              <AnimatePresence>
                {activeCreatorCol === col.id && (
                  <motion.form
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    onSubmit={(e) => handleSubmit(e, col.id)}
                    className="mb-4 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3 overflow-hidden text-left"
                  >
                    <input
                      type="text"
                      required
                      placeholder="Goal title..."
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="w-full bg-[#09090b]/80 border border-white/[0.06] rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#7c5cff]/50 transition-colors"
                    />

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[9px] font-bold text-[#a1a1aa] uppercase block mb-1">Priority</label>
                        <select
                          value={priority}
                          onChange={(e) => setPriority(e.target.value as any)}
                          className="w-full bg-[#09090b]/80 border border-white/[0.06] rounded-lg px-2 py-1.5 text-[11px] text-[#a1a1aa] focus:outline-none focus:border-[#7c5cff]/50 cursor-pointer"
                        >
                          <option value="High">High</option>
                          <option value="Medium">Medium</option>
                          <option value="Low">Low</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[9px] font-bold text-[#a1a1aa] uppercase block mb-1">Due Date</label>
                        <input
                          type="date"
                          value={dueDate}
                          onChange={(e) => setDueDate(e.target.value)}
                          className="w-full bg-[#09090b]/80 border border-white/[0.06] rounded-lg px-2 py-1.5 text-[11px] text-[#a1a1aa] focus:outline-none focus:border-[#7c5cff]/50 cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="flex gap-2 pt-1">
                      <button
                        type="submit"
                        className="flex-1 py-1.5 bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-[11px] rounded-lg transition-colors cursor-pointer"
                      >
                        Deploy
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveCreatorCol(null)}
                        className="px-2 py-1.5 bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] text-[#a1a1aa] hover:text-white text-[11px] rounded-lg transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* Cards Container */}
              <div className="flex-1 space-y-3 overflow-y-auto pr-0.5 custom-scrollbar min-h-[400px]">
                {colCards.length === 0 ? (
                  <div className="h-full flex items-center justify-center border-2 border-dashed border-white/[0.01] rounded-2xl py-12 text-[11px] text-zinc-600 italic">
                    Drop items here
                  </div>
                ) : (
                  <AnimatePresence initial={false}>
                    {colCards.map((card) => {
                      const isHigh = card.priority === 'High';
                      const isMed = card.priority === 'Medium';
                      const priorityColor = isHigh 
                        ? 'text-[#ef4444] bg-[#ef4444]/10 border-[#ef4444]/20'
                        : isMed
                        ? 'text-[#f59e0b] bg-[#f59e0b]/10 border-[#f59e0b]/20'
                        : 'text-[#7c5cff] bg-[#7c5cff]/10 border-[#7c5cff]/20';
                      
                      // Calculate default progress bar fills
                      const barPercent = card.progress !== undefined 
                        ? card.progress 
                        : card.status === 'Completed' 
                        ? 100 
                        : card.status === 'In Review'
                        ? 80
                        : card.status === 'In Progress'
                        ? 40
                        : 0;

                      return (
                        <div
                          key={card.id}
                          draggable
                          onDragStart={(e) => handleDragStart(e, card.id)}
                          onDragEnd={handleDragEnd}
                          className="relative select-none"
                        >
                          <motion.div
                            layoutId={`card-${card.id}`}
                            className={`glass-card p-4 bg-[#111113]/80 border-white/[0.04] hover:border-white/[0.08] transition-all cursor-grab active:cursor-grabbing relative overflow-hidden group ${
                              draggingCardId === card.id ? 'opacity-30' : ''
                            }`}
                          >
                            {/* Priority Indicator Pill */}
                            <div className="flex justify-between items-start mb-2.5">
                              <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border font-semibold ${priorityColor}`}>
                                {card.priority}
                              </span>

                              <button
                                onClick={() => onDeleteObjective(card.id)}
                                className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-white/[0.04] text-zinc-500 hover:text-[#ef4444] transition-all cursor-pointer"
                                title="Delete Goal"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>

                            {/* Card Content Title */}
                            <p className="text-xs font-semibold text-white leading-relaxed tracking-wide text-left mb-3">
                              {card.title}
                            </p>

                            {/* Progress Line */}
                            <div className="space-y-1 mb-3.5">
                              <div className="flex justify-between text-[9px] font-mono text-[#a1a1aa]">
                                <span>Status Yield</span>
                                <span>{barPercent}%</span>
                              </div>
                              <div className="h-1 w-full bg-white/[0.04] rounded-full overflow-hidden">
                                <div
                                  style={{ width: `${barPercent}%` }}
                                  className={`h-full rounded-full transition-all duration-500 ${
                                    card.status === 'Completed' 
                                      ? 'bg-[#22c55e]' 
                                      : card.status === 'In Review'
                                      ? 'bg-[#f59e0b]'
                                      : 'bg-[#7c5cff]'
                                  }`}
                                />
                              </div>
                            </div>

                            {/* Footer Metrics */}
                            <div className="flex items-center justify-between pt-2 border-t border-white/[0.03] text-[10px] text-[#a1a1aa] font-mono">
                              <span className="flex items-center gap-1 text-[9px]">
                                <CalendarIcon className="h-3 w-3 text-zinc-500" />
                                {card.dueDate}
                              </span>

                              {card.status !== 'Completed' && (
                                <button
                                  onClick={() => onToggleObjective(card.id)}
                                  className="h-4.5 w-4.5 rounded-md border border-zinc-700 hover:border-[#22c55e] flex items-center justify-center hover:bg-[#22c55e]/10 text-transparent hover:text-[#22c55e] transition-all cursor-pointer"
                                  title="Quick Complete"
                                >
                                  <Check className="h-3 w-3 stroke-[3]" />
                                </button>
                              )}
                            </div>
                          </motion.div>
                        </div>
                      );
                    })}
                  </AnimatePresence>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
