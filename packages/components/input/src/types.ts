import type React from 'react';
import type { InputProps as RcInputProps, InputRef as RcInputRef } from '@rc-component/input';
import type { InputFocusOptions as RcInputFocusOptions } from '@rc-component/input/lib/utils/commonUtils';
import type { ComponentBaseProps } from '@sigma-ui-kit/theme';

export type SemanticName = 'prefix' | 'suffix' | 'input' | 'count' | 'affixWrapper';

type SizeKeys = 'small' | 'default';
type StatusKeys = 'error' | 'warning';

export type InputFocusOptions = RcInputFocusOptions;
export type InputRef = RcInputRef;

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

export interface VisibilityToggle {
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
}

export interface PasswordProps extends Omit<InputProps, 'suffix'> {
  readonly inputPrefixCls?: string;
  readonly action?: 'click' | 'hover';
  visibilityToggle?: boolean | VisibilityToggle;
  iconRender?: (visible: boolean) => React.ReactNode;
}

export type IconPropsType = React.HTMLAttributes<HTMLSpanElement> & React.Attributes;
