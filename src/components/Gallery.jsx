import './Gallery.css'

const odontoImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=700&q=80&auto=format&fit=crop',
    alt: 'Sala de atendimento premium com iluminação natural',
    span: 'gallery__item--tall',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=700&q=80&auto=format&fit=crop',
    alt: 'Equipamentos de alta tecnologia odontológica',
    span: '',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&q=80&auto=format&fit=crop',
    alt: 'Reabilitação e estética do sorriso',
    span: '',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?w=700&q=80&auto=format&fit=crop',
    alt: 'Sala de espera Clínica Honorato Odontologia',
    span: 'gallery__item--wide',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=700&q=80&auto=format&fit=crop',
    alt: 'Sorriso expressivo e saudável',
    span: '',
  },
]

const esteticaImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=700&q=80&auto=format&fit=crop',
    alt: 'Sala de tratamento estético com atmosfera relaxante',
    span: 'gallery__item--tall',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80&auto=format&fit=crop',
    alt: 'Cosmecêuticos e tratamentos de alta performance',
    span: '',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=700&q=80&auto=format&fit=crop',
    alt: 'Massagem e relaxamento facial',
    span: '',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=700&q=80&auto=format&fit=crop',
    alt: 'Ambiente spa Leia Honorato Estética',
    span: 'gallery__item--wide',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=700&q=80&auto=format&fit=crop',
    alt: 'Pele viçosa e saudável pós procedimento',
    span: '',
  },
]

export default function Gallery({ siteType }) {
  const isEstetica = siteType === 'estetica'
  const images = isEstetica ? esteticaImages : odontoImages

  const titleText = isEstetica ? (
    <>
      A sofisticação<br />
      em cada <em>detalhe</em>
    </>
  ) : (
    <>
      Cada detalhe,<br />
      <em>cuidadosamente</em> pensado
    </>
  )

  return (
    <section className="gallery section" id="resultados" aria-label="Resultados e ambiente">
      <div className="container">
        {/* Cabeçalho */}
        <div className="gallery__header">
          <span className="gallery__label reveal">Resultados</span>
          <h2 className="gallery__title reveal reveal-delay-1">
            {titleText}
          </h2>
        </div>

        {/* Grid masonry */}
        <div className="gallery__grid">
          {images.map((img, i) => (
            <div
              key={img.id}
              className={`gallery__item ${img.span} reveal reveal-delay-${Math.min(i + 1, 5)}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
              />
              <div className="gallery__item-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
