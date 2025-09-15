import React, { Fragment, useState, useRef, useCallback } from 'react';
import type { FC } from 'react';
import { withStyles } from '@sigmaui-kit/with-styles';
import Input, { type InputRef } from '@sigmaui-kit/input';
import Icon from '@sigmaui-kit/icon';
import { getRestProps } from '@microui-kit/helpers';

import { styles, type PasswordProps } from './styles';

const defaultIconRender = (visible: boolean): React.ReactNode => {
  if (visible) {
    return 'eye'
  }

  return 'eye-off'
};

const Password: FC<PasswordProps> = ({
  className,
  classes,
  suffix,
  action = 'click',
  iconRender = defaultIconRender,
  ...inputProps
}) => {
  const restProps = getRestProps(inputProps);

  const [visible, setVisible] = useState(() => false);
  const inputRef = useRef<InputRef>(null);

  const onVisibleChange = useCallback(() => {
    setVisible((visible) => !visible);
  }, []);

  const handleShow = useCallback(() => {
    setVisible(true);
  }, []);

  const handleHide = useCallback(() => {
    setVisible(false);
  }, []);

  const iconProps = {
    onMouseDown: (e: React.MouseEvent) => {
      e.preventDefault();
    },
    onMouseUp: (e: React.MouseEvent) => {
      e.preventDefault();
    }
  }

  if (action === 'click') {
    (iconProps as any).onClick = onVisibleChange
  }

  if (action === 'pointer') {
    (iconProps as any).onPointerDown = handleShow;
    (iconProps as any).onPointerUp = handleHide;
    (iconProps as any).onPointerLeave = handleHide;
  }

  restProps.type = visible ? 'text' : 'password';
  restProps.suffix = (
    <Fragment>
      <Icon
        icon={iconRender(visible)}
        {...iconProps}
        _style={{
          wrapper: {
            cursor: 'pointer',
            color: visible ? 'base' : 'icon.default',

            '&:hover': {
              color: !visible ? 'icon.hover' : undefined
            },

            '& svg': {
              width: 16,
              height: 16
            }
          }
        }}
      />
      {suffix}
    </Fragment>
  )

  return (
    <Input
      className={className}
      inputRef={inputRef}
      {...restProps}
    />
  )
}

Password.displayName = 'Password'

export default withStyles<PasswordProps>(styles)(Password)
