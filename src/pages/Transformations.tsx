import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Target, TrendingUp, Award, CheckCircle2, ArrowRight } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { ScrollFloat } from '@/components/common/ScrollFloat'
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
      image: getAssetPath('/images/transformation1.webp'),
      alt: 'Trasformazione cliente BST Crew 1'
    },
    {
      id: 2,
      image: getAssetPath('/images/transformation2.webp'),
      alt: 'Trasformazione cliente BST Crew 2'
    },
    {
      id: 3,
      image: getAssetPath('/images/transformation3.webp'),
      alt: 'Trasformazione cliente BST Crew 3'
    },
    {
      id: 4,
      image: getAssetPath('/images/transformation4.webp'),
      alt: 'Trasformazione cliente BST Crew 4'
    },
    {
      id: 5,
      image: getAssetPath('/images/transformation5.webp'),
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

  // Auto-scroll infinito per la galleria - ottimizzato per iOS
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number>(0)
  const isUserScrolling = useRef<boolean>(false)
  const pauseTimeoutRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number>(0)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollSpeed = 1.2 // pixel per frame - aumentato per maggiore visibilità
    let animationFrameId: number

    const scroll = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp
      const deltaTime = timestamp - lastTimeRef.current

      // Limita a 60fps per performance consistenti su iOS
      if (deltaTime >= 16.67 && !isPaused && !isUserScrolling.current && container) {
        container.scrollLeft += scrollSpeed

        // Reset allo scroll quando arriva alla metà (dove finiscono le immagini originali)
        const maxScroll = container.scrollWidth / 2
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0
        }
        lastTimeRef.current = timestamp
      }

      animationFrameId = requestAnimationFrame(scroll)
    }

    // Gestione visibilità pagina per iOS
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId)
        }
      } else {
        lastTimeRef.current = 0
        animationFrameId = requestAnimationFrame(scroll)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Forza il primo scroll per iOS
    setTimeout(() => {
      if (container) {
        container.scrollLeft = 1
        animationFrameId = requestAnimationFrame(scroll)
      }
    }, 100)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current)
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [isPaused])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    isUserScrolling.current = false
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchCurrentX = e.touches[0].clientX
    const diff = Math.abs(touchCurrentX - touchStartX.current)

    // Se l'utente ha mosso il dito di almeno 10px, considera che sta scrollando
    if (diff > 10) {
      isUserScrolling.current = true
      setIsPaused(true)
    }
  }

  const handleTouchEnd = () => {
    // Riprendi lo scroll automatico dopo 2 secondi
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current)
    }
    pauseTimeoutRef.current = setTimeout(() => {
      isUserScrolling.current = false
      setIsPaused(false)
    }, 2000)
  }

  // Duplica le trasformazioni per l'effetto infinite loop
  const duplicatedTransformations = [...transformations, ...transformations, ...transformations]

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
            <ScrollFloat containerClassName="mb-6">
              Trasformazioni Prima e Dopo
            </ScrollFloat>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              Questi non sono sogni, sono risultati concreti ottenuti dai miei clienti
              con <span className="text-white font-normal">metodo scientifico</span>,{' '}
              <span className="text-white font-normal">costanza</span> e{' '}
              <span className="text-white font-normal">supporto continuo</span>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Horizontal Scroll Gallery - Auto-scroll Infinito */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
          <AnimatedSection>
            {/* Scroll Hint */}

            {/* Horizontal Scroll Container con Auto-scroll */}
            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="flex gap-4 md:gap-6 lg:gap-8 overflow-x-auto pb-8 px-4"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#6366f1 #1f2937',
                  scrollBehavior: 'auto',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {duplicatedTransformations.map((transformation, index) => (
                  <motion.div
                    key={`${transformation.id}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index % transformations.length) * 0.05 }}
                    className="flex-shrink-0"
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
                <ScrollFloat containerClassName="mb-6">

                  Come Ottenere Risultati Come Questi
                </ScrollFloat>
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
