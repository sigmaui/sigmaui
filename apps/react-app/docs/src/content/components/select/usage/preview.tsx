import React, { useState, Fragment } from 'react'
import Box from '@microui-kit/box'
import Select from '@sigmaui-kit/select'
import ComponentPreview from '@docs/components/ComponentPreview'
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
      <Select
        allowClear
        placeholder="Select size Select size Select size Select size"
        options={[
          {
            label: 'Small Small Small Small Small Small',
            value: 'small',
            // disabled: true
          },
          {
            label: 'Middle',
            value: 'middle',
          },
          {
            label: 'Large',
            value: 'large',
          },
        ]}
        _style={{
          wrapper: {
            width: 200,
          },
        }}
      />
      <Select
        allowClear
        mode="tags"
        placeholder="Select size Select size Select size Select size"
        options={[
          {
            label: 'Small Small Small Small Small Small',
            value: 'small',
            // disabled: true
          },
          {
            label: 'Middle',
            value: 'middle',
          },
          {
            label: 'Large',
            value: 'large',
          },
        ]}
        _style={{
          wrapper: {
            width: 200,
          },
        }}
      />
    </Box>
  )
}
export default function Usage() {
  const [value, setValue] = useState<number[] | undefined>(undefined)
  return (
    <>
      <ComponentPreview data={code}>
        <Demo />
      </ComponentPreview>
    </>
  )
}
