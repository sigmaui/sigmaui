import React from 'react';
import { useStyleX } from 'use-stylex';
import { useTheme } from '../../use-theme/src';

export const withStyleX = <T extends Record<string, any>>(
  xStyles: T,
  params?: { isWithAttrs?: boolean }
) => {
  return (Component: any) => {
    return (props: any) => {
      const { theme } = useTheme();
      console.log('theme withStyleX', theme)
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