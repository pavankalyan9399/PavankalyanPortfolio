import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import CertificationsMain from "./components/certificationsSection/CertificationsMain"; // Updated
import FooterMain from "./components/footer/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";

function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      {/* Navigation Bar */}
      <NavbarMain />

      {/* Hero Section */}
      <HeroMain />
      <HeroGradient />

      {/* Sub-Hero Section */}
      <SubHeroMain />

      {/* About Me Section */}
      <AboutMeMain />

      {/* Skills Section */}
      <SkillsMain />
      <SubSkills />

      {/* Certifications Section */}
      <CertificationsMain />

      {/* Projects Section */}
      <ProjectsMain />

      {/* Contact Me Section */}
      <ContactMeMain />

      {/* Footer Section */}
      <FooterMain />
    </main>
  );
}

export default App;