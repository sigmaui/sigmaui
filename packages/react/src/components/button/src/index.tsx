import React from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import { withStyleX } from '@packages/react/hooks/with-stylex';

import type { ButtonProps } from './types';
import type { StylesType } from './xStyles';

import xStyles from './xStyles';

const SigmaButton: FC<ButtonProps<StylesType>> = ({
  prefixCls,
  className,
  children,
  classes
}) => {
  return (
    <button
      className={clsx(prefixCls, className, classes.getClass('root'))}
    >
      {children}
    </button>
  )
}

SigmaButton.displayName = 'SigmaButton';

export default withStyleX(xStyles)(SigmaButton)