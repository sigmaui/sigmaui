import React, { useState } from 'react'
import Loading from '@sigmaui-kit/loading'
import ComponentPreview from '@docs/components/ComponentPreview'
import { loadingContent } from '..'

export const Demo: React.FC<any> = ({ control }) => {
  console.log('control', control)

  return (
    <Loading/>
  )
}
export const UsageLoadingComponent = () => {
  const [value, setValue] = useState<number[] | undefined>(undefined)
  return (
    <>
      <ComponentPreview<{ size: string }>
        data={loadingContent.usage}
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
