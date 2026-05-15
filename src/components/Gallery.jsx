import './Gallery.css'

const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=700&q=80&auto=format&fit=crop',
    alt: 'Ambiente da clínica com iluminação natural',
    span: 'gallery__item--tall',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=700&q=80&auto=format&fit=crop',
    alt: 'Equipamento odontológico de última geração',
    span: '',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&q=80&auto=format&fit=crop',
    alt: 'Procedimento estético sendo realizado',
    span: '',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?w=700&q=80&auto=format&fit=crop',
    alt: 'Sala de espera elegante e acolhedora',
    span: 'gallery__item--wide',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=700&q=80&auto=format&fit=crop',
    alt: 'Sorriso natural após tratamento estético',
    span: '',
  },
]

export default function Gallery() {
  return (
    <section className="gallery section" id="resultados" aria-label="Resultados e ambiente">
      <div className="container">
        {/* Cabeçalho */}
        <div className="gallery__header">
          <span className="gallery__label reveal">Resultados</span>
          <h2 className="gallery__title reveal reveal-delay-1">
            Cada detalhe,<br />
            <em>cuidadosamente</em> pensado
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
