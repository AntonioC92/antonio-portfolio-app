import '@fontsource-variable/montserrat';
import '@fontsource-variable/open-sans';

import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { ErrorBoundary } from './components/ErrorBoundary';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import GlobalStyles from './styles/GlobalStyles';
import { LandingPage } from './pages/MainPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { ResourceDetailPage } from './pages/ResourceDetailPage';
import { InsightsPage } from './pages/InsightsPage';
import { WorkPage } from './pages/WorkPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ScrollToTop } from './components/ScrollToTop';

const App = (
  <React.StrictMode>
    <ErrorBoundary>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:slug" element={<ResourceDetailPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/fractional-cmo" element={<Navigate to="/" replace />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

const container = document.getElementById('root')!;

// firstElementChild ignores comment nodes (e.g. <!--app-html--> left by a
// failed SSR prerender) so we only hydrate when there is real server HTML.
if (container.firstElementChild !== null) {
  hydrateRoot(container, App);
} else {
  createRoot(container).render(App);
}
