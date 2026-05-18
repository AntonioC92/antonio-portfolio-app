import { styled } from 'styled-components';
import { colors } from '../../styles/variables';

export const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  background: transparent;
  border: 1px solid ${colors.primary};
  color: ${colors.primary};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    border-color: #ff6543;
    color: #ff6543;
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
    opacity: 0.7;
  }

  &.cancel {
    background-color: #353740;
    color: #ffffff;
    &:hover {
      background-color: #4d4f5acc;
    }
  }

  &.destructive {
    background-color: #df3079;
    color: #ffffff;
    &:hover {
      background-color: #df3079db;
    }
  }

  &.light {
    background-color: white;
    color: ${colors.text};
  }
`;
