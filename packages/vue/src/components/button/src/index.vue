<script lang="ts">
import { clsx } from 'clsx';
import { buttonStyles, ButtonTypes } from 'packages/common/components/button/xStyles';

const prefixCls = 'sm-button';
</script>

<script setup lang="ts">
import { useTheme } from '@packages/vue/hooks/use-theme';
import { withStyleX } from '@packages/vue/hooks/with-stylex';

import type { ButtonProps } from './types';

const rawProps = defineProps<ButtonProps<ButtonTypes>>();

const { classes, props } = withStyleX(buttonStyles)({
  displayName: 'Button',
  rawProps
});

const {
  className,
  xClass,
  styles = {}
} = props;

console.log('xClass', xClass)

const data = useTheme();

console.log('data', data)
</script>

<template>
  <button :class="clsx(prefixCls, className, classes.getClass('root', 'size', 'type', xClass, styles.root))">
    <slot/>
  </button>
</template>