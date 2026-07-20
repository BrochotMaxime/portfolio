import { useTranslation } from "react-i18next";

import Button from "../ui/Button";

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-section__content">
          <h1 className="hero-section__title">{t("home.hero.title")}</h1>

          <p className="hero-section__tagline">{t("home.hero.subtitle")}</p>

          <div className="hero-section__actions">
            <Button to="/projects">{t("buttons.viewProjects")}</Button>

            <Button to="/contact" variant="secondary">
              {t("buttons.contactMe")}
            </Button>
          </div>

          <a
            className="hero-section__scroll-indicator"
            href="#featured-projects"
            aria-label={t("home,hero.scrollLabel")}
          >
            <span className="hero-section__scroll-arrow">⌄</span>

            <span className="hero-section__scroll-text">
              {t("home.hero.scrollText")}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
