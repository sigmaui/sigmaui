import React from 'react';
// import { useStyleX } from 'use-stylex';
import { useStyleX } from 'packages/common/hooks/use-stylex';
import { useTheme } from '@packages/react/hooks/use-theme';

export const withStyleX = <T extends Record<string, any>>(
  xStyles: T,
  params?: { isWithAttrs?: boolean }
) => {
  return (Component: any) => {
    const componentName = Component.displayName || Component.name;

    return (props: any = {}) => {
      const { theme, themeConfig = {} } = useTheme();
      console.log('theme withStyleX', themeConfig);

      const { ...restProps } = props;

      let domProps = restProps;

      if (componentName) {
        const defaultProps = themeConfig.components?.[componentName]?.defaultProps;

        if (defaultProps) {
          if (typeof defaultProps === 'function') {
            domProps = { ...(defaultProps(theme) || {}), ...restProps }
          } else {
            domProps = { ...defaultProps, ...restProps }
          }
        }
      }

      const { classes } = useStyleX(xStyles, {
        ...params,
        theme
      });

      return (
        <Component
          {...domProps}
          classes={classes}
        />
      );
    };
  };
};

export default withStyleX