import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const headerReveal = useScrollReveal();
  const linksReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rajan-sharma-542007265/",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/rajansharma-123",
    },
    {
      icon: Twitter,
      label: "Twitter / X",
      href: "#",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:rajanbittusharma1234@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <div 
            ref={headerReveal.ref}
            className={`space-y-4 mb-12 reveal ${headerReveal.isVisible ? 'visible' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 icon-bounce">
              <Send className="w-4 h-4 text-primary" />
              <span className="text-primary font-mono text-sm">Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Open to opportunities in cybersecurity, cloud security, and innovative tech projects. 
              Let's discuss how we can work together.
            </p>
          </div>

          {/* Social Links */}
          <div 
            ref={linksReveal.ref}
            className={`flex flex-wrap justify-center gap-4 mb-12 stagger-children ${linksReveal.isVisible ? 'visible' : ''}`}
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 card-hover shimmer"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:scale-125 transition-all duration-300" />
                <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">{social.label}</span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div 
            ref={ctaReveal.ref}
            className={`p-8 rounded-2xl card-gradient border border-border hover:border-primary/30 transition-all duration-500 group reveal-scale ${ctaReveal.isVisible ? 'visible' : ''}`}
          >
            <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
              Ready to collaborate?
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether it's a security project, startup opportunity, or just a tech conversation, 
              I'd love to hear from you.
            </p>
            <Button variant="hero" size="lg" asChild className="group/btn">
              <a href="mailto:rajanbittusharma1234@gmail.com">
                <Mail className="w-5 h-5 group-hover/btn:animate-bounce" />
                Send an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
