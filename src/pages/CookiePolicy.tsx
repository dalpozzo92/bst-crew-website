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
      name: 'Cookie Tecnici',
      description: 'Cookie strettamente necessari per il funzionamento del sito. Non richiedono consenso.',
      duration: 'Sessione o 1 anno',
      required: true
    },
    {
      name: 'Cookie Analitici',
      description: 'Raccolgono informazioni su come i visitatori utilizzano il sito (es. Google Analytics). Richiedono consenso.',
      duration: '2 anni',
      required: false
    },
    {
      name: 'Cookie di Marketing',
      description: 'Utilizzati per mostrare pubblicità personalizzate (es. Meta Pixel). Richiedono consenso.',
      duration: '1-2 anni',
      required: false
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
                            <h3 className="text-lg font-semibold text-gray-900">
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
                    3. Cookie Tecnici (Sempre Attivi)
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Il sito utilizza cookie tecnici necessari per:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Memorizzare le preferenze di consenso cookie</li>
                    <li>Gestire la sessione di navigazione</li>
                    <li>Garantire il corretto funzionamento del sito</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    <strong>Questi cookie non richiedono consenso</strong> in quanto
                    strettamente necessari per il funzionamento del sito (art. 122 del
                    Codice Privacy).
                  </p>
                </div>

                <Separator />

                {/* Cookie di Terze Parti */}
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    4. Cookie di Terze Parti (Solo con Consenso)
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Il sito può utilizzare, previo consenso dell'utente, cookie di terze
                    parti per le seguenti finalità:
                  </p>

                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Google Analytics (Cookie Analitici)
                      </h3>
                      <p className="text-sm leading-relaxed">
                        Servizio di analisi web fornito da Google per raccogliere statistiche
                        anonime sull'utilizzo del sito. I dati sono anonimizzati e aggregati.
                        <br />
                        <a
                          href="https://policies.google.com/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:underline"
                        >
                          Privacy Policy Google Analytics
                        </a>
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Meta Pixel (Cookie di Marketing)
                      </h3>
                      <p className="text-sm leading-relaxed">
                        Strumento di analisi e remarketing fornito da Meta/Facebook per
                        tracciare le conversioni e mostrare pubblicità personalizzate.
                        <br />
                        <a
                          href="https://www.facebook.com/privacy/policy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:underline"
                        >
                          Privacy Policy Meta
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-900">
                      ℹ️ <strong>Nota:</strong> Attualmente il sito non ha attivato
                      cookie analitici o di marketing. Questi verranno attivati solo
                      dopo aver ottenuto il tuo consenso esplicito tramite il banner
                      cookie.
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
                    Puoi gestire le tue preferenze sui cookie in qualsiasi momento:
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      <strong>Tramite il banner cookie:</strong> Alla prima visita puoi
                      scegliere se accettare tutti i cookie o solo quelli necessari
                    </li>
                    <li>
                      <strong>Tramite le impostazioni del browser:</strong> Tutti i browser
                      permettono di bloccare o eliminare i cookie. Consulta la guida del
                      tuo browser per maggiori informazioni
                    </li>
                  </ul>

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

                  <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <p className="text-sm text-amber-900">
                      ⚠️ <strong>Attenzione:</strong> Disabilitare i cookie tecnici
                      potrebbe impedire il corretto funzionamento del sito.
                    </p>
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
                    <strong>[EMAIL]</strong>
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
