import React from 'react';
import { processData } from '../data/workProcess';

const WorkProcess: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">My Work Process</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            I follow a structured approach to ensure efficient development and clear communication throughout the project lifecycle.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-teal-200"></div>
            
            {processData.map((step, index) => (
              <div 
                key={index}
                className={`relative z-10 flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className="w-1/2"></div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold border-4 border-white">
                    {index + 1}
                  </div>
                </div>
                
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'pl-12'}`}>
                  <div 
                    className="bg-white p-6 rounded-xl shadow-sm border border-slate-200"
                  >
                    <div className="w-12 h-12 mb-4 bg-teal-50 rounded-lg flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;