import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { CookieBanner } from '@/components/common/CookieBanner'
import { ScrollToTop } from '@/components/common/ScrollToTop'
import { AnimatedBackground } from '@/components/common/AnimatedBackground'
import { cn } from '@/lib/utils'

interface LayoutProps {
  children: ReactNode
}

/**
 * Layout wrapper component
 *
 * Wrappa tutte le pagine con:
 * - Animated lines background (performant & modern)
 * - Header (navigation)
 * - Main content area con padding top per fixed header (eccetto homepage)
 * - Footer
 * - Cookie Banner (GDPR)
 * - ScrollToTop behavior per route changes
 */
export function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col relative bg-dark-900">
      {/* Animated lines background - optimized performance */}
      {/* Non mostrare sfondo animato nella pagina servizi */}
      {location.pathname !== '/servizi' && (
        <AnimatedBackground
          variant="linee-move"
          intensity="light"
          height="100%"
          position="fixed"
          speed={3}
          fadeInDuration={2000}
        />
      )}

      {/* Content layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />

        {/* Main content - nessun padding top nella homepage */}
        <main className={cn(
          "flex-1",
          !isHomePage && "pt-16"
        )}>
          {children}
        </main>

        <Footer />
        <CookieBanner />
      </div>
    </div>
  )
}
