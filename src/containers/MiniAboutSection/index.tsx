import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { device } from '../../styles/mediaQueries';
import { colors } from '../../styles/variables';

const StyledSection = styled.section`
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
  background: #1a1a1a;
`;

const Inner = styled.div`
  max-width: 800px;
  width: 100%;
`;

const SectionLabel = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${colors.primary};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Headline = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.light};
  line-height: 1.45;
  margin-bottom: 1.25rem;

  @media ${device.mobile} {
    font-size: 1.2rem;
  }
`;

const Body = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.7;
  margin-bottom: 1.25rem;
`;

const ProblemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const ProblemItem = styled.li`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.light};
  line-height: 1.6;
  padding-left: 1.4rem;
  position: relative;

  &::before {
    content: '·';
    color: ${colors.primary};
    font-size: 1.4rem;
    line-height: 1;
    position: absolute;
    left: 0;
    top: 0.05rem;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin: 2rem 0;
`;

const LearnMore = styled.button`
  background: none;
  border: none;
  color: ${colors.primary};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  width: fit-content;
  transition: opacity 0.2s;
  padding: 0;
  &:hover { opacity: 0.75; }
`;

export function MiniAboutSection(): JSX.Element {
  const navigate = useNavigate();
  return (
    <StyledSection id="mini-about">
      <Inner>
        <SectionLabel>Why we exist</SectionLabel>

        <Headline>
          Most marketing problems are not strategy problems. They are systems problems.
        </Headline>

        <ProblemList>
          <ProblemItem>Campaigns running in silos</ProblemItem>
          <ProblemItem>Attribution that never closes the loop</ProblemItem>
          <ProblemItem>Tools that were never designed to work together</ProblemItem>
        </ProblemList>

        <Body>
          A decade of hands-on marketing leadership across global SaaS, events, ecommerce, and
          professional services showed us the same pattern repeating, from early-stage startups to
          established mid-market businesses. Good teams, real budgets, and genuine ambition held
          back by infrastructure that was never built to connect.
        </Body>

        <Body>
          That experience is what made Caruso Martech inevitable. We exist to rebuild those systems
          properly: designing full-funnel marketing machines where data flows cleanly, audiences
          engage at the right moment, and revenue becomes a direct, measurable, long-term outcome
          of the work.
        </Body>

        <Divider />

        <LearnMore onClick={() => navigate('/about')}>
          About Caruso Martech &rarr;
        </LearnMore>
      </Inner>
    </StyledSection>
  );
}
