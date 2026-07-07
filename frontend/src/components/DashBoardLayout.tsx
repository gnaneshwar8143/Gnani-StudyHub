import React from 'react';
import { LayoutDashboard, Target, Activity, Calendar, User, LogOut, Zap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  activeTab,
  setActiveTab,
}) => {
  const { user, logout } = useAuth();
  const displayName = user?.name?.split(' ')[0]?.toLowerCase() || 'nani';
  const initials = user?.name
    ? user.name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()
    : 'NA';

  const navigation = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'goals', name: 'Goals Board', icon: Target },
    { id: 'habits', name: 'Habit Matrix', icon: Activity },
    { id: 'calendar', name: 'Calendar Feed', icon: Calendar },
    { id: 'profile', name: 'Profile Hub', icon: User },
  ];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#f4f5f7] text-zinc-900 font-sans antialiased">
      {/* Sidebar */}
      <aside className="w-60 border-r border-zinc-200/80 bg-white flex flex-col justify-between p-5 flex-shrink-0 z-10 shadow-sm">
        <div className="space-y-7">
          {/* Brand */}
          <div className="flex items-center gap-2.5 px-1">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-[#6366f1] to-[#7c5cff] flex items-center justify-center shadow-md shadow-indigo-200">
              <Zap className="h-4 w-4 text-white fill-white" />
            </div>
            <span className="font-bold tracking-tight text-lg text-zinc-900">
              GNANI
            </span>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 relative cursor-pointer ${
                    isActive
                      ? 'bg-[#7c5cff]/10 text-[#7c5cff]'
                      : 'text-zinc-500 hover:text-zinc-800 hover:bg-zinc-50'
                  }`}
                >
                  <item.icon className={`h-4 w-4 flex-shrink-0 ${isActive ? 'text-[#7c5cff]' : 'text-zinc-400'}`} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="space-y-4">
          {/* Motivational card */}
          <div className="rounded-2xl bg-gradient-to-br from-[#7c5cff]/8 to-[#a78bfa]/10 border border-[#7c5cff]/10 p-4">
            <div className="text-2xl mb-2">🪴</div>
            <p className="text-xs text-zinc-600 leading-relaxed font-medium">
              Keep going, {displayName}! Small steps every day lead to big changes. 😊
            </p>
          </div>

          {/* User profile */}
          <div className="pt-4 border-t border-zinc-100 space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#7c5cff] to-[#6366f1] flex items-center justify-center font-bold text-xs text-white flex-shrink-0">
                {initials}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold truncate text-zinc-900">{displayName}</p>
                <span className="text-[10px] font-semibold text-[#7c5cff] bg-[#7c5cff]/10 px-2 py-0.5 rounded-full">
                  Level 12
                </span>
              </div>
              <button
                onClick={logout}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-red-500 hover:bg-red-50 transition-all cursor-pointer"
                title="Log out"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-medium text-zinc-400">
                <span>750 / 1000 XP</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-[#7c5cff] to-[#a78bfa] rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto relative p-6 md:p-8 z-10 custom-scrollbar">
        <div className="max-w-[1400px] mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
};
