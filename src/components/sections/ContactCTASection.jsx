import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";

function ContactCTASection() {
  return (
    <section className="contact-cta-section">
      <div className="container">
        <SectionTitle
          title="Let's work together"
          subtitle="Interested in discussing a project or an opportunity?"
        />

        <div className="contact-cta-section__actions">
          <Button to="/contact">Contact me</Button>
        </div>
      </div>
    </section>
  );
}

export default ContactCTASection;
