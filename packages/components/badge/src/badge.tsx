'use client';

import React from 'react';
import { classnames, useDefaultProps } from '@sigma-ui-kit/theme';

import type { SemanticName, BadgeProps } from './types';
import styleFn from './styles';

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>((inProps, ref) => {
  const {
    classes,
    className,
    prefixCls,
    rootPrefixCls,
    direction,
    size,
    variant,
    tone,
    prefix,
    suffix,
    dot,
    label,

    ...rest
  } = useDefaultProps<SemanticName, BadgeProps>({
    props: inProps,
    defaultProps: {
      size: 'smaller',
      tone: 'brand',
      variant: 'outlined',
    },
    name: 'Badge',
    styleFn,
  });

  return (
    <span
      className={classnames(
        prefixCls,
        { [`${prefixCls}-${size}`]: size },
        { [`${prefixCls}-${variant}`]: variant },
        { [`${prefixCls}-${tone}`]: tone },
        { [`${prefixCls}-has-prefix`]: prefix },
        { [`${prefixCls}-has-suffix`]: suffix },
        { [`${prefixCls}-has-dot`]: dot },
        classes.root,
        className
      )}
      ref={ref}
      {...rest}
    >
      {prefix && (
        <span className={classnames(`${prefixCls}-prefix`, classes.prefix)}>{prefix}</span>
      )}
      {label}
      {suffix && (
        <span className={classnames(`${prefixCls}-suffix`, classes.suffix)}>{suffix}</span>
      )}
    </span>
  );
});

Badge.displayName = 'Badge';

export default Badge;
