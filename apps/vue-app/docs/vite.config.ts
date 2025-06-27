import { defineConfig } from 'vite';
import path from 'path';
// @ts-ignore
import stylexPlugin from 'vite-plugin-stylex';
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
        'packages': path.resolve(__dirname, '../../../packages'),
        '@packages/vue/hooks/with-stylex': path.resolve(__dirname, '../../../packages/vue/src/hooks/with-stylex/src'),
        '@packages/vue/hooks/use-theme': path.resolve(__dirname, '../../../packages/vue/src/hooks/use-theme/src'),
        '@packages/vue/components/select': path.resolve(__dirname, '../../../packages/vue/src/components/select/src'),
        '@packages/vue/components/button': path.resolve(__dirname, '../../../packages/vue/src/components/button/src')
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
        filename: 'stylex.css',
        classNamePrefix: 'x',
        dev: false,
        // dev: isDev,
        runtimeInjection: isDev,
        useCSSLayers: true
      })
    ]
  }
})