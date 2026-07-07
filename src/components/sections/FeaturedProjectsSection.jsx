import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../projects/ProjectCard";

import { projects } from "../../data/projects";

function FeaturedProjectsSection() {
  return (
    <section id="featured-projects" className="featured-projects-section">
      <div className="container">
        <SectionTitle
          title="Selected Projects"
          subtitle="A first overview of the projects that shaped my development journey."
        />

        <div className="featured-projects-section__grid">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
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
