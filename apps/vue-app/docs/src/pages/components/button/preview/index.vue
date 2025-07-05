<template>
  <div :class="classes.getClass('demoSection')">
    <h2 v-if="showDemoTitle" :class="classes.getClass('demoTitle')">Demo</h2>
    <ThemeProvider :theme="theme" :theme-config="themeConfig" :theme-tokens="themeTokens">
      <Button :class="classes.getClass('demoButton')">Default Button</Button>
      <Button size="lg" :class="classes.getClass('demoButton')">Large Button</Button>
      <Button size="sm" :class="classes.getClass('demoButton')">Small Button</Button>
      <Button variant="dashed" :class="classes.getClass('demoButton')">
        Dashed
      </Button>
      <Button variant="text" :class="classes.getClass('demoButton')">
        Text
      </Button>
      <Button variant="link" :class="classes.getClass('demoButton')">
        Link
      </Button>
    </ThemeProvider>
  </div>
</template>

<script lang="ts">
import { buttonPreviewStyles, ButtonPreviewTypes } from './xStyles.ts';

interface Props {
  showDemoTitle?: boolean;
}
</script>

<script setup lang="ts">
import { withStyleX } from '@packages/vue/hooks/with-stylex';
import ThemeProvider from 'packages/vue/src/system/theme-provider.vue';
import Button from 'packages/vue/src/components/button/src/index.vue';
import { getTheme } from 'packages/common/theme';
import { themeConfig } from '../../../../theme/config';

const props = withDefaults(defineProps<Props>(), {
  showDemoTitle: true
});

const { theme, themeTokens } = getTheme();

const { classes } = withStyleX(buttonPreviewStyles)({
  displayName: 'ButtonPreview',
  rawProps: {}
});
</script>