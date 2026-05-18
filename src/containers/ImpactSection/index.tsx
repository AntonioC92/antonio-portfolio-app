import {
  FaChartLine,
  FaUsers,
  FaGlobe,
  FaMousePointer,
  FaHandshake,
} from 'react-icons/fa';
import { SectionInner, SectionTitle } from '../WhatIDoBestSection/styles';
import {
  StyledImpactSection,
  ImpactWrapper,
  ImpactItem,
  ImpactIcon,
  ImpactMetric,
  ImpactLabel,
} from './styles';
import { AboutWrapper } from '../AboutSection/styles';

const impacts = [
  {
    icon: <FaChartLine />,
    metric: '€200,000+',
    label: 'Revenue',
  },
  {
    icon: <FaUsers />,
    metric: '500+',
    label: 'Leads generated',
  },
  {
    icon: <FaGlobe />,
    metric: '200%',
    label: 'Organic traffic growth',
  },
  {
    icon: <FaMousePointer />,
    metric: '30%+',
    label: 'Landing page conversions',
  },
  {
    icon: <FaHandshake />,
    metric: '25%+',
    label: 'Lead engagement & retention',
  },
];

export function ImpactSection(): JSX.Element {
  return (
    <StyledImpactSection>
      <AboutWrapper>
        <SectionInner>
          <SectionTitle>My Impacts in Number</SectionTitle>
          <ImpactWrapper>
            {impacts.map((item, index) => (
              <ImpactItem key={index}>
                <ImpactIcon>{item.icon}</ImpactIcon>
                <ImpactMetric>{item.metric}</ImpactMetric>
                <ImpactLabel>{item.label}</ImpactLabel>
              </ImpactItem>
            ))}
          </ImpactWrapper>
        </SectionInner>
      </AboutWrapper>
    </StyledImpactSection>
  );
}
