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

function buildEmbedSrc(search: string): string {
  const params = new URLSearchParams(search);
  const from = params.get('from') ?? '';
  const campaign = params.get('campaign') ?? '';
  const embed = new URLSearchParams({ embed: 'true', utm_source: 'website' });
  embed.set('utm_medium', SAFE_VALUE.test(from) ? from : 'book-page');
  embed.set('utm_campaign', SAFE_VALUE.test(campaign) ? campaign : 'organic');
  return `${MEETINGS_URL}?${embed.toString()}`;
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

const Fallback = styled.p`
  padding: 24px;
  font-size: 16px;
  color: ${colors.text};

  a {
    color: ${colors.primaryButtonBg};
  }
`;

export function BookPage(): JSX.Element {
  const [embedSrc, setEmbedSrc] = useState<string | null>(null);

  useEffect(() => {
    setEmbedSrc(buildEmbedSrc(window.location.search));
  }, []);

  // HubSpot's embed script scans the page for .meetings-iframe-container
  // when it loads, so it is added after the container has rendered.
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
      />
      <Section>
        <Header>Book a call</Header>
        <Intro>
          Pick a time that suits you and I will take it from there. If you would
          rather write first, use the <a href="/contact/">contact page</a>.
        </Intro>
        <EmbedCard>
          {embedSrc ? (
            <div className="meetings-iframe-container" data-src={embedSrc} />
          ) : (
            <Fallback>
              Loading the calendar. If it does not appear,{' '}
              <a href={MEETINGS_URL}>open the booking page</a>.
            </Fallback>
          )}
        </EmbedCard>
      </Section>
    </Layout>
  );
}
