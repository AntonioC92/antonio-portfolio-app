import { Helmet } from 'react-helmet-async';

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
}: SeoProps): JSX.Element {
  const image = ogImage ?? 'https://carusomartech.com/preview.png';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={ogTitle ?? title} />
      <meta property="og:description" content={ogDescription ?? description} />
      <meta property="og:url" content={ogUrl ?? canonical} />
      <meta property="og:type" content={ogType ?? 'website'} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle ?? title} />
      <meta name="twitter:description" content={twitterDescription ?? description} />
      <meta name="twitter:image" content={twitterImage ?? image} />
    </Helmet>
  );
}
