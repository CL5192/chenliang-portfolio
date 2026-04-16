import { Link } from 'react-router-dom'
import { PageSection } from '../../components/PageSection'
import { getProjectBySlug } from '../../content/projects'

const slug = 'car-configurator'
const imageBasePath = '/src/assets/projects/car-configurator'

type CaseStudyImageData = {
  src: string
  alt: string
  caption: string
}

const caseStudyImages: CaseStudyImageData[] = [
  {
    src: `${imageBasePath}/01_scene-overview_triptych.jpg`,
    alt: 'Three scene overview states from the Car Configurator experience.',
    caption: '01 Scene overview triptych',
  },
  {
    src: `${imageBasePath}/02_ui-overview_main.jpg`,
    alt: 'Main user interface overview showing controls and active vehicle state.',
    caption: '02 UI overview main',
  },
  {
    src: `${imageBasePath}/03_system-architecture_collage.jpg`,
    alt: 'System architecture collage connecting UI, scene logic, and rendering layers.',
    caption: '03 System architecture collage',
  },
  {
    src: `${imageBasePath}/04_state-switch_logic.jpg`,
    alt: 'State switch logic flow for changing trims and option combinations.',
    caption: '04 State switch logic',
  },
  {
    src: `${imageBasePath}/05_camera-handoff_logic.jpg`,
    alt: 'Camera handoff logic between key presentation angles.',
    caption: '05 Camera handoff logic',
  },
  {
    src: `${imageBasePath}/06_ui-to-vehicle-config_collage.jpg`,
    alt: 'Collage illustrating mapping from UI choices to vehicle configuration states.',
    caption: '06 UI to vehicle config collage',
  },
]

function CaseStudyImage({ image }: { image: CaseStudyImageData }) {
  return (
    <figure className="case-image">
      <img className="case-image__asset" src={image.src} alt={image.alt} loading="lazy" />
      <figcaption className="case-image__caption">{image.caption}</figcaption>
    </figure>
  )
}

export function CarConfigurator() {
  const project = getProjectBySlug(slug)

  return (
    <>
      <p className="page-lead" style={{ marginBottom: '0.65rem' }}>
        <Link to="/projects">← Back to projects</Link>
      </p>
      <section className="case-hero" aria-labelledby="car-configurator-hero-title">
        <h1 className="page-title case-hero__title" id="car-configurator-hero-title">
          {project?.title ?? 'Car Configurator'}
        </h1>
        <p className="page-lead case-hero__lead">
          Realtime vehicle visualization case study focused on interactive UX, scene orchestration,
          and technical reliability in a presentation-ready experience.
        </p>
        <div className="case-video-placeholder" aria-label="YouTube video placeholder">
          <strong>Video Placeholder</strong>
          <p>
            Replace this area with your YouTube embed later.
            <br />
            Suggested: 16:9 iframe or video player block.
          </p>
        </div>
      </section>

      <PageSection title="Overview" id="overview">
        <div className="case-copy">
          <p>
            This project explores how a visual configurator can communicate product choices clearly
            while maintaining cinematic quality in realtime. The goal was to keep the interaction model
            simple for users while ensuring each selection transition feels intentional.
          </p>
        </div>
        <div className="case-media-stack">
          <CaseStudyImage image={caseStudyImages[0]} />
        </div>
      </PageSection>

      <PageSection title="What I Built" id="what-i-built">
        <div className="case-copy">
          <ul className="case-list">
            <li>Interactive vehicle variant switching with immediate visual feedback.</li>
            <li>UI panels designed for quick option comparison across configurations.</li>
            <li>Realtime camera sequencing to frame each configurable part clearly.</li>
          </ul>
        </div>
        <div className="case-media-stack">
          <CaseStudyImage image={caseStudyImages[1]} />
        </div>
      </PageSection>

      <PageSection title="System Design" id="system-design">
        <div className="case-copy">
          <p>
            The architecture separates user intent, visual state transitions, and rendering concerns.
            This keeps the experience maintainable as additional trims, finishes, or camera states are
            added later.
          </p>
        </div>
        <div className="case-media-stack">
          <CaseStudyImage image={caseStudyImages[2]} />
          <CaseStudyImage image={caseStudyImages[3]} />
          <CaseStudyImage image={caseStudyImages[4]} />
        </div>
      </PageSection>

      <PageSection title="Technical Highlights" id="technical-highlights">
        <div className="case-copy">
          <ul className="case-list">
            <li>State-driven view updates to keep UI and scene logic synchronized.</li>
            <li>Reusable camera handoff strategy for smooth movement between focus points.</li>
            <li>Clear mapping between control selections and underlying vehicle configuration data.</li>
          </ul>
        </div>
        <div className="case-media-stack">
          <CaseStudyImage image={caseStudyImages[5]} />
        </div>
      </PageSection>

      <PageSection title="Challenges & Reflection" id="challenges-reflection">
        <div className="case-copy">
          <p>
            The main challenge was balancing visual quality with interaction speed. Iterating on state
            transitions and camera timing helped reduce friction while keeping the demo expressive.
          </p>
          <p>
            If this project is expanded, the next step would be integrating analytics and user testing
            signals to validate the most effective interaction flows.
          </p>
        </div>
      </PageSection>
    </>
  )
}
