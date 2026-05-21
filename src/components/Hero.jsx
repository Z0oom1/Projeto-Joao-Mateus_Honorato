import { useRef } from 'react'
import { useParallax } from '../hooks/useAnimations'
import MagneticButton from './MagneticButton'
import './Hero.css'

export default function Hero({ siteType, onOpenBooking }) {
  const imageRef = useRef(null)
  useParallax(imageRef, 0.15)

  const isEstetica = siteType === 'estetica'
  
  const labelText = isEstetica ? 'Leia Honorato — Estética' : 'Dr. João Mateus — Odonto'
  
  const titleText = isEstetica ? (
    <>
      Sua beleza,<br />
      <em>nossa inspiração.</em>
    </>
  ) : (
    <>
      Seu sorriso,<br />
      <em>nossa arte.</em>
    </>
  )

  const descText = isEstetica 
    ? 'Procedimentos estéticos avançados que unem ciência, delicadeza e bem-estar. Um refúgio dedicado à sua autoestima e rejuvenescimento natural.'
    : 'Cuidado odontológico de excelência com a sensibilidade de um spa e a precisão científica. Um espaço desenhado para quem preza por saúde e sofisticação.'

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
          <span className="hero__label reveal">{labelText}</span>
          <h1 className="hero__title reveal reveal-delay-1">
            {titleText}
          </h1>
          <p className="hero__description reveal reveal-delay-2">
            {descText}
          </p>
          <div className="hero__actions reveal reveal-delay-3">
            <MagneticButton 
              onClick={onOpenBooking} 
              className="btn-hero-cta" 
              id="hero-cta"
            >
              <span>Agendar Consulta</span>
              <div className="btn-hero-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </MagneticButton>

            <MagneticButton 
              onClick={() => {
                const target = document.getElementById('tratamentos')
                if (target) target.scrollIntoView({ behavior: 'smooth' })
              }} 
              className="btn-hero-alt" 
              id="hero-services"
            >
              <span>Nossos Tratamentos</span>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Elementos Decorativos de Fundo */}
      <div className="decor-element decor-sparkle" style={{ top: '15%', left: '8%', animationDelay: '0s' }}>
        <svg viewBox="0 0 24 24"><path d="M12 0l2.5 9.5 9.5 2.5-9.5 2.5-2.5 9.5-2.5-9.5-9.5-2.5 9.5-2.5z"/></svg>
      </div>
      <div className="decor-element decor-circle" style={{ top: '60%', right: '-5%', animationDelay: '-2s' }}></div>
      <div className="decor-element decor-cross" style={{ bottom: '20%', left: '15%', animationDelay: '-4s' }}>
        <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
      </div>

      <div className="hero__scroll-indicator reveal reveal-delay-5">
        <div className="hero__scroll-line"></div>
        <span className="hero__scroll-text">Deslize para baixo</span>
      </div>
    </section>
  )
}
