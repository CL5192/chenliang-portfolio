import { Link } from 'react-router-dom'
import { PageSection } from '../../components/PageSection'
import { getProjectBySlug } from '../../content/projects'
import { useI18n } from '../../i18n/I18nContext'

const slug = 'automotive-studio-cinematic'
const youtubeEmbedId = 'se5KxsRHMYw'

export function AutomotiveStudioCinematic() {
  const { locale } = useI18n()
  const project = getProjectBySlug(slug, locale)
  const copy =
    locale === 'de'
      ? {
          backToProjects: '<- Zurück zu Projekten',
          fallbackTitle: 'Automotive Studio Cinematic',
          videoAria: 'Automotive Studio Cinematic YouTube-Video',
          videoTitle: 'Automotive Studio Cinematic Video',
          lead:
            'Ein kurzes Automotive-Studio-Cinematic in Unreal Engine 5 als persönliches Portfolio-Projekt.',
          projectDetails: 'Projektdetails',
          vehicleReference: 'Fahrzeugreferenz',
          vehicleName: 'NIO ET9',
          type: 'Typ',
          typeValue: 'Persönliches Portfolio / Visualisierung',
          tools: 'Tools',
          toolsValue: 'Unreal Engine 5, Sequencer, DaVinci Resolve',
          disclaimer:
            'Dies ist ein unabhängiges, nicht-kommerzielles Visualisierungsprojekt. Es steht in keiner Verbindung zu NIO oder verbundenen Unternehmen und wird weder von diesen unterstützt noch empfohlen.',
          focusTitle: 'Schwerpunkte',
          focusItems: [
            'Automotive Lighting',
            'Material- und Glas-Rendering',
            'Kamerabewegung',
            'Produktvisualisierung',
            'Schnitt in DaVinci Resolve',
          ],
          overviewTitle: 'Überblick',
          overviewParagraphs: [
            'Dieses Projekt konzentriert sich auf die cineastische Präsentation eines Fahrzeugs in einer kontrollierten Studio-Umgebung. Ziel war es, Licht, Materialien und Kameraführung so einzusetzen, dass Form, Oberflächen und Glas klar und präzise zur Geltung kommen.',
            'Die gesamte Visualisierung entstand in Unreal Engine 5, von der Szenen- und Lichtsetzung über Materialarbeit bis hin zu Sequencer-basierten Kamerapfaden. Der finale Schnitt wurde in DaVinci Resolve umgesetzt.',
          ],
          takeawayTitle: 'Fazit',
          takeawayText:
            'Das Projekt vertieft meine Arbeit an automotive Lighting, Materialqualität und cineastischer Produktpräsentation in Echtzeit-3D — als Grundlage für weiteres Visualisierungs- und Cinematic-Arbeiten.',
        }
      : {
          backToProjects: '<- Back to projects',
          fallbackTitle: 'Automotive Studio Cinematic',
          videoAria: 'Automotive Studio Cinematic YouTube video',
          videoTitle: 'Automotive Studio Cinematic video',
          lead:
            'A short automotive studio cinematic created in Unreal Engine 5 as a personal portfolio project.',
          projectDetails: 'Project details',
          vehicleReference: 'Vehicle reference',
          vehicleName: 'NIO ET9',
          type: 'Type',
          typeValue: 'Personal portfolio / visualization',
          tools: 'Tools',
          toolsValue: 'Unreal Engine 5, Sequencer, DaVinci Resolve',
          disclaimer:
            'This is an independent, non-commercial visualization project. It is not affiliated with, sponsored by, or endorsed by NIO or any related company.',
          focusTitle: 'Focus areas',
          focusItems: [
            'Automotive lighting',
            'Material and glass rendering',
            'Camera movement',
            'Product visualization',
            'Editing in DaVinci Resolve',
          ],
          overviewTitle: 'Overview',
          overviewParagraphs: [
            'This project focuses on cinematic presentation of a vehicle in a controlled studio environment. The goal was to use lighting, materials, and camera work to clearly communicate form, surface quality, and glass.',
            'The full visualization was created in Unreal Engine 5 — from scene and lighting setup through material work to Sequencer-driven camera paths. Final editing was done in DaVinci Resolve.',
          ],
          takeawayTitle: 'Final takeaway',
          takeawayText:
            'This project deepens my work in automotive lighting, material quality, and cinematic product presentation in realtime 3D — as a foundation for further visualization and cinematic work.',
        }

  return (
    <>
      <p className="page-lead page-back-link">
        <Link to="/projects">{copy.backToProjects}</Link>
      </p>
      <h1 className="page-title">{project?.title ?? copy.fallbackTitle}</h1>

      <div className="case-video-embed" aria-label={copy.videoAria}>
        <iframe
          className="case-video-embed__iframe"
          title={copy.videoTitle}
          src={`https://www.youtube.com/embed/${youtubeEmbedId}`}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <p className="page-lead page-lead--after-media">{copy.lead}</p>

      <div className="case-meta" aria-label={copy.projectDetails}>
        <p>
          <strong>{copy.vehicleReference}</strong> {copy.vehicleName}
        </p>
        <p>
          <strong>{copy.type}</strong> {copy.typeValue}
        </p>
        <p>
          <strong>{copy.tools}</strong> {copy.toolsValue}
        </p>
      </div>

      <p className="page-lead detail-support-line">{copy.disclaimer}</p>

      <PageSection title={copy.focusTitle} id="focus-areas">
        <div className="case-copy">
          <ul className="case-list">
            {copy.focusItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </PageSection>

      <PageSection title={copy.overviewTitle} id="overview">
        <div className="case-copy">
          {copy.overviewParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </PageSection>

      <PageSection title={copy.takeawayTitle} id="final-takeaway">
        <div className="case-copy">
          <p>{copy.takeawayText}</p>
        </div>
      </PageSection>
    </>
  )
}
