import { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogType?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
};

function upsertMeta(
  selector: string,
  create: () => HTMLMetaElement,
  content: string
): void {
  const tag = document.head.querySelector<HTMLMetaElement>(selector) ?? create();
  tag.setAttribute('content', content);
}

export function Seo({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogUrl,
  ogType,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
}: SeoProps): null {
  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="description"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
      return meta;
    }, description);

    const canonicalTag =
      document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]') ??
      (() => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
        return link;
      })();

    canonicalTag.setAttribute('href', canonical);

    upsertMeta('meta[property="og:title"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      document.head.appendChild(meta);
      return meta;
    }, ogTitle ?? title);

    upsertMeta('meta[property="og:description"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      document.head.appendChild(meta);
      return meta;
    }, ogDescription ?? description);

    upsertMeta('meta[property="og:url"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:url');
      document.head.appendChild(meta);
      return meta;
    }, ogUrl ?? canonical);

    upsertMeta('meta[property="og:type"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:type');
      document.head.appendChild(meta);
      return meta;
    }, ogType ?? 'website');

    upsertMeta('meta[property="og:image"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:image');
      document.head.appendChild(meta);
      return meta;
    }, ogImage ?? 'https://carusomartech.com/preview.png');

    upsertMeta('meta[name="twitter:title"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'twitter:title');
      document.head.appendChild(meta);
      return meta;
    }, twitterTitle ?? title);

    upsertMeta('meta[name="twitter:description"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'twitter:description');
      document.head.appendChild(meta);
      return meta;
    }, twitterDescription ?? description);

    upsertMeta('meta[name="twitter:image"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'twitter:image');
      document.head.appendChild(meta);
      return meta;
    }, twitterImage ?? ogImage ?? 'https://carusomartech.com/preview.png');
  }, [
    canonical,
    description,
    ogImage,
    ogDescription,
    ogTitle,
    ogType,
    ogUrl,
    title,
    twitterDescription,
    twitterImage,
    twitterTitle,
  ]);

  return null;
}
