import React from 'react';
import { LayoutDashboard, Target, Activity, Calendar, User, LogOut, Sun, Moon, Monitor, Globe } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from '../context/I18nContext';
import { motion } from 'framer-motion';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  stats: {
    xp: number;
    studyTime: number;
    focusScore: number;
    totalSessions: number;
    totalCompletedTasks: number;
  };
  maxStreak: number;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  activeTab,
  setActiveTab,
  stats,
  maxStreak,
}) => {
  const { user, logout } = useAuth();
  const { t, language, changeLanguage } = useTranslation();
  const { theme, setTheme } = useTheme();
  const displayName = user?.name?.split(' ')[0]?.toLowerCase() || 'nani';
  const initials = user?.name
    ? user.name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()
    : 'NA';
  
  const level = Math.floor(stats.xp / 1000) + 1;

  const navigation = [
    { id: 'dashboard', name: t('nav.dashboard'), icon: LayoutDashboard },
    { id: 'goals', name: t('nav.goals'), icon: Target },
    { id: 'habits', name: t('nav.habits'), icon: Activity },
    { id: 'calendar', name: t('nav.calendar'), icon: Calendar },
    { id: 'profile', name: t('nav.profile'), icon: User },
  ];

  return (
    <div className="flex h-screen bg-brand-bg text-brand-text-primary overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-brand-border bg-brand-sidebar flex flex-col justify-between p-5 flex-shrink-0 z-10">
        <div>
          {/* Brand */}
          <div className="flex justify-center select-none mb-8">
            <img src="/gnani-logo.png" alt="Gnani Logo" className="h-[52px] w-[52px] object-contain drop-shadow-sm" />
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navigation.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3.5 px-4 py-3 text-sm font-semibold rounded-2xl transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-brand-sidebar-active text-brand-primary shadow-sm'
                      : 'text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-sidebar-hover'
                  }`}
                >
                  <item.icon className={`h-5 w-5 flex-shrink-0 ${isActive ? 'text-brand-primary' : 'text-brand-text-secondary group-hover:text-brand-primary'}`} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="space-y-5">
          {/* User profile premium card */}
          <div className="p-4 rounded-2xl border border-brand-border bg-brand-surface space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-brand-primary flex items-center justify-center font-bold text-sm text-brand-text-primary border-2 border-brand-card shadow-sm select-none">
                  {initials}
                </div>
                <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-brand-success border-2 border-brand-card rounded-full" title="Online"></div>
              </div>
              <div className="min-w-0 flex-1 text-left">
                <p className="text-sm font-bold truncate text-brand-text-primary capitalize">{displayName}</p>
                <p className="text-[10px] font-semibold text-brand-text-secondary uppercase tracking-wider">{t('sidebar.lvl')} {level} {t('sidebar.student')}</p>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-[10px] font-bold text-brand-text-secondary">
                <span>{t('sidebar.xp')}</span>
                <span className="text-brand-primary">{stats.xp % 1000} / 1000</span>
              </div>
              <div className="h-1.5 w-full bg-brand-border rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(stats.xp % 1000) / 10}%` }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full bg-brand-primary rounded-full"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-brand-divider">
              <div className="text-left">
                <p className="text-[9px] text-brand-text-secondary font-bold uppercase tracking-wider">{t('sidebar.streak')}</p>
                <p className="text-xs font-black text-brand-text-primary flex items-center gap-1">🔥 {maxStreak} {t('sidebar.days')}</p>
              </div>
              <div className="text-left">
                <p className="text-[9px] text-brand-text-secondary font-bold uppercase tracking-wider">{t('sidebar.study')}</p>
                <p className="text-xs font-black text-brand-text-primary flex items-center gap-1">⏱️ {(stats.studyTime / 3600).toFixed(1)} {t('sidebar.hours')}</p>
              </div>
            </div>

            {/* Language Switcher Dropdown */}
            <div className="pt-2 mt-1 border-t border-brand-divider flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-brand-text-secondary">
                <Globe className="h-3.5 w-3.5" />
                <span className="text-[9px] font-bold uppercase tracking-wider">{t('profile.appearance.lang')}</span>
              </div>
              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value as any)}
                className="bg-brand-surface border border-brand-border text-[11px] rounded-lg px-2 py-0.5 focus:outline-none focus:ring-1 focus:ring-brand-primary text-brand-text-primary cursor-pointer"
              >
                <option value="en">English</option>
                <option value="te">తెలుగు</option>
                <option value="hi">हिन्दी</option>
                <option value="fr">Français</option>
              </select>
            </div>

            {/* Actions: Theme Switcher & Logout */}
            <div className="pt-3 mt-1 border-t border-brand-divider flex justify-between items-center">
              <div className="flex bg-brand-surface-secondary border border-brand-border rounded-xl p-1">
                <button
                  onClick={() => setTheme('light')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${theme === 'light' ? 'bg-brand-card shadow-sm text-brand-primary' : 'text-brand-text-muted hover:text-brand-text-primary'}`}
                  title="Light Theme"
                >
                  <Sun className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setTheme('system')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${theme === 'system' ? 'bg-brand-card shadow-sm text-brand-primary' : 'text-brand-text-muted hover:text-brand-text-primary'}`}
                  title="System Theme"
                >
                  <Monitor className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${theme === 'dark' ? 'bg-brand-card shadow-sm text-brand-primary' : 'text-brand-text-muted hover:text-brand-text-primary'}`}
                  title="Dark Theme"
                >
                  <Moon className="h-3.5 w-3.5" />
                </button>
              </div>
              <button
                onClick={logout}
                className="p-2 rounded-xl text-brand-text-secondary hover:text-brand-danger hover:bg-brand-danger/10 transition-all cursor-pointer"
                title="Log out"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto relative p-6 md:p-8 lg:p-10 z-10 custom-scrollbar bg-brand-bg">
        <div className="max-w-[1400px] mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
};
