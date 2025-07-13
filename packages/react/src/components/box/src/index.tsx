import React from 'react';
import type { FC } from 'react';
import { clsx } from 'clsx';
import { withStyles } from '@microui-kit/with-styles';

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

const SigmaBox: FC<ButtonProps<ButtonTypes>> = ({
  prefixCls = 'sm-box',
  className,
  children,
  classes,
  styles = {}
}) => {
  return (
    <button
      className={clsx(prefixCls, className)}
    >
      {children}
    </button>
  )
}

SigmaBox.displayName = 'Box';

export default withStyles(buttonStyles)(SigmaBox)