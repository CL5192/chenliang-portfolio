import { Link } from 'react-router-dom'
import { PageSection } from '../../components/PageSection'
import { getProjectBySlug } from '../../content/projects'
import { useI18n } from '../../i18n/I18nContext'
import sceneOverviewImage from '../../assets/projects/Car-configurator/01_scene-overview_triptych.jpg'
import uiOverviewImage from '../../assets/projects/Car-configurator/02_ui-overview_main.jpg'
import systemArchitectureImage from '../../assets/projects/Car-configurator/03_system-architecture_collage.jpg'
import stateSwitchImage from '../../assets/projects/Car-configurator/04_state-switch_logic.jpg'
import cameraHandoffImage from '../../assets/projects/Car-configurator/05_camera-handoff_logic.jpg'
import uiToVehicleConfigImage from '../../assets/projects/Car-configurator/06_ui-to-vehicle-config_collage.jpg'

const slug = 'car-configurator'

type CaseStudyImageData = {
  src: string
  alt: string
  caption: string
}

const caseStudyImages: CaseStudyImageData[] = [
  {
    src: sceneOverviewImage,
    alt: 'Three presentation scenes from the Car Configurator experience: Skyline, Oasis, and Studio.',
    caption:
      'Three presentation scenes inside one level, each with its own mood, lighting, and transition flow.',
  },
  {
    src: uiOverviewImage,
    alt: 'Main Car Configurator interface showing scene switching, paint presets, panel controls, and interior mode.',
    caption:
      'The UI handles the main interaction layer: scene switching, paint presets, open panels, and interior mode.',
  },
  {
    src: systemArchitectureImage,
    alt: 'System architecture collage showing the central showroom controller, key variables, and scene and transition enums.',
    caption:
      'The core system is built around a central controller, with clear scene and transition enums.',
  },
  {
    src: stateSwitchImage,
    alt: 'Blueprint logic for controlled scene switching using explicit transition states.',
    caption:
      'Scene switching uses explicit state tracking instead of direct button-to-scene jumps.',
  },
  {
    src: cameraHandoffImage,
    alt: 'Blueprint logic for handing control back to the orbit camera after guided scene transitions.',
    caption:
      'After each guided transition, control returns to the orbit camera for interactive viewing.',
  },
  {
    src: uiToVehicleConfigImage,
    alt: 'UI request flow connected to vehicle configuration logic such as paint and interior settings.',
    caption:
      'UI actions go through the controller and are then applied to the vehicle configuration systems.',
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
  const { locale } = useI18n()
  const project = getProjectBySlug(slug, locale)
  const copy =
    locale === 'de'
      ? {
          backToProjects: '<- Zurueck zu Projekten',
          fallbackTitle: 'Auto-Konfigurator',
          lead:
            'Ein Echtzeit-Automotive-Showroom-Projekt in Unreal Engine mit Fokus auf Szenenwechsel, cineastische Praesentation und Blueprint-gesteuerte Interaktion.',
          projectDetails: 'Projektdetails',
          duration: 'Dauer:',
          role: 'Rolle:',
          focus: 'Fokus:',
          videoAria: 'Car Configurator YouTube-Video',
          videoTitle: 'Car Configurator Video-Walkthrough',
          overview: 'Ueberblick',
          whatIBuilt: 'Was ich gebaut habe',
          systemDesign: 'Systemdesign',
          technicalHighlights: 'Technische Highlights',
          challengesReflection: 'Herausforderungen und Reflexion',
        }
      : {
          backToProjects: '<- Back to projects',
          fallbackTitle: 'Car Configurator',
          lead:
            'A realtime automotive showroom project built in Unreal Engine, focused on scene switching, cinematic presentation, and Blueprint-driven interaction.',
          projectDetails: 'Project details',
          duration: 'Duration:',
          role: 'Role:',
          focus: 'Focus:',
          videoAria: 'Car Configurator YouTube video',
          videoTitle: 'Car Configurator video walkthrough',
          overview: 'Overview',
          whatIBuilt: 'What I Built',
          systemDesign: 'System Design',
          technicalHighlights: 'Technical Highlights',
          challengesReflection: 'Challenges & Reflection',
        }

  return (
    <>
      <p className="page-lead page-back-link page-back-link--loose">
        <Link to="/projects">{copy.backToProjects}</Link>
      </p>

      <section className="case-hero" aria-labelledby="car-configurator-hero-title">
        <h1 className="page-title case-hero__title" id="car-configurator-hero-title">
          {project?.title ?? copy.fallbackTitle}
        </h1>

        <p className="page-lead case-hero__lead">
          {copy.lead}
        </p>

        <div className="case-meta" aria-label={copy.projectDetails}>
          <p>
            <strong>{copy.duration}</strong> 4 weeks
          </p>
          <p>
            <strong>{copy.role}</strong> 3D Generalist / Blueprint-driven interaction
          </p>
          <p>
            <strong>Tools:</strong> Unreal Engine 5, Blueprint, Sequencer, UMG
          </p>
          <p>
            <strong>{copy.focus}</strong> Realtime presentation, interaction, scene transition system
          </p>
        </div>

        <div className="case-video-embed" aria-label={copy.videoAria}>
          <iframe
            className="case-video-embed__iframe"
            title={copy.videoTitle}
            src="https://www.youtube.com/embed/OL9nCV1RQnI"
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      <PageSection title={copy.overview} id="overview">
        <div className="case-copy">
          <p>
            This is not a gameplay prototype. It is a realtime automotive showroom and configurator
            built around presentation, scene switching, and user interaction.
          </p>
          <p>
            The project includes three display scenes inside one level: Skyline, a rooftop parking lot
            in daylight; Oasis, a desert villa at dusk; and Studio, a clean indoor setup with white
            lighting. Each scene has its own entry and exit sequence, while the overall flow is
            controlled through a central Blueprint controller.
          </p>
          <p>
            My goal was to combine visual presentation with interaction logic instead of relying only
            on a static render setup.
          </p>
        </div>

        <div className="case-media-stack">
          <CaseStudyImage image={caseStudyImages[0]} />
        </div>
      </PageSection>

      <PageSection title={copy.whatIBuilt} id="what-i-built">
        <div className="case-copy">
          <ul className="case-list">
            <li>Three display scenes organized in one level.</li>
            <li>Scene-specific entry and exit camera sequences.</li>
            <li>State-driven scene switching through a central controller.</li>
            <li>Free orbit viewing combined with display camera handoff.</li>
            <li>Vehicle paint preset switching.</li>
            <li>Interior trim and brightness presets.</li>
            <li>Interior ambient light color control.</li>
            <li>One-click Open Panels interaction for doors, hood, and trunk.</li>
            <li>Interior camera mode.</li>
            <li>Scene-dependent lighting changes.</li>
          </ul>

          <p>I focused on making these features work together as one showroom flow.</p>
        </div>

        <div className="case-media-stack">
          <CaseStudyImage image={caseStudyImages[1]} />
        </div>
      </PageSection>

      <PageSection title={copy.systemDesign} id="system-design">
        <div className="case-copy">
          <p>One of the main things I focused on in this project was structure.</p>

          <p>Instead of putting everything in one Blueprint, I split the system into clear layers:</p>

          <ul className="case-list">
            <li>
              <strong>BP_ShowroomController</strong> manages scene flow, transition state, camera
              handoff, and UI requests.
            </li>
            <li>
              <strong>BP_MySceneLightingControllerBase</strong> handles lighting changes between
              scenes.
            </li>
            <li>
              <strong>BP_ShowroomCar_Master</strong> acts as the outer presentation blueprint for
              the vehicle.
            </li>
            <li>
              <strong>BP_Car02_Body</strong> contains door logic, mesh part organization, material
              initialization, paint presets, and interior-related controls.
            </li>
            <li>
              <strong>WBP_MainUI</strong> acts as the user-facing layer and sends requests through
              the controller instead of directly owning all logic.
            </li>
          </ul>

          <p>This made the project easier to read, debug, and extend.</p>

          <p>
            A key part of the project was learning Blueprint ownership more clearly: which actor
            should hold state, which Blueprint should coordinate actions, and which one should only
            execute them.
          </p>
        </div>

        <div className="case-media-stack">
          <CaseStudyImage image={caseStudyImages[2]} />
        </div>
      </PageSection>

      <PageSection title={copy.technicalHighlights} id="technical-highlights">
        <div className="case-copy">
          <h3>1. State-driven scene switching</h3>
          <p>
            A key part of the project was building scene switching as a controlled state flow instead
            of a direct jump between scenes.
          </p>
          <p>
            The controller tracks values such as <code>CurrentScene</code>,{' '}
            <code>PendingScene</code>, <code>TransitionState</code>, and{' '}
            <code>AllowFreeCameraControl</code>. I also used enums including{' '}
            <code>E_ShowroomScene</code>, <code>E_TransitionState</code>, and{' '}
            <code>E_LightingPreset</code> to keep the logic explicit.
          </p>
          <p>
            This made it possible to run transitions in stages while preventing repeated input or
            invalid switching.
          </p>
        </div>

        <div className="case-media-stack">
          <CaseStudyImage image={caseStudyImages[3]} />
        </div>

        <div className="case-copy">
          <h3>2. Sequencer and camera handoff</h3>
          <p>
            I wanted the experience to feel guided, not just interactive. Each scene uses its own
            entry and exit sequence, and the flow moves through cinematic cameras before handing
            control back to the orbit view.
          </p>
          <p>
            This required coordinating scene cameras, entry and exit sequences, orbit targets, and
            free-view handoff. It also helped me understand how Sequencer can support realtime
            presentation instead of acting as a separate cinematic layer.
          </p>
        </div>

        <div className="case-media-stack">
          <CaseStudyImage image={caseStudyImages[4]} />
        </div>

        <div className="case-copy">
          <h3>3. UI requests and vehicle configuration logic</h3>
          <p>
            The UI was designed as a request layer rather than a place to store all logic.
          </p>
          <p>
            From the interface, users can switch scenes, open panels, enter the interior view,
            change paint presets, and adjust interior settings. These actions are routed through the
            showroom controller, which then forwards them to the relevant vehicle or scene systems.
          </p>
          <p>
            On the vehicle side, I separated logic for material initialization, paint presets, trim
            presets, interior brightness, and ambient light color changes. This made the interaction
            flow more consistent and easier to maintain.
          </p>
        </div>

        <div className="case-media-stack">
          <CaseStudyImage image={caseStudyImages[5]} />
        </div>
      </PageSection>

      <PageSection title={copy.challengesReflection} id="challenges-reflection">
        <div className="case-copy">
          <p>
            This project was also a practical step for me in working with Unreal Engine beyond static
            scene setup.
          </p>

          <p>
            Some of the main challenges were coordinating multiple systems at once: keeping transitions
            predictable, deciding Blueprint ownership, managing level references, and balancing
            presentation quality with stable realtime behavior.
          </p>

          <p>
            I also ran into technical issues that affected my decisions. For example, I tested
            Nanite on the vehicle during asset cleanup, but disabling it gave more reliable visual
            results because some high-detail surfaces were being reduced in ways that did not suit the
            car model. The project also made me more aware of performance trade-offs in UE5, especially
            when combining multiple environments, lighting setups, and presentation logic in one
            prototype.
          </p>

          <p>
            Overall, this project reflects where I am strongest right now: combining scene building,
            presentation design, and Blueprint logic. It also points toward the direction I want to
            keep growing into next — realtime 3D development and technical-art-adjacent work.
          </p>
        </div>
      </PageSection>
    </>
  )
}