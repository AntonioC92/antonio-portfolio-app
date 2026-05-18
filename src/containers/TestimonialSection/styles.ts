import styled from 'styled-components';
import { colors } from '../../styles/variables';
import { device } from '../../styles/mediaQueries';

export const StyledTestimonialSection = styled.section`
  padding: 80px 100px;

  @media ${device.tablet} {
    padding: 60px 80px;
  }

  @media ${device.mobile} {
    padding: 40px 20px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 48px;
  font-weight: bold;
  color: ${colors.primary};
  margin-bottom: 40px;
  text-align: center;

  @media ${device.mobile} {
    font-size: 32px;
  }
`;

export const StyledGridWrapper = styled.div`
  position: relative;
`;

export const StyledCarousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  gap: 32px;
  padding-bottom: 20px;
  margin-left: calc(-100vw / 2 + 50%);
  width: 100vw;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledTestimonialCard = styled.div`
  flex: 0 0 auto;
  scroll-snap-align: start;
  padding: 24px;
  border-radius: 16px;
  width: 400px;
  max-width: 90vw;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-align: center;
  align-items: center;

  @media ${device.mobile} {
    width: 300px;
  }
`;

export const StyledAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const StyledName = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${colors.primary};
`;

export const StyledRole = styled.p`
  font-size: 0.95rem;
  color: ${colors.light};
`;

export const StyledDate = styled.p`
  font-size: 0.85rem;
  color: ${colors.light};
`;

export const StyledRelation = styled.p`
  font-size: 0.85rem;
  color: ${colors.light};
  font-style: italic;
`;

export const StyledQuote = styled.p`
  font-size: 0.95rem;
  color: ${colors.light};
  margin-top: 0.5rem;
`;

export const StyledArrowContainer = styled.div`
  position: absolute;
  bottom: -60px;
  justify-self: anchor-center;
  display: flex;
  gap: 16px;
  z-index: 5;
`;

export const StyledArrowButton = styled.button<{ direction: 'left' | 'right' }>`
  background: transparent;
  border: 2px solid ${colors.primary};
  color: ${colors.primary};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 24px;
  cursor: pointer;
  line-height: 0;

  ${(props) =>
    props.disabled &&
    `
    cursor: not-allowed;
    border-color: grey;
    color: grey;
  `}
`;

export const StyledNameWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
`;

export const LinkedInIcon = styled.img`
  width: 20px;
  height: 20px;
`;
