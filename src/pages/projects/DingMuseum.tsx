import { Link } from 'react-router-dom'
import { PageSection } from '../../components/PageSection'
import { getProjectBySlug } from '../../content/projects'
import { useI18n } from '../../i18n/I18nContext'

const slug = 'ding-museum'
const youtubeEmbedId = 'F490wSfJ_c4'

// TODO: fill challenge / insight / idea / execution / role copy from the ⑦ case study
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
          type: 'Typ',
          typeValue: 'Spec-Arbeit / fiktive Marke',
          format: 'Format',
          formatValue: '45 Sek., 16:9',
          tools: 'Tools',
          toolsValue: 'ChatGPT (Bilder), Seedance 2.5, ElevenLabs, Comfy Cloud',
          disclaimer:
            'Ding ist eine fiktive Marke. Dies ist ein nicht beauftragtes Spec-Projekt; das Video wurde mit KI-Tools erstellt.',
          challengeTitle: 'Herausforderung',
          challengeText: '[TODO]',
          insightTitle: 'Insight',
          insightText: '[TODO]',
          ideaTitle: 'Idee',
          ideaText: '[TODO]',
          executionTitle: 'Umsetzung',
          executionText: '[TODO]',
          roleTitle: 'Meine Rolle & Reflexion',
          roleText: '[TODO]',
        }
      : {
          backToProjects: '<- Back to projects',
          fallbackTitle: 'Ding — The Museum of Things I Love',
          videoAria: 'Ding spec ad YouTube video',
          videoTitle: 'Ding – Made to be used, not displayed.',
          lead: 'A 45-second spec ad for Ding, a fictional insurance brand.',
          projectDetails: 'Project details',
          type: 'Type',
          typeValue: 'Spec work / fictional brand',
          format: 'Format',
          formatValue: '45 s, 16:9',
          tools: 'Tools',
          toolsValue: 'ChatGPT (images), Seedance 2.5, ElevenLabs, Comfy Cloud',
          disclaimer:
            'Ding is a fictional brand. This is an uncommissioned spec project; the film was made with AI tools.',
          challengeTitle: 'Challenge',
          challengeText: '[TODO]',
          insightTitle: 'Insight',
          insightText: '[TODO]',
          ideaTitle: 'Idea',
          ideaText: '[TODO]',
          executionTitle: 'Execution',
          executionText: '[TODO]',
          roleTitle: 'My role & reflection',
          roleText: '[TODO]',
        }

  const sections = [
    { id: 'challenge', title: copy.challengeTitle, text: copy.challengeText },
    { id: 'insight', title: copy.insightTitle, text: copy.insightText },
    { id: 'idea', title: copy.ideaTitle, text: copy.ideaText },
    { id: 'execution', title: copy.executionTitle, text: copy.executionText },
    { id: 'role', title: copy.roleTitle, text: copy.roleText },
  ]

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
          <strong>{copy.type}</strong> {copy.typeValue}
        </p>
        <p>
          <strong>{copy.format}</strong> {copy.formatValue}
        </p>
        <p>
          <strong>{copy.tools}</strong> {copy.toolsValue}
        </p>
      </div>

      <p className="page-lead detail-support-line">{copy.disclaimer}</p>

      {sections.map((section) => (
        <PageSection key={section.id} title={section.title} id={section.id}>
          <div className="case-copy">
            <p>{section.text}</p>
          </div>
        </PageSection>
      ))}
    </>
  )
}
