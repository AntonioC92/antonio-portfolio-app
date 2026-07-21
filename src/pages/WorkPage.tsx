import { Layout } from '../components/Layout/Layout';
import { Seo } from '../components/Seo';
import { caseStudies } from '../data/caseStudies';
import {
  WorkWrapper,
  WorkHeader,
  WorkTitle,
  WorkSubtitle,
  CaseStudyGrid,
  CaseStudyCard,
  CardBadge,
  CardTitle,
  CardDescription,
  MetricsList,
  MetricItem,
  PartnerCaption,
  CardCta,
} from './WorkPage.styles';

const WORK_CANONICAL = 'https://carusomartech.com/work/';

export function WorkPage(): JSX.Element {
  return (
    <Layout>
      <Seo
        title="Work | Caruso Martech"
        description="Case studies from paid media campaigns across events, B2B, coaching, and recreation verticals — delivering measurable ROAS and lead generation results."
        canonical={WORK_CANONICAL}
        ogUrl={WORK_CANONICAL}
        ogImage="https://carusomartech.com/preview.png"
        twitterImage="https://carusomartech.com/preview.png"
      />

      <WorkWrapper>
        <WorkHeader>
          <WorkTitle>Work</WorkTitle>
          <WorkSubtitle>
            A selection of paid media campaigns delivering measurable results across events, B2B, coaching, and recreation verticals.
          </WorkSubtitle>
        </WorkHeader>

        <CaseStudyGrid>
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug}>
              <CardBadge>{cs.badge}</CardBadge>
              <CardTitle>{cs.title}</CardTitle>
              <CardDescription>{cs.description}</CardDescription>
              <MetricsList>
                {cs.metrics.map((metric, i) => (
                  <MetricItem key={i}>{metric}</MetricItem>
                ))}
              </MetricsList>
              {cs.partner && (
                <PartnerCaption>In partnership with {cs.partner}</PartnerCaption>
              )}
              <CardCta href={`/case-studies/${cs.slug}.html`}>
                View Case Study →
              </CardCta>
            </CaseStudyCard>
          ))}
        </CaseStudyGrid>
      </WorkWrapper>
    </Layout>
  );
}
