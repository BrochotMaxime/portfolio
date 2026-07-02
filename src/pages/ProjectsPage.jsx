import { Helmet } from "react-helmet-async";

import SectionTitle from "../components/ui/SectionTitle";
import ProjectCard from "../components/projects/ProjectCard";

import { projects } from "../data/projects";

function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Projects | Maxime Brochot</title>
        <meta
          name="description"
          content="Explore web development projects by Maxime Brochot, including frontend, full-stack, API and database projects."
        />
      </Helmet>

      <section className="projects-page">
        <div className="container">
          <SectionTitle
            level="h1"
            title="Projects"
            subtitle="A selection of projects that demonstrate my development approach, technical skills and attention to maintainability."
          />

          <div className="projects-page__grid">
            {projects.map((project) => (
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
    </>
  );
}

export default ProjectsPage;