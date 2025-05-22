import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechnicalSkills from './components/TechnicalSkills';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import WorkProcess from './components/WorkProcess';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeSelector from './components/ThemeSelector';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <Header />
        
        <main>
          <Hero />
          <TechnicalSkills />
          <Services />
          <Projects />
          <Testimonials />
          <WorkProcess />
          <Contact />
        </main>
        <Footer />
        <ThemeSelector />
      </div>
    </ThemeProvider>
  );
}

export default App;