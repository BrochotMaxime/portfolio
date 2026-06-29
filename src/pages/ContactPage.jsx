import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";

function ContactPage() {
  return (
    <section className="contact-page">
      <div className="container">
        <SectionTitle
          level="h1"
          title="Contact"
          subtitle="Interested in discussing a project, an opportunity or my work? Feel free to get in touch."
        />

        <div className="contact-page__content">
          <Card>
            <h2>Let's connect</h2>

            <p>
              You can contact me through my professional profiles or by email. A contact form will be added in a future iteration.
            </p>

            <div className="contact-page__actions">
              <Button href="">GitHub</Button>
              <Button href="" variant="secondary">LinkedIn</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;