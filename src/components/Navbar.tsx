
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="py-4 px-6 md:px-12 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/9cee009a-cdcc-4616-b015-51391d051468.png" 
          alt="Sophia Chen Logo" 
          className="h-10 w-auto mr-2" 
        />
        <span className="font-bold text-xl">TechPortfolio</span>
      </div>
      
      <div className="md:hidden">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      <div className={`fixed md:static top-[72px] left-0 right-0 bg-white/95 backdrop-blur-md md:bg-transparent p-6 md:p-0 shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
        isMenuOpen ? "block" : "hidden md:block"
      }`}>
        <ul className="flex flex-col md:flex-row items-center gap-6">
          <li>
            <a href="#home" className="font-medium hover:text-tech-purple transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-medium hover:text-tech-purple transition-colors" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="font-medium hover:text-tech-purple transition-colors" onClick={() => setIsMenuOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="font-medium hover:text-tech-purple transition-colors" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="font-medium hover:text-tech-purple transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </li>
          <li>
            <Button className="bg-tech-purple hover:bg-tech-purple/90 text-white">
              Resume
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
