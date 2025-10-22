import React from 'react';
import type { JSX } from 'react/jsx-runtime';
import type { ComponentForwardProps } from '@sigma-ui-kit/theme';
import { classnames, withStyles } from '@sigma-ui-kit/theme';

import type { ClassKeys, BoxBaseProps } from './types';
import styles from './styles';

const Box = <T extends keyof JSX.IntrinsicElements = 'div'>({
  as,
  className,
  children,
  classes,
  prefixCls,
  renderer,
  ...rest
}: BoxBaseProps<T> & ComponentForwardProps<ClassKeys>) => {
  const Component = as || 'div';

  return React.createElement(
    Component as any,
    { className: classnames(prefixCls, classes?.root, className), ...rest },
    children
  );
};

Box.displayName = 'Box';

export default withStyles<BoxBaseProps<keyof JSX.IntrinsicElements>, ClassKeys>(styles)(Box);
