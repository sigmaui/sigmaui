import React, { useState, Fragment } from 'react'
import Box from '@microui-kit/box'
import Select from '@sigmaui-kit/select'
import ComponentPreview from '@docs/components/ComponentPreview'
import { selectContent } from '..'

export const Demo: React.FC<any> = ({ control }) => {
  console.log('control', control)

  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}
    >
      <Select
        allowClear
        size={control.state.size}
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
            width: 200
          }
        }}
      />
      <Select
        allowClear
        mode="multiple"
        size={control.state.size}
        placeholder="Multiple selection"
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
          {
            label: 'Large2',
            value: 'large2',
          },
          {
            label: 'Large3',
            value: 'large3',
          },
          {
            label: 'Large4',
            value: 'large4',
          },
          {
            label: 'Large5',
            value: 'large5',
          },
        ]}
        _style={{
          wrapper: {
            width: 200
          }
        }}
      />
      <Select
        allowClear
        mode="tags"
        size={control.state.size}
        placeholder="Tags mode"
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
          {
            label: 'Large2',
            value: 'large2',
          },
          {
            label: 'Large3',
            value: 'large3',
          },
          {
            label: 'Large4',
            value: 'large4',
          },
          {
            label: 'Large5',
            value: 'large5',
          },
        ]}
        _style={{
          wrapper: {
            width: 200
          }
        }}
      />
    </Box>
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
