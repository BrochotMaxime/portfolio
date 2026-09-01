import { useTranslation } from "react-i18next";

import SectionTitle from "../components/ui/SectionTitle";
import ProjectCard from "../components/projects/ProjectCard";
import Seo from "../components/utilities/Seo";

import { projects } from "../data/projects";

function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t("projects.page.meta.title")}
        description={t("projects.page.meta.description")}
        path="/projects"
      />

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
