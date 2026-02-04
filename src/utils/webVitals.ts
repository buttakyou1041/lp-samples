import { onCLS, onINP, onLCP, onFCP, onTTFB, type Metric } from 'web-vitals';

// Core Web Vitals のレポート関数
const reportWebVitals = (onPerfEntry?: (metric: Metric) => void) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Core Web Vitals (Google が重視する3指標)
    onCLS(onPerfEntry); // Cumulative Layout Shift
    onINP(onPerfEntry); // Interaction to Next Paint (FIDの後継)
    onLCP(onPerfEntry); // Largest Contentful Paint

    // その他のパフォーマンス指標
    onFCP(onPerfEntry); // First Contentful Paint
    onTTFB(onPerfEntry); // Time to First Byte
  }
};

// コンソールにCWVを出力（開発時のデバッグ用）
export const logWebVitals = () => {
  reportWebVitals((metric) => {
    const { name, value, rating } = metric;
    const color =
      rating === 'good' ? '\x1b[32m' : rating === 'needs-improvement' ? '\x1b[33m' : '\x1b[31m';

    console.log(`${color}[${name}] ${value.toFixed(2)} (${rating})\x1b[0m`);
  });
};

// Analytics に送信（Google Analytics等と連携する場合）
export const sendToAnalytics = () => {
  reportWebVitals((metric) => {
    // Google Analytics 4 への送信例
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag;
      gtag?.('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      });
    }
  });
};

export default reportWebVitals;
