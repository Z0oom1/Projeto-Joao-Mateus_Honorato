import { useState } from 'react'
import './Booking.css'

const timeSlots = [
  '08:00', '09:00', '10:00', '11:00',
  '14:00', '15:00', '16:00', '17:00',
]

const treatments = [
  'Avaliação Inicial',
  'Clareamento',
  'Lentes de Contato',
  'Implante',
  'Ortodontia Invisível',
  'Limpeza Profissional',
  'Outro',
]

export default function BookingForm({ isModal = false, onClose }) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    treatment: '',
    date: '',
    time: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  /* Data mínima: amanhã */
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  if (submitted) {
    return (
      <div className="booking__success">
        <div className="booking__success-icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1"/>
            <path d="M15 24l6 6 12-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="booking__success-title">Consulta Solicitada</h2>
        <p className="booking__success-text">
          Obrigada, {form.name}. Recebemos sua solicitação para
          <strong> {form.treatment}</strong> no dia <strong>{form.date}</strong> às <strong>{form.time}</strong>.
          Nossa equipe entrará em contato em até 2 horas para confirmar.
        </p>
        <div className="booking__nav-buttons" style={{ justifyContent: 'center', marginTop: '24px' }}>
          <button
            className="btn-outline"
            onClick={() => { 
              if (isModal && onClose) {
                onClose();
              } else {
                setSubmitted(false); 
                setStep(1); 
                setForm({ name: '', phone: '', treatment: '', date: '', time: '' });
              }
            }}
          >
            {isModal ? 'Fechar' : 'Novo Agendamento'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`booking__layout ${isModal ? 'booking__layout--modal' : ''}`}>
      {/* Cabeçalho */}
      <div className="booking__header">
        <span className="booking__label">Agendamento</span>
        <h2 className="booking__title">
          {isModal ? 'Agende sua visita' : 'Simples assim.'}<br />
          <em>{isModal ? 'Estamos esperando por você' : 'Sem complicação.'}</em>
        </h2>
        <div className="divider"></div>
        
        {/* Indicador de passos */}
        <div className="booking__steps">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`booking__step-indicator ${step >= s ? 'booking__step-indicator--active' : ''}`}
            >
              <span className="booking__step-number">{s}</span>
              <span className="booking__step-label">
                {s === 1 ? 'Dados' : s === 2 ? 'Tratamento' : 'Horário'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Formulário */}
      <form className="booking__form" onSubmit={handleSubmit}>
        {/* Passo 1: Dados Pessoais */}
        {step === 1 && (
          <div className="booking__form-step" key="step1">
            <div className="booking__field">
              <label className="booking__label-text">Nome Completo</label>
              <input
                type="text"
                className="booking__input"
                placeholder="Seu nome"
                value={form.name}
                onChange={(e) => updateField('name', e.target.value)}
                required
              />
            </div>
            <div className="booking__field">
              <label className="booking__label-text">WhatsApp</label>
              <input
                type="tel"
                className="booking__input"
                placeholder="(00) 00000-0000"
                value={form.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                required
              />
            </div>
            <button
              type="button"
              className="btn-primary booking__next"
              onClick={() => form.name && form.phone && setStep(2)}
            >
              Continuar
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}

        {/* Passo 2: Tratamento */}
        {step === 2 && (
          <div className="booking__form-step" key="step2">
            <p className="booking__field-label">Selecione o tratamento</p>
            <div className="booking__treatments">
              {treatments.map((t) => (
                <button
                  type="button"
                  key={t}
                  className={`booking__treatment-btn ${form.treatment === t ? 'booking__treatment-btn--active' : ''}`}
                  onClick={() => updateField('treatment', t)}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="booking__nav-buttons">
              <button type="button" className="btn-outline" onClick={() => setStep(1)}>
                Voltar
              </button>
              <button
                type="button"
                className="btn-primary"
                onClick={() => form.treatment && setStep(3)}
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {/* Passo 3: Data e Horário */}
        {step === 3 && (
          <div className="booking__form-step" key="step3">
            <div className="booking__field">
              <label className="booking__label-text">Data preferida</label>
              <input
                type="date"
                className="booking__input"
                min={minDate}
                value={form.date}
                onChange={(e) => updateField('date', e.target.value)}
                required
              />
            </div>
            <div className="booking__field">
              <p className="booking__label-text">Horário</p>
              <div className="booking__time-grid">
                {timeSlots.map((t) => (
                  <button
                    type="button"
                    key={t}
                    className={`booking__time-btn ${form.time === t ? 'booking__time-btn--active' : ''}`}
                    onClick={() => updateField('time', t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="booking__nav-buttons">
              <button type="button" className="btn-outline" onClick={() => setStep(2)}>
                Voltar
              </button>
              <button
                type="submit"
                className="btn-primary"
                disabled={!form.date || !form.time}
              >
                Confirmar Agendamento
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
