import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { InstagramIcon } from '@/components/common/InstagramIcon'
import { cn } from '@/lib/utils'
import { NavLink } from '@/types'

const navigation: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Chi Sono', href: '/chi-sono' },
  { label: 'Servizi', href: '/servizi' },
  { label: 'Contatti', href: '/contatti' },
]

/**
 * Header component - DARK THEME
 * Tutti gli errori console risolti
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/crew.bst'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const isActive = (href: string) => {
    return location.pathname === href
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-background/95 backdrop-blur-xl shadow-lg border-border'
          : 'bg-background/80 backdrop-blur-md border-transparent'
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-700 rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-shadow">
              <span className="text-white font-display font-bold text-xl">BST</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-bold text-xl text-foreground">
                BST Crew
              </div>
              <div className="text-xs text-muted-foreground">Personal Trainer</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'text-sm font-medium transition-colors relative group',
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Social */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-lg"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <Button asChild className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30">
              <Link to="/contatti">Contattami</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="w-6 h-6" />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-full max-w-md bg-card">
                <DialogTitle className="sr-only">Menu di navigazione</DialogTitle>
                <DialogDescription className="sr-only">
                  Naviga tra le pagine del sito
                </DialogDescription>
                <div className="flex flex-col space-y-6 py-8">
                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={cn(
                          'text-lg font-medium transition-colors hover:text-primary py-2',
                          isActive(item.href)
                            ? 'text-primary border-l-4 border-primary pl-4'
                            : 'text-muted-foreground pl-4'
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile CTA */}
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <Link to="/contatti">Contattami</Link>
                  </Button>

                  {/* Mobile Social */}
                  <div className="flex items-center justify-center space-x-6 pt-4">
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2"
                    >
                      <InstagramIcon className="w-5 h-5" />
                      <span className="text-sm">Seguimi su Instagram</span>
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>
    </header>
  )
}
