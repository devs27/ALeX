import React from 'react';
import { Compass, Search, Filter, ExternalLink, ShieldAlert } from 'lucide-react';
import AlexBrand from './AlexBrand';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-[#0B0F17] border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amrita-50 dark:bg-amrita-950/70 text-amrita-700 dark:text-rose-400 border border-amrita-200/60 dark:border-amrita-800/60">
            PORTAL OVERVIEW
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About ALeX
          </h2>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="shrink-0 p-3 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <AlexBrand size="lg" />
            </div>

            <div className="space-y-4 text-center sm:text-left">
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                ALeX — Amrita Lab Explorer is a centralized research-lab discovery portal designed to make it easier to explore research laboratories and centres at Amrita Vishwa Vidyapeetham, Chennai Campus.
              </p>
              
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Select a laboratory to learn more and visit its respective official or intranet webpage.
              </p>
            </div>
          </div>

          {/* Simple step-by-step navigation flow indicator */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-700/80">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 text-center sm:text-left">
              Primary Discovery Flow
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700/60">
                <div className="text-xs font-mono font-bold text-amrita-700 dark:text-rose-400 mb-1">01</div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Open ALeX</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Gateway portal</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700/60">
                <div className="text-xs font-mono font-bold text-amrita-700 dark:text-rose-400 mb-1">02</div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Search & Filter</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">By name or area</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700/60">
                <div className="text-xs font-mono font-bold text-amrita-700 dark:text-rose-400 mb-1">03</div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Select Lab</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Review lab focus</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700/60">
                <div className="text-xs font-mono font-bold text-amrita-700 dark:text-rose-400 mb-1">04</div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Visit Lab</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Official website</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
