import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageSection } from '../../components/PageSection'
import { getProjectBySlug } from '../../content/projects'
import { useI18n } from '../../i18n/I18nContext'
import processImage from '../../assets/projects/AI-visual-experiment/01_process_image_iteration_collage.jpg'

const slug = 'ai-experiment'

export function AIExperiment() {
  const { locale } = useI18n()
  const project = getProjectBySlug(slug, locale)
  const [isProcessImageMissing, setIsProcessImageMissing] = useState(false)
  const copy =
    locale === 'de'
      ? {
          backToProjects: '<- Zurueck zu Projekten',
          fallbackTitle: 'KI-Visual-Experiment',
          videoAria: 'KI-Visual-Experiment YouTube-Video',
          videoTitle: 'KI-Visual-Experiment Video',
          lead:
            'Ein kurzes visuelles Experiment zur Erkundung eines KI-unterstuetzten Image-to-Video-Workflows und cineastischer Stimmungsentwicklung.',
          processTitle: 'Prozess',
          processParagraph1:
            'Ich habe mit einem einfachen narrativen Setup begonnen: ein retrofuturistisches Buero, eine ruhige Routine und eine kleine visuelle Verschiebung.',
          processParagraph2:
            'Fuer den Look nutzte ich Filmreferenzen, Prompt-Exploration und Bilditeration in Midjourney. Ausgewaehlte Stills habe ich in ComfyUI Cloud fuer Wan-2.2-basierte Image-to-Video-Tests weitergefuehrt. Ziel war nicht Zufall, sondern bessere Kontrolle ueber Stimmung, Framing und Konsistenz durch wiederholte Auswahl und Verfeinerung.',
          processUnavailable: 'Prozessbild nicht verfuegbar.',
          processCaption:
            'Prozess-Collage mit visuellen Iterationen und Entwicklung einzelner Frames',
          takeawayTitle: 'Fazit',
          takeawayText:
            'Dieses Projekt hat mir geholfen, einen neuen visuellen Workflow schnell zu testen und besser zu verstehen, wie KI-Tools Direction und visuelles Urteilsvermoegen unterstuetzen - aber nicht ersetzen - koennen.',
        }
      : {
          backToProjects: '<- Back to projects',
          fallbackTitle: 'AI Visual Experiment',
          videoAria: 'AI Visual Experiment YouTube video',
          videoTitle: 'AI Visual Experiment video',
          lead:
            'A short visual experiment exploring AI-assisted image-to-video workflow and cinematic mood development.',
          processTitle: 'Process',
          processParagraph1:
            'I started with a simple narrative setup: a retrofuturist office, a quiet routine, and a small visual shift.',
          processParagraph2:
            'To develop the look, I used film references, prompt exploration, and image iteration in Midjourney, then moved selected stills into ComfyUI Cloud for Wan 2.2-based image-to-video tests. The goal was not random output, but better control over mood, framing, and consistency through repeated selection and refinement.',
          processUnavailable: 'Process image unavailable.',
          processCaption: 'Process collage showing visual iterations and frame development',
          takeawayTitle: 'Final takeaway',
          takeawayText:
            'This project helped me quickly test a new visual workflow and better understand how AI tools can support - but not replace - direction and visual judgment.',
        }
  const processCaption = copy.processCaption

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
          src="https://www.youtube.com/embed/_KYNzKHE_tY"
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <p className="page-lead page-lead--after-media">{copy.lead}</p>

      <PageSection title={copy.processTitle} id="process">
        <div className="case-copy">
          <p>{copy.processParagraph1}</p>
          <p>{copy.processParagraph2}</p>
        </div>
        <div className="case-media-stack">
          <figure className="case-image">
            {isProcessImageMissing ? (
              <div className="placeholder-block">{copy.processUnavailable}</div>
            ) : (
              <img
                className="case-image__asset"
                src={processImage}
                alt={processCaption}
                loading="lazy"
                onError={() => setIsProcessImageMissing(true)}
              />
            )}
            <figcaption className="case-image__caption">{processCaption}</figcaption>
          </figure>
        </div>
      </PageSection>

      <PageSection title={copy.takeawayTitle} id="final-takeaway">
        <div className="case-copy">
          <p>{copy.takeawayText}</p>
        </div>
      </PageSection>
    </>
  )
}
