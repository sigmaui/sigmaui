import * as React from 'react';
import { useRef, useState } from 'react';
import omit from '@rc-component/util/lib/omit';
import { composeRef } from '@rc-component/util/lib/ref';
import EyeInvisibleOutlinedIcon from '@sigma-ui-kit/icons/EyeInvisibleOutlinedIcon';
import EyeVisibleOutlinedIcon from '@sigma-ui-kit/icons/EyeVisibleOutlinedIcon';
import Tooltip from '@sigma-ui-kit/tooltip';

import useRemovePasswordTimeout from './hooks/useRemovePasswordTimeout';
import type { InputProps, InputRef } from './Input';
import Input from './Input';

const defaultIconRender = (visible: boolean): React.ReactNode =>
  visible ? <EyeVisibleOutlinedIcon /> : <EyeInvisibleOutlinedIcon />;

interface VisibilityToggle {
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
}

export interface PasswordProps extends Omit<InputProps, 'suffix'> {
  readonly inputPrefixCls?: string;
  readonly action?: 'click' | 'hover';
  visibilityToggle?: boolean | VisibilityToggle;
  iconRender?: (visible: boolean) => React.ReactNode;
}

const actionMap: Record<PropertyKey, keyof React.DOMAttributes<HTMLSpanElement>> = {
  click: 'onClick',
  hover: 'onMouseOver',
};

type IconPropsType = React.HTMLAttributes<HTMLSpanElement> & React.Attributes;

const Password = React.forwardRef<InputRef, PasswordProps>((props, ref) => {
  const {
    disabled,
    action = 'click',
    visibilityToggle = true,
    iconRender = defaultIconRender,
  } = props;

  // ===================== Disabled =====================

  const visibilityControlled =
    typeof visibilityToggle === 'object' && visibilityToggle.visible !== undefined;
  const [visible, setVisible] = useState(() =>
    visibilityControlled ? visibilityToggle.visible! : false
  );
  const inputRef = useRef<InputRef>(null);

  React.useEffect(() => {
    if (visibilityControlled) {
      setVisible(visibilityToggle.visible!);
    }
  }, [visibilityControlled, visibilityToggle]);

  // Remove Password value
  const removePasswordTimeout = useRemovePasswordTimeout(inputRef);

  const onVisibleChange = () => {
    if (disabled) {
      return;
    }
    if (visible) {
      removePasswordTimeout();
    }

    const nextVisible = !visible;
    setVisible(nextVisible);

    if (typeof visibilityToggle === 'object') {
      visibilityToggle.onVisibleChange?.(nextVisible);
    }
  };

  const getIcon = (prefixCls: string) => {
    const iconTrigger = actionMap[action] || '';
    const iconLabel = disabled ? '' : visible ? 'Hide password' : 'Show password';
    const icon = iconRender(visible);
    const iconProps: IconPropsType = {
      [iconTrigger]: onVisibleChange,
      className: `${prefixCls}-icon`,
      key: 'passwordIcon',
      onMouseDown: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.preventDefault();
      },
      onMouseUp: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.preventDefault();
      },
    };
    return (
      <Tooltip placement="bottom" title={iconLabel}>
        {React.cloneElement<IconPropsType>(
          React.isValidElement<IconPropsType>(icon) ? icon : <span>{icon}</span>,
          iconProps
        )}
      </Tooltip>
    );
  };

  const {
    className,
    prefixCls: customizePrefixCls,
    inputPrefixCls: customizeInputPrefixCls,
    size,
    ...restProps
  } = props;

  const suffixIcon = visibilityToggle && getIcon('sm-input-password');

  const omittedProps: InputProps = {
    ...omit(restProps, ['iconRender', 'visibilityToggle']),
    type: visible ? 'text' : 'password',
    suffix: <>{suffixIcon}</>,
    disabled,
  };

  if (size) {
    omittedProps.size = size;
  }

  return <Input ref={composeRef(ref, inputRef)} {...omittedProps} />;
});

if (process.env.NODE_ENV !== 'production') {
  Password.displayName = 'Input.Password';
}

export default Password;
