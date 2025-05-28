import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="about" 
      className="pt-28 pb-20 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-50 to-slate-100"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
            Software Development Lead
            </h1>
            <h2 className="mt-4 text-xl md:text-2xl text-teal-600 font-medium">
              Building modern, efficient digital solutions
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
              I'm a passionate freelance software developer with a knack for turning ideas into 
              powerful, scalable, and efficient software solutions. With several years of hands-on 
              experience in full-stack web development, I've worked with clients across industries 
              to build everything from MVPs and custom dashboards to production-ready APIs and 
              user-friendly web interfaces.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-5">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-medium py-3 px-6 rounded-md transition-colors"
              >
                View My Work
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <a 
                href="#" 
                className="text-slate-600 hover:text-teal-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-slate-600 hover:text-teal-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="#contact" 
                className="text-slate-600 hover:text-teal-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="lg:w-2/5 mt-8 lg:mt-0">
            <div className="relative">
              <div className="bg-gradient-to-tr from-teal-500 to-blue-500 rounded-2xl h-64 md:h-80 w-64 md:w-80 absolute -top-5 -left-5 opacity-20"></div>
              <div className="bg-white border border-slate-200 shadow-lg rounded-2xl p-6 relative z-10">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-teal-100 flex items-center justify-center">
                    <span className="text-5xl text-teal-600 font-bold">HD</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-800">Harsh Dadhich</h3>
                  <p className="text-slate-600">Full-Stack Developer</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <div className="font-bold text-slate-800">4+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <div className="font-bold text-slate-800">50+</div>
                    <div className="text-sm text-slate-600">Projects</div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <div className="font-bold text-slate-800">30+</div>
                    <div className="text-sm text-slate-600">Happy Clients</div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <div className="font-bold text-slate-800">100%</div>
                    <div className="text-sm text-slate-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;