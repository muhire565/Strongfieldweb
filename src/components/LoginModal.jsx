import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Lock, ArrowRight } from 'lucide-react';
import logo from '../images/stonglogo.jpeg';

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setError('');
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8 pt-12">
              <div className="flex flex-col items-center mb-10 text-center">
                <img src={logo} alt="Strong Field" className="h-16 w-auto rounded-xl mb-4 shadow-md" />
                <h2 className="text-3xl font-bold text-slate-900">Welcome Back</h2>
                <p className="text-slate-500 mt-2">Log in to access your dashboard</p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {error && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center font-medium border border-red-200">
                    {error}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">Username</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-industrial-500 transition-colors" size={20} />
                    <input
                      type="text"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-industrial-500 focus:border-transparent transition-all"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">Password</label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-industrial-500 transition-colors" size={20} />
                    <input
                      type="password"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-industrial-500 focus:border-transparent transition-all"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm px-1">
                  <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                    <input type="checkbox" className="rounded-md border-slate-300 text-industrial-600 focus:ring-industrial-500 w-4 h-4" />
                    Remember me
                  </label>
                  <a href="#" className="text-industrial-600 font-semibold hover:underline">Forgot password?</a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-industrial-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-industrial-700 active:scale-95 transition-all shadow-xl shadow-industrial-500/10"
                >
                  Log In
                  <ArrowRight size={20} />
                </button>
              </form>

              <div className="mt-8 text-center text-sm text-slate-500 px-1 pt-6 border-t border-slate-100">
                Don't have an account? <a href="#" className="text-industrial-600 font-bold hover:underline">Contact Administrator</a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
