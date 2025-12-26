import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Dumbbell, Target, TrendingUp, Award } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { seoConfig } from '@/lib/seo-config'
import {
  getLocalBusinessSchema,
  getFAQSchema,
  personalTrainerPergineFAQ
} from '@/lib/schema-org'

/**
 * Landing Page SEO - Personal Trainer Pergine Valsugana
 *
 * OBIETTIVO: Massimo ranking per keyword:
 * - "personal trainer Pergine Valsugana"
 * - "personal trainer Trento"
 * - "coach palestra Pergine"
 * - "personal trainer online Trentino"
 *
 * Elementi SEO:
 * - H1 ottimizzato con keyword
 * - Keyword density naturale
 * - Schema.org LocalBusiness + FAQPage
 * - Internal linking
 * - FAQ strutturate
 */
export function PersonalTrainerPergine() {
  const localBusinessSchema = getLocalBusinessSchema()
  const faqSchema = getFAQSchema(personalTrainerPergineFAQ)

  // Combina entrambi gli schema in un array
  const combinedSchema = JSON.stringify([localBusinessSchema, faqSchema], null, 2)

  const benefits = [
    {
      icon: Target,
      title: 'Risultati Personalizzati',
      description: 'Programmi su misura per ipertrofia, dimagrimento e ricomposizione corporea'
    },
    {
      icon: MapPin,
      title: 'Presenza e Online',
      description: 'Allenamenti in palestra a Pergine e coaching online in tutto il Trentino'
    },
    {
      icon: TrendingUp,
      title: 'Metodo Scientifico',
      description: 'Approccio evidence-based con monitoraggio costante dei progressi'
    },
    {
      icon: Award,
      title: 'Certificazioni',
      description: 'Personal Trainer certificato con anni di esperienza nel settore'
    }
  ]

  return (
    <>
      <SEO config={seoConfig.personalTrainerPergine} schema={combinedSchema} />

      {/* Hero Section - SEO Ottimizzato */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary-100 text-primary-700 hover:bg-primary-200">
              <MapPin className="w-3 h-3 mr-2" />
              Pergine Valsugana, Trento
            </Badge>

            {/* H1 - KEYWORD PRINCIPALE */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Personal Trainer a Pergine Valsugana:
              <span className="gradient-text block mt-2">
                Trasforma il Tuo Fisico
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Cerchi un <strong>personal trainer a Pergine Valsugana</strong> o{' '}
              <strong>Trento</strong>? Offro allenamenti personalizzati per{' '}
              <strong>ipertrofia muscolare</strong>, <strong>dimagrimento</strong> e{' '}
              <strong>ricomposizione corporea</strong>. Servizi in palestra a Pergine
              e <strong>coaching online</strong> in tutto il Trentino.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" className="bg-primary-500 hover:bg-primary-600 group">
                <Link to="/contatti" className="inline-flex items-center">
                  Richiedi Consulenza Gratuita
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline">
                <Link to="/servizi">Scopri i Servizi</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Perché Scegliere un PT a Pergine */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Perché Scegliere un Personal Trainer a Pergine Valsugana
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un <strong>personal trainer certificato</strong> fa la differenza tra allenarsi
              e <strong>ottenere risultati concreti</strong>. A Pergine Valsugana e Trento
              offro un servizio professionale personalizzato per ogni obiettivo.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
                  <Card className="h-full text-center hover:shadow-xl transition-shadow">
                    <CardContent className="pt-8 pb-6">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary-600" />
                      </div>
                      <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Servizi Specifici per Pergine e Trento */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8 text-center">
                Servizi di Personal Training a Pergine e Trento
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* In Presenza */}
                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                      <Dumbbell className="w-7 h-7 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                      Personal Training in Palestra
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Sessioni one-to-one presso la palestra partner a{' '}
                      <strong>Pergine Valsugana</strong>. Ideale per chi cerca
                      supporto diretto e vuole massimizzare i risultati.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-primary-500 mr-2">✓</span>
                        Allenamenti personalizzati
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-500 mr-2">✓</span>
                        Correzione tecnica costante
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-500 mr-2">✓</span>
                        Palestra attrezzata a Pergine
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Online */}
                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                      <Target className="w-7 h-7 text-accent-600" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                      Coaching Online Trentino
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Programmi completi di <strong>coaching online</strong> per chi
                      non può raggiungere Pergine. Disponibile in tutto il{' '}
                      <strong>Trentino-Alto Adige</strong>.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-accent-500 mr-2">✓</span>
                        Schede personalizzate
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-500 mr-2">✓</span>
                        Supporto continuo via chat
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-500 mr-2">✓</span>
                        Check-in settimanali
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section - Schema.org */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-12 text-center">
              Domande Frequenti
            </h2>

            <div className="space-y-6">
              {personalTrainerPergineFAQ.map((faq, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <AnimatedSection className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Pronto a Trasformare il Tuo Fisico?
          </h2>
          <p className="text-lg md:text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Contattami ora per una <strong>consulenza gratuita</strong>. Scopri come posso
            aiutarti a raggiungere i tuoi obiettivi con un programma personalizzato.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl" className="bg-white text-primary-700 hover:bg-primary-50">
              <Link to="/contatti">Richiedi Consulenza Gratuita</Link>
            </Button>
            <Button asChild size="xl" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/chi-sono">Chi Sono</Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
