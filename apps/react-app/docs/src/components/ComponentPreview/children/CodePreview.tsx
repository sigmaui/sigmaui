import React, { FC } from 'react'
import { transformTabsOptions } from '..'
import { IData } from '../types'
import Tabs from '@sigmaui-kit/tabs'
import { TabsProps } from '@packages/common/components/tabs/styles'
import Box from '@microui-kit/box'
import { CSSProperties } from 'fela'
type CodePreviewProps = {
  data: IData
  containerClass?: CSSProperties
} & Omit<TabsProps, 'options'>

const CodePreview: FC<CodePreviewProps> = ({ data, containerClass, ...restProps }) => {
  return (
    <Box css={containerClass}>
      <Tabs
        _style={{
          trigger: {
            color: 'white',
          },
        }}
        options={transformTabsOptions(data)}
        {...restProps}
      />
    </Box>
  )
}

export default CodePreview
