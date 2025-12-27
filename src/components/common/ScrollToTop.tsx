import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Component che forza lo scroll in cima alla pagina quando si cambia route
 * Importante per SPA che altrimenti mantengono la posizione di scroll
 */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Forza scroll multipli per assicurarsi che funzioni sempre
    const scrollToTopImmediately = () => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    // Scroll immediato
    scrollToTopImmediately()

    // Scroll dopo il primo frame (assicura che il DOM sia renderizzato)
    requestAnimationFrame(() => {
      scrollToTopImmediately()
    })

    // Scroll ritardato come fallback finale (alcuni componenti animati potrebbero ritardare)
    const timeoutId = setTimeout(() => {
      scrollToTopImmediately()
    }, 10)

    return () => clearTimeout(timeoutId)
  }, [pathname])

  return null
}
