import { useTranslation } from "react-i18next";

import ProjectCard from "../projects/ProjectCard";
import SectionTitle from "../ui/SectionTitle";

import { projects } from "../../data/projects";

function FeaturedProjectsSection() {
  const { t } = useTranslation();

  return (
    <section id="featured-projects" className="featured-projects-section">
      <div className="container">
        <SectionTitle
          title={t("home.featuredProjects.title")}
          subtitle={t("home.featuredProjects.subtitle")}
        />

        <div className="featured-projects-section__grid">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
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
  );
}

export default FeaturedProjectsSection;
