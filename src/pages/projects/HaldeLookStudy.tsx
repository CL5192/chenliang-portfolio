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
          backToProjects: '<- Zurück zu Projekten',
          fallbackTitle: 'HALDE — eine Creme, drei Looks',
          lead: 'Drei Serien von KI-Stills für eine fiktive alpine Hautpflegemarke: dieselben Produkte, vom E-Commerce-Bild bis zum Launch-Key-Visual.',
          projectDetails: 'Projektdetails',
          client: 'Kunde',
          clientValue: 'HALDE (fiktiv) · Hautpflege',
          medium: 'Medium',
          mediumValue: '11 Stills, je ein Key Visual im Querformat und Hochformate',
          role: 'Meine Rolle',
          roleValue: 'Allein, November 2026, 2 Tage',
          tools: 'Tools',
          toolsValue: 'GPT Image 2.5 auf Comfy Cloud · Claude Code als Produktionsassistent',
          disclaimer: 'HALDE ist eine fiktive Marke. Dies ist ein nicht beauftragtes Spec-Projekt; die Bilder wurden mit KI erstellt.',
          why: {
            id: 'why',
            title: 'Warum',
            text: 'Meine KI-Arbeiten im Portfolio sind alles Videos. Mir fehlte eine Serie kommerzieller Stills, die man direkt verwenden kann. Also habe ich eine Hautpflegemarke erfunden, die es wirklich geben könnte, und getestet, ob dieselben Produkte über drei verschiedene Looks hinweg gleich bleiben.',
          },
          how: {
            id: 'how',
            title: 'Wie',
            steps: [
              'Zuerst die Produkte: vier Produkte, eine Materialsprache – jedes trägt dasselbe Stück Stein.',
              'Für jeden Look erst Referenzen, dann ein Leitbild; die weiteren Bilder folgen seinem Licht und seinen Farben.',
              'Die drei Looks entfernen sich Schritt für Schritt vom Standard: E-Commerce → Markenbild → Launch-Key-Visual.',
            ],
          },
          looks: [
            {
              id: 'look1',
              title: 'Look 1 · E-Commerce',
              meta: '3 Bilder: Hauptbild, Pflegeroutine, Textur',
              text: 'Klar und ehrlich, jedes Detail sichtbar. Zuerst hatte ich reinweißen Hintergrund – weiße Produkte auf Weiß sah man kaum. Ich bin auf ein sehr helles, warmes Grau gewechselt.',
              alts: ['Gesichtscreme vor hellgrauem Hintergrund', 'Vier Produkte in der Reihenfolge der Pflegeroutine', 'Geöffnete Creme mit einem Strich Textur'],
            },
            {
              id: 'look2',
              title: 'Look 2 · Stein',
              meta: '3 Bilder: alle Produkte, Creme und Multi-Balm geöffnet, Serum',
              text: 'Die Produkte wie Exponate fotografiert: schwarzer Basalt, Edelweiß, seitliches Sonnenlicht. Die Requisiten kommen aus der Rezeptur – die Inhaltsstoffe sind Alpenpflanzen, also Edelweiß.',
              alts: ['Alle vier Produkte auf schwarzem Basalt', 'Geöffnete Creme und Multi-Balm auf Basalt', 'Geöffnetes Serum auf Eis'],
            },
            {
              id: 'look3',
              title: 'Look 3 · Berg',
              meta: '5 Bilder: Key Visual und vier Hochformate',
              text: 'Der Launch der Creme. Zuerst habe ich versucht, das Glas zu einem Berg zu vergrößern – das wirkte wie ein Witz und gar nicht hochwertig. Danach in echter Größe: die Creme im Schnee, im Moos, am Bach, nur nah fotografiert.',
              alts: ['Creme auf einem moosigen Felsen vor Winterhimmel', 'Creme liegt zwischen Moos und Schnee, von oben', 'Creme auf einem verschneiten Baumstamm im Schneefall', 'Creme auf einem nassen Stein am Bach', 'Creme an einem moosigen Felsen im Nebel'],
            },
          ] satisfies LookCopy[],
          learned: {
            id: 'learned',
            title: 'Was ich gelernt habe',
            text: 'Eine Serie wirkt nicht dadurch einheitlich, dass jedes Bild am selben Ort und bei gleichem Wetter entsteht, sondern durch dasselbe Gefühl.',
          },
        }
      : {
          backToProjects: '<- Back to projects',
          fallbackTitle: 'HALDE — one cream, three looks',
          lead: 'Three sets of AI stills for a fictional alpine skincare brand: the same products, from e-commerce shots to a launch key visual.',
          projectDetails: 'Project details',
          client: 'Client',
          clientValue: 'HALDE (fictional) · skincare',
          medium: 'Medium',
          mediumValue: '11 stills, one landscape key visual per look plus portrait formats',
          role: 'My role',
          roleValue: 'Solo, November 2026, 2 days',
          tools: 'Tools',
          toolsValue: 'GPT Image 2.5 on Comfy Cloud · Claude Code as production assistant',
          disclaimer: 'HALDE is a fictional brand. This is an uncommissioned spec project; the images were made with AI.',
          why: {
            id: 'why',
            title: 'Why',
            text: 'All the AI work in my portfolio is video. I was missing a set of commercial stills someone could actually use. So I made up a skincare brand that could plausibly exist, and tested whether the same products hold up across three different looks.',
          },
          how: {
            id: 'how',
            title: 'How',
            steps: [
              'Products first: four products, one material language — each carries the same piece of stone.',
              'For each look, references first, then one lead image; the rest follow its light and colour.',
              'The three looks move away from the standard step by step: e-commerce → brand image → launch key visual.',
            ],
          },
          looks: [
            {
              id: 'look1',
              title: 'Look 1 · E-commerce',
              meta: '3 images: hero, routine, texture',
              text: 'Clear and honest, every detail visible. I started on pure white — white products on white barely showed. I switched to a very light, warm grey.',
              alts: ['Face cream on a light grey background', 'Four products in routine order', 'Open face cream with a swipe of texture'],
            },
            {
              id: 'look2',
              title: 'Look 2 · Stone',
              meta: '3 images: the range, cream and multi balm open, serum',
              text: 'The products shot like exhibits: black basalt, edelweiss, sunlight from the side. The props come from the formula — the ingredients are alpine plants, so edelweiss.',
              alts: ['All four products on black basalt', 'Open face cream and multi balm on basalt', 'Open serum on ice'],
            },
            {
              id: 'look3',
              title: 'Look 3 · Mountain',
              meta: '5 images: key visual and four portrait formats',
              text: 'The cream’s launch. First I tried scaling the jar up into a mountain — it read like a joke and lost every bit of premium. Then real size: the cream in snow, in moss, by a stream, shot only up close.',
              alts: ['Face cream on a mossy boulder against a winter sky', 'Face cream lying between moss and snow, from above', 'Face cream on a snowy log in falling snow', 'Face cream on a wet stone by a stream', 'Face cream against a mossy rock in fog'],
            },
          ] satisfies LookCopy[],
          learned: {
            id: 'learned',
            title: 'What I learned',
            text: 'A set doesn’t feel consistent because every image shares the same place or weather. It feels consistent because it shares the same feeling.',
          },
        }

  return (
    <>
      <p className="page-lead page-back-link">
        <Link to="/projects">{copy.backToProjects}</Link>
      </p>
      <h1 className="page-title">{project?.title ?? copy.fallbackTitle}</h1>

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

      <p className="page-lead detail-support-line">{copy.disclaimer}</p>

      <PageSection title={copy.why.title} id={copy.why.id}>
        <div className="case-copy">
          <p>{copy.why.text}</p>
        </div>
      </PageSection>

      <PageSection title={copy.how.title} id={copy.how.id}>
        <ol className="case-copy halde-steps">
          {copy.how.steps.map((step) => (
            <li key={step}>{step}</li>
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
