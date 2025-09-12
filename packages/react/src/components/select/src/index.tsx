import React, { FC } from 'react'
import classNames from 'classnames'
import RcSelect from '@rc-component/select'
import { getRestProps } from '@microui-kit/helpers'
import { withStyles } from '@sigmaui-kit/with-styles'
import Icon from '@sigmaui-kit/icon'

import { styles, type SelectProps } from 'packages/common/components/select/styles'

const SigmaSelect: FC<SelectProps> = ({
  prefixCls,
  className,
  classes,
  options,
  placeholder,
  allowClear,
  ...selectProps
}) => {
  const restProps = getRestProps(selectProps)

  const suffixIcon = (
    <Icon
      icon="chevron-down"
      _style={{
        wrapper: {
          '& svg': {
            width: 14,
            height: 14
          }
        }
      }}
    />
  )

  const clearIcon = (
    <Icon
      icon="x-mark"
      _style={{
        wrapper: {
          '& svg': {
            width: 14,
            height: 14
          }
        }
      }}
    />
  )

  const menuItemSelectedIcon = (
    <Icon
      icon="check"
      _style={{
        wrapper: {
          '& svg': {
            width: 14,
            height: 14
          }
        }
      }}
    />
  )

  const mergedAllowClear = allowClear === true ? { clearIcon } : allowClear

  return (
    <RcSelect
      prefixCls={prefixCls}
      className={classNames(className, classes?.wrapper)}
      popupClassName={classes?.popup}
      options={options}
      placeholder={placeholder}
      classNames={{}}
      allowClear={mergedAllowClear}
      suffixIcon={suffixIcon}
      menuItemSelectedIcon={menuItemSelectedIcon}
      {...restProps}
    />
  )
}

SigmaSelect.displayName = 'Select'

export default withStyles<SelectProps>(styles)(SigmaSelect)
