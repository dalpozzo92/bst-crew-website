import { Link } from 'react-router-dom'
import { Dumbbell, Laptop, Target, CheckCircle2, ArrowRight } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { seoConfig } from '@/lib/seo-config'

/**
 * Services Page
 *
 * Contenuto dettagliato dei 3 servizi principali:
 * 1. Personal Training in Palestra
 * 2. Coaching Online
 * 3. Percorsi Personalizzati
 *
 * Ogni servizio include:
 * - Descrizione approfondita
 * - Features/benefit
 * - Per chi è indicato
 * - Pricing info (opzionale)
 */
export function Services() {
 const services = [
    {
      id: 'percorsi-personalizzati',
      title: 'Percorso Completo Personalizzato',
      subtitle: 'Trasformazione a 360° con allenamento e nutrizione',
      description: 'Un percorso completo su misura per il tuo corpo, i tuoi obiettivi e il tuo stile di vita. Include sia il libro sulla nutrizione che la guida completa sull’allenamento, entrambi scritti da me, per garantire risultati concreti e duraturi.',
      icon: Target,
      features: [
        'Analisi completa della composizione corporea',
        'Piano di allenamento personalizzato',
        'Linee guida nutrizionali dal libro incluso',
        'Revisioni programma ogni 4 settimane',
        'Monitoraggio dei progressi con l’app predittiva',
        'Supporto motivazionale e mindset',
        'Strategie per mantenere i risultati nel tempo',
        'Durata: 12-24 settimane, con obiettivi chiari'
      ],
      idealFor: [
        'Chi vuole una trasformazione fisica completa',
        'Chi cerca risultati concreti in 6 mesi',
        'Chi vuole un supporto completo e personalizzato',
        'Chi desidera strumenti esclusivi (libro + app) per ottimizzare i progressi'
      ],
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'personal-training',
      title: 'Personal Training in Palestra',
      subtitle: 'Allenamenti One-to-One a Pergine Valsugana',
      description: 'Sessioni individuali presso la palestra partner a Pergine, con focus su tecnica, progressione e massimizzazione dei risultati.',
      icon: Dumbbell,
      features: [
        'Allenamenti one-to-one in palestra attrezzata',
        'Programmi personalizzati sessione per sessione',
        'Correzione tecnica costante',
        'Monitoraggio dei progressi settimanali',
        'Focus su ipertrofia e risultati estetici',
        'Supporto motivazionale dedicato'
      ],
      idealFor: [
        'Chi vuole massimizzare i risultati con supporto diretto',
        'Principianti che vogliono imparare la tecnica corretta',
        'Chi preferisce allenarsi con un coach al fianco'
      ],
      color: 'from-primary-400 to-primary-600'
    },
    {
      id: 'coaching-online',
      title: 'Coaching Online',
      subtitle: 'Allenati Ovunque con Supporto Professionale',
      description: 'Programmi di allenamento personalizzati con supporto a distanza, perfetto per chi vuole allenarsi autonomamente senza rinunciare alla guida professionale.',
      icon: Laptop,
      features: [
        'Schede di allenamento personalizzate',
        'Video tutorial e guida tecnica',
        'Tracciamento progressi tramite app',
        'Supporto chat Lun-Sab',
        'Check-in settimanali e feedback',
        'Aggiornamenti programma mensili',
        'Flessibilità totale di orari e location',
        'Accesso a materiale formativo esclusivo'
      ],
      idealFor: [
        'Chi non può raggiungere la palestra regolarmente',
        'Chi vuole allenarsi in autonomia con supporto professionale',
        'Chi ha orari incompatibili con sessioni in presenza',
        'Chi desidera risparmiare senza rinunciare alla qualità'
      ],
      color: 'from-accent-500 to-orange-600'
    }
  ]

  return (
    <>
      <SEO config={seoConfig.services} />

      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary-500/10 text-primary-500 hover:bg-primary-500/20 border-primary-500/20">
              Servizi Professionali
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              Servizi Personal Training
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              Scegli il percorso più adatto alle tue esigenze. Ogni programma è
              personalizzato per massimizzare i tuoi risultati, che tu preferisca
              allenarti in palestra a <span className="text-white font-normal">Pergine Valsugana</span> o online
              ovunque in <span className="text-white font-normal">Trentino</span>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding">
        <div className="container-custom space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <AnimatedSection key={service.id} animation="fadeInUp">
                <Card className="bg-dark-900 border-white/[0.08] overflow-hidden">
                  <CardContent className="p-8 md:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Image/Icon Side */}
                      <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                        <div className={`relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${service.color}`}>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Icon className="w-32 h-32 text-white opacity-30" />
                          </div>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                            {service.title}
                          </h2>
                        </div>

                        <p className="text-lg text-primary-500 font-semibold mb-4">
                          {service.subtitle}
                        </p>

                        <p className="text-gray-300 leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <Separator className="my-6 bg-white/[0.08]" />

                        {/* Features */}
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-white mb-4">
                            Cosa Include:
                          </h3>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {service.features.map((feature, i) => (
                              <div key={i} className="flex items-start">
                                <CheckCircle2 className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Separator className="my-6 bg-white/[0.08]" />

                        {/* Ideal For */}
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-white mb-4">
                            Ideale Per:
                          </h3>
                          <ul className="space-y-2">
                            {service.idealFor.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <ArrowRight className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-300">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <AnimatedSection className="container-custom text-center">
          <div className="max-w-3xl mx-auto bg-dark-900 border border-white/[0.08] rounded-2xl p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Non Sai Quale Servizio Scegliere?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Contattami per una consulenza gratuita. Analizzeremo insieme i tuoi
              obiettivi e troveremo il percorso perfetto per te.
            </p>
            <Button
              asChild
              size="xl"
              className="bg-primary-500/90 hover:bg-primary-500 text-dark-900"
            >
              <Link to="/contatti">Richiedi Consulenza Gratuita</Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
