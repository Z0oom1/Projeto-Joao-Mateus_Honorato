import { useEffect, useState } from 'react'
import './Preloader.css'

export default function Preloader({ siteType, onDone, progress = 0, isLoaded = false }) {
  const [shouldRender, setShouldRender] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    if (isLoaded) {
      setFadeOut(true)
      const timer = setTimeout(() => {
        setShouldRender(false)
        if (onDone) onDone()
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [isLoaded, onDone])

  if (!shouldRender) return null

  const isEstetica = siteType === 'estetica'
  const title = isEstetica ? 'Leia Honorato' : 'Dr. João Mateus'
  const subtitle = isEstetica ? 'Clínica de Estética' : 'Odontologia'
  const themeClass = isEstetica ? 'theme-purple' : 'theme-bege'
  const logoSrc = isEstetica ? '/logos/logo-leiah.webp' : '/logos/logo-joaom.webp'

  return (
    <div className={`preloader ${fadeOut ? 'preloader--hidden' : ''} ${themeClass}`}>
      <div className="preloader__content">
        <div className="preloader__logo">
          <img src={logoSrc} alt={title} className="preloader__logo-img" />
          <span className="preloader__text">{title}</span>
          <div className="preloader__line"></div>
          <span className="preloader__sub">{subtitle}</span>
        </div>
        <div className="preloader__progress">
          <div className="preloader__progress-bar-container">
            <div className="preloader__progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
          <span className="preloader__progress-text">{progress}%</span>
        </div>
      </div>
    </div>
  )
}
