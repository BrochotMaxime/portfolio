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
              <h2>Who I am</h2>

              <p>
                I am a web and mobile web developer focused on building clear,
                maintainable and user-focused applications.
              </p>

              <p>
                I develop my skills through practical projects, structured
                learning and continuous improvement, with particular attention
                to architecture, accessibility and code quality.
              </p>
            </Card>

            <Card>
              <h2>Core qualities</h2>

              <div className="about-page__badges">
                <Badge>Curious</Badge>
                <Badge>Methodical</Badge>
                <Badge>Reliable</Badge>
                <Badge>Adaptable</Badge>
                <Badge>Detail-oriented</Badge>
              </div>
            </Card>

            <Card>
              <h2>Development philosophy</h2>

              <p>
                I believe that good applications are built through deliberate
                decisions, clear structure and continuous refinement.
              </p>

              <p>
                Each project is an opportunity to improve not only the final
                result, but also the way it is designed, documented and
                maintained.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
