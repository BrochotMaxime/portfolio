import { Link, useParams } from "react-router-dom";

import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";
import { projects } from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return (
      <section className="project-page">
        <div className="container">
          <SectionTitle
            level="h1"
            title="Project not found"
            subtitle="The project you are looking for does not exist."
          />

          <Link to="/projects">Back to projects</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="project-page">
      <div className="container">
        <SectionTitle
          level="h1"
          title={project.title}
          subtitle={project.description}
        />

        <div className="project-page__content">
          <Card>
            <h2>Technologies</h2>

            <div className="project-page__badges">
              {project.technologies.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </div>

            <div className="project-page__actions">
              {project.codeUrl && (
                <Button 
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View code
                </Button>)}

              {project.demoUrl && (
                <Button 
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  Live demo
                </Button>
              )}
            </div>
          </Card>
        </div>

        <Link className="project-page__back-link" to="/projects">Back to projects</Link>
      </div>
    </section>
  );
}

export default ProjectPage;