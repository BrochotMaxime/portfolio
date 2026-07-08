import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Link className="footer__branding" to="/">
          <span className="footer__name">Maxime Brochot</span>

          <span className="footer__role">Web Developer</span>
        </Link>

        <div className="footer__social">
          <a
            href=""
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          ></a>

          <a
            href=""
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>

        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Maxime Brochot. All rights reserved.
        </p>

        <nav className="footer__nav">
          <NavLink
            className={({ isActive }) =>
              isActive ? "footer__link footer__link--active" : "footer__link"
            }
            to="/projects"
          >
            Projects
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "footer__link footer__link--active" : "footer__link"
            }
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "footer__link footer__link--active" : "footer__link"
            }
            to="/contact"
          >
            Contact
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "footer__link footer__link--active" : "footer__link"
            }
            to="/resume"
          >
            Resume
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "footer__link footer__link--active" : "footer__link"
            }
            to="/legal-notice"
          >
            Legal Notice
          </NavLink>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
