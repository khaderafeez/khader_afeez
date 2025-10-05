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
              <a href="/resume.pdf" download>
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* PDF Viewer */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative rounded-lg overflow-hidden shadow-2xl border bg-card">
              {/* Fallback for PDF viewer */}
              <div className="bg-muted/50 p-12 text-center">
                <FileText className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Resume Preview</h3>
                <p className="text-muted-foreground mb-6">
                  To view the resume, please upload your PDF file named 'resume.pdf' to the public folder,
                  or click the download button above to download the resume directly.
                </p>
                <div className="bg-background p-6 rounded-lg max-w-2xl mx-auto text-left">
                  <h4 className="font-bold mb-4">Quick Summary:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Senior Embedded Systems Engineer with 2+ years experience</li>
                    <li>• Expertise in IoT, Robotics, and PCB Design</li>
                    <li>• B.Tech in Electronics & Communication (CGPA: 8.9/10)</li>
                    <li>• Proficient in C/C++, Python, JavaScript, and embedded platforms</li>
                    <li>• Multiple certifications in cloud, IoT, and embedded systems</li>
                    <li>• Published research in embedded system optimization</li>
                  </ul>
                </div>
              </div>

              {/* 
                Uncomment this section when you have a resume.pdf file in the public folder:
                
                <iframe
                  src="/resume.pdf"
                  className="w-full h-[800px]"
                  title="Resume PDF"
                />
              */}
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <p className="text-sm text-muted-foreground">
              Last updated: January 2024 • Available in PDF format
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
