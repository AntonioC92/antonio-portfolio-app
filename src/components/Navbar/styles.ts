import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../styles/mediaQueries';
import { colors } from '../../styles/variables';

export const StyledNavbar = styled.nav<{ scrolled?: boolean }>`
  width: 100%;

  align-items: center;
  padding: 1rem 20px;
  background-color: ${({ scrolled }) => (scrolled ? '#212121' : '#212121')};
  color: ${({ scrolled }) => (scrolled ? colors.text : colors.primary)};
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  @media ${device.mobile} {
    padding: 1rem;
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const StyledLogo = styled.div`
  cursor: pointer;
  color: white;
  font-size: 25px;
  font-weight: 600;
`;

export const StyledNavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  font-size: 1rem;
  align-items: center;
  margin: 0;
  padding: 0;

  @media ${device.tablet} {
    display: none;
  }
`;

export const NavItem = styled.li<{ active?: boolean }>`
  list-style: none;
`;

export const NavAction = styled.button`
  cursor: pointer;
  transition: color 0.3s;
  color: ${colors.light};
  font-weight: 500;
  background: transparent;
  border: 0;
  padding: 0;
  font: inherit;
`;

export const NavDropdown = styled.li`
  list-style: none;
  position: relative;
  padding-bottom: 0.4rem;
  margin-bottom: -0.4rem;
`;

export const NavDropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  margin: 0;
  padding: 0.4rem;
  list-style: none;
  background: #2b2b2b;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  z-index: 1020;
  pointer-events: auto;
`;

export const NavDropdownLink = styled(Link)`
  display: block;
  padding: 0.45rem 0.6rem;
  border-radius: 8px;
  color: ${colors.light};
  text-decoration: none;
  font-size: 0.94rem;
  font-weight: 500;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: ${colors.primary};
  }
`;

export const MobileSubNav = styled.div`
  margin-left: 0.6rem;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  padding-left: 0.75rem;
`;

export const MobileSubNavLink = styled.button`
  cursor: pointer;
  transition: color 0.3s;
  color: ${colors.light};
  font-weight: 500;
  background: transparent;
  border: 0;
  padding: 0;
  font: inherit;
`;

export const StyledNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const StyledAuthButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media ${device.tablet} {
    display: none;
  }
`;

export const NavToggle = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 25px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1010;

  span {
    width: 100%;
    height: 3px;
    background: ${colors.text};
    transition: all 0.3s ease;
  }

  @media ${device.tablet} {
    display: flex;
  }
`;

export const MobileNav = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background: #2d2d2d;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1050;
`;

export const MobileNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 1.5rem;
  font-size: 1rem;
`;

export const MobileAuthButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1040;
  transition: opacity 0.3s ease-in-out;
`;
