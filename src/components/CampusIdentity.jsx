import React from 'react';

export default function CampusIdentity() {
  return (
    <div className="w-full bg-amrita-900 text-white py-3.5 px-4 border-y border-amrita-800 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-rose-400 shrink-0" />
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase">
            AMRITA VISHWA VIDYAPEETHAM
          </span>
          <span className="text-rose-300/70 font-light">|</span>
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-rose-200">
            CHENNAI CAMPUS
          </span>
        </div>

        <div className="text-[11px] sm:text-xs font-medium tracking-wide text-rose-100/90 flex items-center gap-2">
          <span>Research</span>
          <span>•</span>
          <span>Innovation</span>
          <span>•</span>
          <span>Engineering</span>
          <span>•</span>
          <span>Technology</span>
        </div>
      </div>
    </div>
  );
}
