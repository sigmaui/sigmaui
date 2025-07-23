import React, { useMemo } from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { withStyles } from '@microui-kit/with-styles'
import { Tabs, type TabTriggerProps } from '@ark-ui/react'

import { styles, type TabsProps } from 'packages/common/components/tabs/styles'

const SigmaTabs: FC<TabsProps> = ({ prefixCls = 'sm-tabs', className, classes, options = [], rootProps = {} }) => {
  const onValueChange = ({ value }) => {
    console.log('onValueChange', value)
  }

  const { lazyMount = true, unmountOnExit = true } = rootProps

  const { triggers, contents } = useMemo(() => {
    const triggers: any[] = []
    const contents: any[] = []

    options.forEach(({ label, value, content }) => {
      const isLink = value.startsWith('/')

      const triggerProps: TabTriggerProps = {
        className: classes?.trigger,
        value,
      }

      if (isLink) {
        triggerProps.asChild = true
        triggerProps.children = <Link to={value}>{label}</Link>
      } else {
        triggerProps.children = label
      }

      triggers.push(<Tabs.Trigger {...triggerProps} />)

      if (content) {
        contents.push(
          <Tabs.Content
            className={classes?.content}
            value={value}
          >
            {content}
          </Tabs.Content>,
        )
      }
    })

    return {
      triggers,
      contents,
    }
  }, [options])

  return (
    <Tabs.Root
      {...rootProps}
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      className={classNames(prefixCls, className, classes?.wrapper)}
      onValueChange={onValueChange}
    >
      <Tabs.List className={classes?.list}>
        {triggers}
        <Tabs.Indicator className={classes?.indicator} />
      </Tabs.List>
      {contents}
    </Tabs.Root>
  )
}

SigmaTabs.displayName = 'Tabs'

export default withStyles<TabsProps>(styles)(SigmaTabs)
