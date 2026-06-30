import ProjectCard from "../components/projects/ProjectCard";
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
          <ProjectCard
          title="Trouve ton artisan"
          description="Full-stack web application built during my developer training, using React, Node.js and MySQL."
          technologies={["React", "Node.js", "MySQL"]}
          codeUrl=""
          demoUrl=""
          />

          <ProjectCard
            title="Trouve ton artisan"
            description="Full-stack web application built during my developer training, using React, Node.js and MySQL."
            technologies={["React", "Node.js", "MySQL"]}
            codeUrl=""
            demoUrl=""
          />

          <ProjectCard
            title="Portfolio"
            description="Personal developer portfolio built with React, SCSS and a structured component-based architecture."
            technologies={["React", "SCSS", "React Router"]}
            codeUrl=""
            demoUrl=""
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;