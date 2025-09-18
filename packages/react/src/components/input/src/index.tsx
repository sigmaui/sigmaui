import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import RcInput, { type InputRef } from '@rc-component/input';
import { withStyles } from '@sigmaui-kit/with-styles';
import { getRestProps } from '@microui-kit/helpers';

import { styles, type InputProps, type InputTypes } from './styles';

export type {
  InputRef,
  InputTypes,
  InputProps
};

const Input: FC<InputProps> = ({
  prefixCls,
  className,
  classes,
  status,
  inputRef,
  ...inputProps
}) => {
  const restProps = getRestProps(inputProps)

  // if (status) {
  //   restProps['data-status'] = status
  // }

  return (
    <RcInput
      prefixCls={prefixCls}
      ref={inputRef}
      className={classNames(className, classes?.wrapper, {
        [`_${status}`]: status
      })}
      classNames={classes}
      {...restProps}
    />
  )
}

Input.displayName = 'Input'

export default withStyles<InputProps>(styles)(Input)
