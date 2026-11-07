import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { PageSection } from '../../components/PageSection'
import { getProjectBySlug } from '../../content/projects'
import { useI18n } from '../../i18n/I18nContext'
import planBoot from '../../assets/projects/varmr/compare-plan-boot.jpg'
import modelBoot from '../../assets/projects/varmr/compare-model-boot.jpg'
import planOlaf from '../../assets/projects/varmr/compare-plan-olaf.jpg'
import modelOlaf from '../../assets/projects/varmr/compare-model-olaf.jpg'

const slug = 'varmr'
const embedId = 'nDSgAK6DJi0'
const embedAllow = 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'

export function VarmrSpec() {
  const { locale } = useI18n()
  const project = getProjectBySlug(slug, locale)
  const copy =
    locale === 'de'
      ? {
          backToProjects: '<- Zurück zur Übersicht',
          fallbackTitle: 'VARMR',
          videoAria: 'VARMR-Spot auf YouTube',
          lead: 'Ein Wikinger filmt sich mit dem Handy in einem Nordseesturm und bewertet seine Ausrüstung: „Shield: wet. Boots: wet. Olaf: wet. Tea… hot.“ Dann die Flasche.',
          projectDetails: 'Projektdetails',
          client: 'Kunde',
          clientValue: 'VARMR (fiktiv) · Isolierflasche · Deutschland',
          medium: 'Medium',
          mediumValue: 'Ein Hochformat-Spot, 20 Sek., 9:16, UGC-Stil',
          role: 'Meine Rolle',
          roleValue: 'Allein, November 2026',
          tools: 'Tools',
          toolsValue: 'Claude Code · Seedance 2.5 (Dreamina) · Nano Banana auf Comfy Cloud (Referenzbilder, Storyboard) · ElevenLabs (Meeresrauschen)',
          roleLine:
            'Konzept, Regie, Prompts und jede Auswahl- und Schnittentscheidung kamen von mir. Video, Bilder und Sound hat KI generiert. Claude Code war mein Produktionsassistent: Es hat Prompts entworfen und Schnitte nach meinen Notizen montiert.',
          disclaimer:
            'Der Spot ist KI-generiert und im Video als solcher gekennzeichnet.',
          stepsTitle: 'Schritte',
          steps: [
            'Briefing: Ich habe mir angesehen, wie Werbung für Isolierflaschen in Deutschland gemacht wird, und entschieden, was ich übernehme und was ich bewusst breche.',
            'Referenzbilder und ein Storyboard mit sechs Bildern: der Wikinger, die Flasche, Olaf.',
            'Generierung in Teilen: ein 6-Sekunden-Entwurf zum Testen von Stimme und Rhythmus, dann die 18-Sekunden-Hauptszene, dann eine separate 5-Sekunden-Produktaufnahme.',
          ],
          rulesTitle: 'Was ich übernommen habe, was ich gebrochen habe',
          rulesIntro: 'Ich habe die üblichen UGC-Regeln befolgt und zwei bewusst gebrochen.',
          rules: [
            { label: 'Übernommen', value: 'Hochformat-Selfie aus der Hand, Ich-Perspektive, Hook im ersten Bild, eingeblendete Untertitel, ein Versprechen im Rahmen der Kategorie' },
            { label: 'Darsteller', value: 'Ein offen virtueller Wikinger statt eines echten Creators — gebrochen' },
            { label: 'Schauplatz', value: 'Ein Nordseesturm statt Alltag — gebrochen' },
          ],
          actingTitle: 'Die bessere Idee des Modells behalten',
          acting: [
            'Wenn eine Anweisung körperlich keinen Sinn ergibt, rät das Modell selbst, wie die Szene aussehen würde. Manchmal ist diese Vermutung besser als mein Plan.',
            'In meinem ersten Entwurf hielt der Wikinger in einer Hand das Handy und in der anderen die Flasche, und außerdem sollte er einen Schild hochhalten; das Modell hängte den Schild an seinen Unterarm. Ich hatte geplant, dass ein Besatzungsmitglied nach der Flasche greift, um sie ihm wegzunehmen (Storyboard-Bild 5). Stattdessen beugt sich Olaf, den der Wikinger gerade beim Namen genannt hat, ins Bild und hält eine Hand über den Dampf, um sie zu wärmen. Die beiden Momente hängen zusammen, und es wirkt wie ein Witz.',
          ],
          bootLabels: ['Mein Plan: Storyboard-Bild 2. Er leert Wasser aus einem Stiefel.', 'Was das Modell gemacht hat: Die Kamera blickt auf seinen nassen Stiefel.'],
          olafLabels: ['Mein Plan: Storyboard-Bild 5. Ein Besatzungsmitglied greift nach der Flasche.', 'Was das Modell gemacht hat: Olaf beugt sich herein und wärmt eine Hand über dem Dampf.'],
          actingAfter: [
            'Einen Entwurf behandle ich wie eine Probe: Ich sehe mir an, was das Modell verändert hat, behalte, was besser ist, und schreibe danach meine Beats und die Shotlist um.',
          ],
        }
      : {
          backToProjects: '<- Back to all work',
          fallbackTitle: 'VARMR',
          videoAria: 'VARMR spot on YouTube',
          lead: 'A Viking films himself on a phone in a North Sea storm and rates his gear: “Shield: wet. Boots: wet. Olaf: wet. Tea… hot.” Then the flask.',
          projectDetails: 'Project details',
          client: 'Client',
          clientValue: 'VARMR (fictional) · insulated flask · Germany',
          medium: 'Medium',
          mediumValue: 'One vertical spot, 20 s, 9:16, UGC style',
          role: 'My role',
          roleValue: 'Solo, November 2026',
          tools: 'Tools',
          toolsValue: 'Claude Code · Seedance 2.5 (Dreamina) · Nano Banana on Comfy Cloud (reference images, storyboard) · ElevenLabs (sea ambience)',
          roleLine:
            'Concept, direction, prompts and every selection and cut decision were mine. Video, images and sound were AI-generated. Claude Code was my production assistant: it drafted prompts and assembled cuts from my notes.',
          disclaimer:
            'The spot is AI-generated and labelled as such in the video.',
          stepsTitle: 'Steps',
          steps: [
            'Brief: I looked at how insulated-bottle ads in Germany are made and decided what to keep and what to break.',
            'Reference images and a six-panel storyboard: the Viking, the flask, Olaf.',
            'Generation in parts: a 6-second draft to test voice and rhythm, then the 18-second main shot, then a separate 5-second product shot.',
          ],
          rulesTitle: 'What I kept, what I broke',
          rulesIntro: 'I followed the usual UGC rules and broke two on purpose.',
          rules: [
            { label: 'Kept', value: 'Vertical handheld selfie, first person, a hook in the first frame, native captions, a claim inside the category range' },
            { label: 'Presenter', value: 'An openly virtual Viking instead of a real creator — broken' },
            { label: 'Setting', value: 'A North Sea storm instead of everyday life — broken' },
          ],
          actingTitle: 'Keeping the model’s better idea',
          acting: [
            'When a request doesn’t make physical sense, the model makes its own guess at the scene. Sometimes that guess is better than my plan.',
            'In my first draft the Viking held a phone in one hand and the flask in the other, and I also wanted him to hold up a shield; the model hung the shield on his forearm. I had planned a crewmate reaching in to snatch the flask (storyboard panel 5). Instead, Olaf, whom the Viking has just called by name, leans into frame and holds a hand over the steam to warm it. The two moments connect, and it reads as a joke.',
          ],
          bootLabels: ['My plan: storyboard panel 2. He pours water out of a boot.', 'What the model did: the camera looks down at his wet boot.'],
          olafLabels: ['My plan: storyboard panel 5. A crewmate reaches for the flask.', 'What the model did: Olaf leans in and warms a hand over the steam.'],
          actingAfter: [
            'I treat a draft as a rehearsal: I watch what the model changed, keep what is better, and rewrite my beats and shot list around it.',
          ],
        }

  const comparisons = [
    {
      id: 'boot',
      labels: copy.bootLabels,
      images: [
        { src: planBoot, alt: 'Storyboard panel 2: the Viking pours water out of a boot' },
        { src: modelBoot, alt: 'Final cut: the camera looks down at a wet boot' },
      ],
    },
    {
      id: 'olaf',
      labels: copy.olafLabels,
      images: [
        { src: planOlaf, alt: 'Storyboard panel 5: a crewmate reaches for the flask' },
        { src: modelOlaf, alt: 'Final cut: Olaf leans in, a hand over the steam' },
      ],
    },
  ]

  return (
    <div className="varmr-page">
      <p className="page-lead page-back-link">
        <Link to="/">{copy.backToProjects}</Link>
      </p>
      <h1 className="page-title">{project?.title ?? copy.fallbackTitle}</h1>

      <div className="varmr-hero">
        <div className="varmr-video" aria-label={copy.videoAria}>
          <div className="krospi-spots__frame">
            <iframe
              className="case-video-embed__iframe"
              title="VARMR"
              src={`https://www.youtube.com/embed/${embedId}`}
              loading="lazy"
              allow={embedAllow}
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="varmr-hero__text">
          <p className="page-lead">{copy.lead}</p>

          <div className="case-meta" aria-label={copy.projectDetails}>
            <p>
              <strong>{copy.client}</strong> {copy.clientValue}
            </p>
            <p>
              <strong>{copy.medium}</strong> {copy.mediumValue}
            </p>
            <p>
              <strong>{copy.role}</strong> {copy.roleValue}
            </p>
            <p>
              <strong>{copy.tools}</strong> {copy.toolsValue}
            </p>
          </div>

          <div className="case-copy">
            <p>{copy.roleLine}</p>
          </div>

          <p className="page-lead detail-support-line">{copy.disclaimer}</p>
        </div>
      </div>

      <PageSection title={copy.stepsTitle} id="steps">
        <ol className="varmr-steps">
          {copy.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </PageSection>

      <PageSection title={copy.rulesTitle} id="rules">
        <div className="case-copy">
          <p>{copy.rulesIntro}</p>
        </div>
        <section className="brief-card" aria-label={copy.rulesTitle}>
          <dl className="brief-card__rows">
            {copy.rules.map((row) => (
              <Fragment key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </Fragment>
            ))}
          </dl>
        </section>
      </PageSection>

      <PageSection title={copy.actingTitle} id="model-acts">
        <div className="case-copy">
          {copy.acting.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {comparisons.map((pair) => (
          <div className="varmr-pair" key={pair.id}>
            {pair.images.map((image, index) => (
              <figure key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{pair.labels[index]}</figcaption>
              </figure>
            ))}
          </div>
        ))}
        <div className="case-copy">
          {copy.actingAfter.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </PageSection>
    </div>
  )
}
