import { useEffect, useState, useRef } from 'react'

interface UseCounterAnimationOptions {
  end: number
  duration?: number
  startOnView?: boolean
}

/**
 * Hook per animare un contatore da 0 al valore finale
 * @param end - Valore finale del contatore
 * @param duration - Durata dell'animazione in millisecondi (default: 2000)
 * @param startOnView - Se true, inizia quando l'elemento entra in viewport
 */
export function useCounterAnimation({ end, duration = 2000, startOnView = true }: UseCounterAnimationOptions) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(!startOnView)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.3 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [startOnView, hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    const startTime = Date.now()
    const endTime = startTime + duration

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)

      // Easing function (easeOutExpo)
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

      setCount(Math.floor(easedProgress * end))

      if (now < endTime) {
        requestAnimationFrame(updateCount)
      }
    }

    requestAnimationFrame(updateCount)
  }, [hasStarted, end, duration])

  return { count, elementRef }
}
