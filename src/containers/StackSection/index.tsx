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

const logos = [
  { src: salesforce, alt: 'Salesforce Pardot' },
  { src: hubspot, alt: 'HubSpot' },
  { src: google, alt: 'Google Marketing Platform' },
  { src: meta, alt: 'Meta Ads' },
  { src: linkedin, alt: 'LinkedIn Ads' },
  { src: mailchimp, alt: 'Mailchimp' },
  { src: semrush, alt: 'SEMrush' },
  { src: wordpress, alt: 'WordPress' },
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
            <LogoImg src={logo.src} alt={logo.alt} />
          </LogoItem>
        ))}
      </Track>
    </StyledStackSection>
  );
}
