import { Link } from 'react-router-dom'
import { PageSection } from '../../components/PageSection'
import { getProjectBySlug } from '../../content/projects'
import { useI18n } from '../../i18n/I18nContext'
import look1Hero from '../../assets/projects/look-study/look1-hero.jpg'
import look1Regimen from '../../assets/projects/look-study/look1-regimen.jpg'
import look1Texture from '../../assets/projects/look-study/look1-texture.jpg'
import look2Hero from '../../assets/projects/look-study/look2-hero.jpg'
import look2CreamBalm from '../../assets/projects/look-study/look2-cream-balm.jpg'
import look2Serum from '../../assets/projects/look-study/look2-serum.jpg'
import look3Hero from '../../assets/projects/look-study/look3-hero.jpg'
import look3Topdown from '../../assets/projects/look-study/look3-topdown.jpg'
import look3Snowfall from '../../assets/projects/look-study/look3-snowfall.jpg'
import look3Stream from '../../assets/projects/look-study/look3-stream.jpg'
import look3Fog from '../../assets/projects/look-study/look3-fog.jpg'
import materialBoard from '../../assets/projects/look-study/material-board.jpg'

const slug = 'halde'

/** Each look: one landscape key image, then the portrait formats */
const lookImages: Record<string, { hero: string; portraits: string[] }> = {
  look1: { hero: look1Hero, portraits: [look1Regimen, look1Texture] },
  look2: { hero: look2Hero, portraits: [look2CreamBalm, look2Serum] },
  look3: { hero: look3Hero, portraits: [look3Topdown, look3Snowfall, look3Stream, look3Fog] },
}

type LookCopy = {
  id: keyof typeof lookImages
  title: string
  meta: string
  text: string
  alts: string[]
}

