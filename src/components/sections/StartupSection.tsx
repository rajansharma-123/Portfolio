import { Rocket } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import AumryxLogo from "@/assets/achievements/aumryxlogo.jpg";

const StartupSection = () => {
  const sectionReveal = useScrollReveal();

  return (
    <section id="startup" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div 
          ref={sectionReveal.ref} 
          className={`reveal-fade-in ${sectionReveal.isVisible ? 'visible' : ''}`}
        >
          <div className="flex flex-col items-center text-center space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-primary font-mono text-sm">My Startup</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Introducing <a href="https://aumryx.com/" target="_blank" rel="noopener noreferrer" className="gradient-text hover:underline">Aumryx</a>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              I'm building a platform to empower businesses by providing custom-built applications and websites. We focus on delivering a demo-first approach to ensure our solutions perfectly match our clients' needs.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto p-8 rounded-xl card-gradient border border-border">
            <div className="flex justify-center mb-6">
              <img src={AumryxLogo} alt="Aumryx Logo" className="w-24 h-24 rounded-full object-cover border-2 border-primary" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-6">Our Services</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-lg mb-2">Custom Development</h4>
                <p className="text-muted-foreground">
                  We specialize in creating tailor-made web and mobile applications from the ground up. Our process starts with a functional demo, allowing clients to see our vision before committing.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Website Security</h4>
                <p className="text-muted-foreground">
                  Inspired by services like Cloudflare, we offer robust website security solutions at an affordable price, protecting your digital assets from threats.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="https://aumryx.com/" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">
                  Visit Aumryx
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupSection;
