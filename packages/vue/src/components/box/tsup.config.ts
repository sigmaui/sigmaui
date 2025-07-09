import { defineConfig } from 'tsup';
import vue from 'unplugin-vue/esbuild';

export default defineConfig({
  clean: true,
  minify: true,
  target: 'es2019',
  format: ['cjs', 'esm'],
  esbuildOptions(options) {
    options.drop = ['console'];
  },
  esbuildPlugins: [
    vue({
      isProduction: true
    })
  ],
  external: [
    '@stylexjs/stylex',
    '@sigmaui-kit/v-with-stylex'
  ]
});
