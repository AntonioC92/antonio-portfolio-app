import { styled } from 'styled-components';
import { device } from '../../styles/mediaQueries';
import { colors } from '../../styles/variables';

export const StyledSection = styled.section`
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
`;

export const Inner = styled.div`
  max-width: 1100px;
  width: 100%;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2.6rem;
  font-weight: 600;
  color: ${colors.light};
  margin-bottom: 1rem;

  @media ${device.mobile} {
    font-size: 1.8rem;
  }
`;

export const SectionSub = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 3rem;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.55;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #2b2b2b;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  padding: 1.75rem 1.5rem;
  text-align: left;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${colors.primary};
  }
`;

export const CardIcon = styled.div`
  font-size: 1.8rem;
  margin-bottom: 0.9rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: 0.5rem;
`;

export const CardPain = styled.p`
  font-size: 0.88rem;
  font-weight: 600;
  color: ${colors.light};
  margin-bottom: 0.5rem;
  line-height: 1.45;
`;

export const CardOutcome = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.48);
  line-height: 1.55;
`;
