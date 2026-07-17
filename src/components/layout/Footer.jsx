import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const footerLinks = [
  {
    labelKey: "navigation.projects",
    path: "/projects",
  },
  {
    labelKey: "navigation.about",
    path: "/about",
  },
  {
    labelKey: "navigation.resume",
    path: "/resume",
  },
  {
    labelKey: "navigation.contact",
    path: "/contact",
  },
  {
    labelKey: "footer.legalNotice",
    path: "/legal-notice",
  },
];

function Footer() {
  const { t } = useTranslation();

  const getLinkClassName = ({ isActive }) =>
    isActive ? "footer__link footer__link--active" : "footer__link";

  return (
    <footer className="footer">
      <div className="footer__container">
        <Link className="footer__branding" to="/">
          <span className="footer__name">Maxime Brochot</span>

          <span className="footer__role">{t("footer.role")}</span>
        </Link>

        <div className="footer__social">
          <a
            className="icon-label"
            href="https://github.com/BrochotMaxime"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={18} aria-hidden="true" />
          </a>

          <a
            className="icon-label"
            href="https://www.linkedin.com/in/maxime-brochot-646989171"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={18} aria-hidden="true" />
          </a>
        </div>

        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Maxime Brochot.{" "}
          {t("footer.copyright")}
        </p>

        <nav className="footer__nav" aria-label={t("footer.navigationLabel")}>
          {footerLinks.map((link) => (
            <NavLink
              key={link.path}
              className={getLinkClassName}
              to={link.path}
            >
              {t(link.labelKey)}
            </NavLink>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
