import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { CookieBanner } from '@/components/common/CookieBanner'
import { ScrollToTop } from '@/components/common/ScrollToTop'
import { AnimatedBackground } from '@/components/common/AnimatedBackground'

interface LayoutProps {
  children: ReactNode
}

/**
 * Layout wrapper component
 *
 * Wrappa tutte le pagine con:
 * - Animated lines background (performant & modern)
 * - Header (navigation)
 * - Main content area con padding top per fixed header
 * - Footer
 * - Cookie Banner (GDPR)
 * - ScrollToTop behavior per route changes
 */
export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative bg-dark-900">
      {/* Animated lines background - optimized performance */}
      <AnimatedBackground
        variant="linee-move"
        intensity="medium"
        position="fixed"
        speed={0.8}
      />

      {/* Content layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />

        {/* Main content con padding top per fixed header */}
        <main className="flex-1 pt-16">
          {children}
        </main>

        <Footer />
        <CookieBanner />
      </div>
    </div>
  )
}
