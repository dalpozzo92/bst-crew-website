import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  /**
   * Tipo di animazione
   */
  animation?: 'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scale'
  /**
   * Delay in secondi prima dell'animazione
   */
  delay?: number
}

/**
 * Wrapper component per animazioni scroll-triggered con Framer Motion
 *
 * Usa Intersection Observer per detectare quando l'elemento è visibile
 * e triggera l'animazione una sola volta
 *
 * @param children - Contenuto da animare
 * @param animation - Tipo di animazione (default: fadeInUp)
 * @param delay - Delay in secondi (default: 0)
 */
export function AnimatedSection({
  children,
  className,
  animation = 'fadeInUp',
  delay = 0
}: AnimatedSectionProps) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })

  const animations = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={animations[animation]}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
