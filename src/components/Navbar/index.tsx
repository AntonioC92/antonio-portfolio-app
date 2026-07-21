import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react';
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
  MobileSubNav,
  MobileSubNavLink,
  MobileAuthButtons,
  Backdrop,
  StyledAuthButtons,
  StyledNavContainer,
  StyledContainer,
  NavDropdown,
  NavDropdownLink,
  NavDropdownMenu,
} from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { StyledSocialIconContainer, StyledSocialIcon } from '../Footer/styles';
import linkedin from '../../assets/socials/linkedin.svg';
import github from '../../assets/socials/github.svg';

const menu = [
  { name: 'About', slug: 'about' },
  { name: 'Services', path: '/services' },
  { name: 'Work', path: '/work' },
  { name: 'Portfolio', slug: 'portfolio' },
  { name: 'Testimonials', slug: 'testimonials' },
];

export function Navbar(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const closeDropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
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
    setResourcesOpen(false);
  }, [location]);

  useEffect(() => {
    return () => {
      if (closeDropdownTimeoutRef.current) {
        clearTimeout(closeDropdownTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleEscapeClose = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setResourcesOpen(false);
      }
    };

    if (resourcesOpen) {
      window.addEventListener('keydown', handleEscapeClose);
    }

    return () => {
      window.removeEventListener('keydown', handleEscapeClose);
    };
  }, [resourcesOpen]);

  const clearDropdownCloseTimeout = () => {
    if (closeDropdownTimeoutRef.current) {
      clearTimeout(closeDropdownTimeoutRef.current);
      closeDropdownTimeoutRef.current = null;
    }
  };

  const openResourcesDropdown = () => {
    clearDropdownCloseTimeout();
    setResourcesOpen(true);
  };

  const closeResourcesDropdownWithDelay = () => {
    clearDropdownCloseTimeout();
    closeDropdownTimeoutRef.current = setTimeout(() => {
      setResourcesOpen(false);
    }, 200);
  };

  const handleResourcesTriggerKeyDown = (
    event: ReactKeyboardEvent<HTMLButtonElement>
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      clearDropdownCloseTimeout();
      setResourcesOpen((prev) => !prev);
      return;
    }

    if (event.key === 'Escape') {
      setResourcesOpen(false);
    }
  };

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
                <NavItem
                  key={idx}
                >
                  <NavAction onClick={() => handleMenuClick(link)}>{link.name}</NavAction>
                </NavItem>
              ))}
              <NavDropdown
                onMouseEnter={openResourcesDropdown}
                onMouseLeave={closeResourcesDropdownWithDelay}
              >
                <NavAction
                  aria-haspopup="menu"
                  aria-expanded={resourcesOpen}
                  onClick={() => {
                    clearDropdownCloseTimeout();
                    setResourcesOpen((prev) => !prev);
                  }}
                  onMouseEnter={openResourcesDropdown}
                  onKeyDown={handleResourcesTriggerKeyDown}
                >
                  Resources
                </NavAction>
                {resourcesOpen ? (
                  <NavDropdownMenu
                    role="menu"
                    onMouseEnter={openResourcesDropdown}
                  >
                    <li>
                      <NavDropdownLink
                        role="menuitem"
                        to="/resources/insights"
                        onClick={() => {
                          clearDropdownCloseTimeout();
                          setResourcesOpen(false);
                        }}
                      >
                        Insights
                      </NavDropdownLink>
                    </li>
                  </NavDropdownMenu>
                ) : null}
              </NavDropdown>
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
          <NavItem>
            <NavAction onClick={() => setResourcesOpen((prev) => !prev)}>
              Resources
            </NavAction>
            {resourcesOpen ? (
              <MobileSubNav>
                <MobileSubNavLink
                  onClick={() => {
                    navigate('/resources/insights');
                    setMenuOpen(false);
                    setResourcesOpen(false);
                  }}
                >
                  Insights
                </MobileSubNavLink>
              </MobileSubNav>
            ) : null}
          </NavItem>
        </MobileNavLinks>
        <MobileAuthButtons>
          <Button onClick={() => navigate('/#contact')}>Contact</Button>
        </MobileAuthButtons>
      </MobileNav>
      {menuOpen && <Backdrop onClick={() => setMenuOpen(false)} />}{' '}
    </>
  );
}
