import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ServerStyleSheet } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import { LandingPage } from './pages/MainPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { ResourceDetailPage } from './pages/ResourceDetailPage';
import { InsightsPage } from './pages/InsightsPage';
import { WorkPage } from './pages/WorkPage';
import { ServicesPage } from './pages/ServicesPage';

export function render(url: string): {
  html: string;
  styleTags: string;
  headTags: string;
} {
  const sheet = new ServerStyleSheet();
  const helmetContext: Record<string, unknown> = {};

  let html = '';
  try {
    html = renderToString(
      sheet.collectStyles(
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={url}>
            <GlobalStyles />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/insights/:slug" element={<ResourceDetailPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/fractional-cmo" element={<Navigate to="/" replace />} />
              <Route path="/contact" element={<Navigate to="/#contact" replace />} />
            </Routes>
          </StaticRouter>
        </HelmetProvider>
      )
    );
  } finally {
    sheet.seal();
  }

  const styleTags = sheet.getStyleTags();

  const ctx = helmetContext as {
    helmet?: {
      title?: { toString(): string };
      meta?: { toString(): string };
      link?: { toString(): string };
    };
  };

  const headTags = [
    ctx.helmet?.title?.toString() ?? '',
    ctx.helmet?.meta?.toString() ?? '',
    ctx.helmet?.link?.toString() ?? '',
  ]
    .filter(Boolean)
    .join('\n    ');

  return { html, styleTags, headTags };
}
