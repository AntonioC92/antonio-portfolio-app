import { useNavigate } from 'react-router-dom';
import {
  ContentWrapper,
  Header,
  SubHeader,
  StyledSection,
  ButtonRow,
  PrimaryBtn,
  SecondaryBtn,
  TrustLine,
} from './styles';

export function HeroSection(): JSX.Element {
  const navigate = useNavigate();
  return (
    <StyledSection id="home-hero">
      <ContentWrapper>
        <Header $size={6}>
          Marketing systems{' '}
          <br className="mobile-break" />
          that drive revenue.
        </Header>

        <SubHeader>
          We help founders and leadership teams build the strategy, execution, and
          infrastructure that turns marketing into a reliable growth engine.
        </SubHeader>

        <ButtonRow>
          <PrimaryBtn onClick={() => navigate('#contact')}>Book a Call</PrimaryBtn>
          <SecondaryBtn onClick={() => navigate('/work')}>See Our Work</SecondaryBtn>
        </ButtonRow>

        <TrustLine>SaaS &nbsp;·&nbsp; Events &nbsp;·&nbsp; Ecommerce &nbsp;·&nbsp; Professional Services</TrustLine>
      </ContentWrapper>
    </StyledSection>
  );
}
