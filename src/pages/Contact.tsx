import { MapPin, Clock } from 'lucide-react'
import { InstagramIcon } from '@/components/common/InstagramIcon'
import { SEO } from '@/components/common/SEO'
import { ContactForm } from '@/components/sections/ContactForm'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { Card, CardContent } from '@/components/ui/card'
import { seoConfig } from '@/lib/seo-config'

/**
 * Contact Page
 *
 * Contenuto:
 * - Form di contatto con hCaptcha
 * - Informazioni di contatto
 * - Area di servizio
 * - Link Instagram
 * - CTA principale
 */
export function Contact() {
  const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/crew.bst/'

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Area di Servizio',
      content: 'Pergine Valsugana, Trento, Levico Terme, Caldonazzo, Rovereto',
      subtitle: 'Allenamenti in palestra a Pergine e Trento · Coaching online in tutta Italia'
    },
    // {
    //   icon: Mail,
    //   title: 'Email',
    //   content: EMAIL,
    //   link: `mailto:${EMAIL}`
    // },
    {
      icon: InstagramIcon,
      title: 'Instagram',
      content: '@bstcrew',
      link: INSTAGRAM_URL,
      external: true
    },
    {
      icon: Clock,
      title: 'Orari Consulenze',
      content: 'Lun-Ven: 18:00-21:00',
      subtitle: 'Sabato: 9:00-14:00'
    }
  ]

  return (
    <>
      <SEO config={seoConfig.contact} />

      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Contattami
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Hai domande o vuoi iniziare il tuo percorso di trasformazione?
              Compila il form qui sotto o contattami direttamente. Ti risponderò
              entro 24 ore.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form (2 columns) */}
            <div className="lg:col-span-2 w-full mx-auto max-w-3xl lg:max-w-none">
              <AnimatedSection animation="fadeInLeft">
                <ContactForm />
              </AnimatedSection>
            </div>

            {/* Contact Info Sidebar (1 column) */}
            <div className="space-y-6 w-full mx-auto max-w-3xl lg:max-w-none">
              <AnimatedSection animation="fadeInRight">
                <h2 className="text-2xl font-display font-bold text-white mb-6">
                  Informazioni di Contatto
                </h2>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    const content = info.link ? (
                      <a
                        href={info.link}
                        target={info.external ? '_blank' : undefined}
                        rel={info.external ? 'noopener noreferrer' : undefined}
                        className="text-primary-500 hover:text-primary-400 hover:underline font-medium"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <span className="text-white font-medium">{info.content}</span>
                    )

                    return (
                      <Card key={index} className="bg-dark-900 border-white/[0.08] hover:border-white/[0.12] transition-all">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center">
                              <Icon className="w-5 h-5 text-primary-500" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-gray-300 mb-1">
                                {info.title}
                              </div>
                              <div className="text-sm">{content}</div>
                              {info.subtitle && (
                                <div className="text-xs text-gray-400 mt-1">
                                  {info.subtitle}
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>

                {/* Additional Info */}
                <div className="mt-8 p-6 bg-dark-900 rounded-xl border border-white/[0.08]">
                  <h3 className="font-semibold text-white mb-3">
                    📍 Dove Opero
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Collaboro con palestre attrezzate a{' '}
                    <strong className="text-white">Pergine Valsugana</strong> e{' '}
                    <strong className="text-white">Trento</strong>. Per chi preferisce allenarsi
                    in autonomia o non può raggiungere la palestra, offro servizi di{' '}
                    <strong className="text-white">coaching online</strong> in tutta Italia.
                  </p>
                </div>

                <div className="mt-6 p-6 bg-dark-900 rounded-xl border border-white/[0.08]">
                  <h3 className="font-semibold text-white mb-3">
                    ⚡ Consulenza Gratuita
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    La prima consulenza è sempre gratuita e senza impegno. Analizzeremo
                    i tuoi obiettivi e troveremo insieme il percorso più adatto a te.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
