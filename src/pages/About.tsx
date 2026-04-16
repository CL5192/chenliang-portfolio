import { PageSection } from '../components/PageSection'

export function About() {
  return (
    <>
      <h1 className="page-title">About</h1>
      <p className="page-lead">
        Placeholder bio: who you are, what you care about building, and the kinds of teams you like to
        join.
      </p>

      <PageSection title="Background" id="background">
        <div className="placeholder-block">
          Add a concise timeline, education, or previous roles here. Keep paragraphs short for
          readability.
        </div>
      </PageSection>

      <PageSection title="Skills & tools" id="skills">
        <div className="placeholder-block">
          List stacks, domains, and tools you want to highlight. This can become a simple bullet list
          later.
        </div>
      </PageSection>
    </>
  )
}
