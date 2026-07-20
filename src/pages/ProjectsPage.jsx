import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import SectionTitle from "../components/ui/SectionTitle";
import ProjectCard from "../components/projects/ProjectCard";

import { projects } from "../data/projects";

function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("projects.page.meta.title")}</title>
        <meta
          name="description"
          content={t("projects.page.meta.description")}
        />
      </Helmet>

      <section className="projects-page">
        <div className="container">
          <SectionTitle
            level="h1"
            title={t("projects.page.header.title")}
            subtitle={t("projects.page.header.subtitle")}
          />

          <div className="projects-page__grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={t(project.titleKey)}
                description={t(project.descriptionKey)}
                technologies={project.technologies}
                codeUrl={project.codeUrl}
                demoUrl={project.demoUrl}
                slug={project.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsPage;
