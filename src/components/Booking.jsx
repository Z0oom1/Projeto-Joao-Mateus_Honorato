import BookingForm from './BookingForm'
import './Booking.css'

export default function Booking() {
  return (
    <section className="booking section" id="agendar" aria-label="Agendar consulta">
      <div className="container">
        <BookingForm />
      </div>
    </section>
  )
}
