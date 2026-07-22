import styled, { keyframes } from 'styled-components';
import { device } from '../../styles/mediaQueries';
import { colors } from '../../styles/variables';

/* ─── Mount-time animations (above the fold, no scroll trigger) ─── */
const slideUp = keyframes`
  from { opacity: 0; transform: translateY(36px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

/* ─── Outer section ─── */
export const StyledSection = styled.section`
  background: #0f0f0f;
  padding-bottom: 6rem;
`;

/* ─── Backward-compat export used by ImpactSection + WhatIDoBestSection ─── */
export const AboutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
  margin: 0 auto;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
    gap: 1.75rem;
  }
`;

/* ─── Hero area ─── */
export const HeroArea = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 6rem 2rem 4rem;
  text-align: center;
`;

export const HeroEyebrow = styled.p`
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${colors.primary};
  margin-bottom: 1.25rem;
  animation: ${fadeIn} 0.6s ease 0.1s both;
`;

export const HeroHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${colors.light};
  line-height: 1.1;
  margin-bottom: 1.25rem;
  animation: ${slideUp} 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both;

  span {
    color: ${colors.primary};
  }

  @media ${device.mobile} {
    font-size: 2.2rem;
  }
`;

export const HeroSub = styled.p`
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.65;
  max-width: 560px;
  margin: 0 auto;
  animation: ${slideUp} 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both;
`;

/* ─── Split layout: photo + content ─── */
export const SplitLayout = styled.div`
  display: flex;
  gap: 3.5rem;
  max-width: 1100px;
  margin: 0 auto 5rem;
  padding: 0 2rem;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Photo = styled.img`
  width: 320px;
  height: 460px;
  border-radius: 16px;
  object-fit: cover;
  flex-shrink: 0;
  position: sticky;
  top: 6rem;
  align-self: flex-start;
  animation: ${fadeIn} 0.9s ease 0.4s both;

  @media (max-width: 900px) {
    position: static;
    width: 100%;
    max-width: 340px;
    height: auto;
    border-radius: 14px;
  }
`;

export const ContentCol = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const AnimPara = styled.p<{ $inView: boolean; $delay: number }>`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.75;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: translateX(${({ $inView }) => ($inView ? '0' : '-28px')});
  transition:
    opacity 0.65s ease ${({ $delay }) => $delay}ms,
    transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${({ $delay }) => $delay}ms;
`;

/* ─── Stats row ─── */
export const StatsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 0;
  max-width: 800px;
  margin: 0 auto 5rem;
  padding: 0 2rem;
  flex-wrap: wrap;
`;

export const StatItem = styled.div`
  flex: 1 1 160px;
  text-align: center;
  padding: 2rem 1.5rem;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 20%;
    height: 60%;
    width: 1px;
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: ${colors.primary};
  line-height: 1;
  margin-bottom: 0.5rem;
  font-variant-numeric: tabular-nums;
`;

export const StatLabel = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
`;

export const StatSub = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.28);
  letter-spacing: 0.06em;
  margin-top: 0.3rem;
`;

/* ─── Beliefs section ─── */
export const BeliefsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  max-width: 1100px;
  margin: 0 auto 5rem;
  padding: 0 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const BeliefCard = styled.div<{ $inView: boolean; $delay: number }>`
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: translateY(${({ $inView }) => ($inView ? '0' : '32px')});
  transition:
    opacity 0.6s ease ${({ $delay }) => $delay}ms,
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${({ $delay }) => $delay}ms;
`;

export const BeliefIcon = styled.div`
  font-size: 1.75rem;
`;

export const BeliefTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${colors.light};
  line-height: 1.3;
`;

export const BeliefBody = styled.p`
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.65;
`;

/* ─── Closing ─── */
export const ClosingSection = styled.div<{ $inView: boolean }>`
  max-width: 760px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: translateY(${({ $inView }) => ($inView ? '0' : '24px')});
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
`;

export const ClosingStatement = styled.p`
  font-size: 1.35rem;
  font-weight: 600;
  color: ${colors.light};
  line-height: 1.55;
  margin-bottom: 2rem;
`;

export const ClosingBtn = styled.button`
  background: ${colors.primary};
  color: #fff;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.85rem 2.25rem;
  border-radius: 999px;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;

  &:hover {
    opacity: 0.88;
    transform: translateY(-2px);
  }
`;

/* ─── Legacy exports kept for safety ─── */
export const Content = styled.div`
  flex: 1;
  max-width: 820px;
`;
