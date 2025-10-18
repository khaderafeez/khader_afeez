import { Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  
  {
    company: 'Drift Pure Innovation Pvt. Ltd',
    role: 'Embedded Systems Lead',
    duration: 'Nov 2023 - Present',
    location: 'Mangalore, India',
    responsibilities: [
      'Led the end-to-end development of "HelioJal," a smart desalination system powered by 100% renewable energy, producing 10+ liters of potable water daily for remote communities',
      'Recognized as a Top 20 innovation in Karnataka\'s water sector for creating an environmentally sustainable, closed-loop system that recovers salt for commercial use',
      'Developed robust embedded C firmware on the ESP32 and integrated complex sensor systems using FreeRTOS',
      'Successfully pitched the project to stakeholders and investors',
    ],
    technologies: ['C', 'FreeRTOS', 'ESP32', 'MATLAB', 'System Integration'],
  },
  {
    company: 'Invihub Technosolutions Pvt. Ltd',
    role: 'PCB Design Intern',
    duration: 'Aug 2023 - Sep 2023',
    location: 'Mangalore, India',
    responsibilities: [
      'Developed advanced PCB designs using KiCad and created comprehensive training content, resulting in a 40% improvement in team proficiency scores',
      'Conducted hands-on workshops on circuit simulation (TinkerCAD) for 35+ participants, enhancing knowledge in system design and electronic testing',
      'Performed system debugging and validation during prototype testing phases',
      'Utilized Git and GitHub for version control and collaborative PCB design workflows',
    ],
    technologies: ['KiCAD', 'TinkerCAD', 'Circuit Analysis', 'PCB Manufacturing', 'Git'],
  },

  {
    company: 'Freelance',
    role: 'Social Media Manager ',
    duration: '2022 - Present',
    location: 'Remote',
    responsibilities: [
      'Developed and deployed a QR code-based food ordering system for Koyla Restaurant, streamlining their order management process.',
      'Designed and built personalized websites for clients, delivering tailored web solutions to meet their specific needs.',
      'Consulted on and assisted with the development of microcontroller-based projects, including custom PCB design and firmware implementation.',
      'Provided social media management and digital marketing services for various small startups, enhancing their online presence.',
    ],
    technologies: [ 'Web Development', 'PCB Design', 'Embedded C', 'Social Media Marketing', 'Canva'],
  },

];

export const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-secondary transform -translate-x-1/2" />

            {/* Experience cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative animate-fade-in ${
                    index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10" />

                  <Card className="p-6 md:p-8 hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="mb-4">
                          <h3 className="text-xl md:text-2xl font-bold mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-lg font-semibold text-primary mb-1">
                            <strong>{exp.company}</strong>
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {exp.duration}
                          </p>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">
                            Key Responsibilities:
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i}>{resp}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <Badge key={i} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
