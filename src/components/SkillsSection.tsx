
import React from 'react';
import { Card } from '@/components/ui/card';

type SkillCategory = {
  name: string;
  skills: { name: string; level: number }[];
};

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Hardware",
      skills: [
        { name: "Circuit Design", level: 90 },
        { name: "Embedded Systems", level: 85 },
        { name: "PCB Layout", level: 80 },
        { name: "FPGA Programming", level: 75 },
      ],
    },
    {
      name: "Software",
      skills: [
        { name: "C/C++", level: 90 },
        { name: "Python", level: 85 },
        { name: "VHDL/Verilog", level: 80 },
        { name: "Assembly", level: 70 },
      ],
    },
    {
      name: "Networking",
      skills: [
        { name: "TCP/IP", level: 85 },
        { name: "Network Security", level: 80 },
        { name: "System Architecture", level: 90 },
        { name: "IoT Protocols", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-tech-teal mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My technical expertise spans across hardware, software, and system integration,
            allowing me to develop comprehensive solutions for complex computing challenges.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-6 text-tech-purple">{category.name}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ '--progress-width': `${skill.level}%` } as React.CSSProperties}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
