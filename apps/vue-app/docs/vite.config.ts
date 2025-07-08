import { defineConfig } from 'vite';
import path from 'path';
// @ts-ignore
import stylexPlugin from '@sigmaui-kit/unplugin-stylex/vite';
// @ts-ignore
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ mode }) => {
  console.log('mode', mode)
  const isDev = mode === 'development';

  return {
    base: './',
    publicDir: 'public',
    optimizeDeps: {
      exclude: ['@sigmaui-kit/theme-tailwind']
    },
    resolve: {
      alias: {
        'src': path.resolve(__dirname, './src'),
        'packages': path.resolve(__dirname, '../../../packages'),
        '@packages/common/hooks/use-stylex': path.resolve(__dirname, '../../../packages/common/hooks/use-stylex/src'),
        '@packages/vue/hooks/with-stylex': path.resolve(__dirname, '../../../packages/vue/src/hooks/with-stylex/src'),
        '@packages/vue/hooks/use-theme': path.resolve(__dirname, '../../../packages/vue/src/hooks/use-theme/src'),
        '@packages/vue/components/select': path.resolve(__dirname, '../../../packages/vue/src/components/select/src'),
        '@packages/vue/components/button': path.resolve(__dirname, '../../../packages/vue/src/components/button/src'),
        '@packages/vue/components/box': path.resolve(__dirname, '../../../packages/vue/src/components/box/src')
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
          useCSSLayers: true,
          // aliases: {
          //   '@packages/common/theme/tokens': path.resolve(__dirname, '../../../packages/common/theme/tokens')
          // }
        }
      })
    ]
  }
})