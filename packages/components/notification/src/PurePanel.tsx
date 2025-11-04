import * as React from 'react';
import SelectionCheckCircleCheckOutlinedIcon from '@sigma-ui-kit/icons/SelectionCheckCircleCheckOutlinedIcon';
import AlertTriangleOutlinedIcon from '@sigma-ui-kit/icons/AlertTriangleOutlinedIcon';
import AlertCircleOutlineIcon from '@sigma-ui-kit/icons/AlertCircleOutlineIcon';
import OctagonXMarkOutlinedIcon from '@sigma-ui-kit/icons/OctagonXMarkOutlinedIcon';
import XMarkIcon from '@sigma-ui-kit/icons/XMarkIcon';
import SpinnerScaleFilledIcon from '@sigma-ui-kit/icons/SpinnerScaleFilledIcon';
import { classnames } from '@sigma-ui-kit/theme';

import type { IconType } from './types';

export const TypeIcon = {
  info: <AlertCircleOutlineIcon />,
  success: <SelectionCheckCircleCheckOutlinedIcon />,
  error: <OctagonXMarkOutlinedIcon />,
  warning: <AlertTriangleOutlinedIcon />,
  loading: <SpinnerScaleFilledIcon />,
};

export function getCloseIcon(prefixCls: string, closeIcon?: React.ReactNode): React.ReactNode {
  if (closeIcon === null || closeIcon === false) {
    return null;
  }
  return closeIcon || <XMarkIcon className={`${prefixCls}-close-icon`} />;
}

export interface PureContentProps {
  prefixCls: string;
  icon?: React.ReactNode;
  message?: React.ReactNode;
  description?: React.ReactNode;
  /** @deprecated Please use `actions` instead */
  btn?: React.ReactNode;
  actions?: React.ReactNode;
  type?: IconType;
  role?: 'alert' | 'status';
}

const typeToIcon = {
  success: SelectionCheckCircleCheckOutlinedIcon,
  info: AlertCircleOutlineIcon,
  error: OctagonXMarkOutlinedIcon,
  warning: AlertTriangleOutlinedIcon,
};

export const PureContent: React.FC<PureContentProps> = props => {
  const { prefixCls, icon, type, message, description, actions, role = 'alert' } = props;
  let iconNode: React.ReactNode = null;
  if (icon) {
    iconNode = <span className={`${prefixCls}-icon`}>{icon}</span>;
  } else if (type) {
    iconNode = React.createElement(typeToIcon[type as keyof typeof typeToIcon] || null, {
      className: classnames(`${prefixCls}-icon`, `${prefixCls}-icon-${type}`),
    });
  }
  return (
    <div className={classnames({ [`${prefixCls}-with-icon`]: iconNode })} role={role}>
      {iconNode}
      <div className={`${prefixCls}-message`}>{message}</div>
      {description && <div className={`${prefixCls}-description`}>{description}</div>}
      {actions && <div className={`${prefixCls}-actions`}>{actions}</div>}
    </div>
  );
};
