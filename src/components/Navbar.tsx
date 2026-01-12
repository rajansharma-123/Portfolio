import { useState, useEffect } from "react";
import { Shield, Menu, X, Sun, Moon, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import RajanIMG from "@/assets/RajanIMG.jpg";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#startup", label: "Startup" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initDark = stored ? stored === "dark" : prefersDark;
    setIsDark(initDark);
    if (initDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["about", "experience", "skills", "projects", "startup", "achievements", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {
      // ignore
    }
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-foreground font-semibold group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="relative p-0.5 rounded-full border border-primary/30 group-hover:border-primary transition-colors duration-300">
              <img
                src={RajanIMG}
                alt="Rajan Sharma"
                className="w-10 h-10 md:w-[50px] md:h-[50px] rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="group-hover:text-primary transition-colors duration-300 ml-2 md:ml-3 text-sm md:text-base">
              Rajan Sharma
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 rounded-md text-foreground hover:text-primary transition-colors duration-200"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`relative text-sm font-medium transition-colors duration-300 underline-hover ${
                  activeSection === link.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="default"
              size="sm"
              onClick={() => scrollToSection("#contact")}
              className="group"
            >
              <span className="group-hover:scale-105 transition-transform duration-300">Connect Me</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Toggle mobile menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-background/95 backdrop-blur-lg border-b border-border overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container px-4 py-4 space-y-2">
          <div className="flex items-center justify-end px-2">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 rounded-md text-foreground hover:text-primary transition-colors duration-200"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          {navLinks.map((link, index) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`block w-full text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all duration-300 ${
                activeSection === link.href.slice(1) ? "text-primary bg-primary/10" : ""
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </button>
          ))}
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
