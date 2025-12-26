import { Helmet } from 'react-helmet-async'
import { SEOConfig } from '@/types'

interface SEOProps {
  config: SEOConfig
  /**
   * Schema.org JSON-LD da includere
   */
  schema?: string
}

/**
 * Componente SEO per gestire meta tags, Open Graph, e Schema.org
 * Usa react-helmet-async per modificare il <head> in modo sicuro
 *
 * @param config - Configurazione SEO (title, description, canonical, etc.)
 * @param schema - Schema.org JSON-LD opzionale (LocalBusiness, Person, FAQPage)
 */
export function SEO({ config, schema }: SEOProps) {
  const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://bstcrew.com'
  const ogImage = config.ogImage || `${SITE_URL}/og-image.jpg`

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{config.title}</title>
      <meta name="title" content={config.title} />
      <meta name="description" content={config.description} />
      {config.keywords && config.keywords.length > 0 && (
        <meta name="keywords" content={config.keywords.join(', ')} />
      )}

      {/* Language */}
      <html lang="it" />
      <meta httpEquiv="content-language" content="it-IT" />

      {/* Canonical URL */}
      {config.canonical && <link rel="canonical" href={config.canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={config.ogType || 'website'} />
      <meta property="og:url" content={config.canonical || SITE_URL} />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="it_IT" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={config.canonical || SITE_URL} />
      <meta property="twitter:title" content={config.title} />
      <meta property="twitter:description" content={config.description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {schema}
        </script>
      )}
    </Helmet>
  )
}
