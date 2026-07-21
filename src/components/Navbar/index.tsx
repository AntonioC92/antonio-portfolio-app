import { useEffect, useState } from 'react';
import { Button } from '../Button';
import {
  StyledNavbar,
  StyledLogo,
  LogoImg,
  LogoName,
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
import { useNavigate } from 'react-router-dom';
import { StyledSocialIconContainer, StyledSocialIcon } from '../Footer/styles';
import linkedin from '../../assets/socials/linkedin.svg';
import github from '../../assets/socials/github.svg';

const menu = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Insights', path: '/insights' },
];

export function Navbar(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      <StyledNavbar scrolled={scrolled}>
        <StyledContainer>
          <StyledNavContainer>
            <StyledLogo onClick={() => navigate('/')}>
              <LogoImg src="/logo-mark.svg" alt="Caruso Martech logo" />
              <LogoName>Caruso Martech</LogoName>
            </StyledLogo>
            <StyledNavLinks>
              {menu.map((link) => (
                <NavItem key={link.name}>
                  <NavAction onClick={() => handleMenuClick(link.path)}>{link.name}</NavAction>
                </NavItem>
              ))}
            </StyledNavLinks>
          </StyledNavContainer>
          <StyledAuthButtons>
            <StyledSocialIconContainer>
              <StyledSocialIcon
                src={linkedin}
                alt="linkedin"
                onClick={() => window.open('https://www.linkedin.com/in/antoniocaruso2702/')}
              />
              <StyledSocialIcon
                src={github}
                alt="github"
                onClick={() => window.open('https://github.com/AntonioC92')}
              />
            </StyledSocialIconContainer>
            <Button onClick={() => navigate('/contact')}>Contact</Button>
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
          {menu.map((link) => (
            <NavItem key={link.name}>
              <NavAction onClick={() => handleMenuClick(link.path)}>{link.name}</NavAction>
            </NavItem>
          ))}
        </MobileNavLinks>
        <MobileAuthButtons>
          <Button onClick={() => { navigate('/contact'); setMenuOpen(false); }}>Contact</Button>
        </MobileAuthButtons>
      </MobileNav>
      {menuOpen && <Backdrop onClick={() => setMenuOpen(false)} />}{' '}
    </>
  );
}
