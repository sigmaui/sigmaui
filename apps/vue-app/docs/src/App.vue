<script lang="ts">
import { h } from 'vue'
// import * as stylex from '@stylexjs/stylex';

// const components = stylex.create({
//   root: {
//     color: 'red',
//     fontSize: '18px',
//     fontWeight: 'bold'
//   }
// });
</script>

<script setup lang="ts">
import { MDXProvider } from '@mdx-js/vue';
import PlatformProvider from '@sigmaui-kit/v-platform';
import ThemeProvider from 'packages/vue/src/system/theme-provider/src/index.vue';
import { MDXComponents } from 'packages/vue/src/components/mdx-components';
import { getTheme } from 'packages/common/theme';
import { themeConfig } from './theme/config';

const { theme, themeTokens } = getTheme();

console.log('MDXComponents', MDXComponents)
</script>

<template>
  <PlatformProvider>
    <ThemeProvider :theme="theme" :theme-config="themeConfig" :theme-tokens="themeTokens">
      <MDXProvider :components="MDXComponents">
        <router-view/>
      </MDXProvider>
    </ThemeProvider>
  </PlatformProvider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}
</style>