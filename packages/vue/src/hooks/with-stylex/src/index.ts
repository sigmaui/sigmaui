import { computed, inject, type ComputedRef, type InjectionKey } from 'vue';
import { useStyleX, type Classes } from '@sigmaui-kit/use-stylex';
import type { Theme } from '@stylexjs/stylex';

import { position } from 'packages/common/theme/tailwind/position';
import { display } from 'packages/common/theme/tailwind/display';
import { cursor } from 'packages/common/theme/tailwind/cursor';

// Define injection keys for theme
export const THEME_KEY: InjectionKey<Theme<any, any>> = Symbol('theme');
export const THEME_VARIANT_KEY: InjectionKey<any> = Symbol('themeVariant');
export const THEME_CONFIG_KEY: InjectionKey<any> = Symbol('themeConfig');

interface WithStyleXParams {
  isWithAttrs?: boolean;
  tailwindStyles?: any;
}

interface ComponentProps {
  color?: string;
  size?: string;
  type?: string;
  [key: string]: any;
}

interface UseWithStyleXOptions {
  xStyles: any;
  componentName?: string;
  params?: WithStyleXParams;
}

export const useWithStyleX = (options: UseWithStyleXOptions) => {
  const { xStyles, componentName, params = {} } = options;

  // Inject theme from Vue context
  const theme = inject(THEME_KEY);
  const themeVariant = inject(THEME_VARIANT_KEY, {});
  const themeConfig = inject(THEME_CONFIG_KEY, {});

  console.log('theme useWithStyleX', themeVariant, themeConfig);

  const processProps = (props: ComponentProps) => {
    let domProps = props;

    if (componentName) {
      const defaultProps = themeConfig.components?.[componentName]?.defaultProps;

      if (defaultProps) {
        if (typeof defaultProps === 'function') {
          domProps = {
            ...(defaultProps(theme as Theme<any, any>) || {}),
            ...props
          };
        } else {
          domProps = { ...defaultProps, ...props };
        }
      }
    }

    const { color, size, type, ...restProps } = domProps;

    // Create a copy of xStyles to avoid mutating the original
    const processedStyles = { ...xStyles };

    if (color) {
      processedStyles.color = themeVariant.colors?.[color];
    }

    if (size) {
      processedStyles.size = themeVariant.sizes?.[size];
    }

    if (type) {
      processedStyles.type = themeVariant.types?.[type];
    }

    return { processedStyles, restProps };
  };

  const createClasses = (props: ComponentProps): ComputedRef<Classes<any>> => {
    return computed(() => {
      const { processedStyles, restProps } = processProps(props);
      
      const { tailwindStyles = {}, ...restParams } = params;

      const { classes } = useStyleX(processedStyles, {
        ...restParams,
        tailwindStyles: {
          ...position,
          ...display,
          ...cursor,
          ...tailwindStyles
        },
        theme
      });

      console.log('restProps', restProps);

      return classes as Classes<any>;
    });
  };

  return {
    createClasses,
    processProps,
    theme,
    themeVariant,
    themeConfig
  };
};

// Alternative: Direct composable for simpler use cases
export const withStyleX = (xStyles: any, params: WithStyleXParams = {}) => {
  return useWithStyleX({ xStyles, params });
};

export default useWithStyleX;