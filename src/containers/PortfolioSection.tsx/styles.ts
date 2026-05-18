import styled from 'styled-components';
import { colors } from '../../styles/variables';
import { device } from '../../styles/mediaQueries';

export const StyledPortfolioSection = styled.section`
  padding: 80px 100px;
  text-align: left;

  @media ${device.tablet} {
    padding: 60px 80px;
  }

  @media ${device.mobile} {
    padding: 40px 50px;
    text-align: center;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 60px;
  font-weight: bold;
  color: ${colors.primary};
  margin-bottom: 40px;
  letter-spacing: 1px;

  @media ${device.tablet} {
    font-size: 48px;
  }

  @media ${device.mobile} {
    font-size: 36px;
  }
`;

export const StyledGridWrapper = styled.div`
  position: relative;
`;

export const StyledPortfolioGrid = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  gap: 40px;
  padding-bottom: 20px;

  margin-left: calc(-100vw / 2 + 50%);
  width: 100vw;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledPortfolioCard = styled.div`
  flex: 0 0 auto;
  scroll-snap-align: start;
  background: transparent;
  width: 320px;
  height: 380px;
  border-radius: 16px;
  perspective: 1000px;

  background: #000000;
  color: white;
  padding: 24px;

  @media ${device.mobile} {
    width: 280px;
  }
`;

export const StyledCardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${colors.primary};
`;

export const StyledCardDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

export const StyledCardDetailItem = styled.li`
  font-size: 0.95rem;
  margin-bottom: 0.4rem;
`;

export const StyledButton = styled.button`
  background: white;
  color: #111;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  align-self: flex-start;
  transition: background 0.3s;

  &:hover {
    background: ${colors.primary};
    color: white;
  }
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

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const StyledModalContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  position: relative;
  max-width: 90vw;
  max-height: 80vh;
  overflow: auto;
`;

export const StyledModalImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  background: transparent;
  font-size: 2rem;
  border: none;
  cursor: pointer;
`;

export const StyledCardInner = styled.div<{ isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(180deg)' : 'none')};
`;

export const StyledCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #000000;
  color: white;
  border-radius: 16px;
  padding: 24px;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
