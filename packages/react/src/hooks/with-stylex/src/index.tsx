import React, { ReactElement } from 'react';
import { useStyleX, type Classes } from '@sigmaui-kit/use-stylex';
import { useTheme, type ThemeContextProps } from '@packages/react/hooks/use-theme';
import type { Theme } from '@stylexjs/stylex';

import { position } from 'packages/common/theme/tailwind/position';
import { display } from 'packages/common/theme/tailwind/display';
import { cursor } from 'packages/common/theme/tailwind/cursor';

interface WithStyleXParams {
  isWithAttrs?: boolean;
  tailwindStyles?: any;
}

export const withStyleX = <T extends Record<string, unknown>>(
  xStyles: T,
  params: WithStyleXParams = {}
) => {
  return (Component: any) => {
    const componentName = Component.displayName || Component.name;

    const WrappedComponent = (props: any): ReactElement => {
      const { theme, themeVariant = {}, themeConfig = {} } = useTheme() as ThemeContextProps;
      console.log('theme withStyleX', themeVariant, themeConfig);

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

      if (color) {
        (xStyles as any).color = themeVariant.colors?.[color];
      }

      if (size) {
        (xStyles as any).size = themeVariant.sizes?.[size];
      }

      if (type) {
        (xStyles as any).type = themeVariant.types?.[type];
      }

      const { tailwindStyles = {}, ...restParams } = params;

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

      console.log('restProps', restProps)

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

export default withStyleX