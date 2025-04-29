
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Link } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Embedded Smart Home System",
      description: "Designed and implemented a comprehensive IoT-based smart home system featuring real-time monitoring and control of household devices with low power consumption.",
      image: "/placeholder.svg",
      technologies: ["ARM Microcontroller", "C", "IoT Protocols", "PCB Design"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Network Traffic Analyzer",
      description: "Developed a high-performance network traffic analysis tool that processes packet data in real-time to detect anomalies and potential security threats.",
      image: "/placeholder.svg",
      technologies: ["Python", "Wireshark API", "Machine Learning", "TCP/IP"],
      githubUrl: "#"
    },
    {
      title: "FPGA-based Video Processing",
      description: "Created a real-time video processing system on FPGA that implements advanced filters and computer vision algorithms with minimal latency.",
      image: "/placeholder.svg",
      technologies: ["VHDL", "Image Processing", "FPGA", "Computer Vision"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-tech-teal mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore a selection of my technical projects that demonstrate my expertise 
            in computer systems engineering across various domains.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                {/* This would be replaced with an actual project image */}
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-tech-purple">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIdx) => (
                    <span 
                      key={techIdx} 
                      className="text-xs bg-tech-purple/10 text-tech-purple px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="flex gap-2 items-center">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </Button>
                  )}
                  
                  {project.liveUrl && (
                    <Button size="sm" className="flex gap-2 items-center bg-tech-purple hover:bg-tech-purple/90">
                      <Link className="h-4 w-4" />
                      <span>Live Demo</span>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-tech-teal text-tech-teal hover:bg-tech-teal/10">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
