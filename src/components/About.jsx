import './About.css'

export default function About({ siteType }) {
  const isEstetica = siteType === 'estetica'

  const titleText = isEstetica ? (
    <>
      Onde a beleza<br />
      encontra a <em>harmonia</em>
    </>
  ) : (
    <>
      Onde o cuidado<br />
      encontra a <em>elegância</em>
    </>
  )

  const imageSrc = isEstetica 
    ? '/team/leia-honorato-real.webp'
    : '/team/dr-joao-real.webp'

  const imageAlt = isEstetica 
    ? 'Leia Honorato, especialista em Estética Avançada na FaceSmile'
    : 'Dr. João Mateus, cirurgião-dentista e fundador da FaceSmile'

  const text1 = isEstetica
    ? 'A clínica de estética Leia Honorato nasceu com a missão de oferecer tratamentos faciais e corporais personalizados de alta performance. Acreditamos que a verdadeira beleza se manifesta quando cuidamos da saúde da pele de dentro para fora, respeitando as características naturais e a harmonia de cada rosto.'
    : 'A FaceSmile Odontologia foi fundada pelo Dr. João Mateus com o propósito de transformar a ida ao dentista em uma experiência relaxante e acolhedora. Nosso espaço premium foi projetado com a sofisticação e o cuidado de um spa, aliando tecnologia digital de ponta a uma abordagem profundamente humana.'

  const text2 = isEstetica
    ? 'Especialista em rejuvenescimento facial, harmonização de traços e terapias corporais avançadas, Leia Honorato adota técnicas modernas e seguras para entregar resultados refinados e naturais que fortalecem a autoestima e o bem-estar diário.'
    : 'Com ampla experiência em implantes, reabilitação oral e estética do sorriso, Dr. João Mateus elabora tratamentos sob medida. Aliamos materiais de alta biocompatibilidade e planejamento 3D para criar sorrisos perfeitos, saudáveis e duradouros.'

  const stats = isEstetica 
    ? [
        { value: '10+', label: 'Anos de\nexperiência' },
        { value: '3.500+', label: 'Procedimentos\nrealizados' },
        { value: '99%', label: 'Autoestima\nrenovada' }
      ]
    : [
        { value: '12+', label: 'Anos de\nexperiência' },
        { value: '5.000+', label: 'Sorrisos\ntransformados' },
        { value: '98%', label: 'Satisfação\ndos pacientes' }
      ]

  return (
    <section className="about section" id="sobre" aria-label="Sobre a clínica">
      <div className="container">
        {/* Cabeçalho da seção */}
        <div className="about__header">
          <span className="about__label reveal">Sobre Nós</span>
          <h2 className="about__title reveal reveal-delay-1">
            {titleText}
          </h2>
        </div>

        {/* Grid assimétrico: Imagem + Texto */}
        <div className="about__grid">
          <div className="about__image-block reveal reveal-delay-2">
            <div className="about__image-wrapper">
              <img
                src={imageSrc}
                alt={imageAlt}
                loading="lazy"
              />
            </div>
            <div className="about__image-accent"></div>
          </div>

          <div className="about__text-block">
            <div className="divider reveal reveal-delay-2"></div>
            <p className="about__text reveal reveal-delay-3">
              {text1}
            </p>
            <p className="about__text reveal reveal-delay-4">
              {text2}
            </p>

            {/* Estatísticas */}
            <div className="about__stats reveal reveal-delay-5">
              {stats.map((stat, idx) => (
                <div key={idx} className="about__stat">
                  <span className="about__stat-number">{stat.value}</span>
                  <span className="about__stat-label">
                    {stat.label.split('\n')[0]}<br/>{stat.label.split('\n')[1]}
                  </span>
                </div>
              ))}
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
