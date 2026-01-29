import { Link } from 'react-router-dom'
import { ArrowRight, Laptop, TrendingUp, Database, Bell, BarChart3, Activity  } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { Hero } from '@/components/sections/Hero'
import { WhyChooseMe } from '@/components/sections/WhyChooseMe'
import { BiomechanicsSection } from '@/components/sections/BiomechanicsSection'
import { ComparisonSection } from '@/components/sections/ComparisonSection'
import { BookSection } from '@/components/sections/BookSection'
import { InstagramSection } from '@/components/sections/InstagramSection'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { Button } from '@/components/ui/button'
import { seoConfig } from '@/lib/seo-config'
import { Card, CardContent } from '@/components/ui/card'
import { getLocalBusinessSchema, generateSchemaScript } from '@/lib/schema-org'
import { StickyScroll, StickyScrollItem } from '@/components/common/StickyScroll'
import { GoogleReviews } from '../components/GoogleReviews'

/**
 * Home Page
 *
 * Struttura:
 * - Hero con H1 SEO e CTA
 * - Why Choose Me (4 benefit)
 * - Book Section (libro gratuito)
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

      {/* Why Choose Me */}
      <WhyChooseMe />

      {/* Biomechanics Specialization */}
      <BiomechanicsSection />

      {/* Comparison Section - My Path vs Others */}
      <ComparisonSection />

       {/* Software Predittivo Section */}
      <section className="section-padding bg-gradient-to-b from-primary-500/5 to-transparent">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-500/10 px-4 py-2 rounded-full mb-6 border border-primary-500/20">
              <Laptop className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium text-primary-500">Tecnologia Avanzata</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Software Predittivo di Coaching
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ho sviluppato un <span className="text-white font-semibold">software proprietario</span> che
              rivoluziona il modo in cui alleni e monitoro i tuoi progressi. Non è una semplice app:
              è il tuo <span className="text-white font-semibold">assistente intelligente</span> che
              prevede, analizza e ottimizza ogni aspetto del tuo allenamento.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto mb-12">
            <StickyScroll className="space-y-8">
              {/* Predizione Carichi */}
              <StickyScrollItem>
                <Card className="bg-dark-900 border-white/[0.08] hover:border-primary-500/30 transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-primary-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-white mb-2">
                          Predizione Intelligente
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">Algoritmo predittivo avanzato</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Inserisci <span className="text-white font-semibold">ripetizioni e carichi</span> di
                      ogni allenamento e il software calcola automaticamente i{' '}
                      <span className="text-white font-semibold">carichi ottimali</span> per le settimane
                      successive, basandosi sul tuo andamento e sui principi di periodizzazione scientifica.
                    </p>
                  </CardContent>
                </Card>
              </StickyScrollItem>

              {/* Progressioni in Tempo Reale */}
              <StickyScrollItem>
                <Card className="bg-dark-900 border-white/[0.08] hover:border-primary-500/30 transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-6 h-6 text-primary-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-white mb-2">
                          Dati in Tempo Reale
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">Visualizzazione progressi</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Monitora le tue <span className="text-white font-semibold">progressioni su ogni esercizio</span>{' '}
                      con grafici interattivi. Vedi chiaramente quanto sei migliorato in forza, volume e
                      consistenza settimana dopo settimana.
                    </p>
                  </CardContent>
                </Card>
              </StickyScrollItem>

              {/* Notifiche Stalli */}
              <StickyScrollItem>
                <Card className="bg-dark-900 border-white/[0.08] hover:border-primary-500/30 transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Bell className="w-6 h-6 text-primary-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-white mb-2">
                          Notifiche Intelligenti
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">Rilevamento automatico stalli</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Il sistema rileva automaticamente gli <span className="text-white font-semibold">stalli
                      di performance</span> e ti notifica immediatamente. Nessun plateau passerà inosservato:
                      intervengo subito con strategie mirate per farti ripartire.
                    </p>
                  </CardContent>
                </Card>
              </StickyScrollItem>

              {/* Chat Integrata */}
              <StickyScrollItem>
                <Card className="bg-dark-900 border-white/[0.08] hover:border-primary-500/30 transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Database className="w-6 h-6 text-primary-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-white mb-2">
                          Storico dati
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">Sempre un passo avanti</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Ogni programma, ogni esercizio, ogni serie, ogni ripetizione viene tracciata e salvata, così
                      da poter analizzare a fondo il tuo percorso nel tempo. Questo storico dettagliato mi permette
                      di adattare continuamente il tuo allenamento e controllare ciò che è stato fatto nel tempo per capire quello che funziona meglio per te.
                    </p>
                  </CardContent>
                </Card>
              </StickyScrollItem>

          {/* Analisi Volume */}
          <StickyScrollItem>
              <Card className="bg-gradient-to-br from-primary-500/10 to-primary-600/5 border-primary-500/20">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                    <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Activity className="w-8 h-8 text-primary-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                        Suddivisione Volume di Allenamento
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        Analizza la <span className="text-white font-semibold">distribuzione del volume</span> per
                        gruppo muscolare, serie settimanali, intensità media. Il software ti mostra esattamente
                        se stai allenando ogni muscolo con il volume ottimale per crescere, evitando sia il
                        sovrallenamento che il sottoallenamento.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StickyScrollItem>
            </StickyScroll>

          </div>

          {/* Conclusione Software */}
          <AnimatedSection delay={0.6}>
            <div className="max-w-3xl mx-auto text-center mt-[500px] md:mt-[300px]">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
                Questo software è il <span className="text-primary-500 font-semibold">cuore della mia metodologia</span>.
                Non lasciamo nulla al caso: ogni dato, ogni ripetizione, ogni progressione viene tracciata,
                analizzata e ottimizzata per <span className="text-white font-semibold">massimizzare i tuoi risultati</span>.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Book Section */}
      <BookSection />

      <GoogleReviews />

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
                <Link to="/FAQ">
                  Leggi le FAQ
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}