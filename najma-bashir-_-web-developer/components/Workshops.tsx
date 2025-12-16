import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import { WORKSHOPS } from '../constants';

const Workshops: React.FC = () => {
  return (
    <section id="workshops" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Workshops & <span className="text-cyan-400">Training</span>
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl">
            Continuous learning through workshops, conferences, and training programs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKSHOPS.map((workshop, index) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                    <Award size={24} className="text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg mb-1 group-hover:text-cyan-400 transition-colors">
                      {workshop.name}
                    </h3>
                    <p className="text-sm text-slate-400">{workshop.organizer}</p>
                  </div>
                </div>
                
                {workshop.description && (
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {workshop.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Workshops;
