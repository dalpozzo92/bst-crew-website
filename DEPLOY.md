# Deploy su GitHub Pages

Guida completa per deployare il sito BST Crew su GitHub Pages.

## 📋 Pre-requisiti

- Account GitHub
- Repository Git inizializzato
- Node.js e npm installati localmente

## 🚀 Setup Iniziale

### 1. Crea Repository GitHub

1. Vai su https://github.com/new
2. Crea un nuovo repository (es. `bst-crew-website`)
3. **NON** inizializzare con README (lo abbiamo già)
4. Visibility: Pubblica o Privata (entrambe funzionano con GitHub Pages)

### 2. Collega il Repository Locale

```bash
# Aggiungi remote
git remote add origin https://github.com/TUO-USERNAME/bst-crew-website.git

# Verifica
git remote -v
```

### 3. Configura Vite per GitHub Pages

Il file `vite.config.ts` è già configurato, ma verifica il `base` path:

```ts
export default defineConfig({
  base: '/',  // Per dominio custom
  // oppure
  base: '/bst-crew-website/',  // Per repository GitHub (username.github.io/bst-crew-website)
})
```

**Regola:**
- **Dominio custom** (es. `bstcrew.com`): usa `base: '/'`
- **GitHub subdomain** (es. `username.github.io/repo-name`): usa `base: '/repo-name/'`

### 4. Configura GitHub Actions

Il file `.github/workflows/deploy.yml` è già pronto. Verifica che esista.

Se non esiste, crealo:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 5. Configura Variabili d'Ambiente (GitHub Secrets)

Le variabili d'ambiente in `.env` NON vengono pushate su GitHub per sicurezza.

**Opzione A: GitHub Secrets (Consigliato per produzione)**

1. Vai su Settings > Secrets and variables > Actions
2. Aggiungi secrets:
   - `VITE_HCAPTCHA_SITE_KEY`
   - `VITE_FORM_ENDPOINT`
   - `VITE_INSTAGRAM_URL`
   - `VITE_EMAIL`
   - `VITE_SITE_URL`

3. Modifica `.github/workflows/deploy.yml` per passare le secrets:

```yaml
- name: Build
  run: npm run build
  env:
    VITE_HCAPTCHA_SITE_KEY: ${{ secrets.VITE_HCAPTCHA_SITE_KEY }}
    VITE_FORM_ENDPOINT: ${{ secrets.VITE_FORM_ENDPOINT }}
    VITE_INSTAGRAM_URL: ${{ secrets.VITE_INSTAGRAM_URL }}
    VITE_EMAIL: ${{ secrets.VITE_EMAIL }}
    VITE_SITE_URL: ${{ secrets.VITE_SITE_URL }}
```

**Opzione B: Hardcode nel codice (Solo per demo/testing)**

Sostituisci `import.meta.env.VITE_XXX` con valori hardcoded nei file.
⚠️ **NON consigliato per produzione!**

## 🌐 Deploy

### 1. Abilita GitHub Pages

1. Vai su Settings > Pages del repository
2. Source: **GitHub Actions** (non "Deploy from branch")
3. Save

### 2. Push del Codice

```bash
# Prima commit
git add .
git commit -m "Initial commit: BST Crew website"
git branch -M main
git push -u origin main
```

### 3. Verifica Deploy

1. Vai su **Actions** nel repository
2. Vedrai il workflow "Deploy to GitHub Pages" in esecuzione
3. Attendi il completamento (~2-3 minuti)
4. Il sito sarà live su:
   - Con repository `username.github.io`: https://username.github.io/bst-crew-website
   - Con dominio custom: https://tuodominio.com

## 🌍 Dominio Custom (Opzionale)

### Setup Dominio Custom

1. **Acquista un dominio** (Namecheap, GoDaddy, Cloudflare, etc.)

