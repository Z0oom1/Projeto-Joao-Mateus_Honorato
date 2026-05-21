import { useEffect, useState } from 'react'
import './LandingPage.css'

export default function LandingPage({ onSelectClinic }) {
  const [hoveredSide, setHoveredSide] = useState(null)

  // Rola para o topo ao montar
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="landing" id="landing" aria-label="FaceSmile Clinic — Escolha sua Clínica">
      {/* Header com o Logo Completo FaceSmile - Em Destaque Dinâmico */}
      <header className={`landing__header ${
        hoveredSide === 'odonto' ? 'landing__header--odonto' : 
        hoveredSide === 'estetica' ? 'landing__header--estetica' : ''
      }`}>
        <div className="landing__logo-wrap">
          <img
            src="/logos/facesmile.png"
            alt="FaceSmile Clinic — Odontologia & Estética"
            className="landing__logo-full"
          />
        </div>
        <p className="landing__subtitle">Odontologia & Estética Avançada</p>
      </header>

      {/* Primeiro Fold: Split Screen de Entrada */}
      <div className="landing__split">
        {/* Lado Esquerdo - Odontologia (Dr. João Mateus) */}
        <div
          className="landing__side landing__side--odonto"
          onMouseEnter={() => setHoveredSide('odonto')}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => onSelectClinic('odonto')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onSelectClinic('odonto')}
          aria-label="Acessar Odontologia — Dr. João Mateus"
        >
          {/* Ambient Glows */}
          <div className="landing__side-glow"></div>
          
          <div className="landing__side-content">
            <span className="landing__side-tag">Doutor</span>
            <h2 className="landing__side-name">Dr. João Mateus</h2>
            <span className="landing__side-category">Odontologia</span>
            <p className="landing__side-desc">
              Reabilitação oral de alta performance, lentes de contato e procedimentos cirúrgicos de precisão estética.
            </p>
            
            <div className="landing__side-cta">
              <span>Acessar Clínica</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Lado Direito - Estética (Leia Honorato) */}
        <div
          className="landing__side landing__side--estetica"
          onMouseEnter={() => setHoveredSide('estetica')}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => onSelectClinic('estetica')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onSelectClinic('estetica')}
          aria-label="Acessar Estética — Leia Honorato"
        >
          {/* Ambient Glows */}
          <div className="landing__side-glow"></div>

          <div className="landing__side-content">
            <span className="landing__side-tag">Especialista</span>
            <h2 className="landing__side-name">Leia Honorato</h2>
            <span className="landing__side-category">Estética</span>
            <p className="landing__side-desc">
              Harmonização facial, bioestimuladores de colágeno, botox e protocols avançados de rejuvenescimento natural.
            </p>

            <div className="landing__side-cta">
              <span>Acessar Estética</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Indicador de Scroll para mais infos */}
        <div className="landing__scroll-indicator">
          <span className="landing__scroll-text">Conheça nossa clínica integrada</span>
          <div className="landing__scroll-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>


      {/* Segundo Fold: Sobre a Clínica Integrada */}
      <div className="landing__about-section">
        <div className="landing__container">
          <div className="landing__about-content reveal">
            <span className="landing__section-label">A Experiência Integrada</span>
            <h2 className="landing__about-title">Onde a saúde do sorriso e a harmonia facial se encontram</h2>
            <p className="landing__about-desc">
              A <strong>FaceSmile Clinic</strong> nasceu da visão de unir duas especialidades fundamentais em um único ecossistema de alto padrão. Acreditamos que a beleza autêntica reside no equilíbrio perfeito entre a saúde bucal e os contornos faciais, cuidando de cada paciente de forma holística e personalizada.
            </p>
          </div>

          {/* Cards dos Especialistas (Formações & Info Profissional) */}
          <div className="landing__team-grid">
            
            {/* Card Dr. João Mateus */}
            <div className="landing__team-card landing__team-card--odonto">
              <div className="landing__team-badge">Odontologia</div>

              {/* Foto + Identidade */}
              <div className="landing__team-profile">
                <div className="landing__team-photo-wrap landing__team-photo-wrap--odonto">
                  <img
                    src="/team/dr-joao-real.png"
                    alt="Dr. João Mateus — Cirurgião-Dentista"
                    className="landing__team-photo"
                  />
                </div>
                <div className="landing__team-header">
                  <h3>Dr. João Mateus</h3>
                  <p className="landing__team-subtitle">Cirurgião-Dentista</p>
                  <p className="landing__team-cro">CRO-SP • Implantodontia & Estética</p>
                </div>
              </div>

              <div className="landing__team-divider"></div>
              
              <div className="landing__team-info">
                <h4>Formação & Títulos</h4>
                <ul className="landing__team-list">
                  <li>Graduação em Odontologia pela USP.</li>
                  <li>Especialista em Implantodontia e Prótese Estética.</li>
                  <li>Master em Lentes de Contato Cerâmicas e Facetas.</li>
                  <li>Membro da Sociedade Brasileira de Odontologia Estética (SBOE).</li>
                </ul>
                
                <h4>Área de Atuação</h4>
                <p className="landing__team-desc">
                  Com mais de 10 anos de prática clínica, é focado em reabilitações orais completas, resgatando a autoestima e a funcionalidade mastigatória com alta precisão e tecnologia digital.
                </p>
              </div>

              <button 
                onClick={() => onSelectClinic('odonto')}
                className="landing__team-btn landing__team-btn--odonto"
              >
                Visitar Portal de Odontologia
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Card Leia Honorato */}
            <div className="landing__team-card landing__team-card--estetica">
              <div className="landing__team-badge">Estética Avançada</div>

              {/* Foto + Identidade */}
              <div className="landing__team-profile">
                <div className="landing__team-photo-wrap landing__team-photo-wrap--estetica">
                  <img
                    src="/team/leia-honorato-real.png"
                    alt="Leia Honorato — Biomédica Esteta"
                    className="landing__team-photo"
                  />
                </div>
                <div className="landing__team-header">
                  <h3>Leia Honorato</h3>
                  <p className="landing__team-subtitle">Biomédica Esteta</p>
                  <p className="landing__team-cro">CRBM-SP • Harmonização Facial</p>
                </div>
              </div>

              <div className="landing__team-divider"></div>

              <div className="landing__team-info">
                <h4>Formação & Títulos</h4>
                <ul className="landing__team-list">
                  <li>Graduação em Biomedicina Estética.</li>
                  <li>Pós-graduação em Harmonização Facial Avançada.</li>
                  <li>Certificação em Fios de Sustentação de PDO e Bioestimuladores.</li>
                  <li>Mentora clínica de protocolos de rejuvenescimento facial natural.</li>
                </ul>

                <h4>Área de Atuação</h4>
                <p className="landing__team-desc">
                  Especialista em realçar a beleza natural de cada paciente. Desenvolve protocolos personalizados focados no rejuvenescimento preventivo e harmonização sutil, garantindo resultados elegantes e não-artificiais.
                </p>
              </div>

              <button 
                onClick={() => onSelectClinic('estetica')}
                className="landing__team-btn landing__team-btn--estetica"
              >
                Visitar Portal de Estética
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

          </div>

          {/* Diferenciais */}
          <div className="landing__diferenciais reveal">
            <h3 className="landing__diferenciais-title">Diferenciais FaceSmile</h3>
            <div className="landing__diferenciais-grid">
              <div className="landing__diferencial-item">
                <span className="landing__diferencial-num">01</span>
                <h4>Planejamento Multidisciplinar</h4>
                <p>Sorriso e face integrados em um planejamento conjunto para simetria ideal.</p>
              </div>
              <div className="landing__diferencial-item">
                <span className="landing__diferencial-num">02</span>
                <h4>Tecnologia de Ponta</h4>
                <p>Anestesia sem dor, scanner 3D intraoral e simulações digitais em 4K.</p>
              </div>
              <div className="landing__diferencial-item">
                <span className="landing__diferencial-num">03</span>
                <h4>Conforto & Acolhimento</h4>
                <p>Ambiente aromático relaxante, som ambiente relaxante e café gourmet premium.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Terceiro Fold: Localização & Horários com Mapa Estilizado */}
      <div className="landing__location-section reveal">
        <div className="landing__container">
          <div className="landing__location-grid">
            <div className="landing__location-info">
              <span className="landing__section-label">Onde Estamos</span>
              <h2 className="landing__location-title">Visite a nossa Clínica Integrada</h2>
              <p className="landing__location-text">
                Venha conhecer o nosso espaço planejado com muito carinho para o seu conforto absoluto. Contamos com salas de atendimento personalizadas, tecnologia de diagnóstico digital avançado e ambiente acolhedor de spa.
              </p>
              
              <div className="landing__location-details">
                <div className="landing__detail-box">
                  <h4>Endereço</h4>
                  <p>Rua José Colnago, 03 — Vila Nova</p>
                  <p>Regente Feijó/SP — CEP 19570-000</p>
                </div>
                
                <div className="landing__detail-box">
                  <h4>Contatos Diretos</h4>
                  <p>WhatsApp/Tel: <a href="tel:+5518999998888">(18) 99999-8888</a></p>
                  <p>E-mail: <a href="mailto:contato@facesmileclinic.com.br">contato@facesmileclinic.com.br</a></p>
                </div>

                <div className="landing__detail-box">
                  <h4>Horário de Atendimento</h4>
                  <p>Segunda a Sexta: 08:00 às 20:00</p>
                  <p>Sábado: 08:00 às 14:00</p>
                </div>
              </div>
            </div>

            <div className="landing__location-map-wrap">
              <div className="landing__map-frame">
                <iframe
                  title="Mapa de Localização FaceSmile Clinic"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.0898516084803!2d-51.30604169999999!3d-22.2177306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94943f6087532dfb%3A0x7d02521c7d422a55!2sR.%20Jos%C3%A9%20Colnago%2C%203%20-%20Vila%20Nova%2C%20Regente%20Feij%C3%B3%20-%20SP%2C%2019570-000!5e0!3m2!1spt-BR!2sbr!4v1716262400000!5e0"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="landing__map-iframe"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer da Seleção FaceSmile */}
      <footer className="landing__footer-main reveal">
        <div className="landing__container">
          <div className="landing__footer-content">
            <img src="/logos/facesmile.png" alt="FaceSmile Logo" className="landing__footer-logo" />
            <p className="landing__footer-desc">Responsabilidade Técnica: Dr. João Mateus (CRO-SP) & Leia Honorato (CRBM-SP)</p>
            <p className="landing__footer-contact">
              Rua José Colnago, 03, Vila Nova — Regente Feijó/SP | Contato: <a href="tel:+5518999998888">(18) 99999-8888</a>
            </p>
            <p className="landing__footer-copy">
              © {new Date().getFullYear()} FaceSmile Clinic. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}
