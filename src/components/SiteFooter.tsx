export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <span>© {year} Chen Liang</span>
      </div>
    </footer>
  )
}
