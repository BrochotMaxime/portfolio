import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";

function LegalNoticePage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("legalNotice.meta.title")}</title>

        <meta name="description" content={t("legalNotice.meta.description")} />
      </Helmet>

      <section className="legal-notice-page">
        <div className="container">
          <SectionTitle
            level="h1"
            title={t("legalNotice.header.title")}
            subtitle={t("legalNotice.header.subtitle")}
          />

          <div className="legal-notice-page__content">
            <Card>
              <h2>{t("legalNotice.publisher.title")}</h2>

              <p>{t("legalNotice.publisher.name")}</p>
            </Card>

            <Card>
              <h2>{t("legalNotice.purpose.title")}</h2>

              <p>{t("legalNotice.purpose.description")}</p>
            </Card>

            <Card>
              <h2>{t("legalNotice.intellectualProperty.title")}</h2>

              <p>{t("legalNotice.intellectualProperty.description")}</p>
            </Card>

            <Card>
              <h2>{t("legalNotice.contact.title")}</h2>

              <p>
                {t("legalNotice.contact.beforeLink")}{" "}
                <Link className="legal-notice-page__link" to="/contact">
                  {t("legalNotice.contact.link")}
                </Link>
                {t("legalNotice.contact.afterLink")}
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default LegalNoticePage;
