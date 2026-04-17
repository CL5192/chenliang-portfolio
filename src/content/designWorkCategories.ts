export type DesignWorkCategory = {
  slug: string
  title: string
  summary: string
  intro: string
  coverImage: string
  order: number
}

export const designWorkCategories: DesignWorkCategory[] = [
  {
    slug: 'environments',
    title: 'Environments',
    summary:
      'Personal environment and concept design work for game and film-style settings, including architecture, interior scenes, and worldbuilding exploration.',
    intro:
      'A focused archive of personal environment and concept design studies covering architecture, interior spaces, and worldbuilding direction.',
    coverImage: '/src/assets/design-work/environments/cover.jpg',
    order: 1,
  },
  {
    slug: 'hard-surface',
    title: 'Hard-Surface',
    summary:
      'Personal hard-surface design work, including vehicles, mecha, weapons, and other mechanical concepts with realistic or sci-fi influences.',
    intro:
      'A selection of hard-surface concept explorations across vehicles, mecha, and prop design, with both grounded and sci-fi visual language.',
    coverImage: '/src/assets/design-work/hard-surface/cover.jpg',
    order: 2,
  },
  {
    slug: 'project-work',
    title: 'Project Work',
    summary:
      'Selected images from past projects, including visual development, concept work, and production-related artwork.',
    intro:
      'A compact gallery of selected production-context images, including visual development and concept work created within past project timelines.',
    coverImage: '/src/assets/design-work/project-work/cover.jpg',
    order: 3,
  },
]

function compareByOrder(a: DesignWorkCategory, b: DesignWorkCategory): number {
  return a.order - b.order
}

export function getDesignWorkCategoriesSorted(): DesignWorkCategory[] {
  return [...designWorkCategories].sort(compareByOrder)
}

export function getDesignWorkCategoryBySlug(slug: string): DesignWorkCategory | undefined {
  return designWorkCategories.find((category) => category.slug === slug)
}
