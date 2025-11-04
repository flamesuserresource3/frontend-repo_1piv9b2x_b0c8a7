import React from 'react';
import { User } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid sm:grid-cols-[160px,1fr] gap-8 items-center">
        <div className="flex justify-center sm:justify-start">
          <div className="size-32 rounded-2xl bg-gradient-to-br from-rose-200 via-sky-200 to-violet-200 flex items-center justify-center shadow-sm">
            <User className="text-slate-700" size={36} />
          </div>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">About Me</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            I create thoughtful digital experiences with a focus on clarity and calm aesthetics. I enjoy blending design and engineering to build products that feel intuitive and look beautiful.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {['Design Systems', 'React', 'TypeScript', 'FastAPI', 'UX Writing'].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/60 bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-700 shadow-sm"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
