import { Layout } from '../components/Layout/Layout';
import { Seo } from '../components/Seo';
import { INSIGHT_CATEGORIES, resources } from '../content/resources';
import {
  CategoryGrid,
  CategoryCard,
  CategoryDescription,
  CategoryTitle,
  HubSection,
  ResourceCard,
  ResourceDescription,
  ResourceGrid,
  ResourceMeta,
  ResourceSectionHeader,
  ResourceTitle,
  ResourcesHeader,
  ResourcesSubtitle,
  ResourcesTitle,
  ResourcesWrapper,
  StartHereCard,
  StartHereTitle,
} from './Resources.styles';

const RESOURCES_CANONICAL = 'https://carusomartech.com/resources/';

function formatDate(date: string): string {
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function ResourcesPage(): JSX.Element {
  const latestInsights = resources.slice(0, 4);
  const foundationalSlug = 'modern-marketing-system-2025';

  return (
    <Layout>
      <Seo
        title="Resources | Antonio Caruso"
        description="Resources hub for insights on fractional CMO leadership, marketing systems, attribution, and automation."
        canonical={RESOURCES_CANONICAL}
        ogUrl={RESOURCES_CANONICAL}
        ogImage="https://carusomartech.com/preview.png"
        twitterImage="https://carusomartech.com/preview.png"
      />

      <ResourcesWrapper>
        <ResourcesHeader>
          <ResourcesTitle>Resources</ResourcesTitle>
          <ResourcesSubtitle>
            Insights are practical operating notes on building stronger marketing systems, cleaner attribution, and more reliable execution.
          </ResourcesSubtitle>
        </ResourcesHeader>

        <HubSection>
          <ResourceSectionHeader>Categories</ResourceSectionHeader>
          <CategoryGrid>
            {INSIGHT_CATEGORIES.map((category) => (
              <CategoryCard
                key={category}
                to={`/resources/insights/?category=${encodeURIComponent(category)}`}
              >
                <CategoryTitle>{category}</CategoryTitle>
                <CategoryDescription>View insights in this category</CategoryDescription>
              </CategoryCard>
            ))}
          </CategoryGrid>
        </HubSection>

        <HubSection>
          <ResourceSectionHeader>Latest Insights</ResourceSectionHeader>
          <ResourceGrid>
            {latestInsights.map((resource) => (
              <ResourceCard key={resource.slug} to={`/resources/insights/${resource.slug}/`}>
                <ResourceMeta>
                  {resource.category} • {formatDate(resource.date)}
                </ResourceMeta>
                <ResourceTitle>{resource.title}</ResourceTitle>
                <ResourceDescription>{resource.description}</ResourceDescription>
              </ResourceCard>
            ))}
          </ResourceGrid>
        </HubSection>

        <HubSection>
          <ResourceSectionHeader>Start here</ResourceSectionHeader>
          <StartHereCard to={`/resources/insights/${foundationalSlug}/`}>
            <StartHereTitle>What a Modern Marketing System Actually Looks Like in 2026</StartHereTitle>
            <ResourceDescription>
              Start with the foundational model for data, workflow, channel execution, and measurement governance.
            </ResourceDescription>
          </StartHereCard>
        </HubSection>
      </ResourcesWrapper>
    </Layout>
  );
}
