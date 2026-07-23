import React from 'react';
import { StyledContainer, StyledContent } from './styles';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

const SITE_URL = 'https://carusomartech.com';

// Organization schema shared across every page (not just individual
// articles) so search engines and AI answer engines can resolve who
// "Caruso Martech" is regardless of which page they land on first.
const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Caruso Martech',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/transparent-logo.svg`,
  founder: {
    '@type': 'Person',
    name: 'Antonio Caruso',
    jobTitle: 'Fractional CMO',
  },
  // Primary client markets are Ireland, UK, and US (added 2026-07-23) so
  // search engines and AI answer engines have an explicit geographic
  // signal, rather than inferring reach from an unqualified .com domain.
  areaServed: [
    { '@type': 'Country', name: 'Ireland' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'United States' },
  ],
  sameAs: [
    'https://www.linkedin.com/in/antoniocaruso2702/',
    'https://github.com/AntonioC92',
  ],
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StyledContainer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      <Navbar />
      <StyledContent>{children}</StyledContent>
      <Footer />
    </StyledContainer>
  );
}
