import environmentsCover from '../assets/design-work/environments/cover.jpg'
import hardSurfaceCover from '../assets/design-work/hard-surface/cover.jpg'
import projectWorkCover from '../assets/design-work/project-work/cover.jpg'
import type { Locale } from '../i18n/types'

type LocalizedText = {
  en: string
  de: string
}

export type DesignWorkCategory = {
  slug: string
  title: string
  summary: string
  intro: string
  coverImage: string
  order: number
}

type DesignWorkCategorySource = {
  slug: string
  title: LocalizedText
  summary: LocalizedText
  intro: LocalizedText
  coverImage: string
  order: number
}

const designWorkCategoriesSource: DesignWorkCategorySource[] = [
  {
    slug: 'environments',
    title: {
      en: 'Environments',
      de: 'Umgebungen',
    },
    summary: {
      en: 'Personal environment design work for game and film-style settings, including architecture, interior scenes, and worldbuilding studies.',
      de: 'Persoenliche Environment-Design-Arbeiten fuer Spiel- und filmnahe Settings, inklusive Architektur, Innenraeume und Worldbuilding-Studien.',
    },
    intro: {
      en: 'A focused archive of personal environment and concept design studies covering architecture, interior spaces, and worldbuilding direction.',
      de: 'Ein fokussiertes Archiv persoenlicher Environment- und Concept-Design-Studien zu Architektur, Innenraeumen und Worldbuilding-Richtung.',
    },
    coverImage: environmentsCover,
    order: 1,
  },
  {
    slug: 'hard-surface',
    title: {
      en: 'Hard-Surface',
      de: 'Hard-Surface',
    },
    summary: {
      en: 'Personal hard-surface design work, including vehicles, mecha, weapons, and other mechanical concepts with realistic and sci-fi influences.',
      de: 'Persoenliche Hard-Surface-Design-Arbeiten mit Fahrzeugen, Mechas, Waffen und weiteren mechanischen Konzepten zwischen Realismus und Sci-Fi.',
    },
    intro: {
      en: 'A selection of hard-surface concept explorations across vehicles, mecha, and prop design, with both grounded and sci-fi visual language.',
      de: 'Eine Auswahl an Hard-Surface-Konzeptstudien aus Fahrzeug-, Mecha- und Prop-Design mit geerdeter und Sci-Fi-Bildsprache.',
    },
    coverImage: hardSurfaceCover,
    order: 2,
  },
  {
    slug: 'project-work',
    title: {
      en: 'Project Work',
      de: 'Projektarbeit',
    },
    summary: {
      en: 'Selected images from past projects, including visual development, concept work, and production artwork.',
      de: 'Ausgewaehlte Bilder aus vergangenen Projekten, darunter Visual Development, Concept Work und Production Artwork.',
    },
    intro: {
      en: 'A compact gallery of selected production-context images, including visual development and concept work created within past project timelines.',
      de: 'Eine kompakte Galerie ausgewaehlter produktionnaher Bilder, darunter Visual Development und Concept Work aus frueheren Projektphasen.',
    },
    coverImage: projectWorkCover,
    order: 3,
  },
]

function compareByOrder(a: DesignWorkCategory, b: DesignWorkCategory): number {
  return a.order - b.order
}

function localizeText(text: LocalizedText, locale: Locale): string {
  return text[locale] ?? text.en
}

function localizeCategory(
  category: DesignWorkCategorySource,
  locale: Locale,
): DesignWorkCategory {
  return {
    slug: category.slug,
    title: localizeText(category.title, locale),
    summary: localizeText(category.summary, locale),
    intro: localizeText(category.intro, locale),
    coverImage: category.coverImage,
    order: category.order,
  }
}

export function getDesignWorkCategoriesSorted(locale: Locale = 'en'): DesignWorkCategory[] {
  return designWorkCategoriesSource
    .map((category) => localizeCategory(category, locale))
    .sort(compareByOrder)
}

export function getDesignWorkCategoryBySlug(
  slug: string,
  locale: Locale = 'en',
): DesignWorkCategory | undefined {
  const sourceCategory = designWorkCategoriesSource.find((category) => category.slug === slug)
  return sourceCategory ? localizeCategory(sourceCategory, locale) : undefined
}
