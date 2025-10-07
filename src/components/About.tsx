import { Code, Cpu, Zap, Lightbulb, Rocket, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import profileImage from '@/assets/profile-hero.jpg';

import comedPic from '../aboutgallery/comed(pic).JPG';
import finalPitch from '../aboutgallery/finalpitch.jpg';
import smitWorkshop from '../aboutgallery/smit_workshop.jpg';
import stagePic from '../aboutgallery/stage.jpg';
import workshopPic from '../aboutgallery/workshop.jpg';
import yitIncubation from '../aboutgallery/yenepoyaincubation.jpg';
import ytrPic from '../aboutgallery/ytrpic.jpg';
import yenepoyaIncubation2 from '../aboutgallery/yenepoya incubation.jpg';

const interests = [
  { icon: Cpu, title: 'Embedded Systems', description: 'Microcontrollers & Real-time OS' },
  { icon: Zap, title: 'IoT Solutions', description: 'Connected devices & protocols' },
  { icon: Code, title: 'PCB Design', description: 'Hardware design & fabrication' },
  { icon: Rocket, title: 'Robotics', description: 'Autonomous systems & control' },
  { icon: Lightbulb, title: 'Innovation', description: 'Problem-solving & creativity' },
  { icon: Users, title: 'Collaboration', description: 'Team projects & open source' },
];

const galleryImages = [
  { id: 1, src: comedPic, alt: 'Working on embedded project' },
  { id: 2, src: smitWorkshop, alt: 'Workshop at SMIT' },
  { id: 3, src: stagePic, alt: 'Presenting on stage' },
  { id: 4, src: finalPitch, alt: 'Final pitch presentation' },
  { id: 5, src: workshopPic, alt: 'Group photo at a workshop' },
  { id: 6, src: yitIncubation, alt: 'Yenepoya Incubation Center event' },
  { id: 7, src: ytrPic, alt: 'Yenepoya Robotics Club photo' },
  { id: 8, src: yenepoyaIncubation2, alt: 'Yenepoya Incubation event' },
];

export const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-xl opacity-20" />
              <img
                src={profileImage}
                alt="About Profile"
                className="relative w-full max-w-md rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Bio Text */}
          <div className="space-y-6 animate-fade-in-right">
            <h3 className="text-3xl font-bold gradient-text">
              Passionate Engineer & Innovator
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Afeez, an Electronics & Communication Engineering graduate with over 1.5 years of professional experience, strengthened by multiple award-winning academic projects. I specialize in Embedded C, RTOS, and advanced PCB design, helping companies transform concepts into reliable, manufacturable embedded solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I bring a unique, holistic perspective to every project, bridging the gap between hardware and software. I am a firm believer in continuous learning and staying at the forefront of technological advancements.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding or designing circuits, you can find me exploring new technologies, contributing to open-source projects, or mentoring aspiring engineers.
            </p>
          </div>
        </div>

        {/* Interests Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            My Interests
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <Card
                key={index}
                className="p-6 hover-lift hover:shadow-lg transition-all cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <interest.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{interest.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            Gallery
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg aspect-video hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
