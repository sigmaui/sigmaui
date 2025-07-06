import React from 'react';
import type { FC } from 'react';
import { withStyleX } from '@packages/react/hooks/with-stylex';

import type { ButtonProps } from './types';

import {
  buttonStyles,
  type ButtonTypes,
  type ButtonKeys
} from 'packages/common/components/button/xStyles';

export type {
  ButtonTypes,
  ButtonKeys
}

export {
  buttonStyles
}

const SigmaButton: FC<ButtonProps<ButtonTypes>> = ({
  prefixCls = 'sm-button',
  className,
  children,
  classes,
  xClass,
  styles = {}
}) => {
  return (
    <button
      className={classes.getClass(prefixCls, className, 'root', 'size', 'type', xClass, styles.root)}
    >
      {children}
    </button>
  )
}

SigmaButton.displayName = 'Button';

export default withStyleX(buttonStyles)(SigmaButton)