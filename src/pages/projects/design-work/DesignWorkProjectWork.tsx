import { useMemo } from 'react'
import { DesignWorkGalleryView } from '../../../components/DesignWorkGalleryView'
import { buildDesignWorkGalleryImages } from './galleryUtils'

const projectWorkImageModules = import.meta.glob(
  '../../../assets/design-work/project-work/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, import: 'default' },
) as Record<string, string>

export function DesignWorkProjectWork() {
  const galleryImages = useMemo(
    () => buildDesignWorkGalleryImages(projectWorkImageModules),
    [],
  )

  return (
    <DesignWorkGalleryView
      title="Project Work"
      intro="Selected images from past projects, including visual development, concept work, and production-related artwork. In some cases, only partial material can be shown due to project limitations or NDA restrictions."
      galleryImages={galleryImages}
      lightboxLabel="Project Work image viewer"
      emptyState={
        <>
          Add images inside <code>src/assets/design-work/project-work/</code> using names like{' '}
          <code>01-project-name.jpg</code>, <code>02-scene-dev.jpg</code>.
        </>
      }
    />
  )
}
