import { defineConfig } from 'vite';
import path from 'path';
import stylexPlugin from '@stylexjs/rollup-plugin';

export default defineConfig(({ mode }) => {
  return {
    base: './',
    publicDir: 'public',
    resolve: {
      alias: {
        'src': path.resolve(__dirname, './src')
      }
    },
    build: {
      minify: true,
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react'],
            'react-dom': ['react-dom'],
            'react-router': ['react-router', 'react-router-dom']
          }
        }
      }
    },
    esbuild: {
      pure: ['console.log', 'console.warn']
    },
    plugins: [
      stylexPlugin({
        fileName: 'stylex.css'
      })
    ],
    define: {
      'process.env': process.env
    }
  }
})