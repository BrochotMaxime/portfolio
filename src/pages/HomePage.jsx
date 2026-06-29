import AboutPreviewSection from "../components/sections/AboutPreviewSection";
import ContactCTASection from "../components/sections/ContactCTASection";
import FeaturedProjectsSection from "../components/sections/FeaturedProjectsSection";
import HeroSection from "../components/sections/HeroSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <AboutPreviewSection />
      <ContactCTASection />
    </>
  );
}

export default HomePage;