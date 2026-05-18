import { useEffect, useRef, useState } from 'react';
import {
  StyledPortfolioSection,
  StyledPortfolioGrid,
  StyledPortfolioCard,
  StyledCardTitle,
  StyledCardDetails,
  StyledCardDetailItem,
  StyledArrowContainer,
  StyledArrowButton,
  StyledGridWrapper,
  StyledModalOverlay,
  StyledModalContent,
  StyledModalImage,
  StyledCloseButton,
  StyledCardBack,
  StyledCardFront,
  StyledCardInner,
} from './styles';
import { SectionTitle } from '../WhatIDoBestSection/styles';
import beerFestImg from '../../assets/images/beer fest logo.png';
import jobbioImg from '../../assets/images/jobbio career fair.png';
import mediaClientImg from '../../assets/images/media client.png';
import saasImg from '../../assets/images/SaaS.png';

const portfolioItems = [
  {
    title: 'Beer Festival – Meta & Google Ads Campaigns',
    details: [
      'Goal: Drive ticket sales via Google & Meta Ads',
      'Budget: €4,639.21',
      'Revenue: €72,000',
      'Tickets Sold: 3,971',
      'Avg. Cost/Ticket: €1.22',
      'Meta Views: 5,863 | Google Clicks: 9,823',
      'Only 6.71% of revenue spent on ads',
    ],
    backImage: beerFestImg,
  },
  {
    title: 'Jobbio Career Fair - LinkedIn Lead Gen Campaign',
    details: [
      'Goal: Generate leads for exhibition stand package',
      'Target: HR leaders at 1000+ staff companies',
      'Channel: LinkedIn Sponsored Video & Lead Gen Form',
      'Budget: €30,000',
      'Results: €135k Revenue, 60 MQLs, 64% via lead form',
    ],
    backImage: jobbioImg,
  },
  {
    title: 'SaaS A/B Test – LinkedIn Demo Campaign',
    details: [
      'Goal: Increase demo leads via LinkedIn Lead Gen',
      '+86.7% leads vs. landing page',
      'CPL reduced from £149 to £34.70',
    ],
    backImage: saasImg,
  },
  {
    title: 'Media Client - Summit Event LinkedIn Campaign',
    details: [
      'Goal: Test paid ads for annual summit',
      'Phase 1: Static = 2 leads',
      'Phase 2: Video = 4 leads, 25% lower CPL',
    ],
    backImage: mediaClientImg,
  },
];

export function PortfolioSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

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
    checkScrollPosition(); // initial check
    return () => el.removeEventListener('scroll', checkScrollPosition);
  }, []);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const [flippedCards, setFlippedCards] = useState<boolean[]>(() =>
    portfolioItems.map(() => true)
  );

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) =>
      prev.map((isFlipped, i) => (i === index ? !isFlipped : isFlipped))
    );
  };

  return (
    <StyledPortfolioSection id="portfolio">
      <SectionTitle>My Portfolio</SectionTitle>
      <StyledGridWrapper>
        <StyledPortfolioGrid ref={carouselRef}>
          {portfolioItems.map((item, index) => (
            <StyledPortfolioCard key={index} onClick={() => toggleFlip(index)}>
              <StyledCardInner isFlipped={flippedCards[index]}>
                <StyledCardFront>
                  <StyledCardTitle>{item.title}</StyledCardTitle>
                  <StyledCardDetails>
                    {item.details.map((d, i) => (
                      <StyledCardDetailItem key={i}>{d}</StyledCardDetailItem>
                    ))}
                  </StyledCardDetails>
                </StyledCardFront>

                <StyledCardBack>
                  <img
                    src={item.backImage}
                    alt={`${item.title} flip`}
                    style={{ maxWidth: '100%', borderRadius: '12px' }}
                  />
                </StyledCardBack>
              </StyledCardInner>
            </StyledPortfolioCard>
          ))}
        </StyledPortfolioGrid>

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

      {modalImage && (
        <StyledModalOverlay onClick={() => setModalImage(null)}>
          <StyledModalContent onClick={(e) => e.stopPropagation()}>
            <StyledCloseButton onClick={() => setModalImage(null)}>
              ×
            </StyledCloseButton>
            <StyledModalImage src={modalImage} alt="Preview" />
          </StyledModalContent>
        </StyledModalOverlay>
      )}
    </StyledPortfolioSection>
  );
}

