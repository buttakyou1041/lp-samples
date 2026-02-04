import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean; // LCP要素の場合はtrueに設定
  aspectRatio?: string; // 例: "16/9", "4/3", "1/1"
}

/**
 * Core Web Vitals最適化済み画像コンポーネント
 * - CLS対策: アスペクト比を予約してレイアウトシフトを防止
 * - LCP対策: priority=trueで優先読み込み
 * - loading="lazy"でビューポート外の画像を遅延読み込み
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  aspectRatio,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // 優先度が高い画像はpreloadする
  useEffect(() => {
    if (priority && src) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    }
  }, [priority, src]);

  const containerStyle: React.CSSProperties = {
    aspectRatio: aspectRatio || (width && height ? `${width}/${height}` : undefined),
    position: 'relative',
    overflow: 'hidden',
  };

  const imageStyle: React.CSSProperties = {
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
  };

  if (error) {
    return (
      <div
        style={containerStyle}
        className={`bg-gray-200 flex items-center justify-center ${className}`}
      >
        <span className="text-gray-400 text-sm">画像を読み込めませんでした</span>
      </div>
    );
  }

  return (
    <div style={containerStyle} className={className}>
      {/* プレースホルダー（読み込み中の背景） */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}

      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        style={imageStyle}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
