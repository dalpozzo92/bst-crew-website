import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Helmet } from 'react-helmet-async'

export function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Pagina Non Trovata | BST Crew</title>
        <meta name="description" content="La pagina che stai cercando non esiste." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent mb-6">
            404
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pagina Non Trovata
          </h2>
          
          <p className="text-lg text-gray-400 mb-8">
            La pagina che stai cercando non esiste o è stata spostata.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary-500 hover:bg-primary-600 text-dark-900"
            >
              <Link to="/" className="inline-flex items-center">
                <Home className="w-5 h-5 mr-2" />
                Torna alla Home
              </Link>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/10 text-gray-300 hover:text-white"
            >
              <Link to="/contatti" className="inline-flex items-center">
                Contattaci
                <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}