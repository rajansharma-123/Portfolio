import { Shield, Cloud, Network, Terminal, Users, Brain } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SkillsSection = () => {
  const headerReveal = useScrollReveal();
  const gridReveal = useScrollReveal();

  const skills = [
  {
    icon: Shield,
    title: "Cybersecurity Fundamentals",
    items: [
      "DDoS Attack Analysis",
      "Vulnerability Assessment (Basic)",
      "Web Security Protocols (HTTPS, JWT)",
      "Secure Web Applications",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Backend Security",
    items: [
      "AWS (EC2, S3, Amplify, Route 53)",
      "Backend Authentication (JWT, RBAC)",
      "API Security & Rate Limiting",
      "Secure Cloud Deployment",
    ],
  },
  {
    icon: Network,
    title: "Tools & Tech Stack",
    items: [
      "Git & GitHub (Version Control)",
      "VS Code & Developer Tools",
      "Postman (API Testing)",
      "Figma (UI / UX Design)",
    ],
  },
  {
    icon: Terminal,
    title: "Full-Stack Development",
    items: [
      "HTML, CSS, JavaScript",
      "React.js & Tailwind CSS",
      "Node.js & Express.js",
      "MongoDB / SQL Databases",
    ],
  },
  {
    icon: Users,
    title: "Leadership",
    items: [
      "Team Management",
      "Workshop & Event Organization",
      "Mentoring & Guidance",
      "Public Speaking",
    ],
  },
  {
    icon: Brain,
    title: "Problem Solving",
    items: [
      "Data Structures & Algorithms",
      "Analytical & Logical Thinking",
      "System Design Basics",
      "Quick Learner & Innovator",
    ],
  },
];

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div 
          ref={headerReveal.ref}
          className={`text-center space-y-4 mb-16 reveal ${headerReveal.isVisible ? 'visible' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 icon-bounce">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-primary font-mono text-sm">Skills & Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive skill set combining technical expertise with leadership capabilities
          </p>
        </div>

        {/* Skills Grid */}
        <div 
          ref={gridReveal.ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${gridReveal.isVisible ? 'visible' : ''}`}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 card-hover shimmer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                  {skill.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center gap-2 text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors duration-300"
                    style={{ transitionDelay: `${itemIndex * 50}ms` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary group-hover:scale-125 transition-all duration-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
