import React from 'react';
import { ExternalLink, ArrowUp, Heart } from 'lucide-react';
import AlexBrand from './AlexBrand';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id) => {
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
    <footer className="bg-slate-900 text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand and Institution Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center">
              <AlexBrand size="md" />
            </div>

            <div className="space-y-1 text-sm text-slate-300">
              <p className="font-bold text-white tracking-wide">
                AMRITA VISHWA VIDYAPEETHAM
              </p>
              <p className="text-rose-400 font-semibold text-xs tracking-wider uppercase">
                Chennai Campus
              </p>
              <p className="text-xs text-slate-400">
                337/1A, Vengal, Thiruvallur Taluk & District, Tamil Nadu 601103
              </p>
            </div>

            <p className="text-xs text-slate-400 max-w-md pt-2">
              ALeX is a research laboratory discovery portal for students, researchers, and academic visitors at Amrita Chennai.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-rose-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('research-labs')}
                  className="hover:text-rose-400 transition-colors"
                >
                  Research Labs & Centres
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('research-areas')}
                  className="hover:text-rose-400 transition-colors"
                >
                  Research Areas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-rose-400 transition-colors"
                >
                  About ALeX
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional Links & Verified Endpoints */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Institutional Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a
                  href="https://www.amrita.edu/campus/chennai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-rose-400 transition-colors"
                >
                  <span>Amrita Chennai Official</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://intranet.ch.amrita.edu/negces/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-rose-400 transition-colors text-rose-300 font-medium"
                >
                  <span>NEGCES Lab Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.amrita.edu/research/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-rose-400 transition-colors"
                >
                  <span>Amrita Research Directory</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                type="button"
                className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Footer Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© 2026 ALeX • Amrita Lab Explorer.</p>
            <p className="mt-1 text-slate-500">
              External links open the respective laboratory websites. ALeX is an academic navigation project and does not claim official Amrita ownership.
            </p>
          </div>

          <div className="text-right shrink-0">
            <span className="font-mono text-slate-500">
              Explore. Discover. Connect.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
