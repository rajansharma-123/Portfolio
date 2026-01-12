import React from "react";
import { Button } from "@/components/ui/button";
import { Shield, ChevronDown } from "lucide-react";
import resume from "@/assets/achievements/Rajan_Sharma_Resume.pdf";

// Simple embed for dotlottie web component (loads player from CDN at runtime)

const DotLottieEmbed: React.FC<{ src: string; className?: string }> = ({ src, className }) => {
  React.useEffect(() => {
    if ((window as any).DotLottiePlayer) return;
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@lottiefiles/dotlottie-player@1.0.4/dist/dotlottie-player.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      // keep the script for caching; do not remove
    };
  }, []);

  return (
    // @ts-ignore - custom element
    <dotlottie-player className={className} src={src} loop autoplay style={{ width: "100%", height: "100%" }} />
  );
};

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient cyber-grid overflow-hidden">
      {/* Background orbs (static) */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
      
      {/* Static particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
          />
        ))}
      </div>

      {/* Lottie animation (visible on large screens) */}
      <div className="absolute -right-8 top-12 hidden lg:block pointer-events-auto z-0">
        <div className="w-[420px] h-[420px]">
          {/* <DotLottieEmbed
            src="https://lottie.host/bcb211d0-2be7-433d-9c49-26f424f85c4a/1muJz9Xw55.lottie"
            className={"w-full h-full"}
          /> */}
        </div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Icon */}
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all duration-500" />
            <div className="relative p-4 rounded-full border border-primary/30 bg-secondary/50 backdrop-blur-sm group-hover:border-primary group-hover:scale-110 transition-all duration-500">
              <Shield className="w-12 h-12 text-primary" />
            </div>
          </div>

          {/* Hero copy updated per user: concise profile + CTA */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Full-Stack Developer
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Building full-stack applications and REST APIs using modern technologies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="hero" size="lg" onClick={scrollToProjects} className="group">
              <span className="group-hover:translate-x-1 transition-transform duration-300">View Projects</span>
            </Button>

            <a href={resume} download="Rajan_Sharma_Resume.pdf" className="group">
              <Button variant="heroOutline" size="lg" className="group">
                <span className="group-hover:translate-x-1 transition-transform duration-300">Download Resume</span>
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 pt-12">
            {[
              { value: "SIH'24", label: "Finalist" },
              { value: "IIT-K", label: "2nd Position" },
              { value: "Winner", label: "Innovative Bharat" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center group cursor-default"
              >
                <p className="text-2xl md:text-3xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-xs md:text-sm group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group" onClick={scrollToProjects}>
          <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
