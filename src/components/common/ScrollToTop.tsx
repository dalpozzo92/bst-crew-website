import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Component che forza lo scroll in cima alla pagina quando si cambia route
 * Importante per SPA che altrimenti mantengono la posizione di scroll
 */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
