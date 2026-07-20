import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";

import ProjectGallery from "../components/projects/ProjectGallery";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";

import { projects } from "../data/projects";

function ProjectPage() {
  const { t } = useTranslation();
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return (
      <>
        <Helmet>
          <title>{t("projects.page.notFound.metaTitle")}</title>
          <meta
            name="description"
            content={t("projects.page.notFound.metaDescription")}
          />
        </Helmet>

        <section className="project-page">
          <div className="container">
            <SectionTitle
              level="h1"
              title={t("projects.page.notFound.title")}
              subtitle={t("projects.page.notFound.subtitle")}
            />

            <Link className="project-page__back-link" to="/projects">
              {t("buttons.backToProjects")}
            </Link>
          </div>
        </section>
      </>
    );
  }

  const title = t(project.titleKey);
  const description = t(project.cardDescriptionKey);

  return (
    <>
      <Helmet>
        <title>{`${title} | Maxime Brochot`}</title>
        <meta name="description" content={description} />
      </Helmet>

      <section className="project-page">
        <div className="container">
          <div className="project-page__hero">
            <SectionTitle level="h1" title={title} subtitle={description} />

            {project.screenshots.length > 0 && (
              <ProjectGallery
                screenshots={project.screenshots}
                variant="featured"
              />
            )}
          </div>

          <div className="project-page__sections">
            {project.overviewKey && (
              <Card>
                <h2>{t("projects.page.sections.overview")}</h2>

                <p>{t(project.overviewKey)}</p>
              </Card>
            )}

            <Card>
              <h2>{t("projects.page.sections.technologyStack")}</h2>

              <div className="project-page__badges">
                {project.technologies.map((technology) => (
                  <Badge key={technology}>{technology}</Badge>
                ))}
              </div>
            </Card>

            {project.challengeKeys?.length > 0 && (
              <Card>
                <h2>{t("projects.page.sections.technicalChallenges")}</h2>

                <ul>
                  {project.challengeKeys.map((challengeKey) => (
                    <li key={challengeKey}>{t(challengeKey)}</li>
                  ))}
                </ul>
              </Card>
            )}

            {project.architectureKey && (
              <Card>
                <h2>{t("projects.page.sections.architecture")}</h2>

                <p>{t(project.architectureKey)}</p>
              </Card>
            )}

            {project.lessonsLearnedKey && (
              <Card>
                <h2>{t("projects.page.sections.lessonsLearned")}</h2>

                <p>{t(project.lessonsLearnedKey)}</p>
              </Card>
            )}

            <Card>
              <h2>{t("projects.page.sections.resources")}</h2>

              <div className="project-page__actions">
                {project.codeUrl && (
                  <Button
                    href={project.codeUrl}
                    aria-label={t("buttons.aria.viewSourceCode", { title })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("buttons.viewCode")}
                  </Button>
                )}

                {project.demoUrl && (
                  <Button
                    href={project.demoUrl}
                    aria-label={t("buttons.aria.openLiveDemo", { title })}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                  >
                    {t("buttons.liveDemo")}
                  </Button>
                )}
              </div>
            </Card>

            {project.screenshots.length > 0 && (
              <Card>
                <h2>{t("projects.page.sections.screenshots")}</h2>

                <ProjectGallery
                  screenshots={project.screenshots}
                  variant="gallery"
                />
              </Card>
            )}
          </div>

          <Link className="project-page__back-link" to="/projects">
            {t("buttons.backToProjects")}
          </Link>
        </div>
      </section>
    </>
  );
}

export default ProjectPage;