export function HaldeLookStudy() {
  const { locale } = useI18n()
  const project = getProjectBySlug(slug, locale)
  const copy =
    locale === 'de'
      ? {
          backToProjects: '<- Zurück zur Übersicht',
          fallbackTitle: 'HALDE',
          lead: 'Elf Stills in zwei Tagen für eine erfundene alpine Hautpflegemarke: dieselben vier Produkte auf hellem Grau, auf schwarzem Basalt, dann draußen in Schnee und Moos.',
          projectDetails: 'Projektdetails',
          client: 'Kunde',
          clientValue: 'HALDE · Hautpflege',
          medium: 'Medium',
          mediumValue: '11 Stills, je ein Key Visual im Querformat und Hochformate',
          role: 'Meine Rolle',
          roleValue: 'Allein, November 2026, 2 Tage',
          tools: 'Tools',
          toolsValue: 'GPT Image 2.5 auf Comfy Cloud · Claude Code als Produktionsassistent',
          disclaimer: 'Ein nicht beauftragtes Spec-Projekt; die Bilder wurden mit KI erstellt.',
          why: {
            id: 'why',
            title: 'Warum',
            text: 'Kann ich einen Look festlegen und über eine ganze Serie von Stills halten? Ich habe eine alpine Hautpflegemarke erfunden, die es wirklich geben könnte, und dieselben vier Produkte durch drei Looks geführt. Vor dem ersten Bild habe ich das Gefühl festgelegt, das die Marke vermitteln soll: ruhig. Nicht kalt: Die Produkte sind warm im Ton, die Ruhe entsteht im Kontrast zu kühlem Grau, Stein und Schnee. Wenn eine Farbe oder ein Layout nicht stimmte, habe ich es an einer Frage gemessen: Wirkt es noch ruhig?',
          },
          how: {
            id: 'how',
            title: 'Wie',
            steps: [
              'Zuerst die Produkte: vier Produkte, eine Materialsprache. Damit Stein, Glas, Keramik und Grau bei allen vier gleich bleiben, habe ich zuerst ein Materialboard gemacht: ein Bild, vier Musterzylinder. Danach habe ich jedes Produkt per Text neu generiert, mit zwei Referenzen: das Board nur für das Material, das früheste Produktbild nur für die Form.',
              'Für jeden Look erst Referenzen, dann ein Leitbild; die weiteren Bilder folgen seinem Licht und seinen Farben.',
              'Die drei Looks entfernen sich Schritt für Schritt vom Standard: E-Commerce → Markenbild → Launch-Key-Visual.',
            ],
            board: {
              text: 'Das Board muss selbst stimmen. Mein erstes Glasmuster war massiv, und jede Flasche kam leer heraus. Korrigiert habe ich das Board, dünnwandiges Glas mit blassgelber Flüssigkeit, nicht die Flaschen.',
              alt: 'Materialboard: gesprenkelter Stein, Milchglas mit blassgelber Flüssigkeit, mattweiße Keramik, mattes warmes Grau',
            },
          },
          looks: [
            {
              id: 'look1',
              title: 'Look 1 · E-Commerce',
              meta: '3 Bilder: Hauptbild, Pflegeroutine, Textur',
              text: 'Klar und ehrlich, jedes Detail sichtbar: ein sehr helles, warmes Grau als Hintergrund und weiches Licht.',
              alts: ['Gesichtscreme vor hellgrauem Hintergrund', 'Vier Produkte in der Reihenfolge der Pflegeroutine', 'Geöffnete Creme mit einem Strich Textur'],
            },
            {
              id: 'look2',
              title: 'Look 2 · Stein',
              meta: '3 Bilder: alle Produkte, Creme und Multi-Balm geöffnet, Serum',
              text: 'Die Produkte wie Exponate fotografiert: schwarzer Basalt, Edelweiß, seitliches Sonnenlicht. Die Requisiten kommen aus der Rezeptur – die Inhaltsstoffe sind Alpenpflanzen, also Edelweiß. Statt warmem Beige habe ich eine neutral graue Wand gewählt: Vor Grau heben sich die warmen Flaschen ab, und der Kontrast hält das Bild ruhig.',
              alts: ['Alle vier Produkte auf schwarzem Basalt', 'Geöffnete Creme und Multi-Balm auf Basalt', 'Geöffnetes Serum auf Eis'],
            },
            {
              id: 'look3',
              title: 'Look 3 · Berg',
              meta: '5 Bilder: Key Visual und vier Hochformate',
              text: 'Der Launch der Creme. Zuerst habe ich versucht, das Glas zu einem Berg zu vergrößern – das wirkte wie ein Witz, gar nicht hochwertig und alles andere als ruhig. Danach in echter Größe: die Creme im Schnee, im Moos, am Bach, nur nah fotografiert.',
              alts: ['Creme auf einem moosigen Felsen vor Winterhimmel', 'Creme liegt zwischen Moos und Schnee, von oben', 'Creme auf einem verschneiten Baumstamm im Schneefall', 'Creme auf einem nassen Stein am Bach', 'Creme an einem moosigen Felsen im Nebel'],
            },
          ] satisfies LookCopy[],
          learned: {
            id: 'learned',
            title: 'Was ich gelernt habe',
            text: 'Die Bilder teilen weder einen Ort noch ein Wetter: Schnee, Moos, ein Bach, Nebel, wechselndes Licht. Gleich bleiben die Produkte, ihre Materialien und die Ruhe. Als ich das gesehen hatte, habe ich keine harten Regeln mehr hinzugefügt. Einheitlichkeit ist in so einer Serie weich.',
          },
        }
      : {
          backToProjects: '<- Back to all work',
          fallbackTitle: 'HALDE',
          lead: 'Eleven stills in two days for a made-up alpine skincare brand: the same four products on light grey, on black basalt, then out in snow and moss.',
          projectDetails: 'Project details',
          client: 'Client',
          clientValue: 'HALDE · skincare',
          medium: 'Medium',
          mediumValue: '11 stills, one landscape key visual per look plus portrait formats',
          role: 'My role',
          roleValue: 'Solo, November 2026, 2 days',
          tools: 'Tools',
          toolsValue: 'GPT Image 2.5 on Comfy Cloud · Claude Code as production assistant',
          disclaimer: 'An uncommissioned spec project; the images were made with AI.',
          why: {
            id: 'why',
            title: 'Why',
            text: 'Can I set a look and hold it across a set of stills? I made up an alpine skincare brand that could plausibly exist and took the same four products through three looks. Before any image, I fixed the feeling the brand should give: calm. Not cold: the products are warm-toned, so the calm comes from setting them against cool grey, stone and snow. Whenever a colour or layout felt off, I judged it by one question: does it still feel calm?',
          },
          how: {
            id: 'how',
            title: 'How',
            steps: [
              'Products first: four products, one material language. To keep the stone, glass, ceramic and grey the same on all four, I made a material board first: one image, four sample cylinders. Then I regenerated every product from text with two references: the board for material only, the earliest product image for shape only.',
              'For each look, references first, then one lead image; the rest follow its light and colour.',
              'The three looks move away from the standard step by step: e-commerce → brand image → launch key visual.',
            ],
            board: {
              text: 'The board has to be right itself. My first glass sample was solid, and every bottle came out empty. I fixed the board, a thin-walled glass with pale yellow liquid, not the bottles.',
              alt: 'Material board: speckled stone, frosted glass with pale yellow liquid, matte white ceramic, matte warm grey',
            },
          },
          looks: [
            {
              id: 'look1',
              title: 'Look 1 · E-commerce',
              meta: '3 images: hero, routine, texture',
              text: 'Clear and honest, every detail visible: a very light, warm grey background and soft light.',
              alts: ['Face cream on a light grey background', 'Four products in routine order', 'Open face cream with a swipe of texture'],
            },
            {
              id: 'look2',
              title: 'Look 2 · Stone',
              meta: '3 images: the range, cream and multi balm open, serum',
              text: 'The products shot like exhibits: black basalt, edelweiss, sunlight from the side. The props come from the formula — the ingredients are alpine plants, so edelweiss. I chose a neutral grey wall over a warm beige: against grey the warm bottles stand out, and the contrast keeps it calm.',
              alts: ['All four products on black basalt', 'Open face cream and multi balm on basalt', 'Open serum on ice'],
            },
            {
              id: 'look3',
              title: 'Look 3 · Mountain',
              meta: '5 images: key visual and four portrait formats',
              text: 'The cream’s launch. First I tried scaling the jar up into a mountain — it read like a joke and lost every bit of premium, and the calm with it. Then real size: the cream in snow, in moss, by a stream, shot only up close.',
              alts: ['Face cream on a mossy boulder against a winter sky', 'Face cream lying between moss and snow, from above', 'Face cream on a snowy log in falling snow', 'Face cream on a wet stone by a stream', 'Face cream against a mossy rock in fog'],
            },
          ] satisfies LookCopy[],
          learned: {
            id: 'learned',
            title: 'What I learned',
            text: 'The images don’t share one place or one weather: snow, moss, a stream, fog, changing light. What stays the same is the products, their materials and the calm. Once I saw that, I stopped adding hard rules. Consistency in a set like this is soft.',
          },
        }

  return (
    <>
      <p className="page-lead page-back-link">
        <Link to="/">{copy.backToProjects}</Link>
      </p>
      <h1 className="page-title">{project?.title ?? copy.fallbackTitle}</h1>

      {/* Opening: the three key visuals side by side, one per grid column */}
      <div className="halde-opening">
        {copy.looks.map((look) => (
          <img key={look.id} src={lookImages[look.id].hero} alt={look.alts[0]} />
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

      <p className="page-lead detail-support-line">{copy.disclaimer}</p>

      <PageSection title={copy.why.title} id={copy.why.id}>
        <div className="case-copy">
          <p>{copy.why.text}</p>
        </div>
      </PageSection>

      <PageSection title={copy.how.title} id={copy.how.id}>
        <ol className="case-copy halde-steps">
          {copy.how.steps.map((step, index) => (
            <li key={step}>
              {step}
              {index === 0 && (
                <div className="halde-board">
                  <img src={materialBoard} alt={copy.how.board.alt} loading="lazy" />
                  <p>{copy.how.board.text}</p>
                </div>
              )}
            </li>
          ))}
        </ol>
      </PageSection>

      {copy.looks.map((look) => {
        const images = lookImages[look.id]
        return (
          <PageSection key={look.id} title={look.title} id={look.id}>
            <p className="krospi-case__meta">{look.meta}</p>
            <div className="case-copy">
              <p>{look.text}</p>
            </div>
            <div className="halde-set">
              <img className="halde-set__hero" src={images.hero} alt={look.alts[0]} loading="lazy" />
              <div className={`halde-set__portraits halde-set__portraits--${images.portraits.length}`}>
                {images.portraits.map((src, index) => (
                  <img key={src} src={src} alt={look.alts[index + 1]} loading="lazy" />
                ))}
              </div>
            </div>
          </PageSection>
        )
      })}

      <PageSection title={copy.learned.title} id={copy.learned.id}>
        <div className="case-copy">
          <p>{copy.learned.text}</p>
        </div>
      </PageSection>
    </>
  )
}
