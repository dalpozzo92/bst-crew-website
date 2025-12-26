import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Cookie } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCookieConsent } from '@/hooks/useCookieConsent'

/**
 * Cookie Banner GDPR-compliant
 *
 * Caratteristiche:
 * - Mostra solo se l'utente non ha già dato il consenso
 * - Permette di accettare tutti i cookie o solo i necessari
 * - Link a Privacy e Cookie Policy
 * - Animazione smooth con Framer Motion
 * - Design mobile-friendly
 *
 * IMPORTANTE: Nessuno script di tracciamento deve essere caricato
 * prima che l'utente dia il consenso esplicito (GDPR compliance)
 */
export function CookieBanner() {
  const { showBanner, acceptAll, acceptNecessary } = useCookieConsent()
  const [showDetails, setShowDetails] = useState(false)

  if (!showBanner) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-2xl"
      >
        <div className="container-custom max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            {/* Icon */}
            <div className="flex-shrink-0">
              <Cookie className="w-8 h-8 text-primary-500" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Utilizzo dei Cookie
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Questo sito utilizza cookie tecnici necessari per il suo funzionamento.
                {!showDetails && (
                  <>
                    {' '}
                    <button
                      onClick={() => setShowDetails(true)}
                      className="text-primary-600 hover:text-primary-700 underline font-medium"
                    >
                      Maggiori informazioni
                    </button>
                  </>
                )}
              </p>

              {/* Dettagli espansi */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-3 overflow-hidden"
                  >
                    <div className="text-sm text-gray-600 space-y-2">
                      <p>
                        <strong>Cookie necessari:</strong> Indispensabili per il
                        funzionamento del sito (sempre attivi).
                      </p>
                      <p>
                        <strong>Cookie analitici:</strong> Ci aiutano a capire come
                        viene utilizzato il sito per migliorare l'esperienza utente.
                      </p>
                      <p>
                        <strong>Cookie di marketing:</strong> Utilizzati per mostrare
                        contenuti pubblicitari personalizzati.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Links */}
              <div className="mt-3 flex flex-wrap gap-3 text-sm">
                <Link
                  to="/privacy"
                  className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-400">•</span>
                <Link
                  to="/cookie-policy"
                  className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <Button
                onClick={acceptNecessary}
                variant="outline"
                className="w-full sm:w-auto"
              >
                Solo Necessari
              </Button>
              <Button
                onClick={acceptAll}
                className="w-full sm:w-auto bg-primary-500 hover:bg-primary-600"
              >
                Accetta Tutti
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
