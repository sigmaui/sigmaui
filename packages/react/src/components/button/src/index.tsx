import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { withStyles } from '@microui-kit/with-styles';

import { styles, type ButtonProps } from 'packages/common/components/button/styles';

const SigmaButton: FC<ButtonProps> = ({
  prefixCls = 'sm-button',
  className,
  children,
  classes,
  href
}) => {
  const buttonEl = (
    <button
      className={classNames(prefixCls, className, classes?.wrapper)}
    >
      {children}
    </button>
  );

  if (href) {
    return (
      <Link
        to={href}
      >
        {buttonEl}
      </Link>
    )
  }

  return buttonEl
}

SigmaButton.displayName = 'Button';

export default withStyles<ButtonProps>(styles)(SigmaButton)