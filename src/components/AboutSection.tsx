
import React from 'react';
import { Card } from '@/components/ui/card';
import { Computer, Book, Briefcase } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-tech-teal mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-gradient-to-br from-tech-purple to-tech-teal rounded-lg overflow-hidden shadow-xl">
              {/* This is where an actual photo would be placed */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-lg font-medium"><img src="https://github.com/MaisSerhan/MaisSarhan/blob/main/static/photo/image.png?raw=true" height="100%" style="
                height: 70vh;   width: 31vh;">Profile Photo</p>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-white/50"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-white/50"></div>
            </div>
          </div>
          
          <div className="animate-fade-in-slow">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Computer Systems Engineer</h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate computer systems engineer with over 5 years of experience designing, 
              implementing, and optimizing complex computing systems. My expertise spans both hardware 
              and software domains, allowing me to develop integrated solutions that push technological boundaries.
            </p>
            <p className="text-gray-600 mb-6">
              With a strong foundation in computer architecture, embedded systems, and networking protocols, 
              I excel at creating robust systems that meet demanding performance and reliability requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <Card className="p-5 flex flex-col items-center text-center hover:border-tech-purple transition-colors">
                <div className="bg-tech-purple/10 p-4 rounded-full mb-4">
                  <Computer className="h-6 w-6 text-tech-purple" />
                </div>
                <h4 className="font-bold mb-2">Education</h4>
                <p className="text-sm text-gray-600">M.S. in Computer Engineering</p>
              </Card>
              
              <Card className="p-5 flex flex-col items-center text-center hover:border-tech-teal transition-colors">
                <div className="bg-tech-teal/10 p-4 rounded-full mb-4">
                  <Briefcase className="h-6 w-6 text-tech-teal" />
                </div>
                <h4 className="font-bold mb-2">Experience</h4>
                <p className="text-sm text-gray-600">5+ Years in the Industry</p>
              </Card>
              
              <Card className="p-5 flex flex-col items-center text-center hover:border-tech-lilac transition-colors">
                <div className="bg-tech-lilac/10 p-4 rounded-full mb-4">
                  <Book className="h-6 w-6 text-tech-purple" />
                </div>
                <h4 className="font-bold mb-2">Projects</h4>
                <p className="text-sm text-gray-600">15+ Completed Projects</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
