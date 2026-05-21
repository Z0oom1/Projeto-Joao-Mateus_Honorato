import { useState } from 'react'
import './Booking.css'

export default function BookingForm({ isModal = false, onClose, siteType }) {
  const [currentStep, setCurrentStep] = useState(1)
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
  const totalSteps = 3

  // Validação por etapa
  const validateStep = (step) => {
    const newErrors = {}

    if (step === 1) {
      if (!formData.name.trim()) {
        newErrors.name = 'Nome é obrigatório'
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Telefone é obrigatório'
      } else if (!/^[\d\s\-\(\)]+$/.test(formData.phone)) {
        newErrors.phone = 'Telefone inválido'
      }
    }

    if (step === 2) {
      if (!formData.treatment) {
        newErrors.treatment = 'Selecione um procedimento'
      }
      if (!formData.date) {
        newErrors.date = 'Data é obrigatória'
      }
    }

    if (step === 3) {
      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Email inválido'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    setCurrentStep(currentStep - 1)
    setErrors({})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateStep(currentStep)) {
      return
    }

    setSubmitted(true)
    setTimeout(() => {
      if (isModal && onClose) {
        onClose()
      }
      setSubmitted(false)
      setCurrentStep(1)
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
        <>
          {/* Indicador de Progresso */}
          <div className="booking-form__progress">
            <div className="booking-form__progress-bar">
              <div
                className="booking-form__progress-fill"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
            <p className="booking-form__progress-text">
              Passo <span className="booking-form__progress-current">{currentStep}</span> de{' '}
              <span className="booking-form__progress-total">{totalSteps}</span>
            </p>
          </div>

          {/* Formulário Multi-Etapas */}
          <form className="booking-form__steps" onSubmit={handleSubmit} noValidate>
            {/* PASSO 1: Identificação */}
            {currentStep === 1 && (
              <div className="booking-form__step booking-form__step--active" role="region" aria-label="Passo 1: Seus dados">
                <div className="booking-form__step-header">
                  <h2>Seus Dados</h2>
                  <p>Comece informando seu nome e telefone</p>
                </div>

                <div className="booking-form__step-content">
                  {/* Nome */}
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

                  {/* Telefone */}
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
                </div>
              </div>
            )}

            {/* PASSO 2: Preferências */}
            {currentStep === 2 && (
              <div className="booking-form__step booking-form__step--active" role="region" aria-label="Passo 2: Procedimento e data">
                <div className="booking-form__step-header">
                  <h2>{isEstetica ? 'Procedimento' : 'Consulta'}</h2>
                  <p>Escolha o procedimento e a data preferencial</p>
                </div>

                <div className="booking-form__step-content">
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

                  {/* Data */}
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
              </div>
            )}

            {/* PASSO 3: Finalização */}
            {currentStep === 3 && (
              <div className="booking-form__step booking-form__step--active" role="region" aria-label="Passo 3: Finalizar agendamento">
                <div className="booking-form__step-header">
                  <h2>Finalizar</h2>
                  <p>Adicione email e observações (opcional)</p>
                </div>

                <div className="booking-form__step-content">
                  {/* Email */}
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

                  {/* Mensagem */}
                  <div className="form-group">
                    <label htmlFor="message">Observações (opcional)</label>
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
                </div>
              </div>
            )}

            {/* Botões de Navegação */}
            <div className="booking-form__actions">
              {currentStep > 1 && (
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={handlePrev}
                  aria-label="Voltar para o passo anterior"
                >
                  ← Voltar
                </button>
              )}

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  className="btn-primary"
                  onClick={handleNext}
                  aria-label={`Ir para o próximo passo (${currentStep + 1} de ${totalSteps})`}
                >
                  Próximo →
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn-primary"
                  aria-label="Enviar solicitação de agendamento"
                >
                  Confirmar Agendamento
                </button>
              )}
            </div>
          </form>
        </>
      )}
    </div>
  )
}
