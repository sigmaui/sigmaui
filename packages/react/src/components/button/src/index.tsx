import React from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import { withStyleX } from '@packages/react/hooks/with-stylex';

import type { ButtonProps } from './types';
import type { ButtonTypes, ButtonKeys } from './xStyles';

import { buttonStyles } from './xStyles';

export type {
  ButtonTypes,
  ButtonKeys
}

export {
  buttonStyles
}

const SigmaButton: FC<ButtonProps<ButtonTypes>> = ({
  prefixCls,
  className,
  children,
  classes,
  classX,
  customStyles = {}
}) => {
  return (
    <button
      className={clsx(prefixCls, className, classes.getClass('root', 'size', 'type', classX, customStyles.root))}
    >
      {children}
    </button>
  )
}

SigmaButton.displayName = 'Button';

export default withStyleX(buttonStyles)(SigmaButton)