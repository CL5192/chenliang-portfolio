import { Link } from 'react-router-dom'
import { PageSection } from '../../components/PageSection'
import { getDesignWorkCategoriesSorted } from '../../content/designWorkCategories'
import { getProjectBySlug } from '../../content/projects'
import fallbackCoverImage from '../../assets/projects/design-work-cover.jpg'

const slug = 'design-work'

export function DesignWork() {
  const project = getProjectBySlug(slug)
  const categories = getDesignWorkCategoriesSorted()

  return (
    <>
      <p className="page-lead page-back-link">
        <Link to="/projects">← Back to projects</Link>
      </p>
      <h1 className="page-title">{project?.title ?? 'Design Work'}</h1>
      <p className="page-lead">
        This section collects selected concept design work from past years, including personal work and
        images from previous projects.
      </p>

      <PageSection title="Categories" id="categories">
        <div className="card-grid">
          {categories.map((category) => (
            <Link
              key={category.slug}
              className="project-card"
              to={`/projects/design-work/${category.slug}`}
              aria-label={`Browse design work category: ${category.title}`}
            >
              <div className="project-card__top">
                <h3 className="project-card__title">{category.title}</h3>
                <p className="project-card__summary">{category.summary}</p>
                <span className="project-card__link">Browse work →</span>
              </div>
              <div className="project-card__image-wrap">
                <img
                  className="project-card__image"
                  src={category.coverImage}
                  alt={`${category.title} cover preview`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src = fallbackCoverImage
                  }}
                />
              </div>
            </Link>
          ))}
        </div>
      </PageSection>
    </>
  )
}
