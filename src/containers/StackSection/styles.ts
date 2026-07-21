import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export const StyledStackSection = styled.section`
  padding: 4rem 0 4.5rem;
  background: #111;
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 120px;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, #111 0%, transparent 100%);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, #111 0%, transparent 100%);
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  padding: 0 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.01em;
`;

export const Track = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  animation: ${scroll} 28s linear infinite;
`;

export const LogoItem = styled.div`
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  flex-shrink: 0;
`;

export const LogoImg = styled.img<{ $h?: number }>`
  height: ${(p) => p.$h ?? 36}px;
  width: auto;
  max-width: 140px;
  object-fit: contain;
  filter: grayscale(100%) brightness(0.75);
  opacity: 0.65;
  transition: filter 0.3s, opacity 0.3s;

  &:hover {
    filter: grayscale(0%);
    opacity: 1;
  }
`;
