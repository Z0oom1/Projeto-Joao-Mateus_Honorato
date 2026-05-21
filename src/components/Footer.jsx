import './Footer.css'

export default function Footer({ siteType }) {
  const isEstetica = siteType === 'estetica'

  const professionalName = isEstetica ? 'Leia Honorato' : 'Dr. João Mateus'
  const descText = isEstetica 
    ? 'Procedimentos estéticos faciais avançados e rejuvenescimento natural de alto padrão em um ambiente spa exclusivo.'
    : 'Odontologia de alta performance, reabilitação oral e estética do sorriso com a sensibilidade de um spa premium.'
  const logoSrc = isEstetica ? '/logos/logo-leiah.png' : '/logos/logo-joaom.png'

  return (
    <footer className="footer" id="contato" aria-label="Rodapé da página">
      <div className="container">
        <div className="footer__main">
          {/* Logo e descrição */}
          <div className="footer__col footer__col--brand">
            <a href="#" className="footer__logo" aria-label="Voltar ao início">
              <img src={logoSrc} alt={professionalName} className="footer__logo-img" />
            </a>
            <p className="footer__desc">
              {descText}
            </p>
            <div className="footer__socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://wa.me/5511999998888" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="footer__social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="footer__col">
            <h3 className="footer__col-title">Navegação</h3>
            <ul className="footer__col-list" role="list">
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Procedimentos</a></li>
              <li><a href="#galeria">Resultados</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
            </ul>
          </div>

          {/* Horários */}
          <div className="footer__col">
            <h3 className="footer__col-title">Horários</h3>
            <ul className="footer__col-list" role="list">
              <li>
                <strong>Segunda a Sexta:</strong>
                <span className="footer__time">08:00 – 20:00</span>
              </li>
              <li>
                <strong>Sábado:</strong>
                <span className="footer__time">08:00 – 14:00</span>
              </li>
              <li>
                <strong>Domingo:</strong>
                <span className="footer__closed">Fechado</span>
              </li>
            </ul>
          </div>

          {/* Contato e Localização */}
          <div className="footer__col">
            <h3 className="footer__col-title">Contato</h3>
            <address className="footer__address">
              <p className="footer__address-text">Rua José Colnago, 03 — Vila Nova</p>
              <p className="footer__address-text">Regente Feijó/SP — CEP 19570-000</p>
              <p className="footer__phone-link">
                <a href="tel:+5518999998888">(18) 99999-8888</a>
              </p>
              <p className="footer__email-link">
                <a href="mailto:contato@facesmileclinic.com.br">contato@facesmileclinic.com.br</a>
              </p>
            </address>
          </div>
        </div>

        {/* Mapa Estilizado Integrado no Rodapé */}
        <div className="footer__map-wrap">
          <iframe
            title="Mapa de Localização FaceSmile Clinic"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.0898516084803!2d-51.30604169999999!3d-22.2177306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94943f6087532dfb%3A0x7d02521c7d422a55!2sR.%20Jos%C3%A9%20Colnago%2C%203%20-%20Vila%20Nova%2C%20Regente%20Feij%C3%B3%20-%20SP%2C%2019570-000!5e0!3m2!1spt-BR!2sbr!4v1716262400000!5e0"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="footer__map-iframe"
          ></iframe>
        </div>

        {/* Rodapé inferior */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} FaceSmile Clinic. Todos os direitos reservados.
          </p>
          <div className="footer__parent-branding">
            <span>Uma clínica integrada</span>
            <img src="/logos/facesmile-icone.png" alt="FaceSmile Icon" className="footer__parent-icon" />
            <span className="footer__parent-name">FaceSmile Clinic</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
