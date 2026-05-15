import { useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    name: 'Beatriz Andrade',
    treatment: 'Lentes de Contato',
    text: 'A experiência na Blanc foi completamente diferente de tudo que já vivi em consultórios. Desde o primeiro contato até o resultado final, cada etapa foi conduzida com um cuidado que me deixou genuinamente tranquila.',
    initials: 'BA',
  },
  {
    id: 2,
    name: 'Rafael Monteiro',
    treatment: 'Implante Unitário',
    text: 'Adiava o implante há anos por medo. Na Blanc, a equipe me explicou cada passo com tanta clareza que o medo simplesmente desapareceu. O resultado ficou natural — ninguém nota a diferença.',
    initials: 'RM',
  },
  {
    id: 3,
    name: 'Juliana Peixoto',
    treatment: 'Clareamento + Facetas',
    text: 'Chorei quando vi meu sorriso novo. Não foi só estética — foi como se tivessem devolvido minha confiança. O ambiente é lindo, a equipe é atenciosa, e o resultado superou todas as expectativas.',
    initials: 'JP',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="testimonials section" id="depoimentos" aria-label="Depoimentos de pacientes">
      <div className="container">
        <div className="testimonials__layout">
          {/* Lado esquerdo: cabeçalho */}
          <div className="testimonials__header">
            <span className="testimonials__label reveal">Depoimentos</span>
            <h2 className="testimonials__title reveal reveal-delay-1">
              Quem confia,<br />
              <em>recomenda</em>
            </h2>
            <div className="divider reveal reveal-delay-2"></div>
            <p className="testimonials__subtitle reveal reveal-delay-3">
              Histórias reais de quem transformou o sorriso e a autoestima
              com a Blanc.
            </p>
          </div>

          {/* Lado direito: depoimento ativo */}
          <div className="testimonials__content reveal reveal-delay-2">
            <div className="testimonials__quote-mark" aria-hidden="true">
              <svg width="48" height="36" viewBox="0 0 48 36" fill="none">
                <path d="M0 36V21.6C0 14.4 1.8 9 5.4 5.4C9 1.8 14.4 0 21.6 0V7.2C18 7.2 15.3 8.1 13.5 9.9C11.7 11.7 10.8 14.4 10.8 18H21.6V36H0ZM26.4 36V21.6C26.4 14.4 28.2 9 31.8 5.4C35.4 1.8 40.8 0 48 0V7.2C44.4 7.2 41.7 8.1 39.9 9.9C38.1 11.7 37.2 14.4 37.2 18H48V36H26.4Z" fill="currentColor"/>
              </svg>
            </div>

            <blockquote className="testimonials__text" key={active}>
              {testimonials[active].text}
            </blockquote>

            <div className="testimonials__author">
              <div className="testimonials__avatar">
                {testimonials[active].initials}
              </div>
              <div className="testimonials__author-info">
                <span className="testimonials__author-name">
                  {testimonials[active].name}
                </span>
                <span className="testimonials__author-treatment">
                  {testimonials[active].treatment}
                </span>
              </div>
            </div>

            {/* Navegação */}
            <div className="testimonials__nav">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === active ? 'testimonials__dot--active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Ver depoimento ${i + 1}`}
                  id={`testimonial-dot-${i}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
