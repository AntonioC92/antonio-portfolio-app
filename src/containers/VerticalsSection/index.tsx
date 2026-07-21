import {
  StyledSection,
  Inner,
  SectionTitle,
  SectionSub,
  Grid,
  Card,
  CardIcon,
  CardTitle,
  CardPain,
  CardOutcome,
} from './styles';

const verticals = [
  {
    icon: '🖥️',
    title: 'SaaS',
    pain: 'Turning free users into paying customers at scale',
    outcome:
      'Automated onboarding flows, lifecycle marketing, and conversion tracking built around your product funnel.',
  },
  {
    icon: '🎟️',
    title: 'Events',
    pain: 'Driving registrations and maximising ticket revenue',
    outcome:
      'Performance campaigns, audience retargeting, and email sequences that fill seats and build repeat attendance.',
  },
  {
    icon: '🛒',
    title: 'Ecommerce',
    pain: 'Growing revenue through acquisition and retention',
    outcome:
      'Paid social, SEO, email automation, and abandoned cart recovery working together to increase LTV.',
  },
  {
    icon: '💼',
    title: 'Professional Services',
    pain: 'Generating qualified leads without burning the sales team',
    outcome:
      'Content strategy, LinkedIn, and inbound systems that qualify prospects before they reach your pipeline.',
  },
];

export function VerticalsSection(): JSX.Element {
  return (
    <StyledSection id="verticals">
      <Inner>
        <SectionTitle>Who We Work With</SectionTitle>
        <SectionSub>
          We work across sectors where marketing complexity is high and the cost of
          getting it wrong is real.
        </SectionSub>

        <Grid>
          {verticals.map((v) => (
            <Card key={v.title}>
              <CardIcon>{v.icon}</CardIcon>
              <CardTitle>{v.title}</CardTitle>
              <CardPain>{v.pain}</CardPain>
              <CardOutcome>{v.outcome}</CardOutcome>
            </Card>
          ))}
        </Grid>
      </Inner>
    </StyledSection>
  );
}
