import React, { FC, useEffect, useRef } from 'react'
import classNames from 'classnames'
import RcSelect from '@rc-component/select'
import { withStyles } from '@microui-kit/with-styles'

import { styles, type SelectProps } from 'packages/common/components/select/styles'

const SigmaSelect: FC<SelectProps> = ({
  prefixCls = 'sm-select',
  className,
  classes,
  options,
  placeholder
}) => {
  return (
    <RcSelect
      prefixCls={prefixCls}
      className={classNames(className, classes?.wrapper)}
      popupClassName={classes?.popup}
      options={options}
      placeholder={placeholder}
      classNames={{}}
    />
  )
}

SigmaSelect.displayName = 'Select'

export default withStyles<SelectProps>(styles)(SigmaSelect)
