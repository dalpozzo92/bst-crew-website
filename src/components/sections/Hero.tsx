import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Dumbbell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getAssetPath } from '@/lib/assets'
import { StatCounter } from '@/components/common/StatCounter'

/**
 * Hero Section per la Home Page
 *
 * Caratteristiche:
 * - H1 SEO-ottimizzato con keyword locale
 * - Value proposition chiara
 * - CTA primaria verso contatti
 * - Animazione entrance con Framer Motion
 * - Background gradient moderno
 * - Fade-in animato per l'immagine di sfondo
 * - Responsive design
 */
export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image con Fade-in */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={getAssetPath('/images/home-profile.webp')}
          alt="BST Crew Personal Trainer"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          onLoad={() => setImageLoaded(true)}
        />
        {/* Dark overlay per leggibilità testo */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800/60 via-dark-900/60 to-dark-800"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Logo Grande */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-12"
            >
              <img
                src={getAssetPath('/images/logo.webp')}
                alt="BST Crew Logo"
                className="h-20 md:h-24 lg:h-28 w-auto mx-auto object-contain"
              />
            </motion.div>

            {/* Nome */}
            <div className="mb-4">
              <p className="text-sm md:text-base font-light tracking-[0.5em] uppercase text-gray-300">
                Nicola Dal Pozzo
              </p>
            </div>

            {/* H1 - SEO Ottimizzato */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-3 tracking-tight">
              Personal Trainer
            </h1>

            {/* Location */}
            <div className="mb-10">
              <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300">
                Pergine Valsugana{' '}
                <span className="text-primary-500/80">·</span>{' '}
                Trento{' '}
                <span className="text-primary-500/80">·</span>{' '}
                Online
              </p>
            </div>

            {/* Subtitle - Value Proposition */}
            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto font-light">
              Personal trainer e Coaching online per{' '}
              <span className="text-gray-200 font-normal">massa muscolare</span>,{' '}
              <span className="text-gray-200 font-normal">dimagrimento</span> e{' '}
              <span className="text-gray-200 font-normal">ricomposizione corporea</span>
            </p>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/[0.03] px-4 py-2 rounded-full mb-8 border border-white/[0.08]"
            >
              <Dumbbell className="w-4 h-4 text-primary-500/80" />
              <span className="text-sm font-medium text-gray-400">Personal Trainer Certificato</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary-500/90 hover:bg-primary-500 text-dark-900 font-medium shadow-lg shadow-primary-500/10 hover:shadow-primary-500/20 rounded-xl transition-all duration-200"
              >
                <Link to="/contatti" className="inline-flex items-center">
                  Richiedi Consulenza Gratuita
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/10 bg-white/[0.02] text-gray-300 hover:text-white hover:bg-white/[0.05] hover:border-white/20 rounded-xl font-medium transition-all duration-200"
              >
                <Link to="/servizi">Scopri i Servizi</Link>
              </Button>
            </motion.div>

            {/* Social Proof / Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-4 max-w-xl mx-auto"
            >
              <StatCounter end={10} suffix="+" label="Anni Esperienza" duration={2500} />
              <StatCounter end={200} suffix="+" label="Clienti Soddisfatti" duration={2500} />
              <StatCounter end={100} suffix="%" label="Risultati" duration={2000} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
