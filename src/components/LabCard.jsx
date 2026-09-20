import React from 'react';
import { ExternalLink, Globe, Lock, ArrowUpRight } from 'lucide-react';

export default function LabCard({ lab }) {
  const hasValidUrl = Boolean(lab.url);

  const CardWrapper = ({ children }) => {
    if (hasValidUrl) {
      return (
        <a
          href={lab.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${lab.shortName} official website`}
          className="group block h-full focus:outline-none focus:ring-2 focus:ring-amrita-700/60 rounded-2xl"
        >
          {children}
        </a>
      );
    }
    return (
      <div className="group block h-full">
        {children}
      </div>
    );
  };

  return (
    <CardWrapper>
      <div className="h-full flex flex-col rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:border-amrita-600/40 dark:hover:border-amrita-500/40 transition-all duration-300 transform group-hover:-translate-y-1.5 overflow-hidden">
        
        {/* Lab Header Image */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img
            src={lab.image}
            alt={`${lab.name} laboratory at Amrita Chennai`}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Acronym Badge on Image */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className="px-2.5 py-1 rounded-lg text-xs font-black tracking-wider uppercase bg-amrita-700/95 text-white shadow-md backdrop-blur-sm">
              {lab.shortName}
            </span>
          </div>

          {/* URL Status Indicator */}
          <div className="absolute top-3 right-3">
            {hasValidUrl ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/90 text-white backdrop-blur-sm shadow-sm">
                <Globe className="w-3 h-3" />
                <span>Verified</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-900/70 text-slate-200 backdrop-blur-sm">
                <Lock className="w-3 h-3" />
                <span>Campus Lab</span>
              </span>
            )}
          </div>

          {/* Category Tag directly under the image banner */}
          <div className="absolute bottom-3 left-3">
            <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white/95 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 shadow-sm backdrop-blur-sm">
              {lab.category}
            </span>
          </div>
        </div>

        {/* Lab Details */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-amrita-700 dark:group-hover:text-rose-400 transition-colors">
              {lab.name}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
              {lab.description}
            </p>
          </div>

          {/* Card Footer: Action button / status */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
            {hasValidUrl ? (
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amrita-700 dark:text-rose-400 group-hover:underline">
                <span>Visit Lab</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 dark:text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                <span>Website link unavailable</span>
              </span>
            )}

            <span className="text-[10px] font-mono text-slate-400 uppercase">
              CHENNAI
            </span>
          </div>

        </div>
      </div>
    </CardWrapper>
  );
}
