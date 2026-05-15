import { useEffect } from 'react'
import MagneticButton from './components/MagneticButton'
import { useScrollReveal } from './hooks/useAnimations'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import Footer from './components/Footer'

export default function App() {
  useScrollReveal()

  /* Atalhos de teclado para troca de tema (Alt+1: Bege, Alt+2: Azul) */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey && e.code === 'Digit1') {
        e.preventDefault();
        document.body.classList.remove('theme-blue', 'theme-gold');
      } else if (e.altKey && e.code === 'Digit2') {
        e.preventDefault();
        document.body.classList.remove('theme-gold');
        document.body.classList.add('theme-blue');
      } else if (e.altKey && e.code === 'Digit3') {
        e.preventDefault();
        document.body.classList.remove('theme-blue');
        document.body.classList.add('theme-gold');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  /* Re-aplica scroll reveal após navegação e mudanças de estado */
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const elements = document.querySelectorAll('.reveal:not(.visible)')
      if (!elements.length) return

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              io.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
      )

      elements.forEach((el) => io.observe(el))
    })

    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="noise-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
