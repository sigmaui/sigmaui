import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { withStyles } from '@microui-kit/with-styles'
import Tabs from '@sigmaui-kit/tabs'

import { styles, type CodeHighlightTabsProps } from './styles'

const CodeHighlightTabs: FC<CodeHighlightTabsProps> = ({
  prefixCls = 'sm-highlight-tabs',
  className,
  classes,
  data,
}) => {
  const code = data?.code

  return (
    <div className={classNames(prefixCls, className, classes?.wrapper)}>
      <Tabs
        options={[
          {
            label: 'React',
            value: 'react',
            content: code?.react,
          },
          {
            label: 'Vue',
            value: 'vue',
            content: code?.vue,
          },
        ]}
        rootProps={{
          defaultValue: 'react',
        }}
        _style={{
          content: {
            padding: 12,
          },
        }}
      />
    </div>
  )
}

CodeHighlightTabs.displayName = 'CodeHighlightTabs'

export default withStyles<CodeHighlightTabsProps>(styles)(CodeHighlightTabs)
