import { useEffect, useState } from 'react';
import { Button } from '../Button';
import {
  StyledNavbar,
  StyledLogo,
  NavToggle,
  StyledNavLinks,
  NavItem,
  NavAction,
  MobileNav,
  MobileNavLinks,
  MobileAuthButtons,
  Backdrop,
  StyledAuthButtons,
  StyledNavContainer,
  StyledContainer,
} from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { StyledSocialIconContainer, StyledSocialIcon } from '../Footer/styles';
import linkedin from '../../assets/socials/linkedin.svg';
import github from '../../assets/socials/github.svg';

const menu = [
  { name: 'About', slug: 'about' },
  { name: 'Services', path: '/services' },
  { name: 'Work', path: '/work' },
  { name: 'Insights', path: '/insights' },
];

export function Navbar(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuNavigation = (slug: string) => {
    if (location.pathname !== '/') navigate(`/#${slug}`);
    setMenuOpen(false);
    scrollToSection(slug);
  };

  const handleMenuClick = (link: { slug?: string; path?: string }) => {
    if (link.path) {
      navigate(link.path);
      setMenuOpen(false);
      return;
    }

    if (link.slug) {
      handleMenuNavigation(link.slug);
    }
  };

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) scrollToSection(hash);
  }, [location]);

  const scrollToSection = (slug: string) => {
    const section = document.getElementById(slug);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <StyledNavbar scrolled={scrolled}>
        <StyledContainer>
          <StyledNavContainer>
            <StyledLogo onClick={() => navigate('/')}>
              Antonio Caruso
            </StyledLogo>
            <StyledNavLinks>
              {menu.map((link, idx) => (
                <NavItem key={idx}>
                  <NavAction onClick={() => handleMenuClick(link)}>{link.name}</NavAction>
                </NavItem>
              ))}
            </StyledNavLinks>
          </StyledNavContainer>
          <StyledAuthButtons>
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
                onClick={() => window.open('https://github.com/AntonioC92')}
              />
            </StyledSocialIconContainer>
            <Button onClick={() => navigate('/#contact')}>Contact</Button>
          </StyledAuthButtons>
          <NavToggle onClick={() => setMenuOpen(!menuOpen)}>
            <span />
            <span />
            <span />
          </NavToggle>
        </StyledContainer>
      </StyledNavbar>
      <MobileNav isOpen={menuOpen}>
        <MobileNavLinks>
          {menu.map((link, idx) => (
            <NavItem key={idx}>
              <NavAction onClick={() => handleMenuClick(link)}>{link.name}</NavAction>
            </NavItem>
          ))}
        </MobileNavLinks>
        <MobileAuthButtons>
          <Button onClick={() => navigate('/#contact')}>Contact</Button>
        </MobileAuthButtons>
      </MobileNav>
      {menuOpen && <Backdrop onClick={() => setMenuOpen(false)} />}{' '}
    </>
  );
}
