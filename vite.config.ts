import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  ssr: {
    // react-helmet-async is CommonJS; bundling it into the SSR output
    // avoids Node.js ESM named-export errors during prerender.
    // Both packages are CJS; bundling them avoids Node.js ESM named-export
    // errors during the SSR prerender step.
    noExternal: ['react-helmet-async', 'styled-components'],
  },
  build: {
    rollupOptions: {
      output: isSsrBuild
        ? {}
        : {
            // Split the 446 KB monolith into parallel-loadable vendor chunks.
            // Smaller initial chunks = shorter long tasks = lower TBT.
            // All chunks are still loaded eagerly (static imports, not dynamic),
            // so hydration order is preserved.
            manualChunks(id: string) {
              if (!id.includes('node_modules')) return undefined;
              // framer-motion alone is ~110 KB; isolate it so the React
              // hydration critical path doesn't have to wait for it.
              if (id.includes('framer-motion')) return 'vendor-animation';
              // Markdown renderer + remark/rehype ecosystem (~80 KB combined).
              if (
                id.includes('react-markdown') ||
                id.includes('remark') ||
                id.includes('rehype') ||
                id.includes('unified') ||
                id.includes('micromark') ||
                id.includes('hast-') ||
                id.includes('mdast-') ||
                id.includes('vfile') ||
                id.includes('is-plain-obj') ||
                id.includes('trough') ||
                id.includes('bail')
              )
                return 'vendor-markdown';
              // React runtime (react + react-dom + scheduler) stays together
              // so the reconciler is never split across chunks.
              if (
                id.includes('/react-dom/') ||
                id.includes('/react/') ||
                id.includes('/scheduler/')
              )
                return 'vendor-react';
              // Everything else (react-router, styled-components, helmet, etc.)
              return 'vendor';
            },
          },
    },
  },
}));
