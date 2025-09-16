import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { withStyles } from '@microui-kit/with-styles'
import { useRouter } from '@microui-kit/use-router'
import Menu from '@sigmaui-kit/menu'

import { routeMap } from '@docs/router/routeMap'

import { styles, type SidebarProps } from './styles'

const Sidebar: FC<SidebarProps> = ({ prefixCls = 'sm-sidebar', className, classes }) => {
  const router = useRouter()
  const { pathname } = router

  return (
    <div className={classNames(prefixCls, className, classes?.wrapper)}>
      <Menu
        mode="inline"
        value={pathname}
        items={[
          {
            label: 'Get Started',
            children: [
              {
                label: 'Introduction',
                key: routeMap.introductionPath,
              },
              {
                label: 'Installation',
                key: routeMap.installationPath,
              },
            ],
          },
          {
            label: 'Theming',
            children: [
              {
                label: 'Sizes',
                key: routeMap.theming.sizes,
              },
              {
                label: 'Variants',
                key: routeMap.theming.variants,
              },
            ],
          },
          {
            label: 'Components',
            children: [
              {
                label: 'Box',
                key: routeMap.component.box,
              },
              {
                label: 'Button',
                key: routeMap.component.button,
              },
              {
                label: 'Input',
                key: routeMap.component.input,
              },
              {
                label: 'Text',
                key: routeMap.component.text,
              },
              {
                label: 'Select',
                key: routeMap.component.select,
              },
              {
                label: 'Slider',
                key: routeMap.component.slider,
              },
              {
                label: 'Form',
                key: routeMap.component.form,
              },
              {
                label: 'Tooltip',
                key: routeMap.component.tooltip,
              },
            ],
          },
        ]}
      />
    </div>
  )
}

Sidebar.displayName = 'Sidebar'

export default withStyles<SidebarProps>(styles)(Sidebar)
