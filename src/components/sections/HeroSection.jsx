import Button from "../ui/Button";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-section__content">
          <h1 className="hero-section__title">
            Maxime Brochot — Web Developer
          </h1>

          <p className="hero-section__tagline">
            Building clear, maintainable and user-focused web applications.
          </p>

          <div className="hero-section__actions">
            <Button to="/projects">View projects</Button>

            <Button to="/contact" variant="secondary">Contact me</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;