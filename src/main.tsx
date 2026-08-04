import './fonts.css';

import React, { lazy, Suspense } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { ErrorBoundary } from './components/ErrorBoundary';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import GlobalStyles from './styles/GlobalStyles';
// Homepage is the most-visited route and the one Lighthouse tests — keep it
// as a static (eager) import so its code is in the initial JS bundle.
import { LandingPage } from './pages/MainPage';
import { ScrollToTop } from './components/ScrollToTop';

// All other pages are lazy-loaded via dynamic import so their JS is excluded
// from the initial bundle.  Rollup creates a separate chunk per page that
// Chrome only fetches when the user navigates to that route.  SSR
// (entry-server.tsx) keeps static imports so prerendering still works.
const WorkPage       = lazy(() => import('./pages/WorkPage').then(m => ({ default: m.WorkPage })));
const ServicesPage   = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const AboutPage      = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const InsightsPage   = lazy(() => import('./pages/InsightsPage').then(m => ({ default: m.InsightsPage })));
const ResourceDetailPage = lazy(() => import('./pages/ResourceDetailPage').then(m => ({ default: m.ResourceDetailPage })));
const PrivacyPolicy  = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const ContactPage    = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

const App = (
  <React.StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <GlobalStyles />
          {/*
            The Suspense boundary wraps all routes.  During hydration of the
            homepage, only <LandingPage> is ever rendered (the other routes
            don't match), so the lazy imports never trigger.  For client-side
            navigations, null fallback keeps the transition invisible while the
            small per-page chunk loads (typically < 100 ms on a decent
            connection since all chunks are prerendered on the server).
          */}
          <Suspense fallback={null}>
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
          </Suspense>
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
