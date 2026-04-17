import { ProjectCard } from '../components/ProjectCard'
import { PageSection } from '../components/PageSection'
import { getAllProjectsSorted } from '../content/projects'

export function Projects() {
  const allProjects = getAllProjectsSorted()

  return (
    <>
      <h1 className="page-title">Projects</h1>
      <p className="page-lead">
        A selection of projects across realtime 3D, visual experiments, and visual design work.
      </p>

      <PageSection title="All projects" id="list">
        <div className="card-grid">
          {allProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </PageSection>
    </>
  )
}
