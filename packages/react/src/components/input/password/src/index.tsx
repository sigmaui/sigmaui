import React, { Fragment, useCallback, useRef, useState } from 'react';
import type { FC } from 'react';
import { getRestProps } from '@microui-kit/helpers';
import { withStyles } from '@sigmaui-kit/with-styles';
import Input, { type InputRef } from '@sigmaui-kit/input';
import EyeVisibilityOutlinedIcon from '@sigmaui-kit/icons/EyeVisibilityOutlinedIcon';
import EyeHiddenOutlinedIcon from '@sigmaui-kit/icons/EyeHiddenOutlinedIcon';
import Tooltip from '@sigmaui-kit/tooltip';
import Icon from '@sigmaui-kit/icon';
import { Locales } from '@sigmaui-kit/locale';

import { type PasswordProps, styles } from './styles';

const defaultIconRender = (visible: boolean): React.ReactNode => {
  if (visible) {
    return <EyeVisibilityOutlinedIcon />;
  }

  return <EyeHiddenOutlinedIcon />;
};

export type { PasswordProps };

const Password: FC<PasswordProps> = ({
  className,
  classes,
  t,
  suffix,
  action = 'click',
  iconRender = defaultIconRender,
  size,
  isTooltip = true,
  ...inputProps
}) => {
  const restProps = getRestProps(inputProps);

  const [visible, setVisible] = useState(false);
  const inputRef = useRef<InputRef>(null);

  const handleVisibleChange = useCallback(() => {
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
    },
  };

  if (action === 'click') {
    (iconProps as any).onClick = handleVisibleChange;
  }

  if (action === 'pointer') {
    (iconProps as any).onPointerDown = handleShow;
    (iconProps as any).onPointerUp = handleHide;
    (iconProps as any).onPointerLeave = handleHide;
  }

  let suffixIcon = (
    <Icon
      icon={iconRender(visible)}
      {...iconProps}
      _style={{
        wrapper: {
          cursor: 'pointer',
          color: visible ? 'base' : 'icon.default',

          '&:hover': {
            color: !visible ? 'icon.hover' : undefined,
          },
        },
      }}
    />
  );

  if (isTooltip) {
    const overlay = t(visible ? Locales.Password.message.hide : Locales.Password.message.show, {
      defaultValue: visible ? 'Hide password' : 'Show password',
    });

    suffixIcon = (
      <Tooltip
        overlay={overlay}
        placement="top"
        size={size}
      >
        {suffixIcon}
      </Tooltip>
    );
  }

  restProps.type = visible ? 'text' : 'password';
  restProps.suffix = (
    <Fragment>
      {suffixIcon}
      {suffix}
    </Fragment>
  );

  return (
    <Input
      className={className}
      inputRef={inputRef}
      size={size}
      {...restProps}
    />
  );
};

Password.displayName = 'Password';

export default withStyles<PasswordProps>(styles)(Password);
