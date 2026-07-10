import { useTranslation } from "react-i18next";

import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";

function ContactCTASection() {
  const { t } = useTranslation();

  return (
    <section className="contact-cta-section">
      <div className="container">
        <SectionTitle
          title={t("home.contactCTA.title")}
          subtitle={t("home.contactCTA.subtitle")}
        />

        <div className="contact-cta-section__actions">
          <Button to="/contact">{t("buttons.contactMe")}</Button>
        </div>
      </div>
    </section>
  );
}

export default ContactCTASection;
