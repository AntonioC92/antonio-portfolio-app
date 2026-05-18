export type ResourceCategory =
  | 'Fractional CMO'
  | 'Marketing Systems'
  | 'Attribution & Analytics'
  | 'Automation & AI';

export const INSIGHT_CATEGORIES: ResourceCategory[] = [
  'Fractional CMO',
  'Marketing Systems',
  'Attribution & Analytics',
  'Automation & AI',
];

export type Resource = {
  title: string;
  slug: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  lastUpdated: string;
  category: ResourceCategory;
  tags: string[];
  body: string;
};

const ALLOWED_CATEGORIES: ResourceCategory[] = INSIGHT_CATEGORIES;

function parseFrontmatter(raw: string): { frontmatter: Record<string, string>; body: string } {
  if (!raw.startsWith('---')) {
    throw new Error('Resource file must start with frontmatter block');
  }

  const boundary = '\n---';
  const end = raw.indexOf(boundary, 3);

  if (end === -1) {
    throw new Error('Resource file frontmatter is not closed');
  }

  const header = raw.slice(3, end).trim();
  const body = raw.slice(end + boundary.length).trim();

  const frontmatter: Record<string, string> = {};
  header.split('\n').forEach((line) => {
    const separator = line.indexOf(':');
    if (separator === -1) return;
    const key = line.slice(0, separator).trim();
    const value = line
      .slice(separator + 1)
      .trim()
      .replace(/^"(.*)"$/, '$1')
      .replace(/^'(.*)'$/, '$1');

    frontmatter[key] = value;
  });

  return { frontmatter, body };
}

function toResource(raw: string): Resource {
  const { frontmatter, body } = parseFrontmatter(raw);
  const title = frontmatter.title;
  const slug = frontmatter.slug;
  const description = frontmatter.description;
  const metaTitle = frontmatter.metaTitle;
  const metaDescription = frontmatter.metaDescription;
  const date = frontmatter.date;
  const lastUpdated = frontmatter.lastUpdated ?? date;
  const category = frontmatter.category as ResourceCategory;
  const tags = (frontmatter.tags ?? '')
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);

  if (!title || !slug || !description || !metaTitle || !metaDescription || !date || !category) {
    throw new Error(`Missing required frontmatter in resource "${slug || title || 'unknown'}"`);
  }

  if (!ALLOWED_CATEGORIES.includes(category)) {
    throw new Error(`Invalid category "${category}" in resource "${slug}"`);
  }

  return {
    title,
    slug,
    description,
    metaTitle,
    metaDescription,
    date,
    lastUpdated,
    category,
    tags,
    body,
  };
}

const resourceFiles = import.meta.glob<string>('./*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
});

export const resources: Resource[] = Object.values(resourceFiles)
  .map((raw) => toResource(raw))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const resourceCategories: ResourceCategory[] = INSIGHT_CATEGORIES;

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((resource) => resource.slug === slug);
}

export function getRelatedResources(
  current: Resource,
  limit = 3
): Resource[] {
  const getTagOverlap = (left: Resource, right: Resource): number => {
    const leftTags = new Set(left.tags.map((tag) => tag.toLowerCase()));
    return right.tags.reduce((score, tag) => (
      leftTags.has(tag.toLowerCase()) ? score + 1 : score
    ), 0);
  };

  const getKeywordOverlap = (left: Resource, right: Resource): number => {
    const tokenize = (value: string) =>
      value
        .toLowerCase()
        .split(/[^a-z0-9]+/)
        .map((token) => token.trim())
        .filter((token) => token.length >= 4);

    const leftTerms = new Set(
      [...tokenize(left.title), ...tokenize(left.description), ...left.tags.map((tag) => tag.toLowerCase())]
    );
    const rightTerms = new Set(
      [...tokenize(right.title), ...tokenize(right.description), ...right.tags.map((tag) => tag.toLowerCase())]
    );

    let score = 0;
    leftTerms.forEach((term) => {
      if (rightTerms.has(term)) score += 1;
    });

    return score;
  };

  const scoreResource = (candidate: Resource): number => {
    const tagOverlap = getTagOverlap(current, candidate);
    const keywordOverlap = getKeywordOverlap(current, candidate);
    const recencyBoost = new Date(candidate.date).getTime() / 1_000_000_000_000;
    return tagOverlap * 10 + keywordOverlap + recencyBoost;
  };

  const sameCategory = resources
    .filter((resource) => resource.slug !== current.slug && resource.category === current.category)
    .sort((a, b) => scoreResource(b) - scoreResource(a));
  const crossCategory = resources
    .filter((resource) => resource.slug !== current.slug && resource.category !== current.category)
    .sort((a, b) => scoreResource(b) - scoreResource(a));

  const selected: Resource[] = [];

  if (sameCategory.length > 0) {
    selected.push(sameCategory[0]);
  }

  crossCategory.slice(0, 2).forEach((resource) => {
    selected.push(resource);
  });

  const remaining = [...sameCategory.slice(1), ...crossCategory.slice(2)].filter(
    (candidate) => !selected.some((resource) => resource.slug === candidate.slug)
  );

  for (const candidate of remaining) {
    if (selected.length >= limit) break;
    selected.push(candidate);
  }

  return selected.slice(0, limit);
}
