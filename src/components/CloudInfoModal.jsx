import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cloud, ShieldCheck, Smartphone, ExternalLink, HelpCircle } from 'lucide-react';

const CloudInfoModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100"
          >
            <div className="absolute top-6 right-6 z-10">
              <button
                onClick={onClose}
                className="p-3 bg-slate-100/50 hover:bg-slate-200 rounded-full text-slate-500 hover:text-slate-800 transition-all active:scale-90"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 h-full">
              {/* Left Side: Industrial Accent */}
              <div className="hidden md:flex md:col-span-2 bg-industrial-900 p-8 flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-industrial-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                   <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                      <Cloud className="text-industrial-400 w-10 h-10" />
                   </div>
                   <h2 className="text-3xl font-bold text-white leading-tight">Sync Your <br /><span className="text-industrial-400">Operations</span></h2>
                </div>

                <p className="text-industrial-200/60 text-sm relative z-10 leading-relaxed">
                   Experience seamless data synchronization between your desktop and mobile applications.
                </p>
              </div>

              {/* Right Side: Content */}
              <div className="md:col-span-3 p-8 lg:p-12">
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <ShieldCheck className="text-industrial-600" size={24} />
                    Cloud Access Required
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    This feature requires <span className="font-bold text-industrial-600">Cloud Payments</span> activation. This service ensures:
                  </p>
                </div>

                <div className="space-y-6 mb-10">
                  {[
                    { icon: <ShieldCheck className="text-green-500" size={20} />, text: "Secure binary cloud backups for your desktop data." },
                    { icon: <Smartphone className="text-industrial-500" size={20} />, text: "Real-time access to your records on mobile devices." },
                    { icon: <Cloud className="text-blue-500" size={20} />, text: "Centralized management of your electrical inventory." },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start p-4 rounded-2xl bg-slate-50 border border-slate-100/50 group hover:border-industrial-200 transition-colors">
                      <div className="mt-1 bg-white p-2 rounded-lg shadow-sm">{item.icon}</div>
                      <p className="text-slate-600 text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-industrial-50 p-6 rounded-2xl mb-10 border border-industrial-100 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-2 opacity-10">
                      <HelpCircle size={48} className="text-industrial-600" />
                   </div>
                   <p className="text-industrial-900 text-sm font-medium leading-relaxed">
                      "Contact the app developer to enable cloud sync and get more information on subscription plans."
                   </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={onClose}
                    className="flex-1 bg-industrial-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-industrial-700 active:scale-95 transition-all shadow-xl shadow-industrial-500/20"
                  >
                    Contact Developer
                    <ExternalLink size={18} />
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 bg-slate-100 text-slate-700 font-bold py-4 rounded-2xl hover:bg-slate-200 active:scale-95 transition-all"
                  >
                    Thank You
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CloudInfoModal;
