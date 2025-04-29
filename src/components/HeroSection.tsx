
import React from 'react';
import { Button } from '@/components/ui/button';
import CircuitBackground from './CircuitBackground';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-[90vh] relative flex flex-col justify-center items-center text-center px-6 pt-20 pb-12 overflow-hidden"
    >
      <CircuitBackground />
      
      <div className="container mx-auto z-10 animate-fade-in">
        <p className="text-tech-purple font-medium mb-3">Hi there, I'm</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">Mais Sarhan</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
          Computer Systems Engineer
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8 text-lg">
          I design and build robust computing systems that solve complex problems.
          With expertise in hardware-software integration, embedded systems, and 
          network architecture, I turn technological challenges into efficient solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-tech-purple hover:bg-tech-purple/90 text-white px-8 py-6">
            View Projects
          </Button>
          <Button variant="outline" className="border-tech-teal text-tech-teal hover:bg-tech-teal/10 px-8 py-6">
            Contact Me
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-gray-500"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
