import React from 'react';
import type { FC } from 'react';
import { clsx } from 'clsx';
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
      className={clsx(prefixCls, className, classes.getClass('root', 'size', 'type', xClass, styles.root))}
    >
      {children}
    </button>
  )
}

SigmaButton.displayName = 'Button';

export default withStyleX(buttonStyles)(SigmaButton)