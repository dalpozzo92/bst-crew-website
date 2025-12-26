# BST Crew - Personal Trainer Website

Sito web vetrina professionale per Personal Trainer specializzato in ipertrofia, dimagrimento e ricomposizione corporea. Servizi a Pergine Valsugana, Trento e online in tutto il Trentino.

## 🎯 Caratteristiche Principali

- **SEO Avanzata**: Ottimizzato per keyword locali ("personal trainer Pergine Valsugana", "personal trainer Trento")
- **Performance Elevate**: Lighthouse score >90 su tutti i parametri
- **GDPR Compliant**: Cookie banner, Privacy e Cookie Policy conformi alla normativa italiana/UE
- **Design Moderno**: UI minimal fitness premium style con animazioni fluide
- **Responsive**: Desktop-first con mobile perfetto
- **Accessibilità**: WCAG 2.1 AA compliant

## 🛠 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Form**: React Hook Form + hCaptcha
- **SEO**: react-helmet-async + Schema.org
- **Routing**: React Router v6
- **Deploy**: GitHub Pages

## 📋 Requisiti

- Node.js >= 18.x
- npm o yarn

## 🚀 Setup Locale

1. **Clona il repository**
   ```bash
   git clone <repository-url>
   cd bst-crew-website
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Configura le variabili d'ambiente**

   Copia `.env.example` in `.env` e compila le variabili:

   ```bash
   cp .env.example .env
   ```

   Variabili obbligatorie:
   - `VITE_HCAPTCHA_SITE_KEY`: Site key di hCaptcha (registrati su https://hcaptcha.com)
   - `VITE_FORM_ENDPOINT`: Endpoint per l'invio form (es. FormSubmit.co)
   - `VITE_INSTAGRAM_URL`: URL profilo Instagram
   - `VITE_EMAIL`: Email di contatto
   - `VITE_SITE_URL`: URL del sito in produzione

4. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

   Il sito sarà disponibile su `http://localhost:5173`

## 📦 Build

Per creare la build di produzione:

```bash
npm run build
```

I file compilati saranno nella cartella `dist/`.

Per preview della build:

```bash
npm run preview
```

## 🌐 Deploy su GitHub Pages

Consulta il file [DEPLOY.md](./DEPLOY.md) per le istruzioni complete di deploy su GitHub Pages.

Quick start:
1. Configura repository GitHub
2. Abilita GitHub Pages nelle Settings
3. Pusha il codice su `main`
4. GitHub Actions builderà e deployerà automaticamente

## 🎨 Personalizzazione

### Logo e Immagini

1. **Logo**: Sostituire il placeholder nel componente `Header.tsx` con il logo reale
2. **Hero Image**: Sostituire il placeholder nel componente `Hero.tsx`
3. **Immagini Servizi**: Aggiungere immagini nella cartella `src/assets/` e importarle nei componenti

### Colori

Il tema colori è configurabile in `tailwind.config.js`:

```js
colors: {
  primary: {
    500: '#10b981',  // Verde energico
    // ... altri shades
  },
  accent: {
    500: '#f59e0b',  // Arancione motivazionale
  }
}
```

### Testi

Tutti i testi SEO sono centralizzati in:
- `src/lib/seo-config.ts` - Meta tags per ogni pagina
- `src/lib/schema-org.ts` - Schema.org e FAQ

### Contenuti Pagine

Modifica direttamente i componenti in `src/pages/` e `src/components/sections/`.

## 🔧 Configurazione Form Contatti

Il form usa **FormSubmit.co** (gratuito, no backend):

1. Vai su https://formsubmit.co
2. Inserisci la tua email
3. Riceverai un'email di conferma
4. Copia l'URL endpoint (es. `https://formsubmit.co/tua-email@example.com`)
5. Inseriscilo in `.env` come `VITE_FORM_ENDPOINT`

Alternative: Formspree, Netlify Forms, EmailJS.

## 🛡 hCaptcha Setup

1. Registrati su https://hcaptcha.com (gratuito)
2. Crea un nuovo sito
3. Copia la **Site Key**
4. Inseriscila in `.env` come `VITE_HCAPTCHA_SITE_KEY`

## 📊 Analytics (Opzionale)

Per abilitare Google Analytics o Meta Pixel:

1. Decommentare le variabili in `.env.example`:
   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   VITE_META_PIXEL_ID=xxxxxxxxxxxxxxx
   ```

2. Modificare `src/hooks/useCookieConsent.ts` per caricare gli script dopo il consenso

3. Aggiornare Privacy e Cookie Policy

⚠️ **IMPORTANTE**: Gli analytics devono essere caricati SOLO dopo il consenso cookie (GDPR).

## 📱 Social Media

Configurare in `.env`:
- `VITE_INSTAGRAM_URL`: Link profilo Instagram

## 🔍 SEO

### Meta Tags
Configurati in `src/lib/seo-config.ts` per ogni pagina.

### Schema.org
JSON-LD schema in `src/lib/schema-org.ts`:
- LocalBusiness (Home, Landing SEO)
- Person (Chi Sono)
- FAQPage (Landing SEO)

### Sitemap
Aggiornare `public/sitemap.xml` con:
- URL del dominio reale
- Date lastmod corrette

### robots.txt
Aggiornare `public/robots.txt` con URL sitemap reale.

## 📄 Privacy & GDPR

Le pagine Privacy e Cookie Policy in `src/pages/` contengono template professionali.

**TODO prima del lancio**:
1. Sostituire tutti i [PLACEHOLDER] con dati reali
2. Aggiungere nome e dati del titolare
3. Far revisionare da legale (consigliato)

## 🧪 Testing

```bash
# Lint
npm run lint

# Type check
npm run build
```

## 📊 Performance

Target Lighthouse scores:
- Performance: >90
- Accessibility: 100
- Best Practices: 100
- SEO: 100

Ottimizzazioni implementate:
- Lazy loading immagini
- Code splitting routes
- Font optimization
- Critical CSS
- Minified assets

## 🚧 TODO Future

- [ ] Blog system per content marketing
- [ ] Galleria trasformazioni clienti
- [ ] Sistema prenotazione consulenze
- [ ] Integrazione Instagram feed
- [ ] CMS headless (Strapi/Sanity)
- [ ] PWA support
- [ ] Pagina 404 custom

## 📝 License

© 2025 BST Crew. Tutti i diritti riservati.

## 🤝 Support

Per domande o assistenza:
- Email: [EMAIL]
- Instagram: [INSTAGRAM]

---

**Developed with ❤️ using React + TypeScript + Vite**
