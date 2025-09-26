import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import RcInput, { type InputRef } from '@rc-component/input';
import { getRestProps } from '@microui-kit/helpers';
import { withStyles } from '@sigmaui-kit/with-styles';
import XMarkIcon from '@sigmaui-kit/icons/XMarkIcon';

import { type InputProps, type InputTypes, styles } from './styles';

export type { InputRef, InputTypes, InputProps };

const Input: FC<InputProps> = ({ prefixCls, className, classes, status, inputRef, allowClear, ...inputProps }) => {
  const restProps = getRestProps(inputProps);

  // if (status) {
  //   restProps['data-status'] = status
  // }

  const mergedAllowClear = allowClear === true ? { clearIcon: <XMarkIcon /> } : allowClear;

  return (
    <RcInput
      prefixCls={prefixCls}
      ref={inputRef}
      className={classNames(className, classes?.wrapper, {
        [`_${status}`]: status,
      })}
      classNames={classes}
      allowClear={mergedAllowClear}
      {...restProps}
    />
  );
};

Input.displayName = 'Input';

export default withStyles<InputProps>(styles)(Input);
