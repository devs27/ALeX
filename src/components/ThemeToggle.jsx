import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      type="button"
      className="relative p-2 rounded-xl text-slate-600 hover:text-amrita-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-rose-400 dark:hover:bg-slate-800/80 transition-all duration-200 border border-slate-200/80 dark:border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-amrita-700/40"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-90" />
        ) : (
          <Moon className="w-5 h-5 text-slate-700 transition-transform duration-300 -rotate-12 hover:rotate-0" />
        )}
      </div>
    </button>
  );
}
