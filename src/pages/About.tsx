import { useI18n } from '../i18n/I18nContext'

export function About() {
  const { locale } = useI18n()
  const copy =
    locale === 'de'
      ? {
          title: 'Über mich',
          lead: 'Ich bin Chen Liang und lebe in Berlin.',
          paragraphs: [
            'Viele Jahre war ich Concept Artist in Spielestudios in Warschau und Berlin und habe Umgebungen, Fahrzeuge und Props entworfen. 2025 bin ich gegangen. Die Arbeit passte nicht mehr zu mir, und KI begann, die Branche zu verändern.',
            'Ich wusste nicht, was als Nächstes kommt, also habe ich Dinge ausprobiert, die mir fremd waren: Frontend-Programmierung, C++, Game Engines, ComfyUI. Gegen manches hatte ich anfangs Widerstand.',
            'Programmieren zu lernen hat mein Denken stärker verändert als jedes Tool. Heute definiere ich zuerst das Problem, zerlege die Arbeit in Schritte und prüfe eine Behauptung, bevor ich sie glaube. Ich bin von der Arbeitsweise eines Handwerkers zu einer gekommen, in der sich Kunst und Technik verbinden.',
            'Im Spätsommer 2026 wurde die Richtung klar. Ich mag Arbeit, in der Schönheit und Technik zusammenkommen: Logik, Fakten, Automatisierung und Kreativität in einem Stück.',
          ],
        }
      : {
          title: 'About',
          lead: "I'm Chen Liang, based in Berlin.",
          paragraphs: [
            'For many years I was a concept artist in game studios in Warsaw and Berlin, designing environments, vehicles and props. In 2025 I left. The work no longer fit me, and AI was starting to change the field.',
            "I didn't know what came next, so I tried things I wasn't used to: frontend coding, C++, game engines, ComfyUI. Some of it I resisted at first.",
            'Learning to code changed how I think more than any tool did. I now define the problem before I start, break work into steps, and test a claim before I believe it. I moved from a craftsman’s way of working to one where art and technology meet.',
            'In late summer 2026 the direction became clear. I like work where beauty and technology meet: logic, facts, automation and creativity in the same piece.',
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
