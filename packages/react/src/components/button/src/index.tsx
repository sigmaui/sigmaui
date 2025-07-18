import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { withStyles } from '@microui-kit/with-styles';

import { styles, type ButtonProps } from 'packages/common/components/button/styles';

const SigmaButton: FC<ButtonProps> = ({
  prefixCls = 'sm-button',
  className,
  children,
  classes
}) => {
  return (
    <button
      className={classNames(prefixCls, className, classes?.wrapper)}
    >
      {children}
    </button>
  )
}

SigmaButton.displayName = 'Button';

export default withStyles<ButtonProps>(styles)(SigmaButton)