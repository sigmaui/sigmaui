<template>
  <div :class="classes.getClass('root')">
    <ButtonMdx/>

    <ButtonPreview/>

    <nav :class="classes.getClass('nav')">
      <router-link to="/" :class="classes.getClass('navLink')">Back to Home</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { buttonPageStyles, ButtonPageTypes } from './xStyles.ts';
</script>

<script setup lang="ts">
import { withStyleX } from '@packages/vue/hooks/with-stylex';
import ButtonMdx from '../../../docs/components/button.mdx';
import ButtonPreview from './preview/index.vue';

const { classes } = withStyleX(buttonPageStyles)({
  displayName: 'ButtonPage',
  rawProps: {}
});
</script>