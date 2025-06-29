<template>
  <slot/>
</template>

<script setup lang="ts">
import { ThemeProvider, useTheme, type ThemeContextProps } from '@packages/vue/hooks/use-theme';

const { themeVariant = {}, themeConfig = {} } = useTheme() || {};

const props = defineProps<ThemeContextProps>();

const themeVariantFromProp = props.themeVariant;
const themeConfigFromProp = props.themeConfig;

ThemeProvider({
  themeVariant: {
    ...themeVariant,
    ...themeVariantFromProp
  },
  themeConfig: {
    ...themeConfig,
    ...themeConfigFromProp,
    globalProps: Object.assign({}, themeConfig?.globalProps, themeConfigFromProp?.globalProps)
  }
})
</script>