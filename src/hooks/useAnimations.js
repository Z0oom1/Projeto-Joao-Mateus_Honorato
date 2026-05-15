import { useEffect, useRef, useCallback } from 'react'

/**
 * Hook para animação de scroll reveal usando IntersectionObserver.
 * Aplica a classe 'visible' nos elementos com classe 'reveal'
 * conforme entram no viewport.
 */
export function useScrollReveal(options = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -60px 0px',
  } = options

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [threshold, rootMargin])
}

/**
 * Hook para parallax suave em elementos específicos.
 * Usa transform para performance (GPU accelerated).
 */
export function useParallax(ref, speed = 0.3) {
  const rafId = useRef(null)

  const handleScroll = useCallback(() => {
    if (!ref.current) return

    if (rafId.current) {
      cancelAnimationFrame(rafId.current)
    }

    rafId.current = requestAnimationFrame(() => {
      const scrollY = window.scrollY
      const element = ref.current
      if (element) {
        const offset = scrollY * speed
        element.style.transform = `translate3d(0, ${offset}px, 0)`
      }
    })
  }, [ref, speed])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [handleScroll])
}

/**
 * Hook para smooth counter animation (números que contam).
 */
export function useCountUp(targetValue, duration = 2000, startOnVisible = true) {
  const ref = useRef(null)
  const countRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!startOnVisible || !ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animateCount()
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(ref.current)

    function animateCount() {
      const start = 0
      const startTime = performance.now()

      function update(currentTime) {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        /* easeOutExpo */
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
        const current = Math.round(start + (targetValue - start) * eased)

        if (countRef.current) {
          countRef.current.textContent = current
        }

        if (progress < 1) {
          requestAnimationFrame(update)
        }
      }

      requestAnimationFrame(update)
    }

    return () => observer.disconnect()
  }, [targetValue, duration, startOnVisible])

  return { ref, countRef }
}
