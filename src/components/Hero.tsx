import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Instagram, ChevronDown } from 'lucide-react';
import profileImage from '@/assets/profile-hero.jpg';
const roles = ['Embedded Systems Engineer', 'IoT & Robotics Specialist', 'PCB Designer'];
export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex(prev => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold gradient-text">Khader Afeez</h1>
            </div>

            {/* Typewriter effect */}
            <div className="h-16 flex items-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                <span className="inline-block min-w-[20px]">{displayedText}</span>
                <span className="inline-block w-0.5 h-8 bg-primary ml-1 animate-blink" />
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg">
              Electronics & Communication Engineer passionate about hands-on innovation. I specialize in transforming concepts into real-world embedded solutions by blending expertise in PCB design, firmware development, and robotics. Let's build something amazing together.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button size="icon" variant="outline" className="hover-lift hover:bg-primary hover:text-primary-foreground transition-all" asChild>
                <a href="https://www.linkedin.com/in/khaderafeez" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="outline" className="hover-lift hover:bg-primary hover:text-primary-foreground transition-all" asChild>
                <a href="https://github.com/khaderafeez" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="outline" className="hover-lift hover:bg-primary hover:text-primary-foreground transition-all" asChild>
                <a href="https://www.instagram.com/khader_afeez" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="hover-lift">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button size="lg" variant="outline" className="hover-lift">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center animate-fade-in-right">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <img src={profileImage} alt="Professional Profile" className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary/20 shadow-2xl group-hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={scrollToAbout} className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" aria-label="Scroll to about section">
        <ChevronDown className="h-8 w-8 text-primary" />
      </button>
    </section>;
};