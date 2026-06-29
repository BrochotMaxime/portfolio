import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";

function HomePage() {
  return (
    <>
      <section>
        <p>Web Developer</p>
        <h1>Building clear, maintainable and user-focused web applications.</h1>
        <p>
          I am a web and mobile web developer building a portfolio that reflects not only what I create, but also how I think as a developer.
        </p>

        <Button to="/projects">View projects</Button>
        <Button to="/contact" variant="secondary">Contact me</Button>
      </section>

      <section>
        <SectionTitle
          title="Selected Projects"
          subtitle="A first overview of the projects that shaped my development journey."
        />

        <Card>
          <h3>Trouve ton artisan</h3>
          <p>Full-stack web application built during my developer training.</p>

          <Badge>React</Badge>
          <Badge>Node.js</Badge>
          <Badge>MySQL</Badge>
        </Card>
      </section>
    </>
  );
}

export default HomePage;