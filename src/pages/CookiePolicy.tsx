import { SEO } from '@/components/common/SEO'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent } from '@/components/ui/card'
import { seoConfig } from '@/lib/seo-config'

/**
 * Cookie Policy Page
 *
 * Informativa sui cookie GDPR-compliant
 * Spiega i tipi di cookie utilizzati e come gestirli
 */
export function CookiePolicy() {
  const cookieTypes = [
    {
      name: 'Cookie Tecnici Necessari (hCaptcha)',
      description: 'Cookie utilizzati per proteggere il form di contatto da spam e bot tramite hCaptcha. Sono indispensabili per la sicurezza del sito e non raccolgono dati personali identificabili.',
      duration: 'Sessione',
      required: true,
      provider: 'hCaptcha (Intuition Machines, Inc.)'
    }
  ]

  return (
    <>
      <SEO config={seoConfig.cookiePolicy} />

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                Cookie Policy
              </h1>
              <p className="text-sm text-gray-600 mb-8">
                Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
              </p>

              <div className="prose prose-lg max-w-none space-y-8">
                {/* Cosa sono i Cookie */}
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    1. Cosa sono i Cookie
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    I cookie sono piccoli file di testo che i siti web visitati dall'utente
                    inviano al suo terminale (computer, tablet, smartphone, ecc.), dove
                    vengono memorizzati per essere poi ritrasmessi agli stessi siti alla
                    successiva visita. I cookie sono utilizzati per diverse finalità,
                    per memorizzare le preferenze dell'utente, per migliorare l'esperienza
                    di navigazione e per raccogliere informazioni statistiche anonime.
                  </p>
                </div>

                <Separator />

                {/* Tipologie di Cookie */}
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    2. Tipologie di Cookie Utilizzati
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Questo sito utilizza le seguenti tipologie di cookie:
                  </p>

                  <div className="space-y-4">
                    {cookieTypes.map((cookie, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-semibold text-gray-300">
                              {cookie.name}
                            </h3>
                            {cookie.required ? (
                              <span className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded-full font-medium">
                                Sempre attivi
                              </span>
                            ) : (
                              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
                                Richiedono consenso
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                            {cookie.description}
                          </p>
                          <p className="text-xs text-gray-500">
                            <strong>Durata:</strong> {cookie.duration}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Cookie Tecnici */}
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    3. Cookie hCaptcha (Sempre Attivi)
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Il sito utilizza <strong>hCaptcha</strong>, un servizio di protezione anti-spam
                    fornito da Intuition Machines, Inc., per proteggere il form di contatto da bot
                    e accessi automatizzati dannosi.
                  </p>

                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Finalità
                      </h3>
                      <p className="text-sm leading-relaxed">
                        hCaptcha è utilizzato esclusivamente per:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                        <li>Proteggere il form di contatto da spam e bot</li>
                        <li>Verificare che l'utente sia umano e non un robot</li>
                        <li>Garantire la sicurezza del sito</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Dati Raccolti
                      </h3>
                      <p className="text-sm leading-relaxed">
                        hCaptcha può raccogliere informazioni tecniche non identificabili come:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                        <li>Indirizzo IP (anonimizzato)</li>
                        <li>User-agent del browser</li>
                        <li>Interazioni con il widget captcha</li>
                      </ul>
                      <p className="text-sm leading-relaxed mt-2">
                        <strong>Nota:</strong> hCaptcha NON raccoglie dati personali identificabili
                        né crea profili utente per scopi pubblicitari.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Base Giuridica
                      </h3>
                      <p className="text-sm leading-relaxed">
                        I cookie hCaptcha sono considerati <strong>cookie tecnici necessari</strong>{' '}
                        ai sensi dell'art. 122 del Codice Privacy e dell'art. 5(3) della Direttiva
                        ePrivacy. <strong>Non richiedono consenso esplicito</strong> in quanto
                        indispensabili per proteggere il servizio di contatto da abusi.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Privacy Policy hCaptcha
                      </h3>
                      <p className="text-sm leading-relaxed">
                        Per maggiori informazioni sul trattamento dei dati da parte di hCaptcha:
                        <br />
                        <a
                          href="https://www.hcaptcha.com/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:underline"
                        >
                          Privacy Policy hCaptcha
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* No Analytics/Marketing */}
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    4. Cookie Analitici e di Marketing
                  </h2>
                  <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-900 leading-relaxed">
                      ✅ <strong>Questo sito NON utilizza cookie di tracciamento.</strong>
                    </p>
                    <p className="text-sm text-green-800 mt-2 leading-relaxed">
                      Non utilizziamo Google Analytics, Meta Pixel, o qualsiasi altro servizio
                      di analisi o marketing. La tua privacy è protetta e non viene tracciata
                      alcuna attività di navigazione.
                    </p>
                  </div>
                </div>

                <Separator />

                {/* Gestione Cookie */}
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    5. Come Gestire i Cookie
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Poiché questo sito utilizza <strong>solo cookie tecnici necessari</strong>{' '}
                    (hCaptcha) che non richiedono consenso, non è presente un sistema di gestione
                    preferenze cookie. Tuttavia, puoi sempre bloccare i cookie tramite le impostazioni
                    del tuo browser.
                  </p>

                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg mb-4">
                    <p className="text-sm text-amber-900">
                      ⚠️ <strong>Attenzione:</strong> Bloccare i cookie hCaptcha impedirà il
                      funzionamento del form di contatto, poiché il sistema anti-spam non potrà
                      verificare che tu sia un utente umano.
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Tramite le impostazioni del browser:</strong> Tutti i browser
                    permettono di bloccare o eliminare i cookie. Consulta la guida del
                    tuo browser per maggiori informazioni:
                  </p>

                  <div className="mt-6 space-y-2 text-sm text-gray-600">
                    <p>Guide per i browser più comuni:</p>
                    <ul className="list-none space-y-1 ml-4">
                      <li>
                        <a
                          href="https://support.google.com/chrome/answer/95647"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:underline"
                        >
                          Chrome
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:underline"
                        >
                          Firefox
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://support.apple.com/it-it/HT201265"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:underline"
                        >
                          Safari
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://support.microsoft.com/it-it/microsoft-edge"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:underline"
                        >
                          Edge
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <Separator />

                {/* Contatti */}
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    6. Contatti
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Per domande o richieste riguardo ai cookie, contattare:{' '}
                    <strong>dalpozzo92@gmail.com</strong>
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    Per informazioni sul trattamento dei dati personali, consultare la{' '}
                    <a href="/privacy" className="text-primary-600 hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
