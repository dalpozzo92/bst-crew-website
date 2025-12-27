import { Link } from 'react-router-dom'
import { Award, BookOpen, Target, Users, Microscope, Zap, UserCog, Laptop, TrendingUp, MessageCircle, Bell, BarChart3, Activity } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { seoConfig } from '@/lib/seo-config'
import { getPersonSchema, generateSchemaScript } from '@/lib/schema-org'
import { getAssetPath } from '@/lib/assets'

/**
 * About Page (Chi Sono)
 *
 * Contenuto:
 * - Presentazione professionale
 * - Approccio e filosofia
 * - Certificazioni (placeholder)
 * - Metodo di lavoro
 *
 * SEO:
 * - Schema.org Person per personal branding
 */
export function About() {
  const personSchema = getPersonSchema()

  const values = [
    {
      icon: Target,
      title: 'Obiettivi Chiari',
      description: 'Ogni percorso inizia con obiettivi chiari, misurabili e realistici costruiti insieme.'
    },
    {
      icon: BookOpen,
      title: 'Approccio Evidence-Based',
      description: 'Metodi scientifici e testati, non mode passeggere. Solo ciò che funziona davvero.'
    },
    {
      icon: Users,
      title: 'Personalizzazione Totale',
      description: 'Nessun programma generico. Tutto è costruito su di te, il tuo corpo, la tua vita.'
    },
    {
      icon: Award,
      title: 'Risultati Sostenibili',
      description: 'Focus su cambiamenti duraturi nel tempo, non soluzioni temporanee o estreme.'
    }
  ]

  return (
    <>
      <SEO
        config={seoConfig.about}
        schema={generateSchemaScript(personSchema)}
      />

      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <AnimatedSection animation="fadeInLeft">
              <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={getAssetPath('/images/hero-profile.jpg')}
                  alt="Personal Trainer BST Crew"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection animation="fadeInRight">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight">
                Chi Sono
              </h1>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed font-light">
                <p>
                  Sono un <span className="text-white font-normal">Personal Trainer certificato</span> specializzato in{' '}
                  <span className="text-white font-normal">ipertrofia muscolare</span>, <span className="text-white font-normal">dimagrimento</span> e{' '}
                  <span className="text-white font-normal">ricomposizione corporea</span>. La mia missione è aiutare le
                  persone a trasformare il loro fisico attraverso metodi scientifici,
                  personalizzazione e dedizione.
                </p>
                <p>
                  Lavoro principalmente a <span className="text-white font-normal">Pergine Valsugana</span> e{' '}
                  <span className="text-white font-normal">Trento</span>, ma offro anche servizi di{' '}
                  <span className="text-white font-normal">coaching online</span> per chi preferisce allenarsi in autonomia
                  o non può raggiungere la palestra.
                </p>
                <p>
                  Credo fermamente che non esistano programmi "taglia unica". Ogni persona
                  ha un corpo diverso, obiettivi diversi e una vita diversa. Per questo
                  motivo, creo <span className="text-white font-normal">programmi completamente personalizzati</span> che
                  si adattano a te, non il contrario.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary-500/90 hover:bg-primary-500 text-dark-900 font-medium rounded-xl transition-all duration-200">
                  <Link to="/contatti">Richiedi una Consulenza</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Il Mio Metodo di Lavoro
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Un approccio basato su scienza, personalizzazione e risultati concreti.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <AnimatedSection
                  key={index}
                  animation="fadeInUp"
                  delay={index * 0.1}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow bg-dark-900 border-white/[0.08]">
                    <CardContent className="pt-8 pb-6">
                      <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary-500" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-white mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Certificazioni e Formazione
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Formazione continua e certificazioni professionali per garantire i migliori risultati.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Certificazioni Card */}
            <AnimatedSection animation="fadeInUp" delay={0.1}>
              <div className="bg-dark-900 border border-white/[0.08] rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">Certificazioni</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500/60 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">
                      Personal Trainer e Bodybuilding – <span className="text-white font-medium">NSCA</span>
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500/60 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">
                      Allenamento Avanzato & Biomeccanica – <span className="text-white font-medium">RTA Resistance Training Academy</span>
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500/60 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">
                      Specialista Squat – <span className="text-white font-medium">RTA Resistance Training Academy</span>
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500/60 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">
                      Biomeccanica avanzata – <span className="text-white font-medium">Ingegneria Anabolica di Noha Rabasco</span>
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500/60 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">
                      Nutrizione Sportiva – <span className="text-white font-medium">ISSN, International Society of Sports Nutrition</span>
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Specializzazioni Card */}
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div className="bg-dark-900 border border-white/[0.08] rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">Specializzazioni</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500/60 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">
                      Biomeccanica applicata all'allenamento
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500/60 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">
                      Programmazione avanzata per ipertrofia e performance
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500/60 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">
                      Consulenze nutrizionali personalizzate
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500/60 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">
                      Strategie di progressione e monitoraggio dei carichi
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500/60 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">
                      Approccio integrato allenamento + nutrizione
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy BST Crew Section */}
      <section className="section-padding bg-gradient-to-b from-dark-800/30 to-transparent">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              La Filosofia BST Crew
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Body Science & Technique non è solo un nome: è la mia visione del fitness.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-16 mb-16">
            {/* La Scienza */}
            <AnimatedSection animation="fadeInUp" delay={0.1}>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Microscope className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white">La Scienza</h3>
                </div>
                <div className="pl-16">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Non mi accontento del <span className="text-white font-semibold">"si è sempre fatto così"</span>.
                    Voglio capire il <span className="text-white font-semibold">perché</span> dietro ogni esercizio,
                    ogni programma, ogni strategia. Solo con la scienza posso garantirti risultati veri, misurabili
                    e duraturi.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* La Tecnica */}
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white">La Tecnica</h3>
                </div>
                <div className="pl-16">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Attraverso la <span className="text-white font-semibold">biomeccanica</span> ti insegno a
                    muoverti in sintonia col tuo corpo, a sentire ogni muscolo lavorare nel modo giusto.
                    Tecnica corretta significa <span className="text-white font-semibold">risultati migliori,
                    meno infortuni, più consapevolezza</span>.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* La Personalizzazione */}
            <AnimatedSection animation="fadeInUp" delay={0.3}>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <UserCog className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white">La Personalizzazione</h3>
                </div>
                <div className="pl-16">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Non esistono schede standard, diete copia-incolla o approcci universali.
                    <span className="text-white font-semibold"> Tu sei unico</span>: il tuo corpo, i tuoi obiettivi,
                    la tua vita meritano un percorso costruito su misura.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Conclusione */}
          <AnimatedSection delay={0.4}>
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-dark-900 border border-primary-500/20 rounded-2xl p-8 md:p-12">
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6 font-light">
                  BST Crew è tutto questo: <span className="text-primary-500 font-medium">scienza, tecnica e personalizzazione</span> al servizio della tua trasformazione.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  È il mio progetto, il mio modo di essere e di lavorare nel fitness. Ed è il metodo che mi ha permesso di trasformare centinaia di persone negli ultimi 10 anni.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Software Predittivo Section */}
      <section className="section-padding bg-gradient-to-b from-primary-500/5 to-transparent">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-500/10 px-4 py-2 rounded-full mb-6 border border-primary-500/20">
              <Laptop className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium text-primary-500">Tecnologia Avanzata</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Software Predittivo di Coaching
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ho sviluppato un <span className="text-white font-semibold">software proprietario</span> che
              rivoluziona il modo in cui alleni e monitoro i tuoi progressi. Non è una semplice app:
              è il tuo <span className="text-white font-semibold">assistente intelligente</span> che
              prevede, analizza e ottimizza ogni aspetto del tuo allenamento.
            </p>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
            {/* Predizione Carichi */}
            <AnimatedSection animation="fadeInUp" delay={0.1}>
              <Card className="bg-dark-900 border-white/[0.08] hover:border-primary-500/30 transition-all h-full">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white mb-2">
                        Predizione Intelligente
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">Algoritmo predittivo avanzato</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Inserisci <span className="text-white font-semibold">ripetizioni e carichi</span> di
                    ogni allenamento e il software calcola automaticamente i{' '}
                    <span className="text-white font-semibold">carichi ottimali</span> per le settimane
                    successive, basandosi sul tuo andamento e sui principi di periodizzazione scientifica.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Progressioni in Tempo Reale */}
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <Card className="bg-dark-900 border-white/[0.08] hover:border-primary-500/30 transition-all h-full">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white mb-2">
                        Dati in Tempo Reale
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">Visualizzazione progressi</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Monitora le tue <span className="text-white font-semibold">progressioni su ogni esercizio</span>{' '}
                    con grafici interattivi. Vedi chiaramente quanto sei migliorato in forza, volume e
                    consistenza settimana dopo settimana.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Notifiche Stalli */}
            <AnimatedSection animation="fadeInUp" delay={0.3}>
              <Card className="bg-dark-900 border-white/[0.08] hover:border-primary-500/30 transition-all h-full">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Bell className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white mb-2">
                        Notifiche Intelligenti
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">Rilevamento automatico stalli</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Il sistema rileva automaticamente gli <span className="text-white font-semibold">stalli
                    di performance</span> e ti notifica immediatamente. Nessun plateau passerà inosservato:
                    intervengo subito con strategie mirate per farti ripartire.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Chat Integrata */}
            <AnimatedSection animation="fadeInUp" delay={0.4}>
              <Card className="bg-dark-900 border-white/[0.08] hover:border-primary-500/30 transition-all h-full">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white mb-2">
                        Chat Diretta con il Coach
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">Supporto continuo</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-white font-semibold">Comunicazione diretta integrata</span> nel
                    software. Domande, dubbi, feedback: sono sempre a portata di messaggio per guidarti
                    in ogni fase del percorso.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Analisi Volume */}
          <AnimatedSection delay={0.5}>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-primary-500/10 to-primary-600/5 border-primary-500/20">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                    <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Activity className="w-8 h-8 text-primary-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                        Suddivisione Volume di Allenamento
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        Analizza la <span className="text-white font-semibold">distribuzione del volume</span> per
                        gruppo muscolare, serie settimanali, intensità media. Il software ti mostra esattamente
                        se stai allenando ogni muscolo con il volume ottimale per crescere, evitando sia il
                        sovrallenamento che il sottoallenamento.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          {/* Conclusione Software */}
          <AnimatedSection delay={0.6}>
            <div className="max-w-3xl mx-auto text-center mt-16">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
                Questo software è il <span className="text-primary-500 font-semibold">cuore della mia metodologia</span>.
                Non lasciamo nulla al caso: ogni dato, ogni ripetizione, ogni progressione viene tracciata,
                analizzata e ottimizzata per <span className="text-white font-semibold">massimizzare i tuoi risultati</span>.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <AnimatedSection className="container-custom text-center">
          <div className="max-w-3xl mx-auto bg-dark-900 border border-white/[0.08] rounded-2xl p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Pronto a Iniziare?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Contattami per una consulenza gratuita e scopri come posso aiutarti
              a raggiungere i tuoi obiettivi.
            </p>
            <Button
              asChild
              size="xl"
              className="bg-primary-500/90 hover:bg-primary-500 text-dark-900"
            >
              <Link to="/contatti">Contattami Ora</Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
