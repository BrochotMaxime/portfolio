import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";

function LegalNoticePage() {
  return (
    <>
      <Helmet>
        <title>Legal Notice | Maxime Brochot</title>
        <meta
          name="description"
          content="Legal information about the personal portfolio website of Maxime Brochot."
        />
      </Helmet>

      <section className="legal-notice-page">
        <div className="container">
          <SectionTitle
            level="h1"
            title="Legal Notice"
            subtitle="Legal information about this portfolio website."
          />

          <div className="legal-notice-page__content">
            <Card>
              <h2>Website publisher</h2>
              <p>Maxime Brochot</p>
            </Card>

            <Card>
              <h2>Website purpose</h2>
              <p>
                This website is a personal portfolio intended to present web development projects, skills and professional information.
              </p>
            </Card>

            <Card>
              <h2>Intellectual property</h2>
              <p>
                Unless otherwise stated, all content on this website is owned by Maxime Brochot. Any reproduction or reuse without permission is prohibited.
              </p>
            </Card>

            <Card>
              <h2>Contact</h2>
              <p>
                For any request regarding this website, please use the{" "}
                <Link className="legal-notice-page__link" to="/contact">
                  contact page
                </Link>
                .
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default LegalNoticePage;