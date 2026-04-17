import type { DesignWorkGalleryImage } from '../../../components/DesignWorkGalleryView'

const galleryFilePattern = /^\d+-.+\.(jpe?g|png|webp|avif)$/i

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

export function buildDesignWorkGalleryImages(
  imageModules: Record<string, string>,
): DesignWorkGalleryImage[] {
  return Object.entries(imageModules)
    .map(([modulePath, src]) => {
      const fileName = modulePath.split('/').pop() ?? modulePath
      return { src, fileName, label: formatLabelFromFileName(fileName) }
    })
    .filter(({ fileName }) => galleryFilePattern.test(fileName))
    .sort((a, b) => getOrderFromFileName(a.fileName) - getOrderFromFileName(b.fileName))
}
