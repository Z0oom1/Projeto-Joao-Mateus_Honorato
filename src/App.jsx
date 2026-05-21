import { useEffect, useState, useMemo } from 'react'
import Lenis from 'lenis'
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
import useAssetLoader from './components/AssetLoader'

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing')
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [showPreloader, setShowPreloader] = useState(true)
  
  useScrollReveal()

  // Lista de assets para pré-carregar
  const assetsToLoad = useMemo(() => [
    '/background/background.webm',
    '/logos/facesmile.webp',
    '/logos/logo-joaom.webp',
    '/logos/logo-leiah.webp',
    '/team/dr-joao.webp',
    '/team/leia-honorato.webp',
    '/logos/logotipo-fs.webp'
  ], [])

  const { isLoaded, progress } = useAssetLoader(assetsToLoad)

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
    return () => lenis.destroy()
  }, [])

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

  const handleSelectClinic = (clinic) => {
    setCurrentPage(clinic)
    window.scrollTo(0, 0)
  }

  const handleGoBack = () => {
    setCurrentPage('landing')
    window.scrollTo(0, 0)
  }

  // Se ainda não carregou os assets essenciais, mostra o preloader global
  if (!isLoaded) {
    return <Preloader siteType="landing" progress={progress} isLoaded={isLoaded} />
  }

  if (currentPage === 'landing') {
    return (
      <>
        <div className="noise-overlay"></div>
        <LandingPage onSelectClinic={handleSelectClinic} />
      </>
    )
  }

  return (
    <>
      <div className="noise-overlay"></div>
      <div className="dynamic-bg">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>
      </div>
      <Navbar siteType={currentPage} onOpenBooking={() => setIsBookingModalOpen(true)} onGoBack={handleGoBack} />
      <main>
        <Hero siteType={currentPage} onOpenBooking={() => setIsBookingModalOpen(true)} />
        <About siteType={currentPage} />
        <Services siteType={currentPage} />
        <Gallery siteType={currentPage} />
        <Testimonials siteType={currentPage} />
        <Booking siteType={currentPage} />
      </main>
      <Footer siteType={currentPage} />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} siteType={currentPage} />
    </>
  )
}
