import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { withStyles } from '@microui-kit/with-styles'
import { styles, type ComponentPreviewProps } from './styles'
import { CodeDemo, CodeEditor } from '../common'
import { CodeEnum, IData } from './types'
import CodePreview from './children/CodePreview'

export const transformTabsOptions = (data: IData) => {
  return [
    {
      label: 'React',
      value: CodeEnum.REACT,
      content: (
        <CodeEditor
          displayLang="React"
          content={data?.code?.[CodeEnum.REACT]}
        />
      ),
    },
    {
      label: 'Vue',
      value: CodeEnum.VUE,
      content: (
        <CodeEditor
          displayLang="Vue"
          content={data?.code?.[CodeEnum.VUE]}
        />
      ),
    },
  ]
}
const ComponentPreview: FC<ComponentPreviewProps> = ({
  prefixCls = 'sm-component-preview',
  className,
  classes,
  data,
}) => {
  console.log('data', data)
  return (
    <div className={classNames(prefixCls, className, classes?.wrapper)}>
      <CodeDemo
        data={data}
        _style={{
          wrapper: {
            padding: 12,
          },
        }}
      >
        CodeDemo
      </CodeDemo>
      <CodePreview
        containerClass={{
          background: 'black',
          padding: 12,
        }}
        rootProps={{ defaultValue: CodeEnum.REACT }}
        data={data}
      />
    </div>
  )
}

ComponentPreview.displayName = 'ComponentPreview'

export default withStyles<ComponentPreviewProps>(styles)(ComponentPreview)
