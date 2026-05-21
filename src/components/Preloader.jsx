import { useEffect, useState } from 'react'
import './Preloader.css'

export default function Preloader({ siteType, onDone }) {
  const [loading, setLoading] = useState(true)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // Simula o carregamento inicial
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Reduzido ligeiramente para melhor usabilidade entre trocas

    const renderTimer = setTimeout(() => {
      setShouldRender(false)
      if (onDone) onDone()
    }, 2700)

    return () => {
      clearTimeout(timer)
      clearTimeout(renderTimer)
    }
  }, [onDone])

  if (!shouldRender) return null

  const isEstetica = siteType === 'estetica'
  const title = isEstetica ? 'Leia Honorato' : 'Dr. João Mateus'
  const subtitle = isEstetica ? 'Clínica de Estética' : 'Odontologia'
  const themeClass = isEstetica ? 'theme-purple' : 'theme-bege'
  const logoSrc = isEstetica ? '/logos/logo-leiah.webp' : '/logos/logo-joaom.webp'

  return (
    <div className={`preloader ${!loading ? 'preloader--hidden' : ''} ${themeClass}`}>
      <div className="preloader__content">
        <div className="preloader__logo">
          <img src={logoSrc} alt={title} className="preloader__logo-img" />
          <span className="preloader__text">{title}</span>
          <div className="preloader__line"></div>
          <span className="preloader__sub">{subtitle}</span>
        </div>
        <div className="preloader__progress">
          <div className="preloader__progress-bar"></div>
        </div>
      </div>
    </div>
  )
}
