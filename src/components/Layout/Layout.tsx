import React from 'react';
import { StyledContainer, StyledContent } from './styles';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StyledContainer>
      <Navbar />
      <StyledContent>{children}</StyledContent>
      <Footer />
    </StyledContainer>
  );
}
