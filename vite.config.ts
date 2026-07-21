import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  ssr: {
    // react-helmet-async is CommonJS; bundling it into the SSR output
    // avoids Node.js ESM named-export errors during prerender.
    // Both packages are CJS; bundling them avoids Node.js ESM named-export
    // errors during the SSR prerender step.
    noExternal: ['react-helmet-async', 'styled-components'],
  },
});
