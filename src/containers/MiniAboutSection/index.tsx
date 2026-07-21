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
  text-align: center;
`;

const Quote = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${colors.light};
  line-height: 1.55;
  margin-bottom: 2rem;

  @media ${device.mobile} {
    font-size: 1.15rem;
  }
`;

const Accent = styled.span`
  color: ${colors.primary};
`;

const LearnMore = styled.button`
  background: none;
  border: none;
  color: ${colors.primary};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: opacity 0.2s;
  &:hover { opacity: 0.75; }
`;

export function MiniAboutSection(): JSX.Element {
  const navigate = useNavigate();
  return (
    <StyledSection id="mini-about">
      <Inner>
        <Quote>
          Caruso Martech is a <Accent>founder-led boutique</Accent> marketing
          consultancy. A decade of hands-on senior strategy and execution —
          building growth systems across SaaS, events, ecommerce, and
          professional services that generated over{' '}
          <Accent>€200,000 in attributed revenue</Accent>, 500+ qualified
          leads, and ROAS as high as <Accent>15.5x</Accent>. Senior expertise
          on every engagement, delivered directly — no junior handoffs, no
          account managers between you and the work.
        </Quote>
        <LearnMore onClick={() => navigate('/about')}>
          About Caruso Martech &rarr;
        </LearnMore>
      </Inner>
    </StyledSection>
  );
}
