import React from 'react';

/**
 * Amrita Vishwa Vidyapeetham institutional logo mark.
 * Colors: Pantone 7426 C (#A4123F AM Maroon) and pristine white / slate.
 */
export default function AmritaLogo({ className = "h-10", variant = "full" }) {
  return (
    <a
      href="https://www.amrita.edu/campus/chennai/"
      target="_blank"
      rel="noopener noreferrer"
      title="Amrita Vishwa Vidyapeetham — Chennai Campus"
      className="inline-flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-amrita-700/50 rounded-lg p-1 transition-opacity hover:opacity-90"
    >
      {/* Institutional Crest Icon */}
      <svg
        viewBox="0 0 100 100"
        className={`${className} aspect-square shrink-0`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer Circular Shield */}
        <circle cx="50" cy="50" r="46" fill="#A4123F" stroke="#881337" strokeWidth="2" />
        
        {/* Inner Halo */}
        <circle cx="50" cy="50" r="41" stroke="#FCE7EB" strokeWidth="1.5" strokeDasharray="3 2" />

        {/* Sacred Flame / Sun rays motif */}
        <path
          d="M50 18C50 18 53 28 60 30C67 32 74 34 68 40C62 46 62 52 62 58C62 66 50 72 50 72C50 72 38 66 38 58C38 52 38 46 32 40C26 34 33 32 40 30C47 28 50 18 50 18Z"
          fill="#FFFFFF"
        />

        {/* Inner Lotus Core */}
        <path
          d="M50 36C52 42 56 46 56 50C56 54 53 58 50 62C47 58 44 54 44 50C44 46 48 42 50 36Z"
          fill="#A4123F"
        />

        {/* Radiance Spire */}
        <circle cx="50" cy="23" r="3.5" fill="#FFE4E6" />

        {/* Knowledge Base Arch */}
        <path
          d="M32 72C38 76 62 76 68 72"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {variant === "full" && (
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[11px] sm:text-xs font-black tracking-widest text-amrita-700 dark:text-rose-400 uppercase font-serif">
            AMRITA
          </span>
          <span className="text-[9px] sm:text-[10px] font-medium tracking-wide text-slate-600 dark:text-slate-300">
            Vishwa Vidyapeetham
          </span>
          <span className="text-[8px] sm:text-[9px] font-semibold text-amrita-600/80 dark:text-rose-400/80 uppercase tracking-wider">
            Chennai Campus
          </span>
        </div>
      )}
    </a>
  );
}
