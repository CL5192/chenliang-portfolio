import { Link } from 'react-router-dom'
import type { Project } from '../content/projects'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const to = `/projects/${project.slug}`

  return (
    <article className="project-card">
      <div className="project-card__meta">Project</div>
      <h3 className="project-card__title">
        <Link to={to}>{project.title}</Link>
      </h3>
      <p className="project-card__summary">{project.summary}</p>
      {project.tags.length > 0 && (
        <ul className="tag-row" aria-label="Topics">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
      <Link className="project-card__link" to={to}>
        View details →
      </Link>
    </article>
  )
}
