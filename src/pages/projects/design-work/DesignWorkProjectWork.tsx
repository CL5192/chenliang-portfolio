import { useMemo } from 'react'
import { DesignWorkGalleryView } from '../../../components/DesignWorkGalleryView'
import { getDesignWorkCategoryBySlug } from '../../../content/designWorkCategories'
import { useI18n } from '../../../i18n/I18nContext'
import { buildDesignWorkGalleryImages } from './galleryUtils'

const projectWorkImageModules = import.meta.glob(
  '../../../assets/design-work/project-work/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, import: 'default' },
) as Record<string, string>

export function DesignWorkProjectWork() {
  const { locale } = useI18n()
  const category = getDesignWorkCategoryBySlug('project-work', locale)
  const galleryImages = useMemo(
    () => buildDesignWorkGalleryImages(projectWorkImageModules),
    [],
  )
  const copy =
    locale === 'de'
      ? {
          fallbackTitle: 'Projektarbeit',
          fallbackIntro:
            'Ausgewaehlte Bilder aus vergangenen Projekten, inklusive Visual Development, Concept Work und Production Artwork. Teilweise ist nur ein begrenzter Umfang aufgrund von Projektvorgaben oder NDA moeglich.',
          viewerLabel: 'Bildansicht Projektarbeit',
          emptyPrefix: 'Fuege Bilder in',
          emptySuffix: 'ein, zum Beispiel',
        }
      : {
          fallbackTitle: 'Project Work',
          fallbackIntro:
            'Selected images from past projects, including visual development, concept work, and production artwork. In some cases, only partial material can be shown due to project limitations or NDA restrictions.',
          viewerLabel: 'Project Work image viewer',
          emptyPrefix: 'Add images inside',
          emptySuffix: 'using names like',
        }

  return (
    <DesignWorkGalleryView
      title={category?.title ?? copy.fallbackTitle}
      intro={category?.intro ?? copy.fallbackIntro}
      galleryImages={galleryImages}
      lightboxLabel={copy.viewerLabel}
      emptyState={
        <>
          {copy.emptyPrefix} <code>src/assets/design-work/project-work/</code> {copy.emptySuffix}{' '}
          <code>01-project-name.jpg</code>, <code>02-scene-dev.jpg</code>.
        </>
      }
    />
  )
}
