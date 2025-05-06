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
      title: "GiGi-boutique for Real Client",
      description:
        "Developed a boutique website for a real client using HTML, CSS, JavaScript, and a NoSQL database. The platform enables seamless product management and dynamic content display.",
      image: "https://raw.githubusercontent.com/MaisSerhan/MaisSarhan/main/static/photo/gigibou.png",
      technologies: ["HTML", "CSS", "JavaScript", "NoSQL"],
      githubUrl: "https://github.com/MaisSerhan/GiGi-Boutique",
      liveUrl: "https://gigi-boutque.vercel.app/"
    },
    {
      title: "Weather App Project in Udacity Project",
      description:
        "This Udacity project Weather app is a project in udacity with node js to create a code. Built with Node.js, Webpack, JavaScript, HTML, and SCSS, it handles both client and server side seamlessly.",
      image: "https://github.com/MaisSerhan/MaisSarhan/blob/main/static/photo/weather.png?",
      technologies: ["Node.js", "Webpack", "JavaScript", "HTML", "SCSS" ,"API"],
      githubUrl: "https://github.com/MaisSerhan/WeatherApp"
    },
    {
      title: "AI Project",
      description:
        "AI project using machine learning to predict PPV values. Implemented XGBoost linear regression using Python.",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20231129130431/11111111.png",
      technologies: ["Python", "XGBoost", "Machine Learning", "Linear Regression"],
      githubUrl: "https://github.com/MaisSerhan/AIProject"
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
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="flex gap-2 items-center">
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </Button>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="flex gap-2 items-center bg-tech-purple hover:bg-tech-purple/90">
                        <Link className="h-4 w-4" />
                        <span>Live Demo</span>
                      </Button>
                    </a>
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
