import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";

function ProjectCard({ title, description, technologies, codeUrl, demoUrl }) {
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
        <Button href={codeUrl}>View code</Button>

        <Button href={demoUrl} variant="secondary">Live demo</Button>
      </div>
    </Card>
  );
}

export default ProjectCard;