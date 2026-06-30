import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Link className="footer__branding" to="/">
          <span className="footer__name">
            Maxime Brochot
          </span>

          <span className="footer__role">
            Web Developer
          </span>
        </Link>

        <div className="footer__social">
          <a 
            href=""
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>

          <a
            href=""
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </div>

        <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Maxime Brochot. All rights reserved.
        </p>

        <nav className="footer__nav">
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/legal-notice">Legal Notice</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;