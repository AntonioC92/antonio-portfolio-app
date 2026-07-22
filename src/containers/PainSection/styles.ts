import { styled } from 'styled-components';
import { device } from '../../styles/mediaQueries';
import { colors } from '../../styles/variables';

export const StyledSection = styled.section`
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
  background: #1a1a1a;
`;

export const Inner = styled.div`
  max-width: 1100px;
  width: 100%;
  text-align: center;
`;

export const Eyebrow = styled.p`
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${colors.primary};
  margin-bottom: 1.25rem;
`;

export const Headline = styled.h2`
  font-size: 2.6rem;
  font-weight: 600;
  color: ${colors.light};
  line-height: 1.2;
  margin-bottom: 3rem;

  @media ${device.mobile} {
    font-size: 1.8rem;
  }
`;

export const Sub = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 3.5rem;
  max-width: 580px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.55;
`;

export const CardsRow = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PainCard = styled.div`
  background: #2b2b2b;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  padding: 2rem 1.75rem;
  flex: 1 1 280px;
  max-width: 340px;
  text-align: left;

  @media ${device.mobile} {
    max-width: 100%;
  }
`;

export const PainIcon = styled.div`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

export const PainTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${colors.light};
  margin-bottom: 0.6rem;
`;

export const PainDesc = styled.p`
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.52);
  line-height: 1.6;
`;

export const FixBlock = styled.div`
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

export const FixEyebrow = styled.p`
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${colors.primary};
  margin-bottom: 1.25rem;
`;

export const FixStatement = styled.p`
  font-size: 1.35rem;
  font-weight: 600;
  color: ${colors.light};
  line-height: 1.55;
  max-width: 680px;
  margin: 0 auto;
`;
