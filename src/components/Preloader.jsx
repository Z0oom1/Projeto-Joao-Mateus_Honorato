import { useEffect, useState } from 'react'
import './Preloader.css'

export default function Preloader({ theme }) {
  const [loading, setLoading] = useState(true)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // Simula o carregamento inicial
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500) // 2.5s para dar tempo da animação brilhar

    const renderTimer = setTimeout(() => {
      setShouldRender(false)
    }, 3200) // Remove do DOM após a transição de fade

    return () => {
      clearTimeout(timer)
      clearTimeout(renderTimer)
    }
  }, [])

  if (!shouldRender) return null

  return (
    <div className={`preloader ${!loading ? 'preloader--hidden' : ''} theme-${theme}`}>
      <div className="preloader__content">
        <div className="preloader__logo">
          <span className="preloader__text">Blanc</span>
          <div className="preloader__line"></div>
          <span className="preloader__sub">Odontologia</span>
        </div>
        <div className="preloader__progress">
          <div className="preloader__progress-bar"></div>
        </div>
      </div>
    </div>
  )
}
