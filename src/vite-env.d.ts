/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CF_SITEKEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
