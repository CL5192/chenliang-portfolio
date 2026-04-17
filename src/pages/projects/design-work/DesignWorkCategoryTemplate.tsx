import { Link } from 'react-router-dom'
import { PageSection } from '../../../components/PageSection'
import { getDesignWorkCategoryBySlug } from '../../../content/designWorkCategories'

type DesignWorkCategoryTemplateProps = {
  slug: string
}

const fallbackCoverImage = '/src/assets/projects/design-work-cover.svg'

const galleryFileNames = ['cover.jpg', '01.jpg', '02.jpg', '03.jpg']

export function DesignWorkCategoryTemplate({ slug }: DesignWorkCategoryTemplateProps) {
  const category = getDesignWorkCategoryBySlug(slug)

  if (!category) {
    return (
      <>
        <p className="page-lead" style={{ marginBottom: '0.5rem' }}>
          <Link to="/projects/design-work">← Back to Design Work</Link>
        </p>
        <h1 className="page-title">Category not found</h1>
        <div className="placeholder-block">
          No category data found for <code>{slug}</code> in <code>src/content/designWorkCategories.ts</code>
          .
        </div>
      </>
    )
  }

  const baseImagePath = `/src/assets/design-work/${category.slug}`

  return (
    <>
      <p className="page-lead" style={{ marginBottom: '0.5rem' }}>
        <Link to="/projects/design-work">← Back to Design Work</Link>
      </p>
      <h1 className="page-title">{category.title}</h1>
      <p className="page-lead">{category.intro}</p>

      <PageSection title="Cover preview" id={`${category.slug}-cover`}>
        <figure className="case-image">
          <img
            className="case-image__asset"
            src={category.coverImage}
            alt={`${category.title} cover preview`}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.src = fallbackCoverImage
            }}
          />
        </figure>
      </PageSection>

      <PageSection title="Gallery placeholder" id={`${category.slug}-gallery`}>
        <div className="card-grid">
          {galleryFileNames.map((fileName) => (
            <div key={fileName} className="placeholder-block">
              Add image at <code>{`${baseImagePath}/${fileName}`}</code>.
            </div>
          ))}
        </div>
      </PageSection>
    </>
  )
}
