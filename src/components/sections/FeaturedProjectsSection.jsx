// FeaturedProjectsSection.jsx
import Badge from "../ui/Badge";
import Card from "../ui/Card";
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
          <Card>
            <h3>Trouve ton artisan</h3>
            <p>Full-stack web application built during my developer training.</p>

            <div>
              <Badge>React</Badge>
              <Badge>Node.js</Badge>
              <Badge>MySQL</Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjectsSection;