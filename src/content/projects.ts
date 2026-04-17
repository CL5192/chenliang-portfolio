/**
 * Single source of truth for portfolio projects.
 * Add a new row here, set `order` for list position, and toggle `featured` for the home page grid.
 */

import carConfiguratorCover from '../assets/projects/car-configurator-cover.jpg'
import aiExperimentCover from '../assets/projects/ai-experiment-cover.jpg'
import designWorkCover from '../assets/projects/design-work-cover.jpg'

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

/** Canonical project list — edit content only in this array */
export const projects: Project[] = [
  {
    slug: 'car-configurator',
    title: 'Car Configurator',
    summary:
      'A realtime automotive configurator built in Unreal Engine, featuring Blueprint-driven interaction, cinematic presentation, and structured user exploration.',
    coverImage: carConfiguratorCover,
    tags: ['WebGL', 'Product', 'UX'],
    featured: true,
    order: 1,
  },
  {
    slug: 'ai-experiment',
    title: 'AI Visual Experiment',
    summary:
      'An AI workflow experiment using ComfyUI and Midjourney to explore image-to-video pipelines, visual direction, and rapid iteration.',
    coverImage: aiExperimentCover,
    tags: ['AI', 'Prototype', 'Research'],
    featured: true,
    order: 2,
  },
  {
    slug: 'design-work',
    title: 'Design Work',
    summary:
      'A curated archive of AAA concept design work across environments, hard-surface design, and visual development.',
    coverImage: designWorkCover,
    tags: ['UI', 'Systems', 'Brand'],
    featured: true,
    order: 3,
  },
]

function compareByOrder(a: Project, b: Project): number {
  return a.order - b.order
}

/** All projects, sorted by `order` (safe copy — does not mutate `projects`) */
export function getAllProjectsSorted(): Project[] {
  return [...projects].sort(compareByOrder)
}

/** Featured projects only, sorted by `order` */
export function getFeaturedProjectsSorted(): Project[] {
  return getAllProjectsSorted().filter((p) => p.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
