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
    title: 'SEO & UX Optimisation Expert',
    subtitle: 'From SEO audits to conversion-focused UX',
    steps: [
      'I start with a comprehensive SEO audit which aims to uncover technical issues, keyword gaps, and content opportunities.',
      'I then optimise your website’s structure, metadata, copy, and internal linking to improve search visibility and ranking.',
      'I also apply UX best practices to make sure visitors can easily navigate, engage, and take valuable action on your website',
      'The goal is to make your site easy to find, compelling to explore and optimised to turn visitors into loyal customers.',
    ],
  },
  {
    title: 'Growth Strategy & Performance Marketing',
    subtitle: 'From paid media to funnel optimisation and conversions',
    steps: [
      'I start by analysing your business goals, audience behaviour, and overall performance',
      'I will then build a data-driven growth strategy by defining the right channels, messaging, targeting, and funnel stages to scale effectively.',
      'Once the strategy is approved, I manage the full planning and execution of paid campaigns across LinkedIn, Google, Meta, TikTok, and Pinterest.',
      'The goal is to turn your marketing into a reliable driver of leads, revenue and long-term growth.',
    ],
  },
  {
    title: 'Marketing Automation & Analytics',
    subtitle: 'From smart workflows to real-time insights',
    steps: [
      'I set up automated workflows for lead capture, nurturing, and CRM sync that streamline operations and eliminate manual work',
      'I then build dashboards focused on actionable insights rather than vanity metrics.',
      'From lead scoring to ROI tracking, you’ll know what’s working and what’s just noise.',
      'The goal is to turn your marketing activities into a self-improving engine that drives smarter decisions and better results.',
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
          <SectionTitle>What I do best</SectionTitle>

          <ColumnsWrapper>
            {columns.map((col, i) => (
              <Column key={i}>
                <Title>{col.title}</Title>
                <SubTitle>{col.subtitle}</SubTitle>
                <ToggleButton onClick={() => toggleSteps(i)}>
                  See how I do it
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
