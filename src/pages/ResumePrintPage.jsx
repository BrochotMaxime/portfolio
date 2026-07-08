import { Helmet } from "react-helmet-async";

function ResumePrintPage() {
  return (
    <>
      <Helmet>
        <title>Resume PDF | Maxime Brochot</title>
      </Helmet>

      <main className="resume-print">
        <header className="resume-print__header">
          <h1>Maxime Brochot</h1>
          <p>Web & Mobile Web Developer</p>

          <address>
            Lille, France ·{" "}
            <a href="mailto:brochot.max@gmail.com">brochot.max@gmail.com</a> ·{" "}
            <a href="https://github.com/BrochotMaxime">
              github.com/BrochotMaxime
            </a>{" "}
            ·{" "}
            <a href="https://www.linkedin.com/in/maxime-brochot-646989171">
              LinkedIn
            </a>
          </address>
        </header>

        <section>
          <h2>Profile</h2>
          <p>
            Web & Mobile Web Developer with an engineering background, combining
            analytical thinking, structured problem-solving and a strong focus
            on building clear, maintainable and user-focused applications.
          </p>
        </section>

        <section>
          <h2>Technical Skills</h2>
          <p>
            <strong>Frontend:</strong> React, JavaScript, HTML5, CSS3, SCSS,
            Accessibility
          </p>
          <p>
            <strong>Backend:</strong> Node.js, Express, REST API, Authentication
          </p>
          <p>
            <strong>Databases:</strong> MySQL, MongoDB, Sequelize, Mongoose
          </p>
          <p>
            <strong>Tools:</strong> Git, GitHub, Vite, Swagger, ESLint,
            Prettier, ADR
          </p>
        </section>

        <section>
          <h2>Projects</h2>

          <article>
            <h3>Portfolio</h3>
            <p className="resume-print__meta">
              React · React Router · SCSS · Vite
            </p>
            <p>
              Personal portfolio focused on reusable components, maintainable
              architecture, accessibility, SEO and professional development
              practices.
            </p>
          </article>

          <article>
            <h3>Trouve ton artisan</h3>
            <p className="resume-print__meta">
              React · Node.js · Express · MySQL · Sequelize
            </p>
            <p>
              Full-stack application allowing users to search local artisans
              through a React frontend, REST API and relational database.
            </p>
          </article>

          <article>
            <h3>Port de Plaisance Russell</h3>
            <p className="resume-print__meta">
              Node.js · Express · MongoDB · Swagger
            </p>
            <p>
              RESTful API with authentication, CRUD operations, reservation
              management and interactive API documentation.
            </p>
          </article>
        </section>

        <section>
          <h2>Professional Experience</h2>

          <article>
            <h3>Production Manager — Castel Engineering</h3>
            <p className="resume-print__meta">
              2023 - 2024 · Mouscron, Belgium
            </p>
            <ul>
              <li>
                Coordinated production planning and daily operations in an
                industrial environment.
              </li>
              <li>
                Led multidisciplinary teams while ensuring quality, productivity
                and delivery objectives.
              </li>
            </ul>
          </article>

          <article>
            <h3>Production Engineer — TAMI Industries</h3>
            <p className="resume-print__meta">2020 - 2022 · Nyons, France</p>
            <ul>
              <li>
                Supported production management and coordinated operators and
                technicians.
              </li>
              <li>
                Participated in process optimization and industrial improvement
                projects.
              </li>
              <li>
                Contributed to ERP implementation and production data
                management.
              </li>
            </ul>
          </article>

          <article>
            <h3>Engineering Internship — Air France Industries</h3>
            <p className="resume-print__meta">2018 · 6-month internship</p>
            <ul>
              <li>
                Worked on continuous improvement projects within aircraft
                maintenance operations.
              </li>
              <li>
                Analysed production workflows and proposed process
                optimizations.
              </li>
            </ul>
          </article>
        </section>

        <section>
          <h2>Education</h2>
          <p>
            <strong>Web & Mobile Web Developer</strong> — Centre Européen de
            Formation · In progress
          </p>
          <p>
            <strong>Engineering Degree</strong> — SIGMA Clermont · 2018
          </p>
          <p>
            <strong>Preparatory Classes</strong> — Physics & Chemistry · 2011 -
            2014
          </p>
        </section>

        <section>
          <h2>Languages</h2>
          <p>French — Native · English — Professional working proficiency</p>
        </section>
      </main>
    </>
  );
}

export default ResumePrintPage;
