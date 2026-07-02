import { Helmet } from "react-helmet-async";

import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About | Maxime Brochot</title>
        <meta
          name="description"
          content="Learn more about Maxime Brochot, his development mindset, core qualities and approach to building web applications."
        />
      </Helmet>

      <section className="about-page">
        <div className="container">
          <SectionTitle
            level="h1"
            title="About me"
            subtitle="A short introduction to my background, mindset and development approach."
          />

          <div className="about-page__content">
            <Card>
              <h3>Who I am</h3>

              <p>
                I am a web and mobile web developer building my skills through practical projects, structured learning and continuous improvement.
              </p>
            </Card>

            <Card>
              <h3>Core qualities</h3>

              <div className="about-page__badges">
                <Badge>Curious</Badge>
                <Badge>Methodical</Badge>
                <Badge>Reliable</Badge>
                <Badge>Adaptable</Badge>
                <Badge>Detail-oriented</Badge>
              </div>
            </Card>

            <Card>
              <h3>Development philosophy</h3>

              <p>
                I value clarity, maintainability and thoughtful architecture. Each
                project is an opportunity to make deliberate decisions and improve
                the way I design and build web applications.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;