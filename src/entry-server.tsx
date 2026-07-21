import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ServerStyleSheet } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import { LandingPage } from './pages/MainPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { ResourceDetailPage } from './pages/ResourceDetailPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { InsightsPage } from './pages/InsightsPage';
import { WorkPage } from './pages/WorkPage';
import { ServicesPage } from './pages/ServicesPage';

function LegacyResourceRedirect(): JSX.Element {
  const { slug = '' } = useParams();
  return <Navigate to={`/resources/insights/${slug}/`} replace />;
}

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
              <Route path="/fractional-cmo" element={<Navigate to="/" replace />} />
              <Route path="/contact" element={<Navigate to="/#contact" replace />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/resources/insights" element={<InsightsPage />} />
              <Route path="/resources/insights/:slug" element={<ResourceDetailPage />} />
              <Route path="/resources/case-studies" element={<Navigate to="/resources" replace />} />
              <Route path="/resources/guides" element={<Navigate to="/resources" replace />} />
              <Route path="/resources/:slug" element={<LegacyResourceRedirect />} />
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
