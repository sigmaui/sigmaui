import React, { useMemo } from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { withStyles } from '@sigmaui-kit/with-styles'
import Tabs from '@rc-component/tabs'

import { styles, type TabsProps } from 'packages/common/components/tabs/styles'

const SigmaTabs: FC<TabsProps> = ({
  prefixCls,
  className,
  classes,
  options = []
}) => {
  const onChange = (value: string | number) => {
    console.log('onChange', value)
  }

  const items = useMemo(() => {
    return options.map(({ label, value, content }) => {
      const isLink = value.startsWith('/')

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
      classNames={classes}
      items={items}
      onChange={onChange}
    />
  )
}

SigmaTabs.displayName = 'Tabs'

export default withStyles<TabsProps>(styles)(SigmaTabs)
