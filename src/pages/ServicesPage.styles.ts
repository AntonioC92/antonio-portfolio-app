import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../styles/variables';
import { device } from '../styles/mediaQueries';

export const ServicesWrapper = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 2rem 6rem;
`;

export const ServicesHeader = styled.header`
  margin-bottom: 3.5rem;
`;

export const ServicesTitle = styled.h1`
  color: ${colors.primary};
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 0.75rem;

  @media ${device.mobile} {
    font-size: 2.1rem;
  }
`;

export const ServicesSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.88);
  max-width: 680px;
  line-height: 1.65;
  font-size: 1.05rem;
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
  margin-bottom: 4rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.article`
  background: #2c2c2c;
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 14px;
  padding: 1.75rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ServiceIcon = styled.div`
  font-size: 1.6rem;
  line-height: 1;
`;

export const ServiceName = styled.h2`
  color: #ffffff;
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.3;
`;

export const ServiceDesc = styled.p`
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.93rem;
  line-height: 1.65;
  flex: 1;
`;

export const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const ServiceListItem = styled.li`
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.86rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background: ${colors.primary};
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 0.45em;
  }
`;

export const SectionDivider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin: 3.5rem 0;
`;

export const EngagementSection = styled.section`
  margin-bottom: 4rem;
`;

export const SectionLabel = styled.h2`
  color: ${colors.primary};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const SectionBody = styled.p`
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.65;
  font-size: 0.97rem;
  max-width: 780px;
  margin-bottom: 1.5rem;
`;

export const EngagementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const EngagementCard = styled.div`
  background: #252525;
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 12px;
  padding: 1.4rem 1.3rem;
`;

export const EngagementType = styled.h3`
  color: ${colors.primary};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

export const EngagementTitle = styled.h4`
  color: #ffffff;
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
`;

export const EngagementDesc = styled.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.9rem;
  line-height: 1.6;
`;

export const CtaSection = styled.section`
  background: #2c2c2c;
  border: 1px solid rgba(255, 129, 100, 0.25);
  border-radius: 14px;
  padding: 2rem 1.75rem;
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const CtaText = styled.div``;

export const CtaTitle = styled.h2`
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
`;

export const CtaSubtext = styled.p`
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.92rem;
`;

export const CtaLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: ${colors.primary};
  color: #fff;
  font-weight: 700;
  font-size: 0.92rem;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  white-space: nowrap;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.88;
  }
`;
