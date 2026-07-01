import { Link } from "react-router-dom";

import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";

function ProjectCard({ title, description, technologies, codeUrl, demoUrl, slug }) {
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
              target="_blank"
              rel="noopener noreferrer"
            >
              View code
            </Button>
          )}

          {demoUrl && (
            <Button href={demoUrl} 
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo
            </Button>
          )}
        </div>

        {slug && (
          <Link className="project-card__actions-link" to={`/projects/${slug}`}>
            Read more
          </Link>
        )}        
      </div>
    </Card>
  );
}

export default ProjectCard;