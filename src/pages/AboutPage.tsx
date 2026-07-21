import { Layout } from '../components/Layout/Layout';
import { Seo } from '../components/Seo';
import { AboutSection } from '../containers/AboutSection';

const ABOUT_CANONICAL = 'https://carusomartech.com/about/';

export function AboutPage(): JSX.Element {
  return (
    <Layout>
      <Seo
        title="About | Antonio Caruso — Fractional CMO"
        description="A decade of building marketing strategy, owning execution, and driving measurable growth across corporate and entrepreneurial environments."
        canonical={ABOUT_CANONICAL}
        ogUrl={ABOUT_CANONICAL}
        ogImage="https://carusomartech.com/preview.png"
        twitterImage="https://carusomartech.com/preview.png"
      />
      <AboutSection />
    </Layout>
  );
}
