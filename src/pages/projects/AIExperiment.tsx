import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageSection } from '../../components/PageSection'
import { getProjectBySlug } from '../../content/projects'

const slug = 'ai-experiment'
const processImagePath =
  '/src/assets/projects/AI-visual-experiment/01_process_image_iteration_collage.jpg'
const processImageCaption = 'Process collage showing visual iterations and frame development'

export function AIExperiment() {
  const project = getProjectBySlug(slug)
  const [isProcessImageMissing, setIsProcessImageMissing] = useState(false)

  return (
    <>
      <p className="page-lead" style={{ marginBottom: '0.5rem' }}>
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

      <p className="page-lead" style={{ marginTop: '1rem' }}>
        A self-initiated visual experiment exploring AI-assisted image-to-video workflow and cinematic
        mood development.
      </p>

      <PageSection title="Process" id="process">
        <div className="case-copy">
          <p>
            I started with a simple narrative setup: a retrofuturist office world, a quiet white-collar
            routine, and a subtle moment of visual disruption.
          </p>
          <p>
            To develop the look, I used film references, prompt exploration, and image iteration in
            Midjourney, then moved selected stills into a ComfyUI Cloud workflow for Wan 2.2-based
            image-to-video testing. The process was less about generating random results and more about
            shaping mood, framing, and consistency through repeated selection and refinement.
          </p>
        </div>
        <div className="case-media-stack">
          <figure className="case-image">
            {isProcessImageMissing ? (
              <div className="placeholder-block">
                Add process image at <code>{processImagePath}</code>.
              </div>
            ) : (
              <img
                className="case-image__asset"
                src={processImagePath}
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
            This project helped me quickly test a new visual workflow and form a more grounded view of
            how AI tools can support — but not replace — direction and visual judgment.
          </p>
        </div>
      </PageSection>
    </>
  )
}
