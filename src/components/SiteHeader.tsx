import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'is-active' : undefined

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-logo" onClick={closeMenu}>
          Your Name
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </button>
        <nav
          id="primary-navigation"
          className={`site-nav${menuOpen ? ' is-open' : ''}`}
          aria-label="Primary"
        >
          <NavLink to="/" className={navLinkClass} end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/projects" className={navLinkClass} onClick={closeMenu}>
            Projects
          </NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>
            Contact
          </NavLink>
          <a href="/resume.pdf" onClick={closeMenu}>
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}
