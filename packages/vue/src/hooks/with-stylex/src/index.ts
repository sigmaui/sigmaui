import { useStyleX } from '@sigmaui-kit/use-stylex';
import { useTheme, type ThemeContextProps } from '@packages/vue/hooks/use-theme';
import type { Theme } from '@stylexjs/stylex';

import { position } from 'packages/common/theme/tailwind/position';
import { display } from 'packages/common/theme/tailwind/display';
import { cursor } from 'packages/common/theme/tailwind/cursor';

interface WithStyleXParams {
  isWithAttrs?: boolean;
  tailwindStyles?: any;
}

interface Params<T = any> {
  displayName?: string;
  rawProps: T;
}

export const withStyleX = <T extends Record<string, unknown>>(
  xStyles: T,
  xParams: WithStyleXParams = {}
) => {
  return <P extends Record<string, any>>(params: Params<P>) => {
    const { displayName } = params;
    const componentName = displayName;

    const rawProps = Object.fromEntries(
      Object.entries(params.rawProps).filter(([_, value]) => value !== undefined)
    ) as P;

    console.log('rawProps', rawProps)

    const { theme, themeTokens = {}, themeConfig = {} } = useTheme() as ThemeContextProps || {};
    // console.log('theme withStyleX', themeTokens, themeConfig);

    let props: P = rawProps;

    if (componentName) {
      const defaultProps = themeConfig.components?.[componentName]?.defaultProps;

      if (defaultProps) {
        if (typeof defaultProps === 'function') {
          props = {
            ...(defaultProps(theme as Theme<any, any>) || {}),
            ...rawProps
          } as P;
        } else {
          props = { ...defaultProps, ...rawProps } as P;
        }
      }
    }

    // console.log('props withStyleX', props);

    const { type, size, color, variant, ...restProps } = props;

    if (type) {
      (xStyles as any).type = themeTokens.types?.[type];
    }

    if (size) {
      (xStyles as any).size = themeTokens.sizes?.[size];
    }

    if (color) {
      (xStyles as any).color = themeTokens.colors?.[color];
    }

    if (variant) {
      (xStyles as any).variant = themeTokens.variants?.[variant];
    }

    const { tailwindStyles = {}, ...restParams } = xParams;

    console.log('xStyles', xStyles)

    const { classes } = useStyleX(xStyles, {
      ...restParams,
      tailwindStyles: {
        ...position,
        ...display,
        ...cursor,
        ...tailwindStyles
      },
      theme
    });

    return {
      classes,
      props: restProps
    }
  };
}

export default withStyleX