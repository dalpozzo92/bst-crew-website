import { Target, Shield, TrendingUp, Award } from 'lucide-react'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { ScrollFloat } from '@/components/common/ScrollFloat'
import { getAssetPath } from '@/lib/assets' // Decommentare quando si aggiunge l'immagine

const biomechanicsBenefits = [
  {
    title: 'Esercizi Basati sulla Scienza',
    description: 'Ogni esercizio è scelto in base alla biomeccanica individuale, non per moda o sentito dire. Solo movimenti che funzionano davvero per il tuo corpo.',
    icon: Target
  },
  {
    title: 'Prevenzione Infortuni',
    description: 'Analisi biomeccanica approfondita per evitare movimenti dannosi e proteggere le tue articolazioni a lungo termine.',
    icon: Shield
  },
  {
    title: 'Risultati Ottimizzati',
    description: "L'approccio biomeccanico permette di massimizzare l'efficacia di ogni esercizio, portando a risultati più rapidi e duraturi.",
    icon: TrendingUp
  },
  {
    title: 'Personalizzazione Totale',
    description: 'Ogni corpo ha leve ossee e strutture diverse. Adatto gli esercizi alla tua anatomia per la massima efficienza.',
    icon: Award
  }
]

/**
 * Biomechanics Specialization Section
 *
 * Enfatizza la specializzazione in biomeccanica del personal trainer:
 * - Importanza della biomeccanica per la scelta degli esercizi
 * - Evitare esercizi per moda o sentito dire
 * - Prevenzione infortuni
 * - Risultati migliori e più rapidi
 *
 * Layout: Immagine a sinistra, contenuto a destra (responsive)
 */
export function BiomechanicsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-transparent to-primary-500/5">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-500/10 px-4 py-2 rounded-full mb-6 border border-primary-500/20">
            <Target className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-500">La Mia Specializzazione</span>
          </div>
          <ScrollFloat containerClassName="mb-6">
            Biomeccanica Applicata al Fitness
          </ScrollFloat>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Non tutti gli esercizi sono uguali per tutti. La{' '}
            <span className="text-white font-semibold">biomeccanica</span> è la scienza che
            studia il movimento del corpo umano, e applicarla correttamente fa la differenza tra
            risultati mediocri e <span className="text-white font-semibold">trasformazioni straordinarie</span>.
          </p>
        </AnimatedSection>

        {/* Main Content - Image + Text */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image */}
          <AnimatedSection animation="fadeInLeft">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary-500/5 to-accent-500/5">
                <img
                  src={getAssetPath('/images/biomeccanica.webp')}
                  alt="Biomeccanica applicata al fitness"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="fadeInRight" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                Perché la Biomeccanica fa la Differenza
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Troppo spesso vedo persone che eseguono esercizi{' '}
                <span className="text-white font-semibold">solo perché sono di moda</span> sui social
                o perché "qualcuno ha detto che funzionano". Ma il corpo umano non funziona così.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Ogni persona ha una <span className="text-white font-semibold">struttura anatomica unica</span>:
                lunghezza degli arti, angoli articolari, punti di inserzione muscolare diversi.
                Un esercizio perfetto per una persona può essere inefficace o addirittura dannoso per un'altra.
              </p>
              <div className="bg-dark-900 border border-primary-500/20 rounded-xl p-6">
                <p className="text-white font-semibold text-lg mb-2">
                  Con l'analisi biomeccanica:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">✓</span>
                    <span>Scelgo <strong className="text-white">solo gli esercizi ottimali</strong> per la tua anatomia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">✓</span>
                    <span>Evito movimenti che potrebbero causare <strong className="text-white">infortuni a lungo termine</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">✓</span>
                    <span>Massimizziamo <strong className="text-white">ogni singola ripetizione</strong> per risultati più rapidi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">✓</span>
                    <span>Personalizziamo <strong className="text-white">setup e range di movimento</strong> in base alle tue leve</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {biomechanicsBenefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                delay={index * 0.1}
              >
                <div className="bg-dark-900 border border-white/[0.08] rounded-xl p-6 shadow-md hover:shadow-xl hover:border-primary-500/30 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-500" />
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-display font-bold text-white mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Bottom Highlight */}
        <AnimatedSection className="mt-16" delay={0.5}>
          <div className="bg-gradient-to-br from-primary-500/10 to-primary-600/5 border border-primary-500/20 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Niente Esercizi "Perché Sì", Solo Scienza Applicata
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Dimentica le schede copia-incolla e gli esercizi di tendenza che non portano risultati.
                Con la <span className="text-white font-semibold">biomeccanica applicata</span>, ogni
                movimento è <span className="text-white font-semibold">studiato, testato e ottimizzato</span>{' '}
                per il tuo corpo. È così che si ottengono risultati veri, duraturi e senza rischio di infortuni.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
