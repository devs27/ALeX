import React from 'react';

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  categoryCounts
}) {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2">
      <div className="flex items-center gap-2 min-w-max pb-1">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          const count = categoryCounts[cat] || 0;

          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              type="button"
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-amrita-700/40 ${
                isSelected
                  ? 'bg-amrita-700 text-white shadow-sm shadow-amrita-700/30 ring-1 ring-amrita-700'
                  : 'bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/80'
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full font-mono font-bold ${
                  isSelected
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
