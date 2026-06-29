import Button from "../ui/Button";

function HeroSection() {
  return (
    <section className="hero-section">
      <p className="hero-section__eyebrow">Web Developer</p>

      <h1 className="hero-section__title">Maxime Brochot</h1>

      <p className="hero-section__tagline">
        Building clear, maintainable and user-focused web applications.
      </p>

      <p className="hero-section__description">
        I am a web and mobile web developer building a portfolio that reflects not only what I create, but also how I think as a developer.
      </p>

      <div className="hero-section__actions">
        <Button to="/projects">View projects</Button>
        <Button to="/contact" variant="secondary">Contact me</Button>
      </div>
    </section>
  );
}

export default HeroSection;