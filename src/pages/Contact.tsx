import { useI18n } from '../i18n/I18nContext'

export function Contact() {
  const { locale } = useI18n()
  const copy =
    locale === 'de'
      ? {
          title: 'Kontakt',
          lead: 'Für Jobangebote oder Kooperationen kannst du dich gerne melden.',
          location: 'Berlin, Deutschland',
          phoneLabel: 'Telefon',
        }
      : {
          title: 'Contact',
          lead: 'For opportunities or collaboration, feel free to get in touch.',
          location: 'Berlin, Germany',
          phoneLabel: 'Phone',
        }

  return (
    <>
      <h1 className="page-title top-page-title">{copy.title}</h1>

      <p className="page-lead page-title-intro contact-lead">{copy.lead}</p>

      <div className="case-copy">
        <div className="contact-stack contact-stack--primary">
          <p>
            <strong>Email</strong>
            <br />
            <a href="mailto:liangchenart@gmail.com">liangchenart@gmail.com</a>
          </p>

          <p>
            <strong>{copy.phoneLabel}</strong>
            <br />
            <a href="tel:+4915129555240">+49 151 29555240</a>
          </p>
        </div>

        <div className="contact-stack contact-stack--social">
          <p>
            <strong>LinkedIn</strong>
            <br />
            <a
              href="https://www.linkedin.com/in/liang-chen-6403791b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/liang-chen-6403791b
            </a>
          </p>

          <p>
            <strong>ArtStation</strong>
            <br />
            <a href="https://www.artstation.com/liangchendesign" target="_blank" rel="noopener noreferrer">
              artstation.com/liangchendesign
            </a>
          </p>

          <p>
            <strong>GitHub</strong>
            <br />
            <a href="https://github.com/CL5192" target="_blank" rel="noopener noreferrer">
              github.com/CL5192
            </a>
          </p>
        </div>

        <p className="contact-locale">{copy.location}</p>
      </div>
    </>
  )
}
