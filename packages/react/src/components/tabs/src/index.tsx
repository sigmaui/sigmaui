import React, { useMemo } from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { withStyles } from '@microui-kit/with-styles'
import { Tabs } from '@base-ui-components/react/tabs'

import { styles, type TabsProps } from 'packages/common/components/tabs/styles'

const SigmaTabs: FC<TabsProps> = ({
  prefixCls = 'sm-tabs',
  className,
  classes,
  options = [],
  rootProps = {}
}) => {
  const onValueChange = (value: Tabs.Tab.Value) => {
    console.log('onValueChange', value)
  }

  const { tabs, panels } = useMemo(() => {
    const tabs: any[] = []
    const panels: any[] = []

    options.forEach(({ label, value, content }) => {
      const isLink = value.startsWith('/')

      const tabProps: Tabs.Tab.Props = {
        className: classes?.trigger,
        value,
        children: label
      }

      tabs.push(<Tabs.Tab {...tabProps} />)

      if (content) {
        panels.push(
          <Tabs.Panel
            className={classes?.content}
            value={value}
          >
            {content}
          </Tabs.Panel>
        )
      }
    })

    return {
      tabs,
      panels,
    }
  }, [options])

  return (
    <Tabs.Root
      {...rootProps}
      className={classNames(prefixCls, className, classes?.wrapper)}
      onValueChange={onValueChange}
    >
      <Tabs.List className={classes?.list}>
        {tabs}
        <Tabs.Indicator className={classes?.indicator}/>
      </Tabs.List>
      {panels}
    </Tabs.Root>
  )
}

SigmaTabs.displayName = 'Tabs'

export default withStyles<TabsProps>(styles)(SigmaTabs)
