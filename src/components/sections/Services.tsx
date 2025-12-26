import { Link } from 'react-router-dom'
import { Dumbbell, Laptop, Target, Book, Phone } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/common/AnimatedSection'


const services = [
  {
    id: 'percorso-completo',
    title: 'Percorso Personalizzato 6 Mesi',
    description: 'Un percorso completo su misura per il tuo corpo, i tuoi obiettivi e la tua vita. Combina allenamenti, nutrizione, monitoraggio e supporto costante per risultati garantiti.',
    icon: Target,
    features: [
      'Analisi dettagliata della composizione corporea',
      'Piano allenamento e nutrizione personalizzato',
      'Revisioni e aggiornamenti periodici',
      'Risultati misurabili in 6 mesi',
      'Accesso all’app predittiva per progressi e calcolo carichi',
      'Supporto e check-in continui'
    ]
  },
  {
    id: 'personal-training',
    title: 'Allenamento in Palestra',
    description: 'Sessioni individuali presso la palestra partner a Pergine Valsugana. Focus su tecnica, progressioni e performance.',
    icon: Dumbbell,
    features: [
      'Allenamenti one-to-one',
      'Correzione tecnica costante',
      'Schede personalizzate per ogni sessione',
      'Monitoraggio progressi in app'
    ]
  },
  {
    id: 'coaching-online',
    title: 'Coaching Online',
    description: 'Programmi di allenamento e supporto a distanza. Ideale per chi vuole allenarsi in autonomia con una guida professionale.',
    icon: Laptop,
    features: [
      'Schede e video esercizi personalizzati',
      'Supporto chat Lun-Sab',
      'Check-in mensili',
      'Progress tracking nell’app'
    ]
  },
  {
    id: 'libro-guida',
    title: 'Libro Guida al Fitness Personalizzato',
    description: 'Il libro scritto per guidarti passo passo nel tuo percorso, con strategie, consigli e tabelle pratiche per ipertrofia, dimagrimento e ricomposizione.',
    icon: Book,
    features: [
      'Strategie scientificamente validate',
      'Consigli pratici per allenamenti e alimentazione',
      'Tabelle e template da seguire',
      'Ideale come complemento al percorso personalizzato'
    ]
  },
  {
    id: 'app-personalizzata',
    title: 'App Predittiva Progressi',
    description: 'La tua app personale per monitorare i progressi, calcolare carichi e ottimizzare gli allenamenti secondo il percorso impostato.',
    icon: Phone,
    features: [
      'Calcolo automatico dei carichi',
      'Tracciamento dei progressi',
      'Grafici e statistiche personalizzate',
      'Notifiche e promemoria per sessioni e check-in'
    ]
  }
]


/**
 * Services Preview Section per la Home Page
 *
 * Mostra le 3 categorie principali di servizi con:
 * - Card responsive con hover effects
 * - Icone moderne (lucide-react)
 * - Lista features per ogni servizio
 * - Link alla pagina Servizi completa
 */
export function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            I Miei Servizi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Scegli il percorso più adatto alle tue esigenze. Ogni programma è
            personalizzato per massimizzare i tuoi risultati.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <AnimatedSection
                key={service.id}
                animation="fadeInUp"
                delay={index * 0.1}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary-200">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary-600" />
                    </div>
                    <CardTitle className="text-xl font-display">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            )
          })}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center mt-12" delay={0.4}>
          <Button asChild size="lg" variant="outline">
            <Link to="/servizi">Scopri Tutti i Dettagli</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
