/** Central list for the Projects index and cards — swap copy and paths here later */

export type ProjectSummary = {
  slug: string
  title: string
  summary: string
  tags: string[]
}

export const projects: ProjectSummary[] = [
  {
    slug: 'car-configurator',
    title: 'Car Configurator',
    summary:
      'Placeholder: an interactive 3D configurator experience for exploring trims, colors, and options.',
    tags: ['WebGL', 'Product', 'UX'],
  },
  {
    slug: 'ai-experiment',
    title: 'AI Experiment',
    summary:
      'Placeholder: a small prototype exploring model-assisted workflows, evaluation, and guardrails.',
    tags: ['AI', 'Prototype', 'Research'],
  },
  {
    slug: 'design-work',
    title: 'Design Work',
    summary:
      'Placeholder: visual design explorations, systems thinking, and handoff-ready specifications.',
    tags: ['UI', 'Systems', 'Brand'],
  },
]

export function getProjectBySlug(slug: string): ProjectSummary | undefined {
  return projects.find((p) => p.slug === slug)
}
