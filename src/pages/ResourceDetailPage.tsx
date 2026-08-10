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
  BackLink,
  BackLinkRow,
  CtaBtnPrimary,
  CtaBtnSecondary,
  MetaLink,
  MarkdownContent,
  NotFoundWrap,
  RelatedList,
  RelatedSection,
  RelatedTitle,
  SignatureCtaRow,
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

type FaqPair = { question: string; answer: string };

// Derives FAQPage schema directly from the same markdown body ReactMarkdown
// renders, so the schema can never drift from what's actually visible on
// the page. Looks for a "## FAQ" or "## Frequently Asked Questions" section
// containing one or more "### Question?" headings, each followed by a short
// answer paragraph. Returns an empty array (no schema emitted) if the
// article doesn't have this section — most articles won't, and that's fine.
function extractFaqFromBody(body: string): FaqPair[] {
  const lines = body.split('\n');
  const faqSectionStart = lines.findIndex((line) =>
    /^##\s+(FAQ|Frequently Asked Questions)\s*$/i.test(line.trim())
  );
  if (faqSectionStart === -1) return [];

  const sectionLines: string[] = [];
  for (let i = faqSectionStart + 1; i < lines.length; i += 1) {
    if (/^##\s+\S/.test(lines[i])) break; // next H2 ends the FAQ section
    sectionLines.push(lines[i]);
  }

  const stripMarkdown = (text: string): string =>
    text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[*_`]/g, '')
      .trim();

  const pairs: FaqPair[] = [];
  let currentQuestion: string | null = null;
  let currentAnswer: string[] = [];

  const flush = () => {
    if (currentQuestion && currentAnswer.length > 0) {
      const answer = stripMarkdown(currentAnswer.join(' ').trim());
      if (answer) pairs.push({ question: stripMarkdown(currentQuestion), answer });
    }
    currentQuestion = null;
    currentAnswer = [];
  };

  sectionLines.forEach((line) => {
    const headingMatch = /^###\s+(.+)$/.exec(line.trim());
    if (headingMatch) {
      flush();
      currentQuestion = headingMatch[1];
      return;
    }
    if (currentQuestion && line.trim()) {
      currentAnswer.push(line.trim());
    }
  });
  flush();

  return pairs;
}

export function ResourceDetailPage(): JSX.Element {
  const { slug = '' } = useParams();
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return (
      <Layout>
        <Seo
          title="Resource Not Found | Caruso Martech"
          description="The requested resource could not be found."
          canonical={`${SITE_URL}/insights/`}
          ogUrl={`${SITE_URL}/insights/`}
        />
        <NotFoundWrap>
          <h1>Resource not found</h1>
          <p>The resource you requested is not available.</p>
          <BackLink to="/insights">Back to Insights</BackLink>
        </NotFoundWrap>
      </Layout>
    );
  }

  const canonical = `${SITE_URL}/insights/${resource.slug}/`;
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
    // Named Person author (not just Organization) is an E-E-A-T signal for
    // Google and a citation-trust signal for AI answer engines. LinkedIn
    // URL corrected 2026-08-10 to match the profile already used in
    // Layout.tsx and Navbar (antoniocaruso2702) — a different, unverified
    // slug (antonio-caruso-martech) had been introduced here separately.
    // Keep this in sync with the visible byline below.
    author: {
      '@type': 'Person',
      name: 'Antonio Caruso',
      url: `${SITE_URL}/about/`,
      sameAs: ['https://www.linkedin.com/in/antoniocaruso2702/'],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Caruso Martech',
      logo: {
        '@type': 'ImageObject',
        url: 'https://carusomartech.com/transparent-logo.svg',
      },
    },
  };

  const faqPairs = extractFaqFromBody(resource.body);
  const faqStructuredData =
    faqPairs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqPairs.map((pair) => ({
            '@type': 'Question',
            name: pair.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: pair.answer,
            },
          })),
        }
      : null;

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
      {faqStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      )}

      <ArticleWrap>
        <ArticleTitle>{resource.title}</ArticleTitle>
        <ArticleAuthorLine>
          By Antonio Caruso, Caruso Martech
        </ArticleAuthorLine>
        <ArticleMeta>
          Published {formatDate(resource.date)} · Updated {formatDate(resource.lastUpdated)} ·{' '}
            <MetaLink to={`/insights?category=${encodeURIComponent(resource.category)}`}>
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

        <SignatureSection>
          <AuthorTitle>Caruso Martech</AuthorTitle>
          <AuthorText>
            We write about marketing systems, attribution, and growth operations because these are the problems we work on every day. If something in this post is relevant to what you're building, we're happy to talk through it.
          </AuthorText>
          <SignatureCtaRow>
            <CtaBtnPrimary
              href="https://calendly.com/caruso-martech/new-meeting"
              target="_blank"
              rel="noopener"
            >
              Book a strategy call ↗
            </CtaBtnPrimary>
            <CtaBtnSecondary href="/contact">
              Send an enquiry
            </CtaBtnSecondary>
          </SignatureCtaRow>
        </SignatureSection>

        <RelatedSection>
          <RelatedTitle>Related insights</RelatedTitle>
          <RelatedList>
            {relatedResources.map((related) => (
              <ResourceCard key={related.slug} to={`/insights/${related.slug}`}>
                <ResourceMeta>
                  {related.category} • {formatDate(related.date)}
                </ResourceMeta>
                <ResourceTitle>{related.title}</ResourceTitle>
                <ResourceDescription>{related.description}</ResourceDescription>
              </ResourceCard>
            ))}
          </RelatedList>
        </RelatedSection>

        <BackLinkRow>
          <BackLink to="/insights">Back to all insights</BackLink>
        </BackLinkRow>
      </ArticleWrap>
    </Layout>
  );
}
