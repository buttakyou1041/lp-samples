export const SITE_CONFIG = {
  siteName: 'ITコンサルタント',
  siteUrl: 'https://lp-samples-k4ul.vercel.app',
  defaultDescription:
    'LP制作、IT顧問、AI活用支援を提供するITコンサルタント。初期費用0円からのLP制作、ベンダー選定・見積もり査定のIT顧問など。',
  defaultOgImage: '/og-image.png',
};

export interface PageSeoConfig {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  noindex?: boolean;
}

export const PAGE_SEO: Record<string, PageSeoConfig> = {
  home: {
    title: 'ITコンサルタント | LP制作・IT顧問・AI活用支援',
    description:
      'LP制作、IT顧問、AI活用支援を提供するITコンサルタント。初期費用0円からのLP制作、15社以上の支援実績。ベンダー選定・見積もり査定、ChatGPT/Claude導入支援など。',
    path: '/',
    ogType: 'website',
  },
  coffee: {
    title: 'カフェLP制作サンプル | SLOW DRIP COFFEE',
    description:
      '飲食店・カフェ向けランディングページ制作サンプル。中目黒の自家焙煎コーヒー専門店をイメージしたLP。ITコンサルタントによるLP制作実績。',
    path: '/samples/coffee',
    ogType: 'website',
  },
  salon: {
    title: '美容室LP制作サンプル | hair salon KOMOREBI',
    description:
      '美容室・サロン向けランディングページ制作サンプル。自由が丘の隠れ家サロンをイメージしたLP。ITコンサルタントによるLP制作実績。',
    path: '/samples/salon',
    ogType: 'website',
  },
  anime: {
    title: 'アニメティザーLP制作サンプル | 死に戻りの賢者',
    description:
      'アニメ・エンタメ向けティザーランディングページ制作サンプル。制作委員会向けアニメ告知LPのサンプル。ITコンサルタントによるLP制作実績。',
    path: '/samples/anime',
    ogType: 'website',
  },
};
