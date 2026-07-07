import AboutPreviewSection from "../components/sections/AboutPreviewSection";
import ContactCTASection from "../components/sections/ContactCTASection";
import FeaturedProjectsSection from "../components/sections/FeaturedProjectsSection";
import HeroSection from "../components/sections/HeroSection";

import { Helmet } from "react-helmet-async";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Maxime Brochot | Web Developer</title>
        <meta
          name="description"
          content="Portfolio of Maxime Brochot, Web Developer, showcasing clear, maintainable and user-focused web applications."
        />
      </Helmet>

      <HeroSection />
      <FeaturedProjectsSection />
      <AboutPreviewSection />
      <ContactCTASection />
    </>
  );
}

export default HomePage;
