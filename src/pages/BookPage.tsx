import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout/Layout';
import { Seo } from '../components/Seo';
import { colors } from '../styles/variables';
import { device } from '../styles/mediaQueries';

const BOOK_CANONICAL = 'https://carusomartech.com/book/';
const MEETINGS_URL = 'https://meetings.hubspot.com/antonio393';
const EMBED_SCRIPT_SRC =
  'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';

// The "Book a call" buttons link here with ?from=<medium>&campaign=<campaign>
// instead of UTM parameters, so an internal click does not restart the GA4
// session. The values are passed on to the HubSpot embed as the same UTMs the
// buttons used to send straight to meetings.hubspot.com, so HubSpot's source
// reporting is unchanged.
const SAFE_VALUE = /^[a-z0-9-]{1,60}$/;

// The embed loads once CookieYes consent for this category is given. HubSpot's
// embed stores a device ID and usage events and sends tracking requests, which
// matches "analytics"; the CookieYes banner on this site has no "functional"
// toggle today.
const CONSENT_CATEGORY = 'analytics';

type CkyConsent = { categories?: Record<string, boolean> };

declare global {
  interface Window {
    getCkyConsent?: () => CkyConsent;
    revisitCkyConsent?: () => void;
  }
}

// Fail closed: only a positive answer from CookieYes's own API counts. If
// CookieYes is missing, blocked or throws, there is no consent and the embed
// stays off.
function hasConsent(): boolean {
  try {
    return window.getCkyConsent?.().categories?.[CONSENT_CATEGORY] === true;
  } catch {
    return false;
  }
}

// CookieYes loads through Google Tag Manager, so it may arrive after this page.
// Wait for its API for up to this long before showing the no-consent line.
const CMP_WAIT_MS = 5000;

function buildUtms(search: string): URLSearchParams {
  const params = new URLSearchParams(search);
  const from = params.get('from') ?? '';
  const campaign = params.get('campaign') ?? '';
  const utms = new URLSearchParams({ utm_source: 'website' });
  utms.set('utm_medium', SAFE_VALUE.test(from) ? from : 'book-page');
  utms.set('utm_campaign', SAFE_VALUE.test(campaign) ? campaign : 'organic');
  return utms;
}

const Section = styled.section`
  padding: 80px 100px;

  @media ${device.tablet} {
    padding: 60px 60px;
  }

  @media ${device.mobile} {
    padding: 40px 16px;
  }
`;

const Header = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-top: 50px;
  color: ${colors.light};

  @media ${device.mobile} {
    font-size: 40px;
  }
`;

const Intro = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  max-width: 640px;
  margin: 0 0 32px;

  a {
    color: ${colors.primary};
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;

const Gate = styled.div`
  max-width: 640px;
  padding: 28px;
  border-radius: 16px;
  background: rgba(8, 16, 30, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.12);
`;

const Notice = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);

  a,
  button {
    color: ${colors.primary};
    text-decoration: underline;
    text-underline-offset: 2px;
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
  }
`;

const EmbedCard = styled.div`
  background-color: ${colors.light};
  border-radius: 16px;
  overflow: hidden;
  max-width: 960px;
  min-height: 680px;

  .meetings-iframe-container,
  .meetings-iframe-container iframe {
    width: 100%;
  }
`;

export function BookPage(): JSX.Element {
  // Nothing from HubSpot loads until CookieYes reports consent for
  // CONSENT_CATEGORY. null means CookieYes has not answered yet.
  const [consent, setConsent] = useState<boolean | null>(null);
  const [utms, setUtms] = useState<string>(
    'utm_source=website&utm_medium=book-page&utm_campaign=organic'
  );

  useEffect(() => {
    setUtms(buildUtms(window.location.search).toString());
    const check = () => {
      if (typeof window.getCkyConsent === 'function') setConsent(hasConsent());
    };
    check();
    const started = Date.now();
    const timer = window.setInterval(() => {
      if (typeof window.getCkyConsent === 'function') {
        check();
        window.clearInterval(timer);
      } else if (Date.now() - started > CMP_WAIT_MS) {
        setConsent(false);
        window.clearInterval(timer);
      }
    }, 250);
    const onUpdate = () => setConsent(hasConsent());
    document.addEventListener('cookieyes_consent_update', onUpdate);
    document.addEventListener('cookieyes_banner_load', onUpdate);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener('cookieyes_consent_update', onUpdate);
      document.removeEventListener('cookieyes_banner_load', onUpdate);
    };
  }, []);

  const embedSrc = consent ? `${MEETINGS_URL}?embed=true&${utms}` : null;

  // HubSpot's embed script scans the page for .meetings-iframe-container
  // when it loads, so it is added only after the container has rendered.
  useEffect(() => {
    if (!embedSrc) return undefined;
    const script = document.createElement('script');
    script.src = EMBED_SCRIPT_SRC;
    script.type = 'text/javascript';
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, [embedSrc]);

  return (
    <Layout>
      <Seo
        title="Book a Call | Caruso Martech"
        description="Pick a time for a call with Antonio Caruso about your marketing systems, tracking or paid media."
        canonical={BOOK_CANONICAL}
        ogUrl={BOOK_CANONICAL}
        ogImage="https://carusomartech.com/preview.png"
        twitterImage="https://carusomartech.com/preview.png"
        robots="noindex, follow"
      />
      <Section>
        <Header>Book a call</Header>
        <Intro>
          Pick a time that suits you and I will take it from there. If you would
          rather write first, use the <a href="/contact/">contact page</a>.
        </Intro>
        {embedSrc ? (
          <EmbedCard>
            <div className="meetings-iframe-container" data-src={embedSrc} />
          </EmbedCard>
        ) : consent === false ? (
          <Gate>
            <Notice>
              The calendar is provided by HubSpot and shows here once you allow
              analytics cookies in the{' '}
              <button type="button" onClick={() => window.revisitCkyConsent?.()}>
                cookie settings
              </button>
              . You can also{' '}
              <a
                href={`${MEETINGS_URL}?${utms}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                book on HubSpot&apos;s page
              </a>
              , which opens in a new tab.
            </Notice>
          </Gate>
        ) : null}
      </Section>
    </Layout>
  );
}
