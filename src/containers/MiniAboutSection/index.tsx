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
          10 years leading marketing at companies like{' '}
          <Accent>SurveyMonkey</Accent> and <Accent>Facebook</Accent> - now
          available as your embedded marketing leader without the full-time overhead.
        </Quote>
        <LearnMore onClick={() => navigate('/about')}>
          More about Antonio &rarr;
        </LearnMore>
      </Inner>
    </StyledSection>
  );
}
