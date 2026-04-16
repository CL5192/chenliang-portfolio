import { ProjectCard } from '../components/ProjectCard'
import { PageSection } from '../components/PageSection'
import { projects } from '../content/projects'

export function Projects() {
  return (
    <>
      <h1 className="page-title">Projects</h1>
      <p className="page-lead">
        Placeholder grid of case studies and experiments. Card copy lives in{' '}
        <code>src/content/projects.ts</code> for easy bulk edits.
      </p>

      <PageSection title="All projects" id="list">
        <div className="card-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </PageSection>
    </>
  )
}
