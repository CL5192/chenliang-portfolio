import { Link } from 'react-router-dom'
import { PageSection } from '../components/PageSection'

export function Home() {
  return (
    <>
      <h1 className="page-title">Portfolio</h1>
      <p className="page-lead">
        Placeholder introduction: a short line about your focus (product engineering, design, creative
        technology — swap this later).
      </p>

      <PageSection title="Featured snapshot" id="snapshot">
        <div className="placeholder-block">
          Replace this block with a hero image, a short reel, or a highlighted case study when you are
          ready.
        </div>
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
