import React from 'react'
import type { FC } from 'react'
import * as runtime from 'react/jsx-runtime'
import classNames from 'classnames'
import { withStyles } from '@microui-kit/with-styles'

import { MDXComponents } from '@docs/components/mdx'

import { styles, type MDXContentProps } from './styles'

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

const MDXContent: FC<MDXContentProps> = ({
  prefixCls = 'sm-mdx-content',
  className,
  classes,
  code
}) => {
  const Component = useMDXComponent(code)

  return (
    <div className={classNames(prefixCls, className, classes?.wrapper)}>
      <Component
        components={{
          ...MDXComponents
        }}
      />
    </div>
  )
}

MDXContent.displayName = 'MDXContent'

export default withStyles<MDXContentProps>(styles)(MDXContent)
