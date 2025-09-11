import React, { FC } from 'react'
import classNames from 'classnames'
import RcSelect from '@rc-component/select'
import { withStyles } from '@sigmaui-kit/with-styles'
import { getRestProps } from '@microui-kit/helpers'

import { styles, type SelectProps } from 'packages/common/components/select/styles'

const SigmaSelect: FC<SelectProps> = ({
  prefixCls,
  className,
  classes,
  options,
  placeholder,
  ...selectProps
}) => {
  const restProps = getRestProps(selectProps)

  return (
    <RcSelect
      prefixCls={prefixCls}
      className={classNames(className, classes?.wrapper)}
      popupClassName={classes?.popup}
      options={options}
      placeholder={placeholder}
      classNames={{}}
      {...restProps}
    />
  )
}

SigmaSelect.displayName = 'Select'

export default withStyles<SelectProps>(styles)(SigmaSelect)
