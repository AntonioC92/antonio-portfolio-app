import { styled, keyframes } from 'styled-components';

const scroll = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollReverse = keyframes`
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

const Strip = styled.div`
  background: #111;
  border-top: 1px solid rgba(255, 129, 100, 0.15);
  border-bottom: 1px solid rgba(255, 129, 100, 0.15);
  overflow: hidden;
  padding: 0;
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  padding: 0.75rem 0;
`;

const TrackForward = styled(Track)`
  animation: ${scroll} 30s linear infinite;
`;

const TrackReverse = styled(Track)`
  animation: ${scrollReverse} 36s linear infinite;
`;

const Item = styled.span`
  white-space: nowrap;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  padding: 0 1.5rem;

  &.accent {
    color: #ff8164;
  }
`;

const DOT = <Item className="accent">·</Item>;

const SERVICES = [
  'Growth Strategy',
  'Paid Media',
  'SEO & UX',
  'Marketing Automation',
  'Analytics & Attribution',
  'Funnel Design',
  'Conversion Rate Optimisation',
  'CRM & Lead Scoring',
];

const INDUSTRIES = [
  'SaaS',
  'Events',
  'Ecommerce',
  'Professional Services',
  'Education',
  'Coaching',
  'Golf & Recreation',
  'B2B',
];

function buildRow(items: string[]) {
  // duplicate so the loop is seamless
  const doubled = [...items, ...items];
  return doubled.flatMap((item, i) => [
    <Item key={`${item}-${i}`}>{item}</Item>,
    <Item key={`dot-${i}`} className="accent">·</Item>,
  ]);
}

export function MarqueeStrip(): JSX.Element {
  return (
    <Strip aria-hidden="true">
      <TrackForward>{buildRow(SERVICES)}</TrackForward>
      <TrackReverse>{buildRow(INDUSTRIES)}</TrackReverse>
    </Strip>
  );
}
