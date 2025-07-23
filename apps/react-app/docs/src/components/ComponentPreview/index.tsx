import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { withStyles } from '@microui-kit/with-styles'

import CodeDemo from '../CodeDemo'
import CodeHighlightTabs from '../CodeHighlightTabs'

import { styles, type ComponentPreviewProps } from './styles'

const ComponentPreview: FC<ComponentPreviewProps> = ({
  prefixCls = 'sm-component-preview',
  className,
  classes,
  data,
}) => {
  return (
    <div className={classNames(prefixCls, className, classes?.wrapper)}>
      <CodeDemo
        data={data}
        _style={{
          wrapper: {
            padding: 12,
          },
        }}
      />
      <CodeHighlightTabs
        data={data}
        _style={{
          wrapper: {},
        }}
      />
    </div>
  )
}

ComponentPreview.displayName = 'ComponentPreview'

export default withStyles<ComponentPreviewProps>(styles)(ComponentPreview)
