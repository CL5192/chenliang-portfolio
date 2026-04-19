import { Link } from 'react-router-dom'
import type { Project } from '../content/projects'
import { useI18n } from '../i18n/I18nContext'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { locale } = useI18n()
  const to = `/projects/${project.slug}`
  const copy =
    locale === 'de'
      ? {
          ariaLabel: `Projekt ansehen: ${project.title}`,
          viewProject: 'Projekt ansehen ->',
          coverAlt: `${project.title} Titelbild`,
        }
      : {
          ariaLabel: `View project: ${project.title}`,
          viewProject: 'View project ->',
          coverAlt: `${project.title} cover preview`,
        }

  return (
    <Link className="project-card" to={to} aria-label={copy.ariaLabel}>
      <div className="project-card__top">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__summary">{project.summary}</p>
        <span className="project-card__link">{copy.viewProject}</span>
      </div>
      <div className="project-card__image-wrap">
        <img
          className="project-card__image"
          src={project.coverImage}
          alt={copy.coverAlt}
          loading="lazy"
        />
      </div>
    </Link>
  )
}
