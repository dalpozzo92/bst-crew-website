import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, XCircle, Clock, Target, TrendingUp, Zap, Users, BookOpen, Brain, Dumbbell, LineChart, MessageCircle, Calendar, FileText, Video, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getAssetPath } from '@/lib/assets'
import { Helmet } from 'react-helmet-async'

/**
 * Offer Secret Page - Pagina Offerta BST Crew
 * 
 * Pagina nascosta accessibile solo tramite link diretto.
 * NON indicizzata (noindex, nofollow)
 * NON presente nel menu di navigazione
 * 
 * URL: /offerta-bst-crew-2024
 */

interface PricingTier {
  name: string
  color: string
  duration3: {
    oldPrice: string
    newPrice: string
    savings: string
  }
  duration6: {
    value: string
    oldPrice: string
    newPrice: string
    savings: string
  }
  totalSavings: string
}

const pricingTiers: PricingTier[] = [
  {
    name: 'BST Smart',
    color: 'from-orange-500 to-orange-600',
    duration3: {
      oldPrice: '165€',
      newPrice: '149€',
      savings: '16€'
    },
    duration6: {
      value: '330€',
      oldPrice: '298€',
      newPrice: '249€',
      savings: '81€'
    },
    totalSavings: '81€'
  },
  {
    name: 'BST Hybrid',
    color: 'from-purple-500 to-pink-600',
    duration3: {
      oldPrice: '375€',
      newPrice: '249€',
      savings: '126€'
    },
    duration6: {
        value: '750€',
      oldPrice: '498€',
      newPrice: '449€',
      savings: '301€'
    },
    totalSavings: '301€'
  },
  {
    name: 'BST Elite',
    color: 'from-cyan-500 to-blue-600',
    duration3: {
      oldPrice: '537€',
      newPrice: '349€',
      savings: '188€'
    },
    duration6: {
        value: '1074€',
      oldPrice: '648€',
      newPrice: '549€',
      savings: '525€'
    },
    totalSavings: '525€'
  }
]

interface ComparisonFeature {
  name: string
  smart: boolean | string
  hybrid: boolean | string
  elite: boolean | string
  value?: string
}

const comparisonFeatures: ComparisonFeature[] = [
  { name: 'App BST', smart: true, hybrid: true, elite: true, value: '150€/anno' },
  { name: 'Sessioni Personal (12 sett.)', smart: false, hybrid: '2 Ore', elite: '2 Ore', value: '60€/ora' },
  { name: 'Sessioni Personal (24 sett.)', smart: false, hybrid: '4 Ore', elite: '4 Ore', value: '60€/ora' },
  { name: 'BST Muscle Mapping(Test)', smart: false, hybrid: 'Light', elite: 'Full', value: '60€' },
  { name: 'Algoritmo Progressioni & Stalli', smart: true, hybrid: true, elite: true, value: '160€/anno' },
  { name: 'Tracking Storico & Grafici', smart: true, hybrid: true, elite: true, value: '80€/anno' },
  { name: 'Video Analisi Biomeccanica', smart: false, hybrid: '5 Video/mese', elite: 'Illimitata', value: '200€/anno' },
  { name: 'Supporto Chat', smart: false, hybrid: true, elite: true, value: '100€/anno' },
  { name: 'Modifiche ai Programmi', smart: false, hybrid: 'Mensili', elite: 'Illimitata', value: '120€/anno' },
  { name: 'Check-In', smart: false, hybrid: '6 Settimane', elite: '2 Sett', value: '80€' },
  { name: 'Check Tecnico in Palestra (12 sett.)', smart: false, hybrid: false, elite: '1 Ora', value: '60€/ora' },
  { name: 'Check Tecnico in Palestra (24 sett.)', smart: false, hybrid: false, elite: '2 Ore', value: '60€/ora' },
  { name: 'Il Libro BST (Metodo/Nutriz.)', smart: false, hybrid: false, elite: true, value: '49€' },
  { name: 'Masterclass Nutrizione', smart: false, hybrid: false, elite: '1 Ora', value: '60€/ora' },
  { name: 'Guida Nutrizionale Scientifica', smart: false, hybrid: false, elite: true, value: '200€/anno' },
  { name: 'Attestato Ufficiale BST & Report finale', smart: false, hybrid: false, elite: true, value: 'Gratuito' },
  { name: 'Rinnovo a prezzo Agevolato (12 sett.)', smart: false, hybrid: false, elite: true, value: 'Esclusivo' }
]

