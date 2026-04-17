import { useMemo } from 'react'
import { DesignWorkGalleryView } from '../../../components/DesignWorkGalleryView'
import { buildDesignWorkGalleryImages } from './galleryUtils'

const environmentImageModules = import.meta.glob(
  '../../../assets/design-work/environments/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, import: 'default' },
) as Record<string, string>

export function DesignWorkEnvironments() {
  const galleryImages = useMemo(
    () => buildDesignWorkGalleryImages(environmentImageModules),
    [],
  )

  return (
    <DesignWorkGalleryView
      title="Environments"
      intro="A selection of personal environment and concept design studies, covering architecture, interior spaces, and worldbuilding."
      galleryImages={galleryImages}
      lightboxLabel="Environments image viewer"
      emptyState={
        <>
          Add images inside <code>src/assets/design-work/environments/</code> using names like{' '}
          <code>01-city-hub.jpg</code>, <code>02-interior-hall.jpg</code>.
        </>
      }
    />
  )
}
