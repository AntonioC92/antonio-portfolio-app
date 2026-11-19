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
  FaqList,
  FaqItem,
  FaqQuestion,
  FaqAnswer,
} from './ServicesPage.styles';

const SERVICES_CANONICAL = 'https://carusomartech.com/services/';

const services = [
  {
    icon: '📈',
    name: 'Acquisition Systems',
    desc: 'Paid media strategy and execution built around your revenue targets. We plan the channel mix, run campaigns across LinkedIn, Google, Meta, TikTok, and Pinterest, and design the funnel that converts traffic into pipeline.',
    items: [
      'Paid media strategy and channel mix planning',
      'Campaign setup, management, and optimisation',
      'Funnel design and conversion rate optimisation',
      'Attribution modelling and ROI tracking',
    ],
  },
  {
    icon: '🔍',
    name: 'AI Search & Experience',
    desc: 'Search has changed. AI Overviews, featured snippets, and chat-based discovery now sit above the blue links. We build the SEO and UX strategy that gets you found in both, and converts the traffic once it arrives.',
    items: [
      'Technical SEO audit and remediation',
      'Keyword strategy and AI search optimisation',
      'On-page optimisation and entity-based content',
      'UX review and conversion-focused redesign',
    ],
  },
  {
    icon: '⚙️',
    name: 'Automation & Intelligence',
    desc: 'Automated workflows for lead capture, nurturing, and CRM sync, with dashboards that surface decisions rather than raw numbers. AI-assisted reporting closes the loop between spend and revenue.',
    items: [
      'Marketing platform and CRM setup',
      'Lead scoring and lifecycle automation',
      'Custom reporting and KPI dashboards',
      'Multi-touch attribution and revenue tracking',
    ],
  },
];

const engagements = [
  {
    type: 'Retainer',
    title: 'Ongoing Marketing Leadership',
    desc: 'Senior marketing leadership that works directly alongside your business. Typically 2–4 days per month. Covers strategy, execution oversight, team alignment, and reporting cadence.',
  },
  {
    type: 'Project',
    title: 'Defined Scope Engagement',
    desc: 'Fixed-scope work with clear deliverables and timelines, ideal for audits, campaign builds, funnel builds, or go-to-market launches.',
  },
];

const faqs = [
  {
    question: "What does a marketing automation consultant do?",
    answer:
      "A marketing automation consultant designs and builds the workflows that move a lead from first contact to sale: lead capture, CRM setup, lead scoring, nurturing emails and the reports that tie it all to revenue. Our automation work connects that layer to the paid media and attribution around it, so campaigns learn from what closes.",
  },
  {
    question: "Do you work with HubSpot?",
    answer:
      "Yes. HubSpot setup and automation is a large part of our Automation and Intelligence practice: CRM properties and pipelines, lead scoring, lifecycle workflows, form tracking and dashboards. It also covers sending closed deals back to Google Ads and other ad platforms, so campaigns optimise for the leads that turn into revenue.",
  },
  {
    question: "How much does it cost to work with Caruso Martech?",
    answer:
      "Every engagement is scoped after a discovery call, so the price follows the work. Most clients choose a retainer, typically 2 to 4 days a month of senior marketing leadership, or a fixed-scope project such as an audit, a campaign build, a funnel build or a go-to-market launch.",
  },
  {
    question: "Where are you based, and which markets do you work with?",
    answer:
      "Caruso Martech is based in Malta, serving the UK, Ireland and the US, and businesses in Malta. Our past work spans seven markets, the UK, US, Ireland, Italy, Spain, Brazil and Australia, in English, Italian, Portuguese and Spanish. Calls and delivery run remotely.",
  },
  {
    question: "What results have you delivered for clients?",
    answer:
      "Past results, for those clients: EUR 135,000 in revenue from EUR 30,000 of LinkedIn spend for the Jobbio career fair, about 4.5x return. EUR 72,000 in ticket revenue on EUR 4,639 of ad spend for the Beer Festival Dublin, 3,971 tickets. Results depend on the market, offer and budget, so we never promise numbers.",
  },
];

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export function ServicesPage(): JSX.Element {
  return (
    <Layout>
      <Seo
        title="Services | Caruso Martech"
        description="Three practice areas: acquisition systems, AI search and experience, and automation and intelligence, built to work together as a single revenue engine."
        canonical={SERVICES_CANONICAL}
        ogUrl={SERVICES_CANONICAL}
        ogImage="https://carusomartech.com/preview.png"
        twitterImage="https://carusomartech.com/preview.png"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <ServicesWrapper>
        <ServicesHeader>
          <ServicesTitle>Services</ServicesTitle>
          <ServicesSubtitle>
            Three practice areas built to work together: acquisition systems, AI search
            and experience, and automation and intelligence.
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

        <EngagementSection>
          <SectionLabel>Questions we get asked</SectionLabel>
          <FaqList>
            {faqs.map((f) => (
              <FaqItem key={f.question}>
                <FaqQuestion>{f.question}</FaqQuestion>
                <FaqAnswer>{f.answer}</FaqAnswer>
              </FaqItem>
            ))}
          </FaqList>
        </EngagementSection>

        <CtaSection>
          <CtaText>
            <CtaTitle>Ready to grow?</CtaTitle>
            <CtaSubtext>Let's talk about what your marketing needs to do next.</CtaSubtext>
          </CtaText>
          <CtaLink to="/contact/">Get in touch →</CtaLink>
        </CtaSection>
      </ServicesWrapper>
    </Layout>
  );
}
