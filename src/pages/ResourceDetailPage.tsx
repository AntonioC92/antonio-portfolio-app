import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { Seo } from '../components/Seo';
import { getRelatedResources, getResourceBySlug } from '../content/resources';
import {
  ArticleAuthorLine,
  ArticleIntro,
  ArticleMeta,
  ArticleTitle,
  ArticleWrap,
  AuthorText,
  AuthorTitle,
  MetaLink,
  BackLink,
  BackLinkRow,
  MarkdownContent,
  NotFoundWrap,
  RelatedList,
  RelatedSection,
  RelatedTitle,
  SignatureFooter,
  SignatureSection,
  ResourceCard,
  ResourceDescription,
  ResourceMeta,
  ResourceTitle,
} from './Resources.styles';

const SITE_URL = 'https://carusomartech.com';

function formatDate(date: string): string {
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function ResourceDetailPage(): JSX.Element {
  const { slug = '' } = useParams();
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return (
      <Layout>
        <Seo
          title="Resource Not Found | Antonio Caruso"
          description="The requested resource could not be found."
          canonical={`${SITE_URL}/resources/insights/`}
          ogUrl={`${SITE_URL}/resources/insights/`}
        />
        <NotFoundWrap>
          <h1>Resource not found</h1>
          <p>The resource you requested is not available.</p>
          <BackLink to="/resources/insights/">Back to Insights</BackLink>
        </NotFoundWrap>
      </Layout>
    );
  }

  const canonical = `${SITE_URL}/resources/insights/${resource.slug}/`;
  const socialImage = `${SITE_URL}/og/${resource.slug}.svg`;
  const relatedResources = getRelatedResources(resource, 3);
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: resource.title,
    description: resource.metaDescription,
    url: canonical,
    datePublished: resource.date,
    dateModified: resource.lastUpdated,
    articleSection: resource.category,
    keywords: resource.tags.join(', '),
    author: {
      '@type': 'Person',
      name: 'Antonio Caruso',
      jobTitle: 'Fractional CMO',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Caruso Martech',
      logo: {
        '@type': 'ImageObject',
        url: 'https://carusomartech.com/logo.png',
      },
    },
  };
  const authorStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Antonio Caruso',
    url: SITE_URL,
    jobTitle: 'Fractional CMO',
    description:
      'Fractional CMO focused on marketing systems, attribution, automation, and growth operations.',
  };

  return (
    <Layout>
      <Seo
        title={resource.metaTitle}
        description={resource.metaDescription}
        canonical={canonical}
        ogTitle={resource.metaTitle}
        ogDescription={resource.metaDescription}
        ogUrl={canonical}
        ogType="article"
        ogImage={socialImage}
        twitterTitle={resource.metaTitle}
        twitterDescription={resource.metaDescription}
        twitterImage={socialImage}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorStructuredData) }}
      />

      <ArticleWrap>
        <ArticleTitle>{resource.title}</ArticleTitle>
        <ArticleAuthorLine>
          By Antonio Caruso
        </ArticleAuthorLine>
        <ArticleMeta>
          Published {formatDate(resource.date)} · Updated {formatDate(resource.lastUpdated)} ·{' '}
            <MetaLink to={`/resources/insights/?category=${encodeURIComponent(resource.category)}`}>
              {resource.category}
            </MetaLink>
        </ArticleMeta>
        <ArticleIntro>{resource.description}</ArticleIntro>

        <MarkdownContent>
          <ReactMarkdown
            components={{
              a: ({ href = '', children }) => {
                const isExternalLink = href.startsWith('http://') || href.startsWith('https://');
                return (
                  <a
                    href={href}
                    target={isExternalLink ? '_blank' : undefined}
                    rel={isExternalLink ? 'noopener noreferrer' : undefined}
                  >
                    {children}
                  </a>
                );
              },
            }}
          >
            {resource.body}
          </ReactMarkdown>
        </MarkdownContent>

        <RelatedSection>
          <RelatedTitle>Related insights</RelatedTitle>
          <RelatedList>
            {relatedResources.map((related) => (
              <ResourceCard key={related.slug} to={`/resources/insights/${related.slug}/`}>
                <ResourceMeta>
                  {related.category} • {formatDate(related.date)}
                </ResourceMeta>
                <ResourceTitle>{related.title}</ResourceTitle>
                <ResourceDescription>{related.description}</ResourceDescription>
              </ResourceCard>
            ))}
          </RelatedList>
        </RelatedSection>

        <SignatureSection>
          <AuthorTitle>About the Author</AuthorTitle>
          <AuthorText>
            Antonio Caruso
          </AuthorText>
          <AuthorText>
            Fractional CMO. Antonio partners with founders and leadership teams to turn fragmented marketing into structured, scalable growth systems, focused on attribution, automation, and decision quality.
          </AuthorText>
          <SignatureFooter>
            <MetaLink to="/contact">Get in touch</MetaLink>
          </SignatureFooter>
        </SignatureSection>

        <BackLinkRow>
          <BackLink to="/resources/insights/">Back to all insights</BackLink>
        </BackLinkRow>
      </ArticleWrap>
    </Layout>
  );
}
