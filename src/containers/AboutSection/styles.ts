import styled from 'styled-components';
import { device } from '../../styles/mediaQueries';
import { colors } from '../../styles/variables';

export const StyledSection = styled.section`
  padding: 6rem 2rem;
  display: flex;
  justify-content: center;

  @media ${device.mobile} {
    padding: 4rem 1.25rem;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  max-width: 1200px;
  width: 100%;
  justify-content: center;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
    gap: 1.75rem;
  }
`;

export const Photo = styled.img`
  width: 350px;
  height: 500px;
  border-radius: 16px;
  object-fit: cover;
  flex-shrink: 0;
  position: sticky;
  top: 6rem;
  align-self: flex-start;

  @media ${device.tablet} {
    width: 300px;
    height: 450px;
  }

  @media ${device.mobile} {
    position: static;
    width: 100%;
    height: auto;
    max-width: 340px;
    border-radius: 14px;
    align-self: center;
  }
`;

export const Content = styled.div`
  flex: 1;
  max-width: 820px;

  @media ${device.mobile} {
    text-align: center;
  }
`;

/* Same design language as Hero, smaller than H1 */
export const Heading = styled.h2`
  font-family: "Montserrat Variable", sans-serif;
  font-size: 3rem;
  line-height: 1.05;
  letter-spacing: normal;
  font-weight: 600;
  color: ${colors.primary};
  margin-bottom: 0.75rem;

  @media ${device.mobile} {
    margin-bottom: 0.6rem;
  }
`;

export const SubHeading = styled.p`
  font-size: 1.15rem;
  line-height: 1.55;
  color: ${colors.light};
  margin-bottom: 2.25rem;
  max-width: 720px;
  opacity: 0.92;

  @media ${device.mobile} {
    font-size: 1.02rem;
    margin-bottom: 1.6rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

/* Semantic list: better UX + crawlable structure */
export const TimelineList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 18px;

  @media ${device.mobile} {
    gap: 14px;
  }
`;

export const TimelineItem = styled.li`
  display: grid;
  grid-template-columns: 190px 1fr;
  gap: 18px;
  align-items: start;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 10px;
    text-align: center;
  }
`;

export const YearBlock = styled.div`
  width: 190px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${device.mobile} {
    width: 100%;
    align-items: center;
    margin-bottom: 2px;
  }
`;

export const Year = styled.div`
  font-size: 1.05rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${colors.primary};

  @media ${device.mobile} {
    font-size: 0.98rem;
  }
`;

export const Subtitle = styled.div`
  font-size: 1.05rem;
  font-weight: 650;
  color: ${colors.light};
  margin-top: 0.35rem;
  line-height: 1.25;
  opacity: 0.95;

  @media ${device.mobile} {
    font-size: 1rem;
    margin-top: 0.25rem;
    max-width: 520px;
  }
`;

/* Blue box: more readable on mobile, less chunky */
export const Block = styled.div<{ inView: boolean }>`
  background: #86dbff;
  color: #0f0f0f;
  padding: 1.15rem 1.25rem;
  border-radius: 14px;
  width: 100%;
  line-height: 1.65;
  font-size: 1.02rem;

  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.14);

  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transform: translateY(${({ inView }) => (inView ? '0px' : '18px')});
  transition: opacity 0.5s ease, transform 0.5s ease;

  white-space: pre-line;

  @media ${device.mobile} {
    padding: 0.95rem 1rem;
    font-size: 0.96rem;
    line-height: 1.6;
    border-radius: 12px;
  }
`;

/* Keep these if other code still imports them */
export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Arrow = styled.div`
  font-size: 1.5rem;
  margin-top: 0.2rem;
`;
