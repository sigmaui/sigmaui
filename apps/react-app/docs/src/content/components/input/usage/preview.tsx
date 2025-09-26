import React from 'react'
import Box from '@microui-kit/box'
import ComponentPreview from '@docs/components/ComponentPreview'
import Input from '@sigmaui-kit/input'
import InputNumber from '@sigmaui-kit/input-number'
import Textarea from '@sigmaui-kit/textarea'
import code from './code'
export const Demo: React.FC<any> = () => {
  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <Input placeholder="Basic usage" />
      <Input
        showCount
        allowClear
        maxLength={10}
        placeholder="Show count"
      />
      <InputNumber placeholder="Number" />
      <Textarea
        // maxLength={1000}
        // autoSize={{
        //   minRows: 2
        // }}
        allowClear
        placeholder="Textarea"
      />
    </Box>
  )
}
export default function UsageInputComponent() {
  return (
    <>
      <ComponentPreview data={code}>
        <Demo />
      </ComponentPreview>
    </>
  )
}
