import type { ReactNode } from 'react'

type PageSectionProps = {
  title: string
  id?: string
  children: ReactNode
}

export function PageSection({ title, id, children }: PageSectionProps) {
  return (
    <section className="page-section" id={id} aria-labelledby={id ? `${id}-heading` : undefined}>
      <h2 className="page-section__title" id={id ? `${id}-heading` : undefined}>
        {title}
      </h2>
      {children}
    </section>
  )
}