2. **Configura DNS**

   Aggiungi questi record DNS al tuo provider:

   ```
   Tipo: A
   Nome: @
   Valore: 185.199.108.153

   Tipo: A
   Nome: @
   Valore: 185.199.109.153

   Tipo: A
   Nome: @
   Valore: 185.199.110.153

   Tipo: A
   Nome: @
   Valore: 185.199.111.153

   Tipo: CNAME
   Nome: www
   Valore: TUO-USERNAME.github.io
   ```

3. **Configura GitHub Pages**

   - Vai su Settings > Pages
   - Custom domain: inserisci `tuodominio.com`
   - Enforce HTTPS: ✅ (attendi propagazione DNS ~24h)

4. **Aggiorna vite.config.ts**

   ```ts
   base: '/',  // Importante per dominio custom!
   ```

5. **Aggiorna sitemap.xml e robots.txt**

   Sostituisci `yourdomain.com` con il dominio reale.

## 🔄 Updates e Re-deploy

Ogni push su `main` triggera automaticamente il deploy:

```bash
# Modifica i file
git add .
git commit -m "Update: descrizione modifiche"
git push
```

Il sito sarà aggiornato in ~2-3 minuti.

## 🐛 Troubleshooting

### Deploy fallisce

- Verifica log in Actions > Failed workflow
- Controlla che `npm run build` funzioni localmente
- Verifica sintassi YAML in `.github/workflows/deploy.yml`

### Pagina 404

**Problema**: GitHub Pages non supporta client-side routing di default.

**Soluzione**: Creare `public/404.html` che reindirizza a index:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      sessionStorage.redirect = location.href;
      location.replace(location.origin);
    </script>
  </head>
  <body></body>
</html>
```

Poi in `index.html` aggiungere:

```html
<script>
  (function(){
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== location.href) {
      history.replaceState(null, null, redirect);
    }
  })();
</script>
```

⚠️ **Nota**: Questa soluzione è già implementata per Hash Routing. Se usi BrowserRouter, considera HashRouter per GitHub Pages.

### Immagini non caricano

- Verifica che le immagini siano in `public/` o importate correttamente
- Controlla `base` path in `vite.config.ts`

### CSS/JS non caricano

- Verifica `base` path in `vite.config.ts`
- Controlla console browser per errori 404

### Form non funziona

- Verifica che `VITE_HCAPTCHA_SITE_KEY` e `VITE_FORM_ENDPOINT` siano configurati
- Controlla console browser per errori
- Verifica che hCaptcha sia configurato per il dominio corretto

## 📊 Monitoring

### Controllo Performance

1. Apri il sito
2. DevTools > Lighthouse
3. Run audit
4. Verifica scores

### Analytics

Dopo aver configurato Google Analytics (opzionale):
- Vai su Google Analytics dashboard
- Monitora visite, conversioni, etc.

## 🔐 Security

- **HTTPS**: Abilitato automaticamente da GitHub Pages
- **Secrets**: Gestiti tramite GitHub Secrets
- **GDPR**: Cookie banner implementato

## 📝 Checklist Pre-Launch

- [ ] Tutte le variabili `.env` configurate
- [ ] Logo e immagini reali inserite
- [ ] Testi Privacy/Cookie Policy aggiornati con dati reali
- [ ] Meta tags SEO verificati
- [ ] Sitemap e robots.txt aggiornati con dominio reale
- [ ] Form di contatto testato
- [ ] Test su mobile
- [ ] Lighthouse score >90
- [ ] Dominio custom configurato (se applicabile)
- [ ] Google Search Console configurato (consigliato)
- [ ] Google My Business collegato (consigliato per SEO locale)

## 🚀 Post-Launch

1. **Submit Sitemap a Google**
   - Google Search Console > Sitemap > Submit URL
   - `https://tuodominio.com/sitemap.xml`

2. **Verifica Proprietà Sito**
   - Google Search Console > Verifica proprietà

3. **Google My Business**
   - Crea/Verifica profilo business per Pergine Valsugana
   - Collega sito web

4. **Monitor Performance**
   - Google Analytics
   - Google Search Console
   - Lighthouse CI

---

**Il tuo sito è live! 🎉**
