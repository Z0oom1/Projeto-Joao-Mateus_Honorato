import { useState, useEffect } from 'react'
import MagneticButton from './MagneticButton'
import './Navbar.css'

export default function Navbar({ siteType, onOpenBooking, onGoBack }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isEstetica = siteType === 'estetica'
  const professionalName = isEstetica ? 'Leia Honorato' : 'Dr. João Mateus'
  const logoSrc = isEstetica ? '/logos/logo-leiah.webp' : '/logos/logo-joaom.webp'

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
        {/* Back Button & Logo Container */}
        <div className="navbar__logo-container">
          <button 
            className="navbar__back-btn" 
            onClick={onGoBack} 
            aria-label="Voltar para seleção de clínica"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Voltar</span>
          </button>
          
          <a href="#" className="navbar__logo" aria-label="FaceSmile Clinic - Início">
            <img src={logoSrc} alt="FaceSmile Clinic" className="navbar__logo-img" />
          </a>
        </div>

        {/* Professional Badge */}
        <div className="navbar__badge">
          <span className="navbar__badge-dot"></span>
          <span className="navbar__badge-text">{professionalName}</span>
        </div>

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
        <div className="navbar__cta-wrap">
          <MagneticButton
            onClick={onOpenBooking}
            className="navbar__cta"
          >
            Agendar
          </MagneticButton>
        </div>

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
            <li>
              <button 
                onClick={() => { handleNavClick(); onGoBack(); }} 
                className="navbar__mobile-back"
              >
                ← Voltar ao Início
              </button>
            </li>
            {navLinks.map((link, i) => (
              <li key={link.href} style={{ transitionDelay: `${(i + 2) * 80}ms` }}>
                <a
                  href={link.href}
                  className="navbar__mobile-link"
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li style={{ transitionDelay: `${(navLinks.length + 2) * 80}ms` }}>
              <button
                className="btn-primary navbar__mobile-cta"
                onClick={() => { handleNavClick(); onOpenBooking(); }}
                style={{ width: '100%', border: 'none' }}
              >
                Agendar Consulta
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
