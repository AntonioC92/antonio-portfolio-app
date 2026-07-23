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
  '@type': ['Organization', 'ProfessionalService'],
  name: 'Caruso Martech',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/transparent-logo.svg`,
  description:
    'Caruso Martech builds marketing systems for founders and leadership teams across Ireland, the UK, and the US. We design and implement attribution, automation, and growth infrastructure that compounds over time, so every campaign is smarter than the last.',
  founder: {
    '@type': 'Person',
    name: 'Antonio Caruso',
    jobTitle: 'Marketing Systems Consultant',
    knowsAbout: [
      'Marketing Systems',
      'Marketing Attribution',
      'Marketing Automation',
      'Growth Operations',
      'Paid Media',
      'CRM Integration',
      'Google Analytics 4',
      'Meta Ads',
      'Google Ads',
      'LinkedIn Ads',
      'n8n',
      'HubSpot',
    ],
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Marketing Systems Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Marketing Systems Design',
          description:
            'End-to-end design of marketing infrastructure: attribution setup, tool audit, integration architecture, and campaign operating model.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Paid Media Management',
          description:
            'Performance campaigns across Meta, Google, and LinkedIn, built around attribution and ROAS rather than vanity metrics.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Marketing Automation',
          description:
            'Workflow automation using n8n, HubSpot, and native integrations to eliminate manual data movement and make campaigns compound over time.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Attribution & Analytics',
          description:
            'GA4 setup, conversion tracking, CAPI, and custom dashboards so every spend decision is grounded in real data.',
        },
      },
    ],
  },
  areaServed: [
    { '@type': 'Country', name: 'Ireland' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'United States' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IE',
  },
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
