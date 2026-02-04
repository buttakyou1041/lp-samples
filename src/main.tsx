import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';
import { logWebVitals } from './utils/webVitals';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Core Web Vitals を計測（開発時はコンソールに出力）
if (import.meta.env.DEV) {
  logWebVitals();
}
