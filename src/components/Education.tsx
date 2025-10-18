import { GraduationCap, Users, Trophy } from 'lucide-react';
import { Card } from '@/components/ui/card';

import areana from '../Educationgallery/areana.jpg';
import linefollower from '../Educationgallery/linefollower.jpg';
import practiceMatch from '../Educationgallery/practice-match.jpg';
import superboat from '../Educationgallery/superboat.jpg';
import winnerJncc from '../Educationgallery/winner-jncc.jpg';
import winnersCodemeet from '../Educationgallery/winners-codemeet.jpg';
import winnersSMVITM from '../Educationgallery/winners-SMVITM.jpg';
import winningMoment from '../Educationgallery/winning_moment_.jpg';

const extracurricularImages = [
  { id: 1, src: winningMoment, alt: 'Winning moment with the team' },
  { id: 2, src: winnersSMVITM, alt: 'Winners at SMVITM' },
  { id: 3, src: winnersCodemeet, alt: 'Winners at Codemeet' },
  { id: 4, src: winnerJncc, alt: 'Winner at JNCC' },
  { id: 5, src: superboat, alt: 'Superboat robotics competition' },
  { id: 6, src: practiceMatch, alt: 'Practice match with robots' },
  { id: 7, src: linefollower, alt: 'Line follower robot on the track' },
  { id: 8, src: areana, alt: 'Robotics competition arena' },
];

export const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* College Information */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <Card className="p-8 hover:shadow-xl transition-all animate-fade-in">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-full bg-primary/10">
                <GraduationCap className="h-10 w-10 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Bachelor of Engineering (B.E.) in Electronics and Communications Engineering
                </h3>
                <p className="text-lg text-muted-foreground mb-2">
                  Yenepoya Institute of Technology
                </p>
                <p className="text-muted-foreground mb-4">September 2020 - June 2024</p>
                <div className="space-y-2">
                  <div className="mt-4">
                    <p className="font-semibold mb-2">Relevant Coursework:</p>
                    <p className="text-muted-foreground">
                      Embedded Systems, Digital Signal Processing, VLSI Design, Wireless Communication, Microwave Engineering, Analog & Digital Circuits
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all animate-fade-in">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-full bg-primary/10">
                <GraduationCap className="h-10 w-10 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Pre-University Education (PCMB Stream)
                </h3>
                <p className="text-lg text-muted-foreground mb-2">
                  St. Joseph's Pre-University College
                </p>
                <p className="text-muted-foreground mb-4">2018 - 2020</p>
                <div className="space-y-2">
                  <div className="mt-4">
                    <p className="font-semibold mb-2">Relevant Coursework:</p>
                    <p className="text-muted-foreground">
                      Built a strong foundational knowledge in core scientific principles, including Physics, Chemistry, and Mathematics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Extracurricular Activities */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
            <Users className="h-8 w-8 text-primary" />
            <h3 className="text-3xl font-bold">Extracurricular Activities</h3>
          </div>
          
          <Card className="p-8 hover:shadow-xl transition-all animate-fade-in mb-8">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-full bg-primary/10">
                <Trophy className="h-10 w-10 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Yenthrammana Robotics Club
                </h3>
                <p className="text-lg font-semibold text-primary mb-2">
                  Technical Lead
                </p>
                <p className="text-muted-foreground mb-4">2022 - 2024</p>
                <div className="space-y-2">
                  <div className="mt-4">
                    <p className="font-semibold mb-2">Achievements & Awards:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Led and mentored multiple technical teams for competitions including RoboWar, Robo Soccer, Robo Race, and Line Follower</li>
                      <li>Spearheaded a 300% improvement in club performance, resulting in 4 first-place, 5 second-place, and 3 third-place awards</li>
                      <li>Competed at various inter-collegiate and national events</li>
                      <li>Successfully revitalized the club's technical capabilities and competitive standing</li>
                      <li>Published a research paper on a smart interactive device for students with ASD in the IJRAR journal</li>
                      <li>Achieved winner status at the ISTE Ideathon 2023</li>
                      <li>Secured 3rd place in the Technocraft Booth Competition</li>
                      <li>Recognized as winners at Yenmanthana 2024</li>
                      <li>Ranked in the Top 50 for KPIT Sparkle</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Team Gallery */}
          <div>
            <h4 className="text-xl font-bold text-center mb-6">Team Work & Awards</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {extracurricularImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg aspect-square hover-lift animate-fade-in"
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
      </div>
    </section>
  );
};
