/**
 * Single source of truth for portfolio projects.
 * Add a new row here, set `order` for list position, and toggle `featured` for the home page grid.
 */

import carConfiguratorCover from '../assets/projects/car-configurator-cover.jpg'
import aiExperimentCover from '../assets/projects/ai-experiment-cover.jpg'
import designWorkCover from '../assets/projects/design-work-cover.jpg'
import automotiveStudioCinematicCover from '../assets/projects/automotive-studio-cinematic-cover.jpg'
import dingMuseumCover from '../assets/projects/ding-museum-cover.jpg'
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
      de: 'Ein Echtzeit-Autokonfigurator in Unreal Engine mit Blueprint-gesteuerter Interaktion, cineastischer Präsentation und klar geführter Nutzerführung.',
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
    featured: false,
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
    featured: false,
    order: 5,
  },
  {
    slug: 'automotive-studio-cinematic',
    title: {
      en: 'Automotive Studio Cinematic',
      de: 'Automotive Studio Cinematic',
    },
    summary: {
      en: 'A short automotive studio cinematic in Unreal Engine 5, focused on lighting, material rendering, camera movement, and product visualization.',
      de: 'Ein kurzes Automotive-Studio-Cinematic in Unreal Engine 5 mit Fokus auf Beleuchtung, Material-Rendering, Kamerabewegung und Produktvisualisierung.',
    },
    coverImage: automotiveStudioCinematicCover,
    tags: ['Unreal Engine', 'Cinematic', 'Automotive'],
    featured: true,
    order: 4,
  },
  {
    slug: 'ding-museum',
    title: {
      en: 'Ding — The Museum of Things I Love',
      de: 'Ding — The Museum of Things I Love',
    },
    summary: {
      en: 'A 45-second spec ad for Ding, a fictional insurance brand, made with AI video tools.',
      de: 'Ein 45-sekündiger Spec-Spot für Ding, eine fiktive Versicherungsmarke, umgesetzt mit KI-Videotools.',
    },
    coverImage: dingMuseumCover,
    tags: ['AI Video', 'Spec Ad', 'Brand'],
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
