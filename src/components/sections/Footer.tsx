import { Shield, Heart, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm">
              © {currentYear} All rights reserved.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/rajan-sharma-542007265/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/rajansharma-123"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:rajanbittusharma1234@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Tagline */}
          <p className="flex items-center gap-1 text-muted-foreground text-sm">
            Built with{" "}
            <Heart className="w-4 h-4 text-primary fill-primary" />{" "}
            for security, innovation & continuous learning.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
