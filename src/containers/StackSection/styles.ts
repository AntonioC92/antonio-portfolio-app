import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const StyledStackSection = styled.section`
  padding: 6rem 2rem;
  display: flex;
  justify-content: center;
`;

export const StackTitle = styled.h2`
  font-size: 2.5rem;
  color: ${colors.primary};
  margin-bottom: 3rem;
`;

export const StackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const StackCategory = styled.div`
  h3 {
    text-align: center;
    font-size: 1.5rem;
    color: ${colors.primary};
    margin-bottom: 1rem;
  }
`;

export const LogoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const LogoItem = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: grayscale(100%);
  transition: filter 0.3s;

  &:hover {
    filter: grayscale(0%);
  }
`;
