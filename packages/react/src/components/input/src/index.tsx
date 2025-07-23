import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { Field } from '@ark-ui/react'
import { withStyles } from '@microui-kit/with-styles'

import { styles, type InputProps } from 'packages/common/components/input/styles'

const SigmaInput: FC<InputProps> = ({ prefixCls = 'sm-input', className, classes, placeholder, disabled }) => {
  return (
    <Field.Input
      className={classNames(prefixCls, className, classes?.wrapper)}
      placeholder={placeholder}
      disabled={disabled}
    />
  )
}

SigmaInput.displayName = 'Input'

export default withStyles<InputProps>(styles)(SigmaInput)
