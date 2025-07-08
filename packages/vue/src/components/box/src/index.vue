<template>
  <component
      :is="as"
      :class="classes.getClass(prefixCls, 'root', className, classStr, xClass, styles.root)"
  >
    <slot/>
  </component>
</template>

<script lang="ts">
import { boxStyles, BoxTypes } from 'packages/common/components/box/xStyles';
</script>

<script setup lang="ts">
import { withStyleX } from '@packages/vue/hooks/with-stylex';

import type { BoxProps } from './types';

const rawProps = defineProps<BoxProps<BoxTypes>>();

const { classes, props } = withStyleX(boxStyles)({
  displayName: 'Box',
  rawProps
});

console.log('props', props)

const {
  prefixCls = 'sm-box',
  className,
  xClass,
  class: classStr,
  styles = {},
  as = 'div'
} = props;
</script>
