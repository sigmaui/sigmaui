import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { ReturnTypeUseControl } from '@docs/components/ComponentPreview'
import { IData } from '@docs/components/ComponentPreview/types'
import { ControlComponentType } from '@docs/components/ComponentPreview/shared/controls/declaration'
import { DemoControl } from '@docs/components/ComponentPreview/shared/controls/demo'
import Box from '@microui-kit/box'
import Select from '@sigmaui-kit/select'

type CodeDemoProps<T extends Record<string, any>> = {
  prefixCls?: string
  className?: string
  children?: React.ReactNode
  control: ReturnTypeUseControl<T>
  data: IData
  items: ControlComponentType<T>[]
}
const CodeDemo = <T extends Record<string, any>>({
  prefixCls = 'sm-code-demo',
  className,
  children,
  control,
  items,
}: CodeDemoProps<T>) => {
  return (
    <div className={classNames(prefixCls, className)}>
      <Box
        css={{
          flex: 1,
        }}
      >
        {children}
      </Box>
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        {items?.map((item, idx) => {
          switch (item.type) {
            case 'select':
              return (
                <Select
                  onValueChange={(details) => {
                    console.log('value', details)
                    control.setState({
                      ...control.state,
                      [item.prop]: details?.value?.[0],
                    })
                  }}
                  label={item.label}
                  placeholder="Select Option"
                  options={{
                    items: item.options,
                  }}
                ></Select>
              )
            default:
              return null
          }
        })}
      </Box>
    </div>
  )
}

CodeDemo.displayName = 'CodeDemo'

export default CodeDemo
