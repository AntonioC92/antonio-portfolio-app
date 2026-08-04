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
            // Split vendor runtime into a stable long-cached chunk.
            // Non-homepage pages are lazy-loaded via React.lazy in main.tsx,
            // so Rollup auto-splits them into per-page chunks — no manual
            // assignment needed for page-specific deps like react-markdown.
            manualChunks(id: string) {
              if (!id.includes('node_modules')) return undefined;
              // React runtime (react + react-dom + scheduler) stays together
              // so the reconciler is never split across chunks.
              if (
                id.includes('/react-dom/') ||
                id.includes('/react/') ||
                id.includes('/scheduler/')
              )
                return 'vendor-react';
              // Everything else shared across routes (react-router,
              // styled-components, react-helmet-async, etc.) goes into one
              // vendor chunk that is eagerly downloaded (always needed).
              // Markdown/remark/rehype deps are intentionally omitted here —
              // they will be co-located with the lazy ResourceDetailPage chunk
              // and only fetched when the user visits a blog post.
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
                return undefined; // auto-split with lazy ResourceDetailPage chunk
              return 'vendor';
            },
          },
    },
  },
}));
