import { Brain, LineChart, Sparkles, Trophy } from 'lucide-react'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { ScrollFloat } from '@/components/common/ScrollFloat'

const benefits = [
  {
    title: 'Sicurezza e Personalizzazione',
    hook: 'Ti sei infortunato a causa di esercizi sbagliati?',
    description: 'La personalizzazione è la chiave. Analizzo la tua biomeccanica per adattare ogni movimento alla tua struttura, non il contrario. Niente più dolori, solo crescita.',
    icon: Brain
  },
  {
    title: 'Basta Stalli Infiniti',
    hook: 'Ti alleni da mesi ma lo specchio non cambia?',
    description: 'Il "copia-incolla" non funziona. Il mio approccio si focalizza sulla ricomposizione corporea e l’ipertrofia estetica attraverso una programmazione scientifica che evolve con te.',
    icon: Trophy
  },
  {
    title: 'Flessibilità Totale',
    hook: 'Pensi di non avere abbastanza tempo per la palestra?',
    description: 'Ottimizziamo ogni minuto. Che sia coaching online o in presenza a Pergine Valsugana, costruisco un piano che si incastra perfettamente nella tua vita frenetica con un minimo di 3 ore settimanali!.',
    icon: Sparkles
  },
  {
    title: 'Chiarezza e Metodo',
    hook: 'Ti senti perso tra mille diete e programmi diversi?',
    description: 'Smettiamo di tirare a indovinare. Monitoriamo dati e progressi con feedback costanti: saprai sempre esattamente cosa stai facendo e perché lo stai facendo.',
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
          <ScrollFloat containerClassName="mb-4">
            Perché Scegliere Me
          </ScrollFloat>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Un metodo di lavoro professionale, innovativo, basato su scienza e personalizzazione,
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
                <div className="bg-dark-900 border border-white/[0.08] rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full group hover:border-primary-500/30">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-white mb-4">
                    {benefit.title}
                  </h3>

                  {/* Gancio (Hook) - Stile Distinto */}
                  <p className="text-primary-400 font-medium italic mb-3 leading-snug">
                    "{benefit.hook}"
                  </p>

                  {/* Descrizione (Soluzione) */}
                  <p className="text-gray-400 leading-relaxed text-sm">
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
