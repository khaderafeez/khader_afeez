import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'khaderafeez16@gmail.com',
    href: 'mailto:khaderafeez16@gmail.com',
  },
  /*{
    icon: Phone,
    label: 'Phone',
    value: '+91 81052 XXXXX',
    href: 'tel:+9181052XXXXX',
  },*/
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mangalore, Karnataka, India',
    href: '#',
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/khaderafeez',
    color: 'hover:bg-gray-800 hover:text-white',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'www.linkedin.com/in/khaderafeez',
    color: 'hover:bg-blue-600 hover:text-white',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/khader_afeez',
    color: 'hover:bg-pink-600 hover:text-white',
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-left">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="p-4 hover-lift transition-all"
                    >
                      <a
                        href={info.href}
                        className="flex items-center gap-4 group"
                      >
                        <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <info.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {info.label}
                          </p>
                          <p className="font-semibold">{info.value}</p>
                        </div>
                      </a>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      size="lg"
                      variant="outline"
                      className={`hover-lift transition-all ${social.color}`}
                      asChild
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <social.icon className="h-5 w-5" />
                        <span className="hidden sm:inline">{social.label}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <h4 className="font-bold text-lg mb-2">Available for Work</h4>
                <p className="text-muted-foreground">
                  I'm currently open to new opportunities and exciting projects.
                  Feel free to reach out!
                </p>
              </Card>
            </div>

            {/* Contact Form (Optional) */}
            <div className="animate-fade-in-right">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 hover-lift"
                  >
                    <Send className="h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
