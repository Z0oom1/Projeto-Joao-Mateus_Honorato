import BookingForm from './BookingForm'
import './BookingModal.css'
import { useEffect, useRef } from 'react'

export default function BookingModal({ isOpen, onClose, siteType }) {
  const modalRef = useRef(null)
  const contentRef = useRef(null)

  // Bloqueia o scroll quando o modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = 'var(--scrollbar-width, 0)'
      // Foca no modal para melhor acessibilidade
      modalRef.current?.focus()
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [isOpen])

  // Suporte a tecla ESC para fechar o modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="booking-modal"
      onClick={onClose}
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      tabIndex={-1}
    >
      <div
        className="booking-modal__content"
        onClick={(e) => e.stopPropagation()}
        ref={contentRef}
      >
        <button
          className="booking-modal__close"
          onClick={onClose}
          aria-label="Fechar modal de agendamento"
          title="Fechar (ESC)"
          type="button"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="booking-modal__inner">
          <h1 id="booking-modal-title" className="sr-only">
            {siteType === 'estetica' ? 'Agende seu procedimento' : 'Agende sua consulta'}
          </h1>
          <BookingForm isModal={true} onClose={onClose} siteType={siteType} />
        </div>
      </div>
    </div>
  )
}
