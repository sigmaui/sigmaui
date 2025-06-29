<template>
  <div :class="classes.getClass('root')">
    <h1 :class="classes.getClass('title')">SigmaUI Components</h1>
    <p :class="classes.getClass('subtitle')">Explore all available components in the SigmaUI library.</p>

    <div :class="classes.getClass('segmentGroupSection')">
      <ThemeProvider :theme="theme" :theme-config="themeConfig" :theme-variant="themeVariant">
        <SegmentGroup
            :items="[
            { label: 'Get Started', value: 'get-started' },
            { label: 'Components', value: 'components' },
            { label: 'Blocks', value: 'blocks' }
          ]"
            :default-value="'components'"
            :onValueChange="handleSegmentChange"
        />
      </ThemeProvider>
    </div>

    <div :class="classes.getClass('componentsSection')">
      <h2 :class="classes.getClass('sectionTitle')">Available Components</h2>
      <nav :class="classes.getClass('componentsNav')">
        <div
            v-for="component in components"
            :key="component.name"
            :class="classes.getClass('componentCard')"
        >
          <component :is="component.preview" :showDemoTitle="false"/>
          <div :class="classes.getClass('componentHeader')">
            <h3 :class="classes.getClass('componentTitle')">{{ component.title }}</h3>
            <p :class="classes.getClass('componentDescription')">{{ component.description }}</p>
          </div>
          <router-link :to="component.docsLink" :class="classes.getClass('viewDocsLink')">
            View Documentation →
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { componentsStyles, ComponentsTypes } from './xStyles.ts';

interface ComponentItem {
  name: string;
  title: string;
  description: string;
  preview: any;
  docsLink: string;
}
</script>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { withStyleX } from '@packages/vue/hooks/with-stylex';
import ThemeProvider from 'packages/vue/src/system/theme-provider.vue';
import SegmentGroup from 'packages/vue/src/components/segment-group/src/index.vue';
import ButtonPreview from './button/preview/index.vue';
import SelectPreview from './select/preview/index.vue';
import SegmentGroupPreview from './segment-group/preview/index.vue';
import { getTheme } from 'packages/common/theme';
import { themeConfig } from '../../theme/config';

const router = useRouter();
const { theme, themeVariant } = getTheme();

const { classes } = withStyleX(componentsStyles)({
  displayName: 'Components',
  rawProps: {}
});

// Mapping of segment items to routes
const segmentRoutes = {
  'get-started': '/',
  'components': '/docs/components',
  'blocks': '/docs/blocks'
};

const handleSegmentChange = ({ value }: any) => {
  const route = segmentRoutes[value as keyof typeof segmentRoutes];

  console.log('handleSegmentChange', value, route)

  if (route) {
    router.push(route);
  }
};

const components: ComponentItem[] = [
  {
    name: 'button',
    title: 'Button',
    description: 'Interactive button component with various sizes and styles',
    preview: ButtonPreview,
    docsLink: '/docs/components/button'
  },
  {
    name: 'select',
    title: 'Select',
    description: 'Dropdown select component for form inputs',
    preview: SelectPreview,
    docsLink: '/docs/components/select'
  },
  {
    name: 'segment-group',
    title: 'Segment Group',
    description: 'Segmented control component for selecting one option from a group',
    preview: SegmentGroupPreview,
    docsLink: '/docs/components/segment-group'
  }
];
</script> 