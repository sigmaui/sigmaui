import React, { useMemo } from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { withStyles } from '@microui-kit/with-styles'
import Tabs from '@rc-component/tabs'

import { styles, type TabsProps } from 'packages/common/components/tabs/styles'

const SigmaTabs: FC<TabsProps> = ({ prefixCls = 'sm-tabs', className, classes, options = [] }) => {
  const onValueChange = ({ value }) => {
    console.log('onValueChange', value)
  }

  const items = useMemo(() => {
    return options.map(({ label, value, content }) => {
      const isLink = value.startsWith('/')

      const tabPaneProps = {
        className: classes?.trigger,
        value,
      }

      return {
        label,
        key: value,
        children: content
      }
    })
  }, [options])

  return (
    <Tabs
      destroyOnHidden
      prefixCls={prefixCls}
      className={classNames(className, classes?.wrapper)}
      classNames={{
        // pane: classes?.pane,
        header: classes?.header,
        item: classes?.item,
        content: classes?.content,
        indicator: classes?.indicator
      }}
      items={items}
    />
  )
}

SigmaTabs.displayName = 'Tabs'

export default withStyles<TabsProps>(styles)(SigmaTabs)
