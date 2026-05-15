import { useRef } from 'react'
import { useParallax } from '../hooks/useAnimations'
import MagneticButton from './MagneticButton'
import './Hero.css'

export default function Hero({ onOpenBooking }) {
  const imageRef = useRef(null)
  useParallax(imageRef, 0.15)

  return (
    <section className="hero" id="inicio" aria-label="Seção principal">
      {/* Imagem de fundo com parallax suave */}
      <div className="hero__image-wrap">
        <div className="hero__image" ref={imageRef}>
          <video
            src="/background/background.webm"
            autoPlay
            loop
            muted
            playsInline
            className="hero__video"
          />
        </div>
        <div className="hero__image-overlay"></div>
      </div>

      {/* Conteúdo */}
      <div className="hero__content container">
        <div className="hero__text">
          <span className="hero__label reveal">Blanc Odontologia</span>
          <h1 className="hero__title reveal reveal-delay-1">
            Seu sorriso,<br />
            <em>nossa arte.</em>
          </h1>
          <p className="hero__description reveal reveal-delay-2">
            Cuidado odontológico com a delicadeza de um spa e a
            precisão da ciência. Um espaço pensado para quem
            valoriza a saúde com conforto.
          </p>
          <div className="hero__actions reveal reveal-delay-3">
            <MagneticButton 
              onClick={onOpenBooking} 
              className="btn-outline" 
              id="hero-cta"
            >
              Agendar Consulta
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </MagneticButton>
            <MagneticButton 
              onClick={() => window.location.hash = '#tratamentos'} 
              className="btn-outline" 
              id="hero-services"
            >
              Nossos Tratamentos
            </MagneticButton>
          </div>
        </div>

      </div>

      {/* Indicador de scroll - Movido para fora para alinhamento absoluto real */}
      <div className="hero__scroll-indicator reveal reveal-delay-5">
        <div className="hero__scroll-line"></div>
        <span className="hero__scroll-text">Deslize para baixo</span>
      </div>
    </section>
  )
}
