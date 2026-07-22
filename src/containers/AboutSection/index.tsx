import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import photo from '../../assets/avatar.png';
import {
  StyledSection,
  HeroArea,
  HeroEyebrow,
  HeroHeading,
  HeroSub,
  SplitLayout,
  Photo,
  ContentCol,
  AnimPara,
  StatsRow,
  StatItem,
  StatNumber,
  StatLabel,
  BeliefsGrid,
  BeliefCard,
  BeliefIcon,
  BeliefTitle,
  BeliefBody,
  ClosingSection,
  ClosingStatement,
  ClosingBtn,
} from './styles';

/* ─── Animated counter hook ─── */
function useCountUp(target: number, active: boolean, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setVal(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return val;
}

function CountStat({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const val = useCountUp(target, inView);
  return (
    <StatItem ref={ref}>
      <StatNumber>
        {val}
        {suffix}
      </StatNumber>
      <StatLabel>{label}</StatLabel>
    </StatItem>
  );
}

/* ─── Static data ─── */
const beliefs = [
  {
    icon: '⚙️',
    title: 'Systems before campaigns',
    body: 'Good marketing is not a series of launches. It is infrastructure built to compound over time.',
  },
  {
    icon: '📊',
    title: 'Revenue is the only metric that matters',
    body: 'Clicks, impressions, and reach are inputs. Revenue is the output. We work backwards from the outcome.',
  },
  {
    icon: '🔁',
    title: 'The work should outlast the engagement',
    body: 'We build systems you can run, measure, and grow. Not dependencies.',
  },
];

/* ─── Component ─── */
export function AboutSection(): JSX.Element {
  const navigate = useNavigate();

  const { ref: paraRef, inView: paraInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: beliefsRef, inView: beliefsInView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });
  const { ref: closingRef, inView: closingInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <StyledSection id="about">
      {/* ── Hero ── */}
      <HeroArea>
        <HeroEyebrow>About</HeroEyebrow>
        <HeroHeading>
          The thinking behind{' '}
          <span>Caruso Martech</span>
        </HeroHeading>
        <HeroSub>
          A decade of noticing the same problem. A consultancy built to fix it properly.
        </HeroSub>
      </HeroArea>

      {/* ── Photo + paragraphs ── */}
      <SplitLayout>
        <Photo src={photo} alt="Antonio Caruso" />

        <ContentCol ref={paraRef}>
          <AnimPara $inView={paraInView} $delay={0}>
            A decade working inside marketing teams across SaaS, events, ecommerce, and
            professional services taught one consistent lesson: most teams have the right
            people and real budgets, but the infrastructure underneath them is broken.
            Campaigns do not connect. Data does not flow. Results do not compound.
          </AnimPara>
          <AnimPara $inView={paraInView} $delay={150}>
            That pattern is why Caruso Martech exists. Not to run campaigns, but to build
            the systems that make every campaign smarter than the last. Strategy without
            infrastructure is just a plan. We build the machine.
          </AnimPara>
          <AnimPara $inView={paraInView} $delay={300}>
            Antonio Caruso. Based in Malta. Spent the last decade in marketing operations
            and leadership roles across global organisations, from early-stage SaaS startups
            to established mid-market businesses. MSc in Digital Marketing. Worked across
            Ireland, the UK, Brazil, and remotely with teams in the US and Europe.
          </AnimPara>
        </ContentCol>
      </SplitLayout>

      {/* ── Stats ── */}
      <StatsRow>
        <CountStat target={10} suffix="+" label="Years of experience" />
        <CountStat target={4} suffix="+" label="Industries served" />
        <CountStat target={6} suffix="+" label="Countries worked in" />
      </StatsRow>

      {/* ── Beliefs ── */}
      <BeliefsGrid ref={beliefsRef}>
        {beliefs.map((b, i) => (
          <BeliefCard key={b.title} $inView={beliefsInView} $delay={i * 130}>
            <BeliefIcon>{b.icon}</BeliefIcon>
            <BeliefTitle>{b.title}</BeliefTitle>
            <BeliefBody>{b.body}</BeliefBody>
          </BeliefCard>
        ))}
      </BeliefsGrid>

      {/* ── Closing CTA ── */}
      <ClosingSection ref={closingRef} $inView={closingInView}>
        <ClosingStatement>
          If your marketing is not working the way it should, that is usually a systems
          problem. We can fix that.
        </ClosingStatement>
        <ClosingBtn onClick={() => navigate('/contact')}>Get in touch →</ClosingBtn>
      </ClosingSection>
    </StyledSection>
  );
}
