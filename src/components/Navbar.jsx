import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Compass, ExternalLink } from 'lucide-react';
import AlexBrand from './AlexBrand';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ isDark, onToggleTheme, onSearchClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 bg-white/90 dark:bg-[#090D14]/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80'
          : 'py-4 bg-white/70 dark:bg-[#090D14]/70 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* LEFT: ALeX Brand */}
          <div className="flex items-center shrink-0">
            <a href="#" className="flex items-center focus:outline-none" aria-label="ALeX Home">
              <AlexBrand size="md" />
            </a>
          </div>

          {/* CENTER: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
            <button
              onClick={() => scrollToSection('home')}
              className="px-3 py-1.5 rounded-lg hover:text-amrita-700 dark:hover:text-rose-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('research-labs')}
              className="px-3 py-1.5 rounded-lg hover:text-amrita-700 dark:hover:text-rose-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 transition-colors"
            >
              Research Labs
            </button>
            <button
              onClick={() => scrollToSection('research-areas')}
              className="px-3 py-1.5 rounded-lg hover:text-amrita-700 dark:hover:text-rose-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 transition-colors"
            >
              Research Areas
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-3 py-1.5 rounded-lg hover:text-amrita-700 dark:hover:text-rose-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 transition-colors"
            >
              About
            </button>
          </nav>

          {/* RIGHT: Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search trigger */}
            <button
              onClick={onSearchClick}
              type="button"
              className="p-2 text-slate-600 hover:text-amrita-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-rose-400 dark:hover:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700/60 transition-colors"
              title="Search laboratories (Ctrl + K)"
              aria-label="Search laboratories"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Theme Toggle */}
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

            {/* Primary CTA button */}
            <button
              onClick={() => scrollToSection('research-labs')}
              type="button"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-amrita-700 hover:bg-amrita-800 active:bg-amrita-900 shadow-sm transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amrita-700/40"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Labs</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-3 pb-4 border-t border-slate-200/80 dark:border-slate-800 mt-2 space-y-1 animate-fadeIn">
            <button
              onClick={() => scrollToSection('home')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('research-labs')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Research Labs
            </button>
            <button
              onClick={() => scrollToSection('research-areas')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Research Areas
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              About ALeX
            </button>
            <div className="pt-2">
              <button
                onClick={() => scrollToSection('research-labs')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-amrita-700 hover:bg-amrita-800"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Research Labs</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