export function OfferSecret() {
  return (
    <>
      {/* Meta tag per NON indicizzare */}
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Offerta Speciale BST Crew 2024</title>
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Logo */}
            <div className="mb-8">
              <img
                src={getAssetPath('/images/logo.webp')}
                alt="BST Crew Logo"
                className="h-16 md:h-20 w-auto mx-auto"
              />
            </div>

            {/* Titolo Principale */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                INGEGNERIA APPLICATA
              </span>
              <br />
              <span className="text-white">AL CORPO</span>
            </h1>

            {/* Sottotitolo */}
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Prospetto Informativo Percorsi di Trasformazione Biomeccanica
            </p>

            {/* Quote */}
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg md:text-xl text-gray-400 italic">
                "Non alleniamo muscoli, ottimizziamo leve.<br />
                Non vendiamo schede, programmiamo risultati."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-dark-900 border-primary-500/20">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Perché BST Crew è differente?
                  </h2>
                  <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                    <p>
                      Il mercato del fitness è saturo di schede prestampate, diete improvvisate e coaching "copia-incolla". 
                      <span className="text-white font-semibold"> BST </span> nasce per colmare questo vuoto.
                    </p>
                    <p>
                      Uniamo la scienza della biomeccanica alla potenza dei dati. Ogni ripetizione che eseguirai è stata analizzata 
                      per la tua struttura specifica, e ogni carico che solleverai è calcolato dal nostro algoritmo proprietario.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Software Section */}
      <section className="section-padding bg-gradient-to-b from-dark-800/50 to-transparent">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 border-purple-500/20">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          Software Proprietario BST
                        </span>
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        Dimentica i PDF statici. La nostra App calcola il tuo RPE (Sforzo Percepito) e adatta l'allenamento, 
                        i carichi e il volume in base alla tua stanchezza e ai tuoi feedback. È come avere il tuo Coach in tasca, 24/7.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="aspect-video bg-dark-900 rounded-xl border border-white/[0.08] flex items-center justify-center">
                        <Brain className="w-16 h-16 text-purple-400" />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-dark-900/50 rounded-xl p-4 border border-white/[0.08]">
                      <LineChart className="w-8 h-8 text-purple-400 mb-2" />
                      <h4 className="text-white font-semibold mb-1">Algoritmi Predittivi</h4>
                      <p className="text-sm text-gray-400">Calcolo automatico progressioni</p>
                    </div>
                    <div className="bg-dark-900/50 rounded-xl p-4 border border-white/[0.08]">
                      <TrendingUp className="w-8 h-8 text-purple-400 mb-2" />
                      <h4 className="text-white font-semibold mb-1">Tracking Avanzato</h4>
                      <p className="text-sm text-gray-400">Grafici storici e statistiche</p>
                    </div>
                    <div className="bg-dark-900/50 rounded-xl p-4 border border-white/[0.08]">
                      <Zap className="w-8 h-8 text-purple-400 mb-2" />
                      <h4 className="text-white font-semibold mb-1">Adattamento Real-Time</h4>
                      <p className="text-sm text-gray-400">Modifica in base al feedback</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BST Muscle Mapping Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-500/20">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                    <div className="relative">
                      <div className="aspect-square bg-dark-900 rounded-xl border border-white/[0.08] flex items-center justify-center">
                        <Target className="w-16 h-16 text-cyan-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                          BST Muscle Mapping
                        </span>
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        Il nostro test esclusivo per capire come il tuo sistema nervoso recluta le fibre muscolari. 
                        Identifichiamo i "muscoli carenti" e programmiamo esercizi specifici per sbloccarli.
                      </p>
                    </div>
                  </div>

                  <div className="bg-dark-900/50 rounded-xl p-6 border border-white/[0.08]">
                    <h4 className="text-xl font-semibold text-white mb-3">Cosa scopriamo:</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Pattern di attivazione muscolare</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Squilibri e compensi</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Esercizi ottimali per te</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Strategie di progressione personalizzate</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BST Academy Section */}
      <section className="section-padding bg-gradient-to-b from-dark-800/50 to-transparent">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border-orange-500/20">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                          BST Academy
                        </span>
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        Accesso al Libro BST e a Masterclass esclusive. La conoscenza è potere: 
                        ti insegniamo la biomeccanica e la nutrizione per renderti libero.
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <BookOpen className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="text-white font-semibold">Il Libro BST</h4>
                            <p className="text-sm text-gray-400">Metodo completo di allenamento e nutrizione</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Video className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="text-white font-semibold">Masterclass Nutrizione</h4>
                            <p className="text-sm text-gray-400">Sessioni live per approfondire</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <FileText className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="text-white font-semibold">Guida Scientifica</h4>
                            <p className="text-sm text-gray-400">Materiale di supporto continuo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="aspect-[3/4] bg-dark-900 rounded-xl border border-white/[0.08] flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-orange-400" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Il Percorso Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              IL PERCORSO
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-dark-900 border-white/[0.08] hover:border-purple-500/30 transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                        01
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">INGRESSO & SETUP</h3>
                      <p className="text-lg text-purple-400 mb-3">Architettura del Risultato</p>
                      <p className="text-gray-300 leading-relaxed">
                        In questa fase non mi limito a darti una scheda: costruiamo la fondamenta del tuo nuovo fisico.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-dark-900 border-white/[0.08] hover:border-cyan-500/30 transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                        02
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">ALLENAMENTO GUIDATO</h3>
                      <p className="text-lg text-cyan-400 mb-3">Costruisci le Fondamenta</p>
                      <p className="text-gray-300 leading-relaxed">
                        Entriamo nel vivo con il monitoraggio scientifico tramite il mio software.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-dark-900 border-white/[0.08] hover:border-green-500/30 transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                        03
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">EVOLUZIONE</h3>
                      <p className="text-lg text-green-400 mb-3">Al Di Sopra della Media</p>
                      <p className="text-gray-300 leading-relaxed">
                        Oltre i plateau. Qui è dove il corpo si trasforma davvero e la mente segue.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-dark-900 border-white/[0.08] hover:border-yellow-500/30 transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                        04
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">CONSOLIDAMENTO & USCITA</h3>
                      <p className="text-lg text-yellow-400 mb-3">Il Tuo Nuovo Standard</p>
                      <p className="text-gray-300 leading-relaxed">
                        Non è una fine, ma la certificazione che sei diventato un atleta consapevole.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Comparison Table */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Confronto Completo dei Piani
            </h2>
            <p className="text-lg text-gray-400">
              Tutti i dettagli di ciò che ottieni con ogni piano
            </p>
          </motion.div>

          {/* Desktop Table */}
          <div className="hidden lg:block max-w-6xl mx-auto overflow-hidden rounded-2xl border border-white/[0.08]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-dark-900">
                    <th className="text-left p-4 text-gray-400 font-medium"></th>
                    <th className="p-4 text-center">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-4 rounded-lg font-bold">
                        BST Smart
                      </div>
                    </th>
                    <th className="p-4 text-center">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 px-4 rounded-lg font-bold">
                        BST Hybrid
                      </div>
                    </th>
                    <th className="p-4 text-center">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-bold">
                        BST Elite
                      </div>
                    </th>
                    <th className="p-4 text-center text-gray-400 font-medium">Valore</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-dark-900/50' : 'bg-dark-800/30'}>
                      <td className="p-4 text-gray-300">{feature.name}</td>
                      <td className="p-4 text-center">
                        {typeof feature.smart === 'boolean' ? (
                          feature.smart ? (
                            <CheckCircle2 className="w-6 h-6 text-green-400 mx-auto" />
                          ) : (
                            <XCircle className="w-6 h-6 text-red-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-300">{feature.smart}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof feature.hybrid === 'boolean' ? (
                          feature.hybrid ? (
                            <CheckCircle2 className="w-6 h-6 text-green-400 mx-auto" />
                          ) : (
                            <XCircle className="w-6 h-6 text-red-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-300">{feature.hybrid}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof feature.elite === 'boolean' ? (
                          feature.elite ? (
                            <CheckCircle2 className="w-6 h-6 text-green-400 mx-auto" />
                          ) : (
                            <XCircle className="w-6 h-6 text-red-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-300">{feature.elite}</span>
                        )}
                      </td>
                      <td className="p-4 text-center text-gray-400 text-sm">{feature.value}</td>
                    </tr>
                  ))}
                  <tr className="bg-dark-900 font-bold text-lg">
                    <td className="p-4 text-white">VALORE 6 MESI</td>
                    <td className="p-4 text-center text-primary-500">330€</td>
                    <td className="p-4 text-center text-primary-500">750€</td>
                    <td className="p-4 text-center text-primary-500">1074€</td>
                    <td className="p-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-dark-900 border-white/[0.08]">
                  <CardContent className="p-6">
                    <div className={`bg-gradient-to-r ${tier.color} text-white text-center py-3 px-4 rounded-lg mb-6 font-bold text-xl`}>
                      {tier.name}
                    </div>
                    <div className="space-y-3">
                      {comparisonFeatures.map((feature) => {
                        const value = index === 0 ? feature.smart : index === 1 ? feature.hybrid : feature.elite
                        return (
                          <div key={feature.name} className="flex items-start justify-between py-3 border-b border-white/[0.08] gap-4">
                            <div className="flex-1">
                              <span className="text-sm text-gray-300 block mb-1">{feature.name}</span>
                              {feature.value && (
                                <span className="text-xs text-gray-500">Valore: {feature.value}</span>
                              )}
                            </div>
                            <div className="text-right flex-shrink-0">
                              {typeof value === 'boolean' ? (
                                value ? (
                                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                                ) : (
                                  <XCircle className="w-5 h-5 text-red-400" />
                                )
                              ) : (
                                <span className="text-sm text-white font-medium">{value}</span>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-gradient-to-b from-dark-800/50 to-transparent">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              I Piani di Trasformazione
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              Il cambiamento fisico e l'apprendimento tecnico richiedono tempo. 
              Abbiamo strutturato i nostri piani per premiare gli atleti che scelgono di impegnarsi seriamente nel lungo periodo, 
              offrendo il massimo della tecnologia e del supporto al miglior prezzo possibile.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-dark-900 border-white/[0.08] hover:border-primary-500/30 transition-all h-full">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${tier.color} text-white text-center py-4 px-6 rounded-xl mb-6 font-bold text-2xl`}>
                      {tier.name}
                    </div>

                    {/* 3 Mesi */}
                    <div className="mb-6 pb-6 border-b border-white/[0.08]">
                      <p className="text-sm text-gray-400 mb-2">3 MESI</p>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-sm text-gray-500">Valore</span>
                        <span className="text-xl text-red-400 line-through">{tier.duration3.oldPrice}</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-gray-400">Reale</span>
                        <span className="text-3xl font-bold text-primary-500">{tier.duration3.newPrice}</span>
                      </div>
                    </div>

                    {/* 6 Mesi */}
                    <div className="mb-6 pb-6 border-b border-white/[0.08]">
                      <p className="text-sm text-gray-400 mb-2">6 MESI</p>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-sm text-gray-500">Valore</span>
                        <span className="text-xl text-red-400 line-through">{tier.duration6.value}</span>
                      </div>
                      <div className="mb-2">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-sm text-gray-400">Offerta</span>
                          <span className="text-xl text-gray-500 line-through">{tier.duration6.oldPrice}</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm text-gray-400">Reale</span>
                          <span className="text-3xl font-bold text-primary-500">{tier.duration6.newPrice}</span>
                        </div>
                      </div>
                    </div>

                    {/* Risparmio */}
                    <div className="text-center">
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-lg px-4 py-2">
                        Risparmio: {tier.totalSavings}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Piano Elite Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-500/20">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <Award className="w-8 h-8 text-cyan-400" />
                  PIANO ELITE: LA TUA SCELTA STRATEGICA
                </h3>

                <div className="space-y-6">
                  {/* Opzione 6 Mesi */}
                  <div>
                    <h4 className="text-xl font-bold text-cyan-400 mb-3">1. Opzione 6 MESI (Best Value)</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                        <span>
                          <span className="font-semibold">Risparmio Immediato di 99€:</span> Paghi 549€ invece di 648€.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                        <span>
                          <span className="font-semibold">Miglior Tariffa:</span> Solo 91€/mese, bloccando il prezzo più basso di sempre al costo di 2 caffè al giorno!
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                        <span>
                          <span className="font-semibold">Vantaggio Continuo:</span> Potrai rinnovare sempre a questa tariffa agevolata con cicli semestrali.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Opzione 3 Mesi */}
                  <div className="pt-6 border-t border-white/[0.08]">
                    <h4 className="text-xl font-bold text-cyan-400 mb-3">2. Opzione 3 MESI (Entry)</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                        <span>
                          <span className="font-semibold">Prezzo Setup:</span> 349€ per il primo trimestre.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                        <span>
                          <span className="font-semibold">Sconto Fedeltà:</span> Dal primo rinnovo il prezzo scende a 299€ (risparmi 50€ ogni 3 mesi).
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Rinnovi */}
                  <div className="pt-6 border-t border-white/[0.08]">
                    <h4 className="text-xl font-bold text-white mb-3">RINNOVI E ONLINE</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span>
                          <span className="font-semibold">Hybrid / Smart:</span> Quote fisse di listino per garantire continuità di supporto e software.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span>
                          <span className="font-semibold">Atleti Online:</span> Le sessioni in studio diventano Call tecniche e Video-Analisi approfondita con sconto %.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>


      {/* Prossimi Passi Section */}
      <section className="section-padding bg-gradient-to-b from-dark-800/50 to-transparent">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-primary-500/10 to-purple-600/10 border-primary-500/20">
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                    PROSSIMI PASSI:
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-400 font-bold">
                        1
                      </div>
                      <p className="text-lg text-gray-300">
                        Scegli il pacchetto Elite (6 MESI per il massimo risparmio).
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-400 font-bold">
                        2
                      </div>
                      <p className="text-lg text-gray-300">
                        Saldo.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-400 font-bold">
                        3
                      </div>
                      <p className="text-lg text-gray-300">
                        Prenota il Muscle Mapping ed entra nella CREW.
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button
                      asChild
                      size="xl"
                      className="bg-primary-500 hover:bg-primary-600 text-dark-900 font-bold text-lg px-12 shadow-2xl shadow-primary-500/30"
                    >
                      <Link to="/contatti" className="inline-flex items-center">
                        Voglio Iniziare Ora
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-500 leading-relaxed">
              I risultati possono variare in base all'impegno individuale, alla genetica e alla costanza nel seguire il programma. 
              Le trasformazioni richiedono dedizione e disciplina nel tempo.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}