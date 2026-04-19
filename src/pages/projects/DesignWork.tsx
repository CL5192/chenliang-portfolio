import { Link } from 'react-router-dom'
import { PageSection } from '../../components/PageSection'
import { getDesignWorkCategoriesSorted } from '../../content/designWorkCategories'
import { getProjectBySlug } from '../../content/projects'
import fallbackCoverImage from '../../assets/projects/design-work-cover.jpg'
import { useI18n } from '../../i18n/I18nContext'

const slug = 'design-work'

export function DesignWork() {
  const { locale } = useI18n()
  const project = getProjectBySlug(slug, locale)
  const categories = getDesignWorkCategoriesSorted(locale)
  const copy =
    locale === 'de'
      ? {
          backToProjects: '<- Zurück zu Projekten',
          fallbackTitle: 'Designarbeiten',
          intro:
            'Dieser Bereich sammelt ausgewählte Concept-Design-Arbeiten aus den letzten Jahren, einschließlich persönlicher Arbeiten und Bildern aus früheren Projekten.',
          sectionTitle: 'Kategorien',
          browseCategory: 'Design-Kategorie ansehen',
          browseWork: 'Arbeiten ansehen ->',
          coverAlt: 'Titelbild',
        }
      : {
          backToProjects: '<- Back to projects',
          fallbackTitle: 'Design Work',
          intro:
            'This section collects selected concept design work from past years, including personal work and images from previous projects.',
          sectionTitle: 'Categories',
          browseCategory: 'Browse design work category',
          browseWork: 'Browse work ->',
          coverAlt: 'cover preview',
        }

  return (
    <>
      <p className="page-lead page-back-link">
        <Link to="/projects">{copy.backToProjects}</Link>
      </p>
      <h1 className="page-title">{project?.title ?? copy.fallbackTitle}</h1>
      <p className="page-lead">{copy.intro}</p>

      <PageSection title={copy.sectionTitle} id="categories">
        <div className="card-grid">
          {categories.map((category) => (
            <Link
              key={category.slug}
              className="project-card"
              to={`/projects/design-work/${category.slug}`}
              aria-label={`${copy.browseCategory}: ${category.title}`}
            >
              <div className="project-card__top">
                <h3 className="project-card__title">{category.title}</h3>
                <p className="project-card__summary">{category.summary}</p>
                <span className="project-card__link">{copy.browseWork}</span>
              </div>
              <div className="project-card__image-wrap">
                <img
                  className="project-card__image"
                  src={category.coverImage}
                  alt={`${category.title} ${copy.coverAlt}`}
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
