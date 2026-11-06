import { Fragment, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PageSection } from '../../components/PageSection'
import { FlowDiagram, type FlowDiagramLabels } from '../../components/FlowDiagram'
import { getProjectBySlug } from '../../content/projects'
import { useI18n } from '../../i18n/I18nContext'
import truffleKeyframe1 from '../../assets/projects/krospi/truffle-keyframe-1.jpg'
import truffleKeyframe2 from '../../assets/projects/krospi/truffle-keyframe-2.jpg'
import truffleKeyframe3 from '../../assets/projects/krospi/truffle-keyframe-3.jpg'
import truffleKeyframe4 from '../../assets/projects/krospi/truffle-keyframe-4.jpg'
import meerStoryboard from '../../assets/projects/krospi/meer-storyboard.jpg'
import tintenfischStoryboard1 from '../../assets/projects/krospi/tintenfisch-storyboard-1.jpg'
import tintenfischStoryboard2 from '../../assets/projects/krospi/tintenfisch-storyboard-2.jpg'

const slug = 'krospi'
/** Shorts in the order they were made */
const spots = [
  { id: 'bLDIdPdpF9Q', name: { en: 'Truffle', de: 'Trüffel' } },
  { id: '8nCiStk9IEc', name: { en: 'Squid Ink', de: 'Tintenfisch' } },
  { id: 'BkuRbuo2dnw', name: { en: 'Sea', de: 'Meer' } },
]
const comparisonEmbedId = 'E1xeBc81RLI'
const truffleKeyframes = [truffleKeyframe1, truffleKeyframe2, truffleKeyframe3, truffleKeyframe4]

const embedAllow = 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'

/** Each spot tells its own story: paragraphs before the media, the media, paragraphs after, optional second media */
type CaseCopy = {
  id: string
  title: string
  meta: string
  before: string[]
  mediaLabel: string
  after: string[]
  extraMediaLabel?: string
  afterExtra?: string[]
}

