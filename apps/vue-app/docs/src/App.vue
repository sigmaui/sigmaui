<template>
  <ThemeProvider :theme="theme" :theme-config="themeConfig" :theme-variant="themeVariant">
    <Button size="lg">Button</Button>
    <ThemeProvider>
      <Button size="lg">Button</Button>
      <Select>Select</Select>
    </ThemeProvider>
  </ThemeProvider>
</template>

<script lang="ts">
import { getTheme } from 'packages/common/theme';
import { themeConfig } from './theme/config';

const { theme, themeVariant } = getTheme();

// import * as stylex from '@stylexjs/stylex';

// const styles = stylex.create({
//   root: {
//     color: 'red',
//     fontSize: '18px',
//     fontWeight: 'bold'
//   }
// });
export default {
  data() {
    return {
      theme,
      themeConfig,
      themeVariant
    }
  }
}
</script>

<script setup lang="ts">
import ThemeProvider from 'packages/vue/src/system/theme-provider.vue';
import Button from 'packages/vue/src/components/button/src/index.vue';
import Select from 'packages/vue/src/components/select/src/index.vue';
</script>