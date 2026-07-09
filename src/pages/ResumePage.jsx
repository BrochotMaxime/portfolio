import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import ResumeHeader from "../components/resume/ResumeHeader";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";

function ResumePage() {
  return (
    <>
      <Helmet>
        <title>Resume | Maxime Brochot</title>
        <meta
          name="description"
          content="Resume of Maxime Brochot, Web and Mobile Web Developer with an engineering background."
        />
      </Helmet>

      <section className="resume-page">
        <div className="container">
          <ResumeHeader />

          <div className="resume-page__content">
            <Card>
              <h2>Profile</h2>

              <p>
                Web & Mobile Web Developer with an engineering background,
                combining analytical thinking, structured problem-solving and a
                strong focus on building clear, maintainable and user-focused
                applications.
              </p>

              <p>
                Passionate about software architecture, continuous improvement
                and clean development practices, I enjoy turning ideas into
                reliable solutions through thoughtful design and modern web
                technologies.
              </p>
            </Card>

            <Card>
              <h2>Technical skills</h2>

              <div className="resume-page__skills">
                <div>
                  <h3>Frontend</h3>
                  <div className="resume-page__badges">
                    <Badge>React</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>HTML5</Badge>
                    <Badge>CSS3</Badge>
                    <Badge>SCSS</Badge>
                    <Badge>Responsive Design</Badge>
                    <Badge>Accessibility</Badge>
                  </div>
                </div>

                <div>
                  <h3>Backend</h3>
                  <div className="resume-page__badges">
                    <Badge>Node.js</Badge>
                    <Badge>Express</Badge>
                    <Badge>REST API</Badge>
                    <Badge>Authentication</Badge>
                  </div>
                </div>

                <div>
                  <h3>Databases</h3>
                  <div className="resume-page__badges">
                    <Badge>MySQL</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>Sequelize</Badge>
                    <Badge>Mongoose</Badge>
                  </div>
                </div>

                <div>
                  <h3>Tools & quality</h3>
                  <div className="resume-page__badges">
                    <Badge>Git</Badge>
                    <Badge>GitHub</Badge>
                    <Badge>Vite</Badge>
                    <Badge>Swagger</Badge>
                    <Badge>ESLint</Badge>
                    <Badge>Prettier</Badge>
                    <Badge>ADR</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h2>Projects</h2>

              <div className="resume-page__items">
                <article>
                  <h3>
                    <Link to="/projects/portfolio">Portfolio</Link>
                  </h3>
                  <p>
                    <strong>React · React Router · SCSS · Vite</strong>
                  </p>
                  <p>
                    Designed and developed a personal portfolio focused on
                    reusable components, maintainable architecture,
                    accessibility, SEO and professional development practices.
                  </p>
                </article>

                <article>
                  <h3>
                    <Link to="/projects/trouve-ton-artisan">
                      Trouve ton artisan
                    </Link>
                  </h3>
                  <p>
                    <strong>
                      React · Node.js · Express · MySQL · Sequelize
                    </strong>
                  </p>
                  <p>
                    Built a full-stack web application allowing users to search
                    local artisans by category or name through a React frontend,
                    a REST API and a relational database.
                  </p>
                </article>

                <article>
                  <h3>
                    <Link to="/projects/port-de-plaisance-russell">
                      Port de Plaisance Russell
                    </Link>
                  </h3>
                  <p>
                    <strong>
                      Node.js · Express · MongoDB · Mongoose · Swagger
                    </strong>
                  </p>
                  <p>
                    Developed a RESTful API with authentication, CRUD
                    operations, reservation management and interactive API
                    documentation.
                  </p>
                </article>

                <article>
                  <h3>
                    <Link to="/projects/tifosi">Tifosi</Link>
                  </h3>
                  <p>
                    <strong>MySQL · SQL · Database modelling</strong>
                  </p>
                  <p>
                    Designed and implemented a normalized relational database
                    with SQL scripts, integrity constraints and advanced
                    queries.
                  </p>
                </article>
              </div>
            </Card>

            <Card>
              <h2>Professional experience</h2>

              <div className="resume-page__items">
                <article>
                  <h3>Production Manager</h3>

                  <p>
                    <strong>Castel Engineering</strong>
                  </p>

                  <p>2023 - 2024 · Mouscron, Belgium</p>

                  <ul>
                    <li>
                      Coordinated production planning and daily operations in an
                      industrial environment.
                    </li>

                    <li>
                      Led multidisciplinary teams while ensuring quality,
                      productivity and delivery objectives.
                    </li>

                    <li>
                      Contributed to continuous improvement initiatives and
                      operational decision-making.
                    </li>
                  </ul>
                </article>

                <article>
                  <h3>Production Engineer</h3>

                  <p>
                    <strong>TAMI Industries</strong>
                  </p>

                  <p>2020 - 2022 · Nyons, France</p>

                  <ul>
                    <li>
                      Supported production management and coordinated operators
                      and technicians.
                    </li>

                    <li>
                      Participated in process optimization and industrial
                      improvement projects.
                    </li>

                    <li>
                      Contributed to ERP implementation and production data
                      management.
                    </li>
                  </ul>
                </article>

                <article>
                  <h3>Engineering Internship</h3>

                  <p>
                    <strong>Air France Industries</strong>
                  </p>

                  <p>2018 · 6-month internship</p>

                  <ul>
                    <li>
                      Worked on continuous improvement initiatives within
                      aircraft maintenance operations.
                    </li>

                    <li>
                      Analysed production workflows and proposed process
                      optimizations.
                    </li>

                    <li>
                      Participated in project management activities with
                      multidisciplinary teams.
                    </li>
                  </ul>
                </article>
              </div>
            </Card>

            <Card>
              <h2>Education</h2>

              <div className="resume-page__items">
                <article>
                  <h3>Web & Mobile Web Developer</h3>

                  <p>
                    <strong>Centre Européen de Formation</strong>
                  </p>

                  <p>2025 - Present</p>

                  <p>
                    Professional training focused on full-stack web development,
                    covering frontend and backend technologies, databases,
                    software architecture and modern development practices.
                  </p>
                </article>

                <article>
                  <h3>Engineering Degree - High Performance Materials</h3>

                  <p>
                    <strong>SIGMA Clermont</strong>
                  </p>

                  <p>2014 - 2018</p>

                  <p>
                    Engineering degree providing a strong foundation in
                    analytical thinking, problem-solving, project management and
                    continuous improvement.
                  </p>
                </article>

                <article>
                  <h3>Preparatory Classes (CPGE)</h3>

                  <p>
                    <strong>Physics & Chemistry</strong>
                  </p>

                  <p>2011 - 2014</p>

                  <p>
                    Intensive scientific curriculum developing rigor, autonomy
                    and strong analytical skills.
                  </p>
                </article>
              </div>
            </Card>

            <Card>
              <h2>Languages</h2>

              <div className="resume-page__badges">
                <Badge>French · Native</Badge>
                <Badge>English · Professional working proficiency</Badge>
              </div>
            </Card>

            <Card>
              <h2>Interests</h2>

              <div className="resume-page__badges">
                <Badge>Trail running</Badge>
                <Badge>Scale model painting</Badge>
                <Badge>Video games</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResumePage;