export function KrospiSpec() {
  const { locale } = useI18n()
  const project = getProjectBySlug(slug, locale)
  const copy =
    locale === 'de'
      ? {
          backToProjects: '<- Zurück zur Übersicht',
          fallbackTitle: 'Krospi',
          videosAria: 'Die drei Krospi-Spots auf YouTube',
          spotPlaces: ['Supermarkt', 'Prüfungshalle', 'Bahnhof'],
          lead: 'Drei Spec-Spots für Krospi, eine fiktive deutsche Chipsmarke, die drei neue Sorten auf den Markt bringt.',
          projectDetails: 'Projektdetails',
          client: 'Kunde',
          clientValue: 'Krospi (fiktiv) · Chips · Deutschland',
          medium: 'Medium',
          mediumValue: 'Drei Hochformat-Spots, 35–44 Sek., 9:16',
          role: 'Meine Rolle',
          roleValue: 'Allein, Oktober 2026',
          tools: 'Tools',
          toolsValue: 'Claude Code · Seedance 2.5 und 2.0 Fast (Dreamina) · GPT Image, Nano Banana, Sonilo (Musik) und ElevenLabs (Stimme, Sound) auf Comfy Cloud',
          roleLine:
            'Konzept, Beats, Shot Lists, Look und jede Prüf- und Schnittentscheidung kamen von mir. Bilder, Video, Musik und Sound hat KI generiert. Claude Code war mein Produktionsassistent: Es hat Prompts entworfen, Schnitte nach meinen Notizen montiert und Asset-, Kosten- und Änderungsprotokolle geführt.',
          disclaimer:
            'Krospi ist eine fiktive Marke. Dies ist ein nicht beauftragtes Spec-Projekt; die Filme wurden mit KI-Tools erstellt.',
          brief: {
            label: 'Serie auf einen Blick',
            propositionLabel: 'Proposition der Serie',
            proposition: 'Es lohnt sich, sich dafür zu blamieren.',
            rows: [
              { label: 'Mechanik', value: 'Eine Tüte Chips löst einen Tagtraum aus – eine Sekunde später zurück in der Realität, noch mitten in der Pose' },
              { label: 'Sorten', value: 'Französischer Trüffel · Tintenfisch · Meer' },
            ],
            note: 'Fiktive Marke; Sorten und Verpackung habe ich für dieses Projekt entworfen.',
          },
          intro: {
            id: 'learning-curve',
            title: 'Drei Spots, eine Lernkurve',
            text: 'Ich habe die Spots nacheinander gemacht und den Workflow dabei aufgebaut. Jeder hat mir etwas anderes beigebracht, und jeder ging schneller als der vorherige: 7 → 5 → 3 Tage.',
          },
          cases: [
            {
              id: 'truffle',
              title: '1 · Trüffel — eine Kamera, die in Panik gerät',
              meta: 'Supermarkt · als Erstes gemacht · 7 Tage, inklusive Aufbau des Workflows',
              before: [
                'Ein gelangweiltes Mädchen in der Schlange eines Discounters nascht heimlich aus der Chipstüte in ihrem Einkaufswagen. Die Kamera taucht in die Tüte, und sie läuft über einen Laufsteg in einem Palast aus Goldfolie, in einer Robe aus Trüffeln. Ein Blitz, und sie ist zurück: Sie steht mitten in der Pose auf dem Kassenband, und die Kassiererin starrt in die Linse.',
                'Die Realität habe ich wie eine trockene Mockumentary gedreht. Als sie ertappt wird, ruckt die Kamera nach vorne und sucht den Fokus, als wäre auch die Person hinter der Kamera in Panik. Diese Unbeholfenheit aus der Hand ist ein großer Teil davon, warum der Spot nicht nach KI aussieht: Die meisten Freunde, denen ich ihn gezeigt habe, haben es nicht bemerkt.',
                'Beim ersten Versuch habe ich den ganzen Spot in einem Durchgang generiert. Jede Einstellung sah für sich richtig aus, aber sie passten nicht zusammen: Sie landete nie auf dem Kassenband, und die Kassiererin stand plötzlich in einem grauen Studio. Zufall war das nicht; die Fehler hatten ein Muster. Also habe ich den Spot Einstellung für Einstellung aus Keyframes neu gebaut und angefangen, in drei Ebenen zu planen: Beat, Shot List, Prompt.',
              ],
              mediaLabel: 'Keyframes aus dem Neuaufbau, einer pro Einstellung',
              after: [],
            },
            {
              id: 'tintenfisch',
              title: '2 · Tintenfisch — das Modell ist ein Schauspieler',
              meta: 'Prüfungshalle · als Zweites gemacht · 5 Tage',
              before: [
                'Eine Schulturnhalle, aufgebaut für die Abschlussprüfung. Ein gelangweilter Lehrer bei der Aufsicht nascht einen schwarzen Tintenfisch-Chip aus seinem Rucksack – ein Reißschwenk, und er tanzt Industrial auf einer Underground-Party. Die Glocke klingelt: Er steht erstarrt auf dem Tisch eines Schülers, außer Atem, und der ganze Saal starrt ihn an.',
                'Verwandlungseffekte habe ich bewusst weggelassen; sie hätten billig gewirkt und nach KI geschrien. Die Komik steckt stattdessen in der Kamera: Reißschwenks, Crash Zooms und Schnitte in der Bewegung, im Stil von Edgar Wright.',
                'Hier habe ich gelernt, das Modell wie einen Schauspieler zu führen. Ich schrieb: „Er führt den Chip zur Linse, als ob zum Mund“ – und es hielt den Chip hoch, um ihn der Kamera zu zeigen, wahrscheinlich weil Chips in seinen Trainingsdaten meistens so vorkommen. Die Absicht noch genauer zu erklären half nicht. Nur die Bewegung zu beschreiben schon: Hand schnell zur Bildunterkante, der Chip verlässt das Bild nach unten. Es hat beim ersten Versuch funktioniert.',
              ],
              mediaLabel: 'Erster Versuch links, meine Lösung rechts',
              after: [
                'Das andere Schwierige war der Raum: wo der Lehrer steht, in welche Richtung die Kamera schwenkt. Ich habe ein nummeriertes Storyboard gemacht, und von da an konnten die KI und ich einfach „Feld 6“ sagen.',
              ],
              extraMediaLabel: 'Storyboard, 18 nummerierte Felder auf zwei Blättern',
            },
            {
              id: 'meer',
              title: '3 · Meer — von der Proposition aus',
              meta: 'Bahnhof · als Letztes gemacht · 3 Tage, vom neuen Konzept bis zum Schnitt',
              before: [
                'Vor diesem Spot habe ich auf die ersten beiden zurückgeschaut und ein Problem gesehen: Der eine verkaufte ein Gefühl, der andere einen Geschmack. Ich habe die Serie an eine Proposition gebunden – es lohnt sich, sich dafür zu blamieren – und diesen Spot von ihr aus begonnen: Urlaub, ohne wegzufahren.',
                'Ein grauer Bahnsteig im Herbst, der Zug hat 60 Minuten Verspätung. Er reißt eine Chipstüte auf, eine Taube fliegt auf, und er paddelt auf einem Surfbrett über ein türkisfarbenes Meer. Mitten im Zug harter Schnitt: Er liegt quer über drei Mülltonnen und paddelt weiter.',
                'Die Fantasie habe ich bewusst typisch gehalten, fast wie billiger Urlaubskitsch: Mittagssonne, ein oranges Brett, Ukulele und Steeldrum. Die Realität ist flaches graues Licht und eine leichte Handkamera. Am meisten Zeit hat der Witz mit der Flaschensammlerin bekommen: Ihr erster Griff wird von seinem Arm blockiert, sie tritt zurück und wartet höflich, dann nimmt sie zwei Flaschen und geht. Er wacht nie auf.',
              ],
              mediaLabel: 'Storyboard, 13 nummerierte Felder',
              after: [
                'Hier hat meine Arbeitsweise ihre endgültige Form bekommen. Bei den ersten beiden Spots habe ich gemerkt, was für mich funktioniert: eine Sache nach der anderen entscheiden, und pro Schritt nur eine Art von Entscheidung. Ein Spot steckt voller Entscheidungen, die miteinander verknüpft sind – Konzept, Witz, Kamera, Look, die Formulierung des Prompts. Ich habe sie entkoppelt. Zuerst habe ich Ideen gesammelt und ein Konzept gewählt, dann die Proposition als Anker festgelegt, dann Beat für Beat jeweils ein paar Optionen angesehen und eine gewählt. Erst danach kamen Shot List, Storyboard und Prompts. So habe ich mich nicht verloren, und es passt zu der Art, wie mein Kopf arbeitet.',
              ],
              extraMediaLabel: 'So habe ich an Meer gearbeitet: Jede Raute öffnet sich zum Erkunden und schließt sich zur Wahl; danach wird der Spot Ebene für Ebene gebaut.',
              afterExtra: [
                'Diesmal gab es keine neuen Fehlerarten. Das System aus den ersten beiden Spots hat gehalten, also gingen die drei Tage in Entscheidungen wie diese.',
              ],
            },
          ] satisfies CaseCopy[],
          trust: {
            id: 'trust',
            title: 'Wo ich der KI vertraue',
            trustLabel: 'Überlasse ich der KI',
            checkLabel: 'Prüfe ich selbst',
            trustItems: ['die Ausführung einer einzelnen Einstellung', 'realistische Physik und Bewegung', 'Emotion in einer Performance', 'korrekt benannte Kamerabewegungen'],
            checkItems: ['Kontinuität zwischen Einstellungen', 'Blocking und links / rechts', 'Tanz aus Text', '„Absichts“-Wörter', 'Stil und Perspektive, die aus Referenzbildern durchsickern', 'wie Musik endet'],
          },
          method: {
            id: 'method',
            title: 'Arbeitsweise',
            paragraphs: [
              'Jede Einstellung ging durch drei Ebenen: Beat (was das Publikum fühlen soll) → Shot List (nur, was man sieht) → Prompt. Ich habe jede Ebene freigegeben, bevor generiert wurde. Wenn ein Ergebnis nicht stimmte, habe ich nachverfolgt, welche Ebene versagt hat, statt neu zu würfeln.',
            ],
          },
          numbers: {
            id: 'numbers',
            title: 'In Zahlen',
            items: ['3 Spots', '7 → 5 → 3 Tage', 'ca. 33 € Generierungskosten', '~200 protokollierte Änderungen, davon weniger als 10, die das Modell schlicht nicht konnte'],
          },
          flow: {
            aria: 'Ablauf: Konzept, Proposition, Beats, dann Ebenen von Shot List bis Schnitt',
            legendDiamond: 'Raute: öffnen zum Erkunden, schließen zum Auswählen (Double Diamond)',
            legendLoop: 'Ergebnis falsch: zurück zur fehlerhaften Ebene',
            explore: 'erkunden',
            choose: 'wählen',
            concept: 'Konzept',
            conceptNote: ['Brainstorming: wie zeigt man Peinlichkeit,', '1 von 3 Ideen gewählt'],
            proposition: 'Proposition',
            propositionLines: ['Es lohnt sich, sich', 'dafür zu blamieren', '+ Urlaub, ohne', 'wegzufahren'],
            beats: 'Beats, einzeln',
            beatsNote: ['pro Beat ein paar Optionen,', 'ich wähle eine'],
            beatCheck: ['Beat Sheet', 'als Ganzes prüfen'],
            layers: [
              ['Shot List', 'nur Sichtbares'],
              ['Storyboard', 'nummerierte Felder'],
              ['Performance', 'Referenzbilder'],
              ['Prompt', 'auf Englisch'],
              ['Mein OK', 'vor dem Generieren'],
              ['Generieren', 'Seedance'],
              ['Schnitt', 'Bild und Ton'],
            ],
            loop: 'Ergebnis falsch? Nach oben verfolgen: Prompt → Shot List → Beat',
          } satisfies FlowDiagramLabels,
        }
      : {
          backToProjects: '<- Back to all work',
          fallbackTitle: 'Krospi',
          videosAria: 'The three Krospi spots on YouTube',
          spotPlaces: ['supermarket', 'exam hall', 'train station'],
          lead: 'Three spec ads for Krospi, a fictional German crisp brand launching three new flavours.',
          projectDetails: 'Project details',
          client: 'Client',
          clientValue: 'Krospi (fictional) · Crisps · Germany',
          medium: 'Medium',
          mediumValue: 'Three vertical spots, 35–44 s, 9:16',
          role: 'My role',
          roleValue: 'Solo project, Oct 2026',
          tools: 'Tools',
          toolsValue: 'Claude Code · Seedance 2.5 and 2.0 Fast (Dreamina) · GPT Image, Nano Banana, Sonilo (music) and ElevenLabs (voice, sound) on Comfy Cloud',
          roleLine:
            'I did the concept, beats, shot lists, look and every review and cut decision. AI generated the images, video, music and sound. Claude Code was my production assistant: it drafted prompts, assembled cuts from my notes and kept the asset, cost and revision logs.',
          disclaimer:
            'Krospi is a fictional brand. This is an uncommissioned spec project; the films were made with AI tools.',
          brief: {
            label: 'Series at a glance',
            propositionLabel: 'Series proposition',
            proposition: 'Worth embarrassing yourself for.',
            rows: [
              { label: 'Mechanism', value: 'A bag of crisps sets off a daydream; one second later, back to reality, still mid-pose' },
              { label: 'Flavours', value: 'French Truffle · Squid Ink · Sea' },
            ],
            note: 'Fictional brand; I designed the flavours and packaging for this project.',
          },
          intro: {
            id: 'learning-curve',
            title: 'Three spots, one learning curve',
            text: 'I made the spots one after another and built the workflow as I went. Each one taught me something different, and each took less time than the one before: 7 → 5 → 3 days.',
          },
          cases: [
            {
              id: 'truffle',
              title: '1 · Truffle — a camera that panics',
              meta: 'Supermarket · made first · 7 days, including building the workflow',
              before: [
                'A bored girl in a discount-supermarket queue sneaks a crisp from the bag in her trolley. The camera dives into the bag, and she’s on a runway in a gold-foil palace, wearing a gown made of truffles. A flash, and she’s back, standing on the checkout belt mid-pose, while the cashier stares into the lens.',
                'I shot reality like a deadpan mockumentary. When she’s caught, the camera lurches forward and hunts for focus, as if the person filming panicked too. That handheld clumsiness is a big part of why the spot doesn’t feel like AI: most of the friends I showed it to didn’t notice.',
                'My first attempt generated the whole spot in one go. Every shot looked right on its own, but they didn’t connect: she never ended up on the belt, and the cashier appeared in a grey studio. It wasn’t random; the errors had a pattern. So I rebuilt the spot shot by shot from keyframes and started planning in three layers: beat, shot list, prompt.',
              ],
              mediaLabel: 'Keyframes from the rebuild, one per shot',
              after: [],
            },
            {
              id: 'tintenfisch',
              title: '2 · Squid Ink — the model is an actor',
              meta: 'Exam hall · made second · 5 days',
              before: [
                'A school gym set up for final exams. A bored teacher on invigilation duty sneaks a black squid-ink crisp from his backpack — a whip pan, and he’s dancing industrial at an underground party. The bell rings: he’s frozen on a student’s desk, out of breath, with the whole room staring.',
                'I left out transformation effects on purpose; they would have looked cheesy and screamed AI. The comedy is in the camera instead: whip pans, crash zooms and cuts on motion, Edgar Wright style.',
                'This is where I learned to direct the model like an actor. I wrote “he brings the crisp toward the lens, as if to his mouth”, and it held the crisp up to show the camera, most likely because that’s how crisps appear in its training data. Explaining the intent harder didn’t help. Describing only the motion did: hand quickly to the bottom of the frame, the crisp leaving through the bottom edge. It worked first time.',
              ],
              mediaLabel: 'First try on the left, my fix on the right',
              after: [
                'The other hard part was space: where the teacher stands, which way the camera turns. I made a numbered storyboard, and from then on the AI and I could simply say “panel 6”.',
              ],
              extraMediaLabel: 'Storyboard, 18 numbered panels on two sheets',
            },
            {
              id: 'meer',
              title: '3 · Sea — starting from the proposition',
              meta: 'Train station · made last · 3 days, from new concept to final cut',
              before: [
                'Before this spot I looked back at the first two and saw a problem: one sold a feeling, the other sold a flavour. I tied the series to one proposition — worth embarrassing yourself for — and started this spot from it: a holiday without going anywhere.',
                'A grey autumn platform, the train 60 minutes late. He tears open a bag of crisps, a pigeon takes off, and he’s paddling a surfboard on a turquoise sea. Mid-stroke, hard cut: he’s lying across three recycling bins, still paddling.',
                'I kept the fantasy deliberately typical, almost cheap-holiday: midday sun, an orange board, ukulele and steel drum. Reality is flat grey light and a light handheld camera. The joke I spent the most time on is the bottle collector: her first reach is blocked by his arm, she steps back and waits politely, then takes two bottles and leaves. He never wakes up.',
              ],
              mediaLabel: 'Storyboard, 13 numbered panels',
              after: [
                'This is also where my way of working took its full shape. Making the first two spots, I found what worked for me: decide one thing at a time, and only one kind of thing per step. A spot is full of choices that are tangled together, from the concept and the joke to the camera, the look and the wording of a prompt. I pulled them apart. First I explored and picked a concept, then fixed the proposition as an anchor, then went beat by beat, each time looking at a few options and choosing one. Only after that came the shot list, storyboard and prompts. Working this way, I didn’t get lost, and it suits the way my head works.',
              ],
              extraMediaLabel: 'How I worked on Sea: each diamond widens to explore and narrows to choose one; then the spot is built layer by layer.',
              afterExtra: [
                'No new kinds of failure this time. The system from the first two spots held, so the three days went into decisions like that one.',
              ],
            },
          ] satisfies CaseCopy[],
          trust: {
            id: 'trust',
            title: 'What I trust AI with',
            trustLabel: 'I trust AI with',
            checkLabel: 'I check myself',
            trustItems: ['a single shot’s execution', 'realistic physics and motion', 'emotion in a performance', 'camera moves named correctly'],
            checkItems: ['continuity between shots', 'blocking and left / right', 'dance from text', '“intent” words', 'style and perspective leaking from reference images', 'how music ends'],
          },
          method: {
            id: 'method',
            title: 'How I worked',
            paragraphs: [
              'Every shot passed three layers: beat (what the audience should feel) → shot list (only what’s visible) → prompt. I approved each layer before generating. When a result was off, I traced which layer failed instead of re-rolling.',
            ],
          },
          numbers: {
            id: 'numbers',
            title: 'In numbers',
            items: ['3 spots', '7 → 5 → 3 days', 'about €33 in generation costs', '~200 logged revisions, fewer than 10 where the model simply couldn’t do it'],
          },
          flow: {
            aria: 'Flow: concept, proposition, beats, then layers from shot list to edit',
            legendDiamond: 'Diamond: widen to explore options, narrow to choose one (Double Diamond)',
            legendLoop: 'Result off: trace back to the layer that failed',
            explore: 'explore',
            choose: 'choose',
            concept: 'Concept',
            conceptNote: ['brainstorm how to show embarrassment,', 'pick 1 of 3 ideas'],
            proposition: 'Proposition',
            propositionLines: ['worth embarrassing', 'yourself for', '+ a holiday without', 'going anywhere'],
            beats: 'Beats, one at a time',
            beatsNote: ['a few options per beat,', 'I pick one'],
            beatCheck: ['Beat sheet', 'check the whole'],
            layers: [
              ['Shot list', 'only what’s visible'],
              ['Storyboard', 'numbered panels'],
              ['Performance', 'reference frames'],
              ['Prompt', 'in English'],
              ['My OK', 'before generating'],
              ['Generate', 'Seedance'],
              ['Edit', 'cut and sound'],
            ],
            loop: 'Result off? Trace upward: prompt → shot list → beat',
          } satisfies FlowDiagramLabels,
        }

  const caseMedia: Record<string, ReactNode> = {
    truffle: (
      <div className="krospi-keyframes">
        {truffleKeyframes.map((src, index) => (
          <img key={src} src={src} alt={`Truffle keyframe ${index + 1}`} loading="lazy" />
        ))}
      </div>
    ),
    tintenfisch: (
      <div className="case-video-embed">
        <iframe
          className="case-video-embed__iframe"
          title="The model ignored my prompt — here’s how I got it to follow"
          src={`https://www.youtube.com/embed/${comparisonEmbedId}`}
          loading="lazy"
          allow={embedAllow}
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    ),
    meer: <img className="krospi-storyboard" src={meerStoryboard} alt="Sea storyboard" loading="lazy" />,
  }

  const caseExtraMedia: Record<string, ReactNode> = {
    tintenfisch: (
      <div className="krospi-storyboard-pair">
        <img src={tintenfischStoryboard1} alt="Squid Ink storyboard, panels 1–9" loading="lazy" />
        <img src={tintenfischStoryboard2} alt="Squid Ink storyboard, panels 10–18" loading="lazy" />
      </div>
    ),
    meer: <FlowDiagram labels={copy.flow} />,
  }

  return (
    <>
      <p className="page-lead page-back-link">
        <Link to="/">{copy.backToProjects}</Link>
      </p>
      <h1 className="page-title">{project?.title ?? copy.fallbackTitle}</h1>

      <div className="krospi-spots" aria-label={copy.videosAria}>
        {spots.map((spot, index) => (
          <figure className="krospi-spots__item" key={spot.id}>
            <div className="krospi-spots__frame">
              <iframe
                className="case-video-embed__iframe"
                title={`Krospi ${spot.name[locale]}`}
                src={`https://www.youtube.com/embed/${spot.id}`}
                loading="lazy"
                allow={embedAllow}
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <figcaption>
              {index + 1} · {spot.name[locale]} · {copy.spotPlaces[index]}
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="page-lead page-lead--after-media">{copy.lead}</p>

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

      <section className="brief-card" aria-label={copy.brief.label}>
        <p className="brief-card__label">{copy.brief.propositionLabel}</p>
        <p className="brief-card__proposition">{copy.brief.proposition}</p>
        <dl className="brief-card__rows">
          {copy.brief.rows.map((row) => (
            <Fragment key={row.label}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </Fragment>
          ))}
        </dl>
        <p className="brief-card__note">{copy.brief.note}</p>
      </section>

      <PageSection title={copy.intro.title} id={copy.intro.id}>
        <div className="case-copy">
          <p>{copy.intro.text}</p>
        </div>
      </PageSection>

      {copy.cases.map((item) => (
        <PageSection key={item.id} title={item.title} id={item.id}>
          <p className="krospi-case__meta">{item.meta}</p>
          <div className="case-copy">
            {item.before.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <figure className="krospi-case__media">
            {caseMedia[item.id]}
            <figcaption>{item.mediaLabel}</figcaption>
          </figure>
          {item.after.length > 0 && (
            <div className="case-copy">
              {item.after.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}
          {item.extraMediaLabel && (
            <figure className="krospi-case__media">
              {caseExtraMedia[item.id]}
              <figcaption>{item.extraMediaLabel}</figcaption>
            </figure>
          )}
          {item.afterExtra && (
            <div className="case-copy">
              {item.afterExtra.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}
        </PageSection>
      ))}

      <PageSection title={copy.trust.title} id={copy.trust.id}>
        <div className="krospi-trust">
          <div>
            <p className="krospi-trust__label">{copy.trust.trustLabel}</p>
            <ul>
              {copy.trust.trustItems.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="krospi-trust__label">{copy.trust.checkLabel}</p>
            <ul>
              {copy.trust.checkItems.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </div>
        </div>
      </PageSection>

      <PageSection title={copy.method.title} id={copy.method.id}>
        <div className="case-copy">
          {copy.method.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </PageSection>

      <PageSection title={copy.numbers.title} id={copy.numbers.id}>
        <ul className="krospi-numbers">
          {copy.numbers.items.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
      </PageSection>
    </>
  )
}
