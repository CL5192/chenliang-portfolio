import { Link } from 'react-router-dom'
import { PageSection } from '../../components/PageSection'
import { getProjectBySlug } from '../../content/projects'
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
      'Three presentation scenes inside a single level, each with its own mood, lighting setup, and transition flow.',
  },
  {
    src: uiOverviewImage,
    alt: 'Main Car Configurator interface showing scene switching, paint presets, panel controls, and interior mode.',
    caption:
      'The UI exposes the main interaction layer: scene switching, paint presets, open panels, and interior mode.',
  },
  {
    src: systemArchitectureImage,
    alt: 'System architecture collage showing the central showroom controller, key variables, and scene and transition enums.',
    caption:
      'The core system is organized around a central controller, supported by explicit scene and transition enums.',
  },
  {
    src: stateSwitchImage,
    alt: 'Blueprint logic for controlled scene switching using explicit transition states.',
    caption:
      'Scene switching is controlled through explicit state tracking rather than direct button-to-scene jumps.',
  },
  {
    src: cameraHandoffImage,
    alt: 'Blueprint logic for handing control back to the orbit camera after guided scene transitions.',
    caption:
      'After each guided transition, control is handed back to the orbit camera for interactive viewing.',
  },
  {
    src: uiToVehicleConfigImage,
    alt: 'UI request flow connected to vehicle configuration logic such as paint and interior settings.',
    caption:
      'UI actions are routed through the controller and then applied to the vehicle configuration systems.',
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
      <p className="page-lead page-back-link page-back-link--loose">
        <Link to="/projects">← Back to projects</Link>
      </p>

      <section className="case-hero" aria-labelledby="car-configurator-hero-title">
        <h1 className="page-title case-hero__title" id="car-configurator-hero-title">
          {project?.title ?? 'Car Configurator'}
        </h1>

        <p className="page-lead case-hero__lead">
          An interactive automotive showroom prototype built in Unreal Engine, focused on
          multi-scene presentation, cinematic transitions, and blueprint-driven interaction.
        </p>

        <div className="case-meta" aria-label="Project details">
          <p>
            <strong>Duration:</strong> 4 weeks
          </p>
          <p>
            <strong>Role:</strong> 3D Generalist with Blueprint Logic Ability
          </p>
          <p>
            <strong>Tools:</strong> Unreal Engine 5, Blueprint, Sequencer, UMG
          </p>
          <p>
            <strong>Focus:</strong> Realtime presentation, interaction logic, scene transition system
          </p>
        </div>

        <div className="case-video-embed" aria-label="Car Configurator YouTube video">
          <iframe
            className="case-video-embed__iframe"
            title="Car Configurator video walkthrough"
            src="https://www.youtube.com/embed/OL9nCV1RQnI"
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      <PageSection title="Overview" id="overview">
        <div className="case-copy">
          <p>
            This project is not a gameplay prototype. It is a realtime automotive
            showroom/configurator built around presentation flow, scene switching, and interactive
            viewing.
          </p>
          <p>
            The experience contains three display environments inside a single level:{' '}
            <strong>Skyline</strong>, a rooftop parking lot in daylight; <strong>Oasis</strong>, a
            desert villa setting at dusk; and <strong>Studio</strong>, a clean indoor setup with
            white lighting. Each scene has its own entry and exit sequence, while the overall flow
            is coordinated through a central blueprint controller.
          </p>
          <p>
            My goal was to combine visual presentation with structured interaction logic, rather
            than relying on a static render setup alone.
          </p>
        </div>

        <div className="case-media-stack">
          <CaseStudyImage image={caseStudyImages[0]} />
        </div>
      </PageSection>

      <PageSection title="What I Built" id="what-i-built">
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

          <p>
            Rather than building isolated features, I focused on making them work together as one
            coherent showroom flow.
          </p>
        </div>

        <div className="case-media-stack">
          <CaseStudyImage image={caseStudyImages[1]} />
        </div>
      </PageSection>

      <PageSection title="System Design" id="system-design">
        <div className="case-copy">
          <p>One of the main things I wanted to improve in this project was structure.</p>

          <p>
            Instead of placing everything into a single blueprint, I separated the system into clear
            layers:
          </p>

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

          <p>
            This separation helped keep the project more readable, easier to debug, and easier to
            extend.
          </p>

          <p>
            A key learning for me was understanding blueprint ownership more clearly: deciding which
            actor should hold state, which blueprint should coordinate actions, and which one should
            only execute them.
          </p>
        </div>

        <div className="case-media-stack">
          <CaseStudyImage image={caseStudyImages[2]} />
        </div>
      </PageSection>

      <PageSection title="Technical Highlights" id="technical-highlights">
        <div className="case-copy">
          <h3>1. State-driven scene switching</h3>
          <p>
            A key part of the project was building scene switching as a controlled state flow
            instead of a direct jump.
          </p>
          <p>
            The controller tracks values such as <code>CurrentScene</code>,{' '}
            <code>PendingScene</code>, <code>TransitionState</code>, and{' '}
            <code>AllowFreeCameraControl</code>. I also used enums including{' '}
            <code>E_ShowroomScene</code>, <code>E_TransitionState</code>, and{' '}
            <code>E_LightingPreset</code> to keep the logic explicit.
          </p>
          <p>
            This made it possible to define a transition in stages, while preventing repeated input
            or invalid switching during the process.
          </p>
        </div>

        <div className="case-media-stack">
          <CaseStudyImage image={caseStudyImages[3]} />
        </div>

        <div className="case-copy">
          <h3>2. Sequencer and camera handoff</h3>
          <p>
            I wanted the experience to feel guided, not just interactive. For that reason, each
            scene uses its own entry and exit sequence, and the transition flow moves through
            cinematic cameras before handing control back to the orbit view.
          </p>
          <p>
            This required coordinating scene cameras, entry and exit sequences, orbit targets, and
            free-view handoff. It also helped me better understand how Sequencer can support
            realtime presentation instead of functioning as a separate cinematic layer.
          </p>
        </div>

        <div className="case-media-stack">
          <CaseStudyImage image={caseStudyImages[4]} />
        </div>

        <div className="case-copy">
          <h3>3. UI requests and vehicle configuration logic</h3>
          <p>
            The UI was designed as a request layer rather than a place to store all business logic.
          </p>
          <p>
            From the interface, users can switch scenes, open panels, enter the interior view,
            change paint presets, and adjust interior settings. These actions are routed through the
            showroom controller, which then forwards them to the relevant vehicle or scene systems.
          </p>
          <p>
            On the vehicle side, I organized separate logic for material initialization, paint
            presets, trim presets, interior brightness, and ambient light color changes. This helped
            keep the interaction flow more consistent and easier to maintain.
          </p>
        </div>

        <div className="case-media-stack">
          <CaseStudyImage image={caseStudyImages[5]} />
        </div>
      </PageSection>

      <PageSection title="Challenges & Reflection" id="challenges-reflection">
        <div className="case-copy">
          <p>
            This project was also a practical learning process in working with Unreal Engine beyond
            static scene setup.
          </p>

          <p>
            Some of the challenges came from coordinating multiple systems at once: keeping
            transitions predictable, deciding blueprint ownership, managing references inside the
            level, and balancing presentation quality with stable realtime behavior.
          </p>

          <p>
            I also ran into technical issues that influenced my decisions. For example, I tested
            Nanite on the vehicle during asset cleanup, but in this case disabling it produced more
            reliable visual results because some high-detail surfaces were being reduced in ways
            that were not suitable for the car model. The project also made me more aware of
            performance trade-offs in UE5, especially when combining multiple environments, lighting
            setups, and presentation logic in one prototype.
          </p>

          <p>
            Overall, this project reflects where I am strongest right now: as a 3D generalist who
            can combine scene building, presentation design, and blueprint logic. It also points
            toward the direction I want to continue growing into next — realtime 3D development and
            technical-art-adjacent workflows.
          </p>
        </div>
      </PageSection>
    </>
  )
}