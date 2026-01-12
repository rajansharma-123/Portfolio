import { Trophy, Medal, Award, Crown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Image imports - place your 8 achievement images here:
// src/assets/achievements/ach1.jpg ... ach8.jpg
import ach1 from "@/assets/achievements/ach1.jpg";
import ach2 from "@/assets/achievements/ach2.jpg";
import ach3 from "@/assets/achievements/ach3.jpg";
import ach4 from "@/assets/achievements/ach4.jpg";
import ach5 from "@/assets/achievements/ach5.jpg";
import ach6 from "@/assets/achievements/ach6.jpg";
import ach7 from "@/assets/achievements/ach7.jpg";
import ach8 from "@/assets/achievements/ach8.jpg";


const AchievementsSection = () => {
  const headerReveal = useScrollReveal();
  const timelineReveal = useScrollReveal();

  const achievements = [
    {
      icon: Trophy,
      title: "Smart India Hackathon 2024",
      subtitle: "Finalist",
      description: "Selected for DRDO problem statement on cloud-based DDoS protection system",
      image: ach1,
    },
    {
      icon: Crown,
      title: "Innovative Bharat 3.0",
      subtitle: "Winner",
      description: "National-level innovation competition recognizing breakthrough ideas",
      image: ach2,
    },
    {
      icon: Medal,
      title: "Tie-Up Startup Program",
      subtitle: "2nd Position",
      description: "IIT Kanpur's entrepreneurship & innovation program",
      image: ach3,
    },
    {
      icon: Award,
      title: "TechnoVision Club",
      subtitle: "President",
      description: "Led technical initiatives, mentored students, organized events",
      image: ach4,
    },
    {
      icon: Trophy,
      title: "IIT Delhi",
      subtitle: "Start-up",
      description: "Participated in start-up mind at FITT IIT Delhi",
      image: ach5,
    },
    {
      icon: Crown,
      title: "Hackathon Runner-up",
      subtitle: "Team Project",
      description: "Built a Alex AI Chat Bot",
      image: ach6,
    },
    {
      icon: Medal,
      title: "Hackathon Winner",
      subtitle: "Team Work",
      description: "Arduino Based Smart Blind Stick For Blind Person(IOT)",
      image: ach7,
    },
    {
      icon: Award,
      title: "Hackathon Runner-up",
      subtitle: "Team Work",
      description: "Participated in HackStasy 2025 at SRM University",
      image: ach8,
    },
  ];

  return (
    <section id="achievements" className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div
          ref={headerReveal.ref}
          className={`text-center space-y-4 mb-12 reveal ${headerReveal.isVisible ? 'visible' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 icon-bounce">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-primary font-mono text-sm">Achievements</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Recognition & <span className="gradient-text">Milestones</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Accomplishments that reflect dedication to innovation and excellence
          </p>
        </div>

        {/* Timeline (keeps the original list style) */}
        <div
          ref={timelineReveal.ref}
          className={`max-w-3xl mx-auto stagger-children ${timelineReveal.isVisible ? 'visible' : ''}`}
        >
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />

            <div className="space-y-8">
              {achievements.slice(0, 4).map((achievement, index) => (
                <div key={index} className="group relative flex gap-6 md:gap-8">
                  <div className="relative z-10 p-4 rounded-xl border border-border bg-card shrink-0 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] group-hover:scale-110">
                    <achievement.icon className="w-6 h-6 text-primary group-hover:animate-pulse" />
                  </div>

                  <div className="flex-1 p-6 rounded-xl card-gradient border border-border group-hover:border-primary/30 transition-all duration-500 card-hover shimmer">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <span className="text-sm font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        {achievement.subtitle}
                      </span>
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery of 8 achievement images with hover overlay */}
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-xl group cursor-pointer transform transition-all duration-500 hover:scale-105"
                aria-label={item.title}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 sm:h-52 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-sm text-primary font-mono mb-1">{item.subtitle}</p>
                    <h4 className="text-white font-bold text-lg leading-tight">{item.title}</h4>
                    <p className="text-sm text-white/80 mt-1 hidden sm:block">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground text-center text-sm mt-6">
           
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
