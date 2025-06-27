<template>
  <button :class="classes.getClass('root', 'size', 'type')">
    <slot/>
  </button>
</template>

<script lang="ts">
import { buttonStyles, ButtonTypes } from '../../../../../common/styles/button/xStyles';
</script>

<script setup lang="ts">
import { useStyleX } from '@sigmaui-kit/use-stylex';
import { useTheme } from '@packages/vue/hooks/use-theme';

import type { ButtonProps } from './types';

defineProps<ButtonProps<ButtonTypes>>();

const { classes } = useStyleX(buttonStyles);

const data = useTheme();

console.log('data', data)
</script>