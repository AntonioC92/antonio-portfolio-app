import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const StyledImpactSection = styled.section`
  padding: 6rem 2rem;
  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  max-width: 800px;
  text-align: center;
`;

export const ImpactWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  text-align: center;
`;

export const ImpactItem = styled.div`
  background: #3b3b3b;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ImpactTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.primary};
`;

export const ImpactIcon = styled.div`
  font-size: 2rem;
  color: ${colors.primary};
  margin-bottom: 1rem;
`;

export const ImpactMetric = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.primary};
`;

export const ImpactLabel = styled.div`
  font-size: 1rem;
  color: ${colors.light};
  margin-top: 0.25rem;
`;
