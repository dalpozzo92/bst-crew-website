import { Mail, MapPin, Clock } from 'lucide-react'
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
  const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/bstcrew'
  const EMAIL = import.meta.env.VITE_EMAIL || 'info@bstcrew.com'

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Area di Servizio',
      content: 'Pergine Valsugana, Trento e tutto il Trentino-Alto Adige',
      subtitle: 'Personal training in palestra a Pergine + coaching online'
    },
    {
      icon: Mail,
      title: 'Email',
      content: EMAIL,
      link: `mailto:${EMAIL}`
    },
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
      content: 'Lun-Ven: 9:00-20:00',
      subtitle: 'Sabato: 9:00-14:00'
    }
  ]

  return (
    <>
      <SEO config={seoConfig.contact} />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="container-custom">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Contattami
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Hai domande o vuoi iniziare il tuo percorso di trasformazione?
              Compila il form qui sotto o contattami direttamente. Ti risponderò
              entro 24 ore.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form (2 columns) */}
            <div className="lg:col-span-2">
              <AnimatedSection animation="fadeInLeft">
                <ContactForm />
              </AnimatedSection>
            </div>

            {/* Contact Info Sidebar (1 column) */}
            <div className="space-y-6">
              <AnimatedSection animation="fadeInRight">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
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
                        className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <span className="text-gray-900 font-medium">{info.content}</span>
                    )

                    return (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                              <Icon className="w-5 h-5 text-primary-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-gray-700 mb-1">
                                {info.title}
                              </div>
                              <div className="text-sm">{content}</div>
                              {info.subtitle && (
                                <div className="text-xs text-gray-500 mt-1">
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
                <div className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-100">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    📍 Dove mi trovo
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Collaboro con una palestra attrezzata a{' '}
                    <strong>Pergine Valsugana (TN)</strong>. Per chi non può raggiungere
                    la palestra, offro servizi di <strong>coaching online</strong> in
                    tutto il Trentino e oltre.
                  </p>
                </div>

                <div className="mt-6 p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    ⚡ Consulenza Gratuita
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    La prima consulenza è sempre gratuita e senza impegno. Analizzeremo
                    i tuoi obiettivi e troveremo insieme il percorso più adatto a te.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - Placeholder) */}
      <section className="section-padding bg-gray-50">
        <AnimatedSection className="container-custom">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
              Pergine Valsugana, Provincia di Trento
            </h2>
            <p className="text-gray-600 mb-6">
              Servizio di personal training in palestra e coaching online per tutto
              il Trentino-Alto Adige.
            </p>
            {/* TODO: Integrare Google Maps con indirizzo esatto palestra */}
            <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">
                  Qui verrà inserita la mappa di Google Maps
                  <br />
                  con l'indirizzo esatto della palestra
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
