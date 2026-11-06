import { PageSection } from '../components/PageSection'
import { ProjectCard } from '../components/ProjectCard'
import { getProjectsByGroup } from '../content/projects'
import { useI18n } from '../i18n/I18nContext'

export function Home() {
  const { locale } = useI18n()
  const aiProjects = getProjectsByGroup('ai', locale)
  const earlierProjects = getProjectsByGroup('earlier', locale)
  const copy =
    locale === 'de'
      ? {
          heroTitle: 'Ich mache KI-Videospots und Bildserien in Berlin.',
          heroSubtitle: 'Davor 12 Jahre Concept Design für Spiele.',
          aiWork: 'KI-Arbeiten',
          earlierWork: 'Frühere Arbeiten: 3D und Concept Design',
        }
      : {
          heroTitle: 'I make AI video ads and image series in Berlin.',
          heroSubtitle: 'Before that, 12 years of concept design for games.',
          aiWork: 'AI work',
          earlierWork: 'Earlier work: 3D and concept design',
        }

  return (
    <>
      <header className="home-hero">
        <div className="home-hero__content">
          <h1 className="home-hero__headline">{copy.heroTitle}</h1>
          <p className="home-hero__subline page-title-intro">{copy.heroSubtitle}</p>
        </div>
      </header>

      <PageSection title={copy.aiWork} id="work">
        <div className="card-grid">
          {aiProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </PageSection>

      <PageSection title={copy.earlierWork} id="earlier">
        <div className="card-grid">
          {earlierProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </PageSection>
    </>
  )
}
