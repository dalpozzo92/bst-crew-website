/**
 * Type definitions per l'applicazione BST Crew
 */

// Configurazione SEO per ogni pagina
export interface SEOConfig {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  keywords?: string[]
}

// Dati per form di contatto
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
}

// Stato del form
export interface FormState {
  isSubmitting: boolean
  isSuccess: boolean
  isError: boolean
  message?: string
}

// Configurazione cookie consent
export interface CookieConsent {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  timestamp?: number
}

// Service card data
export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  link?: string
}

// Schema.org LocalBusiness
export interface LocalBusinessSchema {
  '@context': string
  '@type': string
  '@id': string
  name: string
  image: string
  description: string
  address: {
    '@type': string
    addressLocality: string
    addressRegion: string
    postalCode?: string
    addressCountry: string
  }
  geo: {
    '@type': string
    latitude: string
    longitude: string
  }
  url: string
  telephone?: string
  priceRange: string
  openingHoursSpecification?: Array<{
    '@type': string
    dayOfWeek: string[]
    opens: string
    closes: string
  }>
  sameAs: string[]
}

// Schema.org Person
export interface PersonSchema {
  '@context': string
  '@type': string
  name: string
  jobTitle: string
  description: string
  url: string
  sameAs: string[]
  worksFor?: {
    '@type': string
    name: string
  }
}

// FAQ Schema
export interface FAQItem {
  question: string
  answer: string
}

export interface FAQSchema {
  '@context': string
  '@type': string
  mainEntity: Array<{
    '@type': string
    name: string
    acceptedAnswer: {
      '@type': string
      text: string
    }
  }>
}

// Navigation link
export interface NavLink {
  label: string
  href: string
  external?: boolean
}
