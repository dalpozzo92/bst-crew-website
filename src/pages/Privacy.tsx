import { SEO } from '@/components/common/SEO'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { Separator } from '@/components/ui/separator'
import { seoConfig } from '@/lib/seo-config'

/**
 * Privacy Policy Page
 *
 * Testo GDPR-compliant per Italia/UE
 * Template professionale da personalizzare con:
 * - Nome e dati reali del titolare
 * - Email e contatti
 * - Dettagli specifici sul trattamento dati
 */
export function Privacy() {
  return (
    <>
      <SEO config={seoConfig.privacy} />

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                Privacy Policy
              </h1>
              <p className="text-sm text-gray-600 mb-8">
                Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
              </p>

              <div className="prose prose-lg max-w-none space-y-8">
                {/* Introduzione */}
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    1. Introduzione
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    La presente Privacy Policy descrive le modalità di trattamento dei
                    dati personali degli utenti che consultano il sito web{' '}
                    <strong>BST Crew - Personal Trainer</strong> (di seguito "il Sito"),
                    in conformità al Regolamento UE 2016/679 (GDPR).
                  </p>
                </div>

                <Separator />

                {/* Titolare del Trattamento */}
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    2. Titolare del Trattamento
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {/* TODO: Sostituire con dati reali */}
                    <strong>Titolare del Trattamento:</strong> [NOME COMPLETO]
                    <br />
                    <strong>Sede:</strong> [INDIRIZZO COMPLETO], Pergine Valsugana (TN)
                    <br />
                    <strong>Email:</strong> [EMAIL]
                    <br />
                    <strong>Telefono:</strong> [TELEFONO]
                  </p>
                </div>

                <Separator />

                {/* Tipologie di Dati Raccolti */}
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    3. Tipologie di Dati Raccolti
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Il Sito raccoglie le seguenti tipologie di dati personali:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      <strong>Dati forniti volontariamente:</strong> nome, cognome, email,
                      telefono (opzionale), messaggio tramite form di contatto
                    </li>
                    <li>
                      <strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser,
                      sistema operativo, pagine visitate
                    </li>
                    <li>
                      <strong>Cookie tecnici:</strong> cookie necessari per il funzionamento
                      del sito (gestione preferenze, sessione)
                    </li>
                  </ul>
                </div>

                <Separator />

                {/* Base Giuridica e Finalità */}
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    4. Base Giuridica e Finalità del Trattamento
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    I dati personali sono trattati per le seguenti finalità:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      <strong>Rispondere alle richieste di contatto</strong> (base giuridica:
                      consenso dell'interessato, art. 6.1.a GDPR)
                    </li>
                    <li>
                      <strong>Fornire informazioni sui servizi</strong> richiesti (base
                      giuridica: esecuzione di misure precontrattuali, art. 6.1.b GDPR)
                    </li>
                    <li>
                      <strong>Garantire il corretto funzionamento del sito</strong> (base
                      giuridica: legittimo interesse, art. 6.1.f GDPR)
                    </li>
                  </ul>
                </div>

                <Separator />

                {/* Modalità di Trattamento */}
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    5. Modalità di Trattamento
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    I dati personali sono trattati con strumenti informatici e/o telematici,
                    con modalità organizzative e logiche strettamente correlate alle finalità
                    indicate. Il trattamento avviene con misure di sicurezza adeguate a
                    garantire la riservatezza, l'integrità e la disponibilità dei dati.
                  </p>
                </div>

                <Separator />

                {/* Conservazione */}
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    6. Periodo di Conservazione
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    I dati personali saranno conservati per il tempo strettamente necessario
                    a conseguire le finalità per cui sono stati raccolti e, in ogni caso, nel
                    rispetto dei termini previsti dalla normativa vigente. I dati raccolti
                    tramite form di contatto saranno conservati per massimo 2 anni, salvo
                    richiesta di cancellazione anticipata.
                  </p>
                </div>

                <Separator />

                {/* Comunicazione e Diffusione */}
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    7. Comunicazione e Diffusione dei Dati
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    I dati personali non saranno comunicati a terzi, salvo quanto necessario
                    per l'erogazione dei servizi (es. provider email per l'invio form). I
                    dati non saranno mai diffusi pubblicamente.
                  </p>
                </div>

                <Separator />

                {/* Diritti dell'Interessato */}
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    8. Diritti dell'Interessato
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ai sensi degli articoli 15-22 del GDPR, l'interessato ha diritto di:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Richiedere l'accesso ai propri dati personali</li>
                    <li>Richiedere la rettifica o la cancellazione dei dati</li>
                    <li>Richiedere la limitazione del trattamento</li>
                    <li>Opporsi al trattamento</li>
                    <li>Richiedere la portabilità dei dati</li>
                    <li>Revocare il consenso in qualsiasi momento</li>
                    <li>Proporre reclamo all'Autorità Garante (www.garanteprivacy.it)</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Per esercitare i propri diritti, contattare il Titolare via email
                    all'indirizzo: <strong>[EMAIL]</strong>
                  </p>
                </div>

                <Separator />

                {/* Cookie */}
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    9. Cookie
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Il Sito utilizza cookie tecnici necessari per il funzionamento.
                    Per maggiori informazioni, consultare la{' '}
                    <a href="/cookie-policy" className="text-primary-600 hover:underline">
                      Cookie Policy
                    </a>
                    .
                  </p>
                </div>

                <Separator />

                {/* Modifiche */}
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    10. Modifiche alla Privacy Policy
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Il Titolare si riserva il diritto di modificare la presente Privacy Policy
                    in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina
                    con aggiornamento della data.
                  </p>
                </div>

                {/* Note */}
                <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-800">
                    <strong>⚠️ IMPORTANTE:</strong> Questo è un template generico. Prima di
                    pubblicare il sito, è necessario personalizzare tutti i campi [PLACEHOLDER]
                    con i dati reali e, se possibile, far revisionare il testo da un legale
                    specializzato in privacy.
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
