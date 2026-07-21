import { useState } from 'react';
import {
  StyledSection,
  ColumnsWrapper,
  Column,
  Title,
  SubTitle,
  Step,
  StepsWrapper,
  ToggleButton,
  SectionTitle,
  SectionInner,
} from './styles';
import { AboutWrapper } from '../AboutSection/styles';

const columns = [
  {
    title: 'Turn your website into your best salesperson',
    subtitle: 'SEO strategy, UX optimisation, and conversion design',
    steps: [
      'We start with a comprehensive SEO audit to uncover technical issues, keyword gaps, and content opportunities.',
      'We then optimise your site structure, metadata, copy, and internal linking to improve search visibility and rankings.',
      'We apply UX best practices so visitors can easily navigate, engage, and take action on your site.',
      'The result is a site that is easy to find, compelling to explore, and built to turn visitors into customers.',
    ],
  },
  {
    title: 'Build paid channels that compound over time',
    subtitle: 'Growth strategy, paid media, and funnel optimisation',
    steps: [
      'We start by analysing your business goals, audience behaviour, and current performance across all channels.',
      'We then build a data-driven growth strategy defining the right channels, messaging, targeting, and funnel stages to scale effectively.',
      'We manage the full planning and execution of paid campaigns across LinkedIn, Google, Meta, TikTok, and Pinterest.',
      'The result is marketing that acts as a reliable driver of leads, revenue, and long-term growth.',
    ],
  },
  {
    title: 'Stop guessing. Automate and measure everything.',
    subtitle: 'Marketing automation, dashboards, and ROI tracking',
    steps: [
      'We set up automated workflows for lead capture, nurturing, and CRM sync that eliminate manual work and reduce time to revenue.',
      'We build dashboards focused on actionable insights rather than vanity metrics.',
      'From lead scoring to ROI tracking, you will know exactly what is working and what is not.',
      'The result is a marketing engine that improves itself and supports smarter decisions at every level.',
    ],
  },
];

export function WhatIDoBestSection(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSteps = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
                <ToggleButton onClick={() => toggleSteps(i)}>
                  See how we do it
                </ToggleButton>
                <StepsWrapper expanded={openIndex === i}>
                  {col.steps.map((step, j) => (
                    <Step key={j}>{step}</Step>
                  ))}
                </StepsWrapper>
              </Column>
            ))}
          </ColumnsWrapper>
        </SectionInner>
      </AboutWrapper>
    </StyledSection>
  );
}
