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

  /* Atalhos de teclado para troca de tema (Ctrl+1: Bege, Ctrl+2: Azul) */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey && e.key === '1') {
        document.body.classList.remove('theme-blue');
      } else if (e.altKey && e.key === '2') {
        document.body.classList.add('theme-blue');
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
