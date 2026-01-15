import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

interface StickyScrollItemProps {
  children: ReactNode
  className?: string
}

export function StickyScrollItem({ children, className }: StickyScrollItemProps) {
  return (
    <div className={cn('sticky-scroll-item', className)}>
      {children}
    </div>
  )
}

interface StickyScrollProps {
  children: ReactNode
  className?: string
}

export function StickyScroll({ children, className }: StickyScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const items = container.querySelectorAll('.sticky-scroll-item')
    
    items.forEach((item, index) => {
      const element = item as HTMLElement
      
      ScrollTrigger.create({
        trigger: element,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
      })

      // Scale effect
      gsap.to(element, {
        scale: 0.9,
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Stagger offset
      gsap.set(element, {
        top: `${index * 40}px`,
        zIndex: items.length - index,
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      {children}
    </div>
  )
}