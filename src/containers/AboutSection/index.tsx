import { useInView } from 'react-intersection-observer';
import { SectionTitle } from '../WhatIDoBestSection/styles';
import {
  AboutWrapper,
  Content,
  Photo,
  Heading,
  SubHeading,
  Year,
  Block,
  YearBlock,
  Subtitle,
  StyledSection,
  TimelineList,
  TimelineItem,
} from './styles';

import photo from '../../assets/avatar.png';

type JourneyItem = {
  year: string;
  title: string;
  content: string;
};

const journey = [
  {
    year: '2013',
    title: 'Foundations in Strategy',
    content:
      "Built my strategic base in Business Administration and Marketing in Sicily.\n\nThat’s where I learned to think in positioning, decision-making, and how growth actually happens.",
  },
  {
    year: '2017',
    title: 'Specialising in Digital Performance',
    content:
      "Moved to Ireland and completed a Master’s in Digital Marketing.\n\nThis is where I shifted from theory to performance, learning how to measure, test, and improve outcomes across channels.",
  },
  {
    year: '2017–2019',
    title: 'From Execution to Ownership',
    content:
      "Began my career in marketing operations and campaign execution within global tech and SaaS environments.\n\nWorking across cross-functional teams, I learned how to build and maintain performance systems that support measurable growth.",
  },
  {
    year: '2021',
    title: 'Data Analytics and my Startup Journey',
    content:
      "Strengthened my analytics skillset and co-founded Unigamer.\n\nBuilding in a startup removes the comfort of big teams and large budgets. I learned to prioritise, simplify, and focus only on what genuinely moves the business forward.",
  },
  {
    year: '2022',
    title: 'Global Marketing Operations Leadership',
    content:
      "Led marketing operations at SurveyMonkey, owning automation and performance infrastructure across global teams.\n\nThis is where I developed a systems mindset that prioritises structure before scale.",
  },
  {
    year: '2023',
    title: 'Strategic Growth in eCommerce & M&A',
    content:
      "At The Fortia Group, I supported eCommerce brands in an M&A context, leading growth initiatives across content and SEO.\n\nI worked directly with founders and travelled between the US and UK to align marketing strategy with commercial objectives. In that environment, marketing influences valuation, not just visibility.",
  },
  {
    year: '2024',
    title: 'Strategic & Operational Leadership',
    content:
      "At Grey Dog, I worked directly with clients to shape strategy while leading cross-channel execution and team delivery.\n\nIt strengthened my ability to align vision with execution and stay close enough to performance to make informed decisions. That balance now defines how I operate as a Fractional CMO.",
  },
  {
    year: '2025',
    title: 'Stepping Into Executive Ownership',
    content:
      "After ten years in corporate leadership, I had built the frameworks, judgment, and operational discipline required to own marketing at executive level.\n\nI now apply that experience as a Fractional CMO, partnering with founders and leadership teams to ensure marketing contributes directly to revenue.",
  },
];

function JourneyRow({ item }: { item: JourneyItem }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <TimelineItem ref={ref}>
      <YearBlock>
        <Year>{item.year}</Year>
        <Subtitle>{item.title}</Subtitle>
      </YearBlock>

      <Block inView={inView}>{item.content}</Block>
    </TimelineItem>
  );
}

export function AboutSection(): JSX.Element {
  return (
    <StyledSection id="about" aria-labelledby="about-title">
      <AboutWrapper>
        <Photo src={photo} alt="Portrait of Antonio Caruso" />

        <Content>
          <SectionTitle>About Me</SectionTitle>
          <Heading id="about-title">My Journey Toward Marketing Leadership</Heading>
          <SubHeading>
            A decade of building strategy, owning execution, and driving measurable
            growth across corporate and entrepreneurial environments.
          </SubHeading>

          <TimelineList>
            {journey.map((item) => (
              <JourneyRow key={`${item.year}-${item.title}`} item={item} />
            ))}
          </TimelineList>
        </Content>
      </AboutWrapper>
    </StyledSection>
  );
}
