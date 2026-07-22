import { Layout } from '../components/Layout/Layout';
import { Seo } from '../components/Seo';
import { AboutSection } from '../containers/AboutSection';

const ABOUT_CANONICAL = 'https://carusomartech.com/about/';

export function AboutPage(): JSX.Element {
  return (
    <Layout>
      <Seo
        title="About | Caruso Martech"
        description="The thinking behind Caruso Martech. A decade of noticing the same broken systems across SaaS, events, ecommerce, and professional services. A consultancy built to fix it properly."
        canonical={ABOUT_CANONICAL}
        ogUrl={ABOUT_CANONICAL}
        ogImage="https://carusomartech.com/preview.png"
        twitterImage="https://carusomartech.com/preview.png"
      />
      <AboutSection />
    </Layout>
  );
}
