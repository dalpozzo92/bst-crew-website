import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'
import { cn } from '@/lib/utils'

interface ScrollStackItemProps {
  children: ReactNode
  index: number
  className?: string
  stackOffset?: number // Pixel offset for each card (default: 20px)
  scaleEffect?: boolean // Enable scale effect on scroll (default: true)
  topOffset?: number // Base offset from top of viewport (e.g., header height + padding)
}

/**
 * ScrollStackItem Component
 *
 * Singola card nell'effetto scroll-stack.
 * Caratteristiche:
 * - position: sticky con offset incrementale
 * - Scale effect opzionale durante lo scroll
 * - Smooth transitions
 */
export function ScrollStackItem({
  children,
  index,
  className,
  stackOffset = 20,
  scaleEffect = true,
  topOffset = 0
}: ScrollStackItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  // Scale effect: parte da 0.95 e arriva a 1 quando la card entra nel viewport
  const scale = scaleEffect
    ? useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.98])
    : 1

  // Opacità: fade in quando entra, fade out quando esce
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.8])

  const finalTopOffset = topOffset + (index * stackOffset)

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleEffect ? scale : undefined,
        opacity: scaleEffect ? opacity : undefined,
        position: 'sticky',
        top: `${finalTopOffset}px`,
        zIndex: index,
      }}
      className={cn('will-change-transform', className)}
    >
      {children}
    </motion.div>
  )
}

interface ScrollStackContainerProps {
  children: ReactNode
  className?: string
  stackOffset?: number
  scaleEffect?: boolean
  gap?: string // Tailwind gap class (es. 'gap-8', 'gap-12')
  topOffset?: number // Base offset from top of viewport (default: 80px = header 64px + padding 16px)
}

/**
 * ScrollStackContainer Component
 *
 * Container per le card con effetto scroll-stack.
 * Automaticamente applica l'effetto sticky e stacking a tutti i children.
 *
 * Uso:
 * ```tsx
 * <ScrollStackContainer gap="gap-8" topOffset={80}>
 *   <Card>...</Card>
 *   <Card>...</Card>
 *   <Card>...</Card>
 * </ScrollStackContainer>
 * ```
 */
export function ScrollStackContainer({
  children,
  className,
  stackOffset = 20,
  scaleEffect = true,
  gap = 'gap-8',
  topOffset = 80
}: ScrollStackContainerProps) {
  const childrenArray = Array.isArray(children) ? children : [children]

  return (
    <div className={cn('flex flex-col', gap, className)}>
      {childrenArray.map((child, index) => (
        <ScrollStackItem
          key={index}
          index={index}
          stackOffset={stackOffset}
          scaleEffect={scaleEffect}
          topOffset={topOffset}
        >
          {child}
        </ScrollStackItem>
      ))}
    </div>
  )
}
