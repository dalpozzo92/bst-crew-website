# 📸 Guida per Inserire Immagini

## 📁 Struttura Cartelle

Le immagini vanno inserite nella cartella **`public/images/`**

```
bst-crew-website/
├── public/
│   └── images/
│       ├── hero-profile.jpg          ← Immagine profilo per Hero
│       ├── logo.png                  ← Logo (opzionale)
│       ├── about-photo.jpg           ← Foto per pagina Chi Sono
│       ├── transformations/          ← Foto trasformazioni clienti
│       │   ├── before-after-1.jpg
│       │   ├── before-after-2.jpg
│       │   └── ...
│       └── gallery/                  ← Galleria foto palestra
│           ├── gym-1.jpg
│           ├── gym-2.jpg
│           └── ...
```

## 🖼️ Immagini Necessarie

### 1. **Hero Section (Homepage)** - PRIORITÀ ALTA
- **File**: `public/images/hero-profile.jpg`
- **Formato**: JPG o WebP
- **Dimensioni consigliate**: 1920x1080px (Full HD)
- **Peso**: Max 500KB (compressa)
- **Descrizione**: Tua foto professionale in palestra, allenamento, o posa fitness

### 2. **Pagina "Chi Sono"**
- **File**: `public/images/about-photo.jpg`
- **Formato**: JPG o WebP
- **Dimensioni consigliate**: 800x1000px
- **Peso**: Max 300KB
- **Descrizione**: Foto personale, preferibilmente professionale

### 3. **Logo (Opzionale)**
- **File**: `public/images/logo.png` o `logo.svg`
- **Formato**: PNG con trasparenza o SVG
- **Dimensioni**: 512x512px (quadrato)
- **Peso**: Max 50KB

### 4. **Trasformazioni Clienti** (Opzionale)
- **Cartella**: `public/images/transformations/`
- **Formato**: JPG
- **Dimensioni**: 600x800px
- **Peso**: Max 200KB per immagine
- **Descrizione**: Before/After dei tuoi clienti (con consenso!)

## ✅ Come Usare le Immagini nel Codice

Una volta caricate le immagini in `public/images/`, ecco come aggiungerle:

### Hero Background (Homepage)

Modifica il file: **`src/components/sections/Hero.tsx`** (linea 21-27)

```tsx
{/* Background Image - Profile Picture */}
<div className="absolute inset-0 z-0">
  <img
    src="/images/hero-profile.jpg"
    alt="BST Crew Personal Trainer Pergine Valsugana"
    className="w-full h-full object-cover"
  />
  {/* Dark overlay for text readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-dark-900/80 to-dark-900"></div>
</div>
```

### Logo nell'Header (Opzionale)

Modifica il file: **`src/components/layout/Header.tsx`** (linea 65-68)

Sostituisci il box colorato con:

```tsx
<Link to="/" className="flex items-center space-x-3">
  <img
    src="/images/logo.png"
    alt="BST Crew Logo"
    className="w-10 h-10 rounded-xl"
  />
  <div className="hidden sm:block">
    <div className="font-semibold text-base text-white tracking-tight">
      BST Crew
    </div>
    <div className="text-xs text-gray-500">Personal Trainer</div>
  </div>
</Link>
```

## 🎨 Ottimizzazione Immagini

### Strumenti Consigliati per Compressione:

1. **Online**:
   - [TinyPNG](https://tinypng.com/) - Compressione JPG/PNG
   - [Squoosh](https://squoosh.app/) - Tool Google per compressione avanzata
   - [CloudConvert](https://cloudconvert.com/) - Conversione formati

2. **Desktop**:
   - ImageOptim (Mac)
   - RIOT (Windows)

### Formati Consigliati:

- **JPG**: Per foto con molti dettagli
- **WebP**: Migliore compressione (moderno)
- **PNG**: Solo per logo/icone con trasparenza
- **SVG**: Per loghi vettoriali

### Dimensioni per Retina Display:

Per display ad alta risoluzione, usa immagini 2x:
- Hero: 3840x2160px → salvata come `hero-profile@2x.jpg`
- About: 1600x2000px → salvata come `about-photo@2x.jpg`

Poi nel codice:

```tsx
<img
  src="/images/hero-profile.jpg"
  srcSet="/images/hero-profile@2x.jpg 2x"
  alt="BST Crew"
  className="w-full h-full object-cover"
/>
```

## 📋 Checklist Immagini

- [ ] `hero-profile.jpg` caricata in `public/images/`
- [ ] Immagine compressa (< 500KB)
- [ ] Aggiornato `Hero.tsx` con percorso immagine
- [ ] (Opzionale) Logo caricato e aggiornato nell'Header
- [ ] (Opzionale) Foto "Chi Sono" caricata
- [ ] Test su mobile e desktop

## 🚀 Dopo aver Caricato le Immagini

1. Metti i file in `public/images/`
2. Riavvia il server dev: `npm run dev`
3. Apri http://localhost:5174
4. Verifica che le immagini vengano caricate correttamente
5. Testa su mobile (F12 → Device toolbar)

## 💡 Tips

- **Nomenclatura**: Usa nomi descrittivi e lowercase
  - ✅ `hero-profile.jpg`
  - ❌ `IMG_1234.JPG`

- **SEO**: Usa sempre l'attributo `alt` descrittivo
  ```tsx
  alt="Nicola BST Crew Personal Trainer in palestra a Pergine Valsugana"
  ```

- **Lazy Loading**: Per immagini sotto la piega, aggiungi:
  ```tsx
  loading="lazy"
  ```

- **Aspect Ratio**: Mantieni proporzioni consistenti per un design pulito

---

**Qualsiasi dubbio?** Chiedimi pure! 💪
