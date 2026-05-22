import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import MagneticButton from './components/MagneticButton'
import { useScrollReveal } from './hooks/useAnimations'
import LandingPage from './components/LandingPage'
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
  const [currentPage, setCurrentPage] = useState('landing') // 'landing', 'odonto', 'estetica'
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [showPreloader, setShowPreloader] = useState(true)
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

  /* Aplica a classe do tema ao body baseado no sub-site */
  useEffect(() => {
    document.body.classList.remove('theme-purple', 'theme-landing', 'theme-odonto')
    if (currentPage === 'estetica') {
      document.body.classList.add('theme-purple')
    } else if (currentPage === 'odonto') {
      document.body.classList.add('theme-odonto')
    } else if (currentPage === 'landing') {
      document.body.classList.add('theme-landing')
    }
  }, [currentPage])

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

  /* Controle do background dinâmico via scroll otimizado com RAF e throttle */
  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;
    const minDelta = 20; // Atualiza a cada 20px de scroll

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
      const scrolled = window.scrollY;
      
      // Throttle: só atualiza se scrollou pelo menos minDelta pixels
      if (Math.abs(scrolled - lastScrollY) < minDelta) {
        return;
      }
      lastScrollY = scrolled;
      
      if (!ticking) {
        window.requestAnimationFrame(updateBg);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Navegar para sub-site */
  const handleSelectClinic = (clinic) => {
    setShowPreloader(true)
    setCurrentPage(clinic)
    window.scrollTo(0, 0)
  }

  /* Voltar para a landing */
  const handleGoBack = () => {
    setShowPreloader(false)
    setCurrentPage('landing')
    window.scrollTo(0, 0)
    document.body.classList.remove('theme-purple')
  }

  /* Preloader concluiu */
  const handlePreloaderDone = () => {
    setShowPreloader(false)
  }

  // Landing Page
  if (currentPage === 'landing') {
    return (
      <>
        <div className="noise-overlay"></div>
        <LandingPage onSelectClinic={handleSelectClinic} />
      </>
    )
  }

  // Sub-sites (Odonto ou Estética)
  return (
    <>
      {showPreloader && (
        <Preloader siteType={currentPage} onDone={handlePreloaderDone} />
      )}
      <div className="noise-overlay"></div>
      <div className="dynamic-bg">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>
      </div>
      <Navbar siteType={currentPage} onOpenBooking={openBookingModal} onGoBack={handleGoBack} />
      <main>
        <Hero siteType={currentPage} onOpenBooking={openBookingModal} />
        <About siteType={currentPage} />
        <Services siteType={currentPage} />
        <Gallery siteType={currentPage} />
        <Testimonials siteType={currentPage} />
        <Booking siteType={currentPage} />
      </main>
      <Footer siteType={currentPage} />
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} siteType={currentPage} />
    </>
  )
}
