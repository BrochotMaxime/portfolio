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
                I am a web and mobile web developer building my skills through practical projects, structured learning and continuous improvement.
              </p>
                
              <p>
                I enjoy turning ideas into clear and reliable applications while continuously refining both my technical skills and my development practices.
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
                I value clarity, maintainability and thoughtful architecture. Each project is an opportunity to make thoughtful decisions and continuously improve how I design and build web applications.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;