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
  href,
  loading,
  locking,
  disabled,
  prefix,
  suffix,
}) => {
  if (loading) {
    prefix = 'Loading'
  }

  const buttonEl = (
    <button
      className={classNames(prefixCls, className, classes?.wrapper)}
      disabled={disabled || loading || locking}
    >
      {
        prefix
        &&
        <div className={classes?.prefix}>{prefix}</div>
      }
      {children}
      {
        suffix
        &&
        <div className={classes?.suffix}>{suffix}</div>
      }
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