import { ProjectCard } from '../components/ProjectCard'
import { PageSection } from '../components/PageSection'
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
          sectionTitle: 'Alle Projekte',
        }
      : {
          title: 'Projects',
          lead: 'A selection of projects across AI video, AI stills, 3D and concept design.',
          sectionTitle: 'All projects',
        }

  return (
    <>
      <h1 className="page-title top-page-title">{copy.title}</h1>
      <p className="page-lead page-title-intro">{copy.lead}</p>

      <PageSection title={copy.sectionTitle} id="list">
        <div className="card-grid">
          {allProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </PageSection>
    </>
  )
}
