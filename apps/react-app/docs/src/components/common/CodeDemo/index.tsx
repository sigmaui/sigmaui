import React from 'react'
import classNames from 'classnames'
import Box from '@microui-kit/box'
import useMicroUI from '@microui-kit/use-micro-ui'
import { ITheme } from '@packages/common/theme/config'

type CodeDemoProps<T extends Record<string, any>> = {
  prefixCls?: string
  className?: string
  children?: React.ReactNode
}
const CodeDemo = <T extends Record<string, any>>({
  prefixCls = 'sm-code-demo',
  className,
  children,
}: CodeDemoProps<T>) => {
  const { theme }: { theme: ITheme } = useMicroUI()
  return (
    <div className={classNames(prefixCls, className)}>
      <Box
        css={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 200,
        }}
      >
        {children}
      </Box>
    </div>
  )
}

CodeDemo.displayName = 'CodeDemo'

export default CodeDemo
