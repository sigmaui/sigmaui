<template>
  <div :class="classes.getClass('demoSection')">
    <h2 v-if="showDemoTitle" :class="classes.getClass('demoTitle')">Demo</h2>
    <ThemeProvider :theme="theme" :theme-config="themeConfig" :theme-tokens="themeTokens">
      <div :class="classes.getClass('demoContainer')">
        <Box :class="classes.getClass('demoBox')" as="div">
          <p>Default Box Component</p>
        </Box>

        <Box :class="classes.getClass('demoBox')" as="section">
          <p>Box with custom styles</p>
        </Box>

        <Box :class="classes.getClass('demoBox')" as="article">
          <h3>Box as Article</h3>
          <p>This box is rendered as an article element with custom styling.</p>
        </Box>

        <Box :class="classes.getClass('demoBox')" as="aside">
          <p>Box as Aside - Perfect for sidebars and callouts</p>
        </Box>
      </div>
    </ThemeProvider>
  </div>
</template>

<script lang="ts">
import { boxPreviewStyles, BoxPreviewTypes } from './xStyles.ts';

interface Props {
  showDemoTitle?: boolean;
}
</script>

<script setup lang="ts">
import { withStyleX } from '@sigmaui-kit/v-with-stylex';
// import { withStyleX } from '@packages/vue/hooks/with-stylex';
import ThemeProvider from 'packages/vue/src/system/theme-provider/src/index.vue';
// import Box from 'packages/vue/src/components/box/src/index.vue';
import Box from '@sigmaui-kit/v-box';
import { getTheme } from 'packages/common/theme';
import { themeConfig } from '../../../../theme/config';

const props = withDefaults(defineProps<Props>(), {
  showDemoTitle: true
});

const { theme, themeTokens } = getTheme();

const { classes } = withStyleX(boxPreviewStyles)({
  displayName: 'BoxPreview',
  rawProps: {}
});
</script> 