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

type LocalizedCaseStudyImageData = {
  src: string
  alt: {
    en: string
    de: string
  }
  caption: {
    en: string
    de: string
  }
}

const caseStudyImages: LocalizedCaseStudyImageData[] = [
  {
    src: sceneOverviewImage,
    alt: {
      en: 'Three presentation scenes from the Car Configurator experience: Skyline, Oasis, and Studio.',
      de: 'Drei Präsentationsszenen aus dem Car-Configurator-Erlebnis: Skyline, Oasis und Studio.',
    },
    caption: {
      en: 'Three presentation scenes inside one level, each with its own mood, lighting, and transition flow.',
      de: 'Drei Präsentationsszenen in einem Level, jeweils mit eigener Stimmung, Beleuchtung und Übergangslogik.',
    },
  },
  {
    src: uiOverviewImage,
    alt: {
      en: 'Main Car Configurator interface showing scene switching, paint presets, panel controls, and interior mode.',
      de: 'Hauptoberfläche des Car Configurators mit Szenenwechsel, Lack-Presets, Panel-Steuerung und Innenraum-Modus.',
    },
    caption: {
      en: 'The UI handles the main interaction layer: scene switching, paint presets, open panels, and interior mode.',
      de: 'Die UI bildet die zentrale Interaktionsebene: Szenenwechsel, Lack-Presets, Open Panels und Innenraum-Modus.',
    },
  },
  {
    src: systemArchitectureImage,
    alt: {
      en: 'System architecture collage showing the central showroom controller, key variables, and scene and transition enums.',
      de: 'Systemarchitektur-Collage mit zentralem Showroom-Controller, Schlüsselvariablen sowie Szenen- und Übergangs-Enums.',
    },
    caption: {
      en: 'The core system is built around a central controller, with clear scene and transition enums.',
      de: 'Das Kernsystem ist um einen zentralen Controller aufgebaut, mit klaren Szenen- und Übergangs-Enums.',
    },
  },
  {
    src: stateSwitchImage,
    alt: {
      en: 'Blueprint logic for controlled scene switching using explicit transition states.',
      de: 'Blueprint-Logik für kontrollierten Szenenwechsel mit expliziten Übergangszuständen.',
    },
    caption: {
      en: 'Scene switching uses explicit state tracking instead of direct button-to-scene jumps.',
      de: 'Der Szenenwechsel nutzt explizites State-Tracking statt direkter Sprünge von Button zu Szene.',
    },
  },
  {
    src: cameraHandoffImage,
    alt: {
      en: 'Blueprint logic for handing control back to the orbit camera after guided scene transitions.',
      de: 'Blueprint-Logik zur Rückgabe der Steuerung an die Orbit-Kamera nach geführten Szenenübergängen.',
    },
    caption: {
      en: 'After each guided transition, control returns to the orbit camera for interactive viewing.',
      de: 'Nach jedem geführten Übergang geht die Steuerung zurück an die Orbit-Kamera für die interaktive Ansicht.',
    },
  },
  {
    src: uiToVehicleConfigImage,
    alt: {
      en: 'UI request flow connected to vehicle configuration logic such as paint and interior settings.',
      de: 'UI-Request-Flow, verbunden mit der Fahrzeugkonfiguration wie Lack- und Innenraumeinstellungen.',
    },
    caption: {
      en: 'UI actions go through the controller and are then applied to the vehicle configuration systems.',
      de: 'UI-Aktionen laufen über den Controller und werden anschließend auf die Fahrzeugkonfigurationssysteme angewendet.',
    },
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
  const localizedCaseStudyImages: CaseStudyImageData[] = caseStudyImages.map((image) => ({
    src: image.src,
    alt: image.alt[locale],
    caption: image.caption[locale],
  }))
  const copy =
    locale === 'de'
      ? {
          backToProjects: '<- Zurück zu Projekten',
          fallbackTitle: 'Auto-Konfigurator',
          lead:
            'Ein Echtzeit-Automotive-Showroom-Projekt in Unreal Engine mit Fokus auf Szenenwechsel, cineastische Präsentation und Blueprint-gesteuerte Interaktion.',
          projectDetails: 'Projektdetails',
          duration: 'Dauer:',
          role: 'Rolle:',
          tools: 'Tools:',
          focus: 'Fokus:',
          videoAria: 'Car Configurator YouTube-Video',
          videoTitle: 'Car Configurator Video-Walkthrough',
          overview: 'Überblick',
          whatIBuilt: 'Was ich gebaut habe',
          systemDesign: 'Systemdesign',
          technicalHighlights: 'Technische Highlights',
          challengesReflection: 'Herausforderungen und Reflexion',
          overviewParagraphs: [
            'Das ist kein Gameplay-Prototyp. Es ist ein Echtzeit-Automotive-Showroom und Konfigurator mit Fokus auf Präsentation, Szenenwechsel und Nutzerinteraktion.',
            'Das Projekt umfasst drei Präsentationsszenen in einem Level: Skyline, ein Dachparkplatz bei Tageslicht; Oasis, eine Wüstenvilla in der Abendstimmung; und Studio, ein klarer Indoor-Aufbau mit weißer Beleuchtung. Jede Szene hat eigene Ein- und Ausstiegssequenzen, während der Gesamtfluss über einen zentralen Blueprint-Controller gesteuert wird.',
            'Mein Ziel war es, visuelle Präsentation und Interaktionslogik zu verbinden, statt mich nur auf ein statisches Render-Setup zu stützen.',
          ],
          buildItems: [
            'Drei Präsentationsszenen, organisiert in einem Level.',
            'Szenenspezifische Ein- und Ausstiegs-Kamerasequenzen.',
            'State-gesteuerter Szenenwechsel über einen zentralen Controller.',
            'Freie Orbit-Ansicht kombiniert mit Kamera-Handover der Präsentationskamera.',
            'Umschaltung von Fahrzeug-Lack-Presets.',
            'Presets für Innenraum-Trim und Helligkeit.',
            'Farbsteuerung der Innenraum-Ambientebeleuchtung.',
            'One-Click-Open-Panels für Türen, Motorhaube und Kofferraum.',
            'Innenraum-Kameramodus.',
            'Szenenabhängige Beleuchtungswechsel.',
          ],
          buildOutro:
            'Ich habe mich darauf konzentriert, diese Funktionen als einen zusammenhängenden Showroom-Flow umzusetzen.',
          systemParagraph1:
            'Ein zentraler Fokus in diesem Projekt war die Systemstruktur.',
          systemParagraph2:
            'Statt alles in einem Blueprint unterzubringen, habe ich das System in klare Ebenen aufgeteilt:',
          systemLayers: [
            '<strong>BP_ShowroomController</strong> steuert Szenenfluss, Übergangszustände, Kamera-Handover und UI-Requests.',
            '<strong>BP_MySceneLightingControllerBase</strong> übernimmt die Beleuchtungswechsel zwischen den Szenen.',
            '<strong>BP_ShowroomCar_Master</strong> fungiert als äußeres Präsentations-Blueprint des Fahrzeugs.',
            '<strong>BP_Car02_Body</strong> enthält Türlogik, Organisation der Mesh-Teile, Materialinitialisierung, Lack-Presets und Innenraumsteuerung.',
            '<strong>WBP_MainUI</strong> bildet die nutzerseitige Ebene und sendet Requests über den Controller, statt die gesamte Logik direkt zu besitzen.',
          ],
          systemParagraph3:
            'Dadurch wurde das Projekt leichter lesbar, besser zu debuggen und einfacher zu erweitern.',
          systemParagraph4:
            'Ein wesentlicher Lernaspekt war für mich ein klareres Verständnis von Blueprint-Verantwortlichkeiten: welcher Actor den State halten sollte, welcher Blueprint Aktionen koordiniert und welcher sie nur ausführt.',
          techHeading1: '1. State-gesteuerter Szenenwechsel',
          techPara1a:
            'Ein zentraler Teil des Projekts war, den Szenenwechsel als kontrollierten State-Flow aufzubauen - statt als direkten Sprung zwischen Szenen.',
          techPara1b:
            'Der Controller verfolgt Werte wie <code>CurrentScene</code>, <code>PendingScene</code>, <code>TransitionState</code> und <code>AllowFreeCameraControl</code>. Zusätzlich nutzte ich Enums wie <code>E_ShowroomScene</code>, <code>E_TransitionState</code> und <code>E_LightingPreset</code>, um die Logik explizit zu halten.',
          techPara1c:
            'So konnten Übergänge in Stufen laufen, während wiederholte Eingaben oder ungültige Wechsel verhindert wurden.',
          techHeading2: '2. Sequencer und Kamera-Handover',
          techPara2a:
            'Ich wollte, dass sich die Experience geführt anfühlt und nicht nur interaktiv. Jede Szene nutzt eigene Ein- und Ausstiegssequenzen, und der Ablauf geht durch cineastische Kameras, bevor die Kontrolle zurück an die Orbit-Ansicht übergeben wird.',
          techPara2b:
            'Dafür mussten Szenenkameras, Ein- und Ausstiegssequenzen, Orbit-Ziele und der Free-View-Handover koordiniert werden. Gleichzeitig wurde klarer, wie Sequencer die Echtzeit-Präsentation unterstützen kann, statt als separate Cinematic-Ebene zu laufen.',
          techHeading3: '3. UI-Requests und Fahrzeugkonfigurationslogik',
          techPara3a:
            'Die UI wurde als Request-Ebene konzipiert und nicht als Ort für die komplette Logik.',
          techPara3b:
            'Über die Oberfläche können Nutzer Szenen wechseln, Panels öffnen, in die Innenraumansicht wechseln, Lack-Presets umschalten und Innenraumeinstellungen anpassen. Diese Aktionen werden über den Showroom-Controller geroutet und anschließend an die zuständigen Fahrzeug- oder Szenensysteme weitergeleitet.',
          techPara3c:
            'Auf Fahrzeugseite habe ich Logik für Materialinitialisierung, Lack-Presets, Trim-Presets, Innenraumhelligkeit und Ambientelicht-Farbwechsel getrennt organisiert. Dadurch wurde der Interaktionsfluss konsistenter und wartbarer.',
          challengeParagraphs: [
            'Dieses Projekt war für mich auch ein praktischer Schritt, um in Unreal Engine über statische Szenen-Setups hinauszuarbeiten.',
            'Zu den zentralen Herausforderungen gehörte die gleichzeitige Koordination mehrerer Systeme: Übergänge vorhersagbar halten, Blueprint-Verantwortlichkeiten festlegen, Level-Referenzen verwalten und Präsentationsqualität mit stabilem Echtzeitverhalten ausbalancieren.',
            'Ich stieß außerdem auf technische Punkte, die Entscheidungen beeinflusst haben. Beispielsweise testete ich Nanite am Fahrzeug während des Asset-Cleanups, doch das Deaktivieren lieferte visuell verlässlichere Ergebnisse, da einige hochdetaillierte Flächen reduziert wurden, was nicht zum Fahrzeugmodell passte. Das Projekt hat mich zudem stärker für Performance-Trade-offs in UE5 sensibilisiert - besonders beim Kombinieren mehrerer Umgebungen, Beleuchtungs-Setups und Präsentationslogik in einem Prototyp.',
            'Insgesamt zeigt das Projekt, wo meine aktuellen Stärken liegen: Szenenaufbau, Präsentationsdesign und Blueprint-Logik in Kombination. Gleichzeitig zeigt es die Richtung, in die ich mich weiterentwickeln möchte - Realtime-3D-Entwicklung und technisch-nahe Visual-Design-Rollen.',
          ],
        }
      : {
          backToProjects: '<- Back to projects',
          fallbackTitle: 'Car Configurator',
          lead:
            'A realtime automotive showroom project built in Unreal Engine, focused on scene switching, cinematic presentation, and Blueprint-driven interaction.',
          projectDetails: 'Project details',
          duration: 'Duration:',
          role: 'Role:',
          tools: 'Tools:',
          focus: 'Focus:',
          videoAria: 'Car Configurator YouTube video',
          videoTitle: 'Car Configurator video walkthrough',
          overview: 'Overview',
          whatIBuilt: 'What I Built',
          systemDesign: 'System Design',
          technicalHighlights: 'Technical Highlights',
          challengesReflection: 'Challenges & Reflection',
          overviewParagraphs: [
            'This is not a gameplay prototype. It is a realtime automotive showroom and configurator built around presentation, scene switching, and user interaction.',
            'The project includes three display scenes inside one level: Skyline, a rooftop parking lot in daylight; Oasis, a desert villa at dusk; and Studio, a clean indoor setup with white lighting. Each scene has its own entry and exit sequence, while the overall flow is controlled through a central Blueprint controller.',
            'My goal was to combine visual presentation with interaction logic instead of relying only on a static render setup.',
          ],
          buildItems: [
            'Three display scenes organized in one level.',
            'Scene-specific entry and exit camera sequences.',
            'State-driven scene switching through a central controller.',
            'Free orbit viewing combined with display camera handoff.',
            'Vehicle paint preset switching.',
            'Interior trim and brightness presets.',
            'Interior ambient light color control.',
            'One-click Open Panels interaction for doors, hood, and trunk.',
            'Interior camera mode.',
            'Scene-dependent lighting changes.',
          ],
          buildOutro: 'I focused on making these features work together as one showroom flow.',
          systemParagraph1: 'One of the main things I focused on in this project was structure.',
          systemParagraph2:
            'Instead of putting everything in one Blueprint, I split the system into clear layers:',
          systemLayers: [
            '<strong>BP_ShowroomController</strong> manages scene flow, transition state, camera handoff, and UI requests.',
            '<strong>BP_MySceneLightingControllerBase</strong> handles lighting changes between scenes.',
            '<strong>BP_ShowroomCar_Master</strong> acts as the outer presentation blueprint for the vehicle.',
            '<strong>BP_Car02_Body</strong> contains door logic, mesh part organization, material initialization, paint presets, and interior-related controls.',
            '<strong>WBP_MainUI</strong> acts as the user-facing layer and sends requests through the controller instead of directly owning all logic.',
          ],
          systemParagraph3: 'This made the project easier to read, debug, and extend.',
          systemParagraph4:
            'A key part of the project was learning Blueprint ownership more clearly: which actor should hold state, which Blueprint should coordinate actions, and which one should only execute them.',
          techHeading1: '1. State-driven scene switching',
          techPara1a:
            'A key part of the project was building scene switching as a controlled state flow instead of a direct jump between scenes.',
          techPara1b:
            'The controller tracks values such as <code>CurrentScene</code>, <code>PendingScene</code>, <code>TransitionState</code>, and <code>AllowFreeCameraControl</code>. I also used enums including <code>E_ShowroomScene</code>, <code>E_TransitionState</code>, and <code>E_LightingPreset</code> to keep the logic explicit.',
          techPara1c:
            'This made it possible to run transitions in stages while preventing repeated input or invalid switching.',
          techHeading2: '2. Sequencer and camera handoff',
          techPara2a:
            'I wanted the experience to feel guided, not just interactive. Each scene uses its own entry and exit sequence, and the flow moves through cinematic cameras before handing control back to the orbit view.',
          techPara2b:
            'This required coordinating scene cameras, entry and exit sequences, orbit targets, and free-view handoff. It also helped me understand how Sequencer can support realtime presentation instead of acting as a separate cinematic layer.',
          techHeading3: '3. UI requests and vehicle configuration logic',
          techPara3a: 'The UI was designed as a request layer rather than a place to store all logic.',
          techPara3b:
            'From the interface, users can switch scenes, open panels, enter the interior view, change paint presets, and adjust interior settings. These actions are routed through the showroom controller, which then forwards them to the relevant vehicle or scene systems.',
          techPara3c:
            'On the vehicle side, I separated logic for material initialization, paint presets, trim presets, interior brightness, and ambient light color changes. This made the interaction flow more consistent and easier to maintain.',
          challengeParagraphs: [
            'This project was also a practical step for me in working with Unreal Engine beyond static scene setup.',
            'Some of the main challenges were coordinating multiple systems at once: keeping transitions predictable, deciding Blueprint ownership, managing level references, and balancing presentation quality with stable realtime behavior.',
            'I also ran into technical issues that affected my decisions. For example, I tested Nanite on the vehicle during asset cleanup, but disabling it gave more reliable visual results because some high-detail surfaces were being reduced in ways that did not suit the car model. The project also made me more aware of performance trade-offs in UE5, especially when combining multiple environments, lighting setups, and presentation logic in one prototype.',
            'Overall, this project reflects where I am strongest right now: combining scene building, presentation design, and Blueprint logic. It also points toward the direction I want to keep growing into next - realtime 3D development and technical-art-adjacent work.',
          ],
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
            <strong>{copy.tools}</strong> Unreal Engine 5, Blueprint, Sequencer, UMG
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
          {copy.overviewParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="case-media-stack">
          <CaseStudyImage image={localizedCaseStudyImages[0]} />
        </div>
      </PageSection>

      <PageSection title={copy.whatIBuilt} id="what-i-built">
        <div className="case-copy">
          <ul className="case-list">
            {copy.buildItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p>{copy.buildOutro}</p>
        </div>

        <div className="case-media-stack">
          <CaseStudyImage image={localizedCaseStudyImages[1]} />
        </div>
      </PageSection>

      <PageSection title={copy.systemDesign} id="system-design">
        <div className="case-copy">
          <p>{copy.systemParagraph1}</p>

          <p>{copy.systemParagraph2}</p>

          <ul className="case-list">
            {copy.systemLayers.map((layer) => (
              <li key={layer} dangerouslySetInnerHTML={{ __html: layer }} />
            ))}
          </ul>

          <p>{copy.systemParagraph3}</p>

          <p>{copy.systemParagraph4}</p>
        </div>

        <div className="case-media-stack">
          <CaseStudyImage image={localizedCaseStudyImages[2]} />
        </div>
      </PageSection>

      <PageSection title={copy.technicalHighlights} id="technical-highlights">
        <div className="case-copy">
          <h3>{copy.techHeading1}</h3>
          <p>{copy.techPara1a}</p>
          <p dangerouslySetInnerHTML={{ __html: copy.techPara1b }} />
          <p>{copy.techPara1c}</p>
        </div>

        <div className="case-media-stack">
          <CaseStudyImage image={localizedCaseStudyImages[3]} />
        </div>

        <div className="case-copy">
          <h3>{copy.techHeading2}</h3>
          <p>{copy.techPara2a}</p>
          <p>{copy.techPara2b}</p>
        </div>

        <div className="case-media-stack">
          <CaseStudyImage image={localizedCaseStudyImages[4]} />
        </div>

        <div className="case-copy">
          <h3>{copy.techHeading3}</h3>
          <p>{copy.techPara3a}</p>
          <p>{copy.techPara3b}</p>
          <p>{copy.techPara3c}</p>
        </div>

        <div className="case-media-stack">
          <CaseStudyImage image={localizedCaseStudyImages[5]} />
        </div>
      </PageSection>

      <PageSection title={copy.challengesReflection} id="challenges-reflection">
        <div className="case-copy">
          {copy.challengeParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </PageSection>
    </>
  )
}