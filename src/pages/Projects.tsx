import { ProjectCard } from '../components/ProjectCard'
import { getAllProjectsSorted } from '../content/projects'
import { useI18n } from '../i18n/I18nContext'

export function Projects() {
  const { locale } = useI18n()
  const allProjects = getAllProjectsSorted(locale)
  const copy =
    locale === 'de'
      ? {
          title: 'Projekte',
          lead: 'Eine Auswahl an Projekten aus KI-Video, KI-Stills, 3D und Concept Design.',
        }
      : {
          title: 'Projects',
          lead: 'A selection of projects across AI video, AI stills, 3D and concept design.',
        }

  return (
    <>
      <h1 className="page-title top-page-title">{copy.title}</h1>
      <p className="page-lead page-title-intro">{copy.lead}</p>

      <div className="card-grid" id="list">
        {allProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  )
}
