import { Link } from 'react-router-dom'
import { Award, BookOpen, Target, Users } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { seoConfig } from '@/lib/seo-config'
import { getPersonSchema, generateSchemaScript } from '@/lib/schema-org'

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
                  src="/images/hero-profile.jpg"
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
