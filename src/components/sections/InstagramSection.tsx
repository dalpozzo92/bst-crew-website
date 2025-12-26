import { ExternalLink } from 'lucide-react'
import { InstagramIcon } from '@/components/common/InstagramIcon'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/common/AnimatedSection'

/**
 * Instagram Section
 *
 * CTA per seguire il personal trainer su Instagram
 * Include:
 * - Messaggio engaging
 * - Link diretto a Instagram
 * - Design moderno con gradient background
 *
 * TODO FUTURO: Integrare Instagram feed con API (richiede Business account)
 * Per ora mostra solo CTA per seguire
 */
export function InstagramSection() {
  const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/bstcrew'

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/[0.02] border border-white/[0.06] rounded-2xl mb-6">
            <InstagramIcon className="w-8 h-8 text-primary-500/80" />
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-5 text-white tracking-tight">
            Seguimi su Instagram
          </h2>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto font-light">
            Condivido consigli di allenamento, nutrizione e aggiornamenti
            sui progressi dei miei clienti. Unisciti alla community per rimanere sempre
            aggiornato e ispirato.
          </p>

          {/* CTA */}
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent-500/90 hover:bg-accent-500 text-white font-medium shadow-lg shadow-accent-500/10 rounded-xl transition-all duration-200"
            >
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <InstagramIcon className="mr-2 w-4 h-4" />
                Seguimi su Instagram
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Optional: Grid di placeholder per feed Instagram futuro */}
          {/*
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-white/20 backdrop-blur-sm rounded-lg"
              ></div>
            ))}
          </div>
          */}
        </AnimatedSection>
      </div>
    </section>
  )
}
