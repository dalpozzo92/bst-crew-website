import { Check, X } from 'lucide-react'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { ScrollFloat } from '@/components/common/ScrollFloat'

const comparisonFeatures = [
  {
    feature: 'Scheda Personalizzata su Misura',
    mine: true,
    others: false
  },
  {
    feature: 'Analisi Biomeccanica Individuale',
    mine: true,
    others: false
  },
  {
    feature: 'Software Predittivo per Progressioni',
    mine: true,
    others: false
  },
  {
    feature: 'Monitoraggio Costante dei Progressi',
    mine: true,
    others: false
  },
  {
    feature: 'Chat Diretta con il Coach',
    mine: true,
    others: false
  },
  {
    feature: 'Adattamento Settimanale del Programma',
    mine: true,
    others: false
  },
  {
    feature: 'Educazione Alimentare Personalizzata',
    mine: true,
    others: false
  },
  {
    feature: 'Analisi Volume per Gruppo Muscolare',
    mine: true,
    others: false
  },
  {
    feature: 'Rilevamento Automatico Stalli',
    mine: true,
    others: false
  },
  {
    feature: 'Approccio Evidence-Based',
    mine: true,
    others: false
  }
]

/**
 * Comparison Section - Il Mio Percorso vs Altri PT
 *
 * Tabella di confronto che evidenzia i vantaggi del servizio personalizzato:
 * - Colonna verde con check per "Il Mio Percorso"
 * - Colonna rossa con X per "Schede Standard Altri PT"
 *
 * Design moderno con gradiente e animazioni
 */
export function ComparisonSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-primary-500/5 to-transparent">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <ScrollFloat containerClassName="mb-6">
            Il Mio Percorso vs Schede Standard
          </ScrollFloat>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Non tutte le schede di allenamento sono uguali. Ecco il mio percorso rispetto
            alle <span className="text-white font-semibold">schede generiche</span> che trovi altrove, dagli istruttori di sala non specializzati che trovi in palestra oppure online.
          </p>
        </AnimatedSection>

        {/* Comparison Table */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-5xl mx-auto">
            {/* Header Row */}
            <div className="grid grid-cols-3 gap-1 mb-6">
              <div className="col-span-1"></div>
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-xl p-4 text-center">
                <h3 className="text-lg md:text-xl font-display font-bold text-green-400">
                  Il Mio Percorso
                </h3>
              </div>
              <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/30 rounded-xl p-4 text-center">
                <h3 className="text-lg md:text-xl font-display font-bold text-red-400">
                  Schede Standard Altri PT
                </h3>
              </div>
            </div>

            {/* Features Rows */}
            <div className="space-y-3">
              {comparisonFeatures.map((item, index) => (
                <AnimatedSection
                  key={index}
                  animation="fadeInUp"
                  delay={0.3 + index * 0.05}
                >
                  <div className="grid grid-cols-3 gap-4 items-center bg-dark-900 border border-white/[0.08] rounded-xl p-4 hover:border-primary-500/20 transition-all duration-300">
                    {/* Feature Name */}
                    <div className="col-span-1">
                      <p className="text-white font-medium text-sm md:text-base">
                        {item.feature}
                      </p>
                    </div>

                    {/* My Service - Green Check */}
                    <div className="flex justify-center">
                      {item.mine ? (
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/50">
                          <Check className="w-5 h-5 md:w-6 md:h-6 text-green-400" strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/50">
                          <X className="w-5 h-5 md:w-6 md:h-6 text-red-400" strokeWidth={3} />
                        </div>
                      )}
                    </div>

                    {/* Others - Red X */}
                    <div className="flex justify-center">
                      {item.others ? (
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/50">
                          <Check className="w-5 h-5 md:w-6 md:h-6 text-green-400" strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/50">
                          <X className="w-5 h-5 md:w-6 md:h-6 text-red-400" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Bottom CTA */}
            <AnimatedSection delay={0.8} className="mt-12">
              <div className="bg-gradient-to-br from-primary-500/10 to-primary-600/5 border border-primary-500/20 rounded-2xl p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  La Differenza è Evidente
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Non sto vendendo una semplice scheda di allenamento. Propongo un{' '}
                  <span className="text-white font-semibold">sistema completo</span>, scientificamente
                  progettato e costantemente ottimizzato per portarti ai risultati che meriti.{' '}
                  <span className="text-white font-semibold">Zero approssimazione, massima efficienza</span>.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
