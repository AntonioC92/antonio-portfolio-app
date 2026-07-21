import {
  StyledStackSection,
  SectionHeader,
  SectionTitle,
  Track,
  LogoItem,
  LogoImg,
} from './styles';

import salesforce from '../../assets/stack/salesforce.png';
import hubspot from '../../assets/stack/hubspot.png';
import google from '../../assets/stack/google.png';
import meta from '../../assets/stack/meta.png';
import linkedin from '../../assets/stack/linkedin.png';
import mailchimp from '../../assets/stack/mailchimp.png';
import semrush from '../../assets/stack/semrush.png';
import wordpress from '../../assets/stack/wordpress.png';
import chatgpt from '../../assets/stack/chatgpt.svg';
import claude from '../../assets/stack/claude.svg';
import perplexity from '../../assets/stack/perplexity.svg';
import n8n from '../../assets/stack/n8n.svg';

const logos: { src: string; alt: string; height?: number }[] = [
  { src: salesforce, alt: 'Salesforce Pardot', height: 32 },
  { src: hubspot, alt: 'HubSpot', height: 32 },
  { src: google, alt: 'Google Marketing Platform', height: 30 },
  { src: meta, alt: 'Meta Ads', height: 28 },
  { src: linkedin, alt: 'LinkedIn Ads', height: 30 },
  { src: mailchimp, alt: 'Mailchimp', height: 32 },
  { src: semrush, alt: 'SEMrush', height: 30 },
  { src: wordpress, alt: 'WordPress', height: 46 },
  { src: chatgpt, alt: 'ChatGPT', height: 36 },
  { src: claude, alt: 'Claude', height: 36 },
  { src: perplexity, alt: 'Perplexity', height: 34 },
  { src: n8n, alt: 'n8n', height: 34 },
];

const doubled = [...logos, ...logos];

export function StackSection(): JSX.Element {
  return (
    <StyledStackSection>
      <SectionHeader>
        <SectionTitle>MarTech Stack</SectionTitle>
      </SectionHeader>

      <Track aria-label="MarTech tools we work with">
        {doubled.map((logo, i) => (
          <LogoItem key={i}>
            <LogoImg src={logo.src} alt={logo.alt} $h={logo.height} />
          </LogoItem>
        ))}
      </Track>
    </StyledStackSection>
  );
}
