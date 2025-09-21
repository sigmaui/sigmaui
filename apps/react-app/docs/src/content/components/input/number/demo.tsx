import React from 'react';
import ComponentPreview from '@docs/components/ComponentPreview';
import Number from '@sigmaui-kit/input-number';
import { inputContent } from '..';

export const Demo: React.FC<any> = ({ control }) => {
  return (
    <Number
      size={control.state.size}
      placeholder="Number"
    />
  )
}
export const NumberComponent = () => {
  return (
    <>
      <ComponentPreview<{ size: string }>
        data={inputContent.password}
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
