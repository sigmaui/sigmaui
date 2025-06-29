<template>
  <div :class="classes.getClass('root')">
    <div :class="classes.getClass('container')">
      <div :class="classes.getClass('errorCode')">404</div>
      <h1 :class="classes.getClass('title')">Page Not Found</h1>
      <p :class="classes.getClass('description')">
        The page you're looking for doesn't exist or has been moved.
      </p>
      
      <div :class="classes.getClass('actions')">
        <router-link :to="'/'" :class="classes.getClass('homeLink')">
          ← Back to Home
        </router-link>
        <router-link :to="'/docs/components'" :class="classes.getClass('componentsLink')">
          Browse Components
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { notFoundStyles, NotFoundTypes } from './xStyles.ts';
</script>

<script setup lang="ts">
import { withStyleX } from '@packages/vue/hooks/with-stylex';

const { classes } = withStyleX(notFoundStyles)({
  displayName: 'NotFound',
  rawProps: {}
});
</script> 