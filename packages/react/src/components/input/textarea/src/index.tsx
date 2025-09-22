import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import RcTextArea from '@rc-component/textarea';
import { getRestProps } from '@microui-kit/helpers';
import { withStyles } from '@sigmaui-kit/with-styles';
import XMarkIcon from '@sigmaui-kit/icons/XMarkIcon';

import { styles, type TextareaProps } from './styles';

const Textarea: FC<TextareaProps> = ({
  prefixCls,
  className,
  classes,
  t,
  status,
  maxLength,
  allowClear,
  ...inputProps
}) => {
  const restProps = getRestProps(inputProps);

  if (maxLength) {
    restProps.showCount = true;
  }

  const mergedAllowClear = allowClear === true ? { clearIcon: <XMarkIcon/> } : allowClear;

  return (
    <RcTextArea
      prefixCls={prefixCls}
      className={classNames(className, classes?.wrapper, {
        [`_${status}`]: status
      })}
      classNames={{
        affixWrapper: classes?.affixWrapper,
        suffix: classes?.suffix,
        count: classes?.count
      }}
      maxLength={maxLength}
      allowClear={mergedAllowClear}
      {...restProps}
    />
  )
}

Textarea.displayName = 'Textarea';

export default withStyles<TextareaProps>(styles)(Textarea)
