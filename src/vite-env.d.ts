/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HCAPTCHA_SITE_KEY: string
  readonly VITE_FORM_ENDPOINT: string
  readonly VITE_INSTAGRAM_URL: string
  readonly VITE_EMAIL: string
  readonly VITE_PHONE: string
  readonly VITE_SITE_URL: string
  readonly VITE_SITE_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
