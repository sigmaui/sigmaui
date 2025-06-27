<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useWithStyleX } from './index';

// Define your styles
const xStyles = {
  base: {
    padding: '1rem',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
  },
  variants: {
    color: {
      primary: {
        backgroundColor: 'var(--color-primary)',
        color: 'white',
      },
      secondary: {
        backgroundColor: 'var(--color-secondary)',
        color: 'white',
      },
    },
    size: {
      small: {
        padding: '0.5rem',
        fontSize: '0.875rem',
      },
      large: {
        padding: '1.5rem',
        fontSize: '1.125rem',
      },
    },
  },
};

// Define component props
interface Props {
  color?: 'primary' | 'secondary';
  size?: 'small' | 'large';
  type?: string;
  [key: string]: any;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  size: 'small',
});

// Use the composable
const { createClasses } = useWithStyleX({
  xStyles,
  componentName: 'StyledButton',
  params: {
    isWithAttrs: true,
  },
});

// Create reactive classes
const classes = createClasses(props);
</script> 