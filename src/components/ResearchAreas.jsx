import React from 'react';
import {
  BrainCircuit,
  Cpu,
  ShieldAlert,
  Bot,
  CircuitBoard,
  Binary,
  Radio,
  Activity,
  Atom,
  Boxes,
  Layers,
  ArrowRight
} from 'lucide-react';
import { RESEARCH_AREAS } from '../data/researchAreas';

const iconMap = {
  BrainCircuit,
  Cpu,
  ShieldAlert,
  Bot,
  CircuitBoard,
  Binary,
  Radio,
  Activity,
  Atom,
  Boxes,
  Layers
};

export default function ResearchAreas({ onSelectArea }) {
  return (
    <section id="research-areas" className="py-16 sm:py-20 bg-slate-100/70 dark:bg-[#0E1420]/70 border-y border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amrita-50 dark:bg-amrita-950/70 text-amrita-700 dark:text-rose-400 border border-amrita-200/60 dark:border-amrita-800/60">
            DISCIPLINES & DOMAINS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Research Areas
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 font-normal">
            Amrita Chennai conducts cross-disciplinary research across leading engineering and technological specializations. Click any area to explore its affiliated laboratories.
          </p>
        </div>

        {/* Areas Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {RESEARCH_AREAS.map((area) => {
            const IconComponent = iconMap[area.iconName] || Layers;

            return (
              <button
                key={area.id}
                onClick={() => onSelectArea(area.categoryFilter)}
                type="button"
                className="group text-left p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-lg hover:border-amrita-500/60 dark:hover:border-amrita-500/60 transition-all duration-200 flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-amrita-700/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-amrita-50 dark:bg-amrita-950/80 border border-amrita-100 dark:border-amrita-900/60 text-amrita-700 dark:text-rose-400 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-amrita-700 dark:group-hover:text-rose-400 transition-colors">
                      {area.highlight}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amrita-700 dark:group-hover:text-rose-400 transition-colors">
                    {area.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-semibold text-amrita-700 dark:text-rose-400">
                  <span>Explore Labs</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
