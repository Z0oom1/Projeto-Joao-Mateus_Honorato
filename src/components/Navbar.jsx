import { useState, useEffect } from 'react'
import MagneticButton from './MagneticButton'
import './Navbar.css'

export default function Navbar({ theme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const logoSrc = theme === 'blue' 
    ? '/logos/logotipo-azul.png' 
    : theme === 'gold' 
      ? '/logos/logotipo-dourado.png' 
      : '/logos/logotipo-beje.png';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Bloqueia scroll do body quando menu mobile está aberto */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Tratamentos', href: '#tratamentos' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Depoimentos', href: '#depoimentos' },
  ]

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <nav className="navbar__inner container" aria-label="Navegação principal">
        {/* Logo */}
        <a href="#" className="navbar__logo" aria-label="Blanc Odontologia - Início">
          <img src={logoSrc} alt="Blanc Odontologia" className="navbar__logo-img" />
        </a>

        {/* Links Desktop */}
        <ul className="navbar__links" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <MagneticButton
          onClick={() => window.location.hash = '#agendar'}
          className="navbar__cta"
        >
          Agendar Consulta
        </MagneticButton>

        {/* Menu Hamburger Mobile */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          id="menu-toggle"
        >
          <span className="navbar__hamburger-line"></span>
          <span className="navbar__hamburger-line"></span>
        </button>

        {/* Menu Mobile Overlay */}
        <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
          <ul className="navbar__mobile-links" role="list">
            {navLinks.map((link, i) => (
              <li key={link.href} style={{ transitionDelay: `${(i + 1) * 80}ms` }}>
                <a
                  href={link.href}
                  className="navbar__mobile-link"
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li style={{ transitionDelay: `${(navLinks.length + 1) * 80}ms` }}>
              <a
                href="#agendar"
                className="btn-primary navbar__mobile-cta"
                onClick={handleNavClick}
              >
                Agendar Consulta
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
