import { ChevronDown } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { seoConfig } from '@/lib/seo-config'
import { getFAQSchema, personalTrainerPergineFAQ } from '@/lib/schema-org'
import { useState } from 'react'

/**
 * FAQ Page - Domande Frequenti
 *
 * Elementi:
 * - FAQ accordions con dark theme
 * - Schema.org FAQPage per SEO
 * - Design coerente con le altre pagine
 */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const faqSchema = getFAQSchema(personalTrainerPergineFAQ)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <SEO config={seoConfig.personalTrainerPergine} schema={JSON.stringify(faqSchema, null, 2)} />

      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary-500/10 text-primary-500 hover:bg-primary-500/20 border-primary-500/20">
              FAQ
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              Domande Frequenti
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              Trova le risposte alle domande più comuni sul personal training,
              i servizi offerti e come iniziare il tuo percorso di trasformazione.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {personalTrainerPergineFAQ.map((faq, index) => (
                <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.05}>
                  <Card
                    className="bg-dark-900 border-white/[0.08] hover:border-white/[0.12] transition-all cursor-pointer overflow-hidden"
                    onClick={() => toggleFAQ(index)}
                  >
                    <CardContent className="p-0">
                      {/* Question */}
                      <div className="flex items-center justify-between p-6">
                        <h3 className="text-lg font-semibold text-white pr-4">
                          {faq.question}
                        </h3>
                        <ChevronDown
                          className={`w-6 h-6 text-primary-500 flex-shrink-0 transition-transform duration-300 ${
                            openIndex === index ? 'rotate-180' : ''
                          }`}
                        />
                      </div>

                      {/* Answer */}
                      <div
                        className={`transition-all duration-300 ease-in-out ${
                          openIndex === index
                            ? 'max-h-96 opacity-100'
                            : 'max-h-0 opacity-0'
                        } overflow-hidden`}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-white/[0.08]">
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <AnimatedSection className="container-custom text-center">
          <div className="max-w-3xl mx-auto bg-dark-900 border border-white/[0.08] rounded-2xl p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Non Hai Trovato la Risposta?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Contattami direttamente per qualsiasi altra domanda. Sarò felice di aiutarti
              e fornirti tutte le informazioni di cui hai bisogno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contatti"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-500/90 hover:bg-primary-500 text-dark-900 font-medium rounded-lg transition-all duration-200"
              >
                Contattami
              </a>
              <a
                href="/servizi"
                className="inline-flex items-center justify-center px-8 py-3 bg-white/[0.06] hover:bg-white/[0.10] text-white font-medium rounded-lg border border-white/[0.08] transition-all duration-200"
              >
                Scopri i Servizi
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
