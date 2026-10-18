import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { PageSection } from '../../components/PageSection'
import { getProjectBySlug } from '../../content/projects'
import { useI18n } from '../../i18n/I18nContext'

const slug = 'ding-museum'
const youtubeEmbedId = 'F490wSfJ_c4'

export function DingMuseum() {
  const { locale } = useI18n()
  const project = getProjectBySlug(slug, locale)
  const copy =
    locale === 'de'
      ? {
          backToProjects: '<- Zurück zu Projekten',
          fallbackTitle: 'Ding — The Museum of Things I Love',
          videoAria: 'Ding Spec-Spot YouTube-Video',
          videoTitle: 'Ding – Made to be used, not displayed.',
          lead: 'Ein 45-sekündiger Spec-Spot für Ding, eine fiktive Versicherungsmarke.',
          projectDetails: 'Projektdetails',
          client: 'Kunde',
          clientValue: 'Ding (fiktiv) · Versicherung für persönliche Wertsachen · Deutschland, auf Englisch',
          medium: 'Medium',
          mediumValue: 'Online-Film, 45 Sek., 16:9',
          role: 'Meine Rolle',
          roleValue: 'Jede Phase, vom Client Brief bis zum finalen Mix (Agenturrollen simuliert)',
          tools: 'Tools',
          toolsValue: 'Claude Code · ChatGPT (Bilder) · Seedance 2.5 · ElevenLabs (Stimme, Sound) und Sonilo (Musik) auf Comfy Cloud',
          disclaimer:
            'Ding ist eine fiktive Marke. Dies ist ein nicht beauftragtes Spec-Projekt; das Video wurde mit KI-Tools erstellt.',
          brief: {
            label: 'Brief auf einen Blick',
            propositionLabel: 'Proposition',
            proposition:
              'Mit Ding dürfen die Dinge, die du am meisten liebst, mit dir hinaus, statt zu Hause eingeschlossen zu bleiben.',
            rows: [
              { label: 'Zielgruppe', value: 'Berliner:innen, denen eine bestimmte Sache viel bedeutet: ein selbst gebautes Fahrrad, ein Ring, eine Kamera' },
              { label: 'Spannung', value: 'Je mehr ich es liebe, desto weniger traue ich mich, es mitzunehmen' },
              { label: 'Insight', value: 'Ich besitze es, damit mein Leben größer wird – doch weil ich es schütze, wird mein Leben kleiner' },
              { label: 'Reasons to believe', value: 'Versichert auch unterwegs, weltweit · Viele Schäden werden zuerst repariert · Eine Police, fünf Arten von Dingen' },
              { label: 'Markenrolle', value: 'Erlaubnis geben, keine Garantie' },
              { label: 'Tonalität', value: 'Warm, aufmerksam, unaufgeregt' },
            ],
            note: 'Fiktive Marke; das Produkt ist realen Wertsachenversicherungen nachempfunden.',
          },
          sections: [
            {
              id: 'process',
              title: 'Arbeitsweise',
              paragraphs: [
                'Dieser Film ist nicht aus einem einzigen Prompt entstanden. Ich habe das Projekt so durchgespielt, wie eine Agentur es tun würde, eine Rolle nach der anderen: Brand Manager (Client Brief), Planner (Strategie und Insight), Creative Brief, Kreativteam (Konzepte), Regie (Skript und Shot List), dann Produktion.',
                'Für jede Phase habe ich einen Claude-Skill genutzt, der diese Rolle coacht: Er stellt Fragen und erklärt, wie die Branche an den Schritt herangeht – die Entscheidungen habe ich getroffen. Jede Phase endete mit einem Dokument, an dem sich die nächste messen lassen musste. So habe ich mir die Sprache und Logik der Werbebranche in einem echten Projekt angeeignet.',
              ],
            },
            {
              id: 'challenge',
              title: 'Herausforderung',
              paragraphs: [
                'Ding ist ein fiktiver digitaler Versicherer aus Berlin, der fünf Arten persönlicher Wertsachen – Schmuck, Fahrräder, Kameras, Instrumente und Kunst – in einer Police versichert, zu Hause und unterwegs. Angenommenes Geschäftsproblem: Viele öffnen ein Angebot, wenige schließen ab. Das Kommunikationsproblem: Man weiß, dass eine Versicherung Geld zahlt – aber Geld ist nicht das, was einem die Sache bedeutet.',
              ],
            },
            {
              id: 'insight',
              title: 'Insight',
              paragraphs: [
                'Ich habe 25 Belege gesammelt – Forenbeiträge, Nachrichten, Versicherungsbedingungen und eigene Erfahrungen – und in fünf Themen sortiert. Bei Fahrrädern, Ringen und Kameras tauchte dasselbe Verhalten auf: Frisch Verheiratete lassen den Verlobungsring in den Flitterwochen zu Hause und tragen einen günstigen Ersatz; Reisende schließen die gute Kamera im Hotelsafe ein.',
                'Human Tension: Je mehr ich etwas liebe, desto weniger traue ich mich, es mitzunehmen. Insight: Ich besitze es, damit mein Leben größer wird – doch weil ich es schütze, wird mein Leben kleiner. Dings Rolle ist deshalb nicht, zu versprechen, dass nichts passiert, sondern die Erlaubnis zu geben, die Sache wieder mitzunehmen. Angst-Botschaften habe ich bewusst ausgeschlossen, weil sie nicht zur warmen Markenpersönlichkeit passen.',
              ],
            },
            {
              id: 'idea',
              title: 'Idee',
              paragraphs: [
                'Meine erste Proposition bestand den Brand-Swap-Test nur halb – „sorglos“ könnte jeder Versicherer sagen –, also habe ich den Kontrast „zu Hause eingeschlossen“ ergänzt.',
                'Aus 24 ersten Ideen habe ich fünf ausgewählt und mit selbst gesetzten Kriterien gefiltert: echtes Leben, nichts Vermenschlichtes, ein Mensch, der in einem konkreten Moment zurückweicht – und mit KI umsetzbar. Drei Konzepte blieben. Ich habe The Museum of Things He Loves gewählt, weil sich die Metapher schon an den Keyframes prüfen ließ: Ein Mann hat seine Wohnung in ein Museum seiner Lieblingsdinge verwandelt, bis eine Museumsregel die Wende bringt – „Exhibits may only leave the museum when insured.“ Endzeile: Made to be used, not displayed.',
              ],
            },
            {
              id: 'execution',
              title: 'Umsetzung',
              paragraphs: [
                'Charakter-, Objekt- und Set-Sheets sowie Keyframes in ChatGPT; Video mit Seedance 2.5 auf Comfy Cloud; Stimme und Sound mit ElevenLabs, Musik mit Sonilo. Geplant waren 30 Sekunden, doch eine langsame Figur und ein Witz, der Raum braucht, passten nicht hinein – ich habe auf 45 Sekunden umgeschnitten, den Text von neun auf sechs Sätze gekürzt und von Sekunde 17 bis 25 ganz auf Voiceover verzichtet.',
              ],
            },
            {
              id: 'role',
              title: 'Meine Rolle & Reflexion',
              paragraphs: [
                'Ich habe in jeder Phase entschieden: Kommunikationsproblem, Insight, Proposition, Konzept, Länge, jede Textzeile, Stimmen und Musikrichtung. Claude hat Belege gesucht, die ich gefiltert habe, die erste Ideenrunde generiert, Dokumente zur Prüfung entworfen, Prompts geschrieben und Schnitt und Ton per Skript zusammengesetzt.',
                'Beim nächsten Mal würde ich vor dem Picture Lock eine Animatic mit Scratch-Voiceover machen und die Länge nach der Geschichte festlegen, nicht vorab.',
              ],
            },
          ],
        }
      : {
          backToProjects: '<- Back to projects',
          fallbackTitle: 'Ding — The Museum of Things I Love',
          videoAria: 'Ding spec ad YouTube video',
          videoTitle: 'Ding – Made to be used, not displayed.',
          lead: 'A 45-second spec ad for Ding, a fictional insurance brand.',
          projectDetails: 'Project details',
          client: 'Client',
          clientValue: 'Ding (fictional) · Insurance for personal valuables · Germany, in English',
          medium: 'Medium',
          mediumValue: 'Online film, 45 s, 16:9',
          role: 'My role',
          roleValue: 'Every stage, from client brief to final mix (agency roles simulated)',
          tools: 'Tools',
          toolsValue: 'Claude Code · ChatGPT (images) · Seedance 2.5 · ElevenLabs (voice, sound) and Sonilo (music) on Comfy Cloud',
          disclaimer:
            'Ding is a fictional brand. This is an uncommissioned spec project; the film was made with AI tools.',
          brief: {
            label: 'Brief at a glance',
            propositionLabel: 'Proposition',
            proposition:
              'With Ding, the things you love most can come out with you, instead of staying locked away at home.',
            rows: [
              { label: 'Audience', value: 'Berliners who treasure one particular thing: a bike built by hand, a ring, a camera' },
              { label: 'Tension', value: 'The more I love it, the less I dare take it out' },
              { label: 'Insight', value: 'I own it to make my life bigger, but protecting it is making my life smaller' },
              { label: 'Reasons to believe', value: 'Covered away from home, worldwide · Many claims repair the original first · One policy, five kinds of things' },
              { label: 'Brand role', value: 'Give permission, not a guarantee' },
              { label: 'Tone', value: 'Warm, attentive, understated' },
            ],
            note: 'Fictional brand; product modelled on real valuables insurance.',
          },
          sections: [
            {
              id: 'process',
              title: 'How I worked',
              paragraphs: [
                'This film didn’t come from a single prompt. I ran the project the way an agency would, one role at a time: brand manager (client brief), planner (strategy and insight), creative brief, creative team (concepts), director (script and shot list), then production.',
                'For each stage I used a Claude skill that coaches that role. It asked questions and explained how the industry approaches the step, and I made the decisions. Every stage ended in a document the next stage had to answer to. It was how I learned the language and logic of advertising on a real project.',
              ],
            },
            {
              id: 'challenge',
              title: 'Challenge',
              paragraphs: [
                'Ding is a fictional digital insurer in Berlin that covers five kinds of personal valuables (jewellery, bikes, cameras, instruments and art) in one policy, at home and away. The assumed business problem: plenty of people open a quote, few buy. The communication problem: people know insurance pays out money, but money isn’t what the thing means to them.',
              ],
            },
            {
              id: 'insight',
              title: 'Insight',
              paragraphs: [
                'I gathered 25 pieces of evidence (forum posts, news stories, insurers’ terms and my own experience) and sorted them into five themes. The same behaviour showed up across bikes, rings and cameras: newlyweds leave the engagement ring at home on honeymoon and wear a cheap stand-in; travellers lock the good camera in the hotel safe.',
                'Human tension: the more I love something, the less I dare take it out. Insight: I own it to make my life bigger, but protecting it is making my life smaller. So Ding’s role isn’t to promise nothing will happen. It’s to give permission to take the thing out again. I ruled out fear-based messaging because it would clash with the brand’s warm personality.',
              ],
            },
            {
              id: 'idea',
              title: 'Idea',
              paragraphs: [
                'My first proposition only half passed the brand-swap test (any insurer could promise peace of mind), so I added the contrast with being locked away at home.',
                'From 24 first ideas I shortlisted five, then filtered them with criteria I set: real life, nothing anthropomorphic, one person backing away from something in a specific moment, and buildable with AI. Three concepts survived. I chose The Museum of Things He Loves because the metaphor could be tested at keyframe stage: a man has turned his flat into a museum of his favourite things, until a museum rule turns the story. "Exhibits may only leave the museum when insured." End line: Made to be used, not displayed.',
              ],
            },
            {
              id: 'execution',
              title: 'Execution',
              paragraphs: [
                'Character, object and set sheets plus keyframes in ChatGPT; video in Seedance 2.5 on Comfy Cloud; voice and sound with ElevenLabs, music with Sonilo. The film was planned at 30 seconds, but a slow character and a joke that needs space didn’t fit, so I recut it to 45, cut the voiceover from nine lines to six, and left seconds 17–25 without any voiceover.',
              ],
            },
            {
              id: 'role',
              title: 'My role & reflection',
              paragraphs: [
                'I made the calls at every stage: communication problem, insight, proposition, concept, length, every line, voices and music direction. Claude searched for evidence that I filtered, generated the first round of ideas, drafted documents for my review, wrote prompts, and assembled the cut and sound mix by script.',
                'Next time I’d make an animatic with scratch voiceover before locking picture, and let the story set the length instead of fixing it in advance.',
              ],
            },
          ],
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

      {copy.sections.map((section) => (
        <PageSection key={section.id} title={section.title} id={section.id}>
          <div className="case-copy">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </PageSection>
      ))}
    </>
  )
}
