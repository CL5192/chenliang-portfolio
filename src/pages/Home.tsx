import { Link } from 'react-router-dom'
import { PageSection } from '../components/PageSection'
import { ProjectCard } from '../components/ProjectCard'
import { getFeaturedProjectsSorted } from '../content/projects'

export function Home() {
  const featuredProjects = getFeaturedProjectsSorted()

  return (
    <>
      <h1 className="page-title">Portfolio</h1>
      <p className="page-lead">
        Placeholder introduction: a short line about your focus (product engineering, design, creative
        technology — swap this later).
      </p>

      <PageSection title="Featured projects" id="featured">
        {featuredProjects.length > 0 ? (
          <div className="card-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="placeholder-block">
            No featured projects yet — set <code>featured: true</code> on entries in{' '}
            <code>src/content/projects.ts</code>.
          </div>
        )}
      </PageSection>

      <PageSection title="What to explore next" id="next">
        <div className="placeholder-block">
          Use the navigation to browse <Link to="/projects">projects</Link>, read the{' '}
          <Link to="/about">about</Link> page, or reach out on <Link to="/contact">contact</Link>.
        </div>
      </PageSection>
    </>
  )
}
