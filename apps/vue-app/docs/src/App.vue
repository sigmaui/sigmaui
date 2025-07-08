<script lang="ts">

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
import ThemeProvider from 'packages/vue/src/system/theme-provider/src/index.vue';
import { getTheme } from 'packages/common/theme';
import { themeConfig } from './theme/config';

const { theme, themeTokens } = getTheme();

// App component with router
</script>

<template>
  <ThemeProvider :theme="theme" :theme-config="themeConfig" :theme-tokens="themeTokens">
    <router-view/>
  </ThemeProvider>
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