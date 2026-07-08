import Button from "../ui/Button";

function ResumeHeader() {
  return (
    <header className="resume-header">
      <div className="resume-header__identity">
        <h1>Maxime Brochot</h1>

        <p className="resume-header__title">Web & Mobile Web Developer</p>
      </div>

      <div className="resume-header__details">
        <address className="resume-header__contact">
          <span>Lille, France</span>

          <a href="mailto:brochot.max@gmail.com">brochot.max@gmail.com</a>

          <a
            href="https://github.com/BrochotMaxime"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/maxime-brochot-646989171"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </address>

        <div className="resume-header__actions">
          <Button
            href="/documents/maxime-brochot-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            Download Resume (PDF)
          </Button>
        </div>
      </div>
    </header>
  );
}

export default ResumeHeader;
