import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Sparkles, BookOpen, Layers, ShieldCheck, Microscope, Cpu } from 'lucide-react';

export default function Hero({ onExploreLabs, onExploreAreas }) {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#090D14] dark:via-[#0F1420] dark:to-[#090D14]">
      {/* Subtle institutional decorative background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full glow-spot blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full glow-spot blur-3xl opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Institutional Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amrita-50 dark:bg-amrita-950/60 border border-amrita-200/60 dark:border-amrita-800/60 text-amrita-800 dark:text-amrita-300 text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-amrita-700 dark:bg-rose-500 animate-pulse" />
              <span>AMRITA VISHWA VIDYAPEETHAM • CHENNAI CAMPUS</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Explore Research at{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amrita-700 via-rose-700 to-amrita-800 dark:from-rose-400 dark:via-pink-400 dark:to-rose-300">
                Amrita Chennai
              </span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Discover research laboratories, centres of excellence, and advanced facilities across the campus.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreLabs}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-amrita-700 hover:bg-amrita-800 active:bg-amrita-900 shadow-amrita hover:shadow-amrita-lg transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amrita-700/50"
              >
                <Compass className="w-5 h-5" />
                <span>Explore Research Labs</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreAreas}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/90 hover:bg-slate-50 dark:hover:bg-slate-700/90 border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                <Layers className="w-5 h-5 text-amrita-700 dark:text-rose-400" />
                <span>Explore Research Areas</span>
              </button>
            </div>

            {/* Subtle verification badge */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Verified directory for Chennai Campus academic & research labs</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Research Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer frame container */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-br from-amrita-700/20 via-slate-200 dark:via-slate-800 to-amrita-800/30 shadow-2xl">
                <div className="rounded-[14px] overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  
                  {/* Hero card header */}
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="ml-2 text-xs font-semibold text-slate-500 dark:text-slate-400">ALeX Research Portal</span>
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-amrita-100 dark:bg-amrita-950 text-amrita-800 dark:text-amrita-300">
                      16 Laboratories
                    </span>
                  </div>

                  {/* Main Visual Image: Campus & Advanced Research imagery */}
                  <div className="relative h-64 sm:h-72 overflow-hidden group">
                    <img
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
                      alt="Amrita Research and Engineering Facility"
                      className="w-full h-full object-fit object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-rose-300 mb-1">
                        CENTRALIZED DIRECTORY
                      </span>
                      <h2 className="text-base sm:text-lg font-bold">Amrita Vishwa Vidyapeetham</h2>
                      <p className="text-xs text-slate-200 line-clamp-1">
                        High-precision computing, robotics, cybersecurity, & materials science
                      </p>
                    </div>
                  </div>

                  {/* Quick Feature highlights inside hero card */}
                  <div className="p-4 grid grid-cols-2 gap-3 bg-white dark:bg-slate-900 text-xs">
                    <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                      <Cpu className="w-4 h-4 text-amrita-700 dark:text-rose-400 shrink-0" />
                      <span className="font-medium text-slate-700 dark:text-slate-300">Advanced Computing</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                      <Microscope className="w-4 h-4 text-amrita-700 dark:text-rose-400 shrink-0" />
                      <span className="font-medium text-slate-700 dark:text-slate-300">Nano & Materials</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating interactive badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 p-3.5 rounded-xl bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amrita-100 dark:bg-amrita-950 flex items-center justify-center text-amrita-700 dark:text-rose-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Explore. Discover. Connect.</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Direct portal to official websites</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
