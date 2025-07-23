import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { withStyles } from '@microui-kit/with-styles'

import TableOfContent from '../TableOfContent'

import { styles, type PageProps } from './styles'

const Page: FC<PageProps> = ({ prefixCls = 'sm-page', className, children, classes }) => {
  return (
    <div className={classNames(prefixCls, className, classes?.wrapper)}>
      <div className={classes?.content}>
        {children}
      </div>
      <TableOfContent
        _style={{
          wrapper: {
            position: 'absolute',
            top: 0,
            right: 0,
            width: 150,
          },
        }}
      />
    </div>
  )
}

Page.displayName = 'Page'

export default withStyles<PageProps>(styles)(Page)
