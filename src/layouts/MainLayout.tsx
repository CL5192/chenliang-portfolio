import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { getProjectBySlug } from '../content/projects'
import { useI18n } from '../i18n/I18nContext'
import type { Locale } from '../i18n/types'

const SITE_NAME = 'Chen Liang'

const pageNames: Record<string, Record<Locale, string>> = {
  '/projects': { en: 'Projects', de: 'Projekte' },
  '/about': { en: 'About', de: 'Über mich' },
  '/contact': { en: 'Contact', de: 'Kontakt' },
}

/** Browser-tab title for the current route, so each open tab is recognisable */
function getDocumentTitle(pathname: string, locale: Locale): string {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (path === '/') {
    return `${SITE_NAME} · Generative AI Artist`
  }

  const projectSlug = path.match(/^\/projects\/([^/]+)/)?.[1]
  if (projectSlug) {
    const project = getProjectBySlug(projectSlug, locale)
    // Keep only the name before the dash: "Krospi — three new flavours…" → "Krospi"
    const name = project?.title.split(' — ')[0]
    if (name) return `${name} · ${SITE_NAME}`
  }

  const pageName = pageNames[path]?.[locale]
  return pageName ? `${pageName} · ${SITE_NAME}` : SITE_NAME
}

export function MainLayout() {
  const { pathname } = useLocation()
  const { locale } = useI18n()

  useEffect(() => {
    document.title = getDocumentTitle(pathname, locale)
  }, [pathname, locale])

  return (
    <div className="layout">
      <SiteHeader />
      <main className="layout__main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
