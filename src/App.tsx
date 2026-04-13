import Navbar from "./components/portfolio/Navbar";
import HeroSection from "./components/portfolio/HeroSection";
import AboutSkillsSection from "./components/portfolio/AboutSkillsSection";
import ExperienceSection from "./components/portfolio/ExperienceSection";
import ProjectsSection from "./components/portfolio/ProjectsSection";
import ContactSection from "./components/portfolio/ContactSection";
import Footer from "./components/portfolio/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#f8fafc_0%,_#ffffff_30%,_#f8fafc_100%)] text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
