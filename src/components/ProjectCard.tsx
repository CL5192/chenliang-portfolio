import { Link } from 'react-router-dom'
import type { Project } from '../content/projects'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const to = `/projects/${project.slug}`

  return (
    <Link className="project-card" to={to} aria-label={`View project: ${project.title}`}>
      <div className="project-card__top">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__summary">{project.summary}</p>
        <span className="project-card__link">View project →</span>
      </div>
      <div className="project-card__image-wrap">
        <img
          className="project-card__image"
          src={project.coverImage}
          alt={`${project.title} cover preview`}
          loading="lazy"
        />
      </div>
    </Link>
  )
}
