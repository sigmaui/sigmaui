import React, { ReactElement } from 'react';
// import { useStyleX, type Classes } from '@sigmaui-kit/use-stylex';
import { type Classes, useStyleX } from '@packages/common/hooks/use-stylex';
import { type ThemeContextProps, useTheme } from '@packages/react/hooks/use-theme';
import type { Theme } from '@stylexjs/stylex';

import { position } from '@sigmaui-kit/theme-tailwind/position.stylex';
import { display } from '@sigmaui-kit/theme-tailwind/display.stylex';
import { cursor } from '@sigmaui-kit/theme-tailwind/cursor.stylex';

interface WithStyleXParams {
  isWithAttrs?: boolean;
  tailwindStyles?: any;
}

export const withStyleX = <T extends Record<string, unknown>>(xStylesProp: T, params: WithStyleXParams = {}) => {
  const xStyles = {
    ...xStylesProp,
  };

  return (Component: any) => {
    const componentName = Component.displayName || Component.name;

    const WrappedComponent = (props: any): ReactElement => {
      const { theme, themeTokens = {}, themeConfig = {} } = useTheme() as ThemeContextProps;
      console.log('theme withStyleX', themeTokens, themeConfig);

      let domProps = props;

      if (componentName) {
        const defaultProps = themeConfig.components?.[componentName]?.defaultProps;

        if (defaultProps) {
          if (typeof defaultProps === 'function') {
            domProps = {
              ...(defaultProps(theme as Theme<any, any>) || {}),
              ...props,
            };
          } else {
            domProps = { ...defaultProps, ...props };
          }
        }
      }

      const { color, size, type, ...restProps } = domProps;

      if (color) {
        (xStyles as any).color = themeTokens.colors?.[color];
      }

      if (size) {
        (xStyles as any).size = themeTokens.sizes?.[size];
      }

      if (type) {
        (xStyles as any).type = themeTokens.types?.[type];
      }

      const { tailwindStyles = {}, ...restParams } = params;

      const { classes } = useStyleX(xStyles, {
        ...restParams,
        tailwindStyles: {
          // ...position,
          // ...display,
          // ...cursor,
          ...tailwindStyles,
        },
        theme,
      });

      console.log('restProps', restProps);

      return (
        <Component
          {...restProps}
          classes={classes as Classes<any>}
        />
      );
    };

    WrappedComponent.displayName = componentName;

    return WrappedComponent;
  };
};

export default withStyleX;
