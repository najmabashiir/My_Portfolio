import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
         <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Technical <span className="text-indigo-400">Expertise</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-slate-950/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-colors"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white">{skill.name}</h3>
                <span className="text-xs font-medium px-2 py-1 rounded bg-slate-800 text-slate-300">
                  {skill.category}
                </span>
              </div>
              
              <div className="w-full bg-slate-800 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                ></motion.div>
              </div>
              <div className="text-right mt-1 text-xs text-slate-500">{skill.level}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
