import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Card Commerce UI',
    desc: 'Elegant checkout flow with a focus on clarity and trust.',
    link: '#',
    tone: 'from-rose-200 to-rose-100',
  },
  {
    title: 'Personal Finance Dash',
    desc: 'Minimalist insights and budgeting with a pastel palette.',
    link: '#',
    tone: 'from-sky-200 to-sky-100',
  },
  {
    title: 'Portfolio System',
    desc: 'Showcase engine with smooth motion and tidy typography.',
    link: '#',
    tone: 'from-violet-200 to-violet-100',
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center gap-3">
        <div className="size-9 rounded-xl bg-gradient-to-br from-violet-200 to-rose-200 flex items-center justify-center">
          <Briefcase size={18} className="text-slate-700" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Selected Work</h2>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            className={`group rounded-2xl bg-gradient-to-br ${p.tone} p-0.5 shadow-sm border border-white/60`}
          >
            <div className="rounded-2xl bg-white/70 backdrop-blur p-5 h-full">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <ExternalLink size={18} className="text-slate-500 group-hover:text-slate-800 transition-colors" />
              </div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">{p.desc}</p>
              <div className="mt-4 text-xs text-slate-500">View concept →</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
