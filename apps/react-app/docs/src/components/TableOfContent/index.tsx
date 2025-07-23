import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { withStyles } from '@microui-kit/with-styles'
import { useRouter } from '@microui-kit/use-router'
import SegmentGroup from '@sigmaui-kit/segment-group'
import Menu from '@sigmaui-kit/menu'

import { routeMap } from '@docs/router/routeMap'

import { styles, type TableOfContentProps } from './styles'

const TableOfContent: FC<TableOfContentProps> = ({ prefixCls = 'sm-table-of-content', className, classes }) => {
  const router = useRouter()
  const { pathname } = router


  return (
    <div className={classNames(prefixCls, className, classes?.wrapper)}>

    </div>
  )
}

TableOfContent.displayName = 'TableOfContent'

export default withStyles<TableOfContentProps>(styles)(TableOfContent)
