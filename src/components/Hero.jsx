import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative w-full h-[80vh] sm:h-[85vh] lg:h-[90vh] overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-rose-50/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto w-full px-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-700 border border-white/60 shadow-sm">
            <Sparkles size={14} />
            <span>Pastel, minimalist, fintech-inspired</span>
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Personal Landing Page
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-700">
            Clean, modern, and friendly. A soft pastel theme with a playful 3D touch to introduce who I am and what I do.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-violet-600 text-white px-5 py-2.5 shadow-sm hover:bg-violet-700 transition-colors"
            >
              <Rocket size={18} />
              <span>See my work</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur text-slate-900 px-5 py-2.5 border border-white/60 hover:bg-white transition-colors"
            >
              <span>Get in touch</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
