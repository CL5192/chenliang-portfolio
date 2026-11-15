import { useEffect, useState } from 'react'

type ZoomScrollImageProps = {
  src: string
  alt: string
  caption: string
  closeLabel: string
}

/**
 * A small image on the page; click it to open it large.
 * Large view: the image fills the screen height and scrolls sideways,
 * for wide images like a workflow canvas. Click the large image (or Esc / close) to go back.
 */
export function ZoomScrollImage({ src, alt, caption, closeLabel }: ZoomScrollImageProps) {
  const [open, setOpen] = useState(false)
  const [naturalHeight, setNaturalHeight] = useState(0)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <figure className="zoom-scroll">
      <button type="button" className="zoom-scroll__thumb" onClick={() => setOpen(true)}>
        <img src={src} alt={alt} loading="lazy" />
      </button>
      <figcaption>{caption}</figcaption>

      {open && (
        <div className="zoom-scroll__overlay" role="dialog" aria-modal="true" aria-label={alt} onClick={() => setOpen(false)}>
          <button type="button" className="zoom-scroll__close" onClick={() => setOpen(false)}>
            {closeLabel}
          </button>
          <div className="zoom-scroll__track" onClick={(event) => event.stopPropagation()}>
            {/* Fill the screen height, but never blow the image up more than 1.5x */}
            <img
              src={src}
              alt={alt}
              style={naturalHeight ? { maxHeight: naturalHeight * 1.5 } : undefined}
              onLoad={(event) => setNaturalHeight(event.currentTarget.naturalHeight)}
              onClick={() => setOpen(false)}
            />
          </div>
        </div>
      )}
    </figure>
  )
}
