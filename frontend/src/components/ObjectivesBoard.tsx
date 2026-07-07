import React, { useState } from 'react';
import { Plus, Target, Trash2, CheckCircle2, Circle } from 'lucide-react';

interface Objective {
  id: string;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'In Progress' | 'Completed';
}

export const ObjectivesBoard: React.FC = () => {
  const [objectives, setObjectives] = useState<Objective[]>([
    { id: '1', title: 'Connect local database endpoints', priority: 'High', status: 'In Progress' }
  ]);
  const [newTitle, setNewTitle] = useState('');
  const [priority, setPriority] = useState<'High' | 'Medium' | 'Low'>('Medium');

  const addObjective = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const target: Objective = {
      id: Date.now().toString(),
      title: newTitle.trim(),
      priority,
      status: 'In Progress'
    };

    setObjectives([...objectives, target]);
    setNewTitle('');
  };

  const toggleObjective = (id: string) => {
    setObjectives(objectives.map(obj => 
      obj.id === id ? { ...obj, status: obj.status === 'Completed' ? 'In Progress' : 'Completed' } : obj
    ));
  };

  const deleteObjective = (id: string) => {
    setObjectives(objectives.filter(obj => obj.id !== id));
  };

  const priorityColors = {
    High: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    Medium: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    Low: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20'
  };

  return (
    <div className="glass-panel p-6 rounded-2xl border border-brand-border min-h-[160px] flex flex-col justify-between transition-all duration-300 hover:border-brand-border">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
            <Target className="h-3.5 w-3.5" /> Objectives
          </span>
          <span className="text-xs font-mono text-brand-text-secondary">
            {objectives.filter(o => o.status === 'Completed').length} Cleared
          </span>
        </div>

        {/* Dynamic Targets List */}
        <div className="space-y-2 max-h-[180px] overflow-y-auto pr-1">
          {objectives.length === 0 ? (
            <p className="text-sm text-brand-text-secondary mt-4 italic">No active targets loaded...</p>
          ) : (
            objectives.map((obj) => (
              <div 
                key={obj.id}
                className="flex items-center justify-between p-2 rounded-xl bg-brand-surface-secondary border border-brand-border group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <button 
                    onClick={() => toggleObjective(obj.id)}
                    className="text-brand-text-secondary hover:text-emerald-400 transition-colors cursor-pointer flex-shrink-0"
                  >
                    {obj.status === 'Completed' ? (
                      <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" />
                    ) : (
                      <Circle className="h-4.5 w-4.5 text-brand-text-secondary" />
                    )}
                  </button>
                  <span className={`text-sm truncate ${obj.status === 'Completed' ? 'text-brand-text-secondary line-through' : 'text-brand-text-primary'}`}>
                    {obj.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${priorityColors[obj.priority]}`}>
                    {obj.priority}
                  </span>
                  <button
                    onClick={() => deleteObjective(obj.id)}
                    className="text-brand-text-secondary hover:text-rose-400 opacity-0 group-hover:opacity-100 p-1 transition-all cursor-pointer"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Input Creation Form Container */}
      <form onSubmit={addObjective} className="mt-4 flex gap-2">
        <input 
          type="text" 
          placeholder="Deploy active target..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="flex-1 bg-brand-bg border border-brand-border rounded-xl px-3 py-1.5 text-xs text-brand-text-primary placeholder-brand-text-muted focus:outline-none focus:border-amber-500/50 transition-colors"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as any)}
          className="bg-brand-bg border border-brand-border rounded-xl px-2 py-1.5 text-xs text-brand-text-secondary focus:outline-none focus:border-amber-500/50 cursor-pointer"
        >
          <option value="High">High</option>
          <option value="Medium">Med</option>
          <option value="Low">Low</option>
        </select>
        <button 
          type="submit"
          className="p-1.5 rounded-xl bg-brand-bg border border-brand-border text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-surface-secondary transition-colors cursor-pointer"
        >
          <Plus className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
};