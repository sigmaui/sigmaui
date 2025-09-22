import React from 'react';
import Box from '@microui-kit/box';
import ComponentPreview from '@docs/components/ComponentPreview';
import Input from '@sigmaui-kit/input';
import InputNumber from '@sigmaui-kit/input-number';
import Textarea from '@sigmaui-kit/textarea';
import { inputContent } from '..';

export const Demo: React.FC<any> = ({ control }) => {
  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}
    >
      <Input
        size={control.state.size}
        placeholder="Basic usage"
      />
      <Input
        showCount
        allowClear
        maxLength={10}
        size={control.state.size}
        placeholder="Show count"
      />
      <InputNumber
        placeholder="Number"
      />
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
export const UsageInputComponent = () => {
  return (
    <>
      <ComponentPreview<{ size: string }>
        data={inputContent.usage}
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
