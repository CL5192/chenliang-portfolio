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
          heroTitle: 'Generative AI Artist | Look Development & visuelle Konsistenz',
          heroSubtitle:
            'Hintergrund in Concept Design und 3D-Visualisierung, heute mit Fokus auf generative KI für Visual Development und Creative Technology.',
          featuredProjects: 'Ausgewählte Projekte',
          noProjects:
            'Noch keine hervorgehobenen Projekte - setze `featured: true` bei Einträgen in `src/content/projects.ts`.',
        }
      : {
          heroTitle: 'Generative AI Artist | Look Development & Visual Consistency',
          heroSubtitle:
            'Background in concept design and 3D visualization, now focused on generative AI for visual development and creative technology.',
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
