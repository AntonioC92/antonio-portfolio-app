import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const StyledInput = styled.input`
  padding: 1rem 1.5rem;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  background: transparent;
  color: white;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;
