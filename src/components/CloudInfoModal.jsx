import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cloud, ShieldCheck, Smartphone, ExternalLink, HelpCircle, AlertTriangle } from 'lucide-react';

const CloudInfoModal = ({ isOpen, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(300000);

  useEffect(() => {
    if (!isOpen) {
      setTimeLeft(300000);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 10) {
          clearInterval(interval);
          return 0;
        }
        return prev - 10;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [isOpen]);

  const minutes = Math.floor(timeLeft / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);
  const milliseconds = timeLeft % 1000;

  const formatTime = (time) => time.toString().padStart(2, '0');
  const formatMs = (ms) => ms.toString().padStart(3, '0');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col"
          >
            {/* Close button */}
            <div className="absolute top-6 right-6 z-10">
              <button
                onClick={onClose}
                className="p-3 bg-slate-100/50 hover:bg-slate-200 rounded-full text-slate-500 hover:text-slate-800 transition-all active:scale-90"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-5">
                
                {/* Left */}
                <div className="hidden md:flex md:col-span-2 bg-industrial-900 p-8 flex-col justify-between relative">
                  <div>
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                      <Cloud className="text-industrial-400 w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">
                      Sync Your <br />
                      <span className="text-industrial-400">Operations</span>
                    </h2>
                  </div>

                  <p className="text-industrial-200/60 text-sm mt-6">
                    Seamless data sync between desktop and mobile.
                  </p>
                </div>

                {/* Right */}
                <div className="md:col-span-3 p-6 sm:p-8">
                  
                  {/* Warning */}
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-xl flex gap-3">
                    <AlertTriangle className="text-red-500" size={24} />
                    <div>
                      <h4 className="text-red-800 font-bold">NOTICE</h4>
                      <p className="text-red-700 text-sm">
                        Ends in{" "}
                        <span className="font-mono font-bold">
                          {formatTime(minutes)}:{formatTime(seconds)}:{formatMs(milliseconds)}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <ShieldCheck size={22} />
                    Cloud Access Required
                  </h3>

                  <p className="text-slate-600 mb-6">
                    Activate cloud payments to unlock:
                  </p>

                  {/* Features */}
                  <div className="space-y-4 mb-6">
                    {[
                      { icon: <ShieldCheck size={18} />, text: "Secure cloud backups" },
                      { icon: <Smartphone size={18} />, text: "Mobile access" },
                      { icon: <Cloud size={18} />, text: "Centralized inventory" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-3 p-3 bg-slate-50 rounded-xl">
                        {item.icon}
                        <p className="text-sm text-slate-600">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Info box */}
                  <div className="bg-industrial-50 p-4 rounded-xl mb-6">
                    <p className="text-sm text-industrial-900">
                      Contact the developer for activation and pricing.
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={onClose}
                      className="flex-1 bg-industrial-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-industrial-700"
                    >
                      Contact Developer
                      <ExternalLink size={16} />
                    </button>

                    <button
                      onClick={onClose}
                      className="flex-1 bg-slate-100 py-3 rounded-xl hover:bg-slate-200"
                    >
                      Thank You
                    </button>
                  </div>

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