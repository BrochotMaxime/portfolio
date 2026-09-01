import { useTranslation } from "react-i18next";

import AboutPreviewSection from "../components/sections/AboutPreviewSection";
import ContactCTASection from "../components/sections/ContactCTASection";
import FeaturedProjectsSection from "../components/sections/FeaturedProjectsSection";
import HeroSection from "../components/sections/HeroSection";

import Seo from "../components/utilities/Seo";

function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t("home.meta.title")}
        description={t("home.meta.description")}
        path="/"
      />

      <HeroSection />
      <FeaturedProjectsSection />
      <AboutPreviewSection />
      <ContactCTASection />
    </>
  );
}

export default HomePage;
