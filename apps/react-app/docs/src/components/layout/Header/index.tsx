import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { withStyles } from '@microui-kit/with-styles'
import { useRouter } from '@microui-kit/use-router'
import SegmentGroup from '@sigmaui-kit/segment-group'
import Menu from '@sigmaui-kit/menu'

import { routeMap } from '@docs/router/routeMap'

import { styles, type HeaderProps } from './styles'

const Header: FC<HeaderProps> = ({ prefixCls = 'sm-header', className, classes }) => {
  const router = useRouter()
  const { pathname } = router
  const isShowSegmentDocs = pathname.startsWith('/docs')

  return (
    <div className={classNames(prefixCls, className, classes?.wrapper)}>
      <div className={classes?.top}>
        <div className={classes?.left}>
          <div className={classes?.logo}>
            <img
              alt="logo"
              src="/assets/images/logo.png"
            />
          </div>
          <Menu
            mode="horizontal"
            items={[
              {
                label: 'Docs',
                key: routeMap.introductionPath,
              },
              {
                label: 'Playground',
                key: routeMap.playgroundPath,
              },
              {
                label: 'Blogs',
                key: routeMap.blogPath,
              },
            ]}
            _style={{
              wrapper: {
                width: '100%'
              }
            }}
          />
        </div>
      </div>
      {isShowSegmentDocs && (
        <SegmentGroup
          isThumbLine
          defaultValue={pathname}
          options={[
            {
              label: 'Get Started',
              value: routeMap.introductionPath,
            },
            {
              label: 'Components',
              value: routeMap.componentPath,
            },
            {
              label: 'Blocks',
              value: routeMap.blockPath,
            },
            {
              label: 'Charts',
              value: routeMap.chartPath,
              disabled: true
            },
            {
              label: 'Templates',
              value: routeMap.templatePath,
            },
          ]}
          _style={{
            wrapper: {
              marginTop: 6,
              gap: 24,
            },
          }}
        />
      )}
    </div>
  )
}

Header.displayName = 'Header'

export default withStyles<HeaderProps>(styles)(Header)
