import { useEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ScrollFloat.css'

gsap.registerPlugin(ScrollTrigger)

interface ScrollFloatProps {
  children: string
  scrollContainerRef?: React.RefObject<HTMLElement>
  containerClassName?: string
  textClassName?: string
  animationDuration?: number
  ease?: string
  scrollStart?: string
  scrollEnd?: string
  stagger?: number
}

/**
 * ScrollFloat Component - Official React Bits Implementation
 *
 * Animazione di testo in cui ogni carattere "galleggia" in vista durante lo scroll.
 * From: https://www.reactbits.dev/text-animations/scroll-float
 *
 * @param children - Il testo da animare (deve essere una stringa)
 * @param scrollContainerRef - Riferimento al container di scroll personalizzato
 * @param containerClassName - Classi CSS per il container
 * @param textClassName - Classi CSS per il testo
 * @param animationDuration - Durata dell'animazione (default: 1)
 * @param ease - Easing dell'animazione (default: 'back.inOut(2)')
 * @param scrollStart - Punto di inizio animazione (default: 'center bottom+=50%')
 * @param scrollEnd - Punto di fine animazione (default: 'bottom bottom-=40%')
 * @param stagger - Delay tra caratteri (default: 0.1)
 */
export function ScrollFloat({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.1
}: ScrollFloatProps) {
  const containerRef = useRef<HTMLHeadingElement>(null)

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : ''
    const words = text.split(' ')

    return words.map((word, wordIndex) => (
      <span key={wordIndex} className="word" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
        {word.split('').map((char, charIndex) => (
          <span className="char" key={`${wordIndex}-${charIndex}`}>
            {char}
          </span>
        ))}
        {wordIndex < words.length - 1 && <span className="char">{'\u00A0'}</span>}
      </span>
    ))
  }, [children])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window

    const charElements = el.querySelectorAll('.char')

    gsap.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%'
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        }
      }
    )
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger])

  return (
    <h1 ref={containerRef} className={`scroll-float ${containerClassName}`}>
      <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
    </h1>
  )
}
