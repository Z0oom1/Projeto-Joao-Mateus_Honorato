import BookingForm from './BookingForm'
import './BookingModal.css'
import { useEffect } from 'react'

export default function BookingModal({ isOpen, onClose }) {
  // Bloqueia o scroll quando o modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="booking-modal" onClick={onClose}>
      <div className="booking-modal__content reveal visible" onClick={(e) => e.stopPropagation()}>
        <button className="booking-modal__close" onClick={onClose} aria-label="Fechar modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <BookingForm isModal={true} onClose={onClose} />
      </div>
    </div>
  )
}
