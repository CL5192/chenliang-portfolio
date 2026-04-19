import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'is-active' : undefined

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { locale, setLocale } = useI18n()

  const copy =
    locale === 'de'
      ? {
          menu: 'Menü',
          home: 'Start',
          projects: 'Projekte',
          about: 'Über mich',
          contact: 'Kontakt',
          resume: 'Lebenslauf',
          languageLabel: 'Sprache',
          languageEnglish: 'EN',
          languageGerman: 'DE',
          navigationLabel: 'Hauptnavigation',
        }
      : {
          menu: 'Menu',
          home: 'Home',
          projects: 'Projects',
          about: 'About',
          contact: 'Contact',
          resume: 'Resume',
          languageLabel: 'Language',
          languageEnglish: 'EN',
          languageGerman: 'DE',
          navigationLabel: 'Primary navigation',
        }

  const closeMenu = () => setMenuOpen(false)
  const resumeFile = locale === 'de' ? '/resume-de.pdf' : '/resume-en.pdf'
  const resumeDownloadName = locale === 'de' ? 'resume-de.pdf' : 'resume-en.pdf'

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-logo" onClick={closeMenu}>
          Chen Liang
        </Link>
        <div className="site-header__actions">
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {copy.menu}
          </button>
          <nav
            id="primary-navigation"
            className={`site-nav${menuOpen ? ' is-open' : ''}`}
            aria-label={copy.navigationLabel}
          >
            <NavLink to="/" className={navLinkClass} end onClick={closeMenu}>
              {copy.home}
            </NavLink>
            <NavLink to="/projects" className={navLinkClass} onClick={closeMenu}>
              {copy.projects}
            </NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
              {copy.about}
            </NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>
              {copy.contact}
            </NavLink>
            <a href={resumeFile} download={resumeDownloadName} onClick={closeMenu}>
              {copy.resume}
            </a>
          </nav>
          <div className="language-switch" aria-label={copy.languageLabel}>
            <button
              type="button"
              className={`language-switch__button${locale === 'en' ? ' is-active' : ''}`}
              onClick={() => setLocale('en')}
              aria-pressed={locale === 'en'}
            >
              {copy.languageEnglish}
            </button>
            <button
              type="button"
              className={`language-switch__button${locale === 'de' ? ' is-active' : ''}`}
              onClick={() => setLocale('de')}
              aria-pressed={locale === 'de'}
            >
              {copy.languageGerman}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
