import BookingForm from './BookingForm'
import './Booking.css'

export default function Booking({ siteType }) {
  return (
    <section className="booking section" id="agendar" aria-label="Agendar consulta">
      <div className="container">
        <BookingForm siteType={siteType} />
      </div>
    </section>
  )
}
