import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { WhyChooseMe } from '@/components/sections/WhyChooseMe'
import { BookSection } from '@/components/sections/BookSection'
import { InstagramSection } from '@/components/sections/InstagramSection'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { Button } from '@/components/ui/button'
import { seoConfig } from '@/lib/seo-config'
import { getLocalBusinessSchema, generateSchemaScript } from '@/lib/schema-org'

/**
 * Home Page
 *
 * Struttura:
 * - Hero con H1 SEO e CTA
 * - Services preview
 * - Why Choose Me (4 benefit)
 * - Instagram section
 * - Final CTA
 *
 * SEO:
 * - Meta tags ottimizzati per keyword locali
 * - Schema.org LocalBusiness
 */
export function Home() {
  const localBusinessSchema = getLocalBusinessSchema()

  return (
    <>
      <SEO
        config={seoConfig.home}
        schema={generateSchemaScript(localBusinessSchema)}
      />

      {/* Hero Section */}
      <Hero />

      {/* Services Preview */}
      <Services />

      {/* Why Choose Me */}
      <WhyChooseMe />

      {/* Book Section */}
      <BookSection />

      {/* Instagram Section */}
      <InstagramSection />

      {/* Final CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <AnimatedSection className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center bg-dark-900 border border-white/[0.08] rounded-2xl p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-5 tracking-tight">
              Inizia il Tuo Percorso Oggi
            </h2>
            <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Non aspettare domani per iniziare a trasformare il tuo fisico.
              Richiedi una consulenza gratuita e scopri come posso aiutarti a
              raggiungere i tuoi obiettivi.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary-500/90 hover:bg-primary-500 text-dark-900 font-medium shadow-lg shadow-primary-500/10 rounded-xl transition-all duration-200"
              >
                <Link to="/contatti" className="inline-flex items-center">
                  Contattami Ora
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/10 bg-white/[0.02] text-gray-300 hover:text-white hover:bg-white/[0.05] rounded-xl font-medium transition-all duration-200"
              >
                <Link to="/personal-trainer-pergine-valsugana">
                  Scopri di Più
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
