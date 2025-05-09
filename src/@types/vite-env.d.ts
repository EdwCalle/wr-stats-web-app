/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  // Add other VITE_* environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
