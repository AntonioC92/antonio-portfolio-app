import { styled } from 'styled-components';
import { colors } from '../../styles/variables';
import { device } from '../../styles/mediaQueries';

export const StyledSection = styled.section`
  padding: 6rem 2rem;
  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  max-width: 850px;
  text-align: center;
`;

/* Header (your big orange text) */
export const Header = styled.h1<{ $size?: number }>`
  font-size: ${(props) => props.$size || 6}rem; /* reduced from 9 */
  font-weight: 600;
  margin-bottom: 2.5rem; /* increased for spacing */
  color: ${colors.primary};

  .mobile-break { display: none; }

  @media (max-width: 640px) {
    .mobile-break { display: block; }
  }

  @media ${device.mobile} {
    font-size: 52px; /* smaller mobile size */
  }
`;

/* Subheader (new line under title) */
export const SubHeader = styled.h3`
  font-size: 1.9rem;
  font-weight: 400;
  margin: 0 auto 3rem auto;
  color: rgba(255, 255, 255, 0.9);
  max-width: 720px;
  line-height: 1.45;
  text-align: center;

  @media ${device.mobile} {
    font-size: 1.4rem;
    padding: 0 1rem;
  }
`;

/* Description paragraphs */
export const Description = styled.p`
  font-size: 1.35rem; /* increased for balance */
  line-height: 1.65;  /* improves readability */
  color: #fff;
  max-width: 720px;  /* keeps line length clean */
  margin: 1.2rem auto; /* consistent spacing between paragraphs */
  text-align: center;
`;
