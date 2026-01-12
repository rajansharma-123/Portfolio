import { Briefcase } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import CelebalImage from "@/assets/achievements/ach9.jpg";

const ExperienceSection = () => {
  const sectionReveal = useScrollReveal();

  const experiences = [
    {
      icon: Briefcase,
      company: "Celebal Technologies",
      role: "Backend Development Intern",
      duration: "June 2025 - August 2025",
      description: "During my internship, I focused on backend development using Node.js and Express.js to build scalable server-side applications. I developed RESTful APIs, implemented asynchronous programming patterns, and contributed to a final project: a Restaurant Chatbot for browsing menus, making reservations, and placing orders.",
      image: CelebalImage,
      certificateUrl: "https://drive.google.com/uc?export=download&id=1Y-ADkGZBOYjcPmH7dLfM-aDkFMxb3vgK", // User will provide this
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div 
          ref={sectionReveal.ref} 
          className={`reveal-fade-in ${sectionReveal.isVisible ? 'visible' : ''}`}
        >
          <div className="flex flex-col items-center text-center space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-primary font-mono text-sm">Experience</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              My Professional <span className="gradient-text">Journey</span>
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 card-hover shimmer icon-bounce mb-6"
              >
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1 flex justify-center">
                    <div className="max-w-sm">
                      <img 
                        src={exp.image} 
                        alt={`${exp.company} logo`}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <exp.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h3 className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                            {exp.company}
                          </h3>
                          <span className="text-muted-foreground text-sm">{exp.duration}</span>
                        </div>
                        <p className="text-muted-foreground font-mono text-sm mb-2">{exp.role}</p>
                        <p className="text-muted-foreground text-sm mb-4">
                          {exp.description}
                        </p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          disabled={!exp.certificateUrl}
                          onClick={() => window.open(exp.certificateUrl, '_blank')}
                        >
                          View Certificate
                        </Button>
                      </div>
                    </div>
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

export default ExperienceSection;
