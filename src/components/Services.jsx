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

        {/* Lista de tratamentos */}
        <div className="services__list">
          {services.map((service, i) => (
            <article
              key={service.id}
              className={`services__item reveal reveal-delay-${Math.min(i + 1, 4)}`}
              id={`service-${service.id}`}
            >
              <div className="services__item-content">
                <span className="services__item-number">{service.number}</span>
                <h3 className="services__item-title">{service.title}</h3>
                <p className="services__item-desc">{service.description}</p>
                <a href="#agendar" className="services__item-link">
                  Saiba mais
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              <div className="services__item-image">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
