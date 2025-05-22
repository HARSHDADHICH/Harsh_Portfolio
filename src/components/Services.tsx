import React from 'react';
import { servicesData } from '../data/services';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Services Offered</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            I offer a comprehensive range of software development services to meet your digital needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-teal-50 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-7 w-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;