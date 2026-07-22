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
    title: 'Your website becomes your best salesperson',
    subtitle: 'SEO strategy, UX optimisation, and conversion design',
  },
  {
    title: 'Paid channels that learn and compound',
    subtitle: 'Growth strategy, paid media, and funnel optimisation',
  },
  {
    title: 'Clear sight of what\'s driving revenue',
    subtitle: 'Marketing automation, dashboards, and ROI tracking',
  },
];

export function WhatIDoBestSection(): JSX.Element {
  const navigate = useNavigate();

  return (
    <StyledSection id="services">
      <AboutWrapper>
        <SectionInner>
          <SectionTitle>What you gain</SectionTitle>

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
