import { useEffect, useRef, useState } from 'react';
import {
  StyledTestimonialSection,
  StyledGridWrapper,
  StyledCarousel,
  StyledTestimonialCard,
  StyledName,
  StyledRole,
  StyledDate,
  StyledRelation,
  StyledQuote,
  StyledArrowContainer,
  StyledArrowButton,
  LinkedInIcon,
  StyledNameWithIcon,
} from './styles';
import { SectionTitle } from '../WhatIDoBestSection/styles';
import linkedin from '../../assets/icons/linkedin.png';

const testimonials = [
  {
    name: 'Daniel Gutzler',
    title: 'Sportstherapist & Naturopath',
    date: 'February 24, 2026',
    relationship: "Daniel was Antonio's client",
    content: `Antonio helped me set up the full analytics and paid acquisition foundation for my corporate retreat lodge in Switzerland.

He implemented GA4 and GTM tracking, configured conversion events, structured our Google Ads campaigns, and provided clear documentation so I could operate independently.

He combines technical expertise with strategic thinking. Communication was clear, deadlines were respected, and the work delivered real visibility into our funnel performance.

I would definitely work with him again.`,
    linkedinUrl: 'https://www.linkedin.com/in/daniel-gutzler-7667a093/',
  },
  {
    name: 'Jamen Krynicki',
    title: 'Organic SEO that works | CEO of Revenue and Results',
    date: 'August 05, 2025',
    relationship: "Jamen was Antonio's client",
    content: `I've had the pleasure of working with Antonio on multiple SEO projects for U.S.-based eCommerce brands through my agency. He's consistently reliable, quick to execute, and understands the nuances of on-page and technical SEO. Antonio has been a strong freelancer partner and continues to deliver great results across every project we’ve thrown his way. Highly recommend.`,
    linkedinUrl: 'https://www.linkedin.com/in/jamen-krynicki-75636756/',
  },
  {
    name: 'Carley Quigley',
    title:
      'CEO of GREY DOG - where creativity fuels growth | EY Entrepreneurial Winning Women EMEIA Class of 2024 | Active member of multiple boards.',
    date: 'May 22, 2025',
    relationship: 'Carley managed Antonio directly',
    content: `Antonio was a core part of the Grey Dog marketing team. Antonio taught us the importance of data, visualisation, campaign planning and budget allocation throughout multiple digital channels. He was a great addition to the culture of the team and always had client best interest at heart! We wish him all the best in his endeavour!`,
    linkedinUrl: 'https://www.linkedin.com/in/carley-quigley/',
  },
  {
    name: 'Emmett Kilduff',
    title:
      'Entrepreneur (e.g. Pitstop, The Fortia Group, Eagle Alpha) and investment banker.',
    date: 'February 5, 2024',
    relationship: 'Emmett managed Antonio directly',
    content: `Antonio led the marketing efforts for The Fortia Group, a boutique investment bank focused on eCommerce companies. It was a diverse role with many tasks and responsibilities to juggle. He did a great job and I would recommend him for a similar role.`,
    linkedinUrl: 'https://www.linkedin.com/in/emmettkilduff/',
  },
  {
    name: 'Ric Arcifa',
    title:
      'Lead Software Engineer – NodeJS, Blockchain, React, TypeScript, Redux, Ethereum, Solidity – and more',
    date: 'February 1, 2024',
    relationship: 'Ric worked with Antonio on the same team',
    content: `I had the privilege of co-founding Unigamer with Antonio. In his crucial role as Head of Marketing, he demonstrated exceptional leadership and innovation by developing a comprehensive marketing plan. This plan not only positioned our brand within the gaming community but also laid the groundwork for transforming our initial concept into a fully operational pre-commercial startup.`,
    linkedinUrl: 'https://www.linkedin.com/in/ricardogiuliano/',
  },
  {
    name: 'Michelle Tang',
    title: 'Marketing Technology and Operations Leader',
    date: 'March 7, 2023',
    relationship:
      'Michelle was senior to Antonio but didn’t manage him directly',
    content: `Antonio was an amazing partner to cross functional teams in supporting campaign operational excellence as part of the core marketing ops and technology team. He communicated well with stakeholders on project requests and helped them understand how to incorporate our mops processes into other team’s workflows. Antonio, I cannot thank you enough for all the wonderful work you did at Momentive.ai!`,
    linkedinUrl: 'https://www.linkedin.com/in/michellemarietang/',
  },
];

export function TestimonialSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Auto sort newest → oldest
  const sortedTestimonials = [...testimonials].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const checkScrollPosition = () => {
    const el = carouselRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    el.addEventListener('scroll', checkScrollPosition);
    checkScrollPosition();

    return () => el.removeEventListener('scroll', checkScrollPosition);
  }, []);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <StyledTestimonialSection id="testimonials">
      <SectionTitle>My Testimonials</SectionTitle>

      <StyledGridWrapper>
        <StyledCarousel ref={carouselRef}>
          {sortedTestimonials.map((item) => (
            <StyledTestimonialCard key={`${item.name}-${item.date}`}>
              <StyledNameWithIcon>
                <StyledName>{item.name}</StyledName>

                <a
                  href={item.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.name} on LinkedIn`}
                >
                  <LinkedInIcon src={linkedin} alt="LinkedIn" />
                </a>
              </StyledNameWithIcon>

              <StyledRole>{item.title}</StyledRole>
              <StyledDate>{item.date}</StyledDate>
              <StyledRelation>{item.relationship}</StyledRelation>
              <StyledQuote>{item.content}</StyledQuote>
            </StyledTestimonialCard>
          ))}
        </StyledCarousel>

        <StyledArrowContainer>
          <StyledArrowButton
            direction="left"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            ←
          </StyledArrowButton>
          <StyledArrowButton
            direction="right"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            →
          </StyledArrowButton>
        </StyledArrowContainer>
      </StyledGridWrapper>
    </StyledTestimonialSection>
  );
}