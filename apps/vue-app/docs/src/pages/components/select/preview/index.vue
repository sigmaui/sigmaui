<template>
  <div :class="classes.getClass('demoSection')">
    <h2 v-if="showDemoTitle" :class="classes.getClass('demoTitle')">Demo</h2>
    <ThemeProvider :theme="theme" :theme-config="themeConfig" :theme-variant="themeVariant">
      <Select>Select Component</Select>
    </ThemeProvider>
  </div>
</template>

<script lang="ts">
import { selectPreviewStyles, SelectPreviewTypes } from './xStyles.ts';

interface Props {
  showDemoTitle?: boolean;
}
</script>

<script setup lang="ts">
import { withStyleX } from '@packages/vue/hooks/with-stylex';
import ThemeProvider from 'packages/vue/src/system/theme-provider.vue';
import Select from 'packages/vue/src/components/select/src/index.vue';
import { getTheme } from 'packages/common/theme';
import { themeConfig } from '../../../../theme/config';

const props = withDefaults(defineProps<Props>(), {
  showDemoTitle: true
});

const { theme, themeVariant } = getTheme();

const { classes } = withStyleX(selectPreviewStyles)({
  displayName: 'SelectPreview',
  rawProps: {}
});
</script> 