import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Code,
  Cpu,
  Layers,
  Wifi,
  Wrench,
  Database,
  Globe,
  GitBranch,
  Award,
} from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming Languages',
    skills: ['C', 'C++', 'Assembly'],
  },
  {
    icon: Cpu,
    title: 'Embedded Systems & Microcontrollers',
    skills: ['STM32', 'ESP32', 'Arduino', 'Raspberry Pi', 'FreeRTOS', 'ARM Cortex'],
  },
  {
    icon: Layers,
    title: 'PCB Design',
    skills: ['KiCAD', 'Circuit Design & Analysis', 'PCB Layout', 'Gerber File Generation', 'TinkerCAD'],
  },
  {
    icon: Wifi,
    title: 'IoT & Communication Protocols',
    skills: ['LoRa', 'Zigbee', 'I2C', 'SPI', 'UART'],
  },
  {
    icon: Wrench,
    title: 'Robotics',
    skills: ['Kinematics', 'Computer Vision', 'Path Planning', 'PID Control', 'Logic Analysis'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    icon: GitBranch,
    title: 'Tools & Other Competencies',
    skills: ['Git', 'VS Code', 'Canva', 'Netlify', 'Google Analytics', 'Circuit Debugging', 'Multimeter', 'Oscilloscope', 'Power Management', 'Soldering & Welding'],
  },
];

const certifications = [
  { id: 1, name: 'AWS Certified Developer', year: '2024' },
  { id: 2, name: 'Embedded Systems Certificate', year: '2023' },
  { id: 3, name: 'IoT Specialization', year: '2023' },
  { id: 4, name: 'PCB Design Professional', year: '2022' },
  { id: 5, name: 'Advanced Robotics', year: '2022' },
  { id: 6, name: 'Full Stack Development', year: '2023' },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive set of technical skills across hardware and software domains
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover-lift hover:shadow-lg transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
            <Award className="h-8 w-8 text-primary" />
            <h3 className="text-3xl font-bold">Certifications</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={cert.id}
                className="p-6 hover-lift hover:shadow-lg transition-all cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                    <Award className="h-16 w-16 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{cert.year}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
