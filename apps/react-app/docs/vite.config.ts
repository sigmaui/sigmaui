import { defineConfig } from 'vite';
import path from 'path';
// @ts-ignore
import stylexPlugin from '@sigmaui-kit/unplugin-stylex/vite';
// @ts-ignore
import reactRefresh from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

export default defineConfig(({ mode }) => {
  console.log('mode', mode)
  const isDev = mode === 'development';

  return {
    base: './',
    publicDir: 'public',
    optimizeDeps: {
      exclude: [
        '@sigmaui-kit/theme-tailwind',
        '@sigmaui-kit/v-box'
      ]
    },
    resolve: {
      alias: {
        'src': path.resolve(__dirname, './src'),
        'packages': path.resolve(__dirname, '../../../packages'),
        '@packages/common/hooks/use-stylex': path.resolve(__dirname, '../../../packages/common/hooks/use-stylex/src'),
        '@packages/react/hooks/with-stylex': path.resolve(__dirname, '../../../packages/react/src/hooks/with-stylex/src'),
        '@packages/react/hooks/use-theme': path.resolve(__dirname, '../../../packages/react/src/hooks/use-theme/src'),
        '@packages/react/components/select': path.resolve(__dirname, '../../../packages/react/src/components/select/src'),
        '@packages/react/components/button': path.resolve(__dirname, '../../../packages/react/src/components/button/src'),
        '@packages/react/components/box': path.resolve(__dirname, '../../../packages/react/src/components/box/src')
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
      reactRefresh(),
      mdx({
        providerImportSource: '@mdx-js/react',
        jsxImportSource: 'react'
      }),
      stylexPlugin({
        stylex: {
          filename: 'stylex.css',
          classNamePrefix: 'x',
          dev: false,
          // dev: isDev,
          runtimeInjection: isDev,
          useCSSLayers: true,
          treeshakeCompensation: true,
          // aliases: {
          //   '@packages/common/theme/tokens': path.resolve(__dirname, '../../../packages/common/theme/tokens')
          // }
        }
      })
    ]
  }
})