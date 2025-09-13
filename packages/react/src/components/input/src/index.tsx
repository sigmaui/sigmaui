import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import RcInput from '@rc-component/input'
import { withStyles } from '@microui-kit/with-styles'
import { getRestProps } from '@microui-kit/helpers';

import { styles, type InputProps } from 'packages/common/components/input/styles'

const SigmaInput: FC<InputProps> = ({
  prefixCls,
  className,
  classes,
  ...inputProps
}) => {
  const restProps = getRestProps(inputProps)

  return (
    <RcInput
      prefixCls={prefixCls}
      className={classNames(className, classes?.wrapper)}
      classNames={classes}
      {...restProps}
    />
  )
}

SigmaInput.displayName = 'Input'

export default withStyles<InputProps>(styles)(SigmaInput)
