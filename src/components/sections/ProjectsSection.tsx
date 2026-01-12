import { Folder, Shield, Server, Activity, Lock, Rocket, Github, LucideIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Project {
  title: string;
  description: string;
  features: string[];
  tools: string[];
  highlight: string;
  icon: LucideIcon;
  image?: string;
  github?: string;
}

const ProjectsSection = () => {
  const headerReveal = useScrollReveal();
  const projectReveal = useScrollReveal();
  const comingSoonReveal = useScrollReveal();

  const projects: Project[] = [
    {
      title: "Cloud-Based DDoS Protection System",
      description: "A comprehensive DDoS protection system designed for cloud environments, developed as part of Smart India Hackathon 2024 for a DRDO problem statement.",
      features: [
        "Real-time traffic monitoring to detect abnormal request patterns",
        "Automatic blocking and rate-limiting for malicious traffic",
        "High availability and scalability architecture",
        "Service reliability and uptime optimization",
      ],
      tools: ["Cloud Infrastructure", "Traffic Analysis", "Rate Limiting", "Security Protocols"],
      highlight: "SIH 2024 - DRDO",
      icon: Shield,
    },
    {
      title: "DefCom - Cross-Platform Chat App",
      description: "A cross-platform chat and HQ dashboard application built with Expo (React Native) for the client and an Express + Socket.IO backend for real-time messaging.",
      features: [
        "Real-time group chat using Socket.IO",
        "User registration and authentication",
        "Message history stored in MongoDB",
        "Admin/HQ routes and dashboard endpoints",
      ],
      tools: ["React Native", "Expo", "Node.js", "Express.js", "Socket.IO", "MongoDB"],
      highlight: "Full-Stack Development",
      icon: Server,
      github: "https://github.com/rajansharma-123/Defcom",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div 
          ref={headerReveal.ref}
          className={`text-center space-y-4 mb-16 reveal ${headerReveal.isVisible ? 'visible' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 icon-bounce">
            <Folder className="w-4 h-4 text-primary" />
            <span className="text-primary font-mono text-sm">Featured Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Building <span className="gradient-text">Secure</span> Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Projects that demonstrate practical application of cybersecurity and cloud technologies
          </p>
        </div>

        {/* Projects */}
        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={projectReveal.ref}
              className={`group p-8 rounded-2xl card-gradient border border-border hover:border-primary/20 transition-all duration-500 card-hover reveal-scale ${projectReveal.isVisible ? 'visible' : ''}`}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-500">
                    <project.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-primary font-mono text-sm mt-1">
                      <Activity className="w-3 h-3 animate-pulse" />
                      {project.highlight}
                    </span>
                  </div>
                </div>
                {/* GitHub Link */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-lg mb-6 group-hover:text-foreground/70 transition-colors duration-300">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-foreground font-semibold mb-3 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary" />
                  Key Features
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-muted-foreground text-sm group-hover:text-foreground/70 transition-all duration-300"
                      style={{ transitionDelay: `${featureIndex * 100}ms` }}
                    >
                      <Server className="w-4 h-4 text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-mono border border-border hover:border-primary/20 hover:text-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Coming Soon Card */}
          <div 
            ref={comingSoonReveal.ref}
            className={`p-8 rounded-2xl border border-dashed border-border bg-secondary/20 text-center hover:border-primary/30 transition-all duration-500 group reveal ${comingSoonReveal.isVisible ? 'visible' : ''}`}
          >
            <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
              <Rocket className="w-8 h-8 text-primary group-hover:animate-bounce" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              More Projects Coming Soon
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Continuously learning and building new security solutions. 
              Stay tuned for upcoming projects in cloud security and threat detection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
