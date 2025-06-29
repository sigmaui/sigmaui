<template>
  <div :class="classes.getClass('root')">
    <h1 :class="classes.getClass('title')">Welcome to SigmaUI Documentation</h1>
    <p :class="classes.getClass('subtitle')">This is the home page of the documentation site.</p>
    
    <div :class="classes.getClass('componentsSection')">
      <h2 :class="classes.getClass('sectionTitle')">Components</h2>
      <nav :class="classes.getClass('componentsNav')">
        <div 
          v-for="component in components" 
          :key="component.name"
          :class="classes.getClass('componentCard')"
        >
          <div :class="classes.getClass('componentHeader')">
            <h3 :class="classes.getClass('componentTitle')">{{ component.title }}</h3>
            <p :class="classes.getClass('componentDescription')">{{ component.description }}</p>
          </div>
          <component :is="component.preview" />
          <router-link :to="component.docsLink" :class="classes.getClass('viewDocsLink')">
            View Documentation →
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { homeStyles, HomeTypes } from './xStyles.ts';

interface ComponentItem {
  name: string;
  title: string;
  description: string;
  preview: any;
  docsLink: string;
}
</script>

<script setup lang="ts">
import { withStyleX } from '@packages/vue/hooks/with-stylex';
import ButtonPreview from '../components/button/preview/index.vue';
import SelectPreview from '../components/select/preview/index.vue';
import SegmentGroupPreview from '../components/segment-group/preview/index.vue';

const { classes } = withStyleX(homeStyles)({
  displayName: 'Home',
  rawProps: {}
});

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
  }
];
</script> 