import { LocalBusinessSchema, PersonSchema, FAQSchema, FAQItem } from '@/types'

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://bstcrew.com'
const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/bstcrew'
const PHONE = import.meta.env.VITE_PHONE || ''

/**
 * Schema.org LocalBusiness per SEO locale
 * Usare nelle pagine Home e Landing SEO
 */
export const getLocalBusinessSchema = (): LocalBusinessSchema => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'BST Crew - Personal Trainer',
  image: `${SITE_URL}/logo.png`, // TODO: Aggiornare con URL logo effettivo
  description: 'Personal Trainer specializzato in ipertrofia muscolare, dimagrimento e ricomposizione corporea. Servizi di coaching in palestra a Pergine Valsugana e online in tutto il Trentino.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pergine Valsugana',
    addressRegion: 'TN',
    postalCode: '38057',
    addressCountry: 'IT'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '46.0636',
    longitude: '11.2367'
  },
  url: SITE_URL,
  telephone: PHONE,
  priceRange: '$$',
  // Orari di apertura - personalizzare in base agli orari effettivi
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '20:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '14:00'
    }
  ],
  sameAs: [INSTAGRAM_URL]
})

/**
 * Schema.org Person per il personal trainer
 * Usare nella pagina "Chi Sono"
 */
export const getPersonSchema = (): PersonSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Personal Trainer BST Crew', // TODO: Aggiornare con nome reale
  jobTitle: 'Personal Trainer & Coach',
  description: 'Personal Trainer certificato specializzato in allenamenti personalizzati per ipertrofia muscolare, dimagrimento e ricomposizione corporea.',
  url: SITE_URL,
  sameAs: [INSTAGRAM_URL],
  worksFor: {
    '@type': 'LocalBusiness',
    name: 'BST Crew'
  }
})

/**
 * Schema.org FAQPage per la landing page SEO
 * Migliora la visibilità nei rich snippets di Google
 */
export const getFAQSchema = (faqItems: FAQItem[]): FAQSchema => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))
})

/**
 * FAQ predefinite per la landing page Personal Trainer Pergine
 */
export const personalTrainerPergineFAQ: FAQItem[] = [
  {
    question: 'Dove opera il personal trainer?',
    answer: 'Offro servizi di personal training principalmente a Pergine Valsugana (TN) e Trento. Collaboro con una palestra partner a Pergine per gli allenamenti in presenza. Inoltre, offro servizi di coaching online per tutto il Trentino-Alto Adige e oltre.'
  },
  {
    question: 'Che tipo di allenamento proponi?',
    answer: 'Mi specializzo in programmi personalizzati per ipertrofia muscolare, dimagrimento e ricomposizione corporea. Il mio approccio è basato su metodi scientifici ed evidence-based, con focus su risultati estetici misurabili e sostenibili nel tempo.'
  },
  {
    question: 'Posso allenarmi online?',
    answer: 'Sì, offro programmi completi di coaching online con schede di allenamento personalizzate, monitoraggio remoto dei progressi e supporto costante via chat. Ideale per chi non può raggiungere Pergine o preferisce allenarsi in autonomia.'
  },
  {
    question: 'Per chi sono adatti i tuoi servizi?',
    answer: 'I miei servizi sono adatti a uomini e donne di tutti i livelli, dal principiante all\'avanzato. Lavoro con persone che vogliono migliorare il proprio fisico attraverso ipertrofia muscolare, perdere peso in modo sano, o ricomporre la propria composizione corporea con un approccio scientifico e personalizzato.'
  },
  {
    question: 'Quanto costa il personal training?',
    answer: 'Il costo varia in base al tipo di servizio scelto (personal training in palestra o coaching online) e alla durata del percorso. Contattami per una consulenza gratuita dove potremo discutere i tuoi obiettivi e trovare la soluzione più adatta alle tue esigenze e budget.'
  },
  {
    question: 'Come posso iniziare?',
    answer: 'Puoi iniziare richiedendo una consulenza gratuita tramite il form contatti sul sito o scrivendomi direttamente su Instagram. Durante la consulenza valuteremo insieme i tuoi obiettivi, il tuo livello attuale e il percorso più adatto per raggiungerli.'
  }
]

/**
 * Genera script tag con JSON-LD schema
 */
export const generateSchemaScript = (schema: LocalBusinessSchema | PersonSchema | FAQSchema): string => {
  return JSON.stringify(schema, null, 2)
}
