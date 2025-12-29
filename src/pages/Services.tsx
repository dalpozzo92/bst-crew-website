import { Link } from 'react-router-dom'
import { Dumbbell, Target, CheckCircle2, ArrowRight } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { seoConfig } from '@/lib/seo-config'
import { getAssetPath } from '@/lib/assets'

/**
 * Services Page
 *
 * Contenuto dettagliato dei 2 servizi principali:
 * 1. Percorso Completo Personalizzato (in presenza + online)
 * 2. Sessioni One to One
 *
 * Ogni servizio include:
 * - Descrizione approfondita
 * - Features/benefit
 * - Per chi è indicato
 * - Immagini reali del coaching
 */
export function Services() {
 const services = [
    {
      id: 'percorso-completo',
      title: 'Percorso Completo Personalizzato',
      subtitle: 'Trasformazione a 360° - In Presenza a Pergine o Online',
      description: 'Un percorso completo su misura per il tuo corpo, i tuoi obiettivi e il tuo stile di vita. Disponibile sia in presenza a Pergine Valsugana che online ovunque tu sia. Include allenamento personalizzato, linee guida nutrizionali dal mio libro e accesso all\'app predittiva per monitorare i tuoi progressi in tempo reale.',
      icon: Target,
      image: getAssetPath('/images/coaching.webp'),
      features: [
        'Modalità in presenza (Pergine Valsugana) o online - tu scegli',
        'Analisi completa della composizione corporea',
        'Piano di allenamento personalizzato con software predittivo',
        'Linee guida nutrizionali dal libro esclusivo incluso',
        'Monitoraggio progressi in tempo reale tramite app',
        'Revisioni programma ogni 4 settimane',
        'Supporto chat integrato Lun-Sab',
        'Video tutorial e guida tecnica completa',
        'Check-in mensili e feedback personalizzato',
        'Call o incontro al cambio programma per valutare insieme i progressi',
        'Strategie per mantenere i risultati nel tempo',
        'Accesso a materiale formativo esclusivo',
        'Durata: a partire da 6 mesi con obiettivi chiari'
      ],
      idealFor: [
        'Chi vuole affidarsi ad un professionista e non al solito istruttore senza specializzazioni',
        'Chi vuole una trasformazione fisica completa e duratura',
        'Chi cerca risultati concreti con un metodo scientifico',
        'Chi desidera massima flessibilità (presenza o online)',
        'Chi vuole strumenti esclusivi (libro, app, software predittivo)',
        'Chi non può raggiungere la palestra regolarmente ma vuole comunque il supporto professionale',
        'Chi ha orari flessibili e preferisce allenarsi autonomamente con una guida esperta'
      ],
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'sessioni-one-to-one',
      title: 'Sessioni One to One',
      subtitle: 'Allenamenti Individuali a Pergine Valsugana e Trento',
      description: 'Sessioni di allenamento individuali presso le palestre partner a Pergine Valsugana e Trento. Massima attenzione, correzione tecnica costante e programmazione personalizzata per ogni sessione. Ideale per chi vuole un supporto diretto e risultati rapidi.',
      icon: Dumbbell,
      image: getAssetPath('/images/coaching1-1.webp'),
      features: [
        'Allenamenti one-to-one in palestra attrezzata',
        'Perfetti per imparare insieme il programma personalizzato',
        'Disponibile a Pergine Valsugana, Trento e zone limitrofe',
        'Correzione tecnica approfondita in tempo reale',
        'Monitoraggio dei progressi',
        'Focus su ipertrofia e risultati estetici',
        'Massima motivazione e supporto dedicato',
      ],
      idealFor: [
        'Chi vuole massimizzare i risultati con supporto diretto',
        'Principianti che vogliono imparare la tecnica corretta fin da subito',
        'Chi preferisce allenarsi con un coach sempre al suo fianco',
        'Chi cerca motivazione extra e accountability costante',
        'Chi abita a Pergine Valsugana, Trento o zone limitrofe'
      ],
      color: 'from-primary-400 to-primary-600'
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
              Percorsi Professionali
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              Servizi Personal Training
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              Due soluzioni professionali per raggiungere i tuoi obiettivi. Percorsi completi
              personalizzati (in presenza o online) e sessioni individuali one-to-one nelle
              palestre di <span className="text-white font-normal">Pergine Valsugana</span> e{' '}
              <span className="text-white font-normal">Trento</span>.
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
                      {/* Image Side */}
                      <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
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
              className="bg-primary-500/90 hover:bg-primary-500 text-dark-900 w-full sm:w-auto"
            >
              <Link to="/contatti" className="whitespace-nowrap sm:whitespace-normal">
                Richiedi Consulenza Gratuita
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
