import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import ResumeHeader from "../components/resume/ResumeHeader";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";

function ResumePage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("resume.meta.title")}</title>
        <meta name="description" content={t("resume.meta.description")} />
      </Helmet>

      <section className="resume-page">
        <div className="container">
          <ResumeHeader />

          <div className="resume-page__content">
            <Card>
              <h2>{t("resume.sections.profile")}</h2>

              <p>{t("resume.profile.paragraph1")}</p>

              <p>{t("resume.profile.paragraph2")}</p>
            </Card>

            <Card>
              <h2>{t("resume.sections.skills")}</h2>

              <div className="resume-page__skills">
                <div>
                  <h3>{t("resume.skills.frontend")}</h3>
                  <div className="resume-page__badges">
                    <Badge>React</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>HTML5</Badge>
                    <Badge>CSS3</Badge>
                    <Badge>SCSS</Badge>
                    <Badge>{t("resume.skills.responsiveDesign")}</Badge>
                    <Badge>{t("resume.skills.accessibility")}</Badge>
                  </div>
                </div>

                <div>
                  <h3>{t("resume.skills.backend")}</h3>
                  <div className="resume-page__badges">
                    <Badge>Node.js</Badge>
                    <Badge>Express</Badge>
                    <Badge>REST API</Badge>
                    <Badge>{t("resume.skills.authentication")}</Badge>
                  </div>
                </div>

                <div>
                  <h3>{t("resume.skills.databases")}</h3>
                  <div className="resume-page__badges">
                    <Badge>MySQL</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>Sequelize</Badge>
                    <Badge>Mongoose</Badge>
                  </div>
                </div>

                <div>
                  <h3>{t("resume.skills.tools")}</h3>
                  <div className="resume-page__badges">
                    <Badge>Git</Badge>
                    <Badge>GitHub</Badge>
                    <Badge>Vite</Badge>
                    <Badge>Swagger</Badge>
                    <Badge>ESLint</Badge>
                    <Badge>Prettier</Badge>
                    <Badge>ADR</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h2>{t("resume.sections.projects")}</h2>

              <div className="resume-page__items">
                <article>
                  <h3>
                    <Link to="/projects/portfolio">
                      {t("projects.portfolio.title")}
                    </Link>
                  </h3>
                  <p>
                    <strong>React · React Router · SCSS · Vite</strong>
                  </p>
                  <p>{t("resume.projects.portfolio.description")}</p>
                </article>

                <article>
                  <h3>
                    <Link to="/projects/trouve-ton-artisan">
                      {t("projects.trouveTonArtisan.title")}
                    </Link>
                  </h3>

                  <p>
                    <strong>
                      React · Node.js · Express · MySQL · Sequelize
                    </strong>
                  </p>

                  <p>{t("resume.projects.trouveTonArtisan.description")}</p>
                </article>

                <article>
                  <h3>
                    <Link to="/projects/port-de-plaisance-russell">
                      {t("projects.portDePlaisanceRussel.title")}
                    </Link>
                  </h3>

                  <p>
                    <strong>
                      Node.js · Express · MongoDB · Mongoose · Swagger
                    </strong>
                  </p>

                  <p>
                    {t("resume.projects.portDePlaisanceRussell.description")}
                  </p>
                </article>

                <article>
                  <h3>
                    <Link to="/projects/tifosi">
                      {t("projects.tifosi.title")}
                    </Link>
                  </h3>

                  <p>
                    <strong>
                      MySQL · SQL · {t("resume.skills.databaseModelling")}
                    </strong>
                  </p>

                  <p>{t("resume.projects.tifosi.description")}</p>
                </article>
              </div>
            </Card>

            <Card>
              <h2>{t("resume.sections.experience")}</h2>

              <div className="resume-page__items">
                <article>
                  <h3>{t("resume.experience.castel.role")}</h3>

                  <p>
                    <strong>Castel Engineering</strong>
                  </p>

                  <p>{t("resume.experience.castel.dateLocation")}</p>

                  <ul>
                    <li>{t("resume.experience.castel.tasks.planning")}</li>
                    <li>{t("resume.experience.castel.tasks.management")}</li>
                    <li>{t("resume.experience.castel.tasks.improvement")}</li>
                  </ul>
                </article>

                <article>
                  <h3>{t("resume.experience.tami.role")}</h3>

                  <p>
                    <strong>TAMI Industries</strong>
                  </p>

                  <p>{t("resume.experience.tami.dateLocation")}</p>

                  <ul>
                    <li>{t("resume.experience.tami.tasks.management")}</li>
                    <li>{t("resume.experience.tami.tasks.optimization")}</li>
                    <li>{t("resume.experience.tami.tasks.erp")}</li>
                  </ul>
                </article>

                <article>
                  <h3>{t("resume.experience.airFrance.role")}</h3>

                  <p>
                    <strong>Air France Industries</strong>
                  </p>

                  <p>{t("resume.experience.airFrance.dateLocation")}</p>

                  <ul>
                    <li>
                      {t("resume.experience.airFrance.tasks.improvement")}
                    </li>
                    <li>{t("resume.experience.airFrance.tasks.analysis")}</li>
                    <li>
                      {t("resume.experience.airFrance.tasks.projectManagement")}
                    </li>
                  </ul>
                </article>
              </div>
            </Card>

            <Card>
              <h2>{t("resume.sections.education")}</h2>

              <div className="resume-page__items">
                <article>
                  <h3>{t("resume.education.webDevelopment.title")}</h3>

                  <p>
                    <strong>Centre Européen de Formation</strong>
                  </p>

                  <p>{t("resume.education.webDevelopment.date")}</p>

                  <p>{t("resume.education.webDevelopment.description")}</p>
                </article>

                <article>
                  <h3>{t("resume.education.engineering.title")}</h3>

                  <p>
                    <strong>SIGMA Clermont</strong>
                  </p>

                  <p>{t("resume.education.engineering.date")}</p>

                  <p>{t("resume.education.engineering.description")}</p>
                </article>

                <article>
                  <h3>{t("resume.education.preparatoryClasses.title")}</h3>

                  <p>
                    <strong>
                      {t("resume.education.preparatoryClasses.field")}
                    </strong>
                  </p>

                  <p>{t("resume.education.preparatoryClasses.date")}</p>

                  <p>{t("resume.education.preparatoryClasses.description")}</p>
                </article>
              </div>
            </Card>

            <Card>
              <h2>{t("resume.sections.languages")}</h2>

              <div className="resume-page__badges">
                <Badge>{t("resume.languages.french")}</Badge>
                <Badge>{t("resume.languages.english")}</Badge>
              </div>
            </Card>

            <Card>
              <h2>{t("resume.sections.interests")}</h2>

              <div className="resume-page__badges">
                <Badge>{t("resume.interests.trailRunning")}</Badge>
                <Badge>{t("resume.interests.scaleModelPainting")}</Badge>
                <Badge>{t("resume.interests.videoGames")}</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResumePage;
