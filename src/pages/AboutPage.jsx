import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("about.meta.title")}</title>
        <meta name="description" content={t("about.meta.description")} />
      </Helmet>

      <section className="about-page">
        <div className="container">
          <SectionTitle
            level="h1"
            title={t("about.header.title")}
            subtitle={t("about.header.subtitle")}
          />

          <div className="about-page__content">
            <Card>
              <h2>{t("about.whoIAm.title")}</h2>

              <p>{t("about.whoIAm.paragraph1")}</p>

              <p>{t("about.whoIAm.paragraph2")}</p>
            </Card>

            <Card>
              <h2>{t("about.coreQualities.title")}</h2>

              <div className="about-page__badges">
                <Badge>{t("about.coreQualities.curious")}</Badge>
                <Badge>{t("about.coreQualities.methodical")}</Badge>
                <Badge>{t("about.coreQualities.reliable")}</Badge>
                <Badge>{t("about.coreQualities.adaptable")}</Badge>
                <Badge>{t("about.coreQualities.detailOriented")}</Badge>
              </div>
            </Card>

            <Card>
              <h2>{t("about.developmentPhilosophy.title")}</h2>

              <p>{t("about.developmentPhilosophy.paragraph1")}</p>

              <p>{t("about.developmentPhilosophy.paragraph2")}</p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
