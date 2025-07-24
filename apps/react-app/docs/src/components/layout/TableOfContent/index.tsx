import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { withStyles } from '@microui-kit/with-styles'
import { useRouter } from '@microui-kit/use-router'
import SegmentGroup from '@sigmaui-kit/segment-group'
import Text from '@sigmaui-kit/text'

import { styles, type TableOfContentProps } from './styles'
import { type TocEntry } from './types'

interface FlattenedTocEntry extends Omit<TocEntry, 'items'> {
  depth: number
}

const flattenTocEntries = (entries: TocEntry[] = [], depth = 0): FlattenedTocEntry[] =>
  entries.reduce<FlattenedTocEntry[]>(
    (acc, entry) =>
      acc.concat({ label: entry.title, url: entry.url, depth }, flattenTocEntries(entry.items, depth + 1)),
    []
  )

const TableOfContent: FC<TableOfContentProps> = ({
  prefixCls = 'sm-table-of-content',
  className,
  classes,
  entries = []
}) => {
  const router = useRouter()
  const { pathname } = router

  return (
    <div className={classNames(prefixCls, className, classes?.wrapper)}>
      <Text
        size="lg"
        fontWeight={600}
      >
        On this page
      </Text>
      <SegmentGroup
        orientation="vertical"
        options={flattenTocEntries(entries)}
      />
    </div>
  )
}

TableOfContent.displayName = 'TableOfContent'

export default withStyles<TableOfContentProps>(styles)(TableOfContent)
