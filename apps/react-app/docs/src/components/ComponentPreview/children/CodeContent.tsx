import React, { memo, JSX } from 'react'
import { ReturnTypeUseControl, transformTabsOptions } from '..'
import { IData } from '../types'
import Tabs from '@sigmaui-kit/tabs'
import { TabsProps } from '@packages/common/components/tabs/styles'
import Box from '@microui-kit/box'
import { CSSProperties } from 'fela'
type CodeContentProps<T extends Record<string, any>> = {
  data: IData
  containerClass?: CSSProperties
  previewProps: ReturnTypeUseControl<T>['state']
} & Omit<TabsProps, 'options'>

const CodeContent = <T extends Record<string, any>>({
  data,
  containerClass,
  previewProps,
  ...restProps
}: CodeContentProps<T>) => {
  return (
    <Box css={containerClass}>
      <Tabs
        _style={{
          trigger: {
            color: 'white',
          },
        }}
        options={transformTabsOptions(data, previewProps)}
        {...restProps}
      />
    </Box>
  )
}

export default memo(CodeContent) as <T extends Record<string, any>>({
  data,
  containerClass,
  previewProps,
  ...restProps
}: CodeContentProps<T>) => JSX.Element
