import React, { useState } from 'react'
import Select from '@sigmaui-kit/select'
import ComponentPreview from '@docs/components/ComponentPreview'
import { selectContent } from '..'

export const Demo: React.FC<any> = ({ control }) => {
  console.log('control', control)

  return (
    <Select
      size={control.state.size}
      placeholder="Select size"
      options={[
        {
          label: 'Small',
          value: 'small',
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
    ></Select>
  )
}
export const UsageSelectComponent = () => {
  const [value, setValue] = useState<number[] | undefined>(undefined)
  return (
    <>
      <ComponentPreview<{ size: string }>
        data={selectContent.usage}
        items={[
          {
            initialValue: 'small',
            prop: 'size',
            type: 'slider',
            defaultValue: [0],
            mappingData: {
              0: 'sm',
              50: 'md',
              100: 'lg',
            },
            label: 'Size',
            step: 50,
            marks: {
              items: [
                {
                  value: 0,
                },
                {
                  value: 50,
                },
                {
                  value: 100,
                },
              ],
            },
          },
        ]}
      >
        {({ control }) => <Demo control={control}/>}
      </ComponentPreview>
    </>
  )
}
