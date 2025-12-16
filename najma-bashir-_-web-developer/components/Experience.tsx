import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work <span className="text-indigo-400">Experience</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-slate-800"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-indigo-500 rounded-full border-4 border-slate-950 z-10 mt-1.5 md:mt-0"></div>

                {/* Content Spacer */}
                <div className="w-full md:w-1/2"></div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'
                }`}>
                  <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-colors">
                    <div className={`flex items-center gap-2 text-indigo-400 mb-1 ${
                       index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <Briefcase size={16} />
                      <span className="text-sm font-semibold">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <h4 className="text-lg text-slate-400 mb-3">{exp.company}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
