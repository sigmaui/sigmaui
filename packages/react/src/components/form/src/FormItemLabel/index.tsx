import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { withStyles } from '@sigmaui-kit/with-styles';
import { getRestProps } from '@microui-kit/helpers';

import { styles, type FormItemLabelProps } from './styles';

const FormItemLabel: FC<FormItemLabelProps> = ({
  prefixCls,
  className,
  classes,
  id,
  children,
  required,
  htmlFor,
  ...formItemLabelProps
}) => {
  const restProps = getRestProps(formItemLabelProps)

  const classArgs: any = {};

  if (required && classes?.required) {
    (classArgs as any)[classes?.required] = true
  }

  return (
    <label
      htmlFor={htmlFor}
      id={id}
      className={classNames(prefixCls, className, classes?.wrapper, classArgs)}
      {...restProps}
    >
      {children}
    </label>
  )
}

FormItemLabel.displayName = 'FormItemLabel'

export default withStyles<FormItemLabelProps>(styles)(FormItemLabel)
