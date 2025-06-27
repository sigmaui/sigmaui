import React from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import { withStyleX } from '@packages/react/hooks/with-stylex';

import type { ButtonProps } from './types';
import type { ButtonTypes, ButtonKeys } from 'packages/common/styles/button/xStyles';

import { buttonStyles } from 'packages/common/styles/button/xStyles';

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
  classX,
  styles = {}
}) => {
  return (
    <button
      className={clsx(prefixCls, className, classes.getClass('root', 'size', 'type', classX, styles.root))}
    >
      {children}
    </button>
  )
}

SigmaButton.displayName = 'Button';

export default withStyleX(buttonStyles)(SigmaButton)