import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu} from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { InstagramIcon } from '@/components/common/InstagramIcon'
import { cn } from '@/lib/utils'
import { getAssetPath } from '@/lib/assets'
import { NavLink } from '@/types'

const navigation: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Chi Sono', href: '/chi-sono' },
  { label: 'Servizi', href: '/servizi' },
  { label: 'Trasformazioni', href: '/trasformazioni' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contatti', href: '/contatti' },
]

/**npx sh
 * Header component con navigation e mobile menu
 *
 * Caratteristiche:
 * - Logo placeholder (da sostituire con logo reale)
 * - Navigation responsive
 * - Mobile menu con Dialog (shadcn/ui)
 * - Scroll behavior con background blur on scroll
 * - CTA button "Contattami"
 * - Instagram link
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/bstcrew'

  // Scroll listener per background blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Chiudi mobile menu quando cambia la route
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const isActive = (href: string) => {
    return location.pathname === href
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'bg-dark-900/90 backdrop-blur-xl border-b border-white/[0.08]'
          : 'bg-dark-900/50 backdrop-blur-lg border-b border-white/[0.04]'
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Nascosto nella homepage finché non si scrolla */}
          <Link to="/" className="flex items-center">
            <img
              src={getAssetPath('/images/logo.png')}
              alt="BST Crew Logo"
              className={cn(
                "h-9 w-auto object-contain transition-opacity duration-300",
                location.pathname === '/' && !isScrolled ? 'opacity-0' : 'opacity-100'
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'text-sm font-medium transition-all duration-200 px-3 py-1.5 rounded-lg',
                  isActive(item.href)
                    ? 'text-white bg-white/[0.06]'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.03]'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Social */}
          <div className="hidden lg:flex items-center space-x-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-200 p-2 rounded-lg hover:bg-white/[0.03]"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <Button
              asChild
              size="sm"
              className="bg-primary-500/90 hover:bg-primary-500 text-dark-900 font-medium transition-all duration-200 rounded-lg"
            >
              <Link to="/contatti">Contattami</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Menu"
                  className="text-gray-400 hover:text-white"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:w-[400px] bg-dark-900/98 backdrop-blur-xl border-l border-white/[0.08] p-0"
              >
                <SheetTitle className="sr-only">Menu di navigazione</SheetTitle>
                <SheetDescription className="sr-only">
                  Naviga tra le pagine del sito
                </SheetDescription>

                <div className="flex flex-col h-full">
                  {/* Header del menu */}
                  <div className="flex items-center justify-between p-6 border-b border-white/[0.08]">
                    <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                      <img
                        src={getAssetPath('/images/logo.png')}
                        alt="BST Crew Logo"
                        className="h-8 w-auto object-contain"
                      />
                    </Link>
                  </div>

                  {/* Navigation */}
                  <nav className="flex-1 p-6 space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          'flex items-center justify-between text-lg font-medium transition-all duration-200 py-4 px-4 rounded-xl group',
                          isActive(item.href)
                            ? 'text-white bg-primary-500/10 border border-primary-500/20'
                            : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                        )}
                      >
                        <span>{item.label}</span>
                        {isActive(item.href) && (
                          <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                        )}
                      </Link>
                    ))}
                  </nav>

                  {/* Footer del menu */}
                  <div className="p-6 space-y-4 border-t border-white/[0.08]">
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-primary-500/90 hover:bg-primary-500 text-dark-900 font-medium rounded-xl shadow-lg shadow-primary-500/20"
                    >
                      <Link to="/contatti" onClick={() => setMobileMenuOpen(false)}>
                        Contattami
                      </Link>
                    </Button>

                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 text-gray-400 hover:text-white transition-all duration-200 py-3"
                    >
                      <InstagramIcon className="w-5 h-5" />
                      <span className="text-sm font-medium">Seguimi su Instagram</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
