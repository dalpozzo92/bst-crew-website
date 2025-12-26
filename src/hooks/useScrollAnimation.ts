import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
}

/**
 * Hook per trigger animazioni quando un elemento entra nel viewport
 * Usa Intersection Observer API per performance ottimali
 *
 * @param options - Opzioni per l'Intersection Observer
 * @returns [ref, isVisible] - Ref da assegnare all'elemento e stato di visibilità
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
): [React.RefObject<T>, boolean] {
  const { threshold = 0.1, rootMargin = '0px' } = options
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Una volta visibile, resta visibile (per evitare animazioni ripetute)
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  return [ref, isVisible]
}
