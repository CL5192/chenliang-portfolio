import { Outlet } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'

export function MainLayout() {
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
