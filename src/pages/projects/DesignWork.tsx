import { Link } from 'react-router-dom'
import { PageSection } from '../../components/PageSection'
import { getProjectBySlug } from '../../content/projects'

const slug = 'design-work'

export function DesignWork() {
  const project = getProjectBySlug(slug)

  return (
    <>
      <p className="page-lead" style={{ marginBottom: '0.5rem' }}>
        <Link to="/projects">← Back to projects</Link>
      </p>
      <h1 className="page-title">{project?.title ?? 'Design Work'}</h1>
      <p className="page-lead">
        Placeholder detail page for visual and product design work. Drop in galleries, Figma links, or
        annotated screens when available.
      </p>

      <PageSection title="Context" id="context">
        <div className="placeholder-block">Audience, brand constraints, and success criteria.</div>
      </PageSection>

      <PageSection title="Exploration" id="exploration">
        <div className="placeholder-block">Iterations, directions considered, and tradeoffs.</div>
      </PageSection>

      <PageSection title="Delivery" id="delivery">
        <div className="placeholder-block">Final artifacts, specs, and collaboration with engineering.</div>
      </PageSection>
    </>
  )
}
