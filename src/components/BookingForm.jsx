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
  const [errors, setErrors] = useState({})

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

  // Validação básica do formulário
  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório'
    } else if (!/^[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Telefone inválido'
    }

    if (!formData.date) {
      newErrors.date = 'Data é obrigatória'
    }

    if (!formData.treatment) {
      newErrors.treatment = 'Selecione um procedimento'
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

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
      setErrors({})
    }, 3000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Limpar erro do campo quando o usuário começa a digitar
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  return (
    <div className={`booking-form ${isModal ? 'booking-form--modal' : ''}`}>
      {submitted ? (
        <div className="booking-form__success" role="status" aria-live="polite">
          <div className="booking-form__success-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
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
                <span className="booking-form__contact-icon" aria-hidden="true">
                  📞
                </span>
                <div>
                  <h4>Telefone / WhatsApp</h4>
                  <a href="tel:+5518999998888">(18) 99999-8888</a>
                </div>
              </div>
              <div className="booking-form__contact-item">
                <span className="booking-form__contact-icon" aria-hidden="true">
                  📍
                </span>
                <div>
                  <h4>Localização</h4>
                  <p>Rua José Colnago, 03 - Vila Nova, Regente Feijó/SP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <form className="booking-form__fields" onSubmit={handleSubmit} id="schedule-form" noValidate>
            {/* Nome Completo */}
            <div className="form-group">
              <label htmlFor="name">Nome Completo *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <span id="name-error" className="form-error" role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Telefone e Data */}
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="phone">Telefone / WhatsApp *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(18) 99999-8888"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <span id="phone-error" className="form-error" role="alert">
                    {errors.phone}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="date">Data Preferencial *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-invalid={errors.date ? 'true' : 'false'}
                  aria-describedby={errors.date ? 'date-error' : undefined}
                />
                {errors.date && (
                  <span id="date-error" className="form-error" role="alert">
                    {errors.date}
                  </span>
                )}
              </div>
            </div>

            {/* Email (opcional) */}
            <div className="form-group">
              <label htmlFor="email">Email (opcional)</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seu.email@exemplo.com"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <span id="email-error" className="form-error" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Procedimento */}
            <div className="form-group">
              <label htmlFor="treatment">Procedimento de Interesse *</label>
              <select
                id="treatment"
                name="treatment"
                value={formData.treatment}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={errors.treatment ? 'true' : 'false'}
                aria-describedby={errors.treatment ? 'treatment-error' : undefined}
              >
                <option value="">Selecione o procedimento</option>
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
              {errors.treatment && (
                <span id="treatment-error" className="form-error" role="alert">
                  {errors.treatment}
                </span>
              )}
            </div>

            {/* Mensagem Adicional */}
            <div className="form-group">
              <label htmlFor="message">Mensagem Adicional (opcional)</label>
              <textarea
                id="message"
                name="message"
                placeholder="Deixe uma mensagem ou observação"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                aria-describedby="message-hint"
              ></textarea>
              <small id="message-hint">Máximo 500 caracteres</small>
            </div>

            {/* Botão Submit */}
            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%', border: 'none' }}
              id="submit-booking"
              aria-label="Enviar solicitação de agendamento"
            >
              Solicitar Agendamento
            </button>

            {/* Indicador de campos obrigatórios */}
            <small className="form-required-note">* Campos obrigatórios</small>
          </form>
        </div>
      )}
    </div>
  )
}
