import './Services.css'

const services = [
  {
    id: 'estetica',
    number: '01',
    title: 'Estética Dental',
    description: 'Facetas, lentes de contato e clareamento com técnicas minimamente invasivas para um sorriso naturalmente harmonioso.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'implantes',
    number: '02',
    title: 'Implantes',
    description: 'Reabilitação completa com implantes de última geração, planejamento digital 3D e recuperação acelerada.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'ortodontia',
    number: '03',
    title: 'Ortodontia Invisível',
    description: 'Alinhadores transparentes que corrigem seu sorriso de forma discreta, confortável e com resultados previsíveis.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'preventiva',
    number: '04',
    title: 'Odontologia Preventiva',
    description: 'Check-ups completos, limpeza profissional e acompanhamento personalizado para manter a saúde bucal em dia.',
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&q=80&auto=format&fit=crop',
  },
]

export default function Services() {
  return (
    <section className="services section" id="tratamentos" aria-label="Tratamentos">
      <div className="container">
        {/* Cabeçalho */}
        <div className="services__header">
          <span className="services__label reveal">Tratamentos</span>
          <h2 className="services__title reveal reveal-delay-1">
            Cuidado que se vê<br />
            no <em>resultado</em>
          </h2>
          <p className="services__subtitle reveal reveal-delay-2">
            Cada procedimento é conduzido com atenção cirúrgica e
            sensibilidade estética — porque seu sorriso merece os dois.
          </p>
        </div>

        {/* Grid de tratamentos */}
        <div className="services__grid">
          {services.map((service, i) => (
            <article
              key={service.id}
              className={`services__card reveal reveal-delay-${Math.min(i + 1, 4)}`}
              id={`service-${service.id}`}
            >
              <div className="services__card-image">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />
                <div className="services__card-overlay"></div>
              </div>
              
              <div className="services__card-content">
                <div className="services__card-top">
                  <span className="services__card-number">{service.number}</span>
                  <h3 className="services__card-title">{service.title}</h3>
                </div>
                <p className="services__card-desc">{service.description}</p>
                <a href="#agendar" className="services__card-link">
                  <span>Saiba mais</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
