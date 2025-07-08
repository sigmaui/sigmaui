<template>
  <slot/>
</template>

<script setup lang="ts">
// import { ThemeProvider, useTheme, type ThemeContextProps } from '@packages/vue/hooks/use-theme';
import { ThemeProvider, useTheme, type ThemeContextProps } from '@sigmaui-kit/v-use-theme';

const { themeTokens = {}, themeConfig = {} } = useTheme() || {};

const props = defineProps<ThemeContextProps>();

const themeTokensFromProp = props.themeTokens;
const themeConfigFromProp = props.themeConfig;

ThemeProvider({
  themeTokens: {
    ...themeTokens,
    ...themeTokensFromProp
  },
  themeConfig: {
    ...themeConfig,
    ...themeConfigFromProp,
    globalProps: Object.assign({}, themeConfig?.globalProps, themeConfigFromProp?.globalProps)
  }
})
</script>