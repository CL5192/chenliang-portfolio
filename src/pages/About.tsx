import { useI18n } from '../i18n/I18nContext'

export function About() {
  const { locale } = useI18n()
  const copy =
    locale === 'de'
      ? {
          title: 'Ueber mich',
          lead:
            'Ich bin Chen Liang, Designer mit Background im Concept Design und Fokus auf Realtime 3D, Visualisierung und interaktive digitale Produktion.',
          paragraphs: [
            'Meine Erfahrung liegt im AAA-Game-Concept-Design mit Arbeiten in den Bereichen Environments, Hard-Surface-Design und Visual Development. Ueber die Jahre habe ich hauptsaechlich an Umgebungen, Fahrzeugen und Props gearbeitet und dabei 3D-Tools als festen Teil des Designprozesses eingesetzt.',
            'In den letzten Jahren habe ich mich staerker in Unreal Engine, Realtime-Szenenarbeit, Prototyping und digitale Workflows weiterentwickelt. Besonders interessieren mich Rollen, in denen visuelles Design, 3D-Produktion und Umsetzung zusammenkommen - also Arbeit, bei der nicht nur die Optik zaehlt, sondern auch Funktion, Performance und Wartbarkeit.',
            'Ich verbinde visuelles Denken mit 3D-basiertem Workflow und schneller, praxisnaher Lernfaehigkeit. Ich erkunde Ideen gerne direkt ueber das Machen, lerne neue Tools schnell und bewege mich sicher zwischen Designabsicht und Produktionsrealitaet.',
            'Ich arbeite mit 3D-, Realtime- und Visual-Design-Tools wie Unreal Engine, Blender, ZBrush, Fusion 360 und Photoshop. Ergaenzend nutze ich KI-unterstuetzte Workflows - darunter Cursor, ComfyUI und Midjourney - fuer Lernen, visuelle Exploration, Recherche und praktische Umsetzung.',
          ],
        }
      : {
          title: 'About',
          lead:
            'I am Chen Liang, a designer with a background in concept design, now focused on realtime 3D, visualization, and interactive digital production.',
          paragraphs: [
            'My experience is in AAA game concept design, with work spanning environments, hard-surface design, and visual development. Over the years, I worked mainly on environments, vehicles, and props, often using 3D tools as part of the design process.',
            'More recently, I have been moving further into Unreal Engine, realtime scene work, prototyping, and digital workflows. I am especially interested in roles where visual design, 3D production, and implementation come together - work that values not only how something looks, but also how it functions, performs, and can be maintained.',
            'What I bring is a combination of visual thinking, 3D-based workflow, and fast practical learning. I am comfortable exploring ideas through making, picking up new tools quickly, and working across the space between design intent and production reality.',
            'I work across 3D, realtime, and visual design tools including Unreal Engine, Blender, ZBrush, Fusion 360, and Photoshop. Alongside that, I use AI-supported workflows - including tools like Cursor, ComfyUI, and Midjourney - for learning new tools, visual exploration, research, and practical implementation support.',
          ],
        }

  return (
    <>
      <h1 className="page-title top-page-title">{copy.title}</h1>
      <p className="page-lead page-title-intro">{copy.lead}</p>
      <div className="case-copy">
        {copy.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </>
  )
}
