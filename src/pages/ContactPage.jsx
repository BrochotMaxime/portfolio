import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import getResumePath from "../components/utilities/getResumePath";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";

function ContactPage() {
  const { t, i18n } = useTranslation();

  const resumePath = getResumePath(i18n.resolvedLanguage);

  return (
    <>
      <Helmet>
        <title>{t("contact.meta.title")}</title>
        <meta name="description" content={t("contact.meta.description")} />
      </Helmet>

      <section className="contact-page">
        <div className="container">
          <SectionTitle
            level="h1"
            title={t("contact.header.title")}
            subtitle={t("contact.header.subtitle")}
          />

          <div className="contact-page__content">
            <Card>
              <h2>{t("contact.card.title")}</h2>

              <p>{t("contact.card.description")}</p>

              <div className="contact-page__actions">
                <Button href="mailto:brochot.max@gmail.com">
                  <Mail size={18} />
                  <span>{t("buttons.emailMe")}</span>
                </Button>

                <Button
                  href="https://github.com/BrochotMaxime"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  <FaGithub size={18} />
                  <span>GitHub</span>
                </Button>

                <Button
                  href="https://www.linkedin.com/in/maxime-brochot-646989171"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  <FaLinkedin size={18} />
                  <span>LinkedIn</span>
                </Button>

                <Button
                  href={resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  <Download size={18} />
                  <span>{t("buttons.downloadResume")}</span>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
