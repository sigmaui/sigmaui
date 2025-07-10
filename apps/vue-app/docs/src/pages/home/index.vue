<template>
  <div :class="classes.getClass('root')">
    <h1 :class="classes.getClass('title')">Welcome to SigmaUI Documentation</h1>
    <p :class="classes.getClass('subtitle')">This is the home page of the documentation site.</p>
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

const { classes } = withStyleX(homeStyles)({
  displayName: 'Home',
  rawProps: {}
});
</script> 