import './About.css'

export default function About() {
  return (
    <section className="about section" id="sobre" aria-label="Sobre a clínica">
      <div className="container">
        {/* Cabeçalho da seção */}
        <div className="about__header">
          <span className="about__label reveal">Sobre Nós</span>
          <h2 className="about__title reveal reveal-delay-1">
            Onde o cuidado<br />
            encontra a <em>elegância</em>
          </h2>
        </div>

        {/* Grid assimétrico: Imagem + Texto */}
        <div className="about__grid">
          <div className="about__image-block reveal reveal-delay-2">
            <div className="about__image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80&auto=format&fit=crop"
                alt="Dra. Carolina Menezes, fundadora da Blanc Odontologia"
                loading="lazy"
              />
            </div>
            <div className="about__image-accent"></div>
          </div>

          <div className="about__text-block">
            <div className="divider reveal reveal-delay-2"></div>
            <p className="about__text reveal reveal-delay-3">
              A Blanc nasceu da convicção de que o cuidado dental pode ser
              uma experiência transformadora. Nosso espaço foi desenhado
              para dissolver a ansiedade — cada detalhe, da iluminação ao
              aroma, foi pensado para que você se sinta acolhido.
            </p>
            <p className="about__text reveal reveal-delay-4">
              Com mais de 15 anos dedicados à odontologia estética e
              restauradora, nossa equipe combina técnicas avançadas com
              uma abordagem profundamente humana. Aqui, cada sorriso
              é um projeto único.
            </p>

            {/* Estatísticas */}
            <div className="about__stats reveal reveal-delay-5">
              <div className="about__stat">
                <span className="about__stat-number">15+</span>
                <span className="about__stat-label">Anos de<br/>experiência</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">4.200+</span>
                <span className="about__stat-label">Sorrisos<br/>transformados</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">98%</span>
                <span className="about__stat-label">Satisfação<br/>dos pacientes</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Elementos Decorativos */}
        <div className="decor-element decor-circle" style={{ top: '10%', left: '-80px', opacity: '0.08' }}></div>
        <div className="decor-element decor-sparkle" style={{ bottom: '15%', right: '10%', animationDelay: '-1.5s' }}>
          <svg viewBox="0 0 24 24"><path d="M12 0l2.5 9.5 9.5 2.5-9.5 2.5-2.5 9.5-2.5-9.5-9.5-2.5 9.5-2.5z"/></svg>
        </div>
      </div>
    </section>

  )
}
