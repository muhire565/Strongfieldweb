import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Phone } from 'lucide-react';
import logo from '../images/stonglogo.jpeg';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+256 754 925266";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s+/g, '')}`;

  return (
    <div className="fixed bottom-6 right-6 z-[120]">
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        animate={{ 
          y: [0, -10, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#128C7E] transition-colors relative z-20 group"
      >
        <MessageCircle size={32} fill="currentColor" stroke="none" />
        <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-sm pointer-events-none border border-slate-100">
           Need help? WhatsApp us!
        </span>
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100, x: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100, x: 50 }}
            className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100"
          >
            {/* Header */}
            <div className="bg-[#075E54] p-5 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src={logo} alt="Strong Field" className="w-12 h-12 rounded-full border-2 border-white/20" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#075E54]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-tight uppercase tracking-tight">Strong Field</h4>
                  <p className="text-white/80 text-xs">Typically replies within minutes</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-4 bg-[#e5ddd5] min-h-[140px] relative">
               {/* Decorative background pattern could be added here if desired */}
               <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
               
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.3 }}
                 className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] relative z-10"
                >
                  <p className="text-slate-800 text-sm leading-relaxed">
                    Hi! 👋 Any questions related to Strong Field Electrical Centre? How can we help you today?
                  </p>
                  <span className="text-[10px] text-slate-400 block mt-1 text-right">
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
               </motion.div>
            </div>

            {/* Footer / CTA */}
            <div className="p-6 bg-white">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white font-bold py-4 rounded-full flex items-center justify-center gap-3 hover:bg-[#128C7E] active:scale-95 transition-all shadow-lg hover:shadow-[#25D366]/20"
              >
                <MessageCircle size={24} fill="white" stroke="none" />
                WhatsApp Us
              </a>
              <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-slate-400">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                Online | Privacy policy
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppWidget;
