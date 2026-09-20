import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, RotateCcw } from 'lucide-react';
import LabCard from './LabCard';

export default function LabGrid({ labs, onReset }) {
  if (labs.length === 0) {
    return (
      <div className="py-16 text-center max-w-md mx-auto">
        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-amrita-50 dark:bg-amrita-950/80 text-amrita-700 dark:text-rose-400 flex items-center justify-center">
          <AlertCircle className="w-7 h-7" />
        </div>
        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          No research labs found.
        </h4>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
          We couldn't find any laboratories matching your current search query or active category filter.
        </p>
        <button
          onClick={onReset}
          type="button"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-amrita-700 hover:bg-amrita-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-amrita-700/40"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset Search & Filters</span>
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <AnimatePresence>
        {labs.map((lab, index) => (
          <motion.div
            key={lab.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, delay: index * 0.03 }}
            className="h-full"
          >
            <LabCard lab={lab} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
