import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { withStyles } from '@microui-kit/with-styles';

import type { ButtonProps } from './types';

import { styles, type ButtonTypes } from 'packages/common/components/button/styles';

type Props = ButtonProps<ButtonTypes>;

const SigmaButton: FC<Props> = ({
  prefixCls = 'sm-button',
  className,
  children,
  classes
}) => {
  return (
    <button
      className={classNames(prefixCls, className, classes.wrapper)}
    >
      {children}
    </button>
  )
}

SigmaButton.displayName = 'Button';

export default withStyles<Props>(styles<Props>)(SigmaButton)