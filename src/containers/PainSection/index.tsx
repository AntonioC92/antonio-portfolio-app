import {
  StyledSection,
  Inner,
  Headline,
  CardsRow,
  PainCard,
  PainIcon,
  PainTitle,
  PainDesc,
  FixBlock,
  FixEyebrow,
  FixStatement,
} from './styles';

const pains = [
  {
    icon: '📉',
    title: 'Ad spend with no clear ROI',
    desc: 'Budgets are going out the door, but no one can say which campaigns are actually driving revenue.',
  },
  {
    icon: '🔁',
    title: 'Campaigns that never compound',
    desc: 'Every launch starts from scratch. Nothing is built to learn, iterate, or scale over time.',
  },
  {
    icon: '📊',
    title: 'Tools everywhere, insight nowhere',
    desc: 'The tech stack keeps growing, but decisions are still made on gut feel rather than data.',
  },
];

export function PainSection(): JSX.Element {
  return (
    <StyledSection id="pain">
      <Inner>
        <Headline>Sound familiar?</Headline>

        <CardsRow>
          {pains.map((p) => (
            <PainCard key={p.title}>
              <PainIcon>{p.icon}</PainIcon>
              <PainTitle>{p.title}</PainTitle>
              <PainDesc>{p.desc}</PainDesc>
            </PainCard>
          ))}
        </CardsRow>

        <FixBlock>
          <FixEyebrow>How we fix it</FixEyebrow>
          <FixStatement>
            We build the connective tissue your marketing is missing. One system where your
            channels share data, your campaigns build on each other, and revenue stops being
            a guess.
          </FixStatement>
        </FixBlock>
      </Inner>
    </StyledSection>
  );
}
