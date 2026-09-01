import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";

import Seo from "../components/utilities/Seo";

function LegalNoticePage() {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t("legalNotice.meta.title")}
        description={t("legalNotice.meta.description")}
        path="/legal-notice"
      />

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
