import React, { ComponentType, ReactElement } from 'react';
// import { useStyleX } from 'use-stylex';
import { useStyleX, type Classes } from 'packages/common/hooks/use-stylex';
import { useTheme } from '@packages/react/hooks/use-theme';
import type { ThemeContextType } from '@packages/react/hooks/use-theme';
import type { Theme } from '@stylexjs/stylex';

interface WithStyleXParams {
  isWithAttrs?: boolean;
}

export const withStyleX = <T extends Record<string, unknown>>(
  xStyles: T,
  params?: WithStyleXParams
) => {
  return (Component: any) => {
    const componentName = Component.displayName || Component.name;

    const WrappedComponent = (props: any): ReactElement => {
      const { theme, themeVariant = {}, themeConfig = {} } = useTheme() as ThemeContextType;
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

      const { color, size, variant, ...restProps } = domProps;

      if (color) {
        (xStyles as any).color = themeVariant.colors?.[color];
      }

      if (size) {
        (xStyles as any).size = themeVariant.sizes?.[size];
      }

      if (variant) {
        (xStyles as any).variant = themeVariant.variants?.[variant];
      }

      const { classes } = useStyleX(xStyles, {
        ...params,
        theme
      });

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