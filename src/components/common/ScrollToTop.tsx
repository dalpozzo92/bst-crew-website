import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Component che forza lo scroll in cima alla pagina quando si cambia route
 * Importante per SPA che altrimenti mantengono la posizione di scroll
 *
 * Fix per mobile: disabilita temporaneamente scroll-behavior: smooth per scroll istantaneo
 */
export function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    // Salva lo scroll behavior originale
    const htmlElement = document.documentElement
    const originalScrollBehavior = htmlElement.style.scrollBehavior

    // Disabilita smooth scroll per uno scroll istantaneo
    htmlElement.style.scrollBehavior = 'auto'

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

      // Secondo frame per essere sicuri
      requestAnimationFrame(() => {
        scrollToTopImmediately()
      })
    })

    // Scroll ritardato come fallback finale per mobile (alcuni componenti animati potrebbero ritardare)
    const timeoutId = setTimeout(() => {
      scrollToTopImmediately()

      // Ripristina lo scroll behavior dopo 150ms
      setTimeout(() => {
        htmlElement.style.scrollBehavior = originalScrollBehavior
      }, 150)
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [location.pathname, location.key]) // Usa location.key per catturare anche navigazione avanti/indietro

  return null
}
