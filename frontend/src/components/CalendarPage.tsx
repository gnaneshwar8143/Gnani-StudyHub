import React, { useState } from 'react';
import { useTranslation } from '../context/I18nContext';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Trash2, 
  Check, 
  Edit2, 
  Calendar, 
  Clock, 
  AlertTriangle, 
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
  scheduledDate?: string;
  scheduledTime?: string;
  taskType?: 'Due Date' | 'Reminder' | 'Repeat Schedule';
  reminderType?: string;
  reminderDateTime?: string;
  reminderSent?: boolean;
}

interface CalendarPageProps {
  objectives: Objective[];
  onScheduleObjective: (id: string, date: string | undefined, time: string | undefined) => void;
  onAddObjective: (
    title: string, 
    priority: 'High' | 'Medium' | 'Low', 
    status?: Objective['status'], 
    dueDate?: string,
    extraFields?: Partial<Objective>
  ) => void;
  onToggleObjective: (id: string) => void;
  onDeleteObjective: (id: string) => void;
  onUpdateObjective?: (id: string, updates: Partial<Objective>) => void;
}

export const CalendarPage: React.FC<CalendarPageProps> = ({
  objectives,
  onScheduleObjective,
  onAddObjective,
  onToggleObjective,
  onDeleteObjective,
  onUpdateObjective,
}) => {
  const { t, formatDate } = useTranslation();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  // Modals / Editors
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState<Objective | null>(null);

  // Form states
  const [newTitle, setNewTitle] = useState('');
  const [newPriority, setNewPriority] = useState<'High' | 'Medium' | 'Low'>('Medium');
  const [newType, setNewType] = useState<'Due Date' | 'Reminder' | 'Repeat Schedule'>('Due Date');
  const [newTime, setNewTime] = useState('09:00');
  const [newReminderType, setNewReminderType] = useState('At Task Time');

  // Edit form states
  const [editTitle, setEditTitle] = useState('');
  const [editPriority, setEditPriority] = useState<'High' | 'Medium' | 'Low'>('Medium');
  const [editType, setEditType] = useState<'Due Date' | 'Reminder' | 'Repeat Schedule'>('Due Date');
  const [editDate, setEditDate] = useState('');
  const [editTime, setEditTime] = useState('');
  const [editReminderType, setEditReminderType] = useState('At Task Time');

  const formatDateKey = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const selectedDateStr = formatDateKey(selectedDate);
  const todayStr = formatDateKey(new Date());

  // Navigation handlers
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleToday = () => {
    const now = new Date();
    setCurrentDate(now);
    setSelectedDate(now);
  };

  // Month days generation
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDayOfWeek = firstDay.getDay(); // 0 (Sun) to 6 (Sat)
    const totalDays = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();

    const cells: { date: Date; isCurrentMonth: boolean; key: string }[] = [];

    // Prev month padding
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
      const d = new Date(year, month - 1, prevMonthDays - i);
      cells.push({ date: d, isCurrentMonth: false, key: `prev-${d.getDate()}` });
    }

    // Current month days
    for (let i = 1; i <= totalDays; i++) {
      const d = new Date(year, month, i);
      cells.push({ date: d, isCurrentMonth: true, key: `curr-${i}` });
    }

    // Next month padding to fill full grid
    const totalSlots = cells.length > 35 ? 42 : 35;
    const nextMonthPadding = totalSlots - cells.length;
    for (let i = 1; i <= nextMonthPadding; i++) {
      const d = new Date(year, month + 1, i);
      cells.push({ date: d, isCurrentMonth: false, key: `next-${i}` });
    }

    return cells;
  };

  const calendarCells = getDaysInMonth(currentDate);

  // Filter tasks relative to the selected date
  const getTasksForSelectedDate = () => {
    return objectives.filter(o => o.dueDate === selectedDateStr || o.scheduledDate === selectedDateStr);
  };

  const getUpcomingTasks = () => {
    return objectives.filter(o => {
      const dateStr = o.dueDate || o.scheduledDate;
      return dateStr && dateStr > selectedDateStr && o.status !== 'Completed';
    });
  };


  const getMissedTasks = () => {
    return objectives.filter(o => {
      const dateStr = o.dueDate || o.scheduledDate;
      return dateStr && dateStr < todayStr && o.status !== 'Completed';
    });
  };

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const taskDateStr = selectedDateStr;

    onAddObjective(newTitle.trim(), newPriority, 'To Do', taskDateStr, {
      scheduledDate: taskDateStr,
      scheduledTime: newTime,
      taskType: newType,
      reminderType: newReminderType,
    });

    setNewTitle('');
    setShowAddModal(false);
  };

  const handleEditClick = (task: Objective) => {
    setShowEditModal(task);
    setEditTitle(task.title);
    setEditPriority(task.priority);
    setEditType(task.taskType || 'Due Date');
    setEditDate(task.dueDate || task.scheduledDate || selectedDateStr);
    setEditTime(task.scheduledTime || '09:00');
    setEditReminderType(task.reminderType || 'At Task Time');
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!showEditModal || !editTitle.trim()) return;

    if (onUpdateObjective) {
      onUpdateObjective(showEditModal.id, {
        title: editTitle.trim(),
        priority: editPriority,
        taskType: editType,
        dueDate: editDate,
        scheduledDate: editDate,
        scheduledTime: editTime,
        reminderType: editReminderType,
      });
    } else {
      onScheduleObjective(showEditModal.id, editDate, editTime);
    }

    setShowEditModal(null);
  };


  const getPriorityTagStyle = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-brand-danger/10 text-brand-danger border-brand-danger/30';
      case 'Medium': return 'bg-brand-warning/10 text-brand-warning border-brand-warning/30';
      default: return 'bg-brand-primary/10 text-brand-primary border-brand-primary/30';
    }
  };

  const getTypeIcon = (type?: string) => {
    switch (type) {
      case 'Reminder': return '🔔';
      case 'Repeat Schedule': return '🔁';
      default: return '📅';
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-brand-primary uppercase">
            <Calendar className="h-3.5 w-3.5" /> {t('cal.title')}
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mt-1 text-brand-text-primary">
            {t('cal.title')}
          </h1>
          <p className="text-sm text-brand-text-secondary mt-2 font-medium">
            {t('cal.subtitle')}
          </p>
        </div>

        {/* Navigation Toolbar */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleToday}
            className="px-4 py-2 bg-brand-surface-secondary border border-brand-border hover:bg-brand-surface-secondary text-xs font-bold text-brand-text-primary rounded-xl transition-all cursor-pointer"
          >
            {t('cal.today')}
          </button>
          <div className="flex items-center bg-brand-surface-secondary border border-brand-border rounded-xl p-0.5">
            <button
              onClick={handlePrevMonth}
              className="p-1.5 hover:bg-brand-surface-secondary rounded-lg text-brand-text-secondary hover:text-brand-text-primary transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-[11px] font-bold font-mono px-3 text-brand-text-secondary min-w-[120px] text-center select-none">
              {formatDate(currentDate, { month: 'long', year: 'numeric' })}
            </span>
            <button
              onClick={handleNextMonth}
              className="p-1.5 hover:bg-brand-surface-secondary rounded-lg text-brand-text-secondary hover:text-brand-text-primary transition-colors cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="p-2 bg-brand-primary hover:bg-brand-primary-hover text-brand-text-primary rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold shadow-md shadow-[#7c5cff]/20"
          >
            <Plus className="h-4 w-4" /> {t('cal.add.task')}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Monthly Calendar View */}
        <div className="lg:col-span-8 glass-card bg-brand-surface-secondary border-brand-border p-5">
          {/* Weekday Labels */}
          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {Array.from({ length: 7 }).map((_, i) => {
              const d = new Date(2026, 0, 4 + i); // Jan 4, 2026 is a Sunday
              const weekdayName = formatDate(d, { weekday: 'short' });
              return (
                <span key={i} className="text-[10px] font-extrabold text-brand-text-secondary uppercase tracking-widest py-1 font-mono">
                  {weekdayName}
                </span>
              );
            })}
          </div>

          {/* Day Grid Cells */}
          <div className="grid grid-cols-7 gap-1">
            {calendarCells.map((cell) => {
              const dateStr = formatDateKey(cell.date);
              const isSelected = dateStr === selectedDateStr;
              const isToday = dateStr === todayStr;
              
              // Filter objectives due on this day
              const dayTasks = objectives.filter(
                (o) => o.dueDate === dateStr || o.scheduledDate === dateStr
              );
              
              // Count priority types
              const highCount = dayTasks.filter(t => t.priority === 'High').length;
              const medCount = dayTasks.filter(t => t.priority === 'Medium').length;
              const lowCount = dayTasks.filter(t => t.priority === 'Low').length;

              return (
                <button
                  key={cell.key}
                  onClick={() => setSelectedDate(cell.date)}
                  className={`min-h-[85px] p-2 rounded-xl flex flex-col justify-between text-left transition-all border outline-none cursor-pointer ${
                    cell.isCurrentMonth 
                      ? 'bg-brand-surface-secondary hover:bg-brand-surface-secondary' 
                      : 'bg-brand-surface-secondary opacity-30 hover:opacity-50'
                  } ${
                    isSelected 
                      ? 'border-brand-primary/30 bg-brand-primary/10 shadow-sm shadow-[#7c5cff]/10 scale-[1.01]' 
                      : isToday 
                        ? 'border-brand-border bg-brand-surface-secondary' 
                        : 'border-brand-border hover:border-brand-border'
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <span className={`text-xs font-bold font-mono ${
                      isToday 
                        ? 'h-5 w-5 rounded-full bg-brand-primary text-brand-text-primary flex items-center justify-center font-black shadow shadow-[#7c5cff]/30' 
                        : isSelected 
                          ? 'text-brand-primary' 
                          : 'text-brand-text-secondary'
                    }`}>
                      {cell.date.getDate()}
                    </span>
                    {dayTasks.length > 0 && (
                      <span className="text-[9px] font-bold text-brand-text-secondary font-mono">
                        {dayTasks.length} {dayTasks.length === 1 ? 'task' : 'tasks'}
                      </span>
                    )}
                  </div>

                  {/* Task Indicator Badges */}
                  <div className="space-y-1 mt-2">
                    {dayTasks.slice(0, 2).map((t) => (
                      <div 
                        key={t.id} 
                        className={`text-[8px] font-bold px-1.5 py-0.5 rounded truncate text-brand-text-primary/95 flex items-center gap-1 ${
                          t.status === 'Completed' 
                            ? 'bg-brand-surface/80 text-brand-text-secondary line-through' 
                            : t.priority === 'High' 
                              ? 'bg-brand-danger/10 border border-brand-danger/30 text-brand-danger' 
                              : t.priority === 'Medium' 
                                ? 'bg-brand-warning/10 border border-brand-warning/30 text-brand-warning' 
                                : 'bg-brand-primary/10 border border-brand-primary/30 text-brand-primary'
                        }`}
                        title={t.title}
                      >
                        <span className="text-[9px] flex-shrink-0">{getTypeIcon(t.taskType)}</span>
                        <span className="truncate">{t.title}</span>
                      </div>
                    ))}
                    {dayTasks.length > 2 && (
                      <div className="text-[8px] text-brand-text-secondary font-bold font-mono pl-1">
                        + {dayTasks.length - 2} more
                      </div>
                    )}
                  </div>

                  {/* Priority Indicator Dots */}
                  <div className="flex gap-1 mt-1 justify-end w-full">
                    {highCount > 0 && <span className="h-1 w-1 rounded-full bg-brand-danger" />}
                    {medCount > 0 && <span className="h-1 w-1 rounded-full bg-brand-warning" />}
                    {lowCount > 0 && <span className="h-1 w-1 rounded-full bg-brand-primary" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Day Agenda Side Drawer */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card p-5 bg-brand-surface-secondary border-brand-border space-y-5 flex flex-col min-h-[500px]">
            {/* Agenda Header */}
            <div className="border-b border-brand-border pb-3 text-left">
              <span className="text-[10px] font-bold text-brand-text-secondary uppercase tracking-widest font-mono select-none">
                {t('cal.agenda')}
              </span>
              <h2 className="text-base font-extrabold text-brand-text-primary mt-1">
                {formatDate(selectedDate, { weekday: 'long', month: 'short', day: 'numeric' })}
              </h2>
            </div>

            {/* List Agenda Sections */}
            <div className="flex-1 overflow-y-auto space-y-5 pr-1 max-h-[460px] custom-scrollbar text-left">
              {/* Today's Tasks */}
              <div>
                <div className="text-[10px] font-extrabold text-brand-text-secondary uppercase tracking-wider mb-2.5 flex items-center justify-between">
                  <span>📅 {t('cal.scheduled.today')}</span>
                  <span className="text-brand-text-secondary font-mono">({getTasksForSelectedDate().length})</span>
                </div>

                {getTasksForSelectedDate().length === 0 ? (
                  <div className="py-6 border border-dashed border-brand-border rounded-xl flex flex-col items-center justify-center text-center p-4 mb-4 select-none">
                    <Inbox className="h-6 w-6 text-brand-text-primary mb-1.5" />
                    <span className="text-[10px] text-brand-text-secondary font-medium">{t('cal.no.tasks')}</span>
                  </div>
                ) : (
                  <div className="space-y-2 mb-4">
                    {getTasksForSelectedDate().map((obj) => (
                      <div 
                        key={obj.id} 
                        className="flex items-center justify-between p-3 rounded-xl bg-brand-surface-secondary border border-brand-border hover:border-brand-border transition-all group"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <button
                            onClick={() => onToggleObjective(obj.id)}
                            className={`h-4.5 w-4.5 rounded-lg border flex items-center justify-center transition-all cursor-pointer flex-shrink-0 ${
                              obj.status === 'Completed'
                                ? 'bg-emerald-500 border-emerald-500 text-brand-text-primary'
                                : 'border-brand-border hover:border-brand-primary bg-transparent text-transparent'
                            }`}
                          >
                            {obj.status === 'Completed' && <Check className="h-3 w-3 stroke-[3]" />}
                          </button>
                          
                          <div className="min-w-0">
                            <p className={`text-xs truncate font-bold ${
                              obj.status === 'Completed' ? 'text-brand-text-secondary line-through' : 'text-brand-text-primary'
                            }`}>
                              {obj.title}
                            </p>
                            <span className="text-[9px] text-brand-text-secondary font-bold font-mono flex items-center gap-1.5 mt-0.5">
                              <span>{getTypeIcon(obj.taskType)} {obj.taskType || 'Due Date'}</span>
                              {obj.scheduledTime && (
                                <span className="flex items-center gap-0.5">
                                  <Clock className="h-2.5 w-2.5" /> {obj.scheduledTime}
                                </span>
                              )}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          <span className={`text-[8px] px-1.5 py-0.5 rounded font-black border ${getPriorityTagStyle(obj.priority)}`}>
                            {obj.priority}
                          </span>
                          <button
                            onClick={() => handleEditClick(obj)}
                            className="text-brand-text-secondary hover:text-brand-text-primary transition-colors cursor-pointer"
                            title="Edit task"
                          >
                            <Edit2 className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => onDeleteObjective(obj.id)}
                            className="text-brand-text-secondary hover:text-red-400 transition-colors cursor-pointer"
                            title="Delete task"
                          >
                            <Trash2 className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Missed Tasks Alert */}
              {getMissedTasks().length > 0 && (
                <div>
                  <div className="text-[10px] font-extrabold text-brand-danger uppercase tracking-wider mb-2.5 flex items-center gap-1 select-none">
                    <AlertTriangle className="h-3.5 w-3.5 stroke-[2.5]" /> Missed Backlog
                  </div>
                  <div className="space-y-2 mb-4">
                    {getMissedTasks().map((obj) => (
                      <div 
                        key={obj.id} 
                        className="flex items-center justify-between p-3 rounded-xl bg-brand-danger/10 border border-brand-danger/30 hover:border-brand-danger/30 transition-all group"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <button
                            onClick={() => onToggleObjective(obj.id)}
                            className="h-4.5 w-4.5 rounded-lg border border-brand-danger/30 hover:border-brand-danger flex items-center justify-center transition-all cursor-pointer flex-shrink-0 bg-transparent text-transparent"
                          >
                            <Check className="h-3 w-3 stroke-[3]" />
                          </button>
                          
                          <div className="min-w-0">
                            <p className="text-xs truncate font-bold text-brand-text-primary">
                              {obj.title}
                            </p>
                            <span className="text-[9px] text-brand-danger font-bold font-mono mt-0.5 block">
                              Due: {obj.dueDate || obj.scheduledDate}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          <button
                            onClick={() => onDeleteObjective(obj.id)}
                            className="text-brand-text-secondary hover:text-red-400 transition-colors cursor-pointer"
                          >
                            <Trash2 className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Upcoming Tasks */}
              {getUpcomingTasks().length > 0 && (
                <div>
                  <div className="text-[10px] font-extrabold text-brand-primary uppercase tracking-wider mb-2.5 select-none">
                    🚀 Upcoming Milestones
                  </div>
                  <div className="space-y-2">
                    {getUpcomingTasks().slice(0, 4).map((obj) => (
                      <div 
                        key={obj.id} 
                        className="flex items-center justify-between p-3 rounded-xl bg-brand-surface-secondary border border-brand-border hover:border-brand-border transition-all group"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <button
                            onClick={() => onToggleObjective(obj.id)}
                            className="h-4.5 w-4.5 rounded-lg border border-brand-border hover:border-brand-primary flex items-center justify-center transition-all cursor-pointer flex-shrink-0 bg-transparent text-transparent"
                          >
                            <Check className="h-3 w-3 stroke-[3]" />
                          </button>
                          
                          <div className="min-w-0">
                            <p className="text-xs truncate font-bold text-brand-text-secondary">
                              {obj.title}
                            </p>
                            <span className="text-[9px] text-brand-text-secondary font-bold font-mono mt-0.5 block">
                              {obj.dueDate || obj.scheduledDate}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          <span className={`text-[8px] px-1 py-0.5 rounded font-black border ${getPriorityTagStyle(obj.priority)}`}>
                            {obj.priority}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Inline Slot Creator Modal Dialog */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-sm glass-card p-6 bg-brand-surface border-brand-border space-y-4"
            >
              <div className="flex justify-between items-center pb-2 border-b border-brand-border">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-primary flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" /> Allocate New Task
                </h3>
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="text-xs font-bold text-brand-text-secondary hover:text-brand-text-primary uppercase tracking-wider cursor-pointer bg-transparent border-none outline-none"
                >
                  Cancel
                </button>
              </div>

              <div className="space-y-1 text-left select-none">
                <span className="text-[10px] font-mono text-brand-text-secondary font-bold">TARGET DATE</span>
                <p className="text-xs font-bold text-brand-text-primary font-mono">
                  {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
              </div>

              <form onSubmit={handleCreateTask} className="space-y-4">
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">Task Title</label>
                  <input
                    type="text"
                    required
                    placeholder="Input task objective..."
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 text-xs text-brand-text-primary placeholder-brand-text-muted focus:outline-none focus:border-brand-primary/30 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">Priority</label>
                    <select
                      value={newPriority}
                      onChange={(e) => setNewPriority(e.target.value as any)}
                      className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 text-xs text-brand-text-primary focus:outline-none focus:border-brand-primary/30 transition-colors"
                    >
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">Task Type</label>
                    <select
                      value={newType}
                      onChange={(e) => setNewType(e.target.value as any)}
                      className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 text-xs text-brand-text-primary focus:outline-none focus:border-brand-primary/30 transition-colors"
                    >
                      <option value="Due Date">Due Date</option>
                      <option value="Reminder">Reminder</option>
                      <option value="Repeat Schedule">Repeat Schedule</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">Schedule Time</label>
                  <input
                    type="time"
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                    className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 text-xs text-brand-text-primary focus:outline-none focus:border-brand-primary/30 transition-colors"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">Reminder Time</label>
                  <select
                    value={newReminderType}
                    onChange={(e) => setNewReminderType(e.target.value)}
                    className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 text-xs text-brand-text-primary focus:outline-none focus:border-brand-primary/30 transition-colors"
                  >
                    <option value="At Task Time">At Task Time</option>
                    <option value="10 Minutes Before">10 Minutes Before</option>
                    <option value="30 Minutes Before">30 Minutes Before</option>
                    <option value="1 Hour Before">1 Hour Before</option>
                    <option value="2 Hours Before">2 Hours Before</option>
                    <option value="Morning (8:00 AM)">Morning (8:00 AM)</option>
                    <option value="1 Day Before">1 Day Before</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-brand-primary hover:bg-brand-primary-hover text-white border-brand-primary text-xs font-bold rounded-xl transition-colors cursor-pointer select-none"
                >
                  Create Objective
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Edit Task Modal Dialog */}
      <AnimatePresence>
        {showEditModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-sm glass-card p-6 bg-brand-surface border-brand-border space-y-4"
            >
              <div className="flex justify-between items-center pb-2 border-b border-brand-border">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-primary flex items-center gap-1.5">
                  <Edit2 className="h-3.5 w-3.5" /> Modify Task
                </h3>
                <button 
                  onClick={() => setShowEditModal(null)}
                  className="text-xs font-bold text-brand-text-secondary hover:text-brand-text-primary uppercase tracking-wider cursor-pointer bg-transparent border-none outline-none"
                >
                  Cancel
                </button>
              </div>

              <form onSubmit={handleSaveEdit} className="space-y-4">
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">Task Title</label>
                  <input
                    type="text"
                    required
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 text-xs text-brand-text-primary focus:outline-none focus:border-brand-primary/30 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">Priority</label>
                    <select
                      value={editPriority}
                      onChange={(e) => setEditPriority(e.target.value as any)}
                      className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 text-xs text-brand-text-primary focus:outline-none focus:border-brand-primary/30 transition-colors"
                    >
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">Task Type</label>
                    <select
                      value={editType}
                      onChange={(e) => setEditType(e.target.value as any)}
                      className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 text-xs text-brand-text-primary focus:outline-none focus:border-brand-primary/30 transition-colors"
                    >
                      <option value="Due Date">Due Date</option>
                      <option value="Reminder">Reminder</option>
                      <option value="Repeat Schedule">Repeat Schedule</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">Due Date</label>
                    <input
                      type="date"
                      value={editDate}
                      onChange={(e) => setEditDate(e.target.value)}
                      className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 text-xs text-brand-text-primary focus:outline-none focus:border-brand-primary/30 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">Schedule Time</label>
                    <input
                      type="time"
                      value={editTime}
                      onChange={(e) => setEditTime(e.target.value)}
                      className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 text-xs text-brand-text-primary focus:outline-none focus:border-brand-primary/30 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">Reminder Time</label>
                  <select
                    value={editReminderType}
                    onChange={(e) => setEditReminderType(e.target.value)}
                    className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 text-xs text-brand-text-primary focus:outline-none focus:border-brand-primary/30 transition-colors"
                  >
                    <option value="At Task Time">At Task Time</option>
                    <option value="10 Minutes Before">10 Minutes Before</option>
                    <option value="30 Minutes Before">30 Minutes Before</option>
                    <option value="1 Hour Before">1 Hour Before</option>
                    <option value="2 Hours Before">2 Hours Before</option>
                    <option value="Morning (8:00 AM)">Morning (8:00 AM)</option>
                    <option value="1 Day Before">1 Day Before</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-brand-primary hover:bg-brand-primary-hover text-brand-text-primary text-xs font-bold rounded-xl transition-colors cursor-pointer select-none"
                >
                  Save Changes
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
