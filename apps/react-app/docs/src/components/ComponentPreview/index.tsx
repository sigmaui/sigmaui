import React, { useState } from 'react'
import type { FC, JSX } from 'react'
import classNames from 'classnames'
import { withStyles } from '@microui-kit/with-styles'
import { styles } from './styles'
import { CodeDemo, CodeEditor } from '../common'
import { CodeEnum, ComponentPreviewProps, IData } from './types'
import CodeContent from './children/CodeContent'
import useMicroUI from '@microui-kit/use-micro-ui'

export const replaceProps = (code: string, input: Record<string, any>) => {
  return code.replace(/{props\.(\w+)}/g, (_, key) => {
    if (input[key] === '') {
      return `${key}`
    }
    return Object.prototype.hasOwnProperty.call(input, key) ? `${key}="${input[key]}"` : `undefined`
  })
}

export const transformTabsOptions = (data: IData, previewProps: Record<string, any>) => {
  return [
    {
      label: 'Typescript',
      value: CodeEnum.TYPESCRIPT,
      content: (
        <CodeEditor
          displayLang="React"
          content={data?.code?.[CodeEnum.TYPESCRIPT]}
        />
      ),
    },
    // {
    //   label: 'Javascript',
    //   value: CodeEnum.JAVASCRIPT,
    //   content: (
    //     <CodeEditor
    //       displayLang="Vue"
    //       content={replaceProps(data?.code?.[CodeEnum.JAVASCRIPT], previewProps)}
    //     />
    //   ),
    // },
  ]
}

const ComponentPreview = ({
  prefixCls = 'sm-component-preview',
  className,
  classes,
  data,
  children,
}: ComponentPreviewProps) => {
  const { css } = useMicroUI()
  return (
    <div className={classNames(prefixCls, className, classes?.wrapper)}>
      <CodeDemo
        className={css({
          width: '100%',
          display: 'flex',
          gap: 12,
          padding: 12,
        })}
      >
        {children}
      </CodeDemo>
      <CodeContent
        containerClass={{
          background: 'black',
          padding: 12,
        }}
        // rootProps={{ defaultValue: CodeEnum.REACT }}
        data={data}
      />
    </div>
  )
}

ComponentPreview.displayName = 'ComponentPreview'
export default withStyles<any>(styles)(ComponentPreview)
