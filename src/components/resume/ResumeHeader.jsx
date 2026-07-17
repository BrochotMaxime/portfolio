import { useTranslation } from "react-i18next";
import { MapPin, Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import getResumePath from "../utilities/getResumePath";

import Button from "../ui/Button";

function ResumeHeader() {
  const { t, i18n } = useTranslation();

  const resumePath = getResumePath(i18n.resolvedLanguage);

  return (
    <header className="resume-header">
      <div className="resume-header__identity">
        <h1>Maxime Brochot</h1>

        <p className="resume-header__title">{t("resume.header.role")}</p>
      </div>

      <div className="resume-header__details">
        <address className="resume-header__contact">
          <span className="icon-label">
            <MapPin size={18} aria-hidden="true" />
            <span>{t("resume.header.location")}</span>
          </span>

          <a className="icon-label" href="mailto:brochot.max@gmail.com">
            <Mail size={18} aria-hidden="true" />
            <span>brochot.max@gmail.com</span>
          </a>

          <a
            className="icon-label"
            href="https://github.com/BrochotMaxime"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={18} aria-hidden="true" />
            <span>GitHub</span>
          </a>

          <a
            className="icon-label"
            href="https://www.linkedin.com/in/maxime-brochot-646989171"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={18} aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
        </address>

        <div className="resume-header__actions">
          <Button
            className="resume-header__item"
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            <Download size={18} aria-hidden="true" />
            <span>{t("buttons.downloadResume")}</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default ResumeHeader;
