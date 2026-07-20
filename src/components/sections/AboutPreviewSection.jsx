import { useTranslation } from "react-i18next";

import Card from "../ui/Card";
import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";

function AboutPreviewSection() {
  const { t } = useTranslation();

  return (
    <section className="about-preview-section">
      <div className="container">
        <SectionTitle
          title={t("home.aboutPreview.title")}
          subtitle={t("home.aboutPreview.subtitle")}
        />

        <div className="about-preview-section__content">
          <Card>
            <p>{t("home.aboutPreview.description")}</p>

            <Button to="/about">{t("buttons.aboutMe")}</Button>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default AboutPreviewSection;
