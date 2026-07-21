import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { Seo } from '../components/Seo';
import { resourceCategories, resources } from '../content/resources';
import {
  CategorySelect,
  Controls,
  EmptyState,
  ResourceCard,
  ResourceDescription,
  ResourceGrid,
  ResourceMeta,
  ResourceTitle,
  ResourcesHeader,
  ResourcesSubtitle,
  ResourcesTitle,
  ResourcesWrapper,
  SearchInput,
} from './Resources.styles';

const INSIGHTS_CANONICAL = 'https://carusomartech.com/insights/';

function formatDate(date: string): string {
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function InsightsPage(): JSX.Element {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const hasValidCategory = !!categoryParam && resourceCategories.includes(categoryParam as (typeof resourceCategories)[number]);

  const [selectedCategory, setSelectedCategory] = useState<string>(
    hasValidCategory ? categoryParam! : 'All'
  );
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResources = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return resources.filter((resource) => {
      const matchesCategory =
        selectedCategory === 'All' || resource.category === selectedCategory;
      const matchesSearch =
        query.length === 0 ||
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <Layout>
      <Seo
        title="Insights | Caruso Martech"
        description="Practical perspectives on marketing leadership, system design, attribution, and automation for SaaS, events, ecommerce, and professional services."
        canonical={INSIGHTS_CANONICAL}
        ogUrl={INSIGHTS_CANONICAL}
        ogImage="https://carusomartech.com/preview.png"
        twitterImage="https://carusomartech.com/preview.png"
      />

      <ResourcesWrapper>
        <ResourcesHeader>
          <ResourcesTitle>Insights</ResourcesTitle>
          <ResourcesSubtitle>
            Practical perspectives on marketing leadership, system design, attribution, and automation for founder-led teams.
          </ResourcesSubtitle>
        </ResourcesHeader>

        <Controls>
          <SearchInput
            type="search"
            placeholder="Search insights"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            aria-label="Search insights"
          />

          <CategorySelect
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            aria-label="Filter insights by category"
          >
            <option value="All">All categories</option>
            {resourceCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </CategorySelect>
        </Controls>

        {filteredResources.length === 0 ? (
          <EmptyState>No insights match your current filters.</EmptyState>
        ) : (
          <ResourceGrid>
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.slug} to={`/insights/${resource.slug}`}>
                <ResourceMeta>
                  {resource.category} • {formatDate(resource.date)}
                </ResourceMeta>
                <ResourceTitle>{resource.title}</ResourceTitle>
                <ResourceDescription>{resource.description}</ResourceDescription>
              </ResourceCard>
            ))}
          </ResourceGrid>
        )}
      </ResourcesWrapper>
    </Layout>
  );
}
