import React from 'react';
import { ShoppingCart, Settings, Wrench, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Electrical Equipment Supply',
    description: 'High-quality industrial and commercial electrical products from top brands.',
    icon: <ShoppingCart className="w-10 h-10 text-industrial-500" />,
  },
  {
    title: 'Industrial Solutions',
    description: 'Specialized electrical solutions tailored for industrial automation and control.',
    icon: <Settings className="w-10 h-10 text-industrial-500" />,
  },
  {
    title: 'Installation Support',
    description: 'Professional guidance and technical support for all your electrical installations.',
    icon: <Wrench className="w-10 h-10 text-industrial-500" />,
  },
  {
    title: 'Technical Consultation',
    description: 'Expert advice on product selection and electrical system optimization.',
    icon: <MessageSquare className="w-10 h-10 text-industrial-500" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1.5 w-24 bg-industrial-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, translateY: -10 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-6 p-4 rounded-xl bg-white w-fit group-hover:bg-industrial-50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
