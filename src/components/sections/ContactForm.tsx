import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ContactFormData, FormState } from '@/types'

/**
 * Contact Form Component con hCaptcha
 *
 * Features:
 * - Validazione client-side con react-hook-form
 * - hCaptcha per protezione anti-bot (GDPR-friendly)
 * - Invio a servizio esterno (FormSubmit.co)
 * - Stati: loading, success, error
 * - Accessibilità WCAG 2.1 AA
 *
 * SETUP:
 * 1. Configurare VITE_HCAPTCHA_SITE_KEY in .env
 * 2. Configurare VITE_FORM_ENDPOINT in .env (FormSubmit.co URL)
 */
export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    isError: false
  })
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const captchaRef = useRef<HCaptcha>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>()

  const HCAPTCHA_SITE_KEY = import.meta.env.VITE_HCAPTCHA_SITE_KEY
  const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

  const onCaptchaChange = (token: string) => {
    setCaptchaToken(token)
  }

  const onSubmit = async (data: ContactFormData) => {
    // Verifica hCaptcha
    if (!captchaToken) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Completa la verifica anti-bot.'
      })
      return
    }

    setFormState({ isSubmitting: true, isSuccess: false, isError: false })

    try {
      // Invia a FormSubmit.co (o altro servizio)
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          'h-captcha-response': captchaToken,
          _subject: 'Nuovo contatto dal sito BST Crew',
          _template: 'table' // FormSubmit.co template
        })
      })

      if (response.ok) {
        setFormState({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: 'Messaggio inviato con successo! Ti risponderò al più presto.'
        })
        reset()
        captchaRef.current?.resetCaptcha()
        setCaptchaToken(null)
      } else {
        throw new Error('Errore durante l\'invio')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Si è verificato un errore. Riprova o contattami direttamente via email.'
      })
    }
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Nome */}
          <div className="space-y-2">
            <Label htmlFor="name">Nome e Cognome *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Mario Rossi"
              {...register('name', {
                required: 'Il nome è obbligatorio',
                minLength: {
                  value: 2,
                  message: 'Il nome deve contenere almeno 2 caratteri'
                }
              })}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className="text-sm text-red-600" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="mario.rossi@example.com"
              {...register('email', {
                required: 'L\'email è obbligatoria',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Inserisci un\'email valida'
                }
              })}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <p className="text-sm text-red-600" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Telefono */}
          <div className="space-y-2">
            <Label htmlFor="phone">Telefono</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+39 xxx xxxxxxx"
              {...register('phone', {
                required: 'Il telefono è obbligatorio',
                pattern: {
                  value: /^\+?([0-9]{2,3})\s?([0-9]{3,4})\s?([0-9]{3,4})$/,
                  message: 'Inserisci un numero di telefono valido'
                }
              })}
            />
          </div>

          {/* Messaggio */}
          <div className="space-y-2">
            <Label htmlFor="message">Messaggio *</Label>
            <Textarea
              id="message"
              placeholder="Raccontami i tuoi obiettivi e come posso aiutarti..."
              rows={5}
              {...register('message', {
                required: 'Il messaggio è obbligatorio',
                minLength: {
                  value: 10,
                  message: 'Il messaggio deve contenere almeno 10 caratteri'
                }
              })}
              className={errors.message ? 'border-red-500' : ''}
            />
            {errors.message && (
              <p className="text-sm text-red-600" role="alert">
                {errors.message.message}
              </p>
            )}
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

          {/* Success Message */}
          {formState.isSuccess && (
            <div className="flex items-start space-x-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-green-300">{formState.message}</p>
            </div>
          )}

          {/* Error Message */}
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
            disabled={formState.isSubmitting || !HCAPTCHA_SITE_KEY}
          >
            {formState.isSubmitting ? (
              <>
                <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                Invio in corso...
              </>
            ) : (
              <>
                <Send className="mr-2 w-5 h-5" />
                Invia Messaggio
              </>
            )}
          </Button>

          {!HCAPTCHA_SITE_KEY && (
            <p className="text-sm text-amber-600 text-center">
              ⚠️ Configurare VITE_HCAPTCHA_SITE_KEY in .env per abilitare il form
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
