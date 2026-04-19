import { useMemo } from 'react'
import { DesignWorkGalleryView } from '../../../components/DesignWorkGalleryView'
import { getDesignWorkCategoryBySlug } from '../../../content/designWorkCategories'
import { useI18n } from '../../../i18n/I18nContext'
import { buildDesignWorkGalleryImages } from './galleryUtils'

const environmentImageModules = import.meta.glob(
  '../../../assets/design-work/environments/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, import: 'default' },
) as Record<string, string>

export function DesignWorkEnvironments() {
  const { locale } = useI18n()
  const category = getDesignWorkCategoryBySlug('environments', locale)
  const galleryImages = useMemo(
    () => buildDesignWorkGalleryImages(environmentImageModules),
    [],
  )
  const copy =
    locale === 'de'
      ? {
          fallbackTitle: 'Umgebungen',
          fallbackIntro:
            'Eine Auswahl persoenlicher Environment-Design-Studien zu Architektur, Innenraeumen und Worldbuilding.',
          viewerLabel: 'Bildansicht Umgebungen',
          emptyPrefix: 'Fuege Bilder in',
          emptySuffix: 'ein, zum Beispiel',
        }
      : {
          fallbackTitle: 'Environments',
          fallbackIntro:
            'A selection of personal environment design studies, covering architecture, interior spaces, and worldbuilding.',
          viewerLabel: 'Environments image viewer',
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
          {copy.emptyPrefix} <code>src/assets/design-work/environments/</code> {copy.emptySuffix}{' '}
          <code>01-city-hub.jpg</code>, <code>02-interior-hall.jpg</code>.
        </>
      }
    />
  )
}
