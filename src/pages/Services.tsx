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
  description: string
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
    subtitle: 'Architettura del Risultato',
    description: 'In questa fase non ci limitiamo a darti una scheda: costruiamo le fondamenta del tuo nuovo fisico.',
    duration: 'Settimana 0',
    icon: Rocket,
    image: getAssetPath('/images/coaching.webp'),
    color: 'text-primary-500',
    gradient: 'from-primary-500/20 to-primary-600/20',
    features: [
      'Call iniziale (45-60 min): Analisi profonda del tuo storico e dei tuoi obiettivi per non lasciare nulla al caso.',
      'Questionario strutturato su allenamento, stile di vita e abitudini',
      'Maping Analisi Biomeccanica: Valutazione della tua struttura, mobilità, intensità dell\'allenamento per un programma cucito sulla tua anatomia',
      'DNA Tecnico (2 Sessioni in palestra): 2 ore dal vivo per settare la tua tecnica ed eliminare ogni rischio di infortunio',
      'Il Toolkit BST: Accesso immediato al Libro BST (Nutrizione) e alla Guida Allenamento per capire la scienza dietro il tuo sforzo.',
      'Masterclass Nutrizionale (1 ora): Formazione personale per renderti consapevole e autonomo nella gestione dei tuoi macronutrienti.',
      'Linee guida alimentari personalizzate per supportare i tuoi obiettivi'
    ]
  },
  {
    id: 'training',
    number: '02',
    title: 'ALLENAMENTO GUIDATO',
    subtitle: 'Costruisci le Fondamenta',
    description: 'Entriamo nel vivo con il monitoraggio scientifico tramite il nostro software proprietario.',
    duration: 'Mesi 1-3',
    icon: Dumbbell,
    image: getAssetPath('/images/coaching1-1.webp'),
    color: 'text-accent-500',
    gradient: 'from-accent-500/20 to-accent-600/20',
    features: [
      'BST Data-Driven System: Stesura percorso personalizzato con carichi e volumi calcolati automaticamente dal nostro algoritmo per garantirti miglioramenti settimanali.',
      'Focus su tecnica impeccabile, volume progressivo e recupero ottimale',
      'Video-Feedback Analitico: Invii i tuoi video, ricevi correzioni tecniche basate sulla biomeccanica applicata.',
      'Connessione Diretta: Supporto via chat/app per risolvere ogni dubbio in tempo reale.',
      'Checkpoint Strategico (Ogni 6 sett.): 1 ora di analisi dati (in palestra o call) per verificare i risultati e ricalibrare il motore del tuo allenamento.',
      'Analisi progressi dettagliata e aggiustamenti mirati al programma',
      'Monitoraggio costante dei feedback per personalizzazione massima anche durante il percorso'
    ]
  },
  {
    id: 'evolution',
    number: '03',
    title: 'EVOLUZIONE',
    subtitle: 'Al Di Sopra della Media',
    description: 'Oltre i plateau. Qui è dove il corpo si trasforma davvero e la mente segue.',
    duration: 'Mesi 4-6',
    icon: TrendingUp,
    color: 'text-emerald-500',
    gradient: 'from-emerald-500/20 to-emerald-600/20',
    features: [
      'Programmazione Secondo Ciclo: Nuovo stimolo avanzato basato sui dati reali raccolti nei primi 3 mesi.',
      'Check strutturato ogni 6 settimane (1h) per monitoraggio e ottimizzazione',
      'Focus crescente sull\'autonomia: impari a gestirti in modo consapevole',
      'Focus High-Performance: Perfezionamento degli schemi motori complessi per spremere ogni fibra muscolare.',
      'Strategie mentali per mantenere motivazione e disciplina alta'
    ]
  },
  {
    id: 'consolidation',
    number: '04',
    title: 'CONSOLIDAMENTO & USCITA',
    subtitle: 'Il Tuo Nuovo Standard',
    description: 'Non è un addio, ma la certificazione che sei diventato un atleta consapevole.',
    duration: 'Fine percorso',
    icon: Trophy,
    color: 'text-amber-500',
    gradient: 'from-amber-500/20 to-amber-600/20',
    features: [
      'Final Report BST: Analisi dettagliata di ogni chilogrammo sollevato e di ogni centimetro perso o guadagnato.',
      'Gamification & Achievements: Visualizza le percentuali di completamento e gli stalli che abbiamo sconfitto insieme.',
      'Attestato Ufficiale BST Crew: Il riconoscimento del tuo impegno e del tuo ingresso nell\'élite dei nostri atleti.',
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
    // Timeline principale unica per sincronizzare linea e marker
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1, // Movimento fluido
        invalidateOnRefresh: true,
      }
    })

    // 1. Anima la linea (disegna il path)
    tl.to([path, pathGlow], {
      strokeDashoffset: 0,
      ease: 'none',
    })

    // 2. Anima il marker finale ESATTAMENTE quando la linea finisce
    tl.to(endMarker, {
      opacity: 1,
      scale: 3, // Effetto "pop" grande
      duration: 0.1, // Istantaneo ma con leggero ease
      ease: 'back.out(2)',
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
            preserveAspectRatio="none" // Sync perfetto con l'altezza del container
          >
            {/* Shadow/Glow effect - ottimizzato: rimosso blur pesante per performance */}
            <path
              ref={pathGlowRef}
              d="M100 0 Q 60 400 100 800 Q 140 1200 100 1600 Q 60 2000 100 2400 Q 140 2800 100 3200 Q 60 3400 100 3500"
              stroke="url(#gradient-glow)"
              strokeWidth="20"
              strokeLinecap="round"
              fill="none"
              style={{ filter: 'blur(10px)' }} // Blur CSS invece di SVG (più leggero)
              className="opacity-50"
            />
            {/* Main path - molto più visibile su mobile */}
            <path
              ref={pathRef}
              d="M100 0 Q 60 400 100 800 Q 140 1200 100 1600 Q 60 2000 100 2400 Q 140 2800 100 3200 Q 60 3400 100 3500"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              className="opacity-100"
            />

            {/* Cerchio finale - appare solo alla fine dell'animazione */}
            <g transform="translate(100, 3500)" style={{ transformOrigin: 'center' }}> // Esteso a 3500 (87% altezza)
              <circle r="12" fill="#f59e0b" opacity="0.3" style={{ filter: 'blur(4px)' }} />
              <circle ref={endMarkerRef} r="8" fill="#f59e0b" opacity="0.9" />
              <circle r="4" fill="#fff" opacity="0.9" />
            </g>

            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#5ce1e6" stopOpacity="0.4" />
                <stop offset="20%" stopColor="#aa2daa" stopOpacity="0.4" />
                <stop offset="40%" stopColor="#5ce1e6" stopOpacity="0.4" />
                <stop offset="60%" stopColor="#10b981" stopOpacity="0.4" />
                <stop offset="80%" stopColor="#f59e0b" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="gradient-glow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#5ce1e6" stopOpacity="0.3" />
                <stop offset="20%" stopColor="#aa2daa" stopOpacity="0.3" />
                <stop offset="40%" stopColor="#5ce1e6" stopOpacity="0.3" />
                <stop offset="60%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="80%" stopColor="#f59e0b" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
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
                      {/* Phase Number - CENTRALIZED */}
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-24 z-0">
                        <div className={cn(
                          "text-9xl font-display font-bold opacity-20 blur-sm select-none",
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
                        <h3 className="text-xl text-gray-300 font-semibold mb-2">
                          {phase.subtitle}
                        </h3>
                        <p className="text-xl text-gray-300 font-light">
                          {phase.description}
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
