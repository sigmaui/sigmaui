import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { withStyles } from '@microui-kit/with-styles'
import { Menu, type MenuItemProps } from '@ark-ui/react'

import { styles, type MenuProps } from 'packages/common/components/menu/styles'
import type { MenuOption } from 'packages/common/components/menu/types'

const SigmaMenu: FC<MenuProps> = ({
  prefixCls = 'sm-menu',
  className,
  classes,
  options = [],
  orientation = 'horizontal',
}) => {
  const renderItems = ({ items = [] }: { items: MenuOption[] }) => {
    return items.map(({ label, value, options }) => {
      if (options) {
        return (
          <Menu.ItemGroup className={classes?.itemGroup}>
            <Menu.ItemGroupLabel className={classes?.itemGroupLabel}>{label}</Menu.ItemGroupLabel>
            {renderItems({ items: options })}
          </Menu.ItemGroup>
        )
      }

      const itemProps: MenuItemProps = {
        className: classes?.item,
        value,
      }

      const isLink = value.startsWith('/')

      if (isLink) {
        itemProps.asChild = true
        itemProps.children = <Link to={value}>{label}</Link>
      } else {
        itemProps.children = label
      }

      return <Menu.Item {...itemProps} />
    })
  }

  return (
    <Menu.Root>
      <Menu.Content
        className={classNames(prefixCls, className, classes?.wrapper)}
        data-orientation={orientation}
      >
        {renderItems({ items: options })}
      </Menu.Content>
    </Menu.Root>
  )
}

SigmaMenu.displayName = 'Menu'

export default withStyles<MenuProps>(styles)(SigmaMenu)
