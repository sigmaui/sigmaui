'use client';

import React from 'react';
import { classnames, useDefaultProps } from '@sigma-ui-kit/theme';

import type { ButtonProps, SematicName } from './types';
import styleFn from './styles';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((inProps, ref) => {
  const {
    loading,
    prefix,
    suffix,
    htmlType,
    asLink: Link,
    children,
    className,
    locking,
    disabled,
    classes,
    variant,
    tone,
    size,
    href,
    loadingProps,
    prefixCls,
    rootPrefixCls,
    ...restProps
  } = useDefaultProps<SematicName, ButtonProps>({
    props: inProps,
    defaultProps: {
      variant: 'primary',
      tone: 'brand',
      size: 'standard',
    },
    name: 'Button',
    styleFn,
  });

  const mergePrefix = loading ? (
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
  ) : (
    prefix
  );

  const mergeSuffix = locking ? (
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
  ) : (
    suffix
  );

  const buttonNode = (
    <button
      type={htmlType}
      ref={ref}
      className={classnames(
        prefixCls,
        `${prefixCls}-${variant}`,
        `${prefixCls}-${tone}`,
        `${prefixCls}-${size}`,
        disabled && `${prefixCls}-disabled`,
        classes?.wrapper,
        className
      )}
      disabled={disabled || loading || locking}
      {...restProps}
    >
      {mergePrefix && <div className={classes?.prefix}>{mergePrefix}</div>}
      {children}
      {mergeSuffix && <div className={classes?.suffix}>{mergeSuffix}</div>}
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
});

if (process.env.NODE_ENV !== 'production') {
  Button.displayName = 'Button';
}

export default Button;
