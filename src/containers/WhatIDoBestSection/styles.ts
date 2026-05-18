import { styled } from 'styled-components';
import { colors } from '../../styles/variables';

export const StyledSection = styled.section`
  padding: 6rem 2rem;
  display: flex;
  justify-content: center;
`;

export const ColumnsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
`;

export const Column = styled.div`
  background: #3b3b3b;
  padding: 2rem;
  flex: 1 1 300px;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
  height: 100%;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: ${colors.primary};
  margin-bottom: 0.5rem;
`;

export const SubTitle = styled.p`
  font-size: 1rem;
  color: ${colors.light};
  margin-bottom: 1.5rem;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${colors.primary};
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

export const StepsWrapper = styled.div<{ expanded: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: ${({ expanded }) => (expanded ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 0.5s ease;
  opacity: ${({ expanded }) => (expanded ? 1 : 0)};
  transition:
    max-height 0.5s ease,
    opacity 0.4s ease;
`;

export const Step = styled.div`
  background: #ffc3b6;
  padding: 1rem;
  border-radius: 8px;
  color: #111;
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  color: ${colors.light};
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 600;
`;

export const SectionInner = styled.div`
  width: 100%;
  max-width: 1200px;
`;
