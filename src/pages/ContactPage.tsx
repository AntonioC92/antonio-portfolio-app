import { Layout } from '../components/Layout/Layout';
import { Seo } from '../components/Seo';
import { Contact } from '../containers/Contact/index.tsx';

const CONTACT_CANONICAL = 'https://carusomartech.com/contact/';

export function ContactPage(): JSX.Element {
  return (
    <Layout>
      <Seo
        title="Contact | Caruso Martech"
        description="Get in touch to discuss your marketing challenges. Book a call or send a message. We'll respond within 24 hours."
        canonical={CONTACT_CANONICAL}
        ogUrl={CONTACT_CANONICAL}
        ogImage="https://carusomartech.com/preview.png"
        twitterImage="https://carusomartech.com/preview.png"
      />
      <Contact />
    </Layout>
  );
}
