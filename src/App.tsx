import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Layout } from '@/components/layout/Layout'

// Pages
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Services } from '@/pages/Services'
import { Contact } from '@/pages/Contact'
import { FAQ } from '@/pages/FAQ'
import { PersonalTrainerPergine } from '@/pages/PersonalTrainerPergine'
import { Privacy } from '@/pages/Privacy'
import { CookiePolicy } from '@/pages/CookiePolicy'

/**
 * Main App Component
 *
 * Setup:
 * - React Router per navigation
 * - HelmetProvider per SEO (react-helmet-async)
 * - Layout wrapper per tutte le pagine
 *
 * Routes:
 * - / - Home
 * - /chi-sono - About
 * - /servizi - Services
 * - /contatti - Contact
 * - /faq - FAQ
 * - /personal-trainer-pergine-valsugana - Landing SEO
 * - /privacy - Privacy Policy
 * - /cookie-policy - Cookie Policy
 */
function App() {
  return (
    <HelmetProvider>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-sono" element={<About />} />
            <Route path="/servizi" element={<Services />} />
            <Route path="/contatti" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route
              path="/personal-trainer-pergine-valsugana"
              element={<PersonalTrainerPergine />}
            />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />

            {/* 404 - In futuro creare pagina custom */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  )
}

export default App
