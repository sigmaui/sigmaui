import { defineConfig } from 'vite';
import path from 'path';
// @ts-ignore
import stylexPlugin from 'unplugin-stylex/vite';
// @ts-ignore
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ mode }) => {
  console.log('mode', mode)
  const isDev = mode === 'development';

  return {
    base: './',
    publicDir: 'public',
    resolve: {
      alias: {
        'src': path.resolve(__dirname, './src'),
        'packages': path.resolve(__dirname, '../../packages'),
        '@packages/react/hooks/with-stylex': path.resolve(__dirname, '../../packages/react/src/hooks/with-stylex/src'),
        '@packages/react/hooks/use-theme': path.resolve(__dirname, '../../packages/react/src/hooks/use-theme/src'),
        '@packages/react/components/select': path.resolve(__dirname, '../../packages/react/src/components/select/src'),
        '@packages/react/components/button': path.resolve(__dirname, '../../packages/react/src/components/button/src'),
      }
    },
    build: {
      minify: true,
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {}
        }
      }
    },
    esbuild: {
      pure: ['console.log', 'console.warn']
    },
    plugins: [
      vue(),
      stylexPlugin({
        stylex: {
          filename: 'stylex.css',
          classNamePrefix: 'x',
          dev: false,
          // dev: isDev,
          runtimeInjection: isDev,
          useCSSLayers: true
        }
      })
    ]
  }
})