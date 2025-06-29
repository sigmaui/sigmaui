<template>
  <div :class="classes.getClass('root')">
    <h1>Select Component</h1>
    <p>This is the documentation page for the Select component.</p>
    
    <SelectPreview />
    
    <nav :class="classes.getClass('nav')">
      <router-link to="/" :class="classes.getClass('navLink')">Back to Home</router-link>
      <router-link to="/docs/components/button" :class="classes.getClass('navLink')">Button Component</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { selectPageStyles, SelectPageTypes } from './xStyles.ts';
</script>

<script setup lang="ts">
import { withStyleX } from '@packages/vue/hooks/with-stylex';
import SelectPreview from './preview/index.vue';

const { classes } = withStyleX(selectPageStyles)({
  displayName: 'SelectPage',
  rawProps: {}
});
</script> 