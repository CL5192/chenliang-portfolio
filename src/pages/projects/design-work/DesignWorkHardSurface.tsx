import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

type GalleryImage = {
  src: string
  fileName: string
  label: string
}

const hardSurfaceImageModules = import.meta.glob(
  '../../../assets/design-work/hard-surface/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, import: 'default' },
) as Record<string, string>

function formatLabelFromFileName(fileName: string): string {
  return fileName
    .replace(/\.[^.]+$/, '')
    .replace(/^\d+-/, '')
    .replace(/-/g, ' ')
}

function getOrderFromFileName(fileName: string): number {
  const match = /^(\d+)-/.exec(fileName)
  return match ? Number.parseInt(match[1], 10) : Number.POSITIVE_INFINITY
}

function getGalleryImages(): GalleryImage[] {
  return Object.entries(hardSurfaceImageModules)
    .map(([modulePath, src]) => {
      const fileName = modulePath.split('/').pop() ?? modulePath
      return { src, fileName, label: formatLabelFromFileName(fileName) }
    })
    .filter(({ fileName }) => /^\d+-.+\.(jpe?g|png|webp|avif)$/i.test(fileName))
    .sort((a, b) => getOrderFromFileName(a.fileName) - getOrderFromFileName(b.fileName))
}

export function DesignWorkHardSurface() {
  const galleryImages = useMemo(getGalleryImages, [])
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  useEffect(() => {
    if (selectedIndex === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null)
      } else if (event.key === 'ArrowLeft') {
        setSelectedIndex((currentIndex) => {
          if (currentIndex === null || galleryImages.length === 0) return null
          return (currentIndex - 1 + galleryImages.length) % galleryImages.length
        })
      } else if (event.key === 'ArrowRight') {
        setSelectedIndex((currentIndex) => {
          if (currentIndex === null || galleryImages.length === 0) return null
          return (currentIndex + 1) % galleryImages.length
        })
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [galleryImages.length, selectedIndex])

  const hasImages = galleryImages.length > 0
  const selectedImage = selectedIndex !== null ? galleryImages[selectedIndex] : null

  return (
    <>
      <p className="page-lead" style={{ marginBottom: '0.5rem' }}>
        <Link to="/projects/design-work">Back to Design Work</Link>
      </p>
      <h1 className="page-title">Hard-Surface</h1>
      <p className="page-lead">
        A selection of hard-surface concept work across vehicles, mecha, and prop design, with both
        grounded and sci-fi influences.
      </p>
      <p className="detail-support-line">
        Tools used across this work include Blender, Fusion 360, 3ds Max, and ZBrush.
      </p>

      {hasImages ? (
        <div className="design-work-gallery-grid">
          {galleryImages.map((image, index) => (
            <button
              key={image.fileName}
              type="button"
              className="design-work-gallery-item"
              onClick={() => setSelectedIndex(index)}
              aria-label={`Open image ${index + 1} of ${galleryImages.length}`}
            >
              <img
                className="design-work-gallery-item__image"
                src={image.src}
                alt={image.label}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      ) : (
        <div className="placeholder-block">
          Add images inside <code>src/assets/design-work/hard-surface/</code> using names like{' '}
          <code>01-bike-study.jpg</code>, <code>02-mecha-variant.jpg</code>.
        </div>
      )}

      {selectedImage && (
        <div
          className="design-work-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Hard-Surface image viewer"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="design-work-lightbox__content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="design-work-lightbox__close"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close image viewer"
            >
              Close
            </button>
            <button
              type="button"
              className="design-work-lightbox__nav design-work-lightbox__nav--prev"
              onClick={() =>
                setSelectedIndex(
                  (currentIndex) =>
                    (currentIndex === null ? 0 : currentIndex - 1 + galleryImages.length) %
                    galleryImages.length,
                )
              }
              aria-label="Previous image"
            >
              ←
            </button>
            <img
              className="design-work-lightbox__image"
              src={selectedImage.src}
              alt={selectedImage.label}
            />
            <button
              type="button"
              className="design-work-lightbox__nav design-work-lightbox__nav--next"
              onClick={() =>
                setSelectedIndex(
                  (currentIndex) =>
                    (currentIndex === null ? 0 : currentIndex + 1) % galleryImages.length,
                )
              }
              aria-label="Next image"
            >
              →
            </button>
            <p className="design-work-lightbox__index">
              {(selectedIndex ?? 0) + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
