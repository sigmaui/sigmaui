import React, { forwardRef, useRef } from 'react';
import type { InputRef, InputProps as RcInputProps } from '@rc-component/input';
import RcInput from '@rc-component/input';
import { triggerFocus } from '@rc-component/input/lib/utils/commonUtils';
import type { InputFocusOptions } from '@rc-component/input/lib/utils/commonUtils';
import { composeRef } from '@rc-component/util/lib/ref';
import { classnames, useDefaultProps } from '@sigma-ui-kit/theme';
import type { ComponentBaseProps } from '@sigma-ui-kit/theme';
import CircleXmarkFilledIcon from '@sigma-ui-kit/icons/CircleXmarkFilledIcon';

import styleFn from './styles';

export type { InputFocusOptions };
export type { InputRef };
export { triggerFocus };

export type SemanticName = 'prefix' | 'suffix' | 'input' | 'count' | 'affixWrapper';

type SizeKeys = 'small' | 'default';
type StatusKeys = 'error' | 'warning';

export interface InputProps
  extends Omit<
      RcInputProps,
      | 'wrapperClassName'
      | 'groupClassName'
      | 'inputClassName'
      | 'affixWrapperClassName'
      | 'classes'
      | 'addonAfter'
      | 'addonBefore'
      | 'classNames'
      | 'styles'
      | 'prefixCls'
    >,
    ComponentBaseProps<SemanticName> {
  rootClassName?: string;
  size?: SizeKeys;
  disabled?: boolean;
  status?: StatusKeys;
  [key: `data-${string}`]: string | undefined;
}

const Input = forwardRef<InputRef, InputProps>((inProps, ref) => {
  const props = useDefaultProps<SemanticName, InputProps>({
    props: inProps,
    defaultProps: {
      size: 'default',
    },
    name: 'Input',
    styleFn,
  });

  const {
    prefixCls,
    status,
    size,
    disabled,
    onBlur,
    onFocus,
    suffix,
    allowClear,
    className,
    style,
    rootClassName,
    onChange,
    classes,
    count,
    rootPrefixCls,
    direction,
    ...rest
  } = props;

  const inputRef = useRef<InputRef>(null);

  const mergeCount = count ? { ...count, show: true } : undefined;

  // ===================== Remove Password value =====================
  // const removePasswordTimeout = useRemovePasswordTimeout(inputRef, true);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // removePasswordTimeout();
    onBlur?.(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    // removePasswordTimeout();
    onFocus?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // removePasswordTimeout();
    onChange?.(e);
  };

  const mergedAllowClear =
    allowClear && !disabled
      ? {
          clearIcon:
            typeof allowClear === 'object' ? allowClear.clearIcon : <CircleXmarkFilledIcon />,
        }
      : undefined;

  return (
    <RcInput
      ref={composeRef(ref, inputRef)}
      prefixCls={prefixCls}
      {...rest}
      disabled={disabled}
      onBlur={handleBlur}
      onFocus={handleFocus}
      style={{ ...style }}
      allowClear={mergedAllowClear}
      className={classnames(className, rootClassName)}
      onChange={handleChange}
      classNames={{
        input: classnames(
          {
            [`${prefixCls}-sm`]: size === 'small',
            [`${prefixCls}-md`]: size === 'default',
            [`${prefixCls}-rtl`]: direction === 'rtl',
          },
          classes.input
        ),
        variant: classnames({ [`${prefixCls}-status-${status}`]: status }),
        affixWrapper: classnames(
          {
            [`${prefixCls}-affix-wrapper-sm`]: size === 'small',
            [`${prefixCls}-affix-wrapper-md`]: size === 'default',
            [`${prefixCls}-affix-wrapper-rtl`]: direction === 'rtl',
          },
          classes.affixWrapper
        ),

        count: classnames(
          {
            [`${prefixCls}-count-sm`]: size === 'small',
            [`${prefixCls}-count-md`]: size === 'default',
            [`${prefixCls}-count-rtl`]: direction === 'rtl',
          },
          classes.count
        ),
        prefix: classnames(
          {
            [`${prefixCls}-prefix-sm`]: size === 'small',
            [`${prefixCls}-prefix-md`]: size === 'default',
            [`${prefixCls}-prefix-rtl`]: direction === 'rtl',
          },
          classes.prefix
        ),
        suffix: classnames(
          {
            [`${prefixCls}-suffix-sm`]: size === 'small',
            [`${prefixCls}-suffix-md`]: size === 'default',
            [`${prefixCls}-suffix-rtl`]: direction === 'rtl',
          },
          classes.suffix
        ),
      }}
      count={mergeCount}
      suffix={suffix}
      maxLength={mergeCount?.max}
    />
  );
});

if (process.env.NODE_ENV !== 'production') {
  Input.displayName = 'Input';
}

export default Input;
