import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const navLinks = [{
  name: 'Home',
  href: '/'
}, {
  name: 'About',
  href: '/about'
}, {
  name: 'Education',
  href: '/education'
}, {
  name: 'Experience',
  href: '/experience'
}, {
  name: 'Projects',
  href: '/projects'
}, {
  name: 'Skills',
  href: '/skills'
}, {
  name: 'Resume',
  href: '/resume'
}, {
  name: 'Contact',
  href: '/contact'
}];
export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  return <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-md' : 'bg-transparent'}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="text-xl md:text-2xl font-bold gradient-text hover:scale-105 transition-transform"></Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map(link => <Link key={link.name} to={link.href} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${location.pathname === link.href ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted'}`}>
                  {link.name}
                </Link>)}
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />

        {/* Menu Panel */}
        <div className={`absolute right-0 top-0 bottom-0 w-64 bg-background shadow-2xl transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-lg font-bold gradient-text">Menu</span>
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
              <X />
            </Button>
          </div>
          <nav className="p-4 space-y-2">
            {navLinks.map(link => <Link key={link.name} to={link.href} className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${location.pathname === link.href ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted'}`}>
                {link.name}
              </Link>)}
          </nav>
        </div>
      </div>
    </>;
};