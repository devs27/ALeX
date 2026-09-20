import React from 'react';
import { Building2, Network, MapPin, Compass } from 'lucide-react';

export default function ResearchStats() {
  const stats = [
    {
      label: "Research Labs & Centres",
      value: "16+",
      subtext: "Dedicated research spaces",
      icon: Building2
    },
    {
      label: "Research Domains",
      value: "Multiple",
      subtext: "AI, Computing, Nanotech & more",
      icon: Network
    },
    {
      label: "Campus Location",
      value: "Chennai",
      subtext: "Vengal, Tamil Nadu",
      icon: MapPin
    },
    {
      label: "Institutional Discovery",
      value: "Unified",
      subtext: "One portal for all labs",
      icon: Compass
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-amrita-300 dark:hover:border-amrita-800 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-amrita-50 dark:bg-amrita-950/80 text-amrita-700 dark:text-rose-400">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  {stat.value}
                </div>
              </div>
              <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.subtext}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
