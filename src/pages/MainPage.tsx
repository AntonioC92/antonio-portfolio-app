import { Layout } from '../components/Layout/Layout';
import { Seo } from '../components/Seo';
import { AboutSection } from '../containers/AboutSection';
import { Contact } from '../containers/Contact/index.tsx';
import { HeroSection } from '../containers/HeroSection';
import { ImpactSection } from '../containers/ImpactSection';
import { PortfolioSection } from '../containers/PortfolioSection.tsx';
import { StackSection } from '../containers/StackSection';
import { TestimonialSection } from '../containers/TestimonialSection/index.tsx';
import { WhatIDoBestSection } from '../containers/WhatIDoBestSection';

export function LandingPage(): JSX.Element {
  return (
    <Layout>
      <Seo
        title="Antonio Caruso | Fractional CMO"
        description="Fractional CMO partnering with founders and leadership teams to align strategy, execution, and revenue through structured marketing systems."
        canonical="https://carusomartech.com/"
        ogUrl="https://carusomartech.com/"
        ogImage="https://carusomartech.com/preview.png"
        twitterImage="https://carusomartech.com/preview.png"
      />
      <HeroSection />
      <AboutSection />
      <WhatIDoBestSection />
      <ImpactSection />
      <StackSection />
      <PortfolioSection />
      <TestimonialSection />
      <Contact />
    </Layout>
  );
}
