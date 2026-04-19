import { useMemo } from 'react'
import { DesignWorkGalleryView } from '../../../components/DesignWorkGalleryView'
import { getDesignWorkCategoryBySlug } from '../../../content/designWorkCategories'
import { useI18n } from '../../../i18n/I18nContext'
import { buildDesignWorkGalleryImages } from './galleryUtils'

const hardSurfaceImageModules = import.meta.glob(
  '../../../assets/design-work/hard-surface/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, import: 'default' },
) as Record<string, string>

export function DesignWorkHardSurface() {
  const { locale } = useI18n()
  const category = getDesignWorkCategoryBySlug('hard-surface', locale)
  const galleryImages = useMemo(
    () => buildDesignWorkGalleryImages(hardSurfaceImageModules),
    [],
  )
  const copy =
    locale === 'de'
      ? {
          fallbackTitle: 'Hard-Surface',
          fallbackIntro:
            'Eine Auswahl an Hard-Surface-Konzeptarbeiten zu Fahrzeugen, Mechas und Props mit realistischer und Sci-Fi-Optik.',
          supportLine:
            'Verwendete Tools in diesen Arbeiten: Blender, Fusion 360, 3ds Max und ZBrush.',
          viewerLabel: 'Bildansicht Hard-Surface',
          emptyPrefix: 'Füge Bilder in',
          emptySuffix: 'ein, zum Beispiel',
        }
      : {
          fallbackTitle: 'Hard-Surface',
          fallbackIntro:
            'A selection of hard-surface concept work across vehicles, mecha, and props, with both grounded and sci-fi influences.',
          supportLine: 'Tools used in this work include Blender, Fusion 360, 3ds Max, and ZBrush.',
          viewerLabel: 'Hard-Surface image viewer',
          emptyPrefix: 'Add images inside',
          emptySuffix: 'using names like',
        }

  return (
    <DesignWorkGalleryView
      title={category?.title ?? copy.fallbackTitle}
      intro={category?.intro ?? copy.fallbackIntro}
      supportLine={copy.supportLine}
      galleryImages={galleryImages}
      lightboxLabel={copy.viewerLabel}
      emptyState={
        <>
          {copy.emptyPrefix} <code>src/assets/design-work/hard-surface/</code> {copy.emptySuffix}{' '}
          <code>01-bike-study.jpg</code>, <code>02-mecha-variant.jpg</code>.
        </>
      }
    />
  )
}
