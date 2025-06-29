<template>
  <div :class="classes.getClass('root')">
    <h1>Table Component</h1>
    <p>This is the documentation page for the Table component.</p>
    
    <TablePreview />
    
    <nav :class="classes.getClass('nav')">
      <router-link to="/" :class="classes.getClass('navLink')">Back to Home</router-link>
      <router-link to="/docs/components/button" :class="classes.getClass('navLink')">Button Component</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { tablePageStyles, TablePageTypes } from './xStyles.ts';
</script>

<script setup lang="ts">
import { withStyleX } from '@packages/vue/hooks/with-stylex';
import TablePreview from './preview/index.vue';

const { classes } = withStyleX(tablePageStyles)({
  displayName: 'SelectPage',
  rawProps: {}
});
</script> 