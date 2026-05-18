import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { ContentWrapper, Header, SubHeader, StyledSection } from './styles';

export function HeroSection(): JSX.Element {
  const navigate = useNavigate();
  return (
    <StyledSection id="home-hero">
      <ContentWrapper>
        <Header $size={6}>
          Fractional CMO{' '}
          <br className="mobile-break" />
          for founders and{' '}
          <br className="mobile-break" />
          leadership teams
        </Header>

        <SubHeader>
          After ten years leading marketing operations, I've seen the same pattern:{' '}
          <em>campaigns without tracking, ad spend with no clear ROI, disconnected tools.</em>
          <br />
          <br />
          I connect those pieces and build systems that drive revenue while cutting manual work.
        </SubHeader>

        <Button onClick={() => navigate('#contact')}>Get in Touch</Button>
      </ContentWrapper>
    </StyledSection>
  );
}
