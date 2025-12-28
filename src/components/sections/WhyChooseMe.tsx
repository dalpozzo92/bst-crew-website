import { Brain, LineChart, Sparkles, Trophy } from 'lucide-react'
import { AnimatedSection } from '@/components/common/AnimatedSection'

const benefits = [
  {
    title: 'Approccio Scientifico Personalizzato',
    description: 'Programmi evidence-based costruiti sulle tue esigenze e obiettivi specifici. Niente allenamenti generici, solo metodi testati e personalizzati.',
    icon: Brain
  },
  {
    title: 'Specializzazione Estetica',
    description: 'Focus su ipertrofia muscolare, definizione e ricomposizione corporea per risultati visibili. Il tuo fisico è il mio obiettivo.',
    icon: Trophy
  },
  {
    title: 'Flessibilità Totale',
    description: 'Allenamenti in palestra a Pergine Valsugana o coaching online ovunque. Scegli la modalità più adatta al tuo stile di vita.',
    icon: Sparkles
  },
  {
    title: 'Risultati Misurabili',
    description: 'Monitoraggio costante dei progressi con metodi scientifici e feedback continuo. Ogni mese vediamo quanto ti avvicini al tuo obiettivo.',
    icon: LineChart
  }
]

/**
 * Why Choose Me Section
 *
 * Evidenzia i 4 punti di forza principali:
 * - Approccio personalizzato
 * - Specializzazione estetica
 * - Flessibilità (presenza + online)
 * - Risultati misurabili
 *
 * Design con grid responsive e animazioni stagger
 */
export function WhyChooseMe() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Perché Scegliere Me
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Un metodo di lavoro professionale, basato su scienza e personalizzazione,
            per portarti ai risultati che desideri.
          </p>
        </AnimatedSection>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                delay={index * 0.1}
              >
                <div className="bg-dark-900 border border-white/[0.08] rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Additional Info */}
        <AnimatedSection className="mt-16" delay={0.5}>
          <div className="bg-dark-900 border border-white/[0.08] rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Nessun approccio standard, solo percorsi creati per te.
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Ogni corpo è unico, ogni obiettivo è diverso e ogni vita ha le sue esigenze.
Per questo creo percorsi totalmente personalizzati, progettati per adattarsi a te, non il contrario.

Che il tuo obiettivo sia aumentare la massa muscolare, perdere peso o ricomporre il tuo fisico, 
lavoreremo insieme per costruire il percorso perfetto per raggiungere i tuoi risultati in soli 6 mesi.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
