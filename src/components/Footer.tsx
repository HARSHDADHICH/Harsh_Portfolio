import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Harsh<span className="text-teal-400">Dadhich</span>
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Transforming ideas into elegant, functional software solutions. 
              Available for full-stack development projects and consultations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                aria-label="GitHub"
                className="bg-slate-800 hover:bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                aria-label="LinkedIn"
                className="bg-slate-800 hover:bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                aria-label="Twitter"
                className="bg-slate-800 hover:bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#contact" 
                aria-label="Email"
                className="bg-slate-800 hover:bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-slate-300 hover:text-teal-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Newsletter</h4>
            <p className="text-slate-300 mb-4">
              Subscribe to my newsletter for the latest updates, articles, and resources.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-l-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-teal-500 text-white flex-grow"
              />
              <button 
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>© {currentYear} DevPortfolio. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Designed and developed with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;