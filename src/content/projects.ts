/**
 * Single source of truth for portfolio projects.
 * Add a new row here, set `order` for list position, and toggle `featured` for the home page grid.
 */

import carConfiguratorCover from '../assets/projects/car-configurator-cover.jpg'
import aiExperimentCover from '../assets/projects/ai-experiment-cover.jpg'
import designWorkCover from '../assets/projects/design-work-cover.jpg'
import type { Locale } from '../i18n/types'

type LocalizedText = {
  en: string
  de: string
}

export type Project = {
  slug: string
  title: string
  summary: string
  coverImage: string
  tags: string[]
  /** When true, the project appears in the Home “Featured projects” section */
  featured: boolean
  /** Lower numbers appear first in sorted lists */
  order: number
}

type ProjectSource = {
  slug: string
  title: LocalizedText
  summary: LocalizedText
  coverImage: string
  tags: string[]
  featured: boolean
  order: number
}

/** Canonical project list — edit content only in this array */
const projectsSource: ProjectSource[] = [
  {
    slug: 'car-configurator',
    title: {
      en: 'Car Configurator',
      de: 'Auto-Konfigurator',
    },
    summary: {
      en: 'A realtime automotive configurator built in Unreal Engine, featuring Blueprint-driven interaction, cinematic presentation, and structured user exploration.',
      de: 'Ein Echtzeit-Autokonfigurator in Unreal Engine mit Blueprint-gesteuerter Interaktion, cineastischer Praesentation und klar gefuehrter Nutzerfuehrung.',
    },
    coverImage: carConfiguratorCover,
    tags: ['WebGL', 'Product', 'UX'],
    featured: true,
    order: 1,
  },
  {
    slug: 'ai-experiment',
    title: {
      en: 'AI Visual Experiment',
      de: 'KI-Visual-Experiment',
    },
    summary: {
      en: 'An AI workflow experiment using ComfyUI and Midjourney to explore image-to-video pipelines, visual direction, and rapid iteration.',
      de: 'Ein KI-Workflow-Experiment mit ComfyUI und Midjourney zur Erkundung von Image-to-Video-Pipelines, visueller Richtung und schneller Iteration.',
    },
    coverImage: aiExperimentCover,
    tags: ['AI', 'Prototype', 'Research'],
    featured: true,
    order: 2,
  },
  {
    slug: 'design-work',
    title: {
      en: 'Design Work',
      de: 'Designarbeiten',
    },
    summary: {
      en: 'A curated archive of AAA concept design work across environments, hard-surface design, and visual development.',
      de: 'Ein kuratiertes Archiv mit AAA-Concept-Design-Arbeiten aus den Bereichen Environments, Hard-Surface und Visual Development.',
    },
    coverImage: designWorkCover,
    tags: ['UI', 'Systems', 'Brand'],
    featured: true,
    order: 3,
  },
]

function compareByOrder(a: Project, b: Project): number {
  return a.order - b.order
}

function localizeText(text: LocalizedText, locale: Locale): string {
  return text[locale] ?? text.en
}

function localizeProject(project: ProjectSource, locale: Locale): Project {
  return {
    slug: project.slug,
    title: localizeText(project.title, locale),
    summary: localizeText(project.summary, locale),
    coverImage: project.coverImage,
    tags: project.tags,
    featured: project.featured,
    order: project.order,
  }
}

/** All projects, sorted by `order` (safe copy — does not mutate `projects`) */
export function getAllProjectsSorted(locale: Locale = 'en'): Project[] {
  return projectsSource.map((project) => localizeProject(project, locale)).sort(compareByOrder)
}

/** Featured projects only, sorted by `order` */
export function getFeaturedProjectsSorted(locale: Locale = 'en'): Project[] {
  return getAllProjectsSorted(locale).filter((p) => p.featured)
}

export function getProjectBySlug(slug: string, locale: Locale = 'en'): Project | undefined {
  const sourceProject = projectsSource.find((project) => project.slug === slug)
  return sourceProject ? localizeProject(sourceProject, locale) : undefined
}
