import { useMemo } from 'react'
import { DesignWorkGalleryView } from '../../../components/DesignWorkGalleryView'
import { buildDesignWorkGalleryImages } from './galleryUtils'

const hardSurfaceImageModules = import.meta.glob(
  '../../../assets/design-work/hard-surface/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, import: 'default' },
) as Record<string, string>

export function DesignWorkHardSurface() {
  const galleryImages = useMemo(
    () => buildDesignWorkGalleryImages(hardSurfaceImageModules),
    [],
  )

  return (
    <DesignWorkGalleryView
      title="Hard-Surface"
      intro="A selection of hard-surface concept work across vehicles, mecha, and prop design, with both grounded and sci-fi influences."
      supportLine="Tools used across this work include Blender, Fusion 360, 3ds Max, and ZBrush."
      galleryImages={galleryImages}
      lightboxLabel="Hard-Surface image viewer"
      emptyState={
        <>
          Add images inside <code>src/assets/design-work/hard-surface/</code> using names like{' '}
          <code>01-bike-study.jpg</code>, <code>02-mecha-variant.jpg</code>.
        </>
      }
    />
  )
}
