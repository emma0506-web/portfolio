export default function Nav() {
  const links = [
    { href: '#about', label: '关于' },
    { href: '#projects', label: '项目' },
    { href: '#blog', label: '文章' },
    { href: '#contact', label: '联系' },
  ]

  return (
    <header className="nav">
      <a className="nav__brand" href="#top">谢芬</a>
      <nav className="nav__links">
        {links.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </nav>
    </header>
  )
}
