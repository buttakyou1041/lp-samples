import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG, PageSeoConfig } from '@/config/seo';

interface SeoProps extends Partial<PageSeoConfig> {
  title: string;
  description: string;
  path: string;
}

export function Seo({
  title,
  description,
  path,
  ogImage = SITE_CONFIG.defaultOgImage,
  ogType = 'website',
  noindex = false,
}: SeoProps) {
  const canonicalUrl = `${SITE_CONFIG.siteUrl}${path}`;
  const ogImageUrl = ogImage.startsWith('http')
    ? ogImage
    : `${SITE_CONFIG.siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content={SITE_CONFIG.siteName} />
      <meta property="og:locale" content="ja_JP" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Helmet>
  );
}
