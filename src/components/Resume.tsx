import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

export const Resume = () => {
  return (
    <section id="resume" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Resume</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4">
            View or download my complete professional resume
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Download Button */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <Button
              size="lg"
              className="gap-2 hover-lift shadow-lg"
              asChild
            >
              <a href="/Khader_afeez.pdf" download>
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* PDF Viewer */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative rounded-lg overflow-hidden shadow-2xl border bg-card">
              <iframe
                src="/Khader_afeez.pdf"
                className="w-full h-[800px]"
                title="Resume PDF"
              />
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <p className="text-sm text-muted-foreground">
              Last updated: July 2025 • Available in PDF format
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
