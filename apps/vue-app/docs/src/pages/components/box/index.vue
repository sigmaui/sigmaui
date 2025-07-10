<template>
  <div :class="classes.getClass('root')">
    <BoxMdx/>
    <h1>Box Component</h1>
    <p>This is the documentation page for the Box component.</p>

    <BoxPreview/>

    <nav :class="classes.getClass('nav')">
      <router-link to="/" :class="classes.getClass('navLink')">Back to Home</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { boxPageStyles, BoxPageTypes } from './xStyles.ts';
</script>

<script setup lang="ts">
import { withStyleX } from '@packages/vue/hooks/with-stylex';
import BoxMdx from '../../../docs/components/box.mdx';
import BoxPreview from './preview/index.vue';

const { classes } = withStyleX(boxPageStyles)({
  displayName: 'BoxPage',
  rawProps: {}
});
</script> 