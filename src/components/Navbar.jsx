import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import logo from '../images/stonglogo.jpeg';

const Navbar = ({ onLoginClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Vision', href: '#vision' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Strong Field Logo" className="h-10 w-auto rounded" />
            <span className={`text-xl font-bold ${scrolled ? 'text-industrial-900' : 'text-white'} hidden sm:block`}>
              Strong Field Electrical Centre
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-industrial-500 ${scrolled ? 'text-slate-700' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onLoginClick}
              className="flex items-center gap-2 bg-industrial-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-industrial-700 transition-all transform hover:scale-105 shadow-md"
            >
              <LogIn size={18} />
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-slate-700' : 'text-white'} hover:text-industrial-500 transition-colors`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-industrial-600 hover:bg-industrial-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                onLoginClick();
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 mt-4 bg-industrial-600 text-white px-5 py-3 rounded-md font-semibold hover:bg-industrial-700 transition-all"
            >
              <LogIn size={18} />
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
