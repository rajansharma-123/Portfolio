import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import StartupSection from "@/components/sections/StartupSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Rajan Sharma and Their Journey</title>
        <meta
          name="description"
          content="Portfolio of a B.Tech final-year student specializing in cybersecurity and cloud security. SIH 2024 finalist, Innovative Bharat winner, and TechnoVision Club President."
        />
        <meta
          name="keywords"
          content="cybersecurity, cloud security, DDoS protection, network security, portfolio, B.Tech student, Smart India Hackathon"
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <StartupSection />
          <AchievementsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
