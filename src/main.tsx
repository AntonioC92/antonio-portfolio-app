import '@fontsource-variable/montserrat';
import '@fontsource-variable/open-sans';

import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import { LandingPage } from './pages/MainPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { ResourceDetailPage } from './pages/ResourceDetailPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { InsightsPage } from './pages/InsightsPage';

function LegacyResourceRedirect(): JSX.Element {
  const { slug = '' } = useParams();
  return <Navigate to={`/resources/insights/${slug}/`} replace />;
}

const App = (
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<LandingPage />} />
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
    </BrowserRouter>
  </React.StrictMode>
);

const container = document.getElementById('root')!;

if (container.hasChildNodes()) {
  hydrateRoot(container, App);
} else {
  createRoot(container).render(App);
}
