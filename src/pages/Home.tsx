import { PageSection } from '../components/PageSection'
import { ProjectCard } from '../components/ProjectCard'
import { getFeaturedProjectsSorted } from '../content/projects'
import { useI18n } from '../i18n/I18nContext'

export function Home() {
  const { locale } = useI18n()
  const featuredProjects = getFeaturedProjectsSorted(locale)
  const copy =
    locale === 'de'
      ? {
          heroTitle: 'Ich mache KI-Videospots und Bildserien in Berlin.',
          heroSubtitle: 'Davor 12 Jahre Concept Design für Spiele.',
          featuredProjects: 'Ausgewählte Projekte',
          noProjects:
            'Noch keine hervorgehobenen Projekte - setze `featured: true` bei Einträgen in `src/content/projects.ts`.',
        }
      : {
          heroTitle: 'I make AI video ads and image series in Berlin.',
          heroSubtitle: 'Before that, 12 years of concept design for games.',
          featuredProjects: 'Featured projects',
          noProjects:
            'No featured projects yet - set `featured: true` on entries in `src/content/projects.ts`.',
        }

  return (
    <>
      <header className="home-hero">
        <div className="home-hero__content">
          <h1 className="home-hero__headline">{copy.heroTitle}</h1>
          <p className="home-hero__subline page-title-intro">{copy.heroSubtitle}</p>
        </div>
      </header>

      <PageSection title={copy.featuredProjects} id="featured">
        {featuredProjects.length > 0 ? (
          <div className="card-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="placeholder-block">
            {copy.noProjects}
          </div>
        )}
      </PageSection>
    </>
  )
}
