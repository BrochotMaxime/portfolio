import Card from "../ui/Card";
import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";

function AboutPreviewSection() {
  return (
    <section className="about-preview-section">
      <SectionTitle
        title="About"
        subtitle="Learn more about my journey and development philosophy."
      />

      <Card>
        <p>
          Curious, methodical and detail-oriented, I enjoy designing web applications that are clear, maintainable and built to last.
        </p>

        <Button to="/about">Learn more</Button>
      </Card>
    </section>
  );
}

export default AboutPreviewSection;