import React, { useState } from 'react';
import { useTranslation } from '../context/I18nContext';
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
  { id: 'To Do', name: 'To Do', color: 'text-brand-text-secondary', borderGlow: 'hover:border-brand-border' },
  { id: 'In Progress', name: 'In Progress', color: 'text-brand-primary', borderGlow: 'hover:border-brand-primary/30' },
  { id: 'In Review', name: 'In Review', color: 'text-brand-warning', borderGlow: 'hover:border-brand-warning/30' },
  { id: 'Completed', name: 'Completed', color: 'text-brand-success', borderGlow: 'hover:border-brand-success/30' },
];

export const GoalsBoard: React.FC<GoalsBoardProps> = ({
  objectives,
  onAddObjective,
  onToggleObjective,
  onUpdateObjectiveStatus,
  onDeleteObjective,
}) => {
  const { t } = useTranslation();
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
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-brand-primary uppercase">
            <FolderKanban className="h-3.5 w-3.5" /> {t('goals.title')}
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mt-1 text-brand-text-primary">
            {t('goals.title')}
          </h1>
          <p className="text-sm text-brand-text-secondary mt-2 font-medium">
            {t('goals.subtitle')}
          </p>
        </div>

        {/* Global Board Progress Indicator */}
        <div className="glass-card p-4 bg-brand-surface-secondary border-brand-border flex items-center gap-4 min-w-[240px]">
          <div className="flex-1 space-y-1.5 text-left">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-brand-text-secondary">{t('dash.goals.completed')}</span>
              <span className="text-brand-text-primary font-bold">{progressPercent}%</span>
            </div>
            <div className="h-1.5 w-full bg-brand-surface-secondary rounded-full overflow-hidden border border-brand-border">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.8 }}
                className="h-full bg-gradient-to-r from-brand-primary to-brand-success"
              />
            </div>
          </div>
          <div className="h-9 w-9 rounded-xl bg-brand-success/10 border border-brand-success/30 flex items-center justify-center font-bold text-xs text-brand-success">
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
              className={`glass-card p-4 bg-brand-surface-secondary border-brand-border flex flex-col min-h-[500px] transition-all duration-300 ${
                isOver ? 'border-brand-primary/30 bg-brand-primary/10' : ''
              }`}
            >
              {/* Column Header */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-brand-border">
                <div className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${
                    col.id === 'Completed' ? 'bg-brand-success' : col.id === 'In Review' ? 'bg-brand-warning' : col.id === 'In Progress' ? 'bg-brand-primary' : 'bg-brand-surface-secondary'
                  }`} />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand-text-primary">
                    {col.id === 'To Do' ? t('goals.status.todo') : col.id === 'In Progress' ? t('goals.status.inprogress') : col.id === 'In Review' ? t('goals.status.inreview') : t('goals.status.completed')}
                  </h3>
                  <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-brand-surface-secondary text-brand-text-secondary">
                    {colCards.length}
                  </span>
                </div>
                
                {/* Column Actions */}
                <button
                  onClick={() => setActiveCreatorCol(activeCreatorCol === col.id ? null : col.id)}
                  className="p-1 rounded hover:bg-brand-surface-secondary text-brand-text-secondary hover:text-brand-text-primary transition-colors cursor-pointer"
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
                    className="mb-4 p-3 rounded-xl bg-brand-surface-secondary border border-brand-border space-y-3 overflow-hidden text-left"
                  >
                    <input
                      type="text"
                      required
                      placeholder="Goal title..."
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="w-full bg-brand-bg border border-brand-border rounded-lg px-2.5 py-1.5 text-xs text-brand-text-primary placeholder-brand-text-muted focus:outline-none focus:border-brand-primary/30 transition-colors"
                    />

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[9px] font-bold text-brand-text-secondary uppercase block mb-1">{t('cal.priority')}</label>
                        <select
                          value={priority}
                          onChange={(e) => setPriority(e.target.value as any)}
                          className="w-full bg-brand-bg border border-brand-border rounded-lg px-2 py-1.5 text-[11px] text-brand-text-secondary focus:outline-none focus:border-brand-primary/30 cursor-pointer"
                        >
                          <option value="High">{t('goals.priority.high')}</option>
                          <option value="Medium">{t('goals.priority.medium')}</option>
                          <option value="Low">{t('goals.priority.low')}</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[9px] font-bold text-brand-text-secondary uppercase block mb-1">{t('cal.date')}</label>
                        <input
                          type="date"
                          value={dueDate}
                          onChange={(e) => setDueDate(e.target.value)}
                          className="w-full bg-brand-bg border border-brand-border rounded-lg px-2 py-1.5 text-[11px] text-brand-text-secondary focus:outline-none focus:border-brand-primary/30 cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="flex gap-2 pt-1">
                      <button
                        type="submit"
                        className="flex-1 py-1.5 bg-brand-primary hover:bg-brand-primary-hover text-white border-brand-primary font-bold text-[11px] rounded-lg transition-colors cursor-pointer"
                      >
                        {t('goals.add')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveCreatorCol(null)}
                        className="px-2 py-1.5 bg-brand-surface-secondary hover:bg-brand-surface-secondary border border-brand-border text-brand-text-secondary hover:text-brand-text-primary text-[11px] rounded-lg transition-colors cursor-pointer"
                      >
                        {t('habits.cancel')}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* Cards Container */}
              <div className="flex-1 space-y-3 overflow-y-auto pr-0.5 custom-scrollbar min-h-[400px]">
                {colCards.length === 0 ? (
                  <div className="h-full flex items-center justify-center border-2 border-dashed border-brand-border rounded-2xl py-12 text-[11px] text-brand-text-secondary italic">
                    {t('goals.placeholder')}
                  </div>
                ) : (
                  <AnimatePresence initial={false}>
                    {colCards.map((card) => {
                      const isHigh = card.priority === 'High';
                      const isMed = card.priority === 'Medium';
                      const priorityColor = isHigh 
                        ? 'text-brand-danger bg-brand-danger/10 border-brand-danger/30'
                        : isMed
                        ? 'text-brand-warning bg-brand-warning/10 border-brand-warning/30'
                        : 'text-brand-primary bg-brand-primary/10 border-brand-primary/30';
                      
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
                            className={`glass-card p-4 bg-brand-surface-secondary border-brand-border hover:border-brand-border transition-all cursor-grab active:cursor-grabbing relative overflow-hidden group ${
                              draggingCardId === card.id ? 'opacity-30' : ''
                            }`}
                          >
                            {/* Priority Indicator Pill */}
                            <div className="flex justify-between items-start mb-2.5">
                              <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border font-semibold ${priorityColor}`}>
                                {card.priority === 'High' ? t('goals.priority.high') : card.priority === 'Medium' ? t('goals.priority.medium') : t('goals.priority.low')}
                              </span>

                              <button
                                onClick={() => onDeleteObjective(card.id)}
                                className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-brand-surface-secondary text-brand-text-secondary hover:text-brand-danger transition-all cursor-pointer"
                                title={t('goals.delete')}
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>

                            {/* Card Content Title */}
                            <p className="text-xs font-semibold text-brand-text-primary leading-relaxed tracking-wide text-left mb-3">
                              {card.title}
                            </p>

                            {/* Progress Line */}
                            <div className="space-y-1 mb-3.5">
                              <div className="flex justify-between text-[9px] font-mono text-brand-text-secondary">
                                <span>{t('goals.status.inprogress')}</span>
                                <span>{barPercent}%</span>
                              </div>
                              <div className="h-1 w-full bg-brand-surface-secondary rounded-full overflow-hidden">
                                <div
                                  style={{ width: `${barPercent}%` }}
                                  className={`h-full rounded-full transition-all duration-500 ${
                                    card.status === 'Completed' 
                                      ? 'bg-brand-success' 
                                      : card.status === 'In Review'
                                      ? 'bg-brand-warning'
                                      : 'bg-brand-primary'
                                  }`}
                                />
                              </div>
                            </div>

                            {/* Footer Metrics */}
                            <div className="flex items-center justify-between pt-2 border-t border-brand-border text-[10px] text-brand-text-secondary font-mono">
                              <span className="flex items-center gap-1 text-[9px]">
                                <CalendarIcon className="h-3 w-3 text-brand-text-secondary" />
                                {card.dueDate}
                              </span>

                              {card.status !== 'Completed' && (
                                <button
                                  onClick={() => onToggleObjective(card.id)}
                                  className="h-4.5 w-4.5 rounded-md border border-brand-border hover:border-brand-success flex items-center justify-center hover:bg-brand-success/10 text-transparent hover:text-brand-success transition-all cursor-pointer"
                                  title={t('goals.complete.all')}
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
