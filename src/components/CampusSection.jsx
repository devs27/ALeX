import React from 'react';
import { ExternalLink, MapPin, Award, BookOpen, GraduationCap } from 'lucide-react';

export default function CampusSection() {
  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-xl border border-slate-800">
        
        {/* Background Image Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80"
            alt="Amrita Vishwa Vidyapeetham Chennai Campus Environment"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950/80" />
        </div>

        <div className="relative p-8 sm:p-12 lg:p-16 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amrita-950/80 border border-amrita-800/80 text-rose-300 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Vengal, Chennai • Tamil Nadu</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Amrita Chennai Campus
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Discover the academic and research environment of Amrita Vishwa Vidyapeetham's Chennai Campus. Built with world-class computational infrastructure, advanced experimental arenas, and specialized research centres.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <GraduationCap className="w-5 h-5 text-rose-400 mb-2" />
              <div className="text-xs font-bold text-white uppercase tracking-wider">Academics</div>
              <div className="text-xs text-slate-300 mt-0.5">Multi-disciplinary engineering</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Award className="w-5 h-5 text-rose-400 mb-2" />
              <div className="text-xs font-bold text-white uppercase tracking-wider">Accreditation</div>
              <div className="text-xs text-slate-300 mt-0.5">NAAC A++ Graded University</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <BookOpen className="w-5 h-5 text-rose-400 mb-2" />
              <div className="text-xs font-bold text-white uppercase tracking-wider">Discovery</div>
              <div className="text-xs text-slate-300 mt-0.5">Focus on translational R&D</div>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="https://www.amrita.edu/campus/chennai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-amrita-700 hover:bg-amrita-800 shadow-lg hover:shadow-amrita-lg transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-rose-400"
            >
              <span>Visit Amrita Chennai</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
