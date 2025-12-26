# 🚀 Quick Start Guide

Guida rapida per avviare il progetto BST Crew Website in 5 minuti.

## 📦 Installazione

```bash
# 1. Entra nella directory del progetto
cd bst-crew-website

# 2. Installa le dipendenze
npm install

# 3. Configura le variabili d'ambiente
cp .env.example .env
```

## ⚙️ Configurazione Minima

Apri `.env` e configura almeno queste variabili per testare il sito:

```env
# hCaptcha - Registrati su https://hcaptcha.com (gratuito)
VITE_HCAPTCHA_SITE_KEY=10000000-ffff-ffff-ffff-000000000001  # Chiave di test

# Form - Usa FormSubmit.co
VITE_FORM_ENDPOINT=https://formsubmit.co/tua-email@example.com

# Social
VITE_INSTAGRAM_URL=https://instagram.com/your_handle

# Contatti
VITE_EMAIL=info@example.com
VITE_PHONE=+39_xxx_xxxxxxx

# Sito
VITE_SITE_URL=http://localhost:5173
VITE_SITE_NAME=BST Crew - Personal Trainer
```

## 🎯 Avvio Sviluppo

```bash
npm run dev
```

Apri http://localhost:5173 nel browser.

## ✅ Checklist Pre-Lancio

### Obbligatori

- [ ] **hCaptcha**: Registrati e ottieni site key reale
- [ ] **FormSubmit**: Configura con la tua email
- [ ] **Logo**: Sostituisci placeholder in `Header.tsx`
- [ ] **Immagini**: Aggiungi foto reali in `Hero.tsx` e altre sezioni
- [ ] **Privacy/Cookie Policy**: Compila i [PLACEHOLDER] con dati reali
- [ ] **Sitemap**: Aggiorna `public/sitemap.xml` con dominio reale
- [ ] **robots.txt**: Aggiorna `public/robots.txt` con dominio reale

### Consigliati

- [ ] **Colori brand**: Personalizza in `tailwind.config.js` (se hai colori specifici)
- [ ] **Testi**: Rivedi e personalizza i contenuti delle pagine
- [ ] **Certificazioni**: Aggiungi le tue certificazioni in `About.tsx`
- [ ] **Stats**: Aggiorna numeri in `Hero.tsx` (anni esperienza, clienti, etc.)
- [ ] **FAQ**: Personalizza domande in `src/lib/schema-org.ts`

## 🌐 Deploy

Segui la guida completa in [DEPLOY.md](./DEPLOY.md)

Quick steps:

```bash
# 1. Crea repository su GitHub
# 2. Configura GitHub Secrets con le variabili .env
# 3. Push del codice

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main

# 4. Abilita GitHub Pages in Settings > Pages
# 5. Il sito sarà live in ~3 minuti!
```

## 🎨 Personalizzazioni Comuni

### Cambiare Colori

`tailwind.config.js`:
```js
primary: {
  500: '#TUO_COLORE',  // Cambia qui
}
```

### Aggiungere Logo

`src/components/layout/Header.tsx`:
```tsx
// Sostituisci questo placeholder:
<div className="w-12 h-12 bg-gradient...">
  <span>BST</span>
</div>

// Con:
<img src="/logo.png" alt="BST Crew" className="w-12 h-12" />
```

### Modificare Testi SEO

`src/lib/seo-config.ts`:
```ts
export const seoConfig = {
  home: {
    title: 'TUO TITLE...',
    description: 'TUA DESCRIPTION...',
  }
}
```

## 📚 Documentazione Completa

- [README.md](./README.md) - Documentazione completa
- [DEPLOY.md](./DEPLOY.md) - Guida deploy dettagliata

## 🆘 Problemi Comuni

### Il form non funziona
→ Verifica `VITE_HCAPTCHA_SITE_KEY` in `.env`

### Le immagini non caricano
→ Metti le immagini in `public/` o importale correttamente

### Errori di build
→ Verifica che tutte le dipendenze siano installate: `npm install`

### Pagina bianca in produzione
→ Controlla `base` in `vite.config.ts` (deve essere `/` per dominio custom)

## 💡 Tips

- Usa `console.log(import.meta.env)` per debuggare variabili d'ambiente
- Testa sempre il form di contatto prima del lancio
- Controlla Lighthouse score prima del deploy (F12 > Lighthouse)

---

**Buon lavoro! 💪**
