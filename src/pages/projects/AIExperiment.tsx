import { Link } from 'react-router-dom'
import { PageSection } from '../../components/PageSection'
import { getProjectBySlug } from '../../content/projects'

const slug = 'ai-experiment'

export function AIExperiment() {
  const project = getProjectBySlug(slug)

  return (
    <>
      <p className="page-lead" style={{ marginBottom: '0.5rem' }}>
        <Link to="/projects">← Back to projects</Link>
      </p>
      <h1 className="page-title">{project?.title ?? 'AI Experiment'}</h1>
      <p className="page-lead">
        Placeholder detail page for an AI-led experiment or prototype. Swap in methodology, datasets,
        and evaluation notes later.
      </p>

      <PageSection title="Hypothesis" id="hypothesis">
        <div className="placeholder-block">What did you set out to learn or prove?</div>
      </PageSection>

      <PageSection title="Build" id="build">
        <div className="placeholder-block">Architecture sketch, prompts, tooling, and safety checks.</div>
      </PageSection>

      <PageSection title="Learnings" id="learnings">
        <div className="placeholder-block">What worked, what did not, and what you would try next.</div>
      </PageSection>
    </>
  )
}
