import ProjectCard from "../projects/ProjectCard";
import SectionTitle from "../ui/SectionTitle";

function FeaturedProjectsSection() {
  return (
    <section className="featured-projects-section">
      <div className="container">
        <SectionTitle
          title="Selected Projects"
          subtitle="A first overview of the projects that shaped my development journey."
        />

        <div className="featured-projects-section__grid">
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

export default FeaturedProjectsSection;