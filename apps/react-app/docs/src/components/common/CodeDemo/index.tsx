import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { withStyles } from '@microui-kit/with-styles'

import { styles, type CodeDemoProps } from './styles'

const CodeDemo: FC<CodeDemoProps> = ({ prefixCls = 'sm-code-demo', className, children, classes }) => {
  return <div className={classNames(prefixCls, className, classes?.wrapper)}>{children}</div>
}

CodeDemo.displayName = 'CodeDemo'

export default withStyles<CodeDemoProps>(styles)(CodeDemo)
