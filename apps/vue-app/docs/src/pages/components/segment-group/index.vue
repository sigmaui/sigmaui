<template>
  <div :class="classes.getClass('root')">
    <h1 :class="classes.getClass('title')">Segment Group</h1>
    <p :class="classes.getClass('subtitle')">
      A segmented control component that allows users to select one option from a group of related options.
    </p>
    
    <div :class="classes.getClass('demoSection')">
      <h2 :class="classes.getClass('demoTitle')">Basic Usage</h2>
      <SegmentGroupPreview />
    </div>

    <div :class="classes.getClass('demoSection')">
      <h2 :class="classes.getClass('demoTitle')">With Custom Items</h2>
      <ThemeProvider :theme="theme" :theme-config="themeConfig" :theme-variant="themeVariant">
        <SegmentGroup 
          :items="['Small', 'Medium', 'Large']"
          label="Size"
          :default-value="'Medium'"
        />
      </ThemeProvider>
    </div>

    <div :class="classes.getClass('demoSection')">
      <h2 :class="classes.getClass('demoTitle')">Controlled Component</h2>
      <ThemeProvider :theme="theme" :theme-config="themeConfig" :theme-variant="themeVariant">
        <SegmentGroup 
          :items="['Light', 'Dark', 'Auto']"
          label="Theme"
          :value="selectedTheme"
          @value-change="handleThemeChange"
        />
        <p>Selected theme: {{ selectedTheme }}</p>
      </ThemeProvider>
    </div>

    <nav :class="classes.getClass('nav')">
      <RouterLink to="/components" :class="classes.getClass('navLink')">
        ← Back to Components
      </RouterLink>
    </nav>
  </div>
</template>

<script lang="ts">
import { segmentGroupPageStyles, SegmentGroupPageTypes } from './xStyles.ts';
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { withStyleX } from '@packages/vue/hooks/with-stylex';
import ThemeProvider from 'packages/vue/src/system/theme-provider.vue';
import SegmentGroup from 'packages/vue/src/components/segment-group/src/index.vue';
import SegmentGroupPreview from './preview/index.vue';
import { getTheme } from 'packages/common/theme';
import { themeConfig } from '../../../theme/config';

const { theme, themeVariant } = getTheme();

const { classes } = withStyleX(segmentGroupPageStyles)({
  displayName: 'SegmentGroupPage',
  rawProps: {}
});

const selectedTheme = ref('Light');

const handleThemeChange = (value: string) => {
  selectedTheme.value = value;
};
</script> 