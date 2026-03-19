import React from 'react';
import logo from '../images/stonglogo.jpeg';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Strong Field Logo" className="h-10 w-auto rounded" />
              <span className="text-xl font-bold text-white">Strong Field</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Top-tier electrical equipment and industrial solutions in Uganda. Reliability and quality are our core values.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-industrial-400 hover:bg-slate-700 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Vision', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-industrial-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Jinja, Uganda</li>
              <li>+256 754 925266</li>
              <li>mapetersimon@yahoo.com</li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Get Updates</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-industrial-500 transition-all"
              />
              <button className="mt-4 w-full bg-industrial-600 text-white font-bold py-3 rounded-xl hover:bg-industrial-700 transition-all active:scale-95">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {currentYear} Strong Field Electrical Centre. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
