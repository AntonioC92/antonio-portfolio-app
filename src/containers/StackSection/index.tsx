import {
  StyledStackSection,
  SectionHeader,
  SectionTitle,
  Track,
  LogoItem,
  LogoImg,
} from './styles';

import salesforce from '../../assets/stack/salesforce.webp';
import hubspot from '../../assets/stack/hubspot.webp';
import google from '../../assets/stack/google.webp';
import meta from '../../assets/stack/meta.webp';
import linkedin from '../../assets/stack/linkedin.webp';
import mailchimp from '../../assets/stack/mailchimp.webp';
import semrush from '../../assets/stack/semrush.webp';
import wordpress from '../../assets/stack/wordpress.webp';
import chatgpt from '../../assets/stack/chatgpt.svg';
import claude from '../../assets/stack/claude.svg';
import perplexity from '../../assets/stack/perplexity.svg';
import n8n from '../../assets/stack/n8n.svg';

// width/height below are the actual exported asset dimensions (not the CSS
// display size, which LogoImg still controls via $h). Passing them as real
// <img> attributes lets the browser compute the aspect ratio and reserve
// layout space before the image loads, avoiding a layout shift. Each raster
// logo was re-exported at roughly 3x its display height as a compressed
// WebP (see 2026-08-03 performance fix): source PNGs were 3000-4900px wide
// full-resolution logos being downscaled to ~30-46px in CSS, which is what
// caused a ~19s mobile LCP. Keep new logo assets under ~50KB and pre-sized
// close to their display resolution instead of dropping in raw export PNGs.
const logos: { src: string; alt: string; height?: number; width: number; naturalHeight: number }[] = [
  { src: salesforce, alt: 'Salesforce Pardot', height: 32, width: 185, naturalHeight: 96 },
  { src: hubspot, alt: 'HubSpot', height: 32, width: 171, naturalHeight: 96 },
  { src: google, alt: 'Google Marketing Platform', height: 30, width: 353, naturalHeight: 90 },
  { src: meta, alt: 'Meta Ads', height: 28, width: 257, naturalHeight: 84 },
  { src: linkedin, alt: 'LinkedIn Ads', height: 30, width: 213, naturalHeight: 90 },
  { src: mailchimp, alt: 'Mailchimp', height: 32, width: 353, naturalHeight: 96 },
  { src: semrush, alt: 'SEMrush', height: 30, width: 339, naturalHeight: 90 },
  { src: wordpress, alt: 'WordPress', height: 46, width: 256, naturalHeight: 138 },
  { src: chatgpt, alt: 'ChatGPT', height: 36, width: 36, naturalHeight: 36 },
  { src: claude, alt: 'Claude', height: 36, width: 36, naturalHeight: 36 },
  { src: perplexity, alt: 'Perplexity', height: 34, width: 34, naturalHeight: 34 },
  { src: n8n, alt: 'n8n', height: 34, width: 34, naturalHeight: 34 },
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
            <LogoImg
              src={logo.src}
              alt={logo.alt}
              $h={logo.height}
              width={logo.width}
              height={logo.naturalHeight}
              loading="lazy"
              decoding="async"
            />
          </LogoItem>
        ))}
      </Track>
    </StyledStackSection>
  );
}
