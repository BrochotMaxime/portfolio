import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";

function ContactCTASection() {
  return (
    <section className="contact-cta-section">
      <SectionTitle
        title="Let's work together"
        subtitle="Interested in discussing a project or an opportunity?"
      />

      <Button to="/contact">Contact me</Button>
    </section>
  );
}

export default ContactCTASection;