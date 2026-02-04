import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '@/config/seo';

// Organization Schema (for home page)
export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'ITコンサルタント',
    description: 'LP制作、IT顧問、AI活用支援を提供するITコンサルタント',
    url: SITE_CONFIG.siteUrl,
    areaServed: {
      '@type': 'Country',
      name: 'JP',
    },
    serviceType: [
      'LP制作',
      'IT顧問',
      'AI活用支援',
      '業務システム開発',
      'アプリ開発',
      '運用支援',
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// WebSite Schema
export function WebsiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.siteName,
    url: SITE_CONFIG.siteUrl,
    inLanguage: 'ja',
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// BreadcrumbList Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.siteUrl}${item.url}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// WebPage Schema
interface WebPageJsonLdProps {
  title: string;
  description: string;
  path: string;
}

export function WebPageJsonLd({ title, description, path }: WebPageJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: `${SITE_CONFIG.siteUrl}${path}`,
    inLanguage: 'ja',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_CONFIG.siteName,
      url: SITE_CONFIG.siteUrl,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// FAQ Schema (AI要約に効果的)
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQJsonLd({ items }: { items: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// Service Schema (サービス詳細をAIが理解しやすくする)
interface ServiceItem {
  name: string;
  description: string;
  price?: string;
}

export function ServiceJsonLd({ services }: { services: ServiceItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
          '@type': 'ProfessionalService',
          name: SITE_CONFIG.siteName,
          url: SITE_CONFIG.siteUrl,
        },
        ...(service.price && { offers: { '@type': 'Offer', price: service.price } }),
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// Person Schema (E-E-A-T: 経験・専門性・権威性・信頼性を強化)
interface PersonJsonLdProps {
  name: string;
  jobTitle: string;
  description: string;
  knowsAbout?: string[];
  hasCredential?: string[];
  worksFor?: string;
}

export function PersonJsonLd({
  name,
  jobTitle,
  description,
  knowsAbout = [],
  hasCredential = [],
  worksFor,
}: PersonJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: name,
    jobTitle: jobTitle,
    description: description,
    url: SITE_CONFIG.siteUrl,
    knowsAbout: knowsAbout,
    hasCredential: hasCredential.map((credential) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: credential,
    })),
    ...(worksFor && {
      worksFor: {
        '@type': 'Organization',
        name: worksFor,
      },
    }),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// ProfilePage Schema (著者ページとしてのSEO強化)
export function ProfilePageJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Naoki Imuta',
      jobTitle: 'ITコンサルタント / プロジェクトマネージャー',
      description:
        'LP制作、IT顧問、AI活用支援を提供。PM歴5年以上、15社以上の支援実績、最大353人月規模のプロジェクト経験。',
      knowsAbout: [
        'LP制作',
        'Webデザイン',
        'UX/UIデザイン',
        'SEO対策',
        'デジタルマーケティング',
        'IT顧問',
        'AI活用支援',
        'プロジェクトマネジメント',
        'Webエンジニアリング',
        'ChatGPT',
        'Claude',
        'gemini',
        '業務改善',
        '業務システム開発',
        'アプリ開発',
        'iOS',
        'Android',
        '運用支援',
        'ITコンサルティング',
        'システム導入支援',
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'certification',
          name: '応用情報技術者',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'certification',
          name: 'データベーススペシャリスト',
        },
      ],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
