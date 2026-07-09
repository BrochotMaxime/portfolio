import { Helmet } from "react-helmet-async";
import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | Maxime Brochot</title>
        <meta
          name="description"
          content="Contact Maxime Brochot to discuss a project, an opportunity or his web development work."
        />
      </Helmet>

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
                You can contact me by email, connect with me on LinkedIn or
                explore my work on GitHub.
              </p>

              <div className="contact-page__actions">
                <Button href="mailto:brochot.max@gmail.com">
                  <Mail size={18} />
                  <span>Email me</span>
                </Button>

                <Button
                  href="https://github.com/BrochotMaxime"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  <FaGithub size={18} />
                  <span>GitHub</span>
                </Button>

                <Button
                  href="https://www.linkedin.com/in/maxime-brochot-646989171"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  <FaLinkedin size={18} />
                  <span>LinkedIn</span>
                </Button>

                <Button
                  href="/documents/maxime-brochot-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  <Download size={18} />
                  <span>Download Resume (PDF)</span>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
