import React from 'react';
import { Target, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <section id="vision" className="py-24 bg-industrial-900 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-industrial-500/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-industrial-800/20 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Our Vision</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              At Strong Field Electrical Centre, our vision is to be the leading provider of reliable, high-quality electrical solutions. We strive to empower industries and commercial businesses with cutting-edge equipment and expert technical consultation.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Target className="w-6 h-6 text-industrial-400" />, title: 'Excellence in Supply', desc: 'Sourcing only the most durable and efficient electrical components.' },
                { icon: <ShieldCheck className="w-6 h-6 text-industrial-400" />, title: 'Uncompromising Safety', desc: 'Ensuring all products meet international safety standards.' },
                { icon: <Zap className="w-6 h-6 text-industrial-400" />, title: 'Innovation Driven', desc: 'Staying ahead with the latest electrical technologies and industrial trends.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="hidden lg:block relative"
          >
            <div className="aspect-square bg-gradient-to-tr from-industrial-600 to-industrial-400 rounded-3xl p-1 shadow-2xl overflow-hidden group">
               <div className="h-full w-full bg-slate-900 flex items-center justify-center p-12">
                   <Target className="w-full h-full text-industrial-500 opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
                   <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-4/5 h-4/5 border-2 border-dashed border-industrial-500/30 rounded-full"
                        />
                   </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
