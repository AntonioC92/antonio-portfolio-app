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
  ArrowDivider,
} from './styles';
import { AboutWrapper } from '../AboutSection/styles';

const columns = [
  {
    title: 'Found in AI search, built to convert',
    subtitle: 'AI search optimisation, UX, and conversion design',
  },
  {
    title: 'Paid channels that learn and compound',
    subtitle: 'Acquisition systems, paid media, and funnel optimisation',
  },
  {
    title: 'Clear sight of what\'s driving revenue',
    subtitle: 'Automation, AI-assisted reporting, and ROI tracking',
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
              <>
                <Column key={i}>
                  <Title>{col.title}</Title>
                  <SubTitle>{col.subtitle}</SubTitle>
                  <ServiceLink onClick={() => navigate('/services')}>
                    Explore our services {'→'}
                  </ServiceLink>
                </Column>
                {i === 1 && <ArrowDivider key="arrow">→</ArrowDivider>}
              </>
            ))}
          </ColumnsWrapper>
        </SectionInner>
      </AboutWrapper>
    </StyledSection>
  );
}
