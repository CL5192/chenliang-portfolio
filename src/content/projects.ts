/**
 * Single source of truth for portfolio projects.
 * Add a new row here, set `order` for list position, and toggle `featured` for the home page grid.
 */

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
      'Placeholder: an interactive 3D configurator experience for exploring trims, colors, and options.',
    coverImage: '/src/assets/projects/car-configurator-cover.jpg',
    tags: ['WebGL', 'Product', 'UX'],
    featured: true,
    order: 1,
  },
  {
    slug: 'ai-experiment',
    title: 'AI Experiment',
    summary:
      'Placeholder: a small prototype exploring model-assisted workflows, evaluation, and guardrails.',
    coverImage: '/src/assets/projects/ai-experiment-cover.jpg',
    tags: ['AI', 'Prototype', 'Research'],
    featured: true,
    order: 2,
  },
  {
    slug: 'design-work',
    title: 'Design Work',
    summary:
      'Placeholder: visual design explorations, systems thinking, and handoff-ready specifications.',
    coverImage: '/src/assets/projects/design-work-cover.jpg',
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
