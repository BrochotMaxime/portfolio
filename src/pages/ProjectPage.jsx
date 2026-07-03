import { Helmet } from "react-helmet-async";
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
      <>
        <Helmet>
          <title>Project not found | Maxime Brochot</title>
          <meta
            name="description"
            content="The requested project could not be found in Maxime Brochot's portfolio."
          />
        </Helmet>

        <section className="project-page">
          <div className="container">
            <SectionTitle
              level="h1"
              title="Project not found"
              subtitle="The project you are looking for does not exist."
            />

            <Link className="project-page__back-link" to="/projects">
              Back to projects
            </Link>
          </div>
        </section>
      </>
    );
  }

  const featuredScreenshot = project.screenshots.find(
    (screenshot) => screenshot.featured
  );

  return (
    <>
      <Helmet>
        <title>{project.title} | Maxime Brochot</title>
        <meta
          name="description"
          content={project.description}
        />
      </Helmet>
      
      <section className="project-page">
        <div className="container">
          <div className="project-page__hero">
            <SectionTitle
              level="h1"
              title={project.title}
              subtitle={project.description}
            />

            {featuredScreenshot && (
              <img
                className="project-page__featured-image"
                src={featuredScreenshot.src}
                alt={featuredScreenshot.alt}
              />
            )}
          </div>

          <div className="project-page__sections">
            {project.overview && (
              <Card>
                <h2>Overview</h2>

                <p>{project.overview}</p>
              </Card>
            )}

            <Card>
              <h2>Technology stack</h2>

              <div className="project-page__badges">
                {project.technologies.map((technology) => (
                  <Badge key={technology}>{technology}</Badge>
                ))}
              </div>
            </Card>

            {project.challenges.length > 0 && (
              <Card>
                <h2>Technical challenges</h2>

                <ul>
                  {project.challenges.map((challenge) => (
                    <li key={challenge}>{challenge}</li>
                  ))}
                </ul>
              </Card>
            )}

            {project.architecture && (
              <Card>
                <h2>Architecture</h2>

                <p>{project.architecture}</p>
              </Card>
            )}

            {project.lessonsLearned && (
              <Card>
                <h2>Lessons learned</h2>

                <p>{project.lessonsLearned}</p>
              </Card>
            )}

            <Card>
              <h2>Resources</h2>

              <div className="project-page__actions">
                {project.codeUrl && (
                  <Button 
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View code
                  </Button>
                )}

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

            {project.screenshots.length > 0 && (
              <Card>
                <h2>Screenshots</h2>

                <div className="project-page__gallery">
                  {project.screenshots.map((screenshot) => (
                    <img
                      className="project-page__gallery-image"
                      key={screenshot.src}
                      src={screenshot.src}
                      alt={screenshot.alt}
                    />
                  ))}
                </div>
              </Card>
            )}
          </div>

          <Link className="project-page__back-link" to="/projects">
            Back to projects
          </Link>
        </div>
      </section>
    </>
  );
}

export default ProjectPage;