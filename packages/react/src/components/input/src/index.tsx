import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import RcInput from '@rc-component/input'
import { withStyles } from '@sigmaui-kit/with-styles'
import { getRestProps } from '@microui-kit/helpers';

import { styles, type InputProps } from 'packages/common/components/input/styles'

const SigmaInput: FC<InputProps> = ({
  prefixCls,
  className,
  classes,
  status,
  ...inputProps
}) => {
  const restProps = getRestProps(inputProps)

  // if (status) {
  //   restProps['data-status'] = status
  // }

  return (
    <RcInput
      prefixCls={prefixCls}
      className={classNames(className, classes?.wrapper, {
        [`_${status}`]: status
      })}
      classNames={classes}
      {...restProps}
    />
  )
}

SigmaInput.displayName = 'Input'

export default withStyles<InputProps>(styles)(SigmaInput)
