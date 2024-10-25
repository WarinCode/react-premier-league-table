/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_URL: string;
  VITE_X_RAPID_API_KEY: string;
  VITE_X_RAPID_API_HOST: string;
}

interface ImportMeta {
  readonly env: Readonly<ImportMetaEnv>;
}
