import './Services.css'

const odontoServices = [
  {
    id: 'estetica-dental',
    number: '01',
    title: 'Estética Dental',
    description: 'Facetas de porcelana, lentes de contato e clareamento dental guiados por planejamento digital para um sorriso naturalmente harmônico.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'implantes',
    number: '02',
    title: 'Implantes Dentários',
    description: 'Reabilitação oral de alta precisão com implantes nacionais e importados, planejados em ambiente digital 3D e cirurgia minimamente invasiva.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'ortodontia-invisivel',
    number: '03',
    title: 'Ortodontia Invisível',
    description: 'Correção de alinhamento com alinhadores transparentes avançados, oferecendo discrição total, conforto e rapidez nos resultados.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'preventiva',
    number: '04',
    title: 'Odontologia Preventiva',
    description: 'Profilaxia avançada, raspagem ultrassônica e check-ups fotográficos preventivos periódicos para manutenção integral da sua saúde bucal.',
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&q=80&auto=format&fit=crop',
  },
]

const esteticaServices = [
  {
    id: 'harmonizacao-facial',
    number: '01',
    title: 'Harmonização Facial',
    description: 'Preenchimentos estratégicos com ácido hialurônico para devolver volumes, sustentar tecidos e valorizar a beleza dos seus contornos naturais.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'botox',
    number: '02',
    title: 'Aplicação de Botox',
    description: 'Prevenção e suavização de linhas de expressão dinâmicas na testa, glabela e rugas ao redor dos olhos, mantendo a expressividade leve e natural.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'bioestimuladores',
    number: '03',
    title: 'Bioestimuladores de Colágeno',
    description: 'Tratamentos de ponta para combater a flacidez facial e corporal (braços, glúteos e abdômen), estimulando a produção natural de colágeno da pele.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'tecnologias-peelings',
    number: '04',
    title: 'Tecnologias & Peelings',
    description: 'Renovação celular profunda para controle de poros, cicatrizes de acne, melasma e manchas solares através de peelings e laser microfocado.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80&auto=format&fit=crop',
  },
]

export default function Services({ siteType }) {
  const isEstetica = siteType === 'estetica'
  const services = isEstetica ? esteticaServices : odontoServices

  const labelText = isEstetica ? 'Procedimentos' : 'Tratamentos'

  const titleText = isEstetica ? (
    <>
      Sua melhor versão,<br />
      com <em>naturalidade</em>
    </>
  ) : (
    <>
      Cuidado que se vê<br />
      no <em>resultado</em>
    </>
  )

  const subtitleText = isEstetica
    ? 'Técnicas avançadas focadas em rejuvenescimento, sustentação e equilíbrio dos traços faciais e contornos corporais.'
    : 'Cada procedimento é conduzido com atenção cirúrgica e sensibilidade estética — porque seu sorriso merece os dois.'

  return (
    <section className="services section" id="tratamentos" aria-label="Tratamentos">
      <div className="container">
        {/* Cabeçalho */}
        <div className="services__header">
          <span className="services__label reveal">{labelText}</span>
          <h2 className="services__title reveal reveal-delay-1">
            {titleText}
          </h2>
          <p className="services__subtitle reveal reveal-delay-2">
            {subtitleText}
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
                {/* Ícone Decorativo */}
                <div className="services__card-icon-decor">
                  <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                </div>
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
