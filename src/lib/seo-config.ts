import { SEOConfig } from '@/types'

/**
 * Configurazione SEO per tutte le pagine del sito
 * Ogni pagina ha meta tags ottimizzati per SEO locale e conversioni
 */

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://bstcrew.com'
const SITE_NAME = import.meta.env.VITE_SITE_NAME || 'BST Crew - Personal Trainer'

export const seoConfig: Record<string, SEOConfig> = {
  home: {
    title: 'Personal Trainer Pergine Valsugana | Coaching Online Trento | BST Crew',
    description: 'Personal Trainer specializzato in ipertrofia, dimagrimento e ricomposizione corporea a Pergine Valsugana. Servizi in palestra e online in tutto il Trentino.',
    canonical: `${SITE_URL}/`,
    ogType: 'website',
    keywords: [
      'personal trainer Pergine Valsugana',
      'personal trainer Trento',
      'coach palestra Pergine',
      'personal trainer online Trentino',
      'ipertrofia muscolare',
      'dimagrimento Trento',
      'ricomposizione corporea'
    ]
  },

  about: {
    title: 'Chi Sono | Personal Trainer Certificato a Pergine Valsugana',
    description: 'Scopri il mio approccio professionale al personal training. Specializzato in allenamenti personalizzati per ipertrofia, definizione e ricomposizione corporea.',
    canonical: `${SITE_URL}/chi-sono`,
    ogType: 'website',
    keywords: [
      'personal trainer certificato',
      'coach Pergine',
      'allenamento personalizzato Trento'
    ]
  },

  services: {
    title: 'Servizi Personal Training | Palestra e Online a Trento',
    description: 'Personal training in palestra a Pergine Valsugana e coaching online in tutto il Trentino. Programmi personalizzati per ipertrofia, dimagrimento e risultati estetici.',
    canonical: `${SITE_URL}/servizi`,
    ogType: 'website',
    keywords: [
      'servizi personal training',
      'coaching online Trentino',
      'personal trainer palestra Pergine',
      'programmi personalizzati fitness'
    ]
  },

  contact: {
    title: 'Contatti | Personal Trainer Pergine Valsugana',
    description: 'Richiedi una consulenza gratuita per il tuo percorso di trasformazione fisica. Personal training a Pergine Valsugana e online in Trentino.',
    canonical: `${SITE_URL}/contatti`,
    ogType: 'website',
    keywords: [
      'contatti personal trainer Pergine',
      'consulenza fitness Trento',
      'prenotazione personal training'
    ]
  },

  personalTrainerPergine: {
    title: 'Personal Trainer a Pergine Valsugana: Trasforma il Tuo Fisico | BST Crew',
    description: 'Cerchi un personal trainer a Pergine Valsugana o Trento? Allenamenti personalizzati per ipertrofia, dimagrimento e ricomposizione corporea. Servizi in palestra e online.',
    canonical: `${SITE_URL}/personal-trainer-pergine-valsugana`,
    ogType: 'website',
    keywords: [
      'personal trainer Pergine Valsugana',
      'personal trainer Trento',
      'coach palestra Pergine',
      'personal trainer online Trentino',
      'allenamento personalizzato Pergine',
      'ipertrofia Valsugana',
      'dimagrimento Trento'
    ]
  },

  privacy: {
    title: 'Privacy Policy | BST Crew Personal Trainer',
    description: 'Informativa sulla privacy e trattamento dei dati personali in conformità al GDPR.',
    canonical: `${SITE_URL}/privacy`,
    ogType: 'website'
  },

  cookiePolicy: {
    title: 'Cookie Policy | BST Crew Personal Trainer',
    description: 'Informativa sui cookie utilizzati dal sito e gestione del consenso.',
    canonical: `${SITE_URL}/cookie-policy`,
    ogType: 'website'
  }
}

/**
 * Default SEO config da usare come fallback
 */
export const defaultSEO: SEOConfig = {
  title: SITE_NAME,
  description: 'Personal Trainer specializzato in ipertrofia, dimagrimento e ricomposizione corporea a Pergine Valsugana e Trento.',
  canonical: SITE_URL,
  ogType: 'website'
}
