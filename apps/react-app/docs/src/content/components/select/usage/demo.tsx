import ComponentPreview from '@docs/components/ComponentPreview'
import { selectContent } from '..'
import Select from '@sigmaui-kit/select'
import { useState } from 'react'
export const Demo: React.FC<any> = ({ control }) => {
  return (
    <Select
      size={control.state.size}
      itemGroupLabel="Size"
      placeholder="Select size"
      options={{
        items: [
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
        ],
      }}
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
              0: 'small',
              50: 'middle',
              100: 'large',
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
        {({ control }) => <Demo control={control} />}
      </ComponentPreview>
    </>
  )
}
