import '@fontsource-variable/montserrat';
import '@fontsource-variable/open-sans';

import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import GlobalStyles from './styles/GlobalStyles';
import { LandingPage } from './pages/MainPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { ResourceDetailPage } from './pages/ResourceDetailPage';
import { InsightsPage } from './pages/InsightsPage';
import { WorkPage } from './pages/WorkPage';
import { ServicesPage } from './pages/ServicesPage';

const App = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
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
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

const container = document.getElementById('root')!;

if (container.hasChildNodes()) {
  hydrateRoot(container, App);
} else {
  createRoot(container).render(App);
}
