/**
 * Asset Path Utility
 *
 * Gestisce i percorsi delle immagini per compatibilità con GitHub Pages
 * Aggiunge automaticamente il BASE_URL configurato in vite.config.ts
 */

/**
 * Costruisce il percorso completo per un asset pubblico
 * @param path - Il percorso relativo a /public (es. "/images/logo.png")
 * @returns Il percorso completo includendo il BASE_URL
 */
export function getAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL
  // Rimuove lo slash iniziale dal path se presente
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // Assicura che non ci siano doppi slash
  return `${base}${cleanPath}`.replace(/\/\//g, '/')
}
