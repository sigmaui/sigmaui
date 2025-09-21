import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { getRestProps } from '@microui-kit/helpers';
import { withStyles } from '@sigmaui-kit/with-styles';
import RcInputNumber from '@rc-component/input-number';
import ChevronUpSingleIcon from '@sigmaui-kit/icons/ChevronUpSingleIcon';
import ChevronDownSingleIcon from '@sigmaui-kit/icons/ChevronDownSingleIcon';

import { styles, type InputNumberProps } from './styles';

export type {
  InputNumberProps
}

const InputNumber: FC<InputNumberProps> = ({
  prefixCls,
  className,
  classes,
  t,
  upIcon = <ChevronUpSingleIcon/>,
  downIcon = <ChevronDownSingleIcon/>,
  size,
  ...inputProps
}) => {
  const restProps = getRestProps(inputProps);

  return (
    <RcInputNumber
      prefixCls={prefixCls}
      size={size}
      className={classNames(className, classes?.wrapper)}
      classNames={{
        affixWrapper: classes?.affixWrapper,
        prefix: classes?.prefix,
        suffix: classes?.suffix,
        actions: classes?.actions
      }}
      upHandler={upIcon}
      downHandler={downIcon}
      {...restProps}
    />
  )
}

InputNumber.displayName = 'InputNumber';

export default withStyles<InputNumberProps>(styles)(InputNumber)
