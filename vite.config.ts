
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'vaul@1.1.2': 'vaul',
        'sonner@2.0.3': 'sonner',
        'recharts@2.15.2': 'recharts',
        'react-resizable-panels@2.1.7': 'react-resizable-panels',
        'react-hook-form@7.55.0': 'react-hook-form',
        'react-day-picker@8.10.1': 'react-day-picker',
        'next-themes@0.4.6': 'next-themes',
        'lucide-react@0.487.0': 'lucide-react',
        'input-otp@1.4.2': 'input-otp',
        'figma:asset/f89bb7359fe7202cbd7231ba8af6ea6e59e0600b.png': path.resolve(__dirname, './src/assets/f89bb7359fe7202cbd7231ba8af6ea6e59e0600b.png'),
        'figma:asset/e69d836994d5ebb9b0a1e9898ad8c94d24c12356.png': path.resolve(__dirname, './src/assets/e69d836994d5ebb9b0a1e9898ad8c94d24c12356.png'),
        'figma:asset/a2aae70ee0551d7e99e9af544b78028753d84a91.png': path.resolve(__dirname, './src/assets/a2aae70ee0551d7e99e9af544b78028753d84a91.png'),
        'figma:asset/8d14c8d68e19f3e3b10d681327c403b0e3003fab.png': path.resolve(__dirname, './src/assets/8d14c8d68e19f3e3b10d681327c403b0e3003fab.png'),
        'figma:asset/897c0133c56b3435148eab90e784ac2b2a8b6e3d.png': path.resolve(__dirname, './src/assets/897c0133c56b3435148eab90e784ac2b2a8b6e3d.png'),
        'figma:asset/7d31c4a62fda21eb261478c4122dfbab240870a2.png': path.resolve(__dirname, './src/assets/7d31c4a62fda21eb261478c4122dfbab240870a2.png'),
        'figma:asset/71da4d9dd8c545090cae2ab82ce55609405fdf27.png': path.resolve(__dirname, './src/assets/71da4d9dd8c545090cae2ab82ce55609405fdf27.png'),
        'figma:asset/6f13fe49a3da98b24fbaf71be478f71e7dba0e4e.png': path.resolve(__dirname, './src/assets/6f13fe49a3da98b24fbaf71be478f71e7dba0e4e.png'),
        'figma:asset/695fdd55755c763c188dcd53e4001606e7a0f903.png': path.resolve(__dirname, './src/assets/695fdd55755c763c188dcd53e4001606e7a0f903.png'),
        'figma:asset/66df6cb7246f232f86137f479122d3cd7d908d76.png': path.resolve(__dirname, './src/assets/66df6cb7246f232f86137f479122d3cd7d908d76.png'),
        'figma:asset/33cbff5decd9b54b7b0eecac97661b496dbedb79.png': path.resolve(__dirname, './src/assets/33cbff5decd9b54b7b0eecac97661b496dbedb79.png'),
        'figma:asset/1f3836ef93d7b784f9fd59f4b675c3003311c4a3.png': path.resolve(__dirname, './src/assets/1f3836ef93d7b784f9fd59f4b675c3003311c4a3.png'),
        'figma:asset/0f0f9e678230d37ef826d45b6ae4369611bb89bb.png': path.resolve(__dirname, './src/assets/0f0f9e678230d37ef826d45b6ae4369611bb89bb.png'),
        'figma:asset/0996eee4b24f372931547cba028e8efe46c10b0c.png': path.resolve(__dirname, './src/assets/0996eee4b24f372931547cba028e8efe46c10b0c.png'),
        'figma:asset/093f1a26d0e31509149e9389c260387993eb2fa2.png': path.resolve(__dirname, './src/assets/093f1a26d0e31509149e9389c260387993eb2fa2.png'),
        'embla-carousel-react@8.6.0': 'embla-carousel-react',
        'cmdk@1.1.1': 'cmdk',
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
        '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
        '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
        '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
        '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
        '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
        '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
        '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
        '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
        '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
        '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
        '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
        '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
        '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
        '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
        '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
        '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
      // Core Web Vitals 最適化
      rollupOptions: {
        output: {
          // コード分割でINPを改善
          manualChunks: {
            // ベンダーライブラリを分離
            'vendor-react': ['react', 'react-dom', 'react-router'],
            'vendor-ui': ['motion', 'lucide-react'],
            // 重いライブラリを分離
            'vendor-charts': ['recharts'],
          },
        },
      },
      // 圧縮でLCPを改善
      minify: 'esbuild',
      // CSSをインライン化せず分離（キャッシュ効率向上）
      cssCodeSplit: true,
    },
    server: {
      port: 3000,
      open: true,
    },
  });