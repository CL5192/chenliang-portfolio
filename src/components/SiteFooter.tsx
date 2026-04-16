export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <span>© {year} Your Name. All rights reserved.</span>
        <span>Built with Vite + React + TypeScript</span>
      </div>
    </footer>
  )
}
