import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Rocket,
  Dumbbell,
  TrendingUp,
  Trophy,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react'

// Registra ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)
import { SEO } from '@/components/common/SEO'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { seoConfig } from '@/lib/seo-config'
import { getAssetPath } from '@/lib/assets'
import { cn } from '@/lib/utils'

/**
 * Services Page - Journey Premium di 6 Mesi
 *
 * Design moderno e immersivo che racconta il percorso di trasformazione
 * come una timeline verticale con freccia animata che segue lo scroll.
 *
 * Focus su esclusività, professionalità e risultati concreti.
 */

interface Phase {
  id: string
  number: string
  title: string
  subtitle: string
  duration: string
  icon: React.ElementType
  image?: string
  features: string[]
  color: string
  gradient: string
}

const phases: Phase[] = [
  {
    id: 'kickoff',
    number: '01',
    title: 'INGRESSO & SETUP',
    subtitle: 'Fondamenta del Tuo Percorso',
    duration: 'Settimana 0-2',
    icon: Rocket,
    image: getAssetPath('/images/coaching.webp'),
    color: 'text-primary-500',
    gradient: 'from-primary-500/20 to-primary-600/20',
    features: [
      'Call Kickoff iniziale (45-60 min) per definire obiettivi e analisi storico',
      'Questionario strutturato su allenamento, stile di vita e abitudini',
      'Creazione Programma Avanzato Personalizzato',
      '2 sessioni pratiche in palestra (1h ciascuna) per set-up tecnico completo',
      'Accesso esclusivo al Libro BST sulla nutrizione (educativo)',
      'Accesso esclusivo alla GUIDA sull\'allenamento BST',
      '1 ora di formazione nutrizionale personale per autogestione consapevole',
      'Linee guida alimentari personalizzate per supportare i tuoi obiettivi'
    ]
  },
  {
    id: 'training',
    number: '02',
    title: 'ALLENAMENTO GUIDATO',
    subtitle: 'Costruisci le Fondamenta',
    duration: 'Mesi 1-3',
    icon: Dumbbell,
    image: getAssetPath('/images/coaching1-1.webp'),
    color: 'text-accent-500',
    gradient: 'from-accent-500/20 to-accent-600/20',
    features: [
      'Programma di allenamento con progressione settimanale automatica dei carichi',
      'Focus su tecnica impeccabile, volume progressivo e recupero ottimale',
      'Revisione video esercizi: invii i tuoi video, ricevi feedback personalizzato',
      'Supporto continuativo tramite chat/app per ogni dubbio',
      'Check strutturato ogni 6 settimane (1h, in palestra o call)',
      'Analisi progressi dettagliata e aggiustamenti mirati al programma',
      'Monitoraggio costante dei feedback per personalizzazione massima'
    ]
  },
  {
    id: 'evolution',
    number: '03',
    title: 'EVOLUZIONE',
    subtitle: 'Porta il Fisico al Livello Successivo',
    duration: 'Mesi 4-6',
    icon: TrendingUp,
    color: 'text-emerald-500',
    gradient: 'from-emerald-500/20 to-emerald-600/20',
    features: [
      'Nuovo programma avanzato (secondo ciclo) basato sui progressi ottenuti',
      'Continuazione revisione video esercizi con feedback tecnico avanzato',
      'Check strutturato ogni 6 settimane (1h) per monitoraggio e ottimizzazione',
      'Tecniche avanzate di allenamento per superare plateau e stalli',
      'Focus crescente sull\'autonomia: impari a gestirti in modo consapevole',
      'Perfezionamento della tecnica su esercizi complessi e multi-articolari',
      'Strategie mentali per mantenere motivazione e disciplina alta'
    ]
  },
  {
    id: 'consolidation',
    number: '04',
    title: 'CONSOLIDAMENTO & USCITA',
    subtitle: 'Mantieni i Risultati per Sempre',
    duration: 'Fine percorso',
    icon: Trophy,
    color: 'text-amber-500',
    gradient: 'from-amber-500/20 to-amber-600/20',
    features: [
      'Report finale completo dei progressi con analisi dettagliata',
      'Gamification: percentuale completamento, stalli superati, progressioni',
      'Attestato BST Crew ufficiale di completamento percorso',
      'Possibilità di rinnovo a condizioni agevolate per continuare la crescita',
      'Accesso lifetime al materiale formativo esclusivo ricevuto'
    ]
  }
]

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const pathGlowRef = useRef<SVGPathElement>(null)
  const endMarkerRef = useRef<SVGCircleElement>(null)

  // Anima la freccia con GSAP ScrollTrigger (molto più affidabile di Framer Motion)
  useEffect(() => {
    if (!containerRef.current || !pathRef.current || !pathGlowRef.current || !endMarkerRef.current) return

    const path = pathRef.current
    const pathGlow = pathGlowRef.current
    const endMarker = endMarkerRef.current
    const pathLength = path.getTotalLength() // Calcola lunghezza precisa del path

    // Setup iniziale - marker nascosto
    gsap.set([path, pathGlow], {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength
    })
    gsap.set(endMarker, { opacity: 0, scale: 0 })

    // Animazione con ScrollTrigger - inizia quando la linea è al centro dello schermo
    const scrollTrigger = {
      trigger: containerRef.current,
      start: 'top center', // Inizia quando il punto di partenza è a metà schermo
      end: 'bottom bottom', // Continua fino a quando la sezione esce completamente
      scrub: 0.1, // Molto più reattivo
      invalidateOnRefresh: true
    }

    gsap.to([path, pathGlow], {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger
    })

    // Anima il marker finale solo alla fine
    gsap.to(endMarker, {
      opacity: 1,
      scale: 1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: containerRef.current,
        start: '85% bottom', // Inizia verso la fine
        end: 'bottom bottom',
        scrub: 0.1,
        invalidateOnRefresh: true
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <>
      <SEO config={seoConfig.services} />

      {/* Hero Section - Premium & Esclusivo */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-transparent" />

        <div className="container-custom relative z-10 text-center">
          <AnimatedSection animation="fadeIn" delay={0.1}>
            <Badge className="mb-6 bg-primary-500/10 text-primary-500 hover:bg-primary-500/20 border-primary-500/30 text-sm px-4 py-1.5">
              Percorso Premium di 6 Mesi
            </Badge>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Non È Un Servizio.<br />
              <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                È Una Trasformazione.
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={0.3}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed font-light">
              Un percorso strutturato in <span className="text-white font-semibold">4 fasi progressive</span> che
              ti porterà da dove sei ora al fisico che hai sempre voluto.{' '}
              <span className="text-white font-semibold">Metodo scientifico</span>, supporto continuo, risultati garantiti.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="xl"
                className="bg-primary-500 hover:bg-primary-600 text-dark-900 font-semibold text-lg px-8"
              >
                <Link to="/contatti">
                  Richiedi Consulenza Gratuita
                </Link>
              </Button>
              <p className="text-sm text-gray-400">
                ⚡ Solo <span className="text-white font-semibold">3 posti</span> disponibili al mese
              </p>
            </div>
          </AnimatedSection>

          {/* Scroll Indicator */}
          <AnimatedSection animation="fadeIn" delay={0.6}>
            <div className="mt-16 flex flex-col items-center gap-2">
              <p className="text-sm text-gray-500 uppercase tracking-wider">Scopri il percorso</p>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2"
              >
                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline Section - Journey Verticale */}
      <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
        <div className="container-custom relative">
          {/* Freccia SVG Animata con GSAP ScrollTrigger */}
          <svg
            className="absolute left-1/2 top-0 h-full pointer-events-none z-0 w-40 sm:w-44 md:w-48"
            style={{
              transform: 'translateX(-50%)'
            }}
            viewBox="0 0 200 4000"
            fill="none"
            preserveAspectRatio="xMidYMin meet"
          >
            {/* Shadow/Glow effect - ottimizzato per iOS/Safari */}
            <path
              ref={pathGlowRef}
              d="M100 0 Q100 80 100 160 Q100 240 100 320 Q120 420 140 520 Q160 620 140 720 Q120 820 100 920 Q80 1020 60 1120 Q40 1220 60 1320 Q80 1420 100 1520 Q120 1620 140 1720 Q160 1820 140 1920 Q120 2020 100 2120 Q80 2220 100 2320 Q120 2420 140 2520 Q160 2620 140 2720 Q120 2820 100 2920 Q80 3020 100 3120 Q120 3220 140 3320 Q150 3420 140 3520 Q130 3620 120 3720 Q110 3820 110 3920 Q110 3960 110 4000"
              stroke="url(#gradient-glow)"
              strokeWidth="32"
              strokeLinecap="round"
              fill="none"
              style={{
                filter: 'url(#blur-filter)'
              }}
              className="opacity-80 md:opacity-70"
            />
            {/* Main path - molto più visibile su mobile */}
            <path
              ref={pathRef}
              d="M100 0 Q100 80 100 160 Q100 240 100 320 Q120 420 140 520 Q160 620 140 720 Q120 820 100 920 Q80 1020 60 1120 Q40 1220 60 1320 Q80 1420 100 1520 Q120 1620 140 1720 Q160 1820 140 1920 Q120 2020 100 2120 Q80 2220 100 2320 Q120 2420 140 2520 Q160 2620 140 2720 Q120 2820 100 2920 Q80 3020 100 3120 Q120 3220 140 3320 Q150 3420 140 3520 Q130 3620 120 3720 Q110 3820 110 3920 Q110 3960 110 4000"
              stroke="url(#gradient)"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
              className="opacity-100"
            />

            {/* Cerchio finale - appare solo alla fine dell'animazione */}
            <g transform="translate(110, 4000)" style={{ transformOrigin: 'center' }}>
              <circle r="12" fill="#f59e0b" opacity="0.3" style={{ filter: 'blur(4px)' }} />
              <circle ref={endMarkerRef} r="8" fill="#f59e0b" opacity="0.9" />
              <circle r="4" fill="#fff" opacity="0.9" />
            </g>

            <defs>
              {/* Filtro blur ottimizzato per iOS/Safari */}
              <filter id="blur-filter" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="24" />
              </filter>

              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#5ce1e6" stopOpacity="0.9" />
                <stop offset="20%" stopColor="#aa2daa" stopOpacity="1" />
                <stop offset="40%" stopColor="#5ce1e6" stopOpacity="1" />
                <stop offset="60%" stopColor="#10b981" stopOpacity="1" />
                <stop offset="80%" stopColor="#f59e0b" stopOpacity="1" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="gradient-glow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#5ce1e6" stopOpacity="1" />
                <stop offset="20%" stopColor="#aa2daa" stopOpacity="1" />
                <stop offset="40%" stopColor="#5ce1e6" stopOpacity="1" />
                <stop offset="60%" stopColor="#10b981" stopOpacity="1" />
                <stop offset="80%" stopColor="#f59e0b" stopOpacity="1" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Fasi del Percorso */}
          <div className="space-y-32 md:space-y-48 relative">
            {phases.map((phase, index) => {
              const Icon = phase.icon
              const isEven = index % 2 === 0

              return (
                <AnimatedSection key={phase.id} animation="fadeInUp">
                  <div className={cn(
                    "grid lg:grid-cols-2 gap-12 items-center relative",
                    !isEven && "lg:grid-flow-dense"
                  )}>
                    {/* Content Side */}
                    <div className={cn(
                      "relative z-10",
                      !isEven && "lg:col-start-2"
                    )}>
                      {/* Phase Number */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={cn(
                          "text-8xl font-display font-bold opacity-20",
                          phase.color
                        )}>
                          {phase.number}
                        </div>
                      </div>

                      {/* Phase Header */}
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={cn(
                            "w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br",
                            phase.gradient,
                            "backdrop-blur-sm border border-white/10"
                          )}>
                            <Icon className={cn("w-7 h-7", phase.color)} />
                          </div>
                          <div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                              {phase.title}
                            </h2>
                            <p className={cn("text-sm font-semibold mt-1", phase.color)}>
                              {phase.duration}
                            </p>
                          </div>
                        </div>
                        <p className="text-xl text-gray-300 font-light">
                          {phase.subtitle}
                        </p>
                      </div>

                      {/* Features List */}
                      <div className="space-y-3 mb-8">
                        {phase.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-start gap-3 group"
                          >
                            <CheckCircle2 className={cn(
                              "w-5 h-5 flex-shrink-0 mt-0.5 transition-colors",
                              phase.color,
                              "group-hover:scale-110 transition-transform"
                            )} />
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {feature}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Image Side */}
                    {phase.image && (
                      <motion.div
                        className={cn(
                          "relative",
                          !isEven && "lg:col-start-1 lg:row-start-1"
                        )}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                          <img
                            src={phase.image}
                            alt={phase.title}
                            className="w-full h-full object-cover"
                          />
                          {/* Overlay Gradient */}
                          <div className={cn(
                            "absolute inset-0 bg-gradient-to-t opacity-40",
                            phase.gradient
                          )} />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                          className="absolute -top-6 -right-6 bg-dark-900 border border-white/20 rounded-2xl px-6 py-3 shadow-xl"
                          initial={{ rotate: -5 }}
                          whileInView={{ rotate: 5 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: 'reverse'
                          }}
                        >
                          <p className={cn("text-sm font-bold", phase.color)}>
                            FASE {phase.number}
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium & Esclusivo */}
      <section className="section-padding relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-800" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <div className="bg-dark-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-16 shadow-2xl">
              <Sparkles className="w-16 h-16 text-primary-500 mx-auto mb-6" />

              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Questo Percorso Non È Per Tutti
              </h2>

              <div className="space-y-4 mb-10 text-lg text-gray-300 leading-relaxed">
                <p>
                  È per chi vuole <span className="text-white font-semibold">risultati veri</span>,
                  non promesse vuote.
                </p>
                <p>
                  È per chi è pronto a <span className="text-white font-semibold">investire su se stesso</span> con
                  serietà e dedizione.
                </p>
                <p>
                  È per chi cerca un <span className="text-white font-semibold">professionista</span>, non
                  il solito istruttore generico.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  asChild
                  size="xl"
                  className="bg-primary-500 hover:bg-primary-600 text-dark-900 font-bold text-lg px-10"
                >
                  <Link to="/contatti" className="flex items-center gap-2">
                    Richiedi Consulenza Gratuita
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>

              <p className="text-sm text-gray-500">
                La consulenza è <span className="text-primary-500 font-semibold">100% gratuita</span> e
                senza impegno. Valuteremo insieme se il percorso fa per te.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
