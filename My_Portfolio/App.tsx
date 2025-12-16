import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
const Hero3D = lazy(() => import('./components/Hero3D'));
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Workshops from './components/Workshops';
import Contact from './components/Contact';

import { motion } from 'framer-motion';
import { RESUME_DATA } from './constants';
import { ArrowDown, Github, Linkedin, Mail, Download, CheckCircle2, Facebook } from 'lucide-react';
import TypewriterText from './components/TypewriterText';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 selection:bg-cyan-500/30 font-inter">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0">
          {/* 3D Background - Kept subtle */}
          <div className="opacity-60">
            <Suspense fallback={<div style={{ width: '100%', height: '100%' }} />}>
              <Hero3D />
            </Suspense>
          </div>

          {/* Grid Pattern Overlay to match reference */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left Column: Text Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-left"
              >
                {/* Availability Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-800/50 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                  Let's build something amazing together!
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2 text-white">
                  {RESUME_DATA.name}
                </h1>

                <div className="flex items-center gap-4 mb-6">
                  <div className="h-1 w-12 bg-cyan-500 rounded-full"></div>
                  <p className="text-2xl md:text-3xl text-cyan-400 font-medium">
                    <TypewriterText texts={RESUME_DATA.titles} className="text-cyan-400" />
                  </p>
                </div>

                <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
                  {RESUME_DATA.summary}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mb-12">
                  <a href="#projects" className="bg-cyan-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-cyan-500 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20">
                    View My Work <ArrowDown size={18} className="-rotate-90" />
                  </a>
                  <a href="#contact" className="bg-transparent border border-slate-700 text-slate-300 px-8 py-3.5 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all">
                    Get in Touch
                  </a>
                  <a href="/resume/Najma_Bashir_Ali_Web_Developer_CV.pdf" download="Najma_Bashir_CV.pdf" className="bg-transparent border border-slate-700 text-slate-300 px-6 py-3.5 rounded-lg font-semibold hover:bg-slate-800 transition-all flex items-center gap-2">
                    <Download size={18} /> Resume
                  </a>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6 text-slate-500">
                  <a href={RESUME_DATA.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><Facebook size={24} /></a>
                  <a href={RESUME_DATA.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><Github size={24} /></a>
                  <a href={RESUME_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><Linkedin size={24} /></a>
                  <a href={`mailto:${RESUME_DATA.email}`} className="hover:text-cyan-400 transition-colors"><Mail size={24} /></a>
                </div>
              </motion.div>

              {/* Right Column: Profile Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Glow Effect - Adjusted to match the blue in the photo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 blur-[100px] rounded-full -z-10"></div>

                <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-colors">

                  {/* Vertical Layout: Image on Top, Content Below */}
                  <div className="flex flex-col items-center">

                    {/* Profile Image - Top Center */}
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl shadow-blue-900/20 mb-8 w-72">
                      <img
                        src={RESUME_DATA.avatarUrl}
                        alt={RESUME_DATA.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                    </div>

                    {/* Stats and Skills - Below Image */}
                    <div className="w-full">
                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-slate-950/50 p-4 rounded-xl text-center border border-slate-800/50 hover:bg-slate-900/80 transition-colors">
                          <div className="text-2xl font-bold text-cyan-400">3+</div>
                          <div className="text-xs text-slate-500 mt-1">Years Exp.</div>
                        </div>
                        <div className="bg-slate-950/50 p-4 rounded-xl text-center border border-slate-800/50 hover:bg-slate-900/80 transition-colors">
                          <div className="text-2xl font-bold text-cyan-400">40+</div>
                          <div className="text-xs text-slate-500 mt-1">Web Apps</div>
                        </div>
                        <div className="bg-slate-950/50 p-4 rounded-xl text-center border border-slate-800/50 hover:bg-slate-900/80 transition-colors">
                          <div className="text-2xl font-bold text-cyan-400">100%</div>
                          <div className="text-xs text-slate-500 mt-1">Satisfaction</div>
                        </div>
                      </div>

                      {/* Skills List */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-slate-300 text-sm">
                          <CheckCircle2 size={16} className="text-cyan-500" />
                          Fullstack Web Development
                        </div>
                        <div className="flex items-center gap-3 text-slate-300 text-sm">
                          <CheckCircle2 size={16} className="text-cyan-500" />
                          Interactive 3D Experiences
                        </div>
                        <div className="flex items-center gap-3 text-slate-300 text-sm">
                          <CheckCircle2 size={16} className="text-cyan-500" />
                          Performance & Accessibility
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </motion.div>

            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500"
          >
            <ArrowDown size={24} />
          </motion.div>
        </section>

        <About />
        <Skills />
        <Projects />
        <Experience />
        <Workshops />
        <Contact />
      </main>



      <footer className="bg-slate-950 py-8 border-t border-slate-900 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {RESUME_DATA.name}. Built with React, Three.js & Gemini.</p>
      </footer>
    </div>
  );
};

export default App;