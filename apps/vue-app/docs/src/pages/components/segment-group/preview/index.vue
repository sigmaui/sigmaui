<template>
  <div :class="classes.getClass('demoSection')">
    <h2 v-if="showDemoTitle" :class="classes.getClass('demoTitle')">Demo</h2>
    <ThemeProvider :theme="theme" :theme-config="themeConfig" :theme-tokens="themeTokens">
      <SegmentGroup 
        :items="['React', 'Vue', 'Svelte', 'Solid']"
        label="Choose your framework"
        :default-value="'Vue'"
      />
    </ThemeProvider>
  </div>
</template>

<script lang="ts">
import { segmentGroupPreviewStyles, SegmentGroupPreviewTypes } from './xStyles.ts';

interface Props {
  showDemoTitle?: boolean;
}
</script>

<script setup lang="ts">
import { withStyleX } from '@packages/vue/hooks/with-stylex';
import ThemeProvider from 'packages/vue/src/system/theme-provider.vue';
import SegmentGroup from 'packages/vue/src/components/segment-group/src/index.vue';
import { getTheme } from 'packages/common/theme';
import { themeConfig } from '../../../../theme/config';

const props = withDefaults(defineProps<Props>(), {
  showDemoTitle: true
});

const { theme, themeTokens } = getTheme();

const { classes } = withStyleX(segmentGroupPreviewStyles)({
  displayName: 'SegmentGroupPreview',
  rawProps: {}
});
</script> 