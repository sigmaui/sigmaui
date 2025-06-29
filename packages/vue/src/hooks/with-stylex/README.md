# @sigmaui-kit/v-with-stylex

A Vue 3 composable for integrating StyleX with Vue components, converted from the React HOC pattern.

## Installation

```bash
npm install @sigmaui-kit/v-with-stylex
```

## Usage

### Basic Usage

```vue
<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useWithStyleX } from '@sigmaui-kit/v-with-stylex';

// Define your components
const xStyles = {
  base: {
    padding: '1rem',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontWeight: '500',
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
```

### Advanced Usage with Theme Injection

First, set up your theme provider:

```vue
<!-- App.vue -->
<template>
  <ThemeProvider>
    <App />
  </ThemeProvider>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import { THEME_KEY, THEME_VARIANT_KEY, THEME_CONFIG_KEY } from '@sigmaui-kit/v-with-stylex';

// Provide theme data
provide(THEME_KEY, theme);
provide(THEME_VARIANT_KEY, themeVariant);
provide(THEME_CONFIG_KEY, themeConfig);
</script>
```

Then use in your components:

```vue
<script setup lang="ts">
import { useWithStyleX } from '@sigmaui-kit/v-with-stylex';

const { createClasses, theme, themeVariant, themeConfig } = useWithStyleX({
  xStyles,
  componentName: 'MyComponent',
  params: {
    tailwindStyles: {
      // Additional tailwind components
    },
  },
});

const classes = createClasses(props);
</script>
```

## API

### `useWithStyleX(options)`

#### Options

- `xStyles` (required): Your StyleX styles object
- `componentName` (optional): Name of the component for theme configuration lookup
- `params` (optional): Additional parameters
  - `isWithAttrs` (boolean): Whether to include attributes
  - `tailwindStyles` (object): Additional tailwind styles

#### Returns

- `createClasses(props)`: Function that returns a computed ref with processed classes
- `processProps(props)`: Function that processes component props
- `theme`: Injected theme object
- `themeVariant`: Injected theme variant object
- `themeConfig`: Injected theme configuration object

### Injection Keys

- `THEME_KEY`: For injecting the main theme object
- `THEME_VARIANT_KEY`: For injecting theme variants
- `THEME_CONFIG_KEY`: For injecting theme configuration

## Migration from React

This composable is a Vue 3 equivalent of the React HOC pattern. Key differences:

1. **Composable instead of HOC**: Uses Vue's Composition API instead of wrapping components
2. **Reactive classes**: Returns computed refs that automatically update when props change
3. **Vue injection**: Uses Vue's provide/inject system instead of React context
4. **Template integration**: Classes are applied directly in the template with `:class`

## Examples

See the `example.vue` file for a complete working example. 