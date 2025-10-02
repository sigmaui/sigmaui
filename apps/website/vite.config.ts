import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(({ mode }) => {
  console.log('mode', mode);
  const isDev = mode === 'development';

  return {
    base: './',
    publicDir: 'public',
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src'),
        packages: path.resolve(__dirname, '../../packages'),
        '@packages/common/theme/types': path.resolve(__dirname, '../../packages/common/theme/types'),
        '@packages/react/hooks/use-theme': path.resolve(__dirname, '../../packages/react/src/hooks/use-theme/src'),
        '@packages/react/components/select': path.resolve(__dirname, '../../packages/react/src/components/select/src'),
        '@packages/react/components/button': path.resolve(__dirname, '../../packages/react/src/components/button/src'),
      },
    },
    build: {
      minify: true,
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react'],
            'react-dom': ['react-dom'],
            // 'react-router': ['react-router', 'react-router-dom']
          },
        },
      },
    },
    esbuild: {
      pure: ['console.log', 'console.warn'],
    },
    plugins: [],
  };
});
