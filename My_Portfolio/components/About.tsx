import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      title: "Modern Web Tech",
      description: "Leveraging the latest features of JavaScript/TypeScript and Next.js to build future-proof applications."
    },
    {
      icon: <Layout className="w-6 h-6 text-cyan-400" />,
      title: "React Ecosystem",
      description: "Deep expertise in React state management, hooks, and component patterns for scalable architecture."
    },
    {
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      title: "Full Stack Solutions",
      description: "Seamlessly connecting intuitive frontend interfaces with robust, secure backend systems."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-sm font-medium mb-6">
              <Sparkles size={14} />
              <span>About Me</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Passionate about creating <span className="text-cyan-400">digital excellence</span>
            </h2>
            
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                Hello! I'm Najma, a dedicated Web Developer with a strong focus on crafting exceptional digital experiences. My journey in tech is driven by a relentless curiosity and a desire to build tools that solve real-world problems.
              </p>
              <p>
                I specialize in the React ecosystem, transforming complex requirements into seamless, pixel-perfect user interfaces. Whether it's optimizing performance or architecting secure backend solutions, I am committed to writing clean, maintainable code that stands the test of time.
              </p>
              <p>
                When I'm not coding, you can find me exploring new 3D web technologies or contributing to the open-source community.
              </p>
            </div>
          </motion.div>

          {/* Cards / Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-slate-950/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl flex items-start gap-4 hover:border-cyan-500/30 transition-colors group"
              >
                <div className="p-3 bg-slate-900 rounded-xl group-hover:bg-cyan-950/30 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;