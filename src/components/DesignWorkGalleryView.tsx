import { type ReactNode, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'

export type DesignWorkGalleryImage = {
  src: string
  fileName: string
  label: string
}

type DesignWorkGalleryViewProps = {
  title: string
  intro: string
  supportLine?: ReactNode
  galleryImages: DesignWorkGalleryImage[]
  emptyState: ReactNode
  lightboxLabel: string
  backHref?: string
  backLabel?: string
}

export function DesignWorkGalleryView({
  title,
  intro,
  supportLine,
  galleryImages,
  emptyState,
  lightboxLabel,
  backHref = '/projects/design-work',
  backLabel,
}: DesignWorkGalleryViewProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const { locale } = useI18n()

  const fallbackCopy =
    locale === 'de'
      ? {
          backLabel: '<- Zurueck zu Designarbeiten',
          openImage: 'Bild oeffnen',
          closeImageViewer: 'Bildansicht schliessen',
          close: 'Schliessen',
          previousImage: 'Vorheriges Bild',
          nextImage: 'Naechstes Bild',
        }
      : {
          backLabel: '<- Back to Design Work',
          openImage: 'Open image',
          closeImageViewer: 'Close image viewer',
          close: 'Close',
          previousImage: 'Previous image',
          nextImage: 'Next image',
        }

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
      <p className="page-lead page-back-link">
        <Link to={backHref}>{backLabel ?? fallbackCopy.backLabel}</Link>
      </p>
      <h1 className="page-title">{title}</h1>
      <p className="page-lead">{intro}</p>
      {supportLine ? <p className="detail-support-line">{supportLine}</p> : null}

      {hasImages ? (
        <div className="design-work-gallery-grid">
          {galleryImages.map((image, index) => (
            <button
              key={image.fileName}
              type="button"
              className="design-work-gallery-item"
              onClick={() => setSelectedIndex(index)}
              aria-label={`${fallbackCopy.openImage} ${index + 1} / ${galleryImages.length}`}
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
        <div className="placeholder-block">{emptyState}</div>
      )}

      {selectedImage && (
        <div
          className="design-work-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxLabel}
          onClick={() => setSelectedIndex(null)}
        >
          <div className="design-work-lightbox__content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="design-work-lightbox__close"
              onClick={() => setSelectedIndex(null)}
              aria-label={fallbackCopy.closeImageViewer}
            >
              {fallbackCopy.close}
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
              aria-label={fallbackCopy.previousImage}
            >
              {'<-'}
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
              aria-label={fallbackCopy.nextImage}
            >
              {'->'}
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
