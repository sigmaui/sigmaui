import React from 'react';
import type { FC } from 'react';

import classNames from 'classnames';

import { ComponentForwardProps, withStyles } from '@sigma-ui-kit/theme';

import { ButtonBaseProps, ClassKeys } from './types';
import styles from './styles';

const Button: FC<ButtonBaseProps & ComponentForwardProps<ClassKeys>> = ({
  prefixCls,
  className,
  children,
  classes,
  htmlType,
  href,
  asLink: Link,
  loading,
  locking,
  disabled,
  prefix,
  suffix,
  loadingProps = {},
  variant,
  tone,
  size,
  ...buttonProps
}) => {
  if (loading) {
    prefix = (
      <div
        style={{
          width: 20,
          height: 20,
          border: '2px solid rgba(255,255,255,0.2)',
          borderLeftColor: '#fff',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
        {...loadingProps}
      />
    );
  }

  if (locking) {
    suffix = (
      <div
        style={{
          width: 6,
          height: 6,
          backgroundColor: '#fff',
          borderRadius: '50%',
          animation: 'pulse 1s ease-in-out infinite',
        }}
        {...loadingProps}
      />
    );
  }

  const buttonNode = (
    <button
      type={htmlType}
      className={classNames(
        prefixCls,
        `${prefixCls}-${variant}`,
        `${prefixCls}-${tone}`,
        `${prefixCls}-${size}`,
        disabled && `${prefixCls}-disabled`,
        classes?.wrapper,
        className
      )}
      disabled={disabled || loading || locking}
      {...buttonProps}
    >
      {prefix && <div className={classes?.prefix}>{prefix}</div>}
      {children}
      {suffix && <div className={classes?.suffix}>{suffix}</div>}
    </button>
  );

  if (href && Link) {
    return (
      <Link to={href} className={classes?.link}>
        {buttonNode}
      </Link>
    );
  }

  return buttonNode;
};

Button.displayName = 'Button';

export default withStyles<ButtonBaseProps, ClassKeys>(styles, {
  defaultProps: {
    variant: 'primary',
    tone: 'brand',
    size: 'standard',
  },
})(Button);
