import { useState, useEffect } from 'react';
import {
  StyledColumn,
  StyledColumnContainer,
  StyledDivider,
  StyledFooter,
  StyledFooterHeaderContainer,
  StyledFooterSection,
  StyledLink,
  StyledLogo,
  StyledRow,
  StyledScrollToTop,
  StyledSectionWrapper,
  StyledSocialIcon,
  StyledSocialIconContainer,
  StyledTitle,
} from './styles';
import scroll from '../../assets/scroll.svg';
import linkedin from '../../assets/socials/linkedin.svg';
import github from '../../assets/socials/github.svg';

export function Footer(): JSX.Element {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <StyledFooterSection>
      <StyledSectionWrapper>
        <StyledFooter>
          <StyledFooterHeaderContainer>
            <StyledLogo>Caruso Martech</StyledLogo>

            <div
              style={{
                textAlign: 'center',
                fontSize: '0.85rem',
                lineHeight: '1.6',
                color: '#323232',
              }}
            >
              Marketing Systems &amp; Growth Strategy<br />
              EU VAT No: MT32360307
            </div>
          </StyledFooterHeaderContainer>

          <StyledDivider />

          <StyledRow>
            <StyledColumnContainer>
              <StyledColumn>
                <StyledTitle>Get in Touch</StyledTitle>
                <StyledLink href="mailto:caruso.martech@gmail.com">
                  caruso.martech@gmail.com
                </StyledLink>
              </StyledColumn>

              <StyledColumn>
                <StyledTitle>Pages</StyledTitle>
                <StyledLink href="/services">Services</StyledLink>
                <StyledLink href="/work">Work</StyledLink>
                <StyledLink href="/about">About</StyledLink>
                <StyledLink href="/insights">Insights</StyledLink>
                <StyledLink href="/contact">Contact</StyledLink>
              </StyledColumn>
            </StyledColumnContainer>

            <StyledSocialIconContainer>
              <StyledSocialIcon
                src={linkedin}
                alt="linkedin"
                onClick={() =>
                  window.open('https://www.linkedin.com/in/antoniocaruso2702/')
                }
              />
              <StyledSocialIcon
                src={github}
                alt="github"
                onClick={() =>
                  window.open('https://github.com/AntonioC92')
                }
              />
            </StyledSocialIconContainer>
          </StyledRow>

          <div
            style={{
              textAlign: 'center',
              marginTop: '2rem',
              fontSize: '0.8rem',
              color: '#323232',
              opacity: 0.8,
            }}
          >
            © {new Date().getFullYear()} Caruso Martech. All Rights Reserved.
          </div>

          <StyledScrollToTop
            src={scroll}
            onClick={scrollToTop}
            show={visible}
            alt="scroll"
          />
        </StyledFooter>
      </StyledSectionWrapper>
    </StyledFooterSection>
  );
}