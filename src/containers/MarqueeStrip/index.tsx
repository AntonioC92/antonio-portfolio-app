import { styled, keyframes } from 'styled-components';

const scroll = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollReverse = keyframes`
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

const Wrap = styled.div`
  background: #111;
  border-top: 1px solid rgba(255, 129, 100, 0.15);
  border-bottom: 1px solid rgba(255, 129, 100, 0.15);
  overflow: hidden;
  padding: 0;
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  padding: 0.65rem 0;
`;

const TrackForward = styled(Track)`
  animation: ${scroll} 32s linear infinite;
`;

const TrackReverse = styled(Track)`
  animation: ${scrollReverse} 28s linear infinite;
`;

const Divider = styled.div`
  text-align: center;
  padding: 0.45rem 0;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #ff8164;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const ServiceItem = styled.span`
  white-space: nowrap;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #ffffff;
  padding: 0 1.4rem;
`;

const IndustryItem = styled.span`
  white-space: nowrap;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #ffffff;
  padding: 0 1.4rem;
`;

const Dot = styled.span`
  color: #ff8164;
  padding: 0 0.2rem;
`;

const SERVICES: [string, string][] = [
  ['📈', 'Acquisition Systems'],
  ['🔍', 'AI Search & Experience'],
  ['⚡', 'Automation & Intelligence'],
];

const INDUSTRIES: [string, string][] = [
  ['💻', 'SaaS'],
  ['🎟️', 'Events'],
  ['🛒', 'Ecommerce'],
  ['💼', 'Professional Services'],
];

function buildServiceRow(items: [string, string][]) {
  const doubled = [...items, ...items];
  return doubled.flatMap(([emoji, label], i) => [
    <ServiceItem key={`${label}-${i}`}>{emoji}&nbsp;&nbsp;{label}</ServiceItem>,
    <Dot key={`dot-${i}`}>·</Dot>,
  ]);
}

function buildIndustryRow(items: [string, string][]) {
  const doubled = [...items, ...items];
  return doubled.flatMap(([emoji, label], i) => [
    <IndustryItem key={`${label}-${i}`}>{emoji}&nbsp;&nbsp;{label}</IndustryItem>,
    <Dot key={`dot-${i}`}>·</Dot>,
  ]);
}

export function MarqueeStrip(): JSX.Element {
  return (
    <Wrap aria-hidden="true">
      <TrackForward>{buildServiceRow(SERVICES)}</TrackForward>
      <Divider>Built For</Divider>
      <TrackReverse>{buildIndustryRow(INDUSTRIES)}</TrackReverse>
    </Wrap>
  );
}
