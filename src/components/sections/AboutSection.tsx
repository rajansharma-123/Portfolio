import { User, Award, Users, Lightbulb } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const headerReveal = useScrollReveal();
  const textReveal = useScrollReveal();
  const cardsReveal = useScrollReveal();

  const highlights = [
    {
      icon: Award,
      title: "SIH 2024 Finalist",
      description: "DRDO problem statement on cloud-based DDoS protection",
    },
    {
      icon: Lightbulb,
      title: "Innovation Winner",
      description: "Innovative Bharat 3.0 national competition",
    },
    {
      icon: Award,
      title: "IIT Kanpur",
      description: "2nd position in Tie-Up Startup Program",
    },
    {
      icon: Users,
      title: "Club President",
      description: "Leading TechnoVision Club technical initiatives",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text */}
          <div 
            ref={textReveal.ref}
            className={`space-y-6 reveal-left ${textReveal.isVisible ? 'visible' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 icon-bounce">
              <User className="w-4 h-4 text-primary" />
              <span className="text-primary font-mono text-sm">About Me</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Passionate about{" "}
              <span className="gradient-text">Tech</span> &{" "}
              <span className="gradient-text">Innovation</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                I'm a B.Tech final-year student with a deep passion for Full Stack Development. My journey in tech has been driven 
                by curiosity and a desire to build systems that protect digital assets.
              </p>
              <p>
                As a Smart India Hackathon 2024 finalist, I developed a cloud-based DDoS 
                protection system for DRDO, showcasing my ability to tackle real-world 
                security challenges at scale.
              </p>
              <p>
                Beyond technical skills, I lead the TechnoVision Club as President, 
                organizing technical events, mentoring students, and fostering a culture 
                of innovation and continuous learning.
              </p>
            </div>
          </div>

          {/* Right side - Highlights */}
          <div 
            ref={cardsReveal.ref}
            className={`grid sm:grid-cols-2 gap-4 stagger-children ${cardsReveal.isVisible ? 'visible' : ''}`}
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 card-hover shimmer icon-bounce"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
