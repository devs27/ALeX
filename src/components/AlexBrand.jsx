import React from 'react';

/**
 * ALeX Brand component displaying the user-provided official logo icon mark
 * with high-contrast, scalable responsive typography.
 */
export default function AlexBrand({ size = "md", showTagline = false, variant = "lockup" }) {
  const iconSizes = {
    sm: "h-8",
    md: "h-10",
    lg: "h-14",
    xl: "h-20"
  };

  const textSizes = {
    sm: { title: "text-lg", sub: "text-[9px]" },
    md: { title: "text-xl sm:text-2xl", sub: "text-[10px] sm:text-[11px]" },
    lg: { title: "text-2xl sm:text-3xl", sub: "text-xs" },
    xl: { title: "text-4xl sm:text-5xl", sub: "text-sm" }
  };

  const currentText = textSizes[size] || textSizes.md;
  const currentIconSize = iconSizes[size] || "h-10";

  if (variant === "full-image") {
    return (
      <div className="flex items-center gap-3 select-none">
        {/* Light theme */}
        <img
          src="/alex-logo-transparent.png"
          alt="ALeX — Amrita Lab Explorer"
          className={`${currentIconSize} w-auto object-contain dark:hidden transition-transform duration-200 hover:scale-105`}
        />
        {/* Dark theme */}
        <img
          src="/alex-logo-white.png"
          alt="ALeX — Amrita Lab Explorer"
          className={`${currentIconSize} w-auto object-contain hidden dark:block transition-transform duration-200 hover:scale-105`}
        />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 select-none group">
      {/* Newly provided standalone Orbital 'A' research emblem */}
      <div className="relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        {/* Light mode: Amrita maroon emblem */}
        <img
          src="/alex-icon-transparent.png"
          alt="ALeX Research Emblem"
          className={`${currentIconSize} w-auto object-contain dark:hidden drop-shadow-sm`}
        />
        {/* Dark mode: White/rose accented version with subtle soft glow */}
        <img
          src="/alex-icon-white.png"
          alt="ALeX Research Emblem"
          className={`${currentIconSize} w-auto object-contain hidden dark:block drop-shadow-[0_0_8px_rgba(244,63,94,0.3)]`}
        />
      </div>

      {/* Typography: ALeX & Amrita Lab Explorer */}
      <div className="flex flex-col text-left leading-none">
        <div className="flex items-baseline gap-1">
          <span className={`${currentText.title} font-extrabold tracking-tight text-amrita-700 dark:text-white transition-colors`}>
            AL<span className="text-rose-600 dark:text-rose-400">e</span>X
          </span>
        </div>
        <span className={`${currentText.sub} font-semibold tracking-wider text-slate-500 dark:text-slate-300 uppercase mt-0.5 whitespace-nowrap`}>
          Amrita Lab Explorer
        </span>
      </div>

      {showTagline && (
        <span className="hidden md:inline-block text-xs font-medium tracking-widest text-slate-400 dark:text-slate-500 uppercase border-l border-slate-300 dark:border-slate-700 pl-3 ml-1">
          Explore • Discover • Connect
        </span>
      )}
    </div>
  );
}
