import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

function ResumePrintPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("resume.meta.printTitle")}</title>
      </Helmet>

      <main className="resume-print">
        <header className="resume-print__header">
          <h1>Maxime Brochot</h1>

          <p>{t("resume.header.role")}</p>

          <address>
            {t("resume.header.location")} ·{" "}
            <a href="mailto:brochot.max@gmail.com">brochot.max@gmail.com</a> ·{" "}
            <a href="https://github.com/BrochotMaxime">
              github.com/BrochotMaxime
            </a>{" "}
            · <a href="https://maxime-brochot.dev">maxime-brochot.dev</a>
          </address>
        </header>

        <section>
          <h2>{t("resume.sections.profile")}</h2>

          <p>{t("resume.profile.paragraph1")}</p>
        </section>

        <section>
          <h2>{t("resume.sections.skills")}</h2>

          <p>
            <strong>{t("resume.skills.frontend")}:</strong> React, JavaScript,
            HTML5, CSS3, SCSS, {t("resume.skills.accessibility")}
          </p>

          <p>
            <strong>{t("resume.skills.backend")}:</strong> Node.js, Express,
            REST API, {t("resume.skills.authentication")}
          </p>

          <p>
            <strong>{t("resume.skills.databases")}:</strong> MySQL, MongoDB,
            Sequelize, Mongoose
          </p>

          <p>
            <strong>{t("resume.skills.tools")}:</strong> Git, GitHub, Vite,
            Swagger, ESLint, Prettier, ADR
          </p>
        </section>

        <section>
          <h2>{t("resume.sections.projects")}</h2>

          <article>
            <h3>{t("projects.portfolio.title")}</h3>

            <p className="resume-print__meta">
              React · React Router · SCSS · Vite
            </p>

            <p>{t("resume.projects.portfolio.description")}</p>
          </article>

          <article>
            <h3>{t("projects.trouveTonArtisan.title")}</h3>

            <p className="resume-print__meta">
              React · Node.js · Express · MySQL · Sequelize
            </p>

            <p>{t("resume.projects.trouveTonArtisan.description")}</p>
          </article>

          <article>
            <h3>{t("projects.portDePlaisanceRussell.title")}</h3>

            <p className="resume-print__meta">
              Node.js · Express · MongoDB · Swagger
            </p>

            <p>{t("resume.projects.portDePlaisanceRussell.description")}</p>
          </article>
        </section>

        <section>
          <h2>{t("resume.sections.experience")}</h2>

          <article>
            <h3>{t("resume.experience.castel.role")} — Castel Engineering</h3>

            <p className="resume-print__meta">
              {t("resume.experience.castel.dateLocation")}
            </p>

            <ul>
              <li>{t("resume.experience.castel.tasks.planning")}</li>

              <li>{t("resume.experience.castel.tasks.management")}</li>
            </ul>
          </article>

          <article>
            <h3>{t("resume.experience.tami.role")} — TAMI Industries</h3>

            <p className="resume-print__meta">
              {t("resume.experience.tami.dateLocation")}
            </p>

            <ul>
              <li>{t("resume.experience.tami.tasks.management")}</li>

              <li>{t("resume.experience.tami.tasks.optimization")}</li>

              <li>{t("resume.experience.tami.tasks.erp")}</li>
            </ul>
          </article>

          <article>
            <h3>
              {t("resume.experience.airFrance.role")} — Air France Industries
            </h3>

            <p className="resume-print__meta">
              {t("resume.experience.airFrance.dateLocation")}
            </p>

            <ul>
              <li>{t("resume.experience.airFrance.tasks.improvement")}</li>

              <li>{t("resume.experience.airFrance.tasks.analysis")}</li>
            </ul>
          </article>
        </section>

        <section>
          <h2>{t("resume.sections.education")}</h2>

          <p>
            <strong>{t("resume.education.webDevelopment.title")}</strong> —
            Centre Européen de Formation ·{" "}
            {t("resume.education.webDevelopment.date")}
          </p>

          <p>
            <strong>{t("resume.education.engineering.title")}</strong> — SIGMA
            Clermont · {t("resume.education.engineering.date")}
          </p>

          <p>
            <strong>{t("resume.education.preparatoryClasses.title")}</strong> —{" "}
            {t("resume.education.preparatoryClasses.field")} ·{" "}
            {t("resume.education.preparatoryClasses.date")}
          </p>
        </section>

        <section>
          <h2>{t("resume.sections.languages")}</h2>

          <p>
            {t("resume.languages.french")} · {t("resume.languages.english")}
          </p>
        </section>

        <section>
          <h2>{t("resume.sections.interests")}</h2>

          <p>
            {t("resume.interests.trailRunning")} ·{" "}
            {t("resume.interests.scaleModelPainting")} ·{" "}
            {t("resume.interests.videoGames")}
          </p>
        </section>
      </main>
    </>
  );
}

export default ResumePrintPage;
