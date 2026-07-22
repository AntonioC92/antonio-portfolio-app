import { styled } from 'styled-components';
import { colors, spacing } from '../../styles/variables';
import { device } from '../../styles/mediaQueries';

export const StyledSectionWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: ${spacing.extraLarge} 0;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledFooterSection = styled.section`
  background: linear-gradient(150deg, #ffb8a6 0%, #ff9b82 100%);
  display: flex;
  align-items: center;
  border-radius: 14px 14px 0 0;
  padding: 20px;
`;

export const StyledFooter = styled.footer`
  text-align: left;
  padding: ${spacing.extraLarge} 0 30px 0;
  max-width: 1280px;
  margin: 0 auto;
  color: white;
  width: 100%;
  height: 100%;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;

  @media ${device.mobile} {
    display: grid;
    gap: 20px;
  }
`;

export const StyledLogo = styled.div`
  color: #323232;
  font-size: 25px;
  font-weight: 600;
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.h3`
  color: #323232;
  margin-bottom: 10px;
  font-weight: 400;
`;

export const StyledLink = styled.a`
  margin-bottom: 5px;
  color: #323232;
  text-decoration: none;

  &:hover {
    color: ${colors.primary};
  }
`;

export const StyledSocialIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledSocialIcon = styled.img`
  cursor: pointer;
`;

export const StyledScrollToTop = styled.img<{ show: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #fff;
  color: white;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

export const StyledColumnContainer = styled.div`
  display: flex;
  gap: 80px;

  @media ${device.mobile} {
    display: grid;
  }
`;

export const StyledDivider = styled.hr`
  width: 100%;
  border: none;
  height: 1px;
  background-color: #0000001a;
  margin: 30px 0;
`;

export const StyledText = styled.span`
  margin-right: 15px;
`;

export const StyledFooterHeaderContainer = styled.div`
  display: grid;
  justify-items: center;
  gap: 20px;
`;

export const StyledDescription = styled.div`
  margin-bottom: 30px;
  text-align: center;
  font-size: 18px;
  color: white;

  img {
    vertical-align: middle;
    margin: 0 0.25em;
  }
`;
