import { useI18n } from '../i18n/I18nContext'

export function About() {
  const { locale } = useI18n()
  const copy =
    locale === 'de'
      ? {
          title: 'Über mich',
          lead: 'Ich bin Chen Liang, Creative Technologist in Berlin.',
          paragraphs: [
            'Zwölf Jahre lang war ich Concept Artist in Spielestudios in Warschau und Berlin und habe Umgebungen, Fahrzeuge und Props entworfen. Seit 2025 arbeite ich mit KI und Code: Frontend-Entwicklung, C++, Game Engines, ComfyUI und n8n.',
            'Heute mache ich KI-Videos und Bilder und baue die Workflows dahinter. Ich arbeite in Schritten: das Problem definieren, es zerlegen, testen, bevor ich einem Ergebnis vertraue.',
            'Offen für Stellen in KI-Content-Produktion und kreativer Automatisierung, in Berlin oder remote.',
          ],
        }
      : {
          title: 'About',
          lead: "I'm Chen Liang, a creative technologist based in Berlin.",
          paragraphs: [
            'For twelve years I was a concept artist in game studios in Warsaw and Berlin, designing environments, vehicles and props. Since 2025 I have moved into AI and code: frontend development, C++, game engines, ComfyUI and n8n.',
            'Today I make AI video and images and build the workflows behind them. I work in steps: define the problem, break it down, test before I trust a result.',
            'Open to roles in AI content production and creative automation, in Berlin or remote.',
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
