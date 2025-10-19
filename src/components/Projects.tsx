import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

import asdKitImg from '/projectimages/ASDkit.png';
import roboArmImg from '/projectimages/complete robo arm .webp';
import helioJalImg from '/projectimages/HEATING AND VAPORIZATION ZONE .png';
import qrBasedImg from '/projectimages/QR-based.png';
import selfBalancingBotImg from '/projectimages/self_balancing_bot.png';
import solarTrackerImg from '/projectimages/solartracker.webp';

const projects = [
  {
    id: 1,
    title: 'Interactive Device for ASD Students',
    description: 'A smart interactive device designed to assist students with Autism Spectrum Disorder (ASD) in their learning and communication.',
    award: 'Published Research',
    technologies: ['Embedded C', 'PCB Design', 'Arduino', '3D Printing'],
    github: 'https://github.com/khaderafeez/Yenvision',
    demo: undefined,
    image: asdKitImg,
  },
  {
    id: 2,
    title: '6-DOF Robotic Arm',
    description: 'A 6-axis robotic arm with custom firmware for precise control, capable of performing complex pick-and-place operations.',
    award: '',
    technologies: ['C', 'Kinematics', 'Servo Control', 'Arduino'],
    github: 'https://github.com/khaderafeez/Robo_Arm-',
    demo: undefined,
    image: roboArmImg,
  },
  {
    id: 3,
    title: 'HelioJal - Smart Desalination System',
    description: 'An award-winning, eco-friendly desalination system using renewable energy to produce potable water, featuring IoT monitoring.',
    award: 'Top 20 Innovation',
    technologies: ['ESP32', 'FreeRTOS', 'C', 'System Integration'],
    github: 'https://github.com/khaderafeez/HelioJal',
    demo: undefined,
    image: helioJalImg,
  },
  {
    id: 4,
    title: 'QR-Based Food Ordering System',
    description: 'A seamless food ordering system for a restaurant, allowing customers to order directly from their table using a QR code.',
    award: 'Freelance Project',
    technologies: ['Web Development', 'QR Code', 'JavaScript'],
    github: 'https://github.com/khaderafeez/Koyla-restaurant',
    demo: undefined,
    image: qrBasedImg,
  },
  {
    id: 5,
    title: 'Self-Balancing Robot',
    description: 'A two-wheeled robot that actively balances itself using a PID control algorithm and an IMU sensor.',
    award: '',
    technologies: ['Arduino', 'C++', 'PID Control', 'MPU6050'],
    github: 'https://github.com/khaderafeez/Self-Balancing-Robot',
    demo: undefined,
    image: selfBalancingBotImg,
  },
  {
    id: 6,
    title: 'Solar Tracking System',
    description: 'A dual-axis solar tracker that follows the sun to maximize energy absorption for solar panels.',
    award: '',
    technologies: ['Arduino', 'C', 'LDR Sensors', 'Servo Motors'],
    github: 'https://github.com/khaderafeez/solar-tracking-system',
    demo: undefined,
    image: solarTrackerImg,
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
                    alt={`Behind the scenes at Khader Afeez's workshop - Image ${index + 1}`}
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
