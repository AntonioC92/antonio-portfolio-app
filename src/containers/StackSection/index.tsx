import { AboutWrapper } from '../AboutSection/styles';
import { SectionInner, SectionTitle } from '../WhatIDoBestSection/styles';
import {
  StyledStackSection,
  StackWrapper,
  LogoGrid,
  LogoItem,
  LogoImg,
} from './styles';

import salesforce from '../../assets/stack/salesforce.png';
import hubspot from '../../assets/stack/hubspot.png';
import google from '../../assets/stack/google.png';
import meta from '../../assets/stack/meta.png';
import linkedin from '../../assets/stack/linkedin.png';
import mailchimp from '../../assets/stack/mailchimp.png';
import semrush from '../../assets/stack/semrush.png';
import wordpress from '../../assets/stack/wordpress.png';

const allLogos = [
  salesforce,
  hubspot,
  google,
  meta,
  linkedin,
  mailchimp,
  semrush,
  wordpress,
];

export function StackSection(): JSX.Element {
  return (
    <StyledStackSection>
      <AboutWrapper>
        <SectionInner>
          <SectionTitle>My MarTech Stack</SectionTitle>

          <StackWrapper>
            <LogoGrid>
              {allLogos.map((logo, i) => (
                <LogoItem key={i}>
                  <LogoImg src={logo} alt="Tech logo" />
                </LogoItem>
              ))}
            </LogoGrid>
          </StackWrapper>
        </SectionInner>
      </AboutWrapper>
    </StyledStackSection>
  );
}
