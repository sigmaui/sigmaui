import React, { useState } from 'react'
import Form, { FormItemTypeEnum } from '@sigmaui-kit/form'
import Button from '@sigmaui-kit/button'
import ComponentPreview from '@docs/components/ComponentPreview'
import { formContent } from '..'

export const Demo: React.FC<any> = ({ control }) => {
  console.log('control', control)

  return (
    <Form
      name="basic"
      disabled={control.state.disabled}
      items={[
        {
          label: 'Email',
          name: 'email',
          type: FormItemTypeEnum.EMAIL,
          required: true,
          // note: 'Email',
          fieldProps: {
            placeholder: 'Enter email'
          }
        },
        {
          label: 'Password',
          name: 'password',
          type: FormItemTypeEnum.PASSWORD,
          required: true
        }
      ]}
    >
      <Button
        htmlType="submit"
      >
        Submit
      </Button>
    </Form>
  )
}
export const UsageFormComponent = () => {
  const [value, setValue] = useState<number[] | undefined>(undefined)
  return (
    <>
      <ComponentPreview<{ size: string }>
        data={formContent.usage}
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
