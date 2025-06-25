import React from 'react';
// import { useStyleX } from 'use-stylex';
import { useStyleX } from 'packages/common/hooks/use-stylex';
import { useTheme } from '@packages/react/hooks/use-theme';

export const withStyleX = <T extends Record<string, any>>(
  xStyles: T,
  params?: { isWithAttrs?: boolean }
) => {
  return (Component: any) => {
    return (props: any) => {
      const { theme, themeConfig } = useTheme();
      console.log('theme withStyleX', themeConfig);

      const { classes } = useStyleX(xStyles, {
        ...params,
        theme
      });

      return (
        <Component
          {...(props)}
          classes={classes}
        />
      );
    };
  };
};

export default withStyleX