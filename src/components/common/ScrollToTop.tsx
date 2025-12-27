import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Component che forza lo scroll in cima alla pagina quando si cambia route
 * Importante per SPA che altrimenti mantengono la posizione di scroll
 */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll immediato senza animazione
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })

    // Fallback per browser meno recenti
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [pathname])

  return null
}
