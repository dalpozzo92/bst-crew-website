import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Target, TrendingUp, Award, CheckCircle2, ArrowRight } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getAssetPath } from '@/lib/assets'
import { seoConfig } from '@/lib/seo-config'
import { ScrollStackContainer } from '@/components/common/ScrollStack'

/**
 * Transformations Page
 *
 * Mostra le trasformazioni dei clienti con:
 * - Carousel interattivo di immagini prima/dopo
 * - Descrizione persuasiva dei risultati
 * - Benefici e garanzie
 * - CTA verso consulenza
 */
export function Transformations() {
  // Array delle trasformazioni (potrai aggiungerne altre in futuro)
  const transformations = [
    {
      id: 1,
      image: getAssetPath('/images/transformation1.png'),
      alt: 'Trasformazione cliente BST Crew 1'
    },
    {
      id: 2,
      image: getAssetPath('/images/transformation2.png'),
      alt: 'Trasformazione cliente BST Crew 2'
    },
    {
      id: 3,
      image: getAssetPath('/images/transformation3.png'),
      alt: 'Trasformazione cliente BST Crew 3'
    },
    {
      id: 4,
      image: getAssetPath('/images/transformation4.png'),
      alt: 'Trasformazione cliente BST Crew 4'
    },
    {
      id: 5,
      image: getAssetPath('/images/transformation5.png'),
      alt: 'Trasformazione cliente BST Crew 5'
    }
  ]

  const benefits = [
    {
      icon: Target,
      title: 'Risultati Garantiti',
      description: 'Ogni trasformazione è il risultato di un metodo scientifico testato su centinaia di clienti.'
    },
    {
      icon: TrendingUp,
      title: 'Progressi Misurabili',
      description: 'Monitoriamo ogni dettaglio: composizione corporea, forza, performance e progressioni costanti.'
    },
    {
      icon: Award,
      title: 'Supporto Continuo',
      description: 'Non sei mai solo: chat integrata, check-in settimanali e aggiustamenti in tempo reale.'
    }
  ]

  return (
    <>
      <SEO config={seoConfig.transformations} />

      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary-500/10 text-primary-500 hover:bg-primary-500/20 border-primary-500/20">
              Risultati Reali
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              Trasformazioni Prima e Dopo
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              Questi non sono sogni, sono risultati concreti ottenuti dai miei clienti
              con <span className="text-white font-normal">metodo scientifico</span>,{' '}
              <span className="text-white font-normal">costanza</span> e{' '}
              <span className="text-white font-normal">supporto continuo</span>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Horizontal Scroll Gallery */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
          <AnimatedSection>
            {/* Scroll Hint */}
            <div className="text-center mb-8">
              <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                Scorri orizzontalmente per vedere tutte le trasformazioni
                <ChevronRight className="w-4 h-4" />
              </p>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="relative">
              <div
                className="flex gap-4 md:gap-6 lg:gap-8 overflow-x-auto pb-8 px-4 snap-x snap-mandatory scroll-smooth"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#6366f1 #1f2937',
                  scrollPaddingLeft: '50%',
                  scrollPaddingRight: '50%'
                }}
              >
                {/* Spacer per centrare la prima card */}
                <div className="flex-shrink-0 w-[calc(50vw-140px)] sm:w-[calc(50vw-180px)] md:w-[calc(50vw-260px)] lg:w-[calc(50vw-340px)] xl:w-[calc(50vw-400px)]" />

                {transformations.map((transformation, index) => (
                  <motion.div
                    key={transformation.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex-shrink-0 snap-center"
                  >
                    <Card className="bg-dark-900 border-white/[0.08] overflow-hidden group hover:border-primary-500/30 hover:scale-105 transition-all duration-300 w-[280px] sm:w-[360px] md:w-[520px] lg:w-[680px] xl:w-[800px] shadow-2xl hover:shadow-primary-500/20">
                      <CardContent className="p-0">
                        <div className="relative w-full overflow-hidden bg-dark-800" style={{ aspectRatio: '1100/800' }}>
                          <motion.img
                            src={transformation.image}
                            alt={transformation.alt}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                          {/* Gradient Overlay on Hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                {/* Spacer per centrare l'ultima card */}
                <div className="flex-shrink-0 w-[calc(50vw-140px)] sm:w-[calc(50vw-180px)] md:w-[calc(50vw-260px)] lg:w-[calc(50vw-340px)] xl:w-[calc(50vw-400px)]" />
              </div>
            </div>

            {/* Custom Scrollbar Styles */}
            <style>{`
              .overflow-x-auto::-webkit-scrollbar {
                height: 8px;
              }
              .overflow-x-auto::-webkit-scrollbar-track {
                background: #1f2937;
                border-radius: 4px;
              }
              .overflow-x-auto::-webkit-scrollbar-thumb {
                background: #6366f1;
                border-radius: 4px;
              }
              .overflow-x-auto::-webkit-scrollbar-thumb:hover {
                background: #818cf8;
              }
            `}</style>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                Come Ottenere Risultati Come Questi
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Le trasformazioni che vedi non sono frutto della fortuna. Sono il risultato
                di un metodo collaudato che combina scienza, personalizzazione e supporto continuo.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <ScrollStackContainer gap="gap-6" stackOffset={30}>
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <Card key={index} className="bg-dark-900 border-white/[0.08] hover:border-primary-500/30 transition-colors">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-primary-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {benefit.description}
                        </p>
                      </CardContent>
                    </Card>
                  )
                })}
              </ScrollStackContainer>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sales Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary-500/10 to-dark-900 border-primary-500/20">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                    Vuoi Essere il Prossimo?
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Ogni persona che vedi in queste immagini ha iniziato esattamente dove sei tu adesso.
                    La differenza? Ha deciso di investire su se stessa con il metodo giusto.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    'Programma personalizzato al 100%',
                    'Monitoraggio progressi in tempo reale',
                    'Supporto chat 6 giorni su 7',
                    'Revisioni programma ogni 4 settimane',
                    'Software predittivo esclusivo',
                    'Libro nutrizione e allenamento incluso'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="xl"
                    className="bg-primary-500/90 hover:bg-primary-500 text-dark-900 w-full sm:w-auto"
                  >
                    <Link to="/contatti" className="inline-flex items-center">
                      Richiedi Consulenza Gratuita
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="xl"
                    variant="outline"
                    className="border-white/10 bg-white/[0.02] text-gray-300 hover:text-white hover:bg-white/[0.05] hover:border-white/20 w-full sm:w-auto"
                  >
                    <Link to="/servizi">Scopri i Servizi</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              I risultati mostrati sono reali e ottenuti seguendo i programmi BST Crew.
              I tempi e i risultati possono variare in base all'impegno individuale, alla genetica
              e alla costanza nel seguire il programma. Le trasformazioni richiedono dedizione
              e disciplina nel tempo.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
