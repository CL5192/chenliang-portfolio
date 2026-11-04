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
          backToProjects: '<- Zurück zu Projekten',
          fallbackTitle: 'VARMR — ein Wikinger, ein Sturm, eine Isolierflasche',
          videoAria: 'VARMR-Spot auf YouTube',
          lead: 'Ein Wikinger filmt sich mit dem Handy in einem Nordseesturm und bewertet seine Ausrüstung: „Shield: wet. Boots: wet. Olaf: wet. Tea… hot.“ Dann die Flasche. Der Witz liegt in der Welt, nicht im Produkt.',
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
            'VARMR ist eine fiktive Marke und ein fiktives Produkt. Der Spot ist KI-generiert und im Video gekennzeichnet. Eine echte Kampagne in Deutschland müsste als Werbung gekennzeichnet werden.',
          stepsTitle: 'Schritte',
          steps: [
            'Briefing: Ich habe mir angesehen, wie Werbung für Isolierflaschen in Deutschland gemacht wird, und entschieden, was ich übernehme und was ich bewusst breche.',
            'Referenzbilder und ein Storyboard mit sechs Bildern: der Wikinger, die Flasche, Olaf.',
            'Generierung in Teilen: ein 6-Sekunden-Entwurf zum Testen von Stimme und Rhythmus, dann die 18-Sekunden-Hauptszene, dann eine separate 5-Sekunden-Produktaufnahme.',
            'Schnitt: Teile zusammenfügen, Endkarte und Untertitel einfügen, Meeresrauschen.',
          ],
          rulesTitle: 'Was ich übernommen habe, was ich gebrochen habe',
          rulesIntro: 'Ich habe die Regeln übernommen, die ein Video als UGC erscheinen lassen, und zwei bewusst gebrochen.',
          rules: [
            { label: 'Format', value: 'Hochformat, Selfie aus der Hand, Handy-Look — übernommen' },
            { label: 'Stimme', value: 'Ich-Perspektive, ein kurzer gesprochener Satz — übernommen' },
            { label: 'Hook', value: 'Das erste Bild zeigt schon Sturm und Dampf — übernommen' },
            { label: 'Untertitel', value: 'Eingeblendete Untertitel wie auf der Plattform üblich — übernommen' },
            { label: 'Versprechen', value: '„Hot up to 40 h“, innerhalb dessen, was die Kategorie verspricht (8–24 h üblich, rund 40 h an der Spitze) — übernommen' },
            { label: 'Darsteller', value: 'Ein offen virtueller Wikinger statt eines echten Creators — gebrochen' },
            { label: 'Schauplatz', value: 'Ein Nordseesturm statt Alltag — gebrochen' },
          ],
          actingTitle: 'Das Modell spielt. Ich behalte, was besser ist.',
          acting: [
            'Manchmal macht das Modell nicht genau das, was ich geschrieben habe. Das ist nicht nur Zufall. Wenn eine Anweisung körperlich keinen Sinn ergibt, rät es selbst, wie die Szene aussehen würde, so wie ein Schauspieler eine Rolle so spielt, wie er sie für plausibel hält. Oft ist diese Vermutung sinnvoller als mein Plan.',
            'In meinem ersten Entwurf hielt der Wikinger in einer Hand das Handy und in der anderen die Flasche, und außerdem sollte er einen Schild hochhalten. Das Modell hängte den Schild an seinen Unterarm. Ich hatte ihn einen Stiefel ausleeren lassen wollen; stattdessen richtete es die Kamera auf den nassen Stiefel. Ich hatte geplant, dass ein Besatzungsmitglied nach der Flasche greift, um sie ihm wegzunehmen (Storyboard-Bild 5). Das Modell machte etwas anderes: Olaf, den der Wikinger gerade beim Namen genannt hat, beugt sich ins Bild und hält eine Hand über den Dampf, um sie zu wärmen. Die beiden Momente hängen zusammen, und es wirkt wie ein Witz.',
          ],
          bootLabels: ['Mein Plan: Storyboard-Bild 2. Er leert Wasser aus einem Stiefel.', 'Was das Modell gemacht hat: Die Kamera blickt auf seinen nassen Stiefel.'],
          olafLabels: ['Mein Plan: Storyboard-Bild 5. Ein Besatzungsmitglied greift nach der Flasche.', 'Was das Modell gemacht hat: Olaf beugt sich herein und wärmt eine Hand über dem Dampf.'],
          actingAfter: [
            'Einen Entwurf behandle ich wie eine Probe. Ich sehe mir an, was das Modell verändert hat, behalte, was besser ist, und schreibe danach meine Beats und die Shotlist um. In der fertigen Fassung beugt sich Olaf herein und wärmt seine Hand über der Flasche. Ich werte also nicht jede Abweichung als misslungene Aufnahme. Manche sind bessere Ideen als meine.',
          ],
        }
      : {
          backToProjects: '<- Back to projects',
          fallbackTitle: 'VARMR — a Viking, a storm, a flask',
          videoAria: 'VARMR spot on YouTube',
          lead: 'A Viking films himself on a phone in a North Sea storm and rates his gear: “Shield: wet. Boots: wet. Olaf: wet. Tea… hot.” Then the flask. The joke is the world, not the product.',
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
            'VARMR is a fictional brand and product. The spot is AI-generated and labelled in the video. A real campaign in Germany would need to be marked as advertising.',
          stepsTitle: 'Steps',
          steps: [
            'Brief: I looked at how insulated-bottle ads in Germany are made and decided what to keep and what to break.',
            'Reference images and a six-panel storyboard: the Viking, the flask, Olaf.',
            'Generation in parts: a 6-second draft to test voice and rhythm, then the 18-second main shot, then a separate 5-second product shot.',
            'Edit: join the parts, add the end card and captions, sea ambience.',
          ],
          rulesTitle: 'What I kept, what I broke',
          rulesIntro: 'I kept the rules that make a video read as UGC and broke two on purpose.',
          rules: [
            { label: 'Format', value: 'Vertical, handheld selfie, phone feel — kept' },
            { label: 'Voice', value: 'First person, one short spoken line — kept' },
            { label: 'Hook', value: 'The first frame is already the storm and the steam — kept' },
            { label: 'Captions', value: 'Native on-screen captions — kept' },
            { label: 'Claim', value: '“Hot up to 40 h”, inside what the category claims (8–24 h common, around 40 h at the top) — kept' },
            { label: 'Presenter', value: 'An openly virtual Viking instead of a real creator — broken' },
            { label: 'Setting', value: 'A North Sea storm instead of everyday life — broken' },
          ],
          actingTitle: 'The model acts. I keep what’s better.',
          acting: [
            'Sometimes the model doesn’t do exactly what I wrote. It isn’t only random. When a request doesn’t make physical sense, it makes its own guess at what the scene would look like, the way an actor plays a part the way they think it would go. Often that guess is more sensible than my plan.',
            'In my first draft the Viking held a phone in one hand and the flask in the other, and I also wanted him to hold up a shield. The model hung the shield on his forearm. I asked him to pour water out of a boot; it pointed the camera at his wet boot instead. I had planned a crewmate reaching in to snatch the flask (storyboard panel 5). The model did something else: Olaf, whom the Viking has just called by name, leans into frame and holds a hand over the steam to warm it. The two moments connect, and it reads as a joke.',
          ],
          bootLabels: ['My plan: storyboard panel 2. He pours water out of a boot.', 'What the model did: the camera looks down at his wet boot.'],
          olafLabels: ['My plan: storyboard panel 5. A crewmate reaches for the flask.', 'What the model did: Olaf leans in and warms a hand over the steam.'],
          actingAfter: [
            'I treat a draft as a rehearsal. I watch what the model changed, keep what is better, and go back and rewrite my beats and shot list around it. In the final version Olaf leans in and warms his hand over the flask. So I don’t count every deviation as a failed take. Some of them are better ideas than mine.',
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
        <Link to="/projects">{copy.backToProjects}</Link>
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
