import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container-custom">
        <div className="text-center space-y-4">
          <p className="text-sm flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 fill-red-500 text-red-500 animate-pulse" /> 
            by Your Name
          </p>
          <p className="text-sm opacity-80">
            © {currentYear} All rights reserved.
          </p>
          <p className="text-xs opacity-60">
            Embedded Systems Engineer • IoT Specialist • Robotics Engineer
          </p>
        </div>
      </div>
    </footer>
  );
};
