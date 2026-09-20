import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

export default function App() {
  // Theme state persisted in localStorage
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('alex_theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply dark mode class to root documentElement
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('alex_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('alex_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const handleSearchFocus = () => {
    const searchSection = document.getElementById('research-labs');
    if (searchSection) {
      const navOffset = 80;
      const elementPosition = searchSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setTimeout(() => {
      const input = document.getElementById('lab-search-input');
      if (input) input.focus();
    }, 400);
  };

  // Keyboard shortcut (Ctrl+K or Cmd+K) to focus search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        handleSearchFocus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#090D14] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onSearchClick={handleSearchFocus}
      />

      <div className="flex-1">
        <Home />
      </div>

      <Footer />
    </div>
  );
}
