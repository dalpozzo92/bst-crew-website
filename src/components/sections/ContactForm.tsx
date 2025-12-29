import { useRef, useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { CheckCircle2, AlertCircle, Send } from 'lucide-react'
import HCaptcha from '@hcaptcha/react-hcaptcha'

export function ContactForm() {
  const [formState, setFormState] = useState({
    isSuccess: false,
    isError: false,
    message: ''
  })

  const captchaRef = useRef<HCaptcha>(null)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const HCAPTCHA_SITE_KEY = import.meta.env.VITE_HCAPTCHA_SITE_KEY
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || 'https://formsubmit.co/17d1662df807001db96cb24a3b05473f'
  const onCaptchaChange = (token: string) => {
    setCaptchaToken(token)
  }

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  if (!captchaToken) {
    e.preventDefault()
    setFormState({
      isSuccess: false,
      isError: true,
      message: 'Completa la verifica anti-bot.'
    })
    return
  }

  // Mostra subito messaggio di successo
  e.preventDefault() // blocca il redirect
  setFormState({
    isSuccess: true,
    isError: false,
    message: 'Messaggio inviato con successo! Ti risponderò al più presto.'
  })

  // Invia form a FormSubmit tramite FormData in background
  const form = e.currentTarget
  const formData = new FormData(form)
  fetch(form.action, { method: 'POST', body: formData })
    .then(() => console.log('Email inviata'))
    .catch(() => console.log('Errore invio'))

  // Resetta hCaptcha
  captchaRef.current?.resetCaptcha()
  setCaptchaToken(null)

  // Resetta campi se vuoi
  form.reset()
}


  return (
    <Card className="max-w-2xl mx-auto bg-dark-900 border-white/[0.08]">
      <CardHeader>
        <CardTitle className="text-2xl font-display text-white">
          Richiedi una Consulenza Gratuita
        </CardTitle>
        <CardDescription className="text-base text-gray-300">
          Compila il form e ti risponderò entro 24 ore. Tutti i campi sono obbligatori.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          action={FORM_ENDPOINT}
          method="POST"
          onSubmit={onSubmit}
          className="space-y-6"
        >
          {/* Nome */}
          <div className="space-y-2">
            <label htmlFor="name">Nome e Cognome *</label>
            <Input id="name" type="text" name="name" placeholder="Mario Rossi" required />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email">Email *</label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="mario.rossi@example.com"
              required
            />
          </div>

          {/* Telefono */}
          <div className="space-y-2">
            <label htmlFor="phone">Telefono *</label>
            <Input
              id="phone"
              type="tel"
              name="phone"
              placeholder="+39 xxx xxxxxxx"
              required
            />
          </div>

          {/* Messaggio */}
          <div className="space-y-2">
            <label htmlFor="message">Messaggio *</label>
            <Textarea
              id="message"
              name="message"
              placeholder="Raccontami i tuoi obiettivi e come posso aiutarti..."
              rows={5}
              required
            />
          </div>

          {/* hCaptcha */}
          {HCAPTCHA_SITE_KEY && (
            <div className="flex justify-center">
              <HCaptcha
                ref={captchaRef}
                sitekey={HCAPTCHA_SITE_KEY}
                onVerify={onCaptchaChange}
                onExpire={() => setCaptchaToken(null)}
              />
            </div>
          )}

          {/* Messaggi di stato */}
          {formState.isSuccess && (
            <div className="flex items-start space-x-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-green-300">{formState.message}</p>
            </div>
          )}
          {formState.isError && (
            <div className="flex items-start space-x-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-300">{formState.message}</p>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary-500 hover:bg-primary-600"
            disabled={!HCAPTCHA_SITE_KEY}
          >
            <Send className="mr-2 w-5 h-5" />
            Invia Messaggio
          </Button>

          {!HCAPTCHA_SITE_KEY && (
            <p className="text-sm text-amber-600 text-center">
              ⚠️ Configurare VITE_HCAPTCHA_SITE_KEY in .env per abilitare il form
            </p>
          )}

          {/* Hidden FormSubmit fields */}
          <input type="hidden" name="_subject" value="Nuovo contatto dal sito BST Crew" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          {/* puoi aggiungere _next se vuoi redirect */}
        </form>
      </CardContent>
    </Card>
  )
}
