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
  StatSub,
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
      const eased = 1 - Math.pow(1 - p, 3);
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
  sub,
}: {
  target: number;
  suffix: string;
  label: string;
  sub?: string;
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
      {sub && <StatSub>{sub}</StatSub>}
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
          The thinking behind <span>Caruso Martech</span>
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
            Campaigns do not connect and data does not flow, resulting in outcomes that
            never match the effort invested.
          </AnimPara>
          <AnimPara $inView={paraInView} $delay={150}>
            That pattern is why Caruso Martech exists. We build the systems that make
            every campaign smarter than the last, turning strategy from a plan into a
            machine that grows with each cycle.
          </AnimPara>
          <AnimPara $inView={paraInView} $delay={300}>
            I'm Antonio Caruso. Based remotely in Europe, with most of the last decade
            built in Dublin at the heart of the European tech ecosystem. Ten years in
            marketing operations and leadership across global organisations, from
            early-stage SaaS startups to established mid-market businesses. Pursued MSc
            in Digital Marketing, H.Dip. in Data Analytics. The figures below are the
            footprint of that work.
          </AnimPara>
        </ContentCol>
      </SplitLayout>

      {/* ── Stats ── */}
      <StatsRow>
        <CountStat target={10} suffix="+" label="Years of experience" />
        <CountStat
          target={7}
          suffix=""
          label="Markets covered"
          sub="UK · US · IE · IT · ES · BR · AU"
        />
        <CountStat
          target={4}
          suffix=""
          label="Languages"
          sub="EN · IT · PT · ES"
        />
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
