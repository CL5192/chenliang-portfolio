import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageSection } from '../../components/PageSection'
import { getProjectBySlug } from '../../content/projects'
import processImage from '../../assets/projects/AI-visual-experiment/01_process_image_iteration_collage.jpg'

const slug = 'ai-experiment'
const processImageCaption = 'Process collage showing visual iterations and frame development'

export function AIExperiment() {
  const project = getProjectBySlug(slug)
  const [isProcessImageMissing, setIsProcessImageMissing] = useState(false)

  return (
    <>
      <p className="page-lead page-back-link">
        <Link to="/projects">← Back to projects</Link>
      </p>
      <h1 className="page-title">{project?.title ?? 'AI Visual Experiment'}</h1>

      <div className="case-video-embed" aria-label="AI Visual Experiment YouTube video">
        <iframe
          className="case-video-embed__iframe"
          title="AI Visual Experiment video"
          src="https://www.youtube.com/embed/_KYNzKHE_tY"
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <p className="page-lead page-lead--after-media">
        A short visual experiment exploring AI-assisted image-to-video workflow and cinematic mood
        development.
      </p>

      <PageSection title="Process" id="process">
        <div className="case-copy">
          <p>
            I started with a simple narrative setup: a retrofuturist office, a quiet routine, and a
            small visual shift.
          </p>
          <p>
            To develop the look, I used film references, prompt exploration, and image iteration in
            Midjourney, then moved selected stills into ComfyUI Cloud for Wan 2.2-based image-to-video
            tests. The goal was not random output, but better control over mood, framing, and
            consistency through repeated selection and refinement.
          </p>
        </div>
        <div className="case-media-stack">
          <figure className="case-image">
            {isProcessImageMissing ? (
              <div className="placeholder-block">Process image unavailable.</div>
            ) : (
              <img
                className="case-image__asset"
                src={processImage}
                alt={processImageCaption}
                loading="lazy"
                onError={() => setIsProcessImageMissing(true)}
              />
            )}
            <figcaption className="case-image__caption">{processImageCaption}</figcaption>
          </figure>
        </div>
      </PageSection>

      <PageSection title="Final takeaway" id="final-takeaway">
        <div className="case-copy">
          <p>
            This project helped me quickly test a new visual workflow and better understand how AI tools
            can support — but not replace — direction and visual judgment.
          </p>
        </div>
      </PageSection>
    </>
  )
}
