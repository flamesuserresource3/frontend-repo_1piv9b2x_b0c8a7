import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen text-slate-800 bg-gradient-to-b from-rose-50 via-sky-50 to-violet-50 selection:bg-violet-200 selection:text-violet-900">
      {/* Simple header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/50 border-b border-white/40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold text-slate-900 tracking-tight">My Pastel Space</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">Work</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>

      <footer className="py-10 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} My Pastel Space. Crafted with care.</p>
      </footer>
    </div>
  );
}
