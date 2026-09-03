/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_API_HOST?: string;
  readonly VITE_ENABLE_BETA?: string;
  readonly VITE_CONTACT_WHATSAPP_1?: string;
  readonly VITE_CONTACT_WHATSAPP_2?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
