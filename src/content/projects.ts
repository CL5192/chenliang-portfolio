/**
 * Single source of truth for portfolio projects.
 * Add a new row here, set `order` for list position, and `group` for the Home section it appears in.
 */

import carConfiguratorCover from '../assets/projects/car-configurator-cover.jpg'
import designWorkCover from '../assets/projects/design-work-cover.jpg'
import automotiveStudioCinematicCover from '../assets/projects/automotive-studio-cinematic-cover.jpg'
import dingMuseumCover from '../assets/projects/ding-museum-cover.jpg'
import krospiCover from '../assets/projects/krospi/krospi-card.jpg'
import haldeCover from '../assets/projects/look-study/look-study-cover.jpg'
import varmrCover from '../assets/projects/varmr/varmr-card.jpg'
import type { Locale } from '../i18n/types'

/** 'ai' = current AI work (shown first on Home); 'earlier' = 3D and concept design */
export type ProjectGroup = 'ai' | 'earlier'

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
  /** Which Home section the project appears in */
  group: ProjectGroup
  /** Lower numbers appear first in sorted lists */
  order: number
}

type ProjectSource = {
  slug: string
  title: LocalizedText
  summary: LocalizedText
  coverImage: string
  tags: string[]
  group: ProjectGroup
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
      de: 'Ein Echtzeit-Autokonfigurator in Unreal Engine mit Blueprint-gesteuerter Interaktion, cineastischer Präsentation und klarer Nutzerführung.',
    },
    coverImage: carConfiguratorCover,
    tags: ['Unreal Engine', 'Blueprint', 'Automotive'],
    group: 'earlier',
    order: 1,
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
    tags: ['Concept Art', 'Environments', 'Hard Surface'],
    group: 'earlier',
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
    group: 'earlier',
    order: 4,
  },
  {
    slug: 'ding-museum',
    title: {
      en: 'Ding',
      de: 'Ding',
    },
    summary: {
      en: 'A 45-second spec ad for Ding, a fictional insurance brand, made with AI video tools.',
      de: 'Ein 45-sekündiger Spec-Spot für Ding, eine fiktive Versicherungsmarke, umgesetzt mit KI-Videotools.',
    },
    coverImage: dingMuseumCover,
    tags: ['AI Video', 'Spec Ad', 'Brand'],
    group: 'ai',
    order: 0.9,
  },
  {
    slug: 'krospi',
    title: {
      en: 'Krospi',
      de: 'Krospi',
    },
    summary: {
      en: 'Three vertical spec ads for a fictional German crisp brand, made with AI video tools: a learning curve from 7 days to 3.',
      de: 'Drei Hochformat-Spec-Spots für eine fiktive deutsche Chipsmarke, umgesetzt mit KI-Videotools: eine Lernkurve von 7 auf 3 Tage.',
    },
    coverImage: krospiCover,
    tags: ['AI Video', 'Spec Ad', 'Comedy'],
    group: 'ai',
    order: 0,
  },
  {
    slug: 'varmr',
    title: {
      en: 'VARMR',
      de: 'VARMR',
    },
    summary: {
      en: 'A 20-second vertical spec ad for a fictional insulated flask. A Viking films himself in a North Sea storm.',
      de: 'Ein 20-sekündiger Hochformat-Spec-Spot für eine fiktive Isolierflasche. Ein Wikinger filmt sich selbst in einem Nordseesturm.',
    },
    coverImage: varmrCover,
    tags: ['AI Video', 'Spec Ad', 'UGC'],
    group: 'ai',
    order: 0.5,
  },
  {
    slug: 'halde',
    title: {
      en: 'HALDE',
      de: 'HALDE',
    },
    summary: {
      en: 'Three sets of AI stills for a fictional alpine skincare brand: the same products, from e-commerce shots to a launch key visual.',
      de: 'Drei Serien von KI-Stills für eine fiktive alpine Hautpflegemarke: dieselben Produkte, vom E-Commerce-Bild bis zum Launch-Key-Visual.',
    },
    coverImage: haldeCover,
    tags: ['AI Stills', 'Spec Ad', 'Beauty'],
    group: 'ai',
    order: 0.8,
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
    group: project.group,
    order: project.order,
  }
}

/** All projects, sorted by `order` (safe copy — does not mutate `projects`) */
export function getAllProjectsSorted(locale: Locale = 'en'): Project[] {
  return projectsSource.map((project) => localizeProject(project, locale)).sort(compareByOrder)
}

/** Projects in one Home section, sorted by `order` */
export function getProjectsByGroup(group: ProjectGroup, locale: Locale = 'en'): Project[] {
  return getAllProjectsSorted(locale).filter((p) => p.group === group)
}

export function getProjectBySlug(slug: string, locale: Locale = 'en'): Project | undefined {
  const sourceProject = projectsSource.find((project) => project.slug === slug)
  return sourceProject ? localizeProject(sourceProject, locale) : undefined
}
