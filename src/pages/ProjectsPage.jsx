import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";

function ProjectsPage() {
  return (
    <section className="projects-page">
      <div className="container">
        <SectionTitle
          level="h1"
          title="Projects"
          subtitle="A selection of projects that demonstrate my development approach, technical skills and attention to maintainability."
        />

        <div className="projects-page__grid">
          <Card>
            <h2>Trouve ton artisan</h2>

            <p>
              Full-stack web application built during my developer training, using React, Node.js and MySQL.
            </p>

            <div className="projects-page__badges">
              <Badge>React</Badge>
              <Badge>Node.js</Badge>
              <Badge>MySQL</Badge>
            </div>

            <div className="projects-page__actions">
              <Button href="">View code</Button>
              <Button href="" variant="secondary">Live demo</Button>
            </div>
          </Card>

          <Card>
            <h2>Portfolio</h2>

            <p>
              Personal developer portfolio built with React, SCSS and a structured component-based architecture.
            </p>

            <div className="projects-page__badges">
              <Badge>React</Badge>
              <Badge>SCSS</Badge>
              <Badge>React Router</Badge>
            </div>

            <div className="projects-page__actions">
              <Button href="">View code</Button>
              <Button href="" variant="secondary">Live demo</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;