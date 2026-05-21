import { useState } from 'react'
import './Booking.css'

export default function BookingForm({ isModal = false, onClose, siteType }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    date: '',
    message: '',
  })
  
  const [submitted, setSubmitted] = useState(false)

  const isEstetica = siteType === 'estetica'

  const titleText = isEstetica ? (
    <>
      Agende seu<br />
      <em>procedimento</em>
    </>
  ) : (
    <>
      Agende sua<br />
      <em>consulta</em>
    </>
  )

  const descText = isEstetica
    ? 'Escolha a data de preferência. Nossa equipe entrará em contato em instantes via WhatsApp para confirmar o seu horário.'
    : 'Escolha o melhor dia e horário. Nossa equipe entrará em contato para confirmar seu agendamento em poucos minutos.'

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      if (isModal && onClose) {
        onClose()
      }
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        treatment: '',
        date: '',
        message: '',
      })
    }, 3000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className={`booking-form ${isModal ? 'booking-form--modal' : ''}`}>
      {submitted ? (
        <div className="booking-form__success">
          <div className="booking-form__success-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>Solicitação Recebida!</h3>
          <p>
            Em instantes nossa equipe entrará em contato pelo telefone informado para confirmar os detalhes do seu agendamento.
          </p>
        </div>
      ) : (
        <div className="booking-form__grid">
          {/* Lado do Texto */}
          <div className="booking-form__info">
            <h2>{titleText}</h2>
            <p>{descText}</p>
            
            <div className="booking-form__contact-details">
              <div className="booking-form__contact-item">
                <span className="booking-form__contact-icon">📞</span>
                <div>
                  <h4>Telefone / WhatsApp</h4>
                  <p>(18) 99999-8888</p>
                </div>
              </div>
              <div className="booking-form__contact-item">
                <span className="booking-form__contact-icon">📍</span>
                <div>
                  <h4>Localização</h4>
                  <p>Rua José Colnago, 03 - Vila Nova, Regente Feijó/SP</p>
                </div>
              </div>
            </div>

          </div>

          {/* Formulário */}
          <form className="booking-form__fields" onSubmit={handleSubmit} id="schedule-form">
            <div className="form-group">
              <label htmlFor="name" className="sr-only">Nome Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="phone" className="sr-only">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="WhatsApp / Telefone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="date" className="sr-only">Data Preferencial</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="treatment" className="sr-only">Tratamento</label>
              <select
                id="treatment"
                name="treatment"
                value={formData.treatment}
                onChange={handleChange}
                required
              >
                <option value="">Selecione o procedimento de interesse</option>
                {isEstetica ? (
                  <>
                    <option value="harmonizacao">Harmonização Facial</option>
                    <option value="botox">Aplicação de Botox</option>
                    <option value="bioestimuladores">Bioestimuladores de Colágeno</option>
                    <option value="tecnologias">Tecnologias & Peelings</option>
                    <option value="outro">Outro Procedimento Estético</option>
                  </>
                ) : (
                  <>
                    <option value="estetica">Estética Dental</option>
                    <option value="implantes">Implantes Dentários</option>
                    <option value="ortodontia">Ortodontia Invisível</option>
                    <option value="preventiva">Odontologia Preventiva</option>
                    <option value="outro">Outro Procedimento Odontológico</option>
                  </>
                )}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="sr-only">Mensagem (opcional)</label>
              <textarea
                id="message"
                name="message"
                placeholder="Mensagem adicional ou observações"
                value={formData.message}
                onChange={handleChange}
                rows="3"
              ></textarea>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', border: 'none' }} id="submit-booking">
              Solicitar Agendamento
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
