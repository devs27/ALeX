import React from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar({ value, onChange, onClear, totalMatches, totalLabs }) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
          <Search className="w-5 h-5" />
        </div>

        <input
          id="lab-search-input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search research labs by name, acronym, category, or domain..."
          className="w-full pl-11 pr-24 py-3.5 text-sm sm:text-base rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-amrita-700/50 focus:border-amrita-700 dark:focus:border-rose-500 transition-all"
        />

        <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-2">
          {value && (
            <button
              onClick={onClear}
              type="button"
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              title="Clear search"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <span className="hidden sm:inline-block px-2 py-1 text-xs font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-700/60 rounded-md border border-slate-200 dark:border-slate-700">
            {totalMatches} / {totalLabs}
          </span>
        </div>
      </div>
    </div>
  );
}
