import styled from 'styled-components';
import { colors } from '../styles/variables';
import { device } from '../styles/mediaQueries';

export const WorkWrapper = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 2rem 6rem;
`;

export const WorkHeader = styled.header`
  margin-bottom: 3rem;
`;

export const WorkTitle = styled.h1`
  color: ${colors.primary};
  font-size: 2.8rem;
  line-height: 1.1;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media ${device.mobile} {
    font-size: 2.1rem;
  }
`;

export const WorkSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.92);
  max-width: 640px;
  line-height: 1.6;
  font-size: 1.05rem;
`;

export const CaseStudyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const CaseStudyCard = styled.article`
  background: #2c2c2c;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  padding: 1.5rem 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${colors.primary};
    transform: translateY(-3px);
  }
`;

export const CardBadge = styled.span`
  display: inline-block;
  background: rgba(255, 129, 100, 0.15);
  color: ${colors.primary};
  border: 1px solid rgba(255, 129, 100, 0.35);
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  padding: 0.25rem 0.75rem;
  width: fit-content;
`;

export const CardTitle = styled.h2`
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
`;

export const CardDescription = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
`;

export const MetricsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

export const MetricItem = styled.li`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    display: inline-block;
    width: 7px;
    height: 7px;
    background: ${colors.primary};
    border-radius: 50%;
    flex-shrink: 0;
  }
`;

export const PartnerCaption = styled.p`
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.8rem;
  font-style: italic;
  margin: 0;
`;

export const CardCta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: ${colors.primary};
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: auto;
  padding-top: 0.25rem;
  transition: gap 0.2s ease;

  &:hover {
    gap: 0.6rem;
  }
`;
