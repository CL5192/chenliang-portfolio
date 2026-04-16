import { Link } from 'react-router-dom'
import { PageSection } from '../../components/PageSection'
import { getProjectBySlug } from '../../content/projects'

const slug = 'car-configurator'

export function CarConfigurator() {
  const project = getProjectBySlug(slug)

  return (
    <>
      <p className="page-lead" style={{ marginBottom: '0.5rem' }}>
        <Link to="/projects">← Back to projects</Link>
      </p>
      <h1 className="page-title">{project?.title ?? 'Car Configurator'}</h1>
      <p className="page-lead">
        Placeholder detail page for the car configurator case study. Replace sections with real
        narrative, media, and outcomes.
      </p>

      <PageSection title="Problem" id="problem">
        <div className="placeholder-block">What user or business problem did this solve?</div>
      </PageSection>

      <PageSection title="Approach" id="approach">
        <div className="placeholder-block">Process, constraints, and key technical decisions.</div>
      </PageSection>

      <PageSection title="Results" id="results">
        <div className="placeholder-block">Metrics, quotes, or qualitative wins.</div>
      </PageSection>
    </>
  )
}
