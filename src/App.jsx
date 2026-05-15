import { useEffect, useState } from 'react'
import Lenis from 'lenis'
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
import BookingModal from './components/BookingModal'
import Preloader from './components/Preloader'

export default function App() {
  const [theme, setTheme] = useState('bege') // 'bege', 'blue', 'gold'
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  useScrollReveal()

  // Inicializa o Lenis para Scroll Suave Premium
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  const openBookingModal = () => setIsBookingModalOpen(true)
  const closeBookingModal = () => setIsBookingModalOpen(false)

  /* Atalhos de teclado para troca de tema (Alt+1: Bege, Alt+2: Azul, Alt+3: Dourado) */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey && e.code === 'Digit1') {
        e.preventDefault();
        setTheme('bege');
      } else if (e.altKey && e.code === 'Digit2') {
        e.preventDefault();
        setTheme('blue');
      } else if (e.altKey && e.code === 'Digit3') {
        e.preventDefault();
        setTheme('gold');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  /* Aplica a classe do tema ao body */
  useEffect(() => {
    document.body.classList.remove('theme-blue', 'theme-gold');
    if (theme === 'blue') document.body.classList.add('theme-blue');
    if (theme === 'gold') document.body.classList.add('theme-gold');
  }, [theme]);

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

  /* Controle do background dinâmico via scroll otimizado com RAF */
  useEffect(() => {
    let ticking = false;

    const updateBg = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = Math.min(scrolled / maxScroll, 1);
      
      const bg = document.querySelector('.dynamic-bg');
      if (bg) {
        bg.style.opacity = (0.1 + (percentage * 0.4)).toString();
        bg.style.transform = `scale(${1 + percentage * 0.1}) translateY(${percentage * -20}px)`;
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateBg);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      <Preloader theme={theme} />
      <div className="noise-overlay"></div>
      <div className="dynamic-bg">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>
      </div>
      <Navbar theme={theme} onOpenBooking={openBookingModal} />
      <main>
        <Hero onOpenBooking={openBookingModal} />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Booking />
      </main>
      <Footer theme={theme} />
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
    </>
  )
}
