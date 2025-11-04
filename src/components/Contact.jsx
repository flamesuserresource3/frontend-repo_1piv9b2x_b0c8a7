import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="rounded-3xl p-8 bg-gradient-to-br from-rose-100 via-sky-100 to-violet-100 border border-white/60 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Let’s connect</h2>
        <p className="mt-2 text-slate-700 max-w-2xl">
          Have a project in mind or just want to say hi? I’d love to hear from you.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-violet-600 text-white px-5 py-2.5 shadow-sm hover:bg-violet-700 transition-colors"
          >
            <Mail size={18} />
            <span>Email me</span>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur text-slate-900 px-5 py-2.5 border border-white/60 hover:bg-white transition-colors"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur text-slate-900 px-5 py-2.5 border border-white/60 hover:bg-white transition-colors"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
