import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { useRouter } from '@microui-kit/use-router'
import { withStyles } from '@sigmaui-kit/with-styles'
import RcMenu from '@rc-component/menu'
import { getRestProps } from '@microui-kit/helpers'

import { styles, type MenuProps } from 'packages/common/components/menu/styles'

const SigmaMenu: FC<MenuProps> = ({
  prefixCls,
  className,
  classes,
  items = [],
  ...menuProps
}) => {
  const restProps = getRestProps(menuProps)
  const router = useRouter()

  const onSelect = ({ key }) => {
    console.log('onSelect', key)

    const isLink = key?.startsWith?.('/');

    if (isLink) {
      router.push(key)
    }
  }

  return (
    <RcMenu
      prefixCls={prefixCls}
      className={classNames(className, classes?.wrapper)}
      items={items}
      classNames={classes}
      onSelect={onSelect}
      overflowedIndicatorPopupClassName={classes?.popup}
      {...restProps}
    />
  )
}

SigmaMenu.displayName = 'Menu'

export default withStyles<MenuProps>(styles)(SigmaMenu)
