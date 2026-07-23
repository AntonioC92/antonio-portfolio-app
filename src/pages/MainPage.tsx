import { Layout } from '../components/Layout/Layout';
import { Seo } from '../components/Seo';
import { Contact } from '../containers/Contact/index.tsx';
import { HeroSection } from '../containers/HeroSection';
import { ImpactSection } from '../containers/ImpactSection';
import { MiniAboutSection } from '../containers/MiniAboutSection';
import { PainSection } from '../containers/PainSection';
import { StackSection } from '../containers/StackSection';
import { VerticalsSection } from '../containers/VerticalsSection';
import { WhatIDoBestSection } from '../containers/WhatIDoBestSection';
import { MarqueeStrip } from '../containers/MarqueeStrip';

export function LandingPage(): JSX.Element {
  return (
    <Layout>
      <Seo
        title="Caruso Martech | Marketing Systems and Growth Strategy"
        description="We build marketing systems that drive revenue. Strategy, paid media, automation, and analytics for SaaS, events, ecommerce, and professional services."
        canonical="https://carusomartech.com/"
        ogUrl="https://carusomartech.com/"
        ogImage="https://carusomartech.com/preview.png"
        twitterImage="https://carusomartech.com/preview.png"
      />
      <HeroSection />
      <MarqueeStrip />
      <PainSection />
      <WhatIDoBestSection />
      <VerticalsSection />
      <ImpactSection />
      <MiniAboutSection />
      <StackSection />
      <Contact headingLevel="h2" />
    </Layout>
  );
}
