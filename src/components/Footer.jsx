import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" id="contato" aria-label="Rodapé e informações de contato">
      <div className="container">
        {/* Linha principal */}
        <div className="footer__main">
          {/* Coluna 1: Marca */}
          <div className="footer__brand reveal">
            <div className="footer__logo">
              <span className="footer__logo-text">Blanc</span>
              <span className="footer__logo-dot"></span>
            </div>
            <p className="footer__tagline">
              Odontologia que cuida com<br />
              a delicadeza que você merece.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="footer__col reveal reveal-delay-1">
            <h4 className="footer__col-title">Navegação</h4>
            <ul className="footer__col-list">
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#tratamentos">Tratamentos</a></li>
              <li><a href="#resultados">Resultados</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
              <li><a href="#agendar">Agendamento</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div className="footer__col reveal reveal-delay-2">
            <h4 className="footer__col-title">Contato</h4>
            <ul className="footer__col-list">
              <li>
                <a href="tel:+5511984231567">+55 (11) 98423-1567</a>
              </li>
              <li>
                <a href="mailto:contato@blancodonto.com.br">contato@blancodonto.com.br</a>
              </li>
              <li>
                Rua Augusta, 2.740 — Sala 82<br />
                Jardins, São Paulo — SP
              </li>
            </ul>
          </div>

          {/* Coluna 4: Horário */}
          <div className="footer__col reveal reveal-delay-3">
            <h4 className="footer__col-title">Horário</h4>
            <ul className="footer__col-list">
              <li>Segunda a Sexta<br /><strong>08h — 18h</strong></li>
              <li>Sábado<br /><strong>08h — 13h</strong></li>
              <li>Domingo<br /><span className="footer__closed">Fechado</span></li>
            </ul>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="footer__bottom reveal">
          <p className="footer__copyright">
            &copy; {currentYear} Blanc Odontologia. Todos os direitos reservados.
          </p>
          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="Instagram" id="social-instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="#" className="footer__social-link" aria-label="WhatsApp" id="social-whatsapp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
