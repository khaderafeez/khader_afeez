import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'IoT Smart Home System',
    description: 'Complete home automation system with ESP32, voice control, and mobile app integration',
    award: '',
    technologies: ['ESP32', 'React', 'AWS IoT', 'MQTT'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Autonomous Delivery Robot',
    description: 'Self-navigating robot with obstacle avoidance and package delivery capabilities',
    award: '',
    technologies: ['ROS', 'Python', 'OpenCV', 'Raspberry Pi'],
    github: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Custom PCB Weather Station',
    description: 'Multi-sensor weather monitoring system with custom-designed PCB and web dashboard',
    award: '',
    technologies: ['KiCAD', 'STM32', 'Node.js', 'Chart.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Industrial Process Controller',
    description: 'Real-time control system for manufacturing process with HMI interface',
    award: '',
    technologies: ['C++', 'FreeRTOS', 'Modbus', 'Qt'],
    github: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'Wireless Sensor Network',
    description: 'Low-power mesh network for environmental monitoring across large areas',
    award: '',
    technologies: ['LoRaWAN', 'Arduino', 'Python', 'Grafana'],
    github: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    title: 'Robotic Arm Controller',
    description: '6-DOF robotic arm with inverse kinematics and precision control',
    award: '',
    technologies: ['C', 'Kinematics', 'Servo Control', 'GUI'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop',
  },
  {
    id: 7,
    title: 'Smart Agriculture System',
    description: 'Automated irrigation and crop monitoring with AI-powered insights',
    award: '',
    technologies: ['IoT', 'Machine Learning', 'Python', 'React'],
    github: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop',
  },
  {
    id: 8,
    title: 'BLDC Motor Controller',
    description: 'High-efficiency brushless DC motor controller with FOC algorithm',
    award: '',
    technologies: ['C', 'STM32', 'PCB Design', 'Control Theory'],
    github: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
  },
  {
    id: 9,
    title: 'Gesture Recognition Device',
    description: 'Wearable device for hand gesture recognition using IMU sensors',
    award: '',
    technologies: ['Arduino', 'TensorFlow', 'BLE', 'Python'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
  },
];

import weldingWork from '../behindscence/wleddingwork.jpg';
import rcRace from '../behindscence/rcrace.jpg';
import pitchingPreparation from '../behindscence/pitchingprepation.jpg';
import medicalProject from '../behindscence/mediaclproject.jpg';
import iotDebugging from '../behindscence/iotprojectdebbugging.jpg';
import fixingBug from '../behindscence/fixingbug.jpg';
import figuringCircuit from '../behindscence/figuringmissingcicuite.jpg';
import conceptExplanation from '../behindscence/coceptexplnation.jpg';

import emergeAward from '../awards/Emerge2024.jpg';
import ieiAward from '../awards/iei.jpg';
import ijrarAward from '../awards/IJRQAR.jpg';
import ktechAward from '../awards/k-tech.jpg';
import technocraftAward from '../awards/technocraft.jpg';

const awardsData = [
  {
    title: 'K-Tech Sponsorship',
    award: '₹ 1.25 Lakhs Grant',
    year: '2024',
    description: 'Secured sponsorship from Karnataka Innovation and Technology Society (KITS) for our final year project.',
    image: ktechAward,
  },
  {
    title: 'Emerge Ideathon 2024',
    award: 'First Runner-Up',
    year: '2024',
    description: 'Achieved first runner-up in a competitive startup event, showcasing innovation and problem-solving skills.',
    image: emergeAward,
  },
  {
    title: 'Research Paper Publication',
    award: 'Published in IJRAR',
    year: '2024',
    description: 'Published a paper on a smart interactive device for students with ASD in an international, peer-reviewed journal.',
    image: ijrarAward,
  },
  {
    title: 'ISTE Ideathon 2023',
    award: 'Winners',
    year: '2023',
    description: 'Recognized as one of the top four entries in a state-level competition for our idea in the Energy & Environment domain.',
    image: ieiAward,
  },
  {
    title: 'Technocraft Booth Competition',
    award: '3rd Place Winner',
    year: '2023',
    description: 'Awarded by COEP Alumni Association for our project "Prayascitta: A Sea Water Purification Model".',
    image: technocraftAward,
  },
];

const galleryImages = [
  weldingWork,
  rcRace,
  pitchingPreparation,
  medicalProject,
  iotDebugging,
  fixingBug,
  figuringCircuit,
  conceptExplanation,
];

export const Projects = () => {
  const scrollGallery = (direction: 'left' | 'right', containerId: string) => {
    const container = document.getElementById(containerId);
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-aurora">
            What I've Built
          </h2>
          <div className="w-24 h-1.5 mx-auto rounded-full mb-6" style={{ background: 'var(--gradient-cosmic)' }} />
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            From embedded systems that power real-world automation to IoT solutions that connect the physical and digital worlds
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover-lift card-shine transition-all animate-fade-in border-2"
              style={{ 
                animationDelay: `${index * 100}ms`,
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-2 line-clamp-2">
                    {project.description}
                  </p>
                  {project.award && (
                    <div className="mb-2">
                      <Badge className="bg-accent text-accent-foreground text-xs">
                        🏆 {project.award}
                      </Badge>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs bg-white/20 text-white border-white/30 backdrop-blur-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-white text-primary hover:bg-white/90"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        size="sm"
                        className="flex-1 bg-accent hover:bg-accent/90"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 mb-24 animate-fade-in">
          <Button asChild size="lg" className="group">
            <a
              href="https://github.com/khaderafeez"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More on GitHub
              <Github className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>


        {/* Awards Gallery */}
        <div className="mb-24 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 gradient-text">Recognition & Awards</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Celebrating achievements in robotics competitions, hackathons, and innovation challenges
            </p>
          </div>
          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:scale-110 transition-transform"
              onClick={() => scrollGallery('left', 'awards-container')}
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:scale-110 transition-transform"
              onClick={() => scrollGallery('right', 'awards-container')}
            >
              <ChevronRight />
            </Button>
            <div
              id="awards-container"
              className="flex gap-6 overflow-x-auto scrollbar-hide px-12 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {awardsData.map((award, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 snap-center w-80 hover-tilt overflow-hidden border-2"
                  style={{ boxShadow: 'var(--shadow-multi)' }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={award.image}
                      alt={`${award.title} award received by Khader Afeez - ${award.award}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                    <Badge 
                      className="absolute top-4 right-4 bg-accent text-accent-foreground border-0"
                      style={{ boxShadow: 'var(--shadow-glow-secondary)' }}
                    >
                      {award.year}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2">{award.title}</h4>
                    <p className="text-primary font-semibold mb-3">{award.award}</p>
                    <p className="text-sm text-muted-foreground">{award.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Work Gallery */}
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 gradient-text">Behind the Scenes</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Glimpses from my workshop, project builds, and maker journey
            </p>
          </div>
          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:scale-110 transition-transform"
              onClick={() => scrollGallery('left', 'gallery-container')}
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:scale-110 transition-transform"
              onClick={() => scrollGallery('right', 'gallery-container')}
            >
              <ChevronRight />
            </Button>
            <div
              id="gallery-container"
              className="flex gap-6 overflow-x-auto scrollbar-hide px-12 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 snap-center rounded-xl overflow-hidden border-2"
                  style={{ boxShadow: 'var(--shadow-lg)' }}
                >
                  <img
                    src={image}
                    alt={`Workshop scene ${index + 1}`}
                    className="w-80 h-60 object-cover hover:scale-105 transition-all duration-500 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
