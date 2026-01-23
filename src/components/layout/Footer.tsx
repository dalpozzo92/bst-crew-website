import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { InstagramIcon } from '@/components/common/InstagramIcon'
import { Separator } from '@/components/ui/separator'
import { ScrollVelocity } from '@/components/common/ScrollVelocity'
import { getAssetPath } from '@/lib/assets'

/**
 * Footer component con link, social e informazioni legali
 *
 * Include:
 * - Brand info
 * - Link alle pagine principali
 * - Link Privacy e Cookie Policy
 * - Social links (Instagram)
 * - Copyright
 */
export function Footer() {
  const currentYear = new Date().getFullYear()
  const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/bstcrew'
  const EMAIL = import.meta.env.VITE_EMAIL || 'dalpozzo92@gmail.com'

  return (
    <footer className="bg-dark-900 text-gray-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={getAssetPath('/images/logo.webp')}
                alt="BST Crew Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-md">
              Personal Trainer specializzato in ipertrofia, dimagrimento e ricomposizione
              corporea. Servizi in palestra a Pergine Valsugana e coaching online in
              tutto il Trentino.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Link Rapidi</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/chi-sono"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Chi Sono
                </Link>
              </li>
              <li>
                <Link
                  to="/servizi"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Servizi
                </Link>
              </li>
              <li>
                <Link
                  to="/trasformazioni"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Trasformazioni
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contatti"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Informazioni Legali</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie-policy"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-gray-400">
            © {currentYear} BST Crew. Tutti i diritti riservati.
          </p>
          <p className="text-xs text-gray-500">
            Personal Trainer a Pergine Valsugana e Trento
          </p>
        </div>
        <Separator className="my-8 bg-gray-800" />

        {/* Animated Footer Text */}
        <div className="py-4">
          <ScrollVelocity
            texts={['Creato con ❤️ da Nicola Dal Pozzo - N LAB']}
            velocity={-15}
            className="text-xs text-gray-500 font-light"
          />
        </div>
      </div>
    </footer>
  )
}
