import {
  StyledSection,
  Inner,
  Eyebrow,
  Headline,
  Sub,
  CardsRow,
  PainCard,
  PainIcon,
  PainTitle,
  PainDesc,
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
        <Eyebrow>Sound familiar?</Eyebrow>
        <Headline>
          Most businesses have the tools.
          <br />
          What they are missing is the system.
        </Headline>
        <Sub>
          We bring the strategy, infrastructure, and execution that ties everything together
          and turns marketing into a predictable growth channel.
        </Sub>

        <CardsRow>
          {pains.map((p) => (
            <PainCard key={p.title}>
              <PainIcon>{p.icon}</PainIcon>
              <PainTitle>{p.title}</PainTitle>
              <PainDesc>{p.desc}</PainDesc>
            </PainCard>
          ))}
        </CardsRow>
      </Inner>
    </StyledSection>
  );
}
