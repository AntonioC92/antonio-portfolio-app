import { Layout } from '../components/Layout/Layout';
import { Seo } from '../components/Seo';
import { TestimonialSection } from '../containers/TestimonialSection/index.tsx';
import {
  ServicesWrapper,
  ServicesHeader,
  ServicesTitle,
  ServicesSubtitle,
  ServiceGrid,
  ServiceCard,
  ServiceIcon,
  ServiceName,
  ServiceDesc,
  ServiceList,
  ServiceListItem,
  SectionDivider,
  EngagementSection,
  SectionLabel,
  SectionBody,
  EngagementGrid,
  EngagementCard,
  EngagementType,
  EngagementTitle,
  EngagementDesc,
  CtaSection,
  CtaText,
  CtaTitle,
  CtaSubtext,
  CtaLink,
} from './ServicesPage.styles';

const SERVICES_CANONICAL = 'https://carusomartech.com/services/';

const services = [
  {
    icon: '📈',
    name: 'Growth Strategy & Performance Marketing',
    desc: 'Data-driven growth strategy built around your business goals, audience behaviour, and revenue targets. Full planning and execution across LinkedIn, Google, Meta, TikTok, and Pinterest.',
    items: [
      'Paid media strategy and channel mix planning',
      'Campaign setup, management, and optimisation',
      'Funnel design and conversion rate optimisation',
      'Attribution modelling and ROI tracking',
    ],
  },
  {
    icon: '🔍',
    name: 'SEO & UX Optimisation',
    desc: 'Comprehensive SEO audits, keyword strategy, and technical fixes combined with UX improvements that turn visitors into customers.',
    items: [
      'Technical SEO audit and remediation',
      'Keyword gap analysis and content strategy',
      'On-page optimisation and internal linking',
      'UX review and conversion-focused redesign',
    ],
  },
  {
    icon: '⚙️',
    name: 'Marketing Automation & Analytics',
    desc: 'Automated workflows for lead capture, nurturing, and CRM sync. Dashboards focused on decisions, not vanity metrics.',
    items: [
      'HubSpot, Salesforce, and Mailchimp setup',
      'Lead scoring and lifecycle automation',
      'Custom reporting and KPI dashboards',
      'Multi-touch attribution and revenue tracking',
    ],
  },
];

const engagements = [
  {
    type: 'Retainer',
    title: 'Fractional CMO',
    desc: 'Ongoing strategic leadership embedded in your team. Typically 2–4 days per month. Covers strategy, execution oversight, team alignment, and reporting cadence.',
  },
  {
    type: 'Project',
    title: 'Defined Scope Engagement',
    desc: 'Fixed-scope work with clear deliverables and timelines — ideal for audits, campaign builds, funnel builds, or go-to-market launches.',
  },
];

export function ServicesPage(): JSX.Element {
  return (
    <Layout>
      <Seo
        title="Services | Caruso Martech"
        description="Marketing services covering growth strategy, paid media, SEO, marketing automation, and analytics. Retainer and project engagements available."
        canonical={SERVICES_CANONICAL}
        ogUrl={SERVICES_CANONICAL}
        ogImage="https://carusomartech.com/preview.png"
        twitterImage="https://carusomartech.com/preview.png"
      />

      <ServicesWrapper>
        <ServicesHeader>
          <ServicesTitle>Services</ServicesTitle>
          <ServicesSubtitle>
            I partner with founders and leadership teams as a Fractional CMO — bringing senior marketing
            strategy and hands-on execution without the overhead of a full-time hire.
          </ServicesSubtitle>
        </ServicesHeader>

        <ServiceGrid>
          {services.map((s) => (
            <ServiceCard key={s.name}>
              <ServiceIcon>{s.icon}</ServiceIcon>
              <ServiceName>{s.name}</ServiceName>
              <ServiceDesc>{s.desc}</ServiceDesc>
              <ServiceList>
                {s.items.map((item) => (
                  <ServiceListItem key={item}>{item}</ServiceListItem>
                ))}
              </ServiceList>
            </ServiceCard>
          ))}
        </ServiceGrid>

        <SectionDivider />

        <EngagementSection>
          <SectionLabel>How we work together</SectionLabel>
          <SectionBody>
            Every engagement starts with a discovery call to understand your goals, team structure, and
            current marketing maturity. From there we agree on the right format.
          </SectionBody>
          <EngagementGrid>
            {engagements.map((e) => (
              <EngagementCard key={e.type}>
                <EngagementType>{e.type}</EngagementType>
                <EngagementTitle>{e.title}</EngagementTitle>
                <EngagementDesc>{e.desc}</EngagementDesc>
              </EngagementCard>
            ))}
          </EngagementGrid>
        </EngagementSection>

        <TestimonialSection />

        <CtaSection>
          <CtaText>
            <CtaTitle>Ready to grow?</CtaTitle>
            <CtaSubtext>Let's talk about what your marketing needs to do next.</CtaSubtext>
          </CtaText>
          <CtaLink to="/contact">Get in touch →</CtaLink>
        </CtaSection>
      </ServicesWrapper>
    </Layout>
  );
}
