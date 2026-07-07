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
    <div className="glass-panel p-6 rounded-2xl border border-white/[0.06] min-h-[160px] flex flex-col justify-between transition-all duration-300 hover:border-white/[0.12]">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
            <Target className="h-3.5 w-3.5" /> Objectives
          </span>
          <span className="text-xs font-mono text-zinc-500">
            {objectives.filter(o => o.status === 'Completed').length} Cleared
          </span>
        </div>

        {/* Dynamic Targets List */}
        <div className="space-y-2 max-h-[180px] overflow-y-auto pr-1">
          {objectives.length === 0 ? (
            <p className="text-sm text-zinc-600 mt-4 italic">No active targets loaded...</p>
          ) : (
            objectives.map((obj) => (
              <div 
                key={obj.id}
                className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/[0.04] group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <button 
                    onClick={() => toggleObjective(obj.id)}
                    className="text-zinc-500 hover:text-emerald-400 transition-colors cursor-pointer flex-shrink-0"
                  >
                    {obj.status === 'Completed' ? (
                      <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" />
                    ) : (
                      <Circle className="h-4.5 w-4.5 text-zinc-600" />
                    )}
                  </button>
                  <span className={`text-sm truncate ${obj.status === 'Completed' ? 'text-zinc-600 line-through' : 'text-zinc-200'}`}>
                    {obj.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${priorityColors[obj.priority]}`}>
                    {obj.priority}
                  </span>
                  <button
                    onClick={() => deleteObjective(obj.id)}
                    className="text-zinc-600 hover:text-rose-400 opacity-0 group-hover:opacity-100 p-1 transition-all cursor-pointer"
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
          className="flex-1 bg-zinc-950 border border-white/[0.06] rounded-xl px-3 py-1.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 transition-colors"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as any)}
          className="bg-zinc-950 border border-white/[0.06] rounded-xl px-2 py-1.5 text-xs text-zinc-400 focus:outline-none focus:border-amber-500/50 cursor-pointer"
        >
          <option value="High">High</option>
          <option value="Medium">Med</option>
          <option value="Low">Low</option>
        </select>
        <button 
          type="submit"
          className="p-1.5 rounded-xl bg-zinc-900 border border-white/[0.06] text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          <Plus className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
};