import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";

function ProjectCard({
  title,
  description,
  technologies,
  codeUrl,
  demoUrl,
  slug,
}) {
  const { t } = useTranslation();

  return (
    <Card>
      <h2>{title}</h2>

      <p>{description}</p>

      <div className="project-card__badges">
        {technologies.map((technology) => (
          <Badge key={technology}>{technology}</Badge>
        ))}
      </div>

      <div className="project-card__actions">
        <div className="project-card__actions-buttons">
          {codeUrl && (
            <Button
              href={codeUrl}
              aria-label={t("buttons.aria.viewSourceCode", { title })}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("buttons.viewCode")}
            </Button>
          )}

          {demoUrl && (
            <Button
              href={demoUrl}
              aria-label={t("buttons.aria.openLiveDemo", { title })}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("buttons.liveDemo")}
            </Button>
          )}
        </div>

        {slug && (
          <Link
            className="project-card__actions-link"
            to={`/projects/${slug}`}
            aria-label={t("buttons.aria.viewProjectDetails", { title })}
          >
            {t("buttons.viewProject")}
          </Link>
        )}
      </div>
    </Card>
  );
}

export default ProjectCard;
