import { useState, useEffect } from 'react'
import { CookieConsent } from '@/types'

const COOKIE_CONSENT_KEY = 'bst-crew-cookie-consent'

/**
 * Hook per gestire il consenso ai cookie (GDPR-compliant)
 *
 * Salva le preferenze nel localStorage e fornisce metodi per:
 * - Verificare se l'utente ha già dato il consenso
 * - Salvare le preferenze dell'utente
 * - Verificare se un tipo specifico di cookie è consentito
 *
 * @returns {Object} Oggetto con stato e metodi per gestire il consenso
 */
export function useCookieConsent() {
  const [consent, setConsent] = useState<CookieConsent | null>(null)
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Controlla se esiste già un consenso salvato
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY)

    if (savedConsent) {
      try {
        const parsed = JSON.parse(savedConsent) as CookieConsent
        setConsent(parsed)
        setShowBanner(false)
      } catch (error) {
        // Se il parsing fallisce, mostra il banner
        console.error('Error parsing cookie consent:', error)
        setShowBanner(true)
      }
    } else {
      // Nessun consenso salvato, mostra il banner
      setShowBanner(true)
    }
  }, [])

  /**
   * Salva il consenso dell'utente
   */
  const saveConsent = (consentData: Omit<CookieConsent, 'timestamp'>) => {
    const fullConsent: CookieConsent = {
      ...consentData,
      timestamp: Date.now()
    }

    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(fullConsent))
    setConsent(fullConsent)
    setShowBanner(false)

    // TODO: Se analytics è true, carica script di tracking (GA4, Meta Pixel, etc.)
    // if (fullConsent.analytics) {
    //   loadAnalyticsScripts()
    // }

    // TODO: Se marketing è true, carica script di marketing
    // if (fullConsent.marketing) {
    //   loadMarketingScripts()
    // }
  }

  /**
   * Accetta tutti i cookie
   */
  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true
    })
  }

  /**
   * Accetta solo i cookie necessari
   */
  const acceptNecessary = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false
    })
  }

  /**
   * Verifica se un tipo di cookie è consentito
   */
  const isConsentGiven = (type: keyof CookieConsent): boolean => {
    if (!consent) return false
    return consent[type] === true
  }

  /**
   * Rimuove il consenso (per testing o reset)
   */
  const resetConsent = () => {
    localStorage.removeItem(COOKIE_CONSENT_KEY)
    setConsent(null)
    setShowBanner(true)
  }

  return {
    consent,
    showBanner,
    saveConsent,
    acceptAll,
    acceptNecessary,
    isConsentGiven,
    resetConsent
  }
}
