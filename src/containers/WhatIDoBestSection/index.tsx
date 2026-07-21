import { useNavigate } from 'react-router-dom';
import {
  StyledSection,
  ColumnsWrapper,
  Column,
  Title,
  SubTitle,
  ServiceLink,
  SectionTitle,
  SectionInner,
} from './styles';
import { AboutWrapper } from '../AboutSection/styles';

const columns = [
  {
    title: 'Turn your website into your best salesperson',
    subtitle: 'SEO strategy, UX optimisation, and conversion design',
  },
  {
    title: 'Build paid channels that compound over time',
    subtitle: 'Growth strategy, paid media, and funnel optimisation',
  },
  {
    title: 'Stop guessing. Automate and measure everything.',
    subtitle: 'Marketing automation, dashboards, and ROI tracking',
  },
];

export function WhatIDoBestSection(): JSX.Element {
  const navigate = useNavigate();

  return (
    <StyledSection id="services">
      <AboutWrapper>
        <SectionInner>
          <SectionTitle>What We Deliver</SectionTitle>

          <ColumnsWrapper>
            {columns.map((col, i) => (
              <Column key={i}>
                <Title>{col.title}</Title>
                <SubTitle>{col.subtitle}</SubTitle>
                <ServiceLink onClick={() => navigate('/services')}>
                  Explore our services {'→'}
                </ServiceLink>
              </Column>
            ))}
          </ColumnsWrapper>
        </SectionInner>
      </AboutWrapper>
    </StyledSection>
  );
}
