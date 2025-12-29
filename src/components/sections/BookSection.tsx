import { AnimatedSection } from '@/components/common/AnimatedSection'
import { BookOpen, CheckCircle2 } from 'lucide-react'
import { getAssetPath } from '@/lib/assets'

/**
 * Book Section
 *
 * Promuove il libro gratuito incluso nel percorso
 * Layout: Immagine a sinistra, contenuto a destra
 */
export function BookSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Book Image */}
            <AnimatedSection animation="fadeInLeft">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={getAssetPath('/images/libro.webp')}
                    alt="Libro BST Crew incluso nel percorso"
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection animation="fadeInRight">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary-500" />
                </div>
                <span className="text-primary-500/90 font-medium text-sm uppercase tracking-wide">
                  Incluso nel Percorso
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 tracking-tight">
                Ricevi il Mio Libro Gratuito
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed mb-8 font-light">
                Ogni cliente che inizia un percorso con me riceve{' '}
                <span className="text-white font-normal">gratuitamente</span> il mio libro,
                una guida completa che ti accompagnerà durante tutta la trasformazione.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-white font-medium">Fondamenti scientifici</span> dell'allenamento e della nutrizione
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-white font-medium">Strategie pratiche</span> per massimizzare i risultati
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-white font-medium">Metodi testati</span> per mantenere i risultati nel tempo
                  </p>
                </div>
              </div>

              <div className="bg-dark-900 border border-white/[0.08] rounded-xl p-6">
                <p className="text-gray-400 text-sm leading-relaxed">
                  <span className="text-primary-500 font-medium">Bonus esclusivo:</span> Oltre al
                  programma personalizzato, riceverai questo manuale che contiene tutto ciò che ho
                  appreso in anni di esperienza e formazione. Un valore aggiunto per comprendere
                  ogni aspetto della tua trasformazione.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
